import{Y as S,Z as A,X as D,x as y,o as x,A as N,a0 as _,a2 as $,a3 as c,ab as T,c as n,a1 as C,aa as u,J as d,a8 as b,ai as g}from"./index-e71cac82.js";import{V as E}from"./VContainer-09b40004.js";import{V as f}from"./VCol-c032c4cc.js";import{V as I}from"./VDivider-86db37b0.js";import{V as J}from"./VDataTable-fb93838b.js";import"./VList-33176a65.js";const L=g("h1",null,"購物車",-1),M={key:0},R={key:1,class:"text-red text-decoration-line-through"},G={__name:"CartView",setup(U){const{apiAuth:p}=T(),r=S(),m=A(),v=D(),a=y([]),V=[{title:"商品名稱",key:"product.name"},{title:"單價",key:"product.price"},{title:"數量",key:"quantity"},{title:"總價",key:"total",value:e=>e.product.price*e.quantity},{title:"操作",key:"action"}],w=x(()=>a.value.reduce((e,o)=>e+o.quantity*o.product.price,0)),B=x(()=>a.value.length>0&&!a.value.some(e=>!e.product.sell)),h=async(e,o)=>{var t,s;if(!m.isLogin){v.push("/login");return}try{const{data:l}=await p.patch("/users/cart",{product:e,quantity:o});m.cart=l.result,r({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}});const i=a.value.findIndex(P=>P.product._id===e);a.value[i].quantity+=o,a.value[i].quantity<=0&&a.value.splice(i,1)}catch(l){const i=((s=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";r({text:i,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},k=y(!1),q=async()=>{var e,o;k.value=!0;try{await p.post("/orders"),m.cart=0,v.push("/orders"),r({text:"結帳成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(t){const s=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";r({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}k.value=!1};return N(async()=>{var e,o;try{const{data:t}=await p.get("/users/cart");a.value.push(...t.result)}catch(t){const s=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";r({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(e,o)=>(_(),$(E,null,{default:c(()=>[n(f,{cols:"12"},{default:c(()=>[L]),_:1}),n(I),n(f,{cols:"12"},{default:c(()=>[n(J,{items:a.value,headers:V},{"item.product.name":c(({item:t})=>[t.product.sell?(_(),C("span",M,u(t.product.name),1)):(_(),C("span",R,u(t.product.name)+" (已下架)",1))]),"item.quantity":c(({item:t})=>[n(d,{variant:"text",icon:"mdi-minus",color:"red",onClick:s=>h(t.product._id,-1)},null,8,["onClick"]),b(u(t.quantity),1),n(d,{variant:"text",icon:"mdi-plus",color:"green",onClick:s=>h(t.product._id,1)},null,8,["onClick"])]),"item.action":c(({item:t})=>[n(d,{variant:"text",icon:"mdi-delete",color:"red",onClick:s=>h(t.product._id,t.quantity*-1)},null,8,["onClick"])]),_:2},1032,["items"])]),_:1}),n(f,{class:"text-center",cols:"12"},{default:c(()=>[g("p",null,"總金額: "+u(w.value),1),n(d,{color:"green",disabled:!B.value,loading:k.value,onClick:q},{default:c(()=>[b("結帳")]),_:1},8,["disabled","loading"])]),_:1})]),_:1}))}};export{G as default};
