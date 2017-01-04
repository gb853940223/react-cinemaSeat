import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//import single reducer

const rootReducer = combineReducers({

  routing:routerReducer
});
export default rootReducer;
