import React,{Component} from 'react'

export default class SeatResult extends Component {

  render(){
    let {logHtml} = this.props;
    return(
      <div className='seatResult' ref="seatResult">
        <span>log功能</span>
      </div>
    );
  }
}
