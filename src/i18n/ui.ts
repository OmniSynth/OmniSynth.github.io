import type { Locale } from './config';
import { defaultLocale, isLocale } from './config';

export type { Locale };
export { defaultLocale, locales, localeLabels } from './config';

const ui = {
  zh: {
    'meta.homeTitle': 'Omni Synth — AI Coding 高保真交付与金融量化开源',
    'meta.homeDescription':
      'Omni Synth 开源组织：面向 AI Coding 的高还原设计产物，让零技术背景也能打造生产级应用，并开源量化交易等实用工具、App 与插件。',
    'meta.aboutTitle': '关于我们',
    'meta.productsTitle': '产品与开源',
    'meta.contactTitle': '联系我们',

    'nav.home': '首页',
    'nav.products': '产品',
    'nav.about': '关于',
    'nav.blog': '博客',
    'nav.contact': '联系',
    'nav.github': 'GitHub',

    'blog.listTitle': '博客',
    'blog.listSubtitle': '愿景、进展与开源思考 —— Omni Synth',
    'blog.pageTitle': '博客',
    'blog.pageSuffix': ' — 第 {page} 页',

    'announcement.badge': '开源',
    'announcement.text': 'Omni Synth：重塑程序生产方式，量化平权，人人可用 »',
    'announcement.close': '关闭公告',
    'announcement.starsTitle': 'Omni Synth 组织全部仓库 Star 合计',

    'footer.explore': '探索',
    'footer.community': '社区',
    'footer.team': '团队',
    'footer.terms': '使用条款',
    'footer.privacy': '隐私政策',
    'footer.note': '由 <a class="text-primary underline dark:text-muted" href="https://github.com/OmniSynth">Omni Synth</a> 开源组织维护',

    'home.heroTitleBefore': '用 AI Coding',
    'home.heroTitleAccent': '高保真交付',
    'home.heroTitleAfter': '真实可用的产品',
    'home.heroSubtitle':
      'Omni Synth 是开源组织。我们做面向产品设计与规格的结构化产物，输出 AI Coding tools 能直接高保真还原的结果；让非技术人员也能以零技术背景，把自己的想法做成真正生产级的应用。同时开源量化交易等实用工具、App 与插件。',
    'home.ctaGithub': '访问 GitHub 组织',
    'home.ctaProducts': '查看产品方向',
    'home.noteTitle': '愿景：',
    'home.noteDesc': '重塑程序生产 · 量化平权人人可用 · AI Coding 高保真交付',

    'home.featuresTag': '核心方向',
    'home.featuresTitle': '我们在做什么',
    'home.featuresSubtitle': '从高还原设计产物，到人人可交付的生产级应用，再到量化与实用开源软件。',
    'home.f1Title': '设计产物高保真可还原',
    'home.f1Desc':
      '面向产品设计与规格输出，生成 AI Coding tools 能直接消费并高保真还原的产物。',
    'home.f2Title': '零门槛打造应用',
    'home.f2Desc': '面向非技术人员：无需技术背景，也能把想法做成完整、可上线的生产级应用。',
    'home.f3Title': 'AI Coding 高保真交付',
    'home.f3Desc': '主打可验收、可落地的交付标准，而不是演示级半成品。',
    'home.f4Title': '金融量化开源',
    'home.f4Desc': '开源量化交易相关工具与能力，服务研究与实盘探索。',
    'home.f5Title': '实用工具与 App',
    'home.f5Desc': '面向日常效率与生产力的实用软件、插件与应用，持续开源。',
    'home.f6Title': '开源协作',
    'home.f6Desc': '以 GitHub 组织为中心，发布工具、App、插件，欢迎社区共建。',

    'home.focusTag': '产品线',
    'home.focusTitle': '两条主线，一套开源底盘',
    'home.focus1Title': 'AI Design → Code',
    'home.focus1Desc': '高保真规格与设计产物，服务 AI Coding 工具链，目标是完整、生产级交付。',
    'home.focus2Title': 'Quant & Utility',
    'home.focus2Desc': '量化交易与各类实用软件，以开源方式沉淀可复用能力。',

    'home.stepsTag': '路线图',
    'home.stepsTitle': '从想法到生产级应用',
    'home.step1Title': '规格与设计产物',
    'home.step1Desc': '输出结构化、可机读的设计与规格，贴近现代产品设计与原型工作流。',
    'home.step2Title': 'AI Coding 高保真还原',
    'home.step2Desc': '让 Coding tools 直接消费产物，达到可验收的高还原实现。',
    'home.step3Title': '零技术背景交付',
    'home.step3Desc': '让非技术人员也能按自己的想法，打造真正生产级的应用。',
    'home.step4Title': '开源工具矩阵',
    'home.step4Desc': '持续开源量化工具、实用 App、插件与内部工具。',

    'home.teamTag': '团队',
    'home.teamTitle': '把愿景做成现实的人',
    'home.teamSubtitle': '设计极简，架构硬核——一起重塑生产与量化的门槛。',
    'home.founderName': 'Leon',
    'home.founderRole':
      '产品设计师 · 极致简洁的拥护者。相信少即是多，用克制的设计把复杂想法收成清晰可用的产品。',
    'home.founderContact': 'irez@qq.com',
    'home.techName': 'Moonchild',
    'home.techRole':
      '技术大佬，真正那种。通吃各类架构，工程狂热者——复杂系统是他的主场，硬仗打得越多越兴奋。',

    'home.faqTag': 'FAQ',
    'home.faqTitle': '常见问题',
    'home.faq1Q': 'Omni Synth 是什么？',
    'home.faq1A': '我们是开源组织，品牌名 Omni Synth，聚焦 AI Coding 高保真交付与金融量化开源，并发布实用工具。',
    'home.faq2Q': '和普通设计工具有什么不同？',
    'home.faq2A':
      '我们强调产物能被 AI Coding tools 直接、完整还原；目标是让零技术背景的人也能做出符合想法的生产级应用，而不是停留在原型或演示。',
    'home.faq3Q': '会开源哪些东西？',
    'home.faq3A': '设计/交付相关工具链、量化交易相关能力，以及实用软件、App、插件。',
    'home.faq4Q': '如何参与？',
    'home.faq4A': '访问 GitHub 组织 OmniSynth，关注仓库、提 Issue / PR，或联系发起人与技术领袖。',

    'home.ctaTitle': '一起把 AI Coding 做成可交付的开源基础设施',
    'home.ctaSubtitle': '关注组织动态，参与工具与项目共建。',
    'home.ctaButton': '进入 GitHub',

    'about.tag': '关于 Omni Synth',
    'about.title': '开源组织，专注可交付的 AI 产品与量化工具',
    'about.subtitle':
      '品牌名 Omni Synth。重塑程序生产方式，让量化平权、人人可用；用高还原设计产物，让非技术人员也能打造生产级应用，并开源量化交易等实用工具、App 与插件。',
    'about.statsOpenSource': '开源优先',
    'about.statsDelivery': '交付标准',
    'about.statsDeliveryValue': '高保真',
    'about.statsFocus': '主线方向',
    'about.missionTitle': '使命',
    'about.missionSubtitle': '让设计与规格真正成为 AI 可执行的输入，让想法直接变成生产级应用，并沉淀金融量化与实用工具的开源资产。',
    'about.m1Title': '可还原的规格',
    'about.m1Desc': '高保真设计与规格产物，面向 AI Coding 高保真还原。',
    'about.m2Title': '零门槛生产级应用',
    'about.m2Desc': '面向非技术人员：零技术背景也能做出完全符合想法的生产级应用。',
    'about.m3Title': '开放共享',
    'about.m3Desc': '工具、App、插件持续开源，服务开发者与社区。',
    'about.peopleTitle': '核心成员',
    'about.peopleSubtitle': '极简产品力 × 硬核架构力，驱动 Omni Synth 向前。',

    'products.tag': '产品与开源',
    'products.title': '面向交付的产品方向',
    'products.subtitle': 'AI Design-to-Code、量化开源与实用工具并行推进。',
    'products.p1Title': 'AI Design / Spec 产物',
    'products.p1Desc': '高结构、高还原目标的设计与规格输出，服务 AI Coding 工具链。',
    'products.p2Title': '零门槛生产级应用',
    'products.p2Desc': '让非技术人员也能把想法做成真正可上线的生产级应用。',
    'products.p3Title': '量化交易工具',
    'products.p3Desc': '开源量化相关研究与实用能力。',
    'products.p4Title': '实用效率工具',
    'products.p4Desc': '面向日常效率与生产力场景的实用软件。',
    'products.p5Title': '插件与 App',
    'products.p5Desc': '持续开源我们开发的工具、应用与插件。',
    'products.p6Title': '组织协作底座',
    'products.p6Desc': '以 GitHub 组织托管代码、讨论与版本发布。',
    'products.ctaTitle': '在 GitHub 上查看最新仓库',
    'products.ctaButton': 'OmniSynth 组织',

    'contact.tag': '联系',
    'contact.title': '通过 GitHub 与我们联系',
    'contact.subtitle': '组织、成员都在这里。欢迎 Star、Issue，或直接邮件联系设计侧。',
    'contact.org':
      '重塑程序生产方式；量化平权——让每个人都能用上真正可用的量化。',
    'contact.founder':
      '产品设计师 · 极致简洁拥护者 · irez@qq.com',
    'contact.tech': '技术大佬 · 架构全能 · 技术狂人',
  },
  en: {
    'meta.homeTitle': 'Omni Synth — AI Coding High-Fidelity Delivery & Open Quant',
    'meta.homeDescription':
      'Omni Synth is an open-source organization building AI-coding-ready design artifacts so non-technical people can ship production-grade apps—plus quant trading tools, apps, and plugins.',
    'meta.aboutTitle': 'About',
    'meta.productsTitle': 'Products & Open Source',
    'meta.contactTitle': 'Contact',

    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.github': 'GitHub',

    'blog.listTitle': 'Blog',
    'blog.listSubtitle': 'Vision, progress, and open-source notes — Omni Synth',
    'blog.pageTitle': 'Blog',
    'blog.pageSuffix': ' — Page {page}',

    'announcement.badge': 'Open Source',
    'announcement.text': 'Omni Synth: rewrite how software is made. Quant for everyone »',
    'announcement.close': 'Dismiss announcement',
    'announcement.starsTitle': 'Total stars across all Omni Synth repositories',

    'footer.explore': 'Explore',
    'footer.community': 'Community',
    'footer.team': 'Team',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy Policy',
    'footer.note':
      'Maintained by the <a class="text-primary underline dark:text-muted" href="https://github.com/OmniSynth">Omni Synth</a> open-source organization',

    'home.heroTitleBefore': 'AI Coding for',
    'home.heroTitleAccent': 'high-fidelity delivery',
    'home.heroTitleAfter': 'of real products',
    'home.heroSubtitle':
      'Omni Synth is an open-source organization. We build structured design and specification artifacts that AI coding tools can reproduce at high fidelity—so non-technical people with zero engineering background can turn their ideas into true production-grade applications. We also open-source practical tools around quant trading—apps, plugins, and more.',
    'home.ctaGithub': 'Visit GitHub Org',
    'home.ctaProducts': 'Explore products',
    'home.noteTitle': 'Vision:',
    'home.noteDesc': 'Rewrite software production · Quant for everyone · High-fidelity AI Coding',

    'home.featuresTag': 'Focus',
    'home.featuresTitle': 'What we build',
    'home.featuresSubtitle':
      'From high-fidelity design artifacts to production apps anyone can ship, plus quant and utility open source.',
    'home.f1Title': 'High-fidelity design artifacts',
    'home.f1Desc':
      'Design and specification outputs that AI coding tools can consume and reproduce fully.',
    'home.f2Title': 'Zero-barrier app building',
    'home.f2Desc':
      'Built for non-technical creators: ship complete, production-grade apps without an engineering background.',
    'home.f3Title': 'AI Coding high-fidelity delivery',
    'home.f3Desc': 'We optimize for shippable acceptance—not demo-only prototypes.',
    'home.f4Title': 'Open-source quant',
    'home.f4Desc': 'Open tools and capabilities for quantitative trading research and practice.',
    'home.f5Title': 'Utility apps',
    'home.f5Desc': 'Practical productivity software, plugins, and apps—released continuously.',
    'home.f6Title': 'Open collaboration',
    'home.f6Desc': 'GitHub-first releases of tools, apps, and plugins—built with the community.',

    'home.focusTag': 'Product lines',
    'home.focusTitle': 'Two tracks, one open-source base',
    'home.focus1Title': 'AI Design → Code',
    'home.focus1Desc':
      'High-fidelity specs for AI coding toolchains, aimed at complete production-grade delivery.',
    'home.focus2Title': 'Quant & Utility',
    'home.focus2Desc': 'Quant trading and practical utilities open-sourced as reusable building blocks.',

    'home.stepsTag': 'Roadmap',
    'home.stepsTitle': 'From idea to production app',
    'home.step1Title': 'Specs & design artifacts',
    'home.step1Desc': 'Structured, machine-readable design and specs aligned with modern product design workflows.',
    'home.step2Title': 'AI Coding high fidelity',
    'home.step2Desc': 'Make coding tools consume artifacts and ship acceptable implementations.',
    'home.step3Title': 'Zero-tech-background delivery',
    'home.step3Desc': 'Enable non-technical people to build true production-grade apps that match their ideas.',
    'home.step4Title': 'Open-source toolbox',
    'home.step4Desc': 'Keep releasing quant tools, practical apps, plugins, and utilities.',

    'home.teamTag': 'Team',
    'home.teamTitle': 'The people shipping the vision',
    'home.teamSubtitle': 'Radical simplicity in product. Hardcore depth in architecture.',
    'home.founderName': 'Leon',
    'home.founderRole':
      'Product designer. Advocate of radical simplicity—cutting complexity until the product feels inevitable.',
    'home.founderContact': 'irez@qq.com',
    'home.techName': 'Moonchild',
    'home.techRole':
      'A genuine technical force. Fluent across architectures, engineering obsessive—thrives on hard systems and harder problems.',

    'home.faqTag': 'FAQ',
    'home.faqTitle': 'Frequently asked questions',
    'home.faq1Q': 'What is Omni Synth?',
    'home.faq1A':
      'An open-source organization branded Omni Synth, focused on AI Coding high-fidelity delivery, open quant, and practical tools.',
    'home.faq2Q': 'How is this different from design tools?',
    'home.faq2A':
      'We prioritize artifacts AI coding tools can fully reproduce—so people with zero technical background can ship production-grade apps that match their ideas, not just prototypes or demos.',
    'home.faq3Q': 'What will you open-source?',
    'home.faq3A':
      'Design/delivery toolchain pieces, quant capabilities, practical utilities, apps, and plugins.',
    'home.faq4Q': 'How can I join?',
    'home.faq4A':
      'Visit the OmniSynth GitHub org, star repos, open issues/PRs, or reach the founder and tech lead.',

    'home.ctaTitle': 'Build deliverable AI coding infrastructure in the open',
    'home.ctaSubtitle': 'Follow the org and contribute to tools and projects.',
    'home.ctaButton': 'Go to GitHub',

    'about.tag': 'About Omni Synth',
    'about.title': 'An open-source org for deliverable AI products & quant tools',
    'about.subtitle':
      'Brand: Omni Synth. We rewrite how software is made and democratize quant for everyone—building high-fidelity design artifacts so non-technical people can ship production-grade apps, plus open-source quant tools, apps, and plugins.',
    'about.statsOpenSource': 'Open source first',
    'about.statsDelivery': 'Delivery bar',
    'about.statsDeliveryValue': 'Hi-Fi',
    'about.statsFocus': 'Core tracks',
    'about.missionTitle': 'Mission',
    'about.missionSubtitle':
      'Turn design and specs into executable AI inputs, turn ideas into production apps, and grow open assets for quant and utilities.',
    'about.m1Title': 'Reproducible specs',
    'about.m1Desc': 'High-fidelity design and specification artifacts aimed at high AI Coding fidelity.',
    'about.m2Title': 'Zero-barrier production apps',
    'about.m2Desc':
      'For non-technical creators: ship production-grade applications that fully match their ideas—with zero engineering background.',
    'about.m3Title': 'Share in the open',
    'about.m3Desc': 'Tools, apps, and plugins released continuously for developers.',
    'about.peopleTitle': 'Core people',
    'about.peopleSubtitle': 'Minimalist product craft × hardcore architecture—driving Omni Synth forward.',

    'products.tag': 'Products & open source',
    'products.title': 'Product directions built for delivery',
    'products.subtitle': 'AI Design-to-Code, open quant, and practical tools in parallel.',
    'products.p1Title': 'AI Design / Spec artifacts',
    'products.p1Desc': 'Structured, fidelity-first outputs for AI coding toolchains.',
    'products.p2Title': 'Zero-barrier production apps',
    'products.p2Desc': 'Help non-technical people turn ideas into true production-ready applications.',
    'products.p3Title': 'Quant trading tools',
    'products.p3Desc': 'Open-source research and practical quant capabilities.',
    'products.p4Title': 'Productivity utilities',
    'products.p4Desc': 'Practical software for everyday efficiency and productivity.',
    'products.p5Title': 'Plugins & apps',
    'products.p5Desc': 'Ongoing open releases of tools, apps, and plugins we build.',
    'products.p6Title': 'Org collaboration base',
    'products.p6Desc': 'Code, discussion, and releases hosted under the GitHub org.',
    'products.ctaTitle': 'See the latest repositories on GitHub',
    'products.ctaButton': 'OmniSynth organization',

    'contact.tag': 'Contact',
    'contact.title': 'Reach us on GitHub',
    'contact.subtitle': 'Org and members are here. Stars and issues welcome—or email design directly.',
    'contact.org':
      'Rewriting how software is made. Quant democratized—powerful quant tools everyone can use.',
    'contact.founder': 'Product designer · Radical simplicity · irez@qq.com',
    'contact.tech': 'Technical force · Architecture polyglot · Engineering obsessive',
  },
} as const;

export type UiKey = keyof (typeof ui)['zh'];

export function useTranslations(locale: Locale) {
  const dict = ui[locale] ?? ui[defaultLocale];
  return function t(key: UiKey): string {
    return dict[key] ?? ui[defaultLocale][key] ?? key;
  };
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybe] = url.pathname.split('/');
  if (isLocale(maybe) && maybe !== defaultLocale) return maybe;
  return defaultLocale;
}

/** Map a path to another locale (default zh has no prefix). */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.replace(/^\/(zh|en)(?=\/|$)/, '') || '/';
  const normalized = clean.startsWith('/') ? clean : `/${clean}`;
  if (locale === defaultLocale) return normalized === '' ? '/' : normalized;
  if (normalized === '/') return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  const withoutLocale = currentPath.replace(/^\/(en)(?=\/|$)/, '') || '/';
  const normalized = withoutLocale.replace(/\/+$/, '') || '/';

  // Pages that exist in both locales
  const localizedRoots = new Set(['/', '/about', '/products', '/contact', '/blog']);
  if (localizedRoots.has(normalized)) {
    return localizePath(normalized, targetLocale);
  }
  if (normalized.startsWith('/blog/')) {
    const page = normalized.slice('/blog/'.length);
    const blogRoot = localizePath('/blog', targetLocale);
    if (/^\d+$/.test(page) && page !== '1') return `${blogRoot}/${page}`;
    return blogRoot;
  }

  // Translated posts under /en/... are handled client-side via __omniPostI18n.
  // For SSR href fallback on post pages, keep path (client click overrides).
  return normalized.startsWith('/en/') ? normalized : currentPath.replace(/\/+$/, '') || normalized;
}
