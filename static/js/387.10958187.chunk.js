"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r,a,u,c,i=n(885),o=n(2791),s=n(6871),h=n(5509),f=n(168),d=n(6031),p=d.ZP.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),l=d.ZP.li(a||(a=(0,f.Z)(["\n  :not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),m=d.ZP.h3(u||(u=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),g=d.ZP.p(c||(c=(0,f.Z)([""]))),v=n(184),b=function(){var t=(0,o.useState)([]),e=(0,i.Z)(t,2),n=e[0],r=e[1],a=(0,o.useState)(!1),u=(0,i.Z)(a,2),c=u[0],f=u[1],d=(0,s.UO)().movieId;return(0,o.useEffect)((function(){(0,h.tx)(d).then((function(t){t.length?r(t):f(!0)}))}),[d]),(0,v.jsxs)(p,{children:[!!n.length&&n.map((function(t){return(0,v.jsxs)(l,{children:[(0,v.jsx)(m,{children:t.author}),(0,v.jsx)(g,{children:t.content})]},t.id)})),!!c&&(0,v.jsx)("p",{children:"There is no any review yet"})]})}},5509:function(t,e,n){n.d(e,{TP:function(){return l},bc:function(){return v},ik:function(){return d},tx:function(){return g},z1:function(){return p},zv:function(){return m}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c);i().defaults.params={api_key:"079f315d1c0a92bbce195275b13a313a"};var o=i().create({method:"get",baseURL:"https://api.themoviedb.org/3/trending/movie/day"}),s=i().create({method:"get",baseURL:"https://api.themoviedb.org/3/search/movie",include_adult:"true"}),h=i().create({method:"get",baseURL:"https://api.themoviedb.org/3/movie"}),f=i().create({method:"get",baseURL:"https://api.themoviedb.org/3/person"}),d=function(){return o().then((function(t){return t.data.results}))},p=function(t){return s({params:{query:t}}).then((function(t){return t.data.results}))},l=function(t){try{return h.get("/".concat(t)).then((function(t){return t.data}))}catch(e){throw Error}},m=function(t){return h.get("/".concat(t,"/credits")).then((function(t){return t.data.cast}))},g=function(t){return h.get("/".concat(t,"/reviews")).then((function(t){return t.data.results}))},v=function(){var t=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.get("/".concat(e,"/images"));case 3:return t.abrupt("return",t.sent.data.profiles[0].file_path);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.10958187.chunk.js.map