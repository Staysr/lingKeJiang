(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-merchant-info"],{"198d":function(t,i,e){t.exports=e.p+"static/img/phone.c288d242.svg"},"1ad4":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"tabbar"},[n("img",{staticClass:"bgImg",attrs:{src:e("7020")}}),n("v-uni-view",{staticClass:"cu-card dynamic",staticStyle:{position:"absolute",top:"180rpx",width:"750rpx"}},[""!=t.companyList?n("v-uni-view",{staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"cu-list menu-avatar"},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"cu-avatar radius lg",style:"background-image:url("+t.companyList.image+")"}),n("v-uni-view",{staticClass:"content flex-sub text-bold"},[n("v-uni-view",[t._v(t._s(t.companyList.company_auth.company_name))])],1),n("v-uni-view",{staticStyle:{"margin-right":"15rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.focus()}}},[n("v-uni-button",{staticClass:"cu-btn round shadow",class:t.isocusData.id>0?"bg-blue":"bg-grey"},[t._v(t._s(t.isocusData.id>0?"已关注":"关注"))])],1)],1)],1),n("v-uni-view",{staticClass:"text-content",staticStyle:{height:"175rpx",padding:"0","margin-bottom":"0"}},[n("v-uni-view",{staticClass:"map"},[n("v-uni-view",{staticStyle:{"padding-top":"25rpx"}},[n("v-uni-text",{staticClass:"cuIcon-locationfill",staticStyle:{color:"#999999","margin-left":"40rpx"}}),n("v-uni-view",{staticClass:"content flex-sub text-bold",staticStyle:{display:"inline-block","margin-left":"12rpx"}},[n("v-uni-view",[t._v("距离 "+t._s(t.currentPosition)+"km")])],1)],1),n("v-uni-view",{staticClass:"text-gray",staticStyle:{"margin-left":"40rpx","margin-top":"8rpx",width:"87%"},on:{longpress:function(i){arguments[0]=i=t.$handleEvent(i),t.copyText(t.companyList.company_auth.address)}}},[t._v(t._s(t.companyList.company_auth.address))]),n("img",{staticStyle:{"margin-right":"30rpx",position:"absolute",right:"22rpx",top:"180rpx",width:"80rpx",height:"80rpx"},attrs:{src:e("198d")},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.dialNumber(t.companyList.company_auth.contact)}}}),n("v-uni-view",{staticClass:"text-gray",staticStyle:{position:"absolute",right:"64rpx",bottom:"83rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.dialNumber(t.companyList.company_auth.contact)}}},[t._v("电话")])],1)],1)],1):t._e()],1)],1),n("v-uni-view",{staticStyle:{"margin-top":"230rpx","margin-left":"30rpx"}},[n("v-uni-scroll-view",{staticClass:"nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.option,(function(i,e){return n("v-uni-view",{key:e,staticClass:"cu-item",class:e==t.TabCur?"text-blue cur":"",attrs:{"data-id":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(i.name))])})),1)],1),t._l(t.dongtList.results,(function(i,a){return 0==t.TabCur?n("v-uni-view",{staticClass:"cu-card dynamic no-card",staticStyle:{"border-radius":"15px","margin-left":"30rpx","margin-top":"20rpx","margin-right":"30rpx","margin-bottom":"20rpx"}},[n("v-uni-view",{staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"cu-list menu-avatar",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dyinfo(i.id)}}},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"cu-avatar radius lg",style:"background-image:url("+i.user.image+")"}),n("v-uni-view",{staticClass:"content flex-sub"},[n("v-uni-view",[t._v(t._s(i.user.company_auth.company_name))]),n("v-uni-view",{staticClass:"text-gray text-sm flex justify-between"},[t._v(t._s(i.create_time))])],1)],1)],1),n("v-uni-view",{staticClass:"text-content",staticStyle:{"margin-top":"22rpx"}},[t._v(t._s(i.title))]),n("v-uni-view",{staticClass:"grid flex-sub padding-lr",class:i.activity_images.length>1?"col-3 grid-square":"col-1"},t._l(i.activity_images,(function(e,a){return n("v-uni-view",{key:a,staticClass:"bg-img",class:i.activity_images.length>1?"":"only-img",style:"background-image:url("+e.image+")",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(i.activity_images)}}})})),1),n("v-uni-view",{staticClass:"text-sm text-right padding"},[n("v-uni-view",{staticStyle:{display:"inline-block",float:"left","margin-left":"15rpx"}},[n("img",{staticStyle:{width:"20rpx","padding-top":"12rpx"},attrs:{src:e("5bde")}}),n("v-uni-text",{staticStyle:{"margin-left":"12rpx"}},[t._v("分享")])],1),n("v-uni-view",{staticStyle:{display:"inline-block","margin-right":"20rpx"}},[n("img",{staticStyle:{width:"20rpx","padding-top":"12rpx"},attrs:{src:e("8b47")}}),n("v-uni-text",{staticStyle:{"margin-left":"12rpx"}},[t._v("收藏")])],1),n("v-uni-view",{staticStyle:{display:"inline-block"}},[n("img",{staticStyle:{width:"20rpx","padding-top":"12rpx"},attrs:{src:e("fb2c")}}),n("v-uni-text",{staticStyle:{"margin-left":"12rpx"}},[t._v("评论")])],1)],1)],1)],1):t._e()})),0!=t.TabCur?n("v-uni-view",{staticClass:"cu-list menu-avatar",staticStyle:{"margin-top":"10rpx"}},[n("v-uni-view",{staticStyle:{"margin-left":"35rpx","padding-bottom":"25rpx","background-color":"#fff","border-radius":"20rpx","margin-right":"30rpx"}},[n("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"margin-left":"12rpx",height:"175rpx",width:"250rpx","margin-top":"20rpx"}}),n("v-uni-view",{staticClass:"text-black text-sm flex",staticStyle:{position:"relative",left:"290rpx",top:"-130rpx",width:"400rpx"}},[n("v-uni-view",{staticStyle:{position:"absolute",overflow:"hidden","text-overflow":"ellipsis","font-size":"30rpx","font-family":"PingFangSC-Medium, PingFang SC","font-weight":"500",color:"#333333"}},[t._v("1111111111")])],1),n("v-uni-view",{staticClass:"text-black text-sm flex",staticStyle:{position:"relative",left:"290rpx",top:"-60rpx",width:"400rpx"}},[n("v-uni-view",{staticStyle:{position:"absolute",overflow:"hidden","text-overflow":"ellipsis","font-size":"38rpx","font-family":"PingFangSC-Medium, PingFang SC","font-weight":"500",color:"#FF7233"}},[t._v("¥99")])],1)],1)],1):t._e()],2)},s=[]},"1de5":function(t,i,e){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2bdc":function(t,i,e){var n=e("24fb"),a=e("1de5"),s=e("3f36");i=n(!1);var o=a(s);i.push([t.i,".bgImg[data-v-0babbd40]{width:100%;height:%?320?%}.map[data-v-0babbd40]{background-image:url("+o+");width:90%;height:100%}",""]),t.exports=i},"35eb":function(t,i,e){"use strict";var n=e("8e01"),a=e.n(n);a.a},"3f36":function(t,i,e){t.exports=e.p+"static/img/map.14c6a67d.png"},5598:function(t,i,e){"use strict";e.r(i);var n=e("738d"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"5bde":function(t,i,e){t.exports=e.p+"static/img/forward.f794eba6.svg"},7020:function(t,i,e){t.exports=e.p+"static/img/info@2.22af5859.png"},"738d":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("9c20")),s={data:function(){return{TabCur:0,scrollLeft:0,option:[{name:"动态",value:1},{name:"精选服务",value:2}],companyList:[],dongtList:[],opt:[],isocusData:[],currentPosition:0}},onLoad:function(t){this.getcompanyList(t)},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)},getjuLi:function(){var t=this,i=uni.getStorageSync("currentPosition"),e="";void 0!=i?e=i.longitude+","+i.latitude:uni.showToast({icon:"none",title:"当前没有选择地址"}),a.default.httpRequest({url:"distance/?origins="+this.companyList.company_auth.longitude+","+this.companyList.company_auth.latitude+"&destination="+e,method:"get"}).then((function(i){if(200!=i.statusCode)uni.showToast({icon:"none",title:"请求错误"});else if(void 0!=i.data[0]){var e=i.data[0].distance/1e3;t.currentPosition=e.toFixed(1)}}),(function(t){console.log(t)}))},copyText:function(t){uni.setClipboardData({data:t,success:function(){uni.showToast({title:"已复制到剪贴板",icon:"none",position:"top"})}})},isocus:function(){var t=this;a.default.httpRequest({url:"user_focus/"+this.companyList.id,method:"get"}).then((function(i){200!=i.statusCode?uni.showToast({icon:"none",title:"请求错误"}):t.isocusData=i.data}),(function(t){console.log(t)}))},focus:function(){var t=this,i={company:this.companyList.id};this.isocusData.id>0?a.default.httpRequest({url:"user_focus/"+i.company,method:"delete"}).then((function(i){void 0!==i.data["non_field_errors"]?"已关注"==i.data.non_field_errors[0]&&(t.isocusData.id=999):t.isocusData=i.data,uni.showToast({icon:"none",title:"已取消关注"})}),(function(t){console.log(t)})):a.default.httpRequest({url:"user_focus/",method:"post"},i).then((function(i){void 0!==i.data["non_field_errors"]?"已关注"==i.data.non_field_errors[0]&&(t.isocusData.id=999):t.isocusData=i.data,uni.showToast({icon:"none",title:"关注成功"})}),(function(t){console.log(t)}))},dyinfo:function(t){uni.navigateTo({url:"../dynamicDetails/dynamicDetails?id="+t})},preview:function(t){for(var i=[],e=0;e<t.length;e++)i.push(t[e]["image"]);uni.previewImage({urls:i})},getcompanyList:function(t){var i=this;a.default.httpRequest({url:"company_user/"+t.id,method:"get"}).then((function(t){if(200==t.statusCode)return i.companyList=t.data,i.activity(),i.isocus(),void i.getjuLi();uni.showToast({icon:"none",title:"请求错误"})}),(function(t){console.log(t)}))},activity:function(){var t=this;a.default.httpRequest({url:"activity/",method:"get"},{complex:this.companyList.company_auth.complex.id,user_id:this.companyList.id,category:1}).then((function(i){200!=i.statusCode?uni.showToast({icon:"none",title:"请求错误"}):t.dongtList=i.data}),(function(t){console.log(t)}))},dialNumber:function(t){uni.makePhoneCall({phoneNumber:t})}}};i.default=s},"8b47":function(t,i,e){t.exports=e.p+"static/img/like.ab2a1e3b.svg"},"8e01":function(t,i,e){var n=e("2bdc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("0771928d",n,!0,{sourceMap:!1,shadowMode:!1})},"9c20":function(t,i,e){"use strict";e("d3b7"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n="http://43.138.41.167:8000/",a=function(t,i){var e={url:n+t.url,data:i,method:t.method,header:"get"==t.method?{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer "+uni.getStorageSync("Authorization")}:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Authorization:"Bearer "+uni.getStorageSync("Authorization")},dataType:"json"},a=new Promise((function(t,i){uni.request(e).then((function(i){if(401==i[1].statusCode&&"token_not_valid"==i[1].data.code)return uni.redirectTo({url:"../../pages/login/index"}),!1;t(i[1])})).catch((function(t){i(t)}))}));return a},s=function(t,i){var e="";uni.getStorage({key:"token",success:function(t){e=t.data}});var a={url:n+t.url,data:i,method:t.method,header:"get"==t.method?{Token:e,"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}:{Token:e,"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},dataType:"json"},s=new Promise((function(t,i){uni.request(a).then((function(i){t(i[1])})).catch((function(t){i(t)}))}));return s},o={baseUrl:n,httpRequest:a,httpTokenRequest:s};i.default=o},c248:function(t,i,e){"use strict";e.r(i);var n=e("1ad4"),a=e("5598");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("35eb");var o,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"0babbd40",null,!1,n["a"],o);i["default"]=r.exports},fb2c:function(t,i,e){t.exports=e.p+"static/img/comment.45b290d5.svg"}}]);