import React,{ Component } from 'react'
import {stopBubble,trim} from '../lib/Widget'
// import { Link } from 'react-router'
// let items = ['北京影院','上海影院','广州影院','新疆影院','保定影院'];
export default class AutoComplete extends Component {
  state={
    'textVal': ''
  }
  temArray=[]
  handKeyUp(event){
    let evt = event || window.event;
    stopBubble(evt);
    let thisVal = trim(this.refs.cinemas.value);
    this.temArray=[];
    this.props.items.map((val,i)=>{
      if(val.indexOf(thisVal) != -1){
        this.temArray.push(val);
      }
    });
    this.setState({
      'textVal': thisVal
    });
  }
  componentWillMount(){
    this.props.items.map((val,i)=>{
      this.temArray.push(val);
    })
  }
  render(){
    let {change} = this.props;
    return(
      <div className={this.props.active == 0?"autoComplete":this.props.active=='1'?"autoComplete rightToLeft":"autoComplete leftToRight"}>
        <div className="head">
          <span>{this.props.title}</span>
          <i className="arrowLeft"  onClick={change}></i>
        </div>
        <div className="input">
          <input type="text" name="cinemas" ref="cinemas" onChange={(evt)=>{this.handKeyUp(evt)}}  placeholder="输入需要搜索的影院名称" />
        </div>
        <ul className="contain">
          <li className={!!this.state.textVal?'hide':''}>全部影院</li>
          {
            this.temArray.map((val,i)=>{
              return <li key={i} id={i}>{val}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
