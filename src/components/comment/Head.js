import React,{ Component } from 'react'
import {stopBubble} from '../lib/Widget'

export default class Head extends Component {
  handClick(event){
    let evt = event || window.event;
    stopBubble(evt)

  }
  render(){
    let change = this.props.change;
    // let {change} = this.props;
    return(
      <div className="head">
        <div className="headbox" onClick={change}>
          <div className="title">
            <span>{this.props.title}</span>
          </div>
          <div className="arrowDown"></div>
        </div>
      </div>
    );
  }
}
