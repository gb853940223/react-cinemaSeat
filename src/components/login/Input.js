import React,{ Component } from 'react'
import { Link,browserHistory } from 'react-router'

export default class Input extends Component {
    state={
      'userwarn' : 1,
      'paswarn' : 1,

    }
    clickValid(e){
      e.stopPropagation();
      let usernameVal = this.refs.username.value,
          passwordVal = this.refs.password.value;
      if(!usernameVal){
        this.setState({
          'userwarn' : 0,
          'paswarn' : 1,
        });
        return;
      }else if(!passwordVal) {
        this.setState({
          'userwarn' : 1,
          'paswarn' : 0,
        });
        return;
      }else {
        //react跳转
        browserHistory.push('/index');
      }
    }
    render(){
      return(
        <div className="loginBox">
          <div className="username">
            <span>帐号</span>
            <input type="text" name="username" ref="username" className ={!!this.state.userwarn?'':'warn-red'} />
          </div>
          <div className='password'>
            <span>密码</span>
            <input type="password" name="password" ref="password" className ={!!this.state.paswarn?'':'warn-red'}/>
          </div>
          <div className="btn" onClick={this.clickValid.bind(this)}>
            <span>
              登陆
            </span>
          </div>
          <div className="logo">
            <div className="logoImg"></div>
            <div className="logoText">
              1905我的影院
            </div>
          </div>
        </div>
      )
    }
}
