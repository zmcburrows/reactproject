const defaultState = {
    term: '',
    results: []
}

const SEARCH_SET_TERM = 'SEARCH_SET_TERM'
const SEARCH_SET_RESULTS = 'SEARCH_SET_RESULTS'

export function setSearch(term) {
   return {
    type: SEARCH_SET_TERM, 
    term
    }
}

export function setResults(results) {
    return {
        type: SEARCH_SET_RESULTS,
        results
    }
}

export function searchReducer(state =  defaultState, action) {
    switch (action.type) {
        case SEARCH_SET_TERM:
            return {
                ...state,
                term: action.term
            }
        case SEARCH_SET_RESULTS:
            return {
                ...state,
                results: action.results
            }
        default:
            return state
    }
}