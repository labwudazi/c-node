(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.token,expression:"token",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("button",{on:{click:t.login}},[t._v("登陆")])])},c=[],i={data:function(){return{token:"06d4472b-b879-402c-abcb-e8cd7ccb31bd"}},methods:{login:function(){var t=this;"06d4472b-b879-402c-abcb-e8cd7ccb31bd"===this.token&&this.$axios.post("/accesstoken",{accesstoken:this.token}).then((function(e){t.$router.push("/");var n=e;delete n.success,t.$store.commit("getToken",n),localStorage.setItem("token",!0)})).catch((function(t){return console.log(t)}))}}},r=i,s=n("2877"),a=Object(s["a"])(r,o,c,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.1cfe568a.js.map