import Vue from 'vue'
// 在组件外使用vux集成的微信jssdk
import {WechatPlugin} from 'vux'
import axios from 'axios'
Vue.use(WechatPlugin)
export default function wxShare(
    title,
    desc,
    link,
    imgUrl
) {
axios.get(`/api/weChartShareSign?URL=${encodeURIComponent(window.location.href.split('#')[0])}`).then(data => {
    let config = data.data.data
    Vue.wechat.config({
        debug: false,
        appId: config.appId,
        timestamp: config.timestamp,
        nonceStr: config.nonceStr,
        signature: config.signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'chooseImage']
    })
    Vue.wechat.ready(() => {
        Vue.wechat.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: desc , // 分享描述
            link: link , // 分享链接
            imgUrl: imgUrl // 分享图标
        })
        Vue.wechat.onMenuShareTimeline({
            title:  desc || '测试标题', // 分享标题，由于分享到朋友圈没有desc，所以这里采用的策略是，指定的朋友圈分享标题优先，其次采用发送给朋友的描述，最后采用默认文案。
            link: link || window.location.href, // 分享链接
            imgUrl: imgUrl // 分享图标
        })
})
    Vue.wechat.error((res) => {})
})
}
// 为Vue的原型对象添加该方法，则所有vue实例都能继承该方法
Vue.prototype.$wxShare = wxShare