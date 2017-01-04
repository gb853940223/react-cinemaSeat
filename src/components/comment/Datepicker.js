import React,{ Component } from 'react'
import {stopBubble} from '../lib/Widget'

export default class Datepicker extends Component {
  render(){
    let {day,week} = this.props;
    return(
      <div className='datepicker'>
        <div className="datepickerBox">
          <span className="image"></span>
          <span className="day">
            {day}
          </span>
          <span className="week">
            {week}
          </span>
          <span className="arrowDown"></span>
        </div>
      </div>
    );
  }
}
