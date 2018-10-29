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
      queue: isMobile ? 'bottom' : 'left',
      one: isMobile ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    };
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
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              营销策划，是乙方，似甲方
            </h1>
            <p key="p" id={`${props.id}-content`}>
              营销的终极奥义在于洞悉人性。来自各大消费电子厂商和互联网公司市场部的营销达人们，了解产品细节，熟悉营销玩法，深谙用户心理。我们是客户，也是用户；是乙方，亦是甲方。
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
