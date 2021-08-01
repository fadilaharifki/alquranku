(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(15),s=a.n(c),i=(a(41),a(42),a(5)),d="SET_DATA_ALQURAN",l="SET_DATA_ALQURAN_LOADING",o="SET_DATA_ALQURAN_ERROR",b="SET_DATADETAIL",j="SET_DATADETAIL_LOADING",u="SET_DATADETAIL_ERROR",h="ADD_DATA_FAVORITE",x="ADD_DATA_FAVORITE_LOADING",m="ADD_DATA_FAVORITE_ERROR";function O(e){return{type:d,payload:e}}function p(e){return{type:l,payload:e}}function f(e){return{type:o,payload:e}}function g(e){return e?function(t){t(p(!0)),fetch("https://api.alquran.cloud/v1/surah".concat(e)).then((function(e){return e.json()})).then((function(e){t(O(e)),t(p(!1))})).catch((function(e){t(f(e)),t(p(!1))}))}:function(e){e(p(!0)),fetch("https://api.alquran.cloud/v1/surah").then((function(e){return e.json()})).then((function(t){e(O(t)),e(p(!1))})).catch((function(t){e(f(!0)),e(p(!1))}))}}var v=a(35),y=a(17),N=a.n(y),w=a(28),A=a.n(w);function E(e){return{type:h,payload:e}}var D=a(3),T=a(0);function _(e){var t=Object(D.f)(),a=Object(i.b)();return Object(T.jsx)("div",{className:"md:w-1/2 lg:w-1/3 py-4 px-4",children:Object(T.jsx)("div",{className:" ",children:Object(T.jsxs)("div",{className:"bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg",children:[Object(T.jsx)("div",{className:"flex justify-center",children:Object(T.jsx)("img",{src:"https://cdn-brilio-net.akamaized.net/news/2020/06/24/187066/1255167-aplikasi-alquran-untuk-smartphone.png",className:"rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16",alt:"ayat alquran"})}),Object(T.jsxs)("div",{className:"py-2 px-2",children:[Object(T.jsx)("div",{className:" font-bold font-title text-center",children:e.dataAlquran.name}),Object(T.jsx)("div",{className:"text-sm font-light text-center my-2",children:e.dataAlquran.englishName})]}),Object(T.jsx)("button",{onClick:function(){t.push("/detail/".concat(e.dataAlquran.number))},className:"hover:bg-green-600 rounded-md px-2 hover:text-white",children:"Detail"}),Object(T.jsx)("button",{onClick:function(){e.dataAlquran?(A.a.fire({icon:"success",title:"success add favorite",showConfirmButton:!1,timer:1500}),a(E(e.dataAlquran))):a(E(!0))},className:"hover:bg-green-600 rounded-md px-2 hover:text-white",children:"Favorite"})]})})})}var q=a(29),k=a.n(q);function F(){var e=Object(i.c)((function(e){return e.dataAlquran})),t=Object(i.c)((function(e){return e.dataAlquran.isError})),a=Object(r.useState)(),c=Object(v.a)(a,2),s=c[0],d=c[1],l=Object(i.b)();Object(r.useEffect)((function(){l(g(s))}),[l,s]);var o=k()((function(e){e.target.value&&+e.target.value<=114&&+e.target.value>0?d("/".concat(e.target.value)):d()}),1e3),b=function(e){e.preventDefault(),l(g(s))};return t?Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{className:"pt-10 text-center text-5xl",children:"404"}),Object(T.jsx)("h1",{className:"pt-2 text-center ",children:"PAGE NOT FOUND"})]}):e.dataAlquran?e.dataAlquran.data.length>0?Object(T.jsxs)(n.a.Fragment,{children:[Object(T.jsx)("h1",{className:"text-center font-serif text-3xl pt-2 pb-4",children:"Alquran Surah"}),Object(T.jsx)("div",{className:"flex justify-end",children:Object(T.jsxs)("form",{onSubmit:b,children:[Object(T.jsx)("input",{onChange:o,className:" md:w-auto w-48 border-2 border-green-500 rounded-md m-6 p-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent ... ",placeholder:"no surah 1 between 114"}),Object(T.jsx)("button",{type:"submit",className:" hover:bg-green-700  hover:text-white px-4 border border-green-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 h-10 mt-6 mr-10 ",children:"search"})]})}),Object(T.jsx)("div",{className:"flex flex-wrap",children:e.dataAlquran.data.map((function(e){return Object(T.jsx)(_,{dataAlquran:e},e.number)}))})]}):Object(T.jsxs)(n.a.Fragment,{children:[Object(T.jsx)("h1",{className:"text-center font-serif text-3xl pt-2 pb-4",children:"Alquran Surah"}),Object(T.jsx)("div",{className:"flex justify-end",children:Object(T.jsxs)("form",{onSubmit:b,children:[Object(T.jsx)("input",{onChange:o,className:" md:w-auto w-48 border-2 border-green-500 rounded-md m-6 p-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent ... ",placeholder:"input number surah max 144"}),Object(T.jsx)("button",{type:"submit",className:" hover:bg-green-700  hover:text-white px-4 border border-green-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 h-10 mt-6 mr-10 ",children:"search"})]})}),Object(T.jsx)("div",{className:"flex flex-wrap",children:Object(T.jsx)(_,{dataAlquran:e.dataAlquran.data})})]}):Object(T.jsxs)("div",{className:"grid justify-items-center pt-10",children:[Object(T.jsx)(N.a,{type:"spin",color:"green",height:"10%",width:"10%"}),Object(T.jsx)("h1",{className:"pt-10",children:"...Loading..."})]})}function L(e){return{type:j,payload:e}}function S(e){return function(t){t(L(!0)),fetch("https://api.alquran.cloud/v1/surah/".concat(e,"/editions/quran-uthmani,en.asad,ar.alafasy")).then((function(e){return e.json()})).then((function(e){t({type:b,payload:e}),t(L(!1))})).catch((function(e){t({type:u,payload:!0}),t(L(!1))}))}}var R=a(30),C=a.n(R);function I(e){var t=e.handlerBack,a=Object(D.f)(),n=Object(D.g)(),c=Object(i.b)(),s=Object(i.c)((function(e){return e.dataDetail.data})),d=Object(i.c)((function(e){return e.dataDetail.isError}));return Object(r.useEffect)((function(){c(S(n.id))}),[c,n.id]),t=function(){a.push("/")},d?Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{className:"pt-10 text-center text-5xl",children:"404"}),Object(T.jsx)("h1",{className:"pt-2 text-center ",children:"PAGE NOT FOUND"})]}):s?Object(T.jsx)("div",{children:Object(T.jsx)("div",{className:"antialiased font-sans bg-gray-200",children:Object(T.jsx)("div",{className:"container mx-auto px-4 sm:px-8",children:Object(T.jsx)("div",{className:"py-8",children:Object(T.jsxs)("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto",children:[Object(T.jsxs)("h1",{className:"text-center font-serif text-3xl pt-2 pb-4",children:["Surah ",s.data[0].englishName," : ",s.data[0].name]}),Object(T.jsxs)("div",{className:"grid grid-cols-2",children:[Object(T.jsx)("button",{onClick:function(){return t()},className:"hover:bg-green-600 rounded-md px-2 mb-2 hover:text-white w-32",children:" Back to home"}),Object(T.jsxs)("h1",{className:"font-serif text-xl text-right",children:["Place : ",s.data[0].revelationType]})]}),Object(T.jsx)("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden bg-white",children:Object(T.jsxs)("table",{className:"min-w-full leading-normal",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{className:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider",children:"Ayat"}),Object(T.jsx)("th",{className:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider",children:"Translate english"}),Object(T.jsx)("th",{className:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider",children:"Arabic"}),Object(T.jsx)("th",{className:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider",children:"Audio"})]})}),Object(T.jsx)("tbody",{children:s.data[0].ayahs.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 bg-white text-sm",children:Object(T.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:t+1})}),Object(T.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 bg-white text-sm",children:Object(T.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:s.data[1].ayahs[t].text})}),Object(T.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 bg-white text-sm",children:Object(T.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:e.text})}),Object(T.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 bg-white text-sm",children:Object(T.jsx)(C.a,{src:s.data[2].ayahs[t].audio,controls:!0})})]},e.number)}))})]})})]})})})})}):Object(T.jsxs)("div",{className:"grid justify-items-center pt-10",children:[Object(T.jsx)(N.a,{type:"spin",color:"green",height:"10%",width:"10%"}),Object(T.jsx)("h1",{className:"pt-10",children:"...Loading..."})]})}var P=a(31),U=a(32),B=a(36),G=a(34),Q=a(11),V=function(e){Object(B.a)(a,e);var t=Object(G.a)(a);function a(){return Object(P.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){return Object(T.jsx)("nav",{className:"font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-green-600 shadow sm:items-baseline w-full",children:Object(T.jsxs)("div",{className:"mb-2 sm:mb-0",children:[Object(T.jsx)(Q.b,{to:"/",className:"text-2xl text-white hover:text-green-900 no-underline text-grey-darkest hover:text-blue-dark",children:"QuranKu"}),Object(T.jsx)(Q.b,{to:"/favorite",className:"pl-4 text-lg no-underline text-white hover:text-green-900 text-grey-darkest hover:text-blue-dark ml-2",children:"Favorite"})]})})}}]),a}(n.a.Component);function z(e){var t=Object(D.f)();return Object(T.jsx)("div",{className:"md:w-1/2 lg:w-1/3 py-4 px-4",children:Object(T.jsx)("div",{className:" ",children:Object(T.jsxs)("div",{className:"bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg",children:[Object(T.jsx)("div",{className:"flex justify-center",children:Object(T.jsx)("img",{src:"https://cdn-brilio-net.akamaized.net/news/2020/06/24/187066/1255167-aplikasi-alquran-untuk-smartphone.png",className:"rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16",alt:"ayat alquran"})}),Object(T.jsxs)("div",{className:"py-2 px-2",children:[Object(T.jsx)("div",{className:" font-bold font-title text-center",children:e.dataFavorite.name}),Object(T.jsx)("div",{className:"text-sm font-light text-center my-2",children:e.dataFavorite.englishName})]}),Object(T.jsx)("button",{onClick:function(){t.push({pathname:"/detail/".concat(e.dataFavorite.number),state:e.dataFavorite})},className:"hover:bg-green-600 rounded-md px-2 hover:text-white",children:"Detail"})]})})})}function J(){var e=Object(i.c)((function(e){return e.dataFavorite.data}));return 0===e.length?Object(T.jsx)("div",{className:"grid justify-items-center pt-10",children:Object(T.jsx)("h1",{className:"pt-10 text-2xl",children:"...Add Favorite..."})}):Object(T.jsxs)(n.a.Fragment,{children:[Object(T.jsx)("h1",{className:"text-center font-serif text-3xl pt-2 pb-4",children:"Surah Favorite"}),Object(T.jsx)("div",{className:"flex flex-wrap",children:e.map((function(e){return Object(T.jsx)(z,{dataFavorite:e},e.number)}))})]})}function M(){var e=Object(i.b)();return Object(r.useEffect)((function(){e(g())}),[e]),Object(T.jsxs)("div",{children:[Object(T.jsx)(V,{}),Object(T.jsxs)(D.c,{children:[Object(T.jsx)(D.a,{path:"/detail/:id",children:Object(T.jsx)(I,{})}),Object(T.jsx)(D.a,{path:"/favorite",children:Object(T.jsx)(J,{})}),Object(T.jsx)(D.a,{path:"/",children:Object(T.jsx)(F,{})})]})]})}var X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},K=a(14),H=a(33),W=a(4),Y={dataAlquran:"",isLodaing:!0,isError:!1};var Z={data:"",isLodaing:!0,isError:!1};var $=a(18),ee={data:[],isLodaing:!0,isError:!1};var te=Object(K.b)({dataAlquran:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;return a===d?Object(W.a)(Object(W.a)({},e),{},{dataAlquran:r}):a===l?Object(W.a)(Object(W.a)({},e),{},{isLodaing:r}):a===o?Object(W.a)(Object(W.a)({},e),{},{isError:r}):e},dataDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;return a===b?Object(W.a)(Object(W.a)({},e),{},{data:r}):a===j?Object(W.a)(Object(W.a)({},e),{},{isLodaing:r}):a===u?Object(W.a)(Object(W.a)({},e),{},{isError:r}):e},dataFavorite:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;if(a===h){var n=[];return 0===e.data.length?n=[].concat(Object($.a)(e.data),[r]):e.data.length>0&&e.data.forEach((function(t){n=t.number!==r.number?[].concat(Object($.a)(e.data),[r]):Object($.a)(e.data)})),Object(W.a)(Object(W.a)({},e),{},{data:n})}return a===x?Object(W.a)(Object(W.a)({},e),{},{isLodaing:r}):a===m?Object(W.a)(Object(W.a)({},e),{},{isError:r}):e}}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.c,re=Object(K.d)(te,ae(Object(K.a)(H.a)));s.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(i.a,{store:re,children:Object(T.jsx)(Q.a,{children:Object(T.jsx)(M,{})})})}),document.getElementById("root")),X()}},[[62,1,2]]]);
//# sourceMappingURL=main.59f557a6.chunk.js.map