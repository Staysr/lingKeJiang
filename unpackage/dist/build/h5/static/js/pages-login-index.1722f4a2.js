(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"164f":function(t,e,n){"use strict";var i=n("cfeb"),o=n.n(i);o.a},"1d89":function(t,e,n){"use strict";n.r(e);var i=n("3371"),o=n("4a8b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("164f");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"43e6f38b",null,!1,i["a"],s);e["default"]=r.exports},3371:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-image",{attrs:{src:n("ea50")}})],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"list-call"},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/login/1.png"}}),i("v-uni-input",{staticClass:"sl-input",attrs:{type:"number",maxlength:"11",placeholder:"手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"list-call"},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/login/3.png"}}),i("v-uni-input",{staticClass:"sl-input",attrs:{type:"number",maxlength:"6",placeholder:"验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),i("v-uni-view",{staticClass:"yzm",class:{yzms:t.second>0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getcode.apply(void 0,arguments)}}},[t._v(t._s(t.yanzhengma))])],1)],1),i("v-uni-view",{staticClass:"button-login",attrs:{"hover-class":"button-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindLogin.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("登入")])],1),i("v-uni-view",{staticClass:"agreement"},[i("v-uni-image",{attrs:{src:1==t.agreement?"/static/login/ty1.png":"/static/login/ty0.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agreementSuccess.apply(void 0,arguments)}}}),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agreementSuccess.apply(void 0,arguments)}}},[t._v("同意")]),i("v-uni-navigator",{attrs:{"hover-class":"none",url:"agreement?id=1","open-type":"navigate"}},[t._v("《软件用户协议》")])],1)],1)},a=[]},"4a8b":function(t,e,n){"use strict";n.r(e);var i=n("8af7"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"7d52":function(t,e,n){function i(t){return RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(t)}function o(t){return RegExp(/^1[345678]\d{9}$/).test(t)}n("4d63"),n("ac1f"),n("25f0"),t.exports={checkEmail:i,checkMobile:o}},"8af7":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a,s=i(n("9c20")),c=i(n("7d52")),r={data:function(){return{phone:"",password:"",code:"",invitation:"",agreement:!0,showPassword:!1,second:0}},computed:{yanzhengma:function(){return 0==this.second?"获取验证码":this.second<10?"重新获取0"+this.second:"重新获取"+this.second}},onLoad:function(){o=this;var t=uni.getStorageSync("Authorization");void 0==t&&""==t||uni.switchTab({url:"../index/index"})},onUnload:function(){clearInterval(a),this.second=0,this.clear()},methods:{clear:function(){clearInterval(a),a=null,this.second=0},display:function(){this.showPassword=!this.showPassword},agreementSuccess:function(){this.agreement=!this.agreement},getcode:function(){var t=this;if(11==this.phone.length)return c.default.checkMobile(this.phone)?void(this.second>0||(this.second=60,s.default.httpTokenRequest({url:"sms/",method:"post"},{mobile:this.phone}).then((function(e){if(400==e.statusCode)return uni.showToast({icon:"none",position:"bottom",title:"手机号格式错误"}),t.second=0,!1;uni.showToast({icon:"none",position:"bottom",title:"发送成功"}),a=setInterval((function(){o.second--,0==o.second&&o.clear()}),1e3)}),(function(e){t.second})))):(uni.showToast({icon:"none",position:"bottom",title:"手机号格式不正确"}),!1);uni.showToast({icon:"none",title:"手机号不正确"})},bindLogin:function(){if(0!=this.agreement){if(11==this.phone.length)return c.default.checkMobile(this.phone)?void(6==this.code.length?s.default.httpTokenRequest({url:"login/",method:"post"},{mobile:this.phone,code:this.code}).then((function(t){if(200==t.statusCode)return uni.setStorageSync("Authorization",t.data.access),uni.showToast({icon:"none",title:"登入成功"}),void uni.navigateBack({delta:1});uni.showToast({icon:"none",title:"请求错误"})}),(function(t){console.log(res)})):uni.showToast({icon:"none",title:"验证码不正确"})):(uni.showToast({icon:"none",position:"bottom",title:"手机号格式不正确"}),!1);uni.showToast({icon:"none",title:"手机号不正确"})}else uni.showToast({icon:"none",title:"请先阅读《软件用户协议》"})}}};e.default=r},"9c20":function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="http://43.138.41.167:8000/",o=function(t,e){var n={url:i+t.url,data:e,method:t.method,header:"get"==t.method?{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer "+uni.getStorageSync("Authorization")}:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Authorization:"Bearer "+uni.getStorageSync("Authorization")},dataType:"json"},o=new Promise((function(t,e){uni.request(n).then((function(e){if(401==e[1].statusCode&&"token_not_valid"==e[1].data.code)return uni.redirectTo({url:"../../pages/login/index"}),!1;t(e[1])})).catch((function(t){e(t)}))}));return o},a=function(t,e){var n="";uni.getStorage({key:"token",success:function(t){n=t.data}});var o={url:i+t.url,data:e,method:t.method,header:"get"==t.method?{Token:n,"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}:{Token:n,"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},dataType:"json"},a=new Promise((function(t,e){uni.request(o).then((function(e){t(e[1])})).catch((function(t){e(t)}))}));return a},s={baseUrl:i,httpRequest:o,httpTokenRequest:a};e.default=s},a528:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-43e6f38b]{display:flex;flex-direction:column;justify-content:center}.header[data-v-43e6f38b]{width:%?161?%;height:%?161?%;\n\t/* background: rgba(63, 205, 235, 1); */box-shadow:%?0?% %?12?% %?13?% %?0?% rgba(63,205,235,.47);border-radius:50%;margin-top:%?30?%;margin-left:auto;margin-right:auto}.header uni-image[data-v-43e6f38b]{width:%?161?%;height:%?161?%;border-radius:50%}.list[data-v-43e6f38b]{display:flex;flex-direction:column;padding-top:%?50?%;padding-left:%?70?%;padding-right:%?70?%}.list-call[data-v-43e6f38b]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:%?100?%;color:#333;border-bottom:.5px solid #e2e2e2}.list-call .img[data-v-43e6f38b]{width:%?40?%;height:%?40?%}.list-call .sl-input[data-v-43e6f38b]{flex:1;text-align:left;font-size:%?32?%;margin-left:%?16?%}.yzm[data-v-43e6f38b]{color:#ff7d13;font-size:%?24?%;line-height:%?64?%;padding-left:%?10?%;padding-right:%?10?%;width:auto;height:%?64?%;border:%?1?% solid #ffa800;border-radius:%?50?%}.yzms[data-v-43e6f38b]{color:#999!important;border:%?1?% solid #999}.button-login[data-v-43e6f38b]{color:#fff;font-size:%?34?%;width:%?470?%;height:%?100?%;line-height:%?100?%;background:linear-gradient(-90deg,#3fcdeb,#bce29e);box-shadow:%?0?% %?0?% %?13?% %?0?% rgba(164,217,228,.2);border-radius:%?50?%;text-align:center;margin-left:auto;margin-right:auto;margin-top:%?100?%}.button-hover[data-v-43e6f38b]{background:linear-gradient(-90deg,rgba(63,205,235,.8),rgba(188,226,158,.8))}.agreement[data-v-43e6f38b]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:%?30?%;margin-top:%?80?%;color:#ffa800;text-align:center;height:%?40?%;line-height:%?40?%}.agreement uni-image[data-v-43e6f38b]{width:%?40?%;height:%?40?%}",""]),t.exports=e},cfeb:function(t,e,n){var i=n("a528");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("71c99260",i,!0,{sourceMap:!1,shadowMode:!1})},ea50:function(t,e,n){t.exports=n.p+"static/img/logo.3a20c10a.svg"}}]);