(this.webpackJsonpshow_crypto_values=this.webpackJsonpshow_crypto_values||[]).push([[0],{116:function(e,c,r){"use strict";r.r(c);var t=r(0),n=r.n(t),a=r(22),s=r.n(a),o=(r(90),r(91),r(62)),l=r(122),u=r(121),i=r(47),j=r(31),h=r(123),b=r(120),y=r(125),d=r(126),O=(r(92),r(9)),x=r(94),g=function(){var e=Object(t.useState)(),c=Object(o.a)(e,2),r=c[0],n=c[1],a=Object(t.useState)("USD"),s=Object(o.a)(a,2),g=s[0],p=s[1],f=Object(t.useState)(),S=Object(o.a)(f,2),m=(S[0],S[1]);Object(t.useEffect)((function(){x.get("https://api.coincap.io/v2/assets").then((function(e){n(e.data.data)})).catch((function(e){console.log(e)}))}),[]);var v=new Intl.NumberFormat("en-US",{style:"currency",currency:g}),K=l.a.Option;console.log([{currency:"USD",rate:"1.1888"},{currency:"JPY",rate:"130.42"},{currency:"BGN",rate:"1.9558"},{currency:"CZK",rate:"25.945"},{currency:"DKK",rate:"7.4372"},{currency:"GBP",rate:"0.86658"},{currency:"HUF",rate:"357.97"},{currency:"PLN",rate:"4.5392"},{currency:"RON",rate:"4.9198"},{currency:"SEK",rate:"10.1725"},{currency:"CHF",rate:"1.1010"},{currency:"ISK",rate:"151.90"},{currency:"NOK",rate:"10.1130"},{currency:"HRK",rate:"7.5755"},{currency:"RUB",rate:"91.8152"},{currency:"TRY",rate:"9.6903"},{currency:"AUD",rate:"1.5579"},{currency:"BRL",rate:"6.6641"},{currency:"CAD",rate:"1.4950"},{currency:"CNY",rate:"7.7934"},{currency:"HKD",rate:"9.2470"},{currency:"IDR",rate:"17354.52"},{currency:"ILS",rate:"3.9093"},{currency:"INR",rate:"88.8145"},{currency:"KRW",rate:"1331.28"},{currency:"MXN",rate:"23.9374"},{currency:"MYR",rate:"4.9157"},{currency:"NZD",rate:"1.6860"},{currency:"PHP",rate:"57.764"},{currency:"SGD",rate:"1.5941"},{currency:"THB",rate:"37.388"},{currency:"ZAR",rate:"17.3100"}]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(l.a,{showSearch:!0,style:{width:80},placeholder:"USD",optionFilterProp:"children",onChange:function(e){p(e),console.log("selected ".concat(e)),console.log(g)},onFocus:function(){console.log("focus")},onBlur:function(){console.log("blur")},onSearch:function(e){console.log("search:",e)},filterOption:function(e,c){return c.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(O.jsx)(K,{value:"USD",children:"USD"}),Object(O.jsx)(K,{value:"EUR",children:"EURO"}),Object(O.jsx)(K,{value:"NOK",children:"NOK"}),Object(O.jsx)(K,{value:"GBP",children:"GBP"}),Object(O.jsx)(K,{value:"JPY",children:"JPY"}),Object(O.jsx)(K,{value:"DKK",children:"DKK"}),Object(O.jsx)(K,{value:"BGN",children:"BGN"}),Object(O.jsx)(K,{value:"CZK",children:"NOK"}),Object(O.jsx)(K,{value:"SEK",children:"SEK"}),Object(O.jsx)(K,{value:"ISK",children:"ISK"}),Object(O.jsx)(K,{value:"AUD",children:"AUD"})]}),r&&0!==r.length?r.map((function(e){return Object(O.jsx)(u.a,{children:Object(O.jsxs)(i.a,{gutter:{xs:8,sm:16,md:24,lg:32},children:[Object(O.jsxs)(j.a,{className:"gutter-row",span:4,style:{fontSize:12},children:[e.rank,"."]}),Object(O.jsx)(j.a,{className:"gutter-row",span:4,children:Object(O.jsx)(h.a,{src:Object(O.jsx)(b.a,{src:"https://static.coincap.io/assets/icons/".concat(e.symbol.toLowerCase(),"@2x.png"),alt:"symbol",height:24,width:24})})}),Object(O.jsxs)(j.a,{className:"gutter-row",span:4,style:{fontSize:14},children:[Object(O.jsx)("a",{href:e.explorer,style:{textDecoration:"underline"},children:e.name}),Object(O.jsx)("div",{style:{fontSize:"11px",color:"#5e5e5e"},children:e.symbol})]}),Object(O.jsxs)(j.a,{className:"gutter-row",span:4,children:[v.format(e.priceUsd)&&m,Object(O.jsx)("br",{}),e.changePercent24Hr<0?Object(O.jsxs)("div",{style:{color:"red"},children:[Object(O.jsx)(y.a,{}),e.changePercent24Hr.slice(0,-12)+"%"]}):Object(O.jsxs)("div",{style:{color:"green"},children:[Object(O.jsx)(d.a,{}),e.changePercent24Hr.slice(0,-12)+"%"]})]}),Object(O.jsxs)(j.a,{className:"gutter-row",span:4,children:[new Intl.NumberFormat("en-US").format(e.supply)+" / ",new Intl.NumberFormat("en-US").format(e.maxSupply)]})]})},e.id)})):"Loading.."]})};var p=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(g,{})})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,127)).then((function(c){var r=c.getCLS,t=c.getFID,n=c.getFCP,a=c.getLCP,s=c.getTTFB;r(e),t(e),n(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),f()},90:function(e,c,r){},91:function(e,c,r){}},[[116,1,2]]]);
//# sourceMappingURL=main.e43c63ef.chunk.js.map