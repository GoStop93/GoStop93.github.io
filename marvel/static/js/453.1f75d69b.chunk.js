"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[453],{1748:function(n,e,i){i.r(e),i.d(e,{default:function(){return h}});var c=i(2982),t=i(885),s=i(2791),r=i(1087),l=i(4304),a=i(4599),o=i(2602),u=i(184),m=function(){var n=(0,s.useState)([]),e=(0,t.Z)(n,2),i=e[0],m=e[1],d=(0,s.useState)(!1),f=(0,t.Z)(d,2),h=f[0],j=f[1],x=(0,s.useState)(0),_=(0,t.Z)(x,2),v=_[0],g=_[1],Z=(0,s.useState)(!1),b=(0,t.Z)(Z,2),p=b[0],N=b[1],k=(0,l.Z)(),C=k.loading,S=k.error,w=k.getAllComics;(0,s.useEffect)((function(){y(v,!0)}),[]);var y=function(n,e){j(!e),w(n).then(q)},q=function(n){var e=!1;n.length<8&&(e=!0),m((function(e){return[].concat((0,c.Z)(i),(0,c.Z)(n))})),j(!1),g((function(n){return n+8})),N(e)};var A=function(n){var e=n.map((function(n,e){return(0,u.jsx)("li",{className:"comics__item",children:(0,u.jsxs)(r.rU,{to:"/comics/".concat(n.id),children:[(0,u.jsx)("img",{src:n.thumbnail,alt:n.title,className:"comics__item-img"}),(0,u.jsx)("div",{className:"comics__item-name",children:n.title}),(0,u.jsx)("div",{className:"comics__item-price",children:n.price})]})},e)}));return(0,u.jsx)("ul",{className:"comics__grid",children:e})}(i),E=S?(0,u.jsx)(a.Z,{}):null,F=C&&!h?(0,u.jsx)(o.Z,{}):null;return(0,u.jsxs)("div",{className:"comics__list",children:[E,F,A,(0,u.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:p?"none":"block"},onClick:function(){return y(v)},children:(0,u.jsx)("div",{className:"inner",children:"load more"})})]})},d=i(4270),f=i(3957),h=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(d.q,{children:[(0,u.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,u.jsx)("title",{children:"Comics page"}),(0,u.jsx)("link",{rel:"icon",href:"favicons/favicon.ico"})]}),(0,u.jsx)(f.Z,{}),(0,u.jsx)(m,{})]})}}}]);
//# sourceMappingURL=453.1f75d69b.chunk.js.map