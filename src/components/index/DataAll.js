import React,{ Component } from 'react'
export default class DateAll extends Component {
  render(){
    let {incomeTotal,incomeIncrease,incomeTime,getPrevDay,getNextDay} = this.props;
    return (
      <div className="dataAll">
        <div className="dataAllBox">
          <div className="showData clearfix">
            <div className="showDataAll float_left">
              <p>{incomeTotal}<i>万</i></p>
              <p>营业总收入</p>
            </div>
            <div className="showDataIncrease float_left">
              <p>{incomeIncrease}%</p>
              <p>较前一日</p>
            </div>
          </div>
          <div className="showTime">
            <p>每30分钟更新一次，上次更新{incomeTime}</p>
          </div>
        </div>
        <div className="prevDay" onClick={getPrevDay}>
          <span>前一天</span>
        </div>
        <div className="nextDay" onClick={getNextDay}>
          <span>后一天</span>
        </div>
      </div>
    );
  }
}
