import React,{ Component } from 'react'
import { Link } from 'react-router'
import Input from '../login/Input'

export default class Login extends Component {
  render(){
    return(
      <div className='login'>
        <Input />
        <span>
          <Link to="/index">跳转到首页</Link>
        </span>
      </div>
    );
  }
}
