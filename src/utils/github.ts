const ORG = 'OmniSynth';

type GithubRepo = {
  stargazers_count?: number;
  fork?: boolean;
};

let cachedTotal: Promise<number> | null = null;

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'OmniSynth-website',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

/**
 * Sum stargazers across all public repositories in the organization.
 * Forks are included (stars on forks still count on that repo); private repos are not listed without auth scopes.
 */
export async function fetchOrgTotalStars(org: string = ORG): Promise<number> {
  let page = 1;
  let total = 0;

  while (page <= 20) {
    const url = `https://api.github.com/orgs/${org}/repos?per_page=100&page=${page}&type=public`;
    const res = await fetch(url, { headers: githubHeaders() });

    if (!res.ok) {
      console.warn(`[github] Failed to fetch org stars (${res.status} ${res.statusText})`);
      return total;
    }

    const repos = (await res.json()) as GithubRepo[];
    if (!Array.isArray(repos) || repos.length === 0) break;

    total += repos.reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0);

    if (repos.length < 100) break;
    page += 1;
  }

  return total;
}

/** Build-time memoized total for OmniSynth org. */
export function getOmniSynthOrgStars(): Promise<number> {
  if (!cachedTotal) {
    cachedTotal = fetchOrgTotalStars(ORG).catch((err) => {
      console.warn('[github] Org star sum failed:', err);
      cachedTotal = null;
      return 0;
    });
  }
  return cachedTotal;
}

export function formatStarCount(count: number, locale = 'en'): string {
  try {
    return new Intl.NumberFormat(locale, { notation: count >= 10000 ? 'compact' : 'standard' }).format(count);
  } catch {
    return String(count);
  }
}
