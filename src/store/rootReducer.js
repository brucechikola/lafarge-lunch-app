import { combineReducers } from 'redux'
import auth from './auth'
import routeController from './routeController'
import layout from './layout'
const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        layout,
        auth,
        routeController,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}

export default rootReducer
