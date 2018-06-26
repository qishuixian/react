/*
   Home 主页
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
   render() {
      return (
          <div id="home-container">
              {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
              <Link to={{ pathname: '/test', search: '?name=homename', state: { mold: 'add' },aa:'dddd' }} className="home-link">
                  点击跳转到路由参数search，state使用
              </Link>

          </div>
      );
   }
}

export default Home;
