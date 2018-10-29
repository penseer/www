import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      { icon: 'http://img.hb.aicdn.com/f19cc2d9742a84b5fb2cc71a13758c592870e979496-gzxyu3_fw658', title: '用户调研', content: '产品和营销离不开充分的市场和用户调研，漫观网络「资深定性/定量用研专家」可为您提供极具竞争力的用户调研服务。' },
      { icon: 'http://img.hb.aicdn.com/b5c381788507a3f0608ba44157591374f9cf5675379-HppQRg_fw658', title: '产品文案', content: '优秀的产品文案能直击人心，赋予产品更强的生命力。漫观网络「百万级销量产品」文案达人，可为您撰写高品质中/英文产品文案。\n' },
      { icon: 'http://img.hb.aicdn.com/9eb6c0577b8383b66f90545f2eae3a187bdb6eb331f-uZMD2D_fw658', title: '视觉设计', content: '好设计既要服务产品和市场，也要愉悦身心。漫观网络合作的优秀自由设计师可为您提供业界一流的视觉/平面/UI 设计。\n' },
      { icon: 'http://img.hb.aicdn.com/eb77ec87d944739db7dd4e0b09d56c67c1ee13b4336-CGl8Tc_fw658', title: '软件开发及维护', content: '漫观网络合作的资深高级软件工程师，可为您提供App/H5/服务器一站式开发及维护。\n' },
      { icon: 'http://img.hb.aicdn.com/3f38d748b9207e95c48b7e5f8feb23532a7f18a24a0-POki2Z_fw658', title: '其他', content: '待补充' },
      { icon: 'http://img.hb.aicdn.com/55a748b035803a7a68780c28ba55b916cd0b61812b3-FhkSy8_fw658', title: '其他', content: '待补充' },
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className="img"
          key="img"
        >
          <img src={item.icon} width="100%" />
        </TweenOne>
        <div className="text">
          <TweenOne key="h1" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
            {item.content}
          </TweenOne>
        </div>
      </TweenOne>);
    });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
             其他服务
          </TweenOne>
          <TweenOne
            key="p"
            animation={{ ...oneAnim, delay: 100 }}
            component="p"
            id={`${props.id}-titleContent`}
          >
            

          </TweenOne>
          <QueueAnim
            key="ul"
            type="bottom"
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            <ul key="ul">
              {children}
            </ul>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
