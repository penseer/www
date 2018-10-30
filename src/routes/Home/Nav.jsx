import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu,Affix } from 'antd';
import { cloneableGenerator } from 'redux-saga/utils';
const navData = [{ menu: '首页', target: 'content_0_0' }, { menu: '服务', target: 'content_2_0' }, { menu: '联系我们', target: 'footer_1_0' },{ menu: '相关推荐', url: 'https://zhuanlan.zhihu.com/p/48013533' }, { menu: '合作案例', url: 'https://zhuanlan.zhihu.com/p/48013620' }, { menu: '关于我们', url:'https://zhuanlan.zhihu.com/p/48012050' }];
const Item = Menu.Item;
const mlogo = '../../assets/mlogo.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }
  menuClick = (item, key, keyPath )=>{
    console.log(item,key,keyPath)
    console.log(navData[item.key])
    let menu = navData[item.key];
    //const docHeight = ReactDOM.findDOMNode().getBoundingClientRect().height;
    //scrollScreen.init({ docHeight });
    if (menu && menu.target) {
      let anchorElement = document.getElementById(menu.target);
      if (anchorElement) { anchorElement.scrollIntoView(); }
    }
    if (menu && menu.url){
      window.open(menu.url)
    }
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const navChildren = navData.map((key, i) => (<Item key={i}>{key.menu}</Item>));
    return (
<TweenOne
      component="header"
      style={{position: 'fixed'}}
      animation={{ opacity: 0, type: 'from' }}
      {...props}
      >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img src={ mlogo} style={{width: 120,height:40,marginTop: 8}}/>
      </TweenOne>
      {isMobile ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            defaultSelectedKeys={['0']}
            mode="inline"
            theme="dark"
            onClick={this.menuClick}
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['0']}
          id={`${this.props.id}-menu`}
            onClick={this.menuClick}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
