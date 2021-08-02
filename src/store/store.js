import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import taxesReducer from './reducers/taxes';

const reducers = {
    taxes: taxesReducer
};

const composedEnhancer = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
);

const store = createStore(combineReducers(reducers), undefined, composedEnhancer);

export default store;