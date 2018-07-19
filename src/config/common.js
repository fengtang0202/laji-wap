// 下载app
import axios from 'axios'
export function handleIsPhone(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // https: //www.lajixs.com/apk/app.apk
    if (isAndroid) {
       let pi=sessionStorage.getItem('pi')
       let href = pi ? `https://www.lajixs.com/api/appDownLoad?channelid=${pi}` : 'https://www.lajixs.com/apk/app.apk'
       window.location.href = href
    }
    if (isiOS) {
        window.location.href = "https://itunes.apple.com/cn/app/id1232171775?mt=8"
    }
    if (u.indexOf("MicroMessenger") > -1 && isAndroid) {
       window.location.href='http://sj.qq.com/myapp/detail.htm?apkName=com.ljfiction.book'
    }
}
//落地页用的下载
export function handleIsPhone1(channelId) {
    var u = navigator.userAgent 
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // https: //www.lajixs.com/apk/app.apk
    if (isAndroid) {
        //友盟统计
        _czc.push(["_trackEvent", "app ", "下载", "app下载", 1, "downApp"]);
        window.location.href = `https://www.lajixs.com/api/appDownLoad?channelid=${channelId}`
    }
    if (isiOS) {
        axios.get(`/api/iosDownLoadAppliactionCheckByIsUserAgentAndIPAddress?channelId=${channelId}&requestType=0`).then(res => {
            window.location.href = "https://itunes.apple.com/cn/app/id1232171775?mt=8"
        })
    }
    if (u.indexOf("MicroMessenger") > -1 && isAndroid) {
        window.location.href = 'http://sj.qq.com/myapp/detail.htm?apkName=com.ljfiction.book'
    }
}
//滚动监听
export function handleScroll(_this, element) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    let offsetTop = document.querySelector(element).offsetTop
    if (scrollTop > offsetTop) {
        _this.searchBarFixed = true
    } else {
        _this.searchBarFixed = false
    }
}