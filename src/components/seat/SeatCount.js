import React,{Component} from 'react'

export default class SeatCount extends Component {
  
  render(){
    let {seatData} = this.props;
    let liArray = [],
        colCount = seatData.data.col_count,
        i;
    for(i = 0; i < colCount; i++){
      liArray.push(<li key={i}>{i+1}</li>);
    }
    return(
      <div className="seatCount" ref="seatCount">
        <ul>
          {liArray}
        </ul>
      </div>
    );
  }
}
