// 下载app
export function handleIsPhone(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        window.location.href = 'https://www.lajixs.com/apk/app.apk'
    }
    if (isiOS) {
        this.$vux.toast.text('ios端即将上线,敬请期待!')
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