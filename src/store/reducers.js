const C = {
	CHANGE_LANGUAGES: "CHANGE_LANGUAGES",
}

export const contentList = (state = {}, action) => {

	return state
}

export const language = (state = {}, action) => {
	switch (action.type) {
		case C.CHANGE_LANGUAGES :
			return {
				...state,
				currentItem: action.languageCurrentItem
			}

		default:
			return state
	}

}

export default C