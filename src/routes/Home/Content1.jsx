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
              品牌管理，一切服从最终目的
            </h1>
            <p key="p" id={`${props.id}-content`}>
              塑造品牌的过程，是企业自我发现和认识的旅程。我们也许无法准确告诉您「什么是品牌」，但可以和您一起探索「品牌的最终目的是什么，从哪里出发，到哪里变道，在何时加速」。多年品牌运营经验的品牌管理专家，将助力您的企业成长、成熟，基业长青。

            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
