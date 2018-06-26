/*
   Test 主页
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Test extends Component {
    constructor (props) {
        super(props)
    }

   render() {
       return (
           <div id="test-container">
               <p>search:{this.props.location.search} </p>
               <p>state:{this.props.location.state.mold} </p>
               <div onClick={() =>  this.props.history.goBack()}>返回上一页</div>
               <div onClick={() => this.props.history.push('/message/12')}>message页面</div>
           </div>
       );
   }
}
export default Test;
