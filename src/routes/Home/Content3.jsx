import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  static defaultProps = {
    className: 'content1',
  };

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const animType = {
      queue: isMobile ? 'bottom' : 'right',
      one: isMobile ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              广告投放，渠道多花样
            </h1>
            <p key="p" id={`${props.id}-content`}>
              内容营销不只是自媒体，移动广告也不只有微博和微信。我们整合热门媒体平台和流量大号，集门户、垂直网站和社群于一身。图文并进，音视频并举，让您的广告，和看广告的人一样丰富。
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
