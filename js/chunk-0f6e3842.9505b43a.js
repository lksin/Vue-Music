(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f6e3842"],{"0877":function(t,e,s){},"42ac":function(t,e,s){"use strict";s("0877")},c5fc:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mv-page"},[t.mvInfo.id?s("div",{staticClass:"mv-info"},[s("div",{staticClass:"mv-title"},[s("a",{staticClass:"iconfont icon-arrow-left pr_20",attrs:{href:"#/"}}),t._v(t._s(t.mvInfo.name)+"\n    ")]),s("div",{staticClass:"mv-ar"},[t._v("\n      "+t._s(t.mvInfo.ar.map((function(t){return t.name})).join(" "))+"\n      "),s("i",{staticClass:"iconfont icon-mv pl_20 ft_12"}),s("span",{staticClass:"pl_5 ft_12"},[t._v(t._s(t.mvInfo.playCount))]),s("span",{staticClass:"mv-time"},[t._v(t._s(t.mvInfo.publishTime))])]),s("video",{staticClass:"video-content",attrs:{poster:t.mvInfo.cover,controls:"",src:t.mvInfo.url}})]):t._e(),s("div",{staticClass:"recommend-list hide-scroll"},[s("div",{ref:"recommendList"},t._l(t.recommend,(function(e){return s("div",{key:e.id,staticClass:"recommend-item",on:{click:function(s){return t.changeUrlQuery({id:e.id,from:e.platform},"#/mv")}}},[s("img",{staticClass:"r-m-cover",attrs:{src:e.cover,alt:""}}),s("div",{staticClass:"r-m-name"},[t._v(t._s(e.name))])])})),0)]),t.errMessage?s("a",{staticClass:"err-message",attrs:{href:"#/"}},[s("div",[t._v(t._s(t.errMessage))]),s("div",{staticStyle:{"font-size":"18px","margin-top":"20px"}},[t._v("点我返回 >_< ")])]):t._e()])},n=[],r=(s("96cf"),s("1da1")),a=s("ceb6"),o=s("3f0b"),c=s("0828"),m={name:"Mv",data:function(){var t=this.$route.query,e=t.id,s=t.from;return{id:e,platform:s||"163",mvInfo:{},recommend:[],recommendHeight:0,errMessage:""}},watch:{$route:function(t){this.id=t.query.id,this.platform=t.query.from||"163",this.queryMv()}},created:function(){this.$store.dispatch("updateShowCover",!1),this.$store.dispatch("updateMode","mv"),window.UPDARE_PLAYING_STATUS(!1),this.queryMv()},mounted:function(){},methods:{queryMv:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this.id,s=this.platform,t.next=4,Object(a["c"])({api:"MV",data:{id:e,_p:s}});case 4:i=t.sent,this.errMessage="",this.mvInfo=i.data,this.mvInfo.playCount=Object(c["d"])(this.mvInfo.playCount),this.mvInfo.publishTime=this.mvInfo.publishTime?Object(o["a"])(this.mvInfo.publishTime).str():"",this.recommend=i.data.recommend||[],t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),this.errMessage="MV 找不到呀 TAT";case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}(),changeUrlQuery:c["a"]}},v=m,u=(s("42ac"),s("2877")),f=Object(u["a"])(v,i,n,!1,null,"79a0fb3c",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-0f6e3842.9505b43a.js.map