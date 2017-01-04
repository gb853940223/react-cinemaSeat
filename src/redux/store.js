import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

//import root reducer

import rootReducer from './reducers/index'



const middleware = [ thunk ];
//default state

//create Store
const store = createStore(rootReducer,applyMiddleware(...middleware));
const history = syncHistoryWithStore(browserHistory,store);
//exports
export default store;

export {history};
