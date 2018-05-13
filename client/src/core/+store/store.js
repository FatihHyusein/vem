import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import organisationsReducer from './organisations.reducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(combineReducers({
    router: routerReducer,
    organisations: organisationsReducer,
}), initialState, composedEnhancers);
