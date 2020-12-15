const constants = {
  VER: '4.0.0',
  DEVELOP_FLAG: false,
  locales: [
    {
      langID: 'ru',
      path: 'ru',
      name: 'Русский',
      contentfulID: 'ru-RU',
    },
    {
      langID: 'en',
      path: 'en',
      name: 'English',
      isDefault: true,
      contentfulID: 'en-US',
    },
  ],
  pages: {
    'ru-RU': [
      {
        title: 'Главная',
        href: 'home',
      },
      {
        title: 'Резюме',
        href: 'resume',
      },
      {
        title: 'Портфолио',
        href: 'portfolio',
      },
      {
        title: 'Контакты',
        href: 'contacts',
      },
    ],
    'en-US': [
      {
        title: 'Home',
        href: 'home',
      },
      {
        title: 'Resume',
        href: 'resume',
      },
      {
        title: 'Portfolio',
        href: 'portfolio',
      },
      {
        title: 'Contacts',
        href: 'contacts',
      },
    ],
  },
  defaultStrings: {
    'ru-RU': {
      backBtn: 'Назад',
    },
    'en-US': {
      backBtn: 'Back',
    },
  },
};

export default constants;
