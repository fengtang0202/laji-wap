  function formatDate1 (date, fmt) {
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

 const formatDate=time=>{
                let data = new Date(time);
                return formatDate1(data,'yyyy-MM-dd');
  }
const formatDate2=time=>{
    let data=new Date(time)
    return formatDate1(data,'yyyy-MM-dd hh:mm:ss')
  }
const clickTotal=res=>{
    if (res < 1000) {
      return res = 0.1
    } else {
      return (res / 10000).toFixed(1)
    }
}
const type=val=>{
  if (val == 1) { return '金椒' }
  if (val == 2) { return '小米椒' }
  if (val == 3) { return '点击' }
  if (val == 4) { return '' }
  if (val == 5) { return '' }
  if (val == 6) { return '条' }
  if (val == 7) { return '' }
  if (val == 8) { return '辣椒' }
}
const tempTicketSum = res => {
  if (res < 1000) {
    return res 
  } else {
    return (res / 10000).toFixed(1)+'w'
  }
}
const str=(res,size)=>{
  return res.length > size ? res.slice(0, size) + '...' : res
}  
export { formatDate, formatDate2, clickTotal, str, type, tempTicketSum}