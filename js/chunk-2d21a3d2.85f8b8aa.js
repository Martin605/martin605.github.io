(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home container py-4"},[a("div",{staticClass:"p-5 mb-4 bg-light rounded-3"},[a("Applications")],1)])},i=[],c=function(){var t=this,a=t._self._c;return a("div",{staticClass:"clock card m-3"},[a("div",{staticClass:"card-header"},[a("h5",[t._v(t._s(t.$t("applications")))])]),a("div",{staticClass:"card-body"},t._l(t.applications,(function(n){return a("a",{key:n,staticClass:"btn btn-primary m-2 btn-lg",attrs:{href:n.url}},[t._v(" "+t._s(n.name[t.$i18n.locale])+" ")])})),0)])},l=[],e=n("5f35"),o=n.n(e),p={name:"Applications",data(){return{applications:[]}},created(){fetch(o.a.publicPath+"json/applications.json").then(t=>t.json()).then(t=>{this.applications=t.Applications})}},r=p,u=n("2877"),d=Object(u["a"])(r,c,l,!1,null,null,null),h=d.exports,b={name:"Home",components:{Applications:h}},f=b,m=Object(u["a"])(f,s,i,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.85f8b8aa.js.map