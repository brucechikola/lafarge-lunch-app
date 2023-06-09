import { combineReducers } from 'redux'
import auth from './auth'
import layout from './layout'
const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        layout,
        auth,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}

export default rootReducer
