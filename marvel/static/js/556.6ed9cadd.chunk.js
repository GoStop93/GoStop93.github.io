"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[556],{4599:function(e,r,n){n.d(r,{Z:function(){return c}});var a=n.p+"static/media/deadpool.f829f53be6ff3191be47.gif",t=n(184),c=function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{style:{display:"flex",justifyContent:"center",marginTop:"5px",color:"#9F0013",fontWeight:"bold",fontSize:"20px"},children:"Error"}),(0,t.jsx)("img",{style:{display:"block",width:"230px",height:"230px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})]})}},5999:function(e,r,n){n.r(r),n.d(r,{default:function(){return T}});var a=n(885),t=n(2791),c=n(4270),s=n(4304),i=n(2602),o=n(4599),l=n(184),u=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]})},h=function(e){var r=e.char,n=r.name,a=r.description,t=r.thumbnail,c=r.homepage,s=r.wiki,i=r.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(o={objectFit:"contain"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:t,alt:n,style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:n}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:s,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:a}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,r){return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},r)})).slice(0,10)]})]})},d=function(e){var r=(0,t.useState)(null),n=(0,a.Z)(r,2),c=n[0],d=n[1],m=(0,s.Z)(),f=(m.loading,m.error,m.clearError),p=m.getCharacter,x=m.process,v=m.setProcess;(0,t.useEffect)((function(){j()}),[e.charId]);var j=function(){var r=e.charId;r&&(f(),p(r).then(_).then((function(){return v("confirmed")})))},_=function(e){d(e)};return(0,l.jsx)("div",{className:"char__info",children:function(e,r){switch(e){case"waiting":return(0,l.jsx)(u,{});case"loading":return(0,l.jsx)(i.Z,{});case"confirmed":return(0,l.jsx)(h,{char:r});case"error":return(0,l.jsx)(o.Z,{});default:throw new Error("Unexpected process state")}}(x,c)})},m=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",f=function(e){var r=e.char,n=r.name,a=r.description,t=r.thumbnail,c=r.homepage,s=r.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:t,alt:"Random character",className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:n}),(0,l.jsx)("p",{className:"randomchar__descr",children:a}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:s,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},p=function(){var e=(0,t.useState)({}),r=(0,a.Z)(e,2),n=r[0],c=r[1],u=(0,s.Z)(),h=u.loading,d=u.error,p=u.getCharacter,x=u.clearError;(0,t.useEffect)((function(){j();var e=setInterval(j,6e4);return function(){clearInterval(e)}}),[]);var v=function(e){c(e)},j=function(){x();var e=Math.floor(400*Math.random()+1011e3);p(e).then(v)},_=d?(0,l.jsx)(o.Z,{}):null,b=h?(0,l.jsx)(i.Z,{}):null,g=h||d?null:(0,l.jsx)(f,{char:n});return(0,l.jsxs)("div",{className:"randomchar",children:[_,b,g,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{onClick:j,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:m,alt:"mjolnir",className:"randomchar__decoration"})]})]})},x=n(2982),v=n(6983),j=n(5660),_=function(e){var r=(0,t.useState)([]),n=(0,a.Z)(r,2),c=n[0],u=n[1],h=(0,t.useState)(!1),d=(0,a.Z)(h,2),m=d[0],f=d[1],p=(0,t.useState)(210),_=(0,a.Z)(p,2),b=_[0],g=_[1],N=(0,t.useState)(!1),Z=(0,a.Z)(N,2),k=Z[0],y=Z[1],w=(0,s.Z)(),C=w.loading,S=w.error,E=w.getAllCharacters;(0,t.useEffect)((function(){F(b,!0)}),[]);var F=function(e,r){f(!r),E(e).then(T)},T=function(e){var r=!1;e.length<9&&(r=!0),u((function(r){return[].concat((0,x.Z)(r),(0,x.Z)(e))})),f((function(e){return!1})),g((function(e){return e+9})),y((function(e){return r}))},I=(0,t.useRef)([]),P=function(e){I.current.forEach((function(e){return e.classList.remove("char__item_selected")})),I.current[e].classList.add("char__item_selected"),I.current[e].focus()};var q=function(r){var n=r.map((function(r,n){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r.thumbnail&&(a={objectFit:"contain"}),(0,l.jsx)(v.Z,{timeout:500,classNames:"char__item",children:(0,l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return I.current[n]=e},onClick:function(){e.onCharSelected(r.id),P(n)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(r.id),P(n))},children:[(0,l.jsx)("img",{src:r.thumbnail,alt:r.name,style:a}),(0,l.jsx)("div",{className:"char__name",children:r.name})]})},r.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:(0,l.jsx)(j.Z,{component:null,children:n})})}(c),A=S?(0,l.jsx)(o.Z,{}):null,B=C&&!m?(0,l.jsx)(i.Z,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[A,B,q,(0,l.jsx)("button",{className:"button button__main button__long",disabled:m,style:{display:k?"none":"block"},onClick:function(){return F(b)},children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},b=n(5671),g=n(3144),N=n(136),Z=n(7277),k=function(e){(0,N.Z)(n,e);var r=(0,Z.Z)(n);function n(){var e;(0,b.Z)(this,n);for(var a=arguments.length,t=new Array(a),c=0;c<a;c++)t[c]=arguments[c];return(e=r.call.apply(r,[this].concat(t))).state={error:!1},e}return(0,g.Z)(n,[{key:"componentDidCatch",value:function(e,r){console.log(e,r),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)(o.Z,{}):this.props.children}}]),n}(t.Component),y=k,w=n.p+"static/media/vision.067d4ae1936d64a577ce.png",C=n(5705),S=n(7103),E=n(1087),F=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],c=r[1],i=(0,s.Z)(),u=i.loading,h=i.error,d=i.getCharacterByName,m=i.clearError,f=function(e){c(e)},p=h?(0,l.jsx)("div",{className:"char__search-critical-error",children:(0,l.jsx)(o.Z,{})}):null,x=n?n.length>0?(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",n[0].name," page?"]}),(0,l.jsx)(E.rU,{to:"/characters/".concat(n[0].id),className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"To page"})})]}):(0,l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,l.jsxs)("div",{className:"char__search-form",children:[(0,l.jsx)(C.J9,{initialValues:{charName:""},validationSchema:S.Ry({charName:S.Z_().required("This field is required")}),onSubmit:function(e){var r,n=e.charName;r=n,m(),d(r).then(f)},children:(0,l.jsxs)(C.l0,{children:[(0,l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsx)(C.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,l.jsx)("button",{type:"submit",className:"button button__main",disabled:u,children:(0,l.jsx)("div",{className:"inner",children:"find"})})]}),(0,l.jsx)(C.Bc,{component:"div",className:"char__search-error",name:"charName"})]})}),x,p]})},T=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],s=r[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.q,{children:[(0,l.jsx)("meta",{name:"description",content:"Marvel informational portal"}),(0,l.jsx)("title",{children:"Marvel informational portal"}),(0,l.jsx)("link",{rel:"icon",href:"favicons/favicon.ico"})]}),(0,l.jsx)(y,{children:(0,l.jsx)(p,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(y,{children:(0,l.jsx)(_,{onCharSelected:function(e){s(e)}})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(y,{children:(0,l.jsx)(d,{charId:n})}),(0,l.jsx)(y,{children:(0,l.jsx)(F,{})})]})]}),(0,l.jsx)("img",{src:w,alt:"vision",className:"bg-decoration"})]})}},4304:function(e,r,n){n.d(r,{Z:function(){return i}});var a=n(4165),t=n(5861),c=n(885),s=n(2791),i=function(){var e=function(){var e=(0,s.useState)(!1),r=(0,c.Z)(e,2),n=r[0],i=r[1],o=(0,s.useState)(null),l=(0,c.Z)(o,2),u=l[0],h=l[1],d=(0,s.useState)("waiting"),m=(0,c.Z)(d,2),f=m[0],p=m[1],x=(0,s.useCallback)(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n,t,c,s,o,l=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",t=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},i(!0),p("loading"),e.prev=5,e.next=8,fetch(r,{method:n,body:t,headers:c});case 8:if((s=e.sent).ok){e.next=11;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(s.status));case 11:return e.next=13,s.json();case 13:return o=e.sent,i(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(5),i(!1),h(e.t0.message),p("error"),e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{loading:n,request:x,error:u,clearError:(0,s.useCallback)((function(){h(null),p("loading")}),[]),process:f,setProcess:p}}(),r=e.loading,n=e.request,i=e.error,o=e.clearError,l=e.process,u=e.setProcess,h="https://gateway.marvel.com:443/v1/public/",d="apikey=f941887dfd675080e7257136180a5650",m=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,t,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:210,e.next=3,n("".concat(h,"characters?limit=9&offset=").concat(r,"&").concat(d));case 3:return t=e.sent,e.abrupt("return",t.data.results.map(j));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(h,"characters?name=").concat(r,"&").concat(d));case 2:return t=e.sent,e.abrupt("return",t.data.results.map(j));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(h,"characters/").concat(r,"?&").concat(d));case 2:return t=e.sent,e.abrupt("return",j(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),x=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(h,"comics/").concat(r,"?&").concat(d));case 2:return t=e.sent,e.abrupt("return",_(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,t,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:0,e.next=3,n("".concat(h,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(d));case 3:return t=e.sent,e.abrupt("return",t.data.results.map(_));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},_=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description for this comics",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not avaliable"}};return{loading:r,error:i,clearError:o,process:l,setProcess:u,getAllCharacters:m,getCharacter:p,getAllComics:v,getComics:x,getCharacterByName:f}}}}]);
//# sourceMappingURL=556.6ed9cadd.chunk.js.map