(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(4),i=n.n(s),l=(n(9),n(2)),r=(n(10),n(0));var a=function(e){return Object(r.jsx)("div",{className:"songCard",children:Object(r.jsx)("li",{onClick:e.onClick,children:e.name})})};var d=function(e){return Object(r.jsx)("div",{className:"songCard",children:Object(r.jsx)("a",{target:"_blank",href:"https://www.youtube.com/results?search_query=".concat(e.name),children:Object(r.jsx)("li",{onClick:e.onClick,children:e.name})})})};var u=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),u=i[0],j=i[1],m=Object(c.useState)(!1),h=Object(l.a)(m,2),p=h[0],g=h[1],b=Object(c.useState)([]),y=Object(l.a)(b,2),x=y[0],f=y[1],O=Object(c.useRef)(null);return Object(c.useEffect)((function(){""!==n?(document.getElementById("error").style.display="none",fetch("https://music-recommender-ai.herokuapp.com/api/search?q=".concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),j(e)}))):j([])}),[n]),Object(c.useEffect)((function(){x===[]||0===x.length?document.getElementById("magic").style.display="none":(O.current.scrollIntoView(),j([]),document.getElementById("magic").style.display="block",document.getElementById("error").style.display="none")}),[x]),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",className:"App-logo",alt:"logo"}),Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)("input",{style:{marginBottom:"0"},value:n,type:"text",onChange:function(e){o(e.target.value),f([])},placeholder:"Enter your favourite song"}),Object(r.jsx)("ul",{style:{backgroundColor:"#1aa34a",borderRadius:"0 0 5px 5px",padding:"0.5em",marginTop:0},children:u.slice(0,5).map((function(e){return Object(r.jsx)(a,{name:e,onClick:function(){console.log("oncliced"),o(e),f([])}})}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"method",children:"Collaborative Filtering"}),Object(r.jsxs)("label",{className:"switch",children:[Object(r.jsx)("input",{type:"checkbox",onChange:function(e){g(e.target.checked)}}),Object(r.jsx)("span",{className:"slider round"})]}),Object(r.jsx)("span",{className:"method",children:"Content Based "})]}),Object(r.jsx)("button",{type:"button",className:"btn",style:{fontWeight:"700",letterSpacing:"2px"},onClick:function(){document.getElementById("Loading").style.display="flex",console.log(n,p),!0===p?fetch("https://music-recommender-ai.herokuapp.com/api/content/find?q=".concat(encodeURI(n),"&c=4")).then((function(e){return e.json()})).then((function(e){document.getElementById("Loading").style.display="none",e.error?(f([]),document.getElementById("error").style.display="block"):(document.getElementById("error").style.display="none",f(e)),console.log(e)})):fetch("https://music-recommender-ai.herokuapp.com/api/collab/find?q=".concat(encodeURI(n),"&c=4")).then((function(e){return e.json()})).then((function(e){document.getElementById("Loading").style.display="none",e.error?(f([]),document.getElementById("error").style.display="block"):(document.getElementById("error").style.display="none",f(e)),console.log(e)}))},children:"Find your next favourite song"}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{style:{textAlign:"center",display:"none",alignItems:"center"},id:"Loading",children:[Object(r.jsx)("h3",{children:" Getting Results, please wait"}),Object(r.jsx)("div",{class:"loader"})]}),Object(r.jsx)("h1",{style:{textAlign:"center",display:"none"},id:"error",children:"Sorry an error occured"}),Object(r.jsx)("h1",{style:{textAlign:"center"},id:"magic",children:"Your Recommendations are:"}),Object(r.jsx)("ul",{children:x.length>0?x.map((function(e){return Object(r.jsx)(d,{name:e.name})})):""}),Object(r.jsx)("div",{ref:O,children:" "})]})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b292c6fd.chunk.js.map