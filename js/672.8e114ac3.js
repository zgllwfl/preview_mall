"use strict";(self["webpackChunkmall"]=self["webpackChunkmall"]||[]).push([[672],{170:function(t,e,n){n.d(e,{Fg:function(){return o},Ho:function(){return a},RM:function(){return i},Rh:function(){return c},p6:function(){return l}});var s=n(4471);const o=t=>(0,s.Z)({url:"/address"}),l=t=>(0,s.Z)({url:"/address",method:"POST",data:t}),a=t=>(0,s.Z)({url:`/address/${t}`,method:"DELETE"}),i=({id:t,user_id:e,country:n,...o})=>(0,s.Z)({url:`/address/${t}`,method:"PUT",data:o}),c=t=>(0,s.Z)({url:`/address/${t}`,method:"PATCH"})},6899:function(t,e,n){n.d(e,{Z:function(){return m}});var s=n(3396);const o={class:"nav-bar"},l={class:"nav-left"},a={class:"nav-center"},i=(0,s.Uk)("标题"),c={class:"nav-right"};function r(t,e){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",l,[(0,s.WI)(t.$slots,"left",{},void 0,!0)]),(0,s._)("div",a,[(0,s.WI)(t.$slots,"center",{},(()=>[i]),!0)]),(0,s._)("div",c,[(0,s.WI)(t.$slots,"right",{},void 0,!0)])])}var d=n(89);const u={},f=(0,d.Z)(u,[["render",r],["__scopeId","data-v-6887fa4f"]]);var m=f},672:function(t,e,n){n.r(e),n.d(e,{default:function(){return J}});var s=n(3396),o=n(4870),l=n(678),a=n(7991),i=(n(767),n(7619)),c=(n(1643),n(1514)),r=n(7139),d=n(9242),u=n(170);const f=t=>((0,s.dD)("data-v-d5d1f5e2"),t=t(),(0,s.Cn)(),t),m={class:"addr-list"},p=["onClick"],g={class:"item-top"},v={class:"item-top-left"},y={class:"name"},w={class:"phone"},h={class:"default"},C={class:"item-top-right"},B=["onClick"],b={class:"item-bottom"},k={class:"item-bottom-left"},_={class:"address"},S={class:"address-detail"},O={class:"item-bottom-right"},D=["onClick"],Z=f((()=>(0,s._)("span",null,"+ 新增收货地址",-1))),W=[Z];var x={props:{addressList:{type:Array,default:()=>[]}},emits:["getAddressList"],setup(t,{emit:e}){const n=(0,l.tv)(),o=(0,l.yj)(),a=t=>{c.Z.confirm({message:"确认要删除该地址吗?"}).then((async()=>{const n=await(0,u.Ho)(t);n?.success&&((0,i.Z)(n.msg),e("getAddressList"))})).catch((()=>{}))},f="select"===o.query.type,Z=t=>{sessionStorage.setItem("addressOpt",JSON.stringify({type:t,isSelect:f})),n.push({name:"AddressEdit",params:{addressOpt:JSON.stringify({type:t,isSelect:f})}})},x=async t=>{if("/address"===o.path&&"select"===o.query.type){const e=await(0,u.Rh)(t);e.success&&("edit"===o.query.from?n.go(-2):"add"===o.query.from?n.go(-3):n.back())}};return(e,n)=>((0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.addressList,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.id,class:"addr-list-item",style:(0,r.j5)({paddingLeft:f?"30px":""}),onClick:(0,d.iM)((e=>x(t.id)),["stop"])},[(0,s._)("div",g,[(0,s._)("div",v,[(0,s._)("span",y,(0,r.zw)(t.name),1),(0,s._)("span",w,(0,r.zw)(t.tel),1),(0,s.wy)((0,s._)("span",h,"默认",512),[[d.F8,t.isDefault]])]),(0,s._)("div",C,[(0,s.wy)((0,s._)("a",{class:"remove",onClick:(0,d.iM)((e=>a(t.id)),["stop"])},"删除",8,B),[[d.F8,!f]])])]),(0,s._)("div",b,[(0,s._)("div",k,[(0,s._)("p",_,(0,r.zw)(t.province+"  "+t.city+"  "+t.county),1),(0,s._)("p",S,(0,r.zw)(t.addressDetail),1)]),(0,s._)("div",O,[(0,s.wy)((0,s._)("a",{class:"edit",onClick:(0,d.iM)((e=>Z(t)),["stop"])},"编辑",8,D),[[d.F8,!f]])])])],12,p)))),128))]),(0,s._)("a",{class:"add",onClick:n[0]||(n[0]=t=>Z("add"))},W)]))}},T=n(89);const H=(0,T.Z)(x,[["__scopeId","data-v-d5d1f5e2"]]);var I=H;const A=t=>((0,s.dD)("data-v-d6a5b9c0"),t=t(),(0,s.Cn)(),t),F={key:0},z={key:1,class:"address-empty"},E=A((()=>(0,s._)("h2",null,"收货地址空空的, 点击下方按钮去新增一个吧",-1))),U=A((()=>(0,s._)("span",null,"+ 新增收货地址",-1))),j=[U],N=(0,s.Uk)(" 正在拼命加载中… ");var q={setup(t){const e=(0,o.iH)([]),n=(0,o.iH)(!0),i=async()=>{const t=await(0,u.Fg)();e.value=t.data,n.value=!1};i();const c=(0,l.tv)(),r=(0,l.yj)(),d="select"===r.query.type,f=t=>{sessionStorage.setItem("addressOpt",JSON.stringify({type:t,isSelect:d})),c.push({name:"AddressEdit",params:{addressOpt:JSON.stringify({type:t,isSelect:d})}})};return(t,l)=>{const c=(0,s.up)("van-loading");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)((0,o.SU)(a.Z)),n.value?((0,s.wg)(),(0,s.j4)(c,{key:1,type:"spinner",style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%)"}},{default:(0,s.w5)((()=>[N])),_:1})):((0,s.wg)(),(0,s.iD)("div",F,[e.value.length?((0,s.wg)(),(0,s.j4)((0,o.SU)(I),{key:0,"address-list":e.value,onGetAddressList:i},null,8,["address-list"])):((0,s.wg)(),(0,s.iD)("div",z,[E,(0,s._)("a",{class:"add",onClick:l[0]||(l[0]=t=>f("add"))},j)]))]))],64)}}};const P=(0,T.Z)(q,[["__scopeId","data-v-d6a5b9c0"]]);var J=P},7991:function(t,e,n){n.d(e,{Z:function(){return y}});var s=n(3396),o=n(4870),l=n(7139),a=n(9242),i=n(678),c=n(6899);const r=t=>((0,s.dD)("data-v-3b36dd8f"),t=t(),(0,s.Cn)(),t),d=r((()=>(0,s._)("i",{class:"iconfont icon-arrow-left"},null,-1))),u=[d],f=r((()=>(0,s._)("i",{class:"iconfont icon-account"},null,-1))),m=[f];var p={props:{getEditOption:{type:Object}},setup(t){const e=t,n=(0,i.tv)(),r=(0,i.yj)(),d=JSON.parse(sessionStorage.getItem("addressOpt")),f=()=>{r.query.type?"edit"===r.query.from?n.go(-2):"add"===r.query.from?n.go(-3):n.back():"/address"===r.path?n.replace("/account"):d.isSelect?n.replace("/address?type=select&from=edit"):n.replace("/address")},p=(0,s.Fl)((()=>e.getEditOption?.type?"add"===e.getEditOption?.type?"新增地址":"修改地址":"收货地址"));return(t,e)=>((0,s.wg)(),(0,s.j4)((0,o.SU)(c.Z),null,{left:(0,s.w5)((()=>[(0,s._)("div",{class:"nav-left",onClick:f},u)])),center:(0,s.w5)((()=>[(0,s._)("span",null,(0,l.zw)((0,o.SU)(p)),1)])),right:(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",{class:"nav-left",onClick:e[0]||(e[0]=t=>(0,o.SU)(n).push("/account"))},m,512),[[a.F8,!(0,o.SU)(d)]])])),_:1}))}},g=n(89);const v=(0,g.Z)(p,[["__scopeId","data-v-3b36dd8f"]]);var y=v},1514:function(t,e,n){n.d(e,{Z:function(){return q}});var s=n(3396),o=n(2220),l=n(1404),a=n(7548),i=n(4870),c=n(9242),r=n(610),d=n(5323),u=n(9951),f=n(6491),m=n(5322),p=n(8332),g=n(4877),v=n(6305),y=n(9545),w=n(253);const[h,C]=(0,r["do"])("action-bar"),B=Symbol(h),b={safeAreaInsetBottom:d.J5};var k=(0,s.aZ)({name:h,props:b,setup(t,{slots:e}){const{linkChildren:n}=(0,w.$E)(B);return n(),()=>{var n;return(0,s.Wm)("div",{class:[C(),{"van-safe-area-bottom":t.safeAreaInsetBottom}]},[null==(n=e.default)?void 0:n.call(e)])}}});const _=(0,l.n)(k);var S=n(3444),O=n(6014);const[D,Z]=(0,r["do"])("action-bar-button"),W=(0,o.l7)({},O.g2,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var x=(0,s.aZ)({name:D,props:W,setup(t,{slots:e}){const n=(0,O.yj)(),{parent:o,index:l}=(0,w.NB)(B),a=(0,s.Fl)((()=>{if(o){const t=o.children[l.value-1];return!(t&&"isButton"in t)}})),i=(0,s.Fl)((()=>{if(o){const t=o.children[l.value+1];return!(t&&"isButton"in t)}}));return(0,S.F)({isButton:!0}),()=>{const{type:o,icon:l,text:c,color:r,loading:d,disabled:u}=t;return(0,s.Wm)(y.z,{class:Z([o,{last:i.value,first:a.value}]),size:"large",type:o,icon:l,color:r,loading:d,disabled:u,onClick:n},{default:()=>[e.default?e.default():c]})}}});const T=(0,l.n)(x);const[H,I,A]=(0,r["do"])("dialog"),F=(0,o.l7)({},g.W,{title:String,theme:String,width:d.Or,message:[String,Function],callback:Function,allowHtml:Boolean,className:d.Vg,transition:(0,d.SQ)("van-dialog-bounce"),messageAlign:String,closeOnPopstate:d.J5,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:d.J5,closeOnClickOverlay:Boolean}),z=[...g.m,"transition","closeOnPopstate"];var E=(0,s.aZ)({name:H,props:F,emits:["confirm","cancel","keydown","update:show"],setup(t,{emit:e,slots:n}){const l=(0,i.iH)(),a=(0,i.qj)({confirm:!1,cancel:!1}),r=t=>e("update:show",t),d=e=>{var n;r(!1),null==(n=t.callback)||n.call(t,e)},g=n=>()=>{t.show&&(e(n),t.beforeClose?(a[n]=!0,(0,u.I)(t.beforeClose,{args:[n],done(){d(n),a[n]=!1},canceled(){a[n]=!1}})):d(n))},w=g("cancel"),h=g("confirm"),C=(0,c.D2)((n=>{var s,a;if(n.target!==(null==(a=null==(s=l.value)?void 0:s.popupRef)?void 0:a.value))return;const i={Enter:t.showConfirmButton?h:o.ZT,Escape:t.showCancelButton?w:o.ZT};i[n.key](),e("keydown",n)}),["enter","esc"]),B=()=>{const e=n.title?n.title():t.title;if(e)return(0,s.Wm)("div",{class:I("header",{isolated:!t.message&&!n.default})},[e])},b=e=>{const{message:n,allowHtml:o,messageAlign:l}=t,a=I("message",{"has-title":e,[l]:l}),i=(0,f.mf)(n)?n():n;return o&&"string"===typeof i?(0,s.Wm)("div",{class:a,innerHTML:i},null):(0,s.Wm)("div",{class:a},[i])},k=()=>{if(n.default)return(0,s.Wm)("div",{class:I("content")},[n.default()]);const{title:e,message:o,allowHtml:l}=t;if(o){const t=!(!e&&!n.title);return(0,s.Wm)("div",{key:l?1:0,class:I("content",{isolated:!t})},[b(t)])}},S=()=>(0,s.Wm)("div",{class:[m.k7,I("footer")]},[t.showCancelButton&&(0,s.Wm)(y.z,{size:"large",text:t.cancelButtonText||A("cancel"),class:I("cancel"),style:{color:t.cancelButtonColor},loading:a.cancel,disabled:t.cancelButtonDisabled,onClick:w},null),t.showConfirmButton&&(0,s.Wm)(y.z,{size:"large",text:t.confirmButtonText||A("confirm"),class:[I("confirm"),{[m.a8]:t.showCancelButton}],style:{color:t.confirmButtonColor},loading:a.confirm,disabled:t.confirmButtonDisabled,onClick:h},null)]),O=()=>(0,s.Wm)(_,{class:I("footer")},{default:()=>[t.showCancelButton&&(0,s.Wm)(T,{type:"warning",text:t.cancelButtonText||A("cancel"),class:I("cancel"),color:t.cancelButtonColor,loading:a.cancel,disabled:t.cancelButtonDisabled,onClick:w},null),t.showConfirmButton&&(0,s.Wm)(T,{type:"danger",text:t.confirmButtonText||A("confirm"),class:I("confirm"),color:t.confirmButtonColor,loading:a.confirm,disabled:t.confirmButtonDisabled,onClick:h},null)]}),D=()=>n.footer?n.footer():"round-button"===t.theme?O():S();return()=>{const{width:e,title:n,theme:a,message:i,className:c}=t;return(0,s.Wm)(v.G,(0,s.dG)({ref:l,role:"dialog",class:[I([a]),c],style:{width:(0,p.Nn)(e)},tabindex:0,"aria-labelledby":n||i,onKeydown:C,"onUpdate:show":r},(0,o.ei)(t,z)),{default:()=>[B(),k(),D()]})}}});let U;function j(){const t={setup(){const{state:t,toggle:e}=(0,a.o)();return()=>(0,s.Wm)(E,(0,s.dG)(t,{"onUpdate:show":e}),null)}};({instance:U}=(0,a.H)(t))}function N(t){return o._f?new Promise(((e,n)=>{U||j(),U.open((0,o.l7)({},N.currentOptions,t,{callback:t=>{("confirm"===t?e:n)(t)}}))})):Promise.resolve()}N.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1},N.currentOptions=(0,o.l7)({},N.defaultOptions),N.alert=N,N.confirm=t=>N((0,o.l7)({showCancelButton:!0},t)),N.close=()=>{U&&U.toggle(!1)},N.setDefaultOptions=t=>{(0,o.l7)(N.currentOptions,t)},N.resetDefaultOptions=()=>{N.currentOptions=(0,o.l7)({},N.defaultOptions)},N.Component=(0,l.n)(E),N.install=t=>{t.use(N.Component),t.config.globalProperties.$dialog=N};var q=N},1643:function(t,e,n){n(1958),n(368),n(6742),n(2939),n(1452),n(6196),n(2666)}}]);
//# sourceMappingURL=672.8e114ac3.js.map