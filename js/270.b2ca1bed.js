"use strict";(self["webpackChunkmall"]=self["webpackChunkmall"]||[]).push([[270],{4980:function(a,e,s){s.d(e,{Z:function(){return d}});var t=s(3396);const o=a=>((0,t.dD)("data-v-04e9cbf4"),a=a(),(0,t.Cn)(),a),n=o((()=>(0,t._)("i",{class:"iconfont icon-arrow-up"},null,-1))),l=(0,t.Uk)(),r=o((()=>(0,t._)("span",null,"顶部",-1)));var c={emits:["backToTop"],setup(a,{emit:e}){const s=()=>{e("backToTop")};return(a,e)=>((0,t.wg)(),(0,t.iD)("div",{class:"back-top",onClick:s},[(0,t.WI)(a.$slots,"default",{},(()=>[n,l,r]))]))}},i=s(89);const u=(0,i.Z)(c,[["__scopeId","data-v-04e9cbf4"]]);var d=u},1221:function(a,e,s){s.d(e,{Z:function(){return y}});var t=s(3396),o=s(4870),n=s(7139),l=s(9242),r=s(678);const c={class:"query-bar border-1px"},i=["onClick"],u={class:"query-bar-item-arrow"};var d={emits:["getFilterParam"],setup(a,{emit:e}){const s=(0,r.yj)(),d=(0,o.qj)({currentIndex:0,data:[{searchKey:s.query.key,name:"综合",key:"id"},{searchKey:s.query.key,name:"价格",sort:0,key:"price"},{searchKey:s.query.key,name:"销量",sort:0,key:"sales"}]}),v=(0,t.Fl)((()=>{const a=d.data[d.currentIndex],e="1"==a.sort?"asc":"desc";return{key:[a.key][0],value:e}})),p=a=>{d.currentIndex=a;const s=d.data[a];d.data.forEach(((e,s)=>{s!=a&&(e.sort=0)})),s.sort=a===d.currentIndex?1===s.sort?2:1:"",e("getFilterParam",v.value)};return(a,e)=>((0,t.wg)(),(0,t.iD)("div",c,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,o.SU)(d).data,((a,e)=>((0,t.wg)(),(0,t.iD)("div",{key:e,class:"query-bar-item",onClick:a=>p(e)},[(0,t._)("span",{class:(0,n.C_)((0,o.SU)(d).currentIndex===e?"active":" ")},(0,n.zw)(a.name),3),(0,t.wy)((0,t._)("div",u,[(0,t._)("i",{class:(0,n.C_)(["iconfont icon-arrow-up",1===a.sort?"active":""])},null,2),(0,t._)("i",{class:(0,n.C_)(["iconfont icon-arrow-down",2===a.sort?"active":""])},null,2)],512),[[l.F8,0!==e]])],8,i)))),128))]))}},v=s(89);const p=(0,v.Z)(d,[["__scopeId","data-v-eddfb094"]]);var y=p},6367:function(a,e,s){s.d(e,{Z:function(){return m}});var t=s(3396),o=s(7139),n=s(9242),l=s(678);const r={class:"card-list-container"},c=["onClick"],i={class:"goods-img-container"},u={class:"goods-img",alt:""},d={class:"goods-info"},v={class:"goods-title"},p={class:"goods-price"},y={class:"old-price"},_={class:"sale-num"};var g={props:{productData:{type:Array}},setup(a){const e=(0,l.tv)(),s=a=>{e.push({path:"/detail",query:{id:a}})};return(e,l)=>{const g=(0,t.Q2)("lazy");return(0,t.wg)(),(0,t.iD)("div",r,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.productData,(a=>((0,t.wg)(),(0,t.iD)("div",{key:a.Id,class:"goods-item",onClick:e=>s(a.id)},[(0,t._)("div",i,[(0,t.wy)((0,t._)("img",u,null,512),[[g,a.goods_img]]),(0,t.wy)((0,t._)("span",{class:"goods-slogan"},(0,o.zw)(a.Slogan),513),[[n.F8,a.Slogan]])]),(0,t._)("div",d,[(0,t._)("h3",v,(0,o.zw)(a.goods_name),1),(0,t._)("div",p,[(0,t._)("span",null,(0,o.zw)(a.price),1),(0,t._)("span",y,"￥"+(0,o.zw)(a.old_price),1)]),(0,t._)("div",_,"已售"+(0,o.zw)(a.sales),1)])],8,c)))),128))])}}},w=s(89);const k=(0,w.Z)(g,[["__scopeId","data-v-67424e60"]]);var m=k},9082:function(a,e,s){s.r(e),s.d(e,{default:function(){return C}});var t=s(3396),o=s(4870),n=s(9242),l=s(678),r=s(4471);const c=(a,e)=>(0,r.Z)({url:"/goods/search",params:{goods_name:a,orderBy:e,pageSize:50}});var i=s(9877),u=s(4980),d=s(6367),v=s(1221);const p=a=>((0,t.dD)("data-v-91dfeb7a"),a=a(),(0,t.Cn)(),a),y={key:0},_={class:"query-bar-container"},g={key:0},w={key:1,class:"s_null"},k=p((()=>(0,t._)("p",{class:"tip"},"抱歉！暂无相关商品",-1))),m=p((()=>(0,t._)("p",{class:"small"},"换个关键词试试吧～",-1))),f=[k,m],b=(0,t.Uk)(" 正在拼命加载中… ");var D={setup(a){const e=(0,o.iH)(),s=a=>{e.value=a};(0,t.YP)((()=>e.value),(a=>{m(null,a)}));const r=(0,l.yj)(),p=(0,o.iH)([]),k=(0,o.iH)(!0),m=async(a,e)=>{if(a){const{data:a}=await c(r.query.key,e);p.value=a.list,k.value=!1}const{data:s}=await c(r.query.key,e);p.value=s.list,k.value=!1};m();const D=(0,o.iH)(null),h=()=>D.value.scrollTo(0,0,800),q=(0,o.iH)(0),C=(0,o.iH)(!1),Z=a=>{q.value=Math.abs(a.y),C.value=a.y<-1e3};return(0,l.ao)((()=>{m(r.query.key,e.value)})),(a,e)=>{const l=(0,t.up)("van-loading");return(0,t.wg)(),(0,t.iD)(t.HY,null,[k.value?((0,t.wg)(),(0,t.j4)(l,{key:1,type:"spinner",style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%)"}},{default:(0,t.w5)((()=>[b])),_:1})):((0,t.wg)(),(0,t.iD)("div",y,[(0,t._)("div",_,[0!==p.value.length?((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)((0,o.SU)(v.Z),{onGetFilterParam:s}),(0,t.Wm)((0,o.SU)(i.Z),{ref_key:"scrollRef",ref:D,class:"scroll","listen-scroll":!0,bounce:{top:!1,bottom:!1},onScroll:Z},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)((0,o.SU)(d.Z),{"product-data":p.value},null,8,["product-data"]),[[n.F8,0!==p.value.length]])])),_:1},512)])):((0,t.wg)(),(0,t.iD)("div",w,f))])])),(0,t.wy)((0,t.Wm)((0,o.SU)(u.Z),{onBackToTop:h},null,512),[[n.F8,C.value]])],64)}}},h=s(89);const q=(0,h.Z)(D,[["__scopeId","data-v-91dfeb7a"]]);var C=q}}]);
//# sourceMappingURL=270.b2ca1bed.js.map