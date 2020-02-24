import { createStore, combineReducers, applyMiddleware } from 'redux'
import { contentList, language, version } from './reducers'
import stateData from '../data/initialState'
import C from '../constant'

const logger = store => next => action => {
	let result
	// console.groupCollapsed("dispatching", action.type)
	// console.log('prev state', store.getState())
	// console.log('action', action)
	result = next(action)
	// console.log('next state', store.getState())
	// console.groupEnd()
	return result
}

const saver = store => next => action => {
	let result = next(action)
	localStorage['redux-store'] = JSON.stringify(store.getState())
	return result
}

const storeFactory = (initialState=stateData) => {
	let localStorageStage = (localStorage['redux-store'] && !C.DEVELOP_FLAG) ?
								JSON.parse(localStorage['redux-store']) :
								undefined;
	return (
		applyMiddleware(logger, saver)(createStore)(
			combineReducers({contentList, language, version}),
			!localStorageStage ?
				initialState :
				(localStorageStage.version === initialState.version) ?
					localStorageStage :
					initialState

		)
	)

}

export default storeFactory