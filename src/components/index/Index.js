import React,{ Component } from 'react'
import Head from '../comment/Head'
import AutoComplete from '../comment/AutoComplete'
import Datepicker from '../comment/Datepicker'
import {stopBubble} from '../lib/Widget'
import DataAll from '../index/DataAll'
import Title from '../comment/Title'

let items = ['北京影院','上海影院','广州影院','新疆影院','保定影院','上海影院','广州影院','新疆影院','保定影院','上海影院','广州影院','新疆影院','保定影院','上海影院','广州影院','新疆影院','保定影院','上海影院','广州影院','新疆影院','保定影院','上海影院','广州影院','新疆影院','保定影院'];
let nowDate = new Date();
let time = {
  day : nowDate.getFullYear() + '年' + (nowDate.getMonth() + 1) + '月' + nowDate.getDate() + '日',
  weeks : ['周日','周一','周二','周三','周四','周五','周六'],
  weekIndex : nowDate.getDay()
};
let income = {
  total : "180.3",
  increase : "5.1",
  time : nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds(),
};
export default class Index extends Component {
  state = {
      'animate': '0',
      'time' : nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds(),
      'n' : 0,
      'day' : time.day,
      'week' : time.weeks[time.weekIndex]
  }
  changeStateTrue(event){
    let evt = event || window.event;
    stopBubble(evt);
    this.setState({
      'animate': '1'
    });
  }
  changeStateFalse(event){
    let evt = event || window.event;
    stopBubble(evt);
    this.setState({
      'animate': '2'
    });
  }
  changeStateTime(event){
    let nowDate = new Date();
    this.setState({
      'time' : nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds(),
    });
  }
  getPrevDay(){
    this.state.n++;
    let nowDate = new Date(),
        prevTime = nowDate.getTime() - 60*60*24*(this.state.n)*1000,
        newTime = new Date(prevTime);
    this.setState({
      'day' : newTime.getFullYear() + '年' + (newTime.getMonth() + 1) + '月' + newTime.getDate() + '日',
      'week' : time.weeks[newTime.getDay()]
    });
  }
  getNextDay(){
    this.state.n--;
    let nowDate = new Date(),
        nextTime = nowDate.getTime() - 60*60*24*(this.state.n)*1000,
        newTime = new Date(nextTime);
    this.setState({
      'day' : newTime.getFullYear() + '年' + (newTime.getMonth() + 1) + '月' + newTime.getDate() + '日',
      'week' : time.weeks[newTime.getDay()]
    });
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.changeStateTime();
    },1000);
  }
  componetWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    return(
      <div className="index">
        <Head title="全部影院" change={(evt)=>{this.changeStateTrue(evt)}} />
        <AutoComplete items={items} title="选择影院" change={(evt)=>{this.changeStateFalse(evt)}} active={this.state.animate=='0'?'0':this.state.animate=='1'?'1':'2'} />
        <Datepicker day={this.state.day} week={this.state.week}/>
        <DataAll incomeTotal={income.total} incomeIncrease={income.increase} incomeTime={this.state.time} getPrevDay={()=>{this.getPrevDay()}} getNextDay={()=>{this.getNextDay()}} />
        <Title title="收入明细" />
      </div>
    );
  }
}
