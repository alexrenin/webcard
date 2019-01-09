import C from './store/reducers'

const changeLanguage = (languageCurrentItem) =>
	({
		type: C.CHANGE_LANGUAGES,
		languageCurrentItem: parseInt(languageCurrentItem, 10),
	})

export default changeLanguage