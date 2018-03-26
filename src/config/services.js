// import env from '@/config/env'
function params(options) {
    let paramString = ''
    for (var i in options) {
        paramString += i + '=' + options[i] + '&'
    }
    return paramString.slice(0, -1);
}
export function Post_formData(_this, option, url, cb) {
    let formData = new FormData()
    for (let item in option) {
        formData.append(item, option[item])
    }
    formData.append('token', _this.$store.state.token)
    _this.$http.post(url, formData).then(response => {
        cb(response.data)
    }, response => {
        cb({status: 404})
    })
}
export function Post_formData2(_this, option, url, cb) {
    _this.$http.post(url, params(option)).then(response => {
        cb(response.data)
    }, response => {
        cb({status: 404})
    })
}
export function noParam_Get(_this, url, cb) {
    _this.$http.get(url).then(response => {
        cb(response.data)
    }, response => {
        cb({status: 404})
    })
}

export function Param_Get(_this, options, url, cb) {
    _this.$http.get(encodeURI(url) + '?' + params(options)).then(response => {
        cb(response.data)
    }, response => {
        cb({status: 404})
    })
}
export function Param_Get_Resful(_this,url,cb){
    _this.$http.get(encodeURI(url)).then(response=>{
        cb(response.data)
    },response=>{
        cb({status:404})
    })
}
export function handleScroll(_this,element) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    let offsetTop = document.querySelector(element).offsetTop
    if (scrollTop > offsetTop) {
        _this.searchBarFixed = true
    } else {
        _this.searchBarFixed = false
    }
}
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};

