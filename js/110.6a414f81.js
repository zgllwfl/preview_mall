"use strict";(self["webpackChunkmall"]=self["webpackChunkmall"]||[]).push([[110],{8384:function(e,s,a){a.r(s),a.d(s,{default:function(){return C}});a(767);var o=a(7619),r=a(3396),l=a(4870),n=a(678),d=a(8371),t=a(502),i=a(4620),w=a(9176),u=a(7247),c=a(9489),m=a(2900);const p={class:"login-bg"},f={class:"login"},v=(0,r.Uk)(" | ");var P={setup(e){const s=(0,l.qj)({type:"2",username:"",newPassword:"",reNewPassword:"",verifyCode:""}),a=(0,l.iH)(null),P=async()=>{const{newPassword:e,reNewPassword:r}=s,l=a.value.validate()&&(0,w.Zb)(e,r);if(l){const e=(0,c.H)(s.newPassword),a=(0,c.H)(s.reNewPassword),r=(0,c.H)(s.verifyCode),l=Object.assign({},s);l.newPassword=e,l.reNewPassword=a,l.verifyCode=r;const n=await(0,m.Cp)(l);n?.success&&((0,o.Z)(n.msg),(0,u.yZ)(),U.push({name:"Login",params:{username:n?.data?.username}}))}},U=(0,n.tv)(),g=()=>U.push("/login"),C=()=>U.push("/register");return(e,o)=>((0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)((0,l.SU)(d.Z),{title:"重置密码"}),(0,r._)("div",f,[(0,r.Wm)((0,l.SU)(t.Z),{ref_key:"CodeRef",ref:a,"form-data":(0,l.SU)(s)},null,8,["form-data"]),(0,r.Wm)((0,l.SU)(i.Z),{modelValue:(0,l.SU)(s).newPassword,"onUpdate:modelValue":o[0]||(o[0]=e=>(0,l.SU)(s).newPassword=e),modelModifiers:{trim:!0},placeholder:"输入新密码",type:"password"},null,8,["modelValue"]),(0,r.Wm)((0,l.SU)(i.Z),{modelValue:(0,l.SU)(s).reNewPassword,"onUpdate:modelValue":o[1]||(o[1]=e=>(0,l.SU)(s).reNewPassword=e),modelModifiers:{trim:!0},placeholder:"确认新密码",type:"password"},null,8,["modelValue"]),(0,r._)("button",{class:"common-btn",onClick:P},"确认重置"),(0,r._)("div",{class:"login-bottom"},[(0,r._)("span",{onClick:g},"立即登录"),v,(0,r._)("span",{onClick:C},"快速注册")])])]))}},U=a(89);const g=(0,U.Z)(P,[["__scopeId","data-v-d333bcc4"]]);var C=g}}]);
//# sourceMappingURL=110.6a414f81.js.map