webpackJsonp([22],{QpGV:function(t,e){},YHZ0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("uWBr"),o={data:()=>({}),computed:{notice(){return this.$store.state.notice}},created(){n.a.Artivelist().then(t=>{this.$store.commit("NOTICE",t.items)})},methods:{GetNotice(t){n.a.Artivelist().then(e=>{this.$store.commit("NOTICE",e.items),t()})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"notice_list"}},[i("list",{on:{scollDown:t.GetNotice}},[i("div",t._l(t.notice,function(e,n){return i("div",{key:n},[i("div",{domProps:{textContent:t._s(e.body)}}),t._v(" "),i("p",{domProps:{textContent:t._s(t.$time(new Date(1e3*e.add_time)))}})])}),0)])],1)},staticRenderFns:[]};var r=i("VU/8")(o,s,!1,function(t){i("QpGV")},"data-v-6e452b8f",null);e.default=r.exports}});