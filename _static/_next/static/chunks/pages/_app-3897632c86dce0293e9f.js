(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1143:function(e){"use strict";e.exports=function(e,t,n,r,o,a,s,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,s,i],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},8119:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return Qt}});var o=n(7294),a=(n(2243),n(5210),n(4036)),s=n.n(a);const i=(e,t=null)=>null!=e?String(e):t||null;var l=o.createContext(null);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(1143);function d(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function p(e,t){return Object.keys(t).reduce((function(n,r){var a,s=n,i=s[d(r)],l=s[r],p=u(s,[d(r),r].map(f)),v=t[r],h=function(e,t,n){var r=(0,o.useRef)(void 0!==e),a=(0,o.useState)(t),s=a[0],i=a[1],l=void 0!==e,c=r.current;return r.current=l,!l&&c&&s!==t&&i(t),[l?e:s,(0,o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(l,i,e[v]),m=h[0],g=h[1];return c({},p,((a={})[r]=m,a[v]=g,a))}),e)}function v(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function h(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function m(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}v.__suppressDeprecationWarning=!0,h.__suppressDeprecationWarning=!0,m.__suppressDeprecationWarning=!0;var g=/-(.)/g;var b=n(5893);const x=o.createContext({prefixes:{}}),{Consumer:y,Provider:E}=x;function w(e,t){const{prefixes:n}=(0,o.useContext)(x);return e||n[t]||t}const N=e=>{return e[0].toUpperCase()+(t=e,t.replace(g,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function j(e,{displayName:t=N(e),Component:n,defaultProps:r}={}){const a=o.forwardRef((({className:t,bsPrefix:r,as:o=n||"div",...a},i)=>{const l=w(r,e);return(0,b.jsx)(o,{ref:i,className:s()(t,l),...a})}));return a.defaultProps=r,a.displayName=t,a}const C=o.forwardRef((({bsPrefix:e,className:t,as:n,...r},o)=>{e=w(e,"navbar-brand");const a=n||(r.href?"a":"span");return(0,b.jsx)(a,{...r,ref:o,className:s()(t,e)})}));C.displayName="NavbarBrand";var O=C;function k(e){return e&&e.ownerDocument||document}function R(e,t){return function(e){var t=k(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var S=/([A-Z])/g;var P=/^ms-/;function T(e){return function(e){return e.replace(S,"-$1").toLowerCase()}(e).replace(P,"-ms-")}var L=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var D=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(T(t))||R(e).getPropertyValue(T(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!L.test(e))}(o)?n+=T(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(T(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=n(5697),M=n.n(_),F=n(3935),A=!1,B=o.createContext(null),I="unmounted",K="exited",H="entering",W="entered",U="exiting",V=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=K,r.appearStatus=H):o=W:o=t.unmountOnExit||t.mountOnEnter?I:K,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,$(t,n),r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===I?{status:K}:null};var a=r.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==H&&n!==W&&(t=H):n!==H&&n!==W||(t=U)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},a.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===H?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===K&&this.setState({status:I})},a.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[F.findDOMNode(this),r],a=o[0],s=o[1],i=this.getTimeouts(),l=r?i.appear:i.enter;!e&&!n||A?this.safeSetState({status:W},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:H},(function(){t.props.onEntering(a,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:W},(function(){t.props.onEntered(a,s)}))}))})))},a.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:F.findDOMNode(this);t&&!A?(this.props.onExit(r),this.safeSetState({status:U},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:K},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:K},(function(){e.props.onExited(r)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if(e===I)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,u(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(B.Provider,{value:null},"function"===typeof n?n(e,r):o.cloneElement(o.Children.only(n),r))},r}(o.Component);function q(){}V.contextType=B,V.propTypes={},V.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:q,onEntering:q,onEntered:q,onExit:q,onExiting:q,onExited:q},V.UNMOUNTED=I,V.EXITED=K,V.ENTERING=H,V.ENTERED=W,V.EXITING=U;var X=V,G=!("undefined"===typeof window||!window.document||!window.document.createElement),Y=!1,Z=!1;try{var z={get passive(){return Y=!0},get once(){return Z=Y=!0}};G&&(window.addEventListener("test",z,z),window.removeEventListener("test",z,!0))}catch(en){}var J=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!Z){var o=r.once,a=r.capture,s=n;!Z&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=s),e.addEventListener(t,s,Y?r:a)}e.addEventListener(t,n,r)};var Q=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var ee=function(e,t,n,r){return J(e,t,n,r),function(){Q(e,t,n,r)}};function te(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=ee(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function ne(e,t,n,r){null==n&&(n=function(e){var t=D(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=te(e,n,r),a=ee(e,"transitionend",t);return function(){o(),a()}}function re(e,t){const n=D(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function oe(e,t){const n=re(e,"transitionDuration"),r=re(e,"transitionDelay"),o=ne(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var ae=function(...e){return e.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}}),null)};function se(e){e.offsetHeight}var ie=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var le=function(e,t){return(0,o.useMemo)((function(){return function(e,t){var n=ie(e),r=ie(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var ce=o.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,onExited:s,addEndListener:i,children:l,childRef:c,...u},d)=>{const f=(0,o.useRef)(null),p=le(f,c),v=e=>{var t;p((t=e)&&"setState"in t?F.findDOMNode(t):null!=t?t:null)},h=e=>t=>{e&&f.current&&e(f.current,t)},m=(0,o.useCallback)(h(e),[e]),g=(0,o.useCallback)(h(t),[t]),x=(0,o.useCallback)(h(n),[n]),y=(0,o.useCallback)(h(r),[r]),E=(0,o.useCallback)(h(a),[a]),w=(0,o.useCallback)(h(s),[s]),N=(0,o.useCallback)(h(i),[i]);return(0,b.jsx)(X,{ref:d,...u,onEnter:m,onEntered:x,onEntering:g,onExit:y,onExited:w,onExiting:E,addEndListener:N,nodeRef:f,children:"function"===typeof l?(e,t)=>l(e,{...t,ref:v}):o.cloneElement(l,{ref:v})})}));const ue={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function de(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=ue[e];return n+parseInt(D(t,r[0]),10)+parseInt(D(t,r[1]),10)}const fe={[K]:"collapse",[U]:"collapsing",[H]:"collapsing",[W]:"collapse show"},pe={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:de},ve=o.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,className:i,children:l,dimension:c="height",getDimensionValue:u=de,...d},f)=>{const p="function"===typeof c?c():c,v=(0,o.useMemo)((()=>ae((e=>{e.style[p]="0"}),e)),[p,e]),h=(0,o.useMemo)((()=>ae((e=>{const t=`scroll${p[0].toUpperCase()}${p.slice(1)}`;e.style[p]=`${e[t]}px`}),t)),[p,t]),m=(0,o.useMemo)((()=>ae((e=>{e.style[p]=null}),n)),[p,n]),g=(0,o.useMemo)((()=>ae((e=>{e.style[p]=`${u(p,e)}px`,se(e)}),r)),[r,u,p]),x=(0,o.useMemo)((()=>ae((e=>{e.style[p]=null}),a)),[p,a]);return(0,b.jsx)(ce,{ref:f,addEndListener:oe,...d,"aria-expanded":d.role?d.in:null,onEnter:v,onEntering:h,onEntered:m,onExit:g,onExiting:x,childRef:l.ref,children:(e,t)=>o.cloneElement(l,{...t,className:s()(i,l.props.className,fe[e],"width"===p&&"collapse-horizontal")})})}));ve.defaultProps=pe;var he=ve;const me=o.createContext(null);me.displayName="NavbarContext";var ge=me;const be=o.forwardRef((({children:e,bsPrefix:t,...n},r)=>{t=w(t,"navbar-collapse");const a=(0,o.useContext)(ge);return(0,b.jsx)(he,{in:!(!a||!a.expanded),...n,children:(0,b.jsx)("div",{ref:r,className:t,children:e})})}));be.displayName="NavbarCollapse";var xe=be;var ye=function(e){var t=(0,o.useRef)(e);return(0,o.useEffect)((function(){t.current=e}),[e]),t};function Ee(e){var t=ye(e);return(0,o.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}const we=o.forwardRef((({bsPrefix:e,className:t,children:n,label:r,as:a="button",onClick:i,...l},c)=>{e=w(e,"navbar-toggler");const{onToggle:u,expanded:d}=(0,o.useContext)(ge)||{},f=Ee((e=>{i&&i(e),u&&u()}));return"button"===a&&(l.type="button"),(0,b.jsx)(a,{...l,ref:c,onClick:f,"aria-label":r,className:s()(t,e,!d&&"collapsed"),children:n||(0,b.jsx)("span",{className:`${e}-icon`})})}));we.displayName="NavbarToggle",we.defaultProps={label:"Toggle navigation"};var Ne=we;function je(e){void 0===e&&(e=k());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(en){return e.body}}function Ce(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function Oe(e){var t=function(e){var t=(0,o.useRef)(e);return t.current=e,t}(e);(0,o.useEffect)((function(){return function(){return t.current()}}),[])}var ke=function(e){var t=(0,o.useRef)(e);return(0,o.useEffect)((function(){t.current=e}),[e]),t};function Re(e){var t=ke(e);return(0,o.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}function Se(e){return`data-rr-ui-${e}`}const Pe=Se("modal-open");var Te=class{constructor({handleContainerOverflow:e=!0,isRTL:t=!1}={}){this.handleContainerOverflow=e,this.isRTL=t,this.modals=[]}getScrollbarWidth(){return Math.abs(window.innerWidth-document.documentElement.clientWidth)}getElement(){return document.body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(D(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Pe,""),D(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Pe),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const Le=e=>{var t;return"undefined"===typeof document?null:null==e?k().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};const De=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let $e;function _e(e){const t=e||($e||($e=new Te),$e),n=(0,o.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:()=>t.add(n.current),remove:()=>t.remove(n.current),isTopModal:()=>t.isTopModal(n.current),setDialogRef:(0,o.useCallback)((e=>{n.current.dialog=e}),[]),setBackdropRef:(0,o.useCallback)((e=>{n.current.backdrop=e}),[])})}const Me=(0,o.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:a,style:s,children:i,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,backdropTransition:p,autoFocus:v=!0,enforceFocus:h=!0,restoreFocus:m=!0,restoreFocusOptions:g,renderDialog:x,renderBackdrop:y=(e=>(0,b.jsx)("div",Object.assign({},e))),manager:E,container:w,onShow:N,onHide:j=(()=>{}),onExit:C,onExited:O,onExiting:k,onEnter:R,onEntering:S,onEntered:P}=e,T=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,De);const L=function(e,t){const[n,r]=(0,o.useState)((()=>Le(e)));if(!n){const t=Le(e);t&&r(t)}return(0,o.useEffect)((()=>{t&&n&&t(n)}),[t,n]),(0,o.useEffect)((()=>{const t=Le(e);t!==n&&r(t)}),[e,n]),n}(w),D=_e(E),$=function(){var e=(0,o.useRef)(!0),t=(0,o.useRef)((function(){return e.current}));return(0,o.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),_=function(e){var t=(0,o.useRef)(null);return(0,o.useEffect)((function(){t.current=e})),t.current}(n),[M,A]=(0,o.useState)(!n),B=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,(()=>D),[D]),G&&!_&&n&&(B.current=je()),f||n||M?n&&M&&A(!1):A(!0);const I=Re((()=>{if(D.add(),q.current=ee(document,"keydown",U),V.current=ee(document,"focus",(()=>setTimeout(H)),!0),N&&N(),v){const e=je(document);D.dialog&&e&&!Ce(D.dialog,e)&&(B.current=e,D.dialog.focus())}})),K=Re((()=>{var e;(D.remove(),null==q.current||q.current(),null==V.current||V.current(),m)&&(null==(e=B.current)||null==e.focus||e.focus(g),B.current=null)}));(0,o.useEffect)((()=>{n&&L&&I()}),[n,L,I]),(0,o.useEffect)((()=>{M&&K()}),[M,K]),Oe((()=>{K()}));const H=Re((()=>{if(!h||!$()||!D.isTopModal())return;const e=je();D.dialog&&e&&!Ce(D.dialog,e)&&D.dialog.focus()})),W=Re((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&j())})),U=Re((e=>{c&&27===e.keyCode&&D.isTopModal()&&(null==d||d(e),e.defaultPrevented||j())})),V=(0,o.useRef)(),q=(0,o.useRef)(),X=(...e)=>{A(!0),null==O||O(...e)},Y=f;if(!L||!(n||Y&&!M))return null;const Z=Object.assign({role:r,ref:D.setDialogRef,"aria-modal":"dialog"===r||void 0},T,{style:s,className:a,tabIndex:-1});let z=x?x(Z):(0,b.jsx)("div",Object.assign({},Z,{children:o.cloneElement(i,{role:"document"})}));Y&&(z=(0,b.jsx)(Y,{appear:!0,unmountOnExit:!0,in:!!n,onExit:C,onExiting:k,onExited:X,onEnter:R,onEntering:S,onEntered:P,children:z}));let J=null;if(l){const e=p;J=y({ref:D.setBackdropRef,onClick:W}),e&&(J=(0,b.jsx)(e,{appear:!0,in:!!n,children:J}))}return(0,b.jsx)(b.Fragment,{children:F.createPortal((0,b.jsxs)(b.Fragment,{children:[J,z]}),L)})}));Me.displayName="Modal";var Fe=Object.assign(Me,{Manager:Te});const Ae={[H]:"show",[W]:"show"},Be=o.forwardRef((({className:e,children:t,transitionClasses:n={},...r},a)=>{const i=(0,o.useCallback)(((e,t)=>{se(e),null==r.onEnter||r.onEnter(e,t)}),[r]);return(0,b.jsx)(ce,{ref:a,addEndListener:oe,...r,onEnter:i,childRef:t.ref,children:(r,a)=>o.cloneElement(t,{...a,className:s()("fade",e,t.props.className,Ae[r],n[r])})})}));Be.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Be.displayName="Fade";var Ie=Be,Ke=j("offcanvas-body");const He={[H]:"show",[W]:"show"},We=o.forwardRef((({bsPrefix:e,className:t,children:n,...r},a)=>(e=w(e,"offcanvas"),(0,b.jsx)(ce,{ref:a,addEndListener:oe,...r,childRef:n.ref,children:(r,a)=>o.cloneElement(n,{...a,className:s()(t,n.props.className,(r===H||r===U)&&`${e}-toggling`,He[r])})}))));We.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},We.displayName="OffcanvasToggling";var Ue=We;var Ve=o.createContext({onHide(){}});const qe={"aria-label":M().string,onClick:M().func,variant:M().oneOf(["white"])},Xe=o.forwardRef((({className:e,variant:t,...n},r)=>(0,b.jsx)("button",{ref:r,type:"button",className:s()("btn-close",t&&`btn-close-${t}`,e),...n})));Xe.displayName="CloseButton",Xe.propTypes=qe,Xe.defaultProps={"aria-label":"Close"};var Ge=Xe;const Ye=o.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:a,...s},i)=>{const l=(0,o.useContext)(Ve),c=Ee((()=>{null==l||l.onHide(),null==r||r()}));return(0,b.jsxs)("div",{ref:i,...s,children:[a,n&&(0,b.jsx)(Ge,{"aria-label":e,variant:t,onClick:c})]})}));Ye.defaultProps={closeLabel:"Close",closeButton:!1};var Ze=Ye;const ze=o.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=w(e,"offcanvas-header"),(0,b.jsx)(Ze,{ref:r,...n,className:s()(t,e)}))));ze.displayName="OffcanvasHeader",ze.defaultProps={closeLabel:"Close",closeButton:!1};var Je=ze;var Qe,et=j("offcanvas-title",{Component:(Qe="h5",o.forwardRef(((e,t)=>(0,b.jsx)("div",{...e,ref:t,className:s()(e.className,Qe)}))))});var tt=Function.prototype.bind.call(Function.prototype.call,[].slice);function nt(e,t){return tt(e.querySelectorAll(t))}function rt(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const ot=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",at=".sticky-top",st=".navbar-toggler";class it extends Te{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,D(t,{[e]:`${parseFloat(D(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],D(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";nt(t,ot).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),nt(t,at).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),nt(t,st).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=rt(e.className,t):e.setAttribute("class",rt(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";nt(t,ot).forEach((e=>this.restore(n,e))),nt(t,at).forEach((e=>this.restore(r,e))),nt(t,st).forEach((e=>this.restore(r,e)))}}let lt;var ct=it;function ut(e){return(0,b.jsx)(Ue,{...e})}function dt(e){return(0,b.jsx)(Ie,{...e})}const ft=o.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:a,show:i,backdrop:l,keyboard:c,scroll:u,onEscapeKeyDown:d,onShow:f,onHide:p,container:v,autoFocus:h,enforceFocus:m,restoreFocus:g,restoreFocusOptions:x,onEntered:y,onExit:E,onExiting:N,onEnter:j,onEntering:C,onExited:O,backdropClassName:k,manager:R,...S},P)=>{const T=(0,o.useRef)();e=w(e,"offcanvas");const{onToggle:L}=(0,o.useContext)(ge)||{},D=Ee((()=>{null==L||L(),null==p||p()})),$=(0,o.useMemo)((()=>({onHide:D})),[D]);const _=(0,o.useCallback)((t=>(0,b.jsx)("div",{...t,className:s()(`${e}-backdrop`,k)})),[k,e]);return(0,b.jsx)(Ve.Provider,{value:$,children:(0,b.jsx)(Fe,{show:i,ref:P,backdrop:l,container:v,keyboard:c,autoFocus:h,enforceFocus:m&&!u,restoreFocus:g,restoreFocusOptions:x,onEscapeKeyDown:d,onShow:f,onHide:D,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==j||j(e,...t)},onEntering:C,onEntered:y,onExit:E,onExiting:N,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==O||O(...t)},manager:R||(u?(T.current||(T.current=new ct({handleContainerOverflow:!1})),T.current):function(e){return lt||(lt=new it(e)),lt}()),transition:ut,backdropTransition:dt,renderBackdrop:_,renderDialog:o=>(0,b.jsx)("div",{role:"dialog",...o,...S,className:s()(t,e,`${e}-${a}`),"aria-labelledby":r,children:n})})})}));ft.displayName="Offcanvas",ft.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var pt=Object.assign(ft,{Body:Ke,Header:Je,Title:et});const vt=o.forwardRef(((e,t)=>{const n=(0,o.useContext)(ge);return(0,b.jsx)(pt,{ref:t,show:!(null==n||!n.expanded),...e})}));vt.displayName="NavbarOffcanvas";var ht=vt;const mt=j("navbar-text",{Component:"span"}),gt=o.forwardRef(((e,t)=>{const{bsPrefix:n,expand:r,variant:a,bg:i,fixed:c,sticky:u,className:d,as:f="nav",expanded:v,onToggle:h,onSelect:m,collapseOnSelect:g,...x}=p(e,{expanded:"onToggle"}),y=w(n,"navbar"),E=(0,o.useCallback)(((...e)=>{null==m||m(...e),g&&v&&(null==h||h(!1))}),[m,g,v,h]);void 0===x.role&&"nav"!==f&&(x.role="navigation");let N=`${y}-expand`;"string"===typeof r&&(N=`${N}-${r}`);const j=(0,o.useMemo)((()=>({onToggle:()=>null==h?void 0:h(!v),bsPrefix:y,expanded:!!v})),[y,v,h]);return(0,b.jsx)(ge.Provider,{value:j,children:(0,b.jsx)(l.Provider,{value:E,children:(0,b.jsx)(f,{ref:t,...x,className:s()(d,y,r&&N,a&&`${y}-${a}`,i&&`bg-${i}`,u&&`sticky-${u}`,c&&`fixed-${c}`)})})})}));gt.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},gt.displayName="Navbar";var bt=Object.assign(gt,{Brand:O,Collapse:xe,Offcanvas:ht,Text:mt,Toggle:Ne});n(4391);var xt=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var yt=function(e,t){return(0,o.useMemo)((function(){return function(e,t){var n=xt(e),r=xt(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};const Et=o.createContext(null);Et.displayName="NavContext";var wt=Et;var Nt=o.createContext(null);const jt=["as","disabled"];function Ct({tagName:e,disabled:t,href:n,target:r,rel:o,onClick:a,tabIndex:s=0,type:i}){e||(e=null!=n||null!=r||null!=o?"a":"button");const l={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},l];const c=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==a||a(r)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:s,href:"a"===e&&t?void 0:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},l]}const Ot=o.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,jt);const[a,{tagName:s}]=Ct(Object.assign({tagName:n,disabled:r},o));return(0,b.jsx)(s,Object.assign({},o,a,{ref:t}))}));Ot.displayName="Button";var kt=Ot;const Rt=["as","active","eventKey"];function St({key:e,onClick:t,active:n,id:r,role:a,disabled:s}){const i=(0,o.useContext)(l),c=(0,o.useContext)(wt);let u=n;const d={role:a};if(c){a||"tablist"!==c.role||(d.role="tab");const t=c.getControllerId(null!=e?e:null),o=c.getControlledId(null!=e?e:null);d[Se("event-key")]=e,d.id=t||r,d["aria-controls"]=o,u=null==n&&null!=e?c.activeKey===e:n}return"tab"===d.role&&(s&&(d.tabIndex=-1,d["aria-disabled"]=!0),u?d["aria-selected"]=u:d.tabIndex=-1),d.onClick=Re((n=>{s||(null==t||t(n),null!=e&&i&&!n.isPropagationStopped()&&i(e,n))})),[d,{isActive:u}]}const Pt=o.forwardRef(((e,t)=>{let{as:n=kt,active:r,eventKey:o}=e,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Rt);const[s,l]=St(Object.assign({key:i(o,a.href),active:r},a));return s[Se("active")]=l.isActive,(0,b.jsx)(n,Object.assign({},a,s,{ref:t}))}));Pt.displayName="NavItem";var Tt=Pt;const Lt=["as","onSelect","activeKey","role","onKeyDown"];const Dt=()=>{},$t=Se("event-key"),_t=o.forwardRef(((e,t)=>{let{as:n="div",onSelect:r,activeKey:a,role:s,onKeyDown:c}=e,u=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Lt);const d=(0,o.useReducer)((function(e){return!e}),!1)[1],f=(0,o.useRef)(!1),p=(0,o.useContext)(l),v=(0,o.useContext)(Nt);let h,m;v&&(s=s||"tablist",a=v.activeKey,h=v.getControlledId,m=v.getControllerId);const g=(0,o.useRef)(null),x=e=>{const t=g.current;if(!t)return null;const n=nt(t,`[${$t}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r)return null;const o=n.indexOf(r);if(-1===o)return null;let a=o+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},y=(e,t)=>{null!=e&&(null==r||r(e,t),null==p||p(e,t))};(0,o.useEffect)((()=>{if(g.current&&f.current){const e=g.current.querySelector(`[${$t}][aria-selected=true]`);null==e||e.focus()}f.current=!1}));const E=yt(t,g);return(0,b.jsx)(l.Provider,{value:y,children:(0,b.jsx)(wt.Provider,{value:{role:s,activeKey:i(a),getControlledId:h||Dt,getControllerId:m||Dt},children:(0,b.jsx)(n,Object.assign({},u,{onKeyDown:e=>{if(null==c||c(e),!v)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=x(-1);break;case"ArrowRight":case"ArrowDown":t=x(1);break;default:return}var n;t&&(e.preventDefault(),y(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),f.current=!0,d())},ref:E,role:s}))})})}));_t.displayName="Nav";var Mt=Object.assign(_t,{Item:Tt});const Ft=o.createContext(null);Ft.displayName="CardHeaderContext";var At=Ft,Bt=j("nav-item");var It="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!==typeof document||It?o.useLayoutEffect:o.useEffect,new WeakMap;const Kt=["onKeyDown"];const Ht=o.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Kt);const[o]=Ct(Object.assign({tagName:"a"},r)),a=Re((e=>{o.onKeyDown(e),null==n||n(e)}));return((s=r.href)&&"#"!==s.trim()||r.role)&&"button"!==r.role?(0,b.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,b.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:a}));var s}));Ht.displayName="Anchor";var Wt=Ht;const Ut=o.forwardRef((({bsPrefix:e,className:t,as:n=Wt,active:r,eventKey:o,...a},l)=>{e=w(e,"nav-link");const[c,u]=St({key:i(o,a.href),active:r,...a});return(0,b.jsx)(n,{...a,...c,ref:l,className:s()(t,e,a.disabled&&"disabled",u.isActive&&"active")})}));Ut.displayName="NavLink",Ut.defaultProps={disabled:!1};var Vt=Ut;const qt=o.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:a,fill:i,justify:l,navbar:c,navbarScroll:u,className:d,activeKey:f,...v}=p(e,{activeKey:"onSelect"}),h=w(r,"nav");let m,g,x=!1;const y=(0,o.useContext)(ge),E=(0,o.useContext)(At);return y?(m=y.bsPrefix,x=null==c||c):E&&({cardHeaderBsPrefix:g}=E),(0,b.jsx)(Mt,{as:n,ref:t,activeKey:f,className:s()(d,{[h]:!x,[`${m}-nav`]:x,[`${m}-nav-scroll`]:x&&u,[`${g}-${a}`]:!!g,[`${h}-${a}`]:!!a,[`${h}-fill`]:i,[`${h}-justified`]:l}),...v})}));qt.displayName="Nav",qt.defaultProps={justify:!1,fill:!1};var Xt=Object.assign(qt,{Item:Bt,Link:Vt});const Gt=o.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...o},a)=>{const i=w(e,"container"),l="string"===typeof t?`-${t}`:"-fluid";return(0,b.jsx)(n,{ref:a,...o,className:s()(r,t?`${i}${l}`:i)})}));Gt.displayName="Container",Gt.defaultProps={fluid:!1};var Yt=Gt,Zt=function(){return(0,b.jsx)(bt,{bg:"dark-grey",expand:!1,children:(0,b.jsxs)(Yt,{fluid:!0,children:[(0,b.jsx)(bt.Brand,{href:"/",children:(0,b.jsx)("img",{width:"50px",height:"50px",src:"/icons/code-square.svg",alt:""})}),(0,b.jsx)(bt.Toggle,{"aria-controls":"offcanvasNavbar"}),(0,b.jsxs)(bt.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[(0,b.jsx)(pt.Header,{closeButton:!0,children:(0,b.jsx)(pt.Title,{id:"offcanvasNavbarLabel",children:"Navigation"})}),(0,b.jsx)(pt.Body,{children:(0,b.jsxs)(Xt,{className:"justify-content-end flex-grow-1 pe-3",children:[(0,b.jsx)(Xt.Link,{href:"#action1",children:"Home"}),(0,b.jsx)(Xt.Link,{href:"#action2",children:"Link"})]})})]})]})})};function zt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?zt(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Qt=function(e){var t=e.Component,n=e.pageProps;return(0,b.jsxs)(o.Fragment,{children:[(0,b.jsx)(Zt,{}),(0,b.jsx)(t,Jt({},n))]})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8119)}])},2243:function(){},5210:function(){},4391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}})),o}return(0,a.default)(r)};var r,o=n(2613),a=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},2613:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,a,s){var i=o||"<<anonymous>>",l=s||r;if(null==n[r])return t?new Error("Required "+a+" `"+l+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,r,i,a,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},4036:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);