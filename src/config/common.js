// 下载app
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