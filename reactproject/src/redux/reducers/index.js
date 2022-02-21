import { combineReducers } from 'redux'
import { searchReducer } from './searchReducer'
import { watchlistReducer } from './watchlistReducer'

const rootReducer = combineReducers({
    watchlist: watchlistReducer,
    search: searchReducer
})

export default rootReducer