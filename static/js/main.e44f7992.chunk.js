(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(4),i=n.n(s),l=(n(9),n(2)),a=(n(10),n(0));var r=function(e){return Object(a.jsxs)("div",{className:"songCard",children:[Object(a.jsx)("img",{className:"musicLogo",width:"24",height:"24",style:{marginRight:2},src:"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/music-icon-18-256.png"}),Object(a.jsx)("li",{onClick:e.onClick,children:e.name})]})};var d=function(e){return Object(a.jsx)("div",{className:"songCard",children:Object(a.jsx)("a",{target:"_blank",href:"https://www.youtube.com/results?search_query=".concat(e.name),children:Object(a.jsxs)("div",{className:"Row",children:[Object(a.jsx)("img",{className:"musicLogo",width:"24",height:"24",style:{marginRight:12},src:"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/music-icon-18-256.png"}),Object(a.jsx)("li",{onClick:e.onClick,children:e.name})]})})})};var u=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),u=i[0],m=i[1],j=Object(c.useState)(!1),h=Object(l.a)(j,2),g=h[0],p=h[1],b=Object(c.useState)([]),y=Object(l.a)(b,2),f=y[0],x=y[1],O=Object(c.useRef)(null);return Object(c.useEffect)((function(){""!==n?(document.getElementById("error").style.display="none",fetch("https://music-recommender-ai.herokuapp.com/api/".concat(!0===g?"content":"collab","/search?q=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),m(e)}))):m([])}),[n]),Object(c.useEffect)((function(){f===[]||0===f.length?document.getElementById("magic").style.display="none":(O.current.scrollIntoView(),m([]),document.getElementById("magic").style.display="block",document.getElementById("error").style.display="none")}),[f]),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",className:"App-logo",alt:"logo"}),Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)("input",{style:{marginBottom:"0"},value:n,type:"text",onChange:function(e){o(e.target.value),x([])},placeholder:"Enter your favourite song"}),Object(a.jsx)("ul",{style:{backgroundColor:"#1aa34a",borderRadius:"0 0 5px 5px",padding:"0.5em",marginTop:0},children:u.map((function(e){return Object(a.jsx)(r,{name:e,onClick:function(){console.log("oncliced"),o(e),x([])}})}))})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"method",children:"Collaborative Filtering"}),Object(a.jsxs)("label",{className:"switch",children:[Object(a.jsx)("input",{type:"checkbox",onChange:function(e){p(e.target.checked),m([])}}),Object(a.jsx)("span",{className:"slider round"})]}),Object(a.jsx)("span",{className:"method",children:"Content Based "})]}),Object(a.jsx)("button",{type:"button",className:"btn",style:{fontWeight:"700",letterSpacing:"2px"},onClick:function(){x([]),m([]),document.getElementById("Loading").style.display="flex",document.getElementById("magic").style.display="none",document.getElementById("error").style.display="none",console.log(n,g),!0===g?fetch("https://music-recommender-ai.herokuapp.com/api/content/find?q=".concat(encodeURI(n),"&c=4")).then((function(e){return e.json()})).then((function(e){document.getElementById("Loading").style.display="none",e.error?(x([]),document.getElementById("error").style.display="block"):(document.getElementById("error").style.display="none",x(e)),console.log(e)})):fetch("https://music-recommender-ai.herokuapp.com/api/collab/find?q=".concat(encodeURI(n),"&c=4")).then((function(e){return e.json()})).then((function(e){document.getElementById("Loading").style.display="none",e.error?(x([]),document.getElementById("error").style.display="block"):(document.getElementById("error").style.display="none",x(e)),console.log(e)}))},children:"Find your next favourite song"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{style:{textAlign:"center",display:"none",alignItems:"center"},id:"Loading",children:[Object(a.jsx)("h3",{children:" Getting Results, please wait"}),Object(a.jsx)("div",{class:"loader"})]}),Object(a.jsx)("h1",{style:{textAlign:"center",display:"none"},id:"error",children:"Sorry an error occured"}),Object(a.jsx)("h1",{style:{textAlign:"center"},id:"magic",children:"Your Recommendations are:"}),Object(a.jsx)("ul",{children:f.length>0?f.map((function(e){return Object(a.jsx)(d,{name:e.name})})):""}),Object(a.jsx)("div",{ref:O,children:" "})]})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e44f7992.chunk.js.map