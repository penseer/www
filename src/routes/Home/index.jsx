import React from 'react';
import ReactDOM from 'react-dom';
import { enquireScreen } from 'enquire-js';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';
import { Affix } from 'antd';

import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Footer from './Footer';
import Point from './Point';

import './less/antMotion_style.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        }, () => {
          // 实现整屏滚动
          const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
          scrollScreen.init({ docHeight });
        });
      }, 500);
    } 
    else {
      // 实现整屏滚动
      const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
      scrollScreen.init({ docHeight });
    }
  }

  render() {
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile} />,
      <Content0 id="content_0_0" key="content_0_0" isMobile={this.state.isMobile}/>,
      <Content1 id="content_2_0" key="content_2_0" isMobile={this.state.isMobile}/>,
      <Content2 id="content_3_0" key="content_3_0" isMobile={this.state.isMobile}/>,
      <Content3 id="content_2_1" key="content_2_1" isMobile={this.state.isMobile}/>,
      <Content4 id="content_3_1" key="content_3_1" isMobile={this.state.isMobile}/>,
      <Content5 id="content_4_0" key="content_4_0" isMobile={this.state.isMobile}/>,
      <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>,
      // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point key="list" ref="list" data={['content_0_0', 'content_2_0', 'content_3_0', 'content_2_1', 'content_3_1', 'content_4_0']} />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
