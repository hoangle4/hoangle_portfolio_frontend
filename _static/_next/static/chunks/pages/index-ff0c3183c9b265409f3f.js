(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,s,l){"use strict";var n=l(3038);s.default=void 0;var r,c=(r=l(7294))&&r.__esModule?r:{default:r},t=l(1063),i=l(4651),a=l(7426);var o={};function d(e,s,l,n){if(e&&t.isLocalURL(s)){e.prefetch(s,l,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[s+"%"+l+(r?"%"+r:"")]=!0}}var x=function(e){var s,l=!1!==e.prefetch,r=i.useRouter(),x=c.default.useMemo((function(){var s=t.resolveHref(r,e.href,!0),l=n(s,2),c=l[0],i=l[1];return{href:c,as:e.as?t.resolveHref(r,e.as):i||c}}),[r,e.href,e.as]),h=x.href,m=x.as,u=e.children,v=e.replace,j=e.shallow,g=e.scroll,p=e.locale;"string"===typeof u&&(u=c.default.createElement("a",null,u));var f=(s=c.default.Children.only(u))&&"object"===typeof s&&s.ref,_=a.useIntersection({rootMargin:"200px"}),b=n(_,2),N=b[0],w=b[1],y=c.default.useCallback((function(e){N(e),f&&("function"===typeof f?f(e):"object"===typeof f&&(f.current=e))}),[f,N]);c.default.useEffect((function(){var e=w&&l&&t.isLocalURL(h),s="undefined"!==typeof p?p:r&&r.locale,n=o[h+"%"+m+(s?"%"+s:"")];e&&!n&&d(r,h,m,{locale:s})}),[m,h,w,p,l,r]);var E={ref:y,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,l,n,r,c,i,a){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&t.isLocalURL(l))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),s[r?"replace":"push"](l,n,{shallow:c,locale:a,scroll:i}))}(e,r,h,m,v,j,g,p)},onMouseEnter:function(e){t.isLocalURL(h)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),d(r,h,m,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var k="undefined"!==typeof p?p:r&&r.locale,L=r&&r.isLocaleDomain&&t.getDomainLocale(m,k,r&&r.locales,r&&r.domainLocales);E.href=L||t.addBasePath(t.addLocale(m,k,r&&r.defaultLocale))}return c.default.cloneElement(s,E)};s.default=x},7426:function(e,s,l){"use strict";var n=l(3038);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,l=e.disabled||!t,a=r.useRef(),o=r.useState(!1),d=n(o,2),x=d[0],h=d[1],m=r.useCallback((function(e){a.current&&(a.current(),a.current=void 0),l||x||e&&e.tagName&&(a.current=function(e,s,l){var n=function(e){var s=e.rootMargin||"",l=i.get(s);if(l)return l;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var s=n.get(e.target),l=e.isIntersecting||e.intersectionRatio>0;s&&l&&s(l)}))}),e);return i.set(s,l={id:s,observer:r,elements:n}),l}(l),r=n.id,c=n.observer,t=n.elements;return t.set(e,s),c.observe(e),function(){t.delete(e),c.unobserve(e),0===t.size&&(c.disconnect(),i.delete(r))}}(e,(function(e){return e&&h(e)}),{rootMargin:s}))}),[l,s,x]);return r.useEffect((function(){if(!t&&!x){var e=c.requestIdleCallback((function(){return h(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[x]),[m,x]};var r=l(7294),c=l(3447),t="undefined"!==typeof IntersectionObserver;var i=new Map},9526:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return d}});var n=l(9008),r=(l(7294),l(1664)),c=l(5893),t=function(){return(0,c.jsx)("div",{className:"banner-container",children:(0,c.jsxs)("div",{className:"Landing_Card box-background",children:[(0,c.jsx)("div",{className:"card-img justify-content-center text-center Landing_Card_Img_Box",children:(0,c.jsx)("img",{height:"200px",width:"175px",src:"/images/avatar.jpg",alt:""})}),(0,c.jsxs)("div",{className:"card-body text-white text-center",children:[(0,c.jsxs)("h5",{className:"card-title mb-2",children:["Hoang Le",(0,c.jsxs)("span",{children:[(0,c.jsx)("br",{}),(0,c.jsx)("small",{style:{color:"rgba(243, 156, 18)"},children:"Full Stack Developer"})]})]}),(0,c.jsxs)("ul",{className:"Banner_Ul p-0",children:[(0,c.jsx)("li",{"ata-toggle":"tooltip","data-placement":"top",title:"View Github",children:(0,c.jsx)("a",{href:"https://github.com/hoangle4",target:"_blank",rel:"noreferrer",children:(0,c.jsx)("img",{height:"25px",width:"25px",src:"/svg/github.svg",type:"image/svg+xml",className:"mr-2"})})}),(0,c.jsx)("li",{"ata-toggle":"tooltip","data-placement":"top",title:"View LinkedIn",children:(0,c.jsx)("a",{href:"https://www.linkedin.com/in/hoang-le-20b79a177/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)("img",{height:"25px",width:"25px",src:"/svg/linkedIn.svg",type:"image/svg+xml",className:"mr-2"})})}),(0,c.jsx)("li",{"data-toggle":"tooltip","data-placement":"top",title:"View Resume",children:(0,c.jsx)(r.default,{href:"/resume",children:(0,c.jsx)("img",{height:"25px",width:"25px",src:"/svg/resume.svg",type:"image/svg+xml",className:"mr-2"})})})]})]})]})})},i=function(){return(0,c.jsxs)("div",{className:"row Front_End_row text-white m-0",children:[(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsx)("h5",{className:"Front_End_h5",children:"FRONT END"})}),(0,c.jsx)("div",{className:"col-md-7 col-xs-12 box-background",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-12 text-center ",children:[(0,c.jsx)("embed",{style:{width:"250px"},type:"image/svg+xml",src:"./svg/web_tech.svg"}),(0,c.jsx)("h5",{className:"font-weight-bold text-warning",children:"WEB TECHNOLOGIES"})]}),(0,c.jsxs)("div",{className:"col-md-3 col-xs-6 Web_tech_sm_col",children:[(0,c.jsx)("embed",{className:"Front_End_Web_svg",style:{color:"black"},type:"image/svg+xml",src:"./svg/html.svg"}),(0,c.jsx)("h5",{className:"text-warning Front_End_Web_h5",children:"HTML"}),(0,c.jsxs)("ul",{className:"Front_End_ul",children:[(0,c.jsx)("li",{children:"Handlebars"}),(0,c.jsx)("li",{children:"Mustache"}),(0,c.jsx)("li",{children:"Jade"})]})]}),(0,c.jsxs)("div",{className:"col-md-3 col-xs-6 Web_tech_sm_col",children:[(0,c.jsx)("embed",{className:"Front_End_Web_svg",style:{color:"black"},type:"image/svg+xml",src:"./svg/css.svg"}),(0,c.jsx)("h5",{className:"text-warning Front_End_Web_h5",children:"CSS"}),(0,c.jsxs)("ul",{className:"Front_End_ul",children:[(0,c.jsx)("li",{children:"Foundation"}),(0,c.jsx)("li",{children:"Bootstrap"}),(0,c.jsx)("li",{children:"LESS"}),(0,c.jsx)("li",{children:"SASS"})]})]}),(0,c.jsxs)("div",{className:"col-md-3 col-xs-6 Web_tech_sm_col",children:[(0,c.jsx)("embed",{className:"Front_End_Web_svg",style:{color:"black"},type:"image/svg+xml",src:"./svg/javascript.svg"}),(0,c.jsx)("h5",{className:"text-warning Front_End_Web_h5",children:"JavaScript"}),(0,c.jsxs)("ul",{className:"Front_End_ul",children:[(0,c.jsx)("li",{children:"React"}),(0,c.jsx)("li",{children:"jQuery"}),(0,c.jsx)("li",{children:"Vue"}),(0,c.jsx)("li",{children:"Ember"})]})]}),(0,c.jsxs)("div",{className:"col-md-3 col-xs-6 ",children:[(0,c.jsx)("embed",{className:"Front_End_Web_svg",style:{color:"black"},type:"image/svg+xml",src:"./svg/typescript.svg"}),(0,c.jsx)("h5",{className:"text-warning Front_End_Web_h5",children:"TypeScript"}),(0,c.jsx)("ul",{className:"Front_End_ul",children:(0,c.jsx)("li",{children:"Angular"})})]})]})}),(0,c.jsxs)("div",{className:"col-md-5 col-xs-12 pt-5 pt-2 box-background Mobile_Desktop_Col",children:[(0,c.jsxs)("div",{style:{borderBottom:"0.5rem solid #2C3E50"},className:"row",children:[(0,c.jsx)("div",{className:"col-6 ",children:(0,c.jsx)("embed",{style:{width:"100%"},type:"image/svg+xml",src:"./svg/mobile_dev.svg"})}),(0,c.jsxs)("div",{className:"col-6 ",children:[(0,c.jsx)("h5",{className:"text-warning Front_End_Web_h5 pt-3",children:"MOBILE"}),(0,c.jsxs)("ul",{className:"Front_End_ul_side",children:[(0,c.jsx)("li",{children:"React-native"}),(0,c.jsx)("li",{children:"Cordova"}),(0,c.jsx)("li",{children:"Phonegap"}),(0,c.jsx)("li",{children:"Ionic"})]})]})]}),(0,c.jsxs)("div",{className:"row",style:{borderTop:"0.5rem solid #2C3E50"},children:[(0,c.jsx)("div",{className:"col-6 ",children:(0,c.jsx)("embed",{style:{width:"100%"},type:"image/svg+xml",src:"./svg/desktop_dev.svg"})}),(0,c.jsxs)("div",{className:"col-6 ",children:[(0,c.jsx)("h5",{className:"text-warning Front_End_Web_h5 pt-3",children:"DESKTOP APP"}),(0,c.jsx)("ul",{className:"Front_End_ul_side",children:(0,c.jsx)("li",{children:"Electron"})})]})]})]})]})},a=function(){return(0,c.jsx)("div",{className:"row Back_End_row text-white m-0 ",children:(0,c.jsxs)("div",{className:"col-12 box-background",children:[(0,c.jsx)("h5",{className:"Back_End_h5",children:"BACK END"}),(0,c.jsxs)("div",{className:"row ",children:[(0,c.jsxs)("div",{className:"col-md-6 col-xs-12 text-center Back_End_Node",children:[(0,c.jsx)("embed",{style:{width:"200px"},className:"Backend_embed",type:"image/svg+xml",src:"./svg/node.svg"}),(0,c.jsxs)("ul",{className:"Back_End_ul",children:[(0,c.jsx)("li",{children:"Express"}),(0,c.jsx)("li",{children:"Passport"}),(0,c.jsx)("li",{children:"Bcryptjs"}),(0,c.jsx)("li",{children:"jsonwebtoken"}),(0,c.jsx)("li",{children:"mongoose"}),(0,c.jsx)("li",{children:"Socket.io"}),(0,c.jsx)("li",{children:"Axios"})]})]}),(0,c.jsxs)("div",{className:"col-md-6 col-xs-12 text-center",children:[(0,c.jsx)("embed",{style:{width:"200px"},className:"Backend_embed",type:"image/svg+xml",src:"./svg/php.svg"}),(0,c.jsx)("ul",{className:"Back_End_ul",children:(0,c.jsx)("li",{children:"Laravel"})})]})]})]})})},o=function(){return(0,c.jsxs)("div",{className:"row Server_row text-white m-0",children:[(0,c.jsxs)("div",{className:"col-md-4 col-xs-12 text-center",children:[(0,c.jsx)("embed",{className:"web_svg",style:{color:"black",width:"150px"},type:"image/svg+xml",src:"./svg/database.svg"}),(0,c.jsx)("h5",{className:"text-warning",children:"DATABASE"}),(0,c.jsxs)("ul",{className:"server_ul",children:[(0,c.jsx)("li",{children:"MySQL"}),(0,c.jsx)("li",{children:"MongoDB"}),(0,c.jsx)("li",{children:"PostgreSQL"}),(0,c.jsx)("li",{children:"Firebase"})]})]}),(0,c.jsxs)("div",{className:"col-md-4 col-xs-12 text-center",children:[(0,c.jsx)("embed",{className:"web_svg",style:{color:"black",width:"150px"},type:"image/svg+xml",src:"./svg/server.svg"}),(0,c.jsx)("h5",{className:"text-warning",children:"SERVER"}),(0,c.jsxs)("ul",{className:"server_ul",children:[(0,c.jsx)("li",{children:"Apache"}),(0,c.jsx)("li",{children:"Nginx"}),(0,c.jsx)("li",{children:"AWS"}),(0,c.jsx)("li",{children:"Heroku"})]})]}),(0,c.jsxs)("div",{className:"col-md-4 col-xs-12 text-center",children:[(0,c.jsx)("embed",{className:"web_svg",style:{color:"black",width:"150px"},type:"image/svg+xml",src:"./svg/os.svg"}),(0,c.jsx)("h5",{className:"text-warning",children:"OPERATING SYSTEM"}),(0,c.jsxs)("ul",{className:"server_ul",children:[(0,c.jsx)("li",{children:"Windows"}),(0,c.jsx)("li",{children:"MacOS"}),(0,c.jsx)("li",{children:"Linux"})]})]})]})};function d(){return(0,c.jsxs)("div",{children:[(0,c.jsxs)(n.default,{children:[(0,c.jsx)("title",{children:"Hoangs portfolio"}),(0,c.jsx)("meta",{name:"description",content:"Hoang's portfolio"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsx)("main",{children:(0,c.jsx)("div",{className:"Landing_Body",children:(0,c.jsxs)("div",{className:"container border-dashed px-0",children:[(0,c.jsx)(t,{}),(0,c.jsx)(i,{}),(0,c.jsx)(a,{}),(0,c.jsx)(o,{})]})})})]})}},8581:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(9526)}])},9008:function(e,s,l){e.exports=l(639)},1664:function(e,s,l){e.exports=l(2167)}},function(e){e.O(0,[774,888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);