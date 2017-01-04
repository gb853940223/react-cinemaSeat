import React,{ Component } from 'react'

export default class Title extends Component {

  render(){
    let {title} = this.props;
    return (
      <div className="moreTitle">
        <div className="titleBox clearfix">
          <div className="titleName float_left">
            <span>{title}</span>
          </div>
          <div className="more float_right">
            <span>+更多指标</span>
          </div>
        </div>
      </div>
    );
  }
}
