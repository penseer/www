import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
let year = new Date().getFullYear()
class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const logoContent = { img: 'http://img.hb.aicdn.com/b75d1e83b37d855308126539fd788ba1d776556251d7-hW8CeH', content: '提供科学、精准、高效的数字化营销服务。' };
    const dataSource = [
      { title: '友情链接', content: '好奇心日报\n少数派\n虎嗅网\nPingWest\nifanr\n', contentLink: 'http://www.qdaily.com/\nhttps://sspai.com/\nhttps://www.huxiu.com/\nhttps://www.pingwest.com/\nhttps://www.ifanr.com/\n' },
      { title: '相关推荐', content: '百度指数\n微博指数\n头条指数\n新榜\n西瓜数据', contentLink: 'https://index.baidu.com/#/\nhttp://data.weibo.com/index\nhttps://index.toutiao.com/\nhttps://www.newrank.cn/\nhttp://data.xiguaji.com/' },
      { title: '联系我们', content: '邮箱：manguan@penseer.com\n电话：18623224735', contentLink: 'mailto:manguan@penseer.com\njavascript:void(0)' },
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    return (<OverPack
      {...props}
      playScale={isMobile ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`}>
          <p className="logo">
            <img src={logoContent.img} width="100%" />
          </p>
          <p>{logoContent.content}</p>
        </li>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          © {`${year}`} 漫观科技版权所有
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
