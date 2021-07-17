import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk'

const composeEhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEhancers(applyMiddleware(thunk)))


export default store;