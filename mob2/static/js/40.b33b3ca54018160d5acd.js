webpackJsonp([40],{292:function(e,t,i){function o(e){i(613)}var r=i(0)(i(509),i(751),o,"data-v-2f3361cb",null);e.exports=r.exports},361:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAFNHdIMAAAAAXNSR0IArs4c6QAAAg5JREFUWAntmT1SwzAQhWMnDS20nIWGtPRcgCJQxE4K4ARAkb8CUnAMSuA2tFBCk9jsZvwyiSTbkiwywGwaRau3n57WHktOWi2vz2g0yksTKwdLswIPGE0Yg4EnVnHj8fhcjal9o8Zk1hRTYS0WWQm1zP8WmE6nR1VrwnjMouVyeTqbzY5NCRzn8a0xqvGDmsB9jm8J0dlMMAkjCNFyQhRFb3meHw6Hw9r7CHnS/qkKrK/7ZDK5zbLsstPpdPv9/qvrKvimWiwWL3Ec36VpesX5azhgxe3Zs50EUMqfqzehBredpAoKRikcAnUlNlDk1sIhxCTU15YPjbRSAalA0wrQKeg5JGO1qzOQts8uwT994ZzLDC2fghE9H3IfOOdwLjM0MAd84LVQzOQCt4a6wJ2hNnBvaBXcFmq+iiBTyzUnWEYnui8OU39vMBjE1C9/mSJdLbiAreD83QbKOvlIBaQCUgGpgFTg11dA2wVpK32nLXSft9N2u33i88LcdNX8xkm/Cz3xVk4+PmjnPdhkaqaLM8A9iXos3KX5TbOFyTkZvlDPH5rpQowDzE7M25qFt1LTEPxk5V3NwlOtaQhDmvc1Cy/WppHQxHxTs/DgbBqJLuZDmcXc3qYBqDIf2izmbGwaINU84kVrfHQpGutuMNOYkc3Tvws31J7R8/UxSZJr9TkLrbRSAamAVGC3FfgG2OrAbJ3cuyoAAAAASUVORK5CYII="},509:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(92),r=i.n(o),a=i(40),n=i(16);t.default={name:"password",data:function(){return{phone:"",verificationCode:"",isOvertime:!1,word:"获取验证码",iscode:!1,areaCode:this.$route.query.value}},filters:{add:function(e){return"+"+e}},methods:r()({handleGo:function(){this.$router.push({path:"/areaCode",query:{type:2}})}},i.i(n.b)(["setPhone","setUserCode"]),{getCode:function(){var e=this,t=86==this.areaCode?this.phone:this.areaCode+this.phone;i.i(a.d)(this,"/api/person-checkNickPhone/"+t,function(o){if(200==o.returnCode)e.$vux.toast.text("您的手机号未注册");else if(e.setPhone(t),e.sendMessage(),e.isOvertime)e.$vux.toast.text("操作过于频繁，请60S后重试");else{var r={userMob:e.phone,type:"findPwd"};i.i(a.a)(e,r,"/api/verification/sys-getShortMessage",function(t){200==t.returnCode&&e.$vux.toast.text(t.msg)})}})},sendMessage:function(){if(this.isOvertime)return!1;var e=this,t=60,i=setInterval(function(){e.isOvertime=!0,e.iscode=!0,t--,e.word="重新发送"+t+"s",t<0&&(e.isOvertime=!1,e.iscode=!1,clearInterval(i),e.word="获取验证码")},1e3)},handleSubmit:function(){var e=this,t=/^1(3|4|5|7|8)\d{9}$/;if(t.test(this.phone)&&""!=this.verificationCode){var o={phoneId:this.phone,checkCode:this.verificationCode};i.i(a.a)(this,o,"/api/verification/person-checkedCode",function(t){200==t.returnCode?(e.setUserCode(e.verificationCode),e.$router.push({path:"/resetPassword"})):e.$vux.toast.text(t.msg)})}else t.test(this.phone)?""==this.verificationCode&&this.$vux.toast.text("请输入验证码"):this.$vux.toast.text("请输入正确手机号")}})}},552:function(e,t,i){t=e.exports=i(20)(!1),t.push([e.i,"#password[data-v-2f3361cb]{width:100%;height:100%;background:#fff}#password .title[data-v-2f3361cb]{width:100%;height:.5rem;border-top:.2px solid #e9e9e9;border-bottom:.2px solid #e9e9e9;text-align:center;line-height:.5rem;font-size:.18rem;color:#333;margin-bottom:.2rem}#password .oInput[data-v-2f3361cb]{width:3.04rem;height:.44rem;border-radius:4px;border:1px solid #979797;display:block;margin:.2rem auto;color:#999;font-size:.18rem;padding-left:.14rem}#password .oInput .codeInput[data-v-2f3361cb]{width:2rem;height:.42rem;float:left;border:none;outline:none}#password .oInput p[data-v-2f3361cb]{width:.85rem;height:.44rem;font-size:.13rem;line-height:.44rem;text-align:center;float:right}#password .oInput .code[data-v-2f3361cb]{color:#f77583}#password .codeInput[data-v-2f3361cb]{width:3.04rem;height:.44rem;margin:.2rem auto}#password .codeInput div[data-v-2f3361cb]{width:1.8rem;height:.44rem;border-radius:4px;padding-left:.14rem;border:1px solid #979797;float:left;margin-right:.14rem}#password .codeInput div input[data-v-2f3361cb]{width:1.52rem;height:.42rem;border:none;outline:none}#password .codeInput .code[data-v-2f3361cb]{width:1.1rem;height:.44rem;border:0;outline:none;background:#f77583;color:#fff;border-radius:.04rem}#password .submit[data-v-2f3361cb]{margin:.89rem auto;width:3.04rem;height:.44rem;background:#f77583;border-radius:4px;text-align:center;color:#fff;line-height:.44rem;font-size:.18rem}#password .phoneInput[data-v-2f3361cb]{width:3.04rem;height:.44rem;border-radius:4px;border:1px solid #979797;margin:.2rem auto}#password .phoneInput .areaCode[data-v-2f3361cb]{width:.7rem;height:.44rem;float:left;text-align:center;line-height:.44rem}#password .phoneInput .areaCode img[data-v-2f3361cb]{width:.15rem;height:.15rem}#password .phoneInput .phone_wrap[data-v-2f3361cb]{width:2.2rem;height:.44rem;float:right}#password .phoneInput .phone_wrap input[data-v-2f3361cb]{width:2rem;height:.4rem;border:none;outline:none}",""])},613:function(e,t,i){var o=i(552);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(39)("ba0eb88e",o,!0,{})},751:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"password"}},[o("app-load"),e._v(" "),o("div",{staticClass:"title"},[e._v("忘记密码")]),e._v(" "),o("div",{staticClass:"phoneInput"},[o("div",{staticClass:"areaCode",on:{click:function(t){e.handleGo()}}},[o("span",[e._v(e._s(e._f("add")(e.areaCode)))]),e._v(" "),o("img",{attrs:{src:i(361),alt:""}})]),e._v(" "),o("div",{staticClass:"phone_wrap"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.phone,expression:"phone",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),o("div",{staticClass:"codeInput"},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.verificationCode,expression:"verificationCode",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.verificationCode},on:{input:function(t){t.target.composing||(e.verificationCode=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),o("button",{staticClass:"code",attrs:{disabled:e.iscode},on:{click:function(t){e.getCode()}}},[e._v(e._s(e.word))])]),e._v(" "),o("div",{staticClass:"submit",on:{click:function(t){e.handleSubmit()}}},[e._v("提交")])],1)},staticRenderFns:[]}}});