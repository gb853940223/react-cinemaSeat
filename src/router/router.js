import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

//import redux
import { Provider } from 'react-redux'
import store,{ history } from '../redux/store'

//imports components
import App from '../components/App'
import Rock from '../components/Rock'

//登陆页
import Login from '../components/login/Login'
//首页
import Index from '../components/index/Index'
//座位图
import Seat from '../components/seat/Seat'
//deploy your router
const router = (
  <Provider store={store}>
    <Router history={history}>
        {/*<Route path="/" component={App}>
            <IndexRoute component={Rock}/>
        </Route>*/}
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="/index" component={Index}/>
            <Route path="/seat" component={Seat}/>
        </Route>
    </Router>
  </Provider>
);
export default router;
