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
    ]
}

export default constants

