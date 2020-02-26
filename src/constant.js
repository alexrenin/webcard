const constants = {
    VER: '3.0.0',
	home: 'home',
	summary: 'summary',
	portfolio: 'portfolio',
	contacts: 'contacts',
	SITE_URL: "http://localhost:3000",
	DEVELOP_FLAG: false,
	MIP_DESC_ID: "mipDescID",
	JRSS_DESC_ID: "jrssDescID",
	PP_DESC_ID: "ppDescID",
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
        }
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
            }
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
            }
        ]
    },
    defaultStrings: {
        'ru-RU': {
            backBtn: 'Назад',
        },
        'en-US': {
            backBtn: 'Back',
        },
    }
}

export default constants

