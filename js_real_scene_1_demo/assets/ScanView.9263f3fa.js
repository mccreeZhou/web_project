import{d as m,u as v,o as d,c as _,a as l,w as b,b as r,e,t as p,r as y,p as C,f as I,_ as u,g as h,h as R,i as $,q,j as B,k as w,l as x,F as k,m as L,n as V,s as T}from"./index.5373b702.js";import{N as M}from"./CompNavBar.19ad20b6.js";const N=""+new URL("AD_2.ade8bdec.jpg",import.meta.url).href,g=s=>(C("data-v-39084a48"),s=s(),I(),s),D={class:"comp-item"},F={class:"btn-info"},U=["src"],z={class:"text-omit-2-lines"},A={class:"row"},E=g(()=>e("div",{class:"btn sub"},[e("span",null,"-")],-1)),P=[E],j=g(()=>e("div",{class:"btn add"},[e("span",null,"+")],-1)),Q=[j],G=g(()=>e("div",{class:"btn-x-to-cart"},[e("span",null,"Add to Cart")],-1)),H=[G],J=m({__name:"CompItemBlock",props:{item:null},setup(s){const a=s,i=v(),c=i.getItemById_FromStoreMap(a.item.id);function t(){i.addItemById_ToCratList(c.id,a.item._qty)}return(n,o)=>{const S=y("RouterLink");return d(),_("div",D,[l(S,{to:{name:"info",params:{itemId:r(c).id}}},{default:b(()=>[e("div",F,[e("img",{src:r(c).imgURL[0]},null,8,U)])]),_:1},8,["to"]),e("div",null,[e("p",z,p(r(c).name),1),e("span",null,"$"+p(r(c).price.toFixed(2)),1)]),e("div",null,[e("div",A,[e("button",{onClick:o[0]||(o[0]=f=>r(i).itemQtyChange_inScanItemList(a.item.id,-1))},P),e("span",null,p(a.item._qty),1),e("button",{onClick:o[1]||(o[1]=f=>r(i).itemQtyChange_inScanItemList(a.item.id,1))},Q)]),e("button",{onClick:o[2]||(o[2]=f=>t())},H)])])}}});const K=u(J,[["__scopeId","data-v-39084a48"]]),O={setup(){const s=v(),a=h(null),i=h(null);return R(async()=>{try{const c=$();i.value=c.refs.elRefs;const t=await(a.value=q.createInstance());s.dbrScanner=t,t.setVideoFit("cover"),t.onPlayed=()=>{s.is_cameraRunning=!0},await t.setUIElement(i.value),t.onFrameRead=n=>{for(let o of n)console.log(o.barcodeText)},t.onUniqueRead=(n,o)=>{console.log("New",n,o),s.addItemById_ToScanList(n),t.pause(),s.is_cameraRunning=!1},await t.open();try{let n=t.dce.getVisibleRegion(),o=await t.getRuntimeSettings();o.region.regionBottom=n.regionBottom,o.region.regionLeft=n.regionLeft,o.region.regionMeasuredByPercentage=n.regionMeasuredByPercentage?1:0,o.region.regionRight=n.regionRight,o.region.regionTop=n.regionTop,t.updateRuntimeSettings(o)}catch(n){console.log("ERRRRRR",n)}}catch(c){let t=c.message||c;console.error(t),alert(t)}}),B(async()=>{a.value&&((await a.value).destroyContext(),s.dbrScanner=null,console.log("BarcodeScanner Component Unmount"))}),{elRefs:i}}};const W={ref:"elRefs",class:"component-barcode-scanner"},X=x('<svg class="dce-bg-loading" viewBox="0 0 1792 1792" data-v-d09b6984><path d="M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z" data-v-d09b6984></path></svg><svg class="dce-bg-camera" viewBox="0 0 2048 1792" data-v-d09b6984><path d="M1024 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zm704-416q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zm-704 1152q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z" data-v-d09b6984></path></svg><div class="dce-video-container" data-v-d09b6984></div><div class="dce-scanarea" data-v-d09b6984></div>',4);function Y(s,a,i,c,t,n){return d(),_("div",W,[X,w(s.$slots,"default",{},void 0,!0)],512)}const Z=u(O,[["render",Y],["__scopeId","data-v-d09b6984"]]),ee={class:"comp-content"},te={href:"#/info/8000380005932",class:"btn-AD"},ne=["src"],oe={key:0,class:"pasue-show"},se={class:"item-list"},ae=m({__name:"CompContent",setup(s){const a=v(),i=a.scanItemList;return(c,t)=>(d(),_("div",ee,[e("div",null,[e("a",te,[e("img",{src:N},null,8,ne)])]),l(Z,null,{default:b(()=>[r(a).is_cameraRunning?T("",!0):(d(),_("div",oe,[e("button",{onClick:t[0]||(t[0]=n=>r(a).dbrScanner.play())},"Continue Scan")]))]),_:1}),e("div",se,[(d(!0),_(k,null,L(r(i),n=>(d(),V(K,{key:n.id,item:n},null,8,["item"]))),128))])]))}});const ie=u(ae,[["__scopeId","data-v-9926e78f"]]),ce={class:"view-scan"},re=m({__name:"ScanView",setup(s){return(a,i)=>(d(),_("div",ce,[l(M,{pageTitle:"Scan"}),l(ie)]))}});const le=u(re,[["__scopeId","data-v-4adc821b"]]);export{le as default};
