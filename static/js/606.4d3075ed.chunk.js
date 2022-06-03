"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[606],{2606:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,i,o,a,u,c,s,l,h,d=t(885),f=t(6871),p=t(2791),m=t(5509),v=t(168),g=t(6031),b=t(3504),k=g.ZP.section(r||(r=(0,v.Z)(["\n  display: flex;\n"]))),y=g.ZP.img(i||(i=(0,v.Z)(["\n  display: block;\n  width: 300px;\n  height: 100%;\n  margin-right: 30px;\n"]))),x=g.ZP.div(o||(o=(0,v.Z)([""]))),j=g.ZP.h2(a||(a=(0,v.Z)([""]))),Z=g.ZP.p(u||(u=(0,v.Z)([""]))),w=g.ZP.h3(c||(c=(0,v.Z)([""]))),P=g.ZP.ul(s||(s=(0,v.Z)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 10px;\n  color: blue;\n  margin-bottom: 20px;\n"]))),_=(0,g.ZP)(b.rU)(l||(l=(0,v.Z)(["\n  text-decoration: none;\n  color: inherit;\n  :visited {\n    color: inherit;\n  }\n"]))),U=g.ZP.li(h||(h=(0,v.Z)([""]))),A=t(8192);var R={28:{en:"Action",uk:"\u0411\u043e\u0439\u043e\u0432\u0438\u043a"},12:{en:"Adventure",uk:"\u041f\u0440\u0438\u0433\u043e\u0434\u0438"},16:{en:"Animation",uk:"\u0410\u043d\u0456\u043c\u0430\u0446\u0456\u044f"},35:{en:"Comedy",uk:"\u041a\u043e\u043c\u0435\u0434\u0456\u044f"},80:{en:"Crime",uk:"\u041a\u0440\u0438\u043c\u0456\u043d\u0430\u043b\u044c\u043d\u0438\u0439"},99:{en:"Documentary",uk:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0439"},18:{en:"Drama",uk:"\u0414\u0440\u0430\u043c\u0430"},10751:{en:"Family",uk:"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439"},14:{en:"Fantasy",uk:"\u0424\u0435\u043d\u0442\u0430\u0437\u0456"},36:{en:"History",uk:"\u0406\u0441\u0442\u043e\u0440\u0438\u0447\u043d\u0438\u0439"},27:{en:"Horror",uk:"\u0416\u0430\u0445\u0438"},10402:{en:"Music",uk:"\u041c\u044e\u0437\u0438\u043a\u043b"},9648:{en:"Mystery",uk:"\u041c\u0456\u0441\u0442\u0438\u0447\u043d\u0438\u0439"},10749:{en:"Romance",uk:"\u041c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430"},878:{en:"Science Fiction",uk:"\u041d\u0430\u0443\u043a\u043e\u0432\u0430 \u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430"},10770:{en:"TV Movie",uk:"\u0422\u0412 \u0444\u0456\u043b\u044c\u043c"},53:{en:"Thriller",uk:"\u0422\u0440\u0438\u043b\u0435\u0440"},10752:{en:"War",uk:"\u0412\u043e\u0454\u043d\u043d\u0438\u0439"},37:{en:"Western",uk:"\u0412\u0435\u0441\u0442\u0435\u0440\u043d"}},C=function(n){if(!n.length)return"";var e,t=window.location.hash.substring(1),r=[],i=function(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=(0,A.Z)(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){u=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}(n);try{for(i.s();!(e=i.n()).done;){var o=e.value;if(2===r.length){r.push("...");break}"object"!==typeof o?R[o]&&r.push(R[o][t]):r.push(o.name)}}catch(a){i.e(a)}finally{i.f()}return r.map((function(n){return"".concat(n)})).join(", ")},S=t(184),T=function(){var n=(0,p.useState)({}),e=(0,d.Z)(n,2),t=e[0],r=e[1],i=(0,f.UO)().movieId;return(0,p.useEffect)((function(){(0,m.TP)(i).then((function(n){return r(n)}))}),[i]),(0,S.jsx)(S.Fragment,{children:t.title&&(0,S.jsxs)(k,{children:[(0,S.jsx)(y,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path)}),(0,S.jsxs)(x,{children:[(0,S.jsxs)(j,{children:[t.title," (",t.release_date.slice(0,4),")"]}),(0,S.jsxs)(Z,{children:["User score: ",Math.round(t.popularity),"%"]}),(0,S.jsx)(w,{children:"Overview"}),(0,S.jsx)(Z,{children:t.overview}),(0,S.jsx)(w,{children:"Genres"}),(0,S.jsx)(Z,{children:C(t.genres)}),(0,S.jsx)(w,{children:"Additional information"}),(0,S.jsxs)(P,{children:[(0,S.jsx)(U,{children:(0,S.jsx)(_,{to:"cast",children:"Cast"})}),(0,S.jsx)(U,{children:(0,S.jsx)(_,{to:"reviews",children:"Reviews"})})]}),(0,S.jsx)(f.j3,{})]})]})})}},5509:function(n,e,t){t.d(e,{TP:function(){return p},bc:function(){return g},ik:function(){return d},tx:function(){return v},z1:function(){return f},zv:function(){return m}});var r=t(5861),i=t(7757),o=t.n(i),a=t(4569),u=t.n(a);u().defaults.params={api_key:"079f315d1c0a92bbce195275b13a313a"};var c=u().create({method:"get",baseURL:"https://api.themoviedb.org/3/trending/movie/day"}),s=u().create({method:"get",baseURL:"https://api.themoviedb.org/3/search/movie",include_adult:"true"}),l=u().create({method:"get",baseURL:"https://api.themoviedb.org/3/movie"}),h=u().create({method:"get",baseURL:"https://api.themoviedb.org/3/person"}),d=function(){return c().then((function(n){return n.data.results}))},f=function(n){return s({params:{query:n}}).then((function(n){return n.data.results}))},p=function(n){return l.get("/".concat(n)).then((function(n){return n.data}))},m=function(n){return l.get("/".concat(n,"/credits")).then((function(n){return n.data.cast}))},v=function(n){return l.get("/".concat(n,"/reviews")).then((function(n){return n.data.results}))},g=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.get("/".concat(e,"/images"));case 2:return n.abrupt("return",n.sent.data.profiles[0].file_path);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=606.4d3075ed.chunk.js.map