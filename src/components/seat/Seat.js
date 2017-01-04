import React,{ Component } from 'react'
import SeatInfo from '../seat/SeatInfo'
import SeatCount from '../seat/SeatCount'
import SeatResult from '../seat/SeatResult'
import {_Map} from 'lodash'

let seatData = require('../../json/seatData.json');

export default class Seat extends Component {
  state = {
    scaleAmount : 0,
    translateXAmount : 0,
    translateYAmount : 0
  }
  //保存放大缩小之后的数据变量
  saveScaleVar = 0
  //偏移
  changeTranslate(event){
    let seatInfoEle = this.refs.seatInfo.refs.seatInfo,
        seatCountEle = this.refs.seatCount.refs.seatCount,
        translateXAmount = event.deltaX,
        translateYAmount = event.deltaY,
        translateScaleAmount = this.state.scaleAmount==0?1:this.state.scaleAmount;
    this.setState({
      translateXAmount : translateXAmount,
      translateYAmount : translateYAmount
    });
    seatInfoEle.style.transform = "translate(" + this.state.translateXAmount + "px," + this.state.translateYAmount + "px) scale("+ translateScaleAmount +")";
    seatCountEle.style.transform = "translate(0px," + this.state.translateYAmount + "px) scale("+ translateScaleAmount +")";
  }
  //放大
  changeScale(event){
    // this.refs.test.refs.seatResult.innerHTML='X偏移量：' + event.deltaX + 'Y偏移量：' + event.deltaY + '缩放量：' + event.scale;
    let seatInfoEle = this.refs.seatInfo.refs.seatInfo,
        seatCountEle = this.refs.seatCount.refs.seatCount;
    let seatScale = this.saveScaleVar == 0 ? event.scale : (event.scale - 1);
    let scaleAmount = seatScale + this.saveScaleVar;
    if(scaleAmount <= 1){
      scaleAmount = 1;
    }
    this.setState({
      scaleAmount : scaleAmount
    });
    seatInfoEle.style.transform = "scale("+ this.state.scaleAmount +")";
    seatCountEle.style.transform = "scale("+ this.state.scaleAmount +")";
  }
  //放大缩小开始事件的数据
  changeScaleStart(event){
    this.refs.test.refs.seatResult.innerHTML = this.saveScaleVar;
    this.setState({
      scaleAmount : this.saveScaleVar
    });
    seatInfoEle.style.transform = "scale("+ this.state.scaleAmount +")";
    seatCountEle.style.transform = "scale("+ this.state.scaleAmount +")";
  }
  //保存多次触控事件结束后的结果
  saveScaleAmount(){
    this.saveScaleVar = this.state.scaleAmount;
  }  
  componentDidMount(){
    let seatInfoEle = this.refs.seatInfo.refs.seatInfo;
    //创建一个新的hammer对象并且在初始化时指定要处理的dom元素
    let hammertime=new Hammer(seatInfoEle);
    //一个手指拖动位移事件
    hammertime.on('pan',(event)=>{
      this.changeTranslate(event);
    });
    //为该dom元素指定触屏移动事件
    hammertime.add(new Hammer.Pinch());
    //两个手指导开始事件
    hammertime.on('pinchstart',(event)=>{
      this.changeScaleStart(event);
    });
    //两个手指导移动事件
    hammertime.on('pinchmove',(event)=>{
      this.changeScale(event);
    });
    //两个手指导结束事件
    hammertime.on('pinchend',(event)=>{
      this.saveScaleAmount(event);
    })
  }
  render(){
    return(
      <div className="seats">
        <SeatInfo ref="seatInfo" seatData={seatData} />
        <SeatCount ref="seatCount" seatData={seatData} />
        <SeatResult ref ="test"/>
      </div>
    );
  }
}
