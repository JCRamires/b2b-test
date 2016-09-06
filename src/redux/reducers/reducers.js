import { combineReducers } from 'redux'
import { CHANGE_CURRENT_PAGE } from '../actions/actions'

function paginasReducer(state = 'Home', action) {
    switch(action.type) {
    case CHANGE_CURRENT_PAGE:
        return action.currentPage
    default:
        return state
    }
}

const reducers = combineReducers({
    paginasReducer
})

export default reducers
