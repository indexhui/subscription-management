(this["webpackJsonpsbscription-management"]=this["webpackJsonpsbscription-management"]||[]).push([[0],{85:function(e,t,n){"use strict";n.r(t);var a=n(102),r=n(1),c=n(68),i=n.n(c),s=n(10),o=n(6),d=n(17),p=n(11),u=n.n(p),l=n(20),b=n(3),j=n(104),h=n(97),x=n(95),f=Object(x.a)({config:{initialColorMode:"light",useSystemColorMode:!1},initialColorMode:"light",useSystemColorMode:!1,styles:{global:{body:{bg:"gray.900",fontFamily:"'PingFang TC', \u5fae\u8edf\u6b63\u9ed1\u9ad4, sans-serif"},activeStyle:{color:"red"}}},components:{Button:{baseStyle:{fontWeight:"300",borderRadius:"full",letterSpacing:2},sizes:{lg:{h:12,minW:12,px:30}}}}}),m=n(96),g=n(107),O=n(2),v=function(e){var t=e.isLoading,n=e.numOfRemaing,a=e.sum;return Object(O.jsxs)(m.a,{children:[t&&Object(O.jsxs)(m.a,{children:[Object(O.jsx)(g.a,{}),"\u8b80\u53d6\u8cc7\u6599\u4e2d"]}),!t&&Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(m.a,{children:["\u7e3d\u5171\u6709 ",n," \u7b46\u8a02\u95b1\u670d\u52d9"]}),Object(O.jsxs)(m.a,{children:["\u6bcf\u500b\u6708\u60a8\u9700\u82b1\u8cbb ",a]})]})]})},y=n(48),w=n(105),C=n(108),S=n(100),k=n(59),E=n.p+"static/media/youtube.f694987f.svg",D=n.p+"static/media/adobe.e19e964d.svg",R=n.p+"static/media/apple.157374df.svg",L=n.p+"static/media/dropbox.9639d859.svg",z=n.p+"static/media/figma.9840068e.svg",I=n.p+"static/media/foodpanda.80e76112.svg",N=n.p+"static/media/google.e7540cfa.svg",G=n.p+"static/media/medium.d92b554c.svg",J=n.p+"static/media/netflix.d2e27850.svg",P=n.p+"static/media/notion.234d7ad9.svg",T=n.p+"static/media/patreon.8968edbb.svg",A=n.p+"static/media/slack.7b4508e3.svg",B=n.p+"static/media/spotify.f4aa6374.svg",F=n.p+"static/media/ubereat.4f38b1a5.svg",M=[{brand:"youtube",src:E},{brand:"adobe",src:D},{brand:"apple",src:R},{brand:"dropbox",src:L},{brand:"figma",src:z},{brand:"foodpanda",src:I},{brand:"google",src:N},{brand:"medium",src:G},{brand:"netflix",src:J},{brand:"notion",src:P},{brand:"patreon",src:T},{brand:"slack",src:A},{brand:"spotify",src:B},{brand:"zeplin",src:n.p+"static/media/zeplin.e9833f30.svg"},{brand:"ubereat",src:F}],W=function(e){var t=e.sub,n=e.id,a=e.isEdit,c=e.handleDelete,i=e.updateIsEdit,s=e.handleSave,p=Object(r.useState)(t),u=Object(b.a)(p,2),l=u[0],j=u[1],x=function(e){var t=e.target.name,n=e.target.value;j(Object(d.a)(Object(d.a)({},l),{},Object(o.a)({},t,n)))},f=function(e){13===e.keyCode&&0!==l.length&&s({id:n,tempSub:l}),27===e.keyCode&&(i({id:t.id,isEdit:!1}),j(t))};function g(e){if(e){var t,n=Object(y.a)(M);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=a.brand;if(e.toLowerCase().indexOf(r)>-1)return console.log(a.src),a.src}}catch(c){n.e(c)}finally{n.f()}}}return Object(O.jsxs)(h.a,{bg:"white",boxShadow:"0px 4px 25px rgba(201, 201, 201, 0.5)",padding:"12px 32px",borderRadius:"6px",color:"gray.800",justify:"space-between",alignItems:"center",m:"8px 0",role:"group",position:"relative",children:[Object(O.jsxs)(h.a,{align:"center",children:[Object(O.jsx)(h.a,{bg:"gray.900",color:"white",w:"40px",h:"40px",lineHeight:"40px",textAlign:"center",justify:"center",align:"center",borderRadius:"5px",mr:"2",children:g(t.name)?Object(O.jsx)(w.a,{boxSize:"28px",src:g(t.name),alt:"Segun Adebayo",margin:"0 auto"}):t.name.slice(0,1).toUpperCase()}),Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(m.a,{onDoubleClick:function(){return i({id:n,isEdit:!0})},children:[!a&&t.name,a&&Object(O.jsx)(C.a,{name:"name",value:l.name,onChange:x,onKeyDown:f,placeholder:"edit",size:"s",border:"0px",bg:"gray.100",w:"80%"})]}),Object(O.jsxs)(m.a,{onDoubleClick:function(){return i({id:n,isEdit:!0})},children:[!a&&t.plan,a&&Object(O.jsx)(C.a,{value:l.plan,name:"plan",onChange:x,onKeyDown:f,placeholder:"edit",size:"s",border:"0px",bg:"gray.100",w:"80%"})]})]})]}),Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(m.a,{children:[!a&&t.price,a&&Object(O.jsx)(C.a,{value:l.price,name:"price",onChange:x,onKeyDown:f,placeholder:"edit",size:"s",border:"0px",bg:"gray.100",w:"80%"})]}),Object(O.jsx)(m.a,{children:"/month"})]}),Object(O.jsxs)(h.a,{display:"none",position:"absolute",right:"0",top:"0",bg:"white",h:"100%",w:"28px",borderRadius:"6px",color:"gray.500",boxShadow:"0px 4px 25px rgba(201, 201, 201, 0.5)",_groupHover:{display:"flex"},align:"center",direction:"column",justify:"center",children:[Object(O.jsx)(m.a,{py:"2px",mt:"5px",children:Object(O.jsx)(S.a,{as:k.b,_hover:{color:"gray.800"},onClick:c(n)})}),Object(O.jsx)(m.a,{py:"2px",mb:"5px",onClick:function(){return i({id:n,isEdit:!0})},children:Object(O.jsx)(S.a,{as:k.a,_hover:{color:"gray.800"},py:"1px"})})]})]})},_=n(103),q=function(){return Object(O.jsxs)(h.a,{bg:"white",boxShadow:"0px 4px 25px rgba(201, 201, 201, 0.5)",alignItems:"stretch",padding:"16px",pl:"32px",my:"10px",children:[Object(O.jsx)(m.a,{w:"20%",children:Object(O.jsx)(_.b,{size:"9"})}),Object(O.jsxs)(h.a,{w:"80%",flexWrap:"wrap",alignItems:"center",justify:"center",children:[Object(O.jsx)(_.a,{height:"10px",w:"80%"}),Object(O.jsx)(_.a,{height:"10px",w:"80%"})]})]})},H=function(e){var t=e.subs,n=e.handleDelete,a=e.updateIsEdit,r=e.handleSave;return Object(O.jsxs)(m.a,{children:[!t&&Object(O.jsxs)(m.a,{children:[Object(O.jsx)(q,{}),Object(O.jsx)(q,{}),Object(O.jsx)(q,{})]}),t&&t.map((function(e){return Object(O.jsx)(W,{sub:e.fields,isEdit:e.isEdit,id:e.id,handleDelete:n,updateIsEdit:a,handleSave:r},e.id)}))]})},K=n(36),V=n(101),U=n(109),$=function(e){var t=e.isLoading,n=e.inputValue,a=e.handleSubmit,r=e.handleChange;return Object(O.jsxs)(h.a,{w:"45%",bg:"white",ml:"20px",borderRadius:"4px",color:"gray.700",padding:"32px",direction:"column",children:["\u65b0\u589e\u8a02\u95b1\u9805\u76ee",Object(O.jsxs)("form",{onSubmit:a,children:[Object(O.jsxs)(K.a,{isRequired:!0,children:[Object(O.jsx)(V.a,{children:"\u670d\u52d9\u540d\u7a31"}),Object(O.jsx)(C.a,{placeholder:"\u670d\u52d9\u540d\u7a31",onChange:r,value:n.name,name:"name"})]}),Object(O.jsxs)(K.a,{isRequired:!0,children:[Object(O.jsx)(V.a,{children:"\u65b9\u6848"}),Object(O.jsx)(C.a,{placeholder:"\u65b9\u6848",name:"plan",onChange:r,value:n.plan})]}),Object(O.jsxs)(K.a,{isRequired:!0,children:[Object(O.jsx)(V.a,{children:"\u91d1\u984d"}),Object(O.jsx)(C.a,{placeholder:"\u91d1\u984d",name:"price",onChange:r,value:n.price})]}),Object(O.jsxs)(U.a,{mt:4,colorScheme:"teal",w:"100%",type:"submit",children:[t&&Object(O.jsxs)(m.a,{children:[Object(O.jsx)(g.a,{size:"xs",mr:"5px"}),"loading..."]}),!t&&"Submit"]})]})]})},Q="https://api.airtable.com/v0/appAPGGGa6GPLdEdJ/subscription?api_key=keyNCBsmapwe9NAJ7",X=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.plan,r=t.price,e.next=3,fetch("".concat(Q),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({fields:{plan:a,price:r,name:n}})});case 3:return c=e.sent,e.next=6,c.json();case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Q,"&records[]=").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r,c,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.name,r=t.plan,c=t.price,e.next=3,fetch("".concat("https://api.airtable.com/v0/appAPGGGa6GPLdEdJ/subscription","/").concat(n,"?").concat("api_key=keyNCBsmapwe9NAJ7"),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({fields:{plan:r,price:c,name:a}})});case 3:return i=e.sent,e.next=6,i.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ee=function(){var e=Object(r.useState)(),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),i=Object(b.a)(c,2),p=i[0],x=i[1],m=Object(r.useState)({name:"",plan:"",price:""}),g=Object(b.a)(m,2),y=g[0],w=g[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Q)).then((function(e){return e.json()}));case 2:t=e.sent,a(t.records),x(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x(!0),e.next=4,X({name:y.name,plan:y.plan,price:y.price});case 4:n=e.sent,x(!1),a((function(e){return[].concat(Object(s.a)(e),[n])})),w({name:"",plan:"",price:""});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.tempSub,e.next=3,Z({id:n,name:r.name,plan:r.plan,price:r.price});case 3:a((function(e){return e.map((function(e){return e.id!==n?e:Object(d.a)(Object(d.a)({},e),{},{fields:r,isEdit:!1})}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=null===n||void 0===n?void 0:n.length;return Object(O.jsx)(j.a,{theme:f,children:Object(O.jsx)(h.a,{justify:"center",mt:"20",children:Object(O.jsxs)(h.a,{w:"760px",children:[Object(O.jsxs)(h.a,{w:"55%",direction:"column",bg:"white",borderRadius:"4px",padding:"32px",pl:"24px",children:[Object(O.jsx)(v,{isLoading:p,sum:n&&function(e){var t=0;return null===e||void 0===e||e.forEach((function(e){var n=e.fields.price;n&&!isNaN(n)&&(t+=Number(n))})),t}(n),numOfRemaing:k}),Object(O.jsx)(H,{subs:n,handleDelete:function(e){return Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,Y(e);case 4:a((function(t){return t.filter((function(t){return t.id!==e}))})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))},updateIsEdit:function(e){var t=e.id,r=e.isEdit;a((function(e){return e.map((function(e){return e.id!==t?e:(console.log(t,e.id),Object(d.a)(Object(d.a)({},e),{},{isEdit:r}))}))})),console.log(n)},handleSave:S})]}),Object(O.jsx)($,{isLoading:p,inputValue:y,handleSubmit:C,handleChange:function(e){var t=e.target.name,n=e.target.value;w(Object(d.a)(Object(d.a)({},y),{},Object(o.a)({},t,n)))}})]})})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(O.jsx)(r.StrictMode,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(a.a,{}),Object(O.jsx)(ee,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),te()}},[[85,1,2]]]);
//# sourceMappingURL=main.de2918bf.chunk.js.map