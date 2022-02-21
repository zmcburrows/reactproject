const defaultState = []

const WATCHLIST_ADD_ARTICLE = 'WATCHLIST_ADD_ARTICLE'
const WATCHLIST_REMOVE_ARTICLE = 'WATCHLIST_REMOVE_ARTICLE'

export function addArticle(result) {
    return {
        type: WATCHLIST_ADD_ARTICLE,
        result
    }
}

export function removeArticle(result) {
    return {
        type: WATCHLIST_REMOVE_ARTICLE,
        result
    }
}

export function watchlistReducer(state = defaultState, action) {
    switch (action.type) {
        case WATCHLIST_ADD_ARTICLE:
            return [
                ...state,
                action.result
            ]
        case WATCHLIST_REMOVE_ARTICLE:
            return state.filter((result) => {
                return result.pageid !== action.result.pageid
            })
        default:
            return state
    }
}