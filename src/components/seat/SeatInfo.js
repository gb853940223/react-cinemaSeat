import React,{ Component } from 'react'
import {_Map} from 'lodash'
import {stopBubble} from '../lib/Widget'
let Hammer = require('hammerjs');



export default class SeatInfo extends Component {

  componentDidMount(){
  }
  render(){
    let {seatData} = this.props;
    return(
        <div className="seatInfo" ref="seatInfo">
            {
              _.map(seatData.data.seats,(val,i)=>{
                return  <SeatRow key={i} colData={val} />
              })
            }
        </div>
    );
  }
}

//一行座位
class SeatRow extends Component {
  changeSeatState(event){
    let evt = event || window.event;
    stopBubble(evt);
    this.state.seatState=='0'?this.setState({seatState:'1'}):this.setState({seatState:'0'});
  }
  render(){
    let {colData} = this.props;
    return(
      <div className="row">
          {
            _.map(colData,(val,i)=>{
              return <SeatSingle key={i} id={val.id} />
            })
          }
      </div>
    );
  }
}
//单个座位
class SeatSingle extends Component {
  state={
    seatState: '0'
  }
  changeSeatState(){
    this.state.seatState=='0'?this.setState({seatState:'1'}):this.setState({seatState:'0'});
  }
  render(){
    let {id} = this.props;
    return(
    <span id={id} className={this.state.seatState=='0'?'seat-null':'seat-ok'} onClick={(event)=>{this.changeSeatState(event)}}></span>
    );
  }
}
