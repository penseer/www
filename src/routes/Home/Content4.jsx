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
              人与技术合作，感性和理性结合
            </h1>
            <p key="p" id={`${props.id}-content`}>
              通过对多方数据的搜集、处理和分析，经验丰富的漫观策略团队可以制定出更加精准、高效的推广方案。科学的投放机制和优化策略，可供您自由搭配、灵活调整。你的个性化，就是我们的标准化。
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
