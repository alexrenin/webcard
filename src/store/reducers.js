const C = {
	ADD_COLOR: "ADD_COLOR",
	RATE_COLOR: "RATE_COLOR",
	REMOVE_COLOR: "REMOVE_COLOR",
	SORT_COLORS: "SORT_COLORS"
}

export const contentList = (state = {}, action) => {
	/*switch (action.type) {
		case C.ADD_COLOR:
			return {
				id: action.id,
				title: action.title,
				color: action.color,
				timestamp: action.timestamp,
				rating: 0
			}
		case C.RATE_COLOR:
			return (state.id !== action.id) ?
				state :
				{
					...state,
					rating: action.rating
				}
		default :
			return state
	}*/
	return state
}

export const language = (state = [], action) => {
	/*switch (action.type) {
		case C.ADD_COLOR :
			return [
				...state,
				color({}, action)
			]
		case C.RATE_COLOR :
			return state.map(
				c => color(c, action)
			)
		case C.REMOVE_COLOR :
			return state.filter(
				c => c.id !== action.id
			)
		default:
			return state
	}*/
	return state
}

export const sort = (state = "SORTED_BY_DATE", action) => {
	/*switch (action.type) {
		case "SORT_COLORS":
			return action.sortBy
		default :
			return state
	}*/
	return state
}