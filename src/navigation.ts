import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Templates',
      href: '#',
    },
    {
      text: 'Docs',
      href: 'https://github.com/kittendevv/Invio/wiki',
    },
  ],
  actions: [{ text: 'Github', href: 'https://github.com/kittendevv/Invio', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'License', href: getPermalink('/license') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/getinvio' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/kittendevv/Invio' },
  ],
  footNote: `
    Invio is licensed under the unlicense and provided for free to you by kittendevv
  `,
};
