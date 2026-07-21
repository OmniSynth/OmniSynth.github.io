import { getPermalink, getAsset } from './utils/permalinks';
import { localizePath, useTranslations, type Locale } from './i18n/ui';

export function getHeaderData(locale: Locale) {
  const t = useTranslations(locale);
  return {
    links: [
      { text: t('nav.home'), href: localizePath('/', locale) },
      { text: t('nav.products'), href: localizePath('/products', locale) },
      { text: t('nav.about'), href: localizePath('/about', locale) },
      { text: t('nav.blog'), href: localizePath('/blog', locale) },
      { text: t('nav.contact'), href: localizePath('/contact', locale) },
    ],
    actions: [
      {
        text: t('nav.github'),
        href: 'https://github.com/OmniSynth',
        target: '_blank',
        variant: 'primary' as const,
      },
    ],
  };
}

export function getFooterData(locale: Locale) {
  const t = useTranslations(locale);
  return {
    links: [
      {
        title: t('footer.explore'),
        links: [
          { text: t('nav.home'), href: localizePath('/', locale) },
          { text: t('nav.products'), href: localizePath('/products', locale) },
          { text: t('nav.about'), href: localizePath('/about', locale) },
          { text: t('nav.blog'), href: localizePath('/blog', locale) },
        ],
      },
      {
        title: t('footer.community'),
        links: [
          { text: 'GitHub', href: 'https://github.com/OmniSynth' },
          { text: t('nav.contact'), href: localizePath('/contact', locale) },
        ],
      },
      {
        title: t('footer.team'),
        links: [
          { text: 'Leon', href: 'mailto:irez@qq.com' },
          { text: 'Moonchild', href: 'https://github.com/lyalexzz' },
        ],
      },
    ],
    secondaryLinks: [
      { text: t('footer.terms'), href: getPermalink('/terms') },
      { text: t('footer.privacy'), href: getPermalink('/privacy') },
    ],
    socialLinks: [
      { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/OmniSynth' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: t('footer.note'),
  };
}

export const headerData = getHeaderData('zh');
export const footerData = getFooterData('zh');

export type { Locale };
