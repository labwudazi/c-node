(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6da9c87a"],{"0cb2":function(t,e,n){var r=n("7b0b"),c=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,u,s,l){var p=n+t.length,d=u.length,f=o;return void 0!==s&&(s=r(s),f=i),a.call(l,f,(function(r,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(p);case"<":i=s[a.slice(1,-1)];break;default:var o=+a;if(0===o)return r;if(o>d){var l=c(o/10);return 0===l?r:l<=d?void 0===u[l-1]?a.charAt(1):u[l-1]+a.charAt(1):r}i=u[o-1]}return void 0===i?"":i}))}},"14c3":function(t,e,n){var r=n("c6b6"),c=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},3213:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.topic?n("div",{staticClass:"topic"},[n("Panel",{attrs:{width:"900"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",[n("h2",[t._v(" "+t._s(t.topic.title)+" "),n("button",{on:{click:t.collect}},[t._v(" "+t._s(t.topic.is_collect?"取消收藏":"收藏")+" ")])]),n("div",{domProps:{innerHTML:t._s(t.topic.content)}})])]},proxy:!0}],null,!1,1759413570)}),n("Panel",{scopedSlots:t._u([{key:"header",fn:function(){return[n("span",{staticClass:"comment"},[t._v("回复")])]},proxy:!0},{key:"content",fn:function(){return[n("div",[t._l(t.topic.replies,(function(e){return n("div",{key:e.id,staticClass:"comment-item"},[n("img",{attrs:{width:"30px",src:e.author.avatar_url,alt:""}}),n("span",[t._v(t._s(e.author.loginname))]),n("span",{domProps:{innerHTML:t._s(e.content)}}),n("div",[n("button",{class:{"up-active":e.is_uped},on:{click:function(n){return t.upClick(e.id)}}},[t._v(" 点赞"+t._s(e.ups.length)+" ")]),n("button",{on:{click:function(n){return t.otherSubmit(e)}}},[t._v("回复")])]),e.id===t.reply_id?n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reply_text,expression:"reply_text"}],ref:"textarea",refInFor:!0,domProps:{value:t.reply_text},on:{input:function(e){e.target.composing||(t.reply_text=e.target.value)}}}),n("button",{on:{click:function(n){return t.otherSubmit1(e.id)}}},[t._v("回复")])]):t._e()])})),n("br"),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.submit}},[t._v("提交")])],2)]},proxy:!0}],null,!1,3631516840)})],1):t._e()},c=[],a=n("1da1"),i=(n("7db0"),n("ac1f"),n("5319"),n("96cf"),n("89d7")),o={name:"Topic",components:{Panel:i["a"]},data:function(){return{topic:null,text:"",reply_id:"",reply_text:""}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.topicId,r=!0,c=r?"/topic/".concat(n,"? 06d4472b-b879-402c-abcb-e8cd7ccb31bd"):"/topic/".concat(n),e.next=5,t.$axios.get(c);case 5:a=e.sent,t.topic=a.data,console.log(a.data);case 8:case"end":return e.stop()}}),e)})))()},methods:{upClick:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=3,e.$axios.post("/reply/".concat(t,"/ups"),{accesstoken:"06d4472b-b879-402c-abcb-e8cd7ccb31bd"});case 3:r=n.sent,c="06d4472b-b879-402c-abcb-e8cd7ccb31bd",a=e.topic.replies.find((function(e){return e.id===t})),a.is_uped="up"===r.action,"up"===r.action?a.ups.push(c):a.ups.pop();case 8:case"end":return n.stop()}}),n)})))()},submit:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.text,!n){e.next=8;break}return e.next=4,t.$axios.post("topic/".concat(t.topic.id,"/replies"),{accesstoken:"06d4472b-b879-402c-abcb-e8cd7ccb31bd",content:n});case 4:r=e.sent,c={id:r.reply_id,is_uped:!1,ups:[],content:"<p>".concat(n,"</p>"),author:{avatar_url:"https://avatars.githubusercontent.com/u/79759555?v=4&s=120",loginname:"labwudazi"}},t.topic.replies.push(c),t.text="";case 8:case"end":return e.stop()}}),e)})))()},otherSubmit:function(t){var e=t.id,n=t.author;this.reply_id=e,this.reply_text="@".concat(n.loginname),this.$nextTick((function(){this.$refs.textarea[0].focus()}))},otherSubmit1:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.reply_text,!r){n.next=9;break}return n.next=4,e.$axios.post("topic/".concat(e.topic.id,"/replies"),{accesstoken:"06d4472b-b879-402c-abcb-e8cd7ccb31bd",content:r,reply_id:t});case 4:c=n.sent,a={id:c.reply_id,is_uped:!1,ups:[],content:"<p>".concat(r.replace(/@[\w-]+/,"<a href='/user/xxx'>@labwudazi</a>"),"</p>"),author:{avatar_url:"https://avatars.githubusercontent.com/u/79759555?v=4&s=120",loginname:"labwudazi"}},e.topic.replies.push(a),e.reply_text="",e.reply_id="";case 9:case"end":return n.stop()}}),n)})))()},collect:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.topic,r=n.is_collect,c=n.id,console.log(r,c,t.topic),a="06d4472b-b879-402c-abcb-e8cd7ccb31bd",!r){e.next=9;break}return e.next=6,t.$axios.post("/topic_collect/de_collect",{topic_id:c,accesstoken:a});case 6:t.topic.is_collect=!1,e.next=12;break;case 9:return e.next=11,t.$axios.post("/topic_collect/collect",{topic_id:c,accesstoken:a});case 11:t.topic.is_collect=!0;case 12:case"end":return e.stop()}}),e)})))()}}},u=o,s=(n("ed9c"),n("2877")),l=Object(s["a"])(u,r,c,!1,null,null,null);e["default"]=l.exports},"48ca":function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("d784"),c=n("825a"),a=n("50c4"),i=n("a691"),o=n("1d80"),u=n("8aa5"),s=n("0cb2"),l=n("14c3"),p=Math.max,d=Math.min,f=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=r.REPLACE_KEEPS_$0,b=v?"$":"$0";return[function(n,r){var c=o(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,c,r):e.call(String(c),n,r)},function(t,r){if(!v&&x||"string"===typeof r&&-1===r.indexOf(b)){var o=n(e,t,this,r);if(o.done)return o.value}var h=c(t),g=String(this),_="function"===typeof r;_||(r=String(r));var m=h.global;if(m){var y=h.unicode;h.lastIndex=0}var E=[];while(1){var w=l(h,g);if(null===w)break;if(E.push(w),!m)break;var R=String(w[0]);""===R&&(h.lastIndex=u(g,a(h.lastIndex),y))}for(var k="",S=0,$=0;$<E.length;$++){w=E[$];for(var I=String(w[0]),P=p(d(i(w.index),g.length),0),T=[],A=1;A<w.length;A++)T.push(f(w[A]));var C=w.groups;if(_){var O=[I].concat(T,P,g);void 0!==C&&O.push(C);var U=String(r.apply(void 0,O))}else U=s(I,g,P,T,C,r);P>=S&&(k+=g.slice(S,P)+U,S=P+I.length)}return k+g.slice(S)}]}))},"7db0":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").find,a=n("44d2"),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),a(i)},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),c=n("9f7f"),a=n("5692"),i=RegExp.prototype.exec,o=a("native-string-replace",String.prototype.replace),u=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],d=s||p||l;d&&(u=function(t){var e,n,c,a,u=this,d=l&&u.sticky,f=r.call(u),v=u.source,x=0,b=t;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),b=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(v="(?: "+v+")",b=" "+b,x++),n=new RegExp("^(?:"+v+")",f)),p&&(n=new RegExp("^"+v+"$(?!\\s)",f)),s&&(e=u.lastIndex),c=i.call(d?n:u,b),d?c?(c.input=c.input.slice(x),c[0]=c[0].slice(x),c.index=u.lastIndex,u.lastIndex+=c[0].length):u.lastIndex=0:s&&c&&(u.lastIndex=u.global?c.index+c[0].length:e),p&&c&&c.length>1&&o.call(c[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(c[a]=void 0)})),c}),t.exports=u},"9f7f":function(t,e,n){"use strict";var r=n("d039");function c(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),c=n("d039"),a=n("b622"),i=n("9112"),o=a("species"),u=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),l=a("replace"),p=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),d=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var f=a(t),v=!c((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),x=v&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!v||!x||"replace"===t&&(!u||!s||p)||"split"===t&&!d){var b=/./[f],h=n(f,""[t],(function(t,e,n,r,c){return e.exec===RegExp.prototype.exec?v&&!c?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),g=h[0],_=h[1];r(String.prototype,t,g),r(RegExp.prototype,f,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}l&&i(RegExp.prototype[f],"sham",!0)}},ed9c:function(t,e,n){"use strict";n("48ca")}}]);
//# sourceMappingURL=chunk-6da9c87a.2b95462e.js.map