import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'

const initialState = JSON.parse(localStorage.getItem('boredom-buster')) || undefined

const composeEnhancers = composeWithDevTools({});

const localStorageMiddleware = storeAPI => next => action => {
    const state = storeAPI.getState()
    localStorage.setItem('boredom-buster', JSON.stringify(state))

    return next(action)
}

const middlewareEnhancer = applyMiddleware(thunkMiddleware, localStorageMiddleware)

export const store = createStore(rootReducer, initialState, composeEnhancers(middlewareEnhancer))

export default store
