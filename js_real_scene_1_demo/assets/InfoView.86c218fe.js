import{d as v,u as w,A as $,o as i,a as l,f as e,t as d,e as t,B as u,p as b,g as k,l as g,_ as f,h as S,c as x,C as V,b as m}from"./index.6480ee13.js";import{N as j}from"./CompNavBar.10350918.js";const I=s=>(b("data-v-cfdad50c"),s=s(),k(),s),N={class:"comp-content"},D=I(()=>e("div",{class:"img-area"},[e("img"),g(" v-for img ")],-1)),L={class:"first-info-area"},M={class:"row"},T=I(()=>e("div",null,[e("span",null,"\u26054.3"),e("span",null,"(345 Reviews)")],-1)),U={class:"second-info-area"},F=I(()=>e("h3",null,"Product info:",-1)),q=v({__name:"CompContent",setup(s){const _=w(),c=$("itemId"),o=_.getItemById_FromStoreMap(c);return(C,p)=>{var n,a,h,y,B;return i(),l("div",N,[D,e("div",L,[e("div",M,[e("span",null,"$"+d((n=t(o))==null?void 0:n.price.toFixed(2)),1),T]),e("span",null,d((a=t(o))==null?void 0:a.name),1)]),e("div",U,[F,e("p",null,[u("ID:"),e("span",null,d((h=t(o))==null?void 0:h.id),1)]),e("p",null,[u("Qty:"),e("span",null,d((y=t(o))==null?void 0:y.stock),1)]),e("p",null,[u("locality:"),e("span",null,d((B=t(o))==null?void 0:B.locality),1)])])])}}});const A=f(q,[["__scopeId","data-v-cfdad50c"],["__file","C:/Users/Mccree/Desktop/works/web_projects/js_real_scene_1_demo/src/components/info/CompContent.vue"]]),r=s=>(b("data-v-19739f5c"),s=s(),k(),s),P={class:"comp-bottom-bar"},E={class:"left"},Q=r(()=>e("div",{class:"btn sub"},[e("span",null,"-")],-1)),R=[Q],z=r(()=>e("div",{class:"btn add"},[e("span",null,"+")],-1)),G=[z],H={class:"right"},J=r(()=>e("div",null,"Add to Cart",-1)),K=[J],O=r(()=>e("div",null,"Update in Cart",-1)),W=[O],X=v({__name:"CompBottomBar",setup(s){const _=w(),c=$("itemId"),o=S(0);_.getItemById_FromStoreMap(c);let C=x(()=>!!_.cartList.find(p=>p.id===c));return(p,n)=>(i(),l("div",P,[e("div",E,[e("button",{onClick:n[0]||(n[0]=a=>o.value!==0?o.value--:null)},R),e("span",null,d(o.value),1),e("button",{onClick:n[1]||(n[1]=a=>o.value++)},G)]),e("div",H,[t(C)?(i(),l("button",{key:1,onClick:n[3]||(n[3]=a=>{t(_).updateItemById_ToCratList(t(c),o.value),t(_).delItemById_InScanList(t(c))})},W)):(i(),l("button",{key:0,onClick:n[2]||(n[2]=a=>{t(_).addItemById_ToCratList(t(c),o.value),t(_).delItemById_InScanList(t(c))})},K))])]))}});const Y=f(X,[["__scopeId","data-v-19739f5c"],["__file","C:/Users/Mccree/Desktop/works/web_projects/js_real_scene_1_demo/src/components/info/CompBottomBar.vue"]]),Z={class:"view-info"},ee=v({__name:"InfoView",props:{itemId:{type:null,required:!0}},setup(s){return V("itemId",s.itemId),(c,o)=>(i(),l("div",Z,[m(j,{pageTitle:"Product info"}),m(A),m(Y)]))}});const se=f(ee,[["__scopeId","data-v-82b3f36e"],["__file","C:/Users/Mccree/Desktop/works/web_projects/js_real_scene_1_demo/src/views/InfoView.vue"]]);export{se as default};
