(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{23:function(e,t,o){"use strict";var n=o(5);o.n(n).a},24:function(e,t,o){"use strict";var n=o(6);o.n(n).a},43:function(e,t,o){"use strict";var n=o(7);o.n(n).a},44:function(e,t,o){"use strict";var n=o(8);o.n(n).a},45:function(e,t,o){"use strict";var n=o(9);o.n(n).a},46:function(e,t,o){},47:function(e,t,o){},48:function(e,t,o){"use strict";o.r(t);var n=o(0),s=o(10),i=o(3),a=o(21),r={data:()=>({author:"Jokcy"}),render(){const e=arguments[0];return e("div",{attrs:{id:"footer"}},[e("span",["Written by ",this.author])])}},l=(o(23),o(1)),c=Object(l.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"spinner"},[t("div",{staticClass:"dot1"}),this._v(" "),t("div",{staticClass:"dot2"})])}],!1,null,"2c67e210",null).exports,d={metaInfo:{title:"zjpde ssr"},methods:{tips(){this.$tips({content:"test $notify",btn:"close"})},tapChange(e){this.tapVlaue=e}},data:()=>({text:"你哈ssjjs",tapVlaue:"1"}),computed:(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e})({},Object(i.c)(["loading"])),components:{Footer:r,Loading:c}},u=(o(24),Object(l.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"box"}},[e._v("\n  这是app"+e._s(e.text)+"\n  "),o("Footer"),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{id:"loading"}},[o("Loading")],1),e._v(" "),o("span",[e._v("skskk")]),e._v(" "),o("router-view"),e._v(" "),o("button",{on:{click:e.tips}},[e._v("click")]),e._v(" "),o("taps",{attrs:{value:e.tapVlaue},on:{change:e.tapChange}},[o("tap",{attrs:{label:"tap123",index:"1"}},[o("div",[e._v("content 1")])]),e._v(" "),o("tap",{attrs:{index:"2"}},[o("span",{attrs:{slot:"label"},slot:"label"},[e._v("tap234")]),e._v(" "),o("div",[e._v("content 2")])]),e._v(" "),o("tap",{attrs:{label:"tap456",index:"3"}},[o("div",[e._v("content 3")])])],1)],1)}),[],!1,null,"3902dc4b",null).exports),p=[{path:"/home",redirect:"/"},{path:"/",component:()=>o.e(2).then(o.bind(null,49)),name:"home",meta:{title:"this is app",description:"asdasd"},beforeEnter(e,t,o){console.log("app route before enter"),o()}},{path:"/login",component:()=>o.e(3).then(o.bind(null,50))},{path:"/about",component:()=>o.e(0).then(o.bind(null,51))}],h={count:0,firstName:"Jokcy",lastName:"Lou",todos:[],user:null,loading:!1},v={updateCount(e,{num:t,num2:o}){console.log(o),e.count=t},fillTodos(e,t){e.todos=t,console.log("-----state----",e)},addTodo(e,t){e.todos.unshift(t)},updateTodo(e,{id:t,todo:o}){e.todos.splice(e.todos.findIndex(e=>e.id===t),1,o)},deleteTodo(e,t){e.todos.splice(e.todos.findIndex(e=>e.id===t),1)},deleteAllCompleted(e){e.todos=e.todos.filter(e=>!e.completed)},doLogin(e,t){e.user=t},startLoading(e){e.loading=!0},endLoading(e){e.loading=!1}},m={fullName:e=>`${e.firstName} 123 ${e.lastName}`},f=o(11),g=o.n(f);const b=(e,t)=>{const o=new Error(t);return o.code=e,o},$=new n.a,y=g.a.create({baseURL:"/"}),_=e=>new Promise((t,o)=>{e.then(e=>{const n=e.data;return n?n.success?void t(n.data):o(b(400,n.message)):o(b(400,"no data"))}).catch(e=>{const t=e.response;console.log("---------------",t),401===t.status&&o(b(401,"need auth"))})});var C={goLogin:(e,t)=>(console.log("username, password",e,t),_(y.post("/user/login",{username:e,password:t}))),getAllTodos:()=>_(y.get("/api/todos"))},x={name:"Notification",props:{content:{type:String,required:!0},btn:{type:String,default:"关闭"}},data:()=>({visible:!0}),computed:{style:()=>({})},methods:{handleClose(e){e.preventDefault(),this.$emit("close")},afterLeave(){this.$emit("closed")},afterEnter(){},clearTimer(){},createTimer(){}}},T=(o(43),Object(l.a)(x,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"fade"},on:{"after-leave":e.afterLeave,"after-enter":e.afterEnter}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"notification",style:e.style,on:{mouseenter:e.clearTimer,mouseleave:e.createTimer}},[o("span",{staticClass:"content"},[e._v(e._s(e.content))]),e._v(" "),o("a",{staticClass:"btn",on:{click:e.handleClose}},[e._v(e._s(e.btn))])])])}),[],!1,null,"8608a98a",null).exports),w={extends:T,computed:{style(){return{position:"fixed",right:"20px",bottom:`${this.verticalOffset}px`}}},mounted(){this.createTimer()},methods:{createTimer(){console.log(this.autoClose),this.autoClose&&(this.timer=setTimeout(()=>{this.visible=!1},this.autoClose))},clearTimer(){this.timer&&clearTimeout(this.timer)},afterEnter(){this.height=this.$el.offsetHeight,console.log(this,this.$el.offsetHeight)}},beforeDestory(){this.clearTimer()},data:()=>({verticalOffset:0,autoClose:3e3,height:0,visible:!1})},O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};const j=n.a.extend(w),L=[];let k=1;var E=e=>{if(n.a.prototype.$isServer)return;const{autoClose:t}=e,o=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["autoClose"]),s=new j({propsData:O({},o),data:{autoClose:void 0===t?3e3:t}}),i=`notification_${k++}`;s.id=i,s.vm=s.$mount(),document.body.appendChild(s.vm.$el),s.vm.visible=!0;let a=0;return L.forEach(e=>{a+=e.$el.offsetHeight+16}),a+=16,s.verticalOffset=a,L.push(s),s.vm.$on("closed",()=>{(e=>{if(!e)return;const t=L.length,o=L.findIndex(t=>e.id===t.id);if(L.splice(o,1),t<=1)return;const n=e.vm.height;console.log("removeHeight",n);for(let e=o;e<t-1;e++)L[e].verticalOffset=parseInt(L[e].verticalOffset)-n-16})(s),document.body.removeChild(s.vm.$el),s.vm.$destroy()}),s.vm.$on("close",()=>{s.vm.visible=!1}),s.vm};const I=e=>{401===e.code&&(E({content:"你得先登录啊！"}),$.$emit("auth"))};var N={fetchTodos:({commit:e})=>(e("startLoading"),C.getAllTodos().then(t=>{e("endLoading"),console.log("------zjp----",t),e("fillTodos",t)}).catch(t=>{e("endLoading"),I(t)})),loginAction:({commit:e},{username:t,password:o})=>(e("startLoading"),new Promise((n,s)=>{C.goLogin(t,o).then(t=>{e("doLogin",t),E({content:"登录成功"}),n(),e("endLoading")}).catch(t=>{I(t),s(t),e("endLoading")})}))};var S={name:"Tips",props:{content:{type:String,required:!0},btn:{type:String,default:"关闭"}},data:()=>({visible:!0}),computed:{style:()=>({})},methods:{handleClose(e){e.preventDefault(),this.visible=!1,this.$emit("close")},createTimer(){},clearTimer(){}}},A=(o(44),Object(l.a)(S,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],style:e.style,attrs:{id:"tips"},on:{mouseenter:e.clearTimer,mouseleave:e.createTimer}},[o("span",[e._v(e._s(e.content))]),e._v(" "),o("button",{on:{click:e.handleClose}},[e._v(e._s(e.btn))])])}),[],!1,null,"f88e405e",null).exports),H={extends:A,computed:{style(){return{position:"fixed",right:"20px",bottom:`${this.verticalOffset}px`}}},data:()=>({verticalOffset:0,autoClose:3e3,height:0,visible:!1}),mounted(){this.createTimer()},updated(){console.log("height",this.$el.offsetHeight),this.height=this.$el.offsetHeight},methods:{createTimer(){console.log(this.autoClose),this.autoClose&&(this.timer=setTimeout(()=>{this.$emit("destory",this),this.visible=!1},this.autoClose))},clearTimer(){this.timer&&clearTimeout(this.timer)}},beforeDestory(){this.clearTimer()}},P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};const D=n.a.extend(H),q=[];let J=0;var V=e=>{if(n.a.prototype.$isServer)return;const{autoClose:t}=e,o=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["autoClose"]),s=new D({propsData:P({},o),data:()=>({autoClose:void 0===t?"3000":t})});s.id=`tips_${J++}`,console.log("instandce:",s,s===s.$mount()),s.vm=s.$mount(),document.body.appendChild(s.vm.$el),s.vm.visible=!0;let i=0;return q.forEach(e=>{i+=e.$el.offsetHeight+16}),i+=16,s.verticalOffset=i,q.push(s),s.$on("destory",e=>{(e=>{if(!e)return;const t=q.length,o=q.findIndex(t=>e.id===t.id);if(q.splice(o,1),t<=1)return;const n=e.vm.height;console.log("removeHeight",n);for(let e=o;e<t-1;e++)q[e].verticalOffset=parseInt(q[e].verticalOffset)-n-16})(e),document.body.removeChild(s.vm.$el),s.vm.$destroy()}),s.$on("close",()=>{const e=q.length;let t;if(q.forEach((e,o)=>{if(s.id===e.id)return t=o,q.splice(o,1)}),e>1){const o=s.vm.height;console.log("removeHeight",o);for(let n=t;n<e-1;n++)q[n].verticalOffset=parseInt(q[n].verticalOffset)-o-16}s.vm.visible=!1,document.body.removeChild(s.vm.$el),s.vm.$destroy()}),s.vm},z={props:{contents:{type:Array,required:!0}},render(){return(0,arguments[0])("div",{class:"tap-content"},[this.contents.map(e=>e.active?e.$slots.default:"")])}},F={name:"Taps",components:{TapContarner:Object(l.a)(z,void 0,void 0,!1,null,null,null).exports},props:{value:{type:[String,Number],required:!0}},methods:{handleChange(e){this.$emit("change",e)}},data:()=>({contents:[]}),render(){const e=arguments[0];return e("div",{class:"taps"},[e("ul",{class:"taps-header"},[this.$slots.default]),e("tap-contarner",{attrs:{contents:this.contents}})])}},R=(o(45),Object(l.a)(F,void 0,void 0,!1,null,null,null).exports),B={name:"Tap",props:{index:{type:[String,Number],required:!0},label:{type:String,default:"tap"}},computed:{active(){return this.$parent.value===this.index}},mounted(){this.$parent.contents.push(this)},methods:{handleClick(){this.$parent.handleChange(this.index)}},render(){const e=arguments[0],t={tap:!0,active:this.active};console.log("===================================="),console.log("====================================");const o=this.$slots.label||e("span",[this.label]);return e("li",{class:t,on:{click:this.handleClick}},[o])}},U=Object(l.a)(B,void 0,void 0,!1,null,null,null).exports;o(46),o(47);n.a.use(s.a),n.a.use(i.a),n.a.use(a.a),n.a.use(e=>{n.a.component(A.name,A),n.a.prototype.$tips=V}),n.a.use(e=>{e.component(T.name,T),e.prototype.$notify=E}),n.a.use(e=>{e.component(R.name,R),e.component(U.name,U)}),n.a.prototype.$axios=g.a;const{app:W,router:G,store:K}=(()=>{const e=new s.a({routes:p,mode:"history",linkActiveClass:"active-link",linkExactActiveClass:"exact-active-link",scrollBehavior:(e,t,o)=>o||{x:0,y:0}}),t=new i.a.Store({strict:!1,state:h,mutations:v,getters:m,actions:N});return{app:new n.a({router:e,store:t,render:e=>e(u)}),router:e,store:t}})();window.__INITIAL_STATE__&&K.replaceState(window.__INITIAL_STATE__),$.$on("auth",e=>{G.push("/login")}),G.onReady(()=>{W.$mount("#root")})},5:function(e,t,o){},6:function(e,t,o){},7:function(e,t,o){},8:function(e,t,o){},9:function(e,t,o){}},[[48,4,5]]]);