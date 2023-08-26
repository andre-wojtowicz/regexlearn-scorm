"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{5644:function(e,t,n){n.d(t,{J:function(){return ey}});var r,o,l,u,a,i,s,c,d,f,p,v,m,b=n(7294);function h(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,h),r}var E=((r=E||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),g=((o=g||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function y({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:u}){let a=S(t,e);if(l)return P(a,n,r,u);let i=null!=o?o:0;if(2&i){let{static:e=!1,...t}=a;if(e)return P(t,n,r,u)}if(1&i){let{unmount:e=!0,...t}=a;return h(e?0:1,{0:()=>null,1:()=>P({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return P(a,n,r,u)}function P(e,t={},n,r){var o;let{as:l=n,children:u,refName:a="ref",...i}=O(e,["unmount","static"]),s=void 0!==e.ref?{[a]:e.ref}:{},c="function"==typeof u?u(t):u;i.className&&"function"==typeof i.className&&(i.className=i.className(t));let d={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(l===b.Fragment&&Object.keys(I(i)).length>0){if(!(0,b.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=function(...e){return e.filter(Boolean).join(" ")}(null==(o=c.props)?void 0:o.className,i.className);return(0,b.cloneElement)(c,Object.assign({},S(c.props,I(O(i,["ref"]))),d,s,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,s.ref),e?{className:e}:{}))}return(0,b.createElement)(l,Object.assign({},O(i,["ref"]),l!==b.Fragment&&s,l!==b.Fragment&&d),c)}function S(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function w(e){var t;return Object.assign((0,b.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function I(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function O(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var F=Object.defineProperty,N=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t,n)=>(N(e,"symbol"!=typeof t?t+"":t,n),n);let C=new class{constructor(){x(this,"current",this.detect()),x(this,"handoffState","pending"),x(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},T=(e,t)=>{C.isServer?(0,b.useEffect)(e,t):(0,b.useLayoutEffect)(e,t)};function k(e){let t=(0,b.useRef)(e);return T(()=>{t.current=e},[e]),t}let A=function(e){let t=k(e);return b.useCallback((...e)=>t.current(...e),[t])},L=Symbol();function D(...e){let t=(0,b.useRef)(e);(0,b.useEffect)(()=>{t.current=e},[e]);let n=A(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[L]))?void 0:n}let M=null!=(m=b.useId)?m:function(){let e=function(){let[e,t]=(0,b.useState)(C.isHandoffComplete);return e&&!1===C.isHandoffComplete&&t(!1),(0,b.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,b.useEffect)(()=>C.handoff(),[]),e}(),[t,n]=b.useState(e?()=>C.nextId():null);return T(()=>{null===t&&n(C.nextId())},[t]),null!=t?""+t:void 0};var R=((l=R||{}).Space=" ",l.Enter="Enter",l.Escape="Escape",l.Backspace="Backspace",l.Delete="Delete",l.ArrowLeft="ArrowLeft",l.ArrowUp="ArrowUp",l.ArrowRight="ArrowRight",l.ArrowDown="ArrowDown",l.Home="Home",l.End="End",l.PageUp="PageUp",l.PageDown="PageDown",l.Tab="Tab",l);function j(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function B(e){return C.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let H=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var $=((u=$||{})[u.First=1]="First",u[u.Previous=2]="Previous",u[u.Next=4]="Next",u[u.Last=8]="Last",u[u.WrapAround=16]="WrapAround",u[u.NoScroll=32]="NoScroll",u),_=((a=_||{})[a.Error=0]="Error",a[a.Overflow=1]="Overflow",a[a.Success=2]="Success",a[a.Underflow=3]="Underflow",a),G=((i=G||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i);function U(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(H)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var W=((s=W||{})[s.Strict=0]="Strict",s[s.Loose=1]="Loose",s);function K(e,t=0){var n;return e!==(null==(n=B(e))?void 0:n.body)&&h(t,{0:()=>e.matches(H),1(){let t=e;for(;null!==t;){if(t.matches(H))return!0;t=t.parentElement}return!1}})}function q(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var l,u,a;let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:U(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:i.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,v=s.length,m;do{if(p>=v||p+v<=0)return 0;let e=d+p;if(16&t)e=(e+v)%v;else{if(e<0)return 3;if(e>=v)return 1}null==(m=s[e])||m.focus(f),p+=c}while(m!==i.activeElement);return 6&t&&null!=(a=null==(u=null==(l=m)?void 0:l.matches)?void 0:u.call(l,"textarea,input"))&&a&&m.select(),m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),2}let V=(0,b.createContext)(null);V.displayName="OpenClosedContext";var X=((c=X||{})[c.Open=1]="Open",c[c.Closed=2]="Closed",c[c.Closing=4]="Closing",c[c.Opening=8]="Opening",c);function Y(){return(0,b.useContext)(V)}function J({value:e,children:t}){return b.createElement(V.Provider,{value:e},t)}function z(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function Q(e,t,n){let r=k(t);(0,b.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}function Z(...e){return(0,b.useMemo)(()=>B(...e),[...e])}var ee=((d=ee||{})[d.None=1]="None",d[d.Focusable=2]="Focusable",d[d.Hidden=4]="Hidden",d);let et=w(function(e,t){let{features:n=1,...r}=e;return y({ourProps:{ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});var en=((f=en||{})[f.Forwards=0]="Forwards",f[f.Backwards=1]="Backwards",f);function er(){var e;let t,n=(0,b.useRef)(0);return e="keydown",t=k(e=>{"Tab"===e.key&&(n.current=e.shiftKey?1:0)}),(0,b.useEffect)(()=>{function n(e){t.current(e)}return window.addEventListener(e,n,!0),()=>window.removeEventListener(e,n,!0)},[e,!0]),n}var eo=((p=eo||{})[p.Open=0]="Open",p[p.Closed=1]="Closed",p),el=((v=el||{})[v.TogglePopover=0]="TogglePopover",v[v.ClosePopover=1]="ClosePopover",v[v.SetButton=2]="SetButton",v[v.SetButtonId=3]="SetButtonId",v[v.SetPanel=4]="SetPanel",v[v.SetPanelId=5]="SetPanelId",v);let eu={0:e=>({...e,popoverState:h(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},ea=(0,b.createContext)(null);function ei(e){let t=(0,b.useContext)(ea);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ei),t}return t}ea.displayName="PopoverContext";let es=(0,b.createContext)(null);function ec(e){let t=(0,b.useContext)(es);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ec),t}return t}es.displayName="PopoverAPIContext";let ed=(0,b.createContext)(null);function ef(){return(0,b.useContext)(ed)}ed.displayName="PopoverGroupContext";let ep=(0,b.createContext)(null);function ev(e,t){return h(t.type,eu,e,t)}ep.displayName="PopoverPanelContext";let em=w(function(e,t){var n,r,o;let l;let u=(0,b.useRef)(null),a=D(t,function(e,t=!0){return Object.assign(e,{[L]:t})}(e=>{u.current=e})),i=(0,b.useRef)([]),s=(0,b.useReducer)(ev,{popoverState:1,buttons:i,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,b.createRef)(),afterPanelSentinel:(0,b.createRef)()}),[{popoverState:c,button:d,buttonId:f,panel:p,panelId:v,beforePanelSentinel:m,afterPanelSentinel:E},g]=s,P=Z(null!=(n=u.current)?n:d),S=(0,b.useMemo)(()=>{if(!d||!p)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(d))^Number(null==e?void 0:e.contains(p)))return!0;let e=U(),t=e.indexOf(d),n=(t+e.length-1)%e.length,r=(t+1)%e.length,o=e[n],l=e[r];return!p.contains(o)&&!p.contains(l)},[d,p]),w=k(f),I=k(v),O=(0,b.useMemo)(()=>({buttonId:w,panelId:I,close:()=>g({type:1})}),[w,I,g]),F=ef(),N=null==F?void 0:F.registerPopover,x=A(()=>{var e;return null!=(e=null==F?void 0:F.isFocusWithinPopoverGroup())?e:(null==P?void 0:P.activeElement)&&((null==d?void 0:d.contains(P.activeElement))||(null==p?void 0:p.contains(P.activeElement)))});(0,b.useEffect)(()=>null==N?void 0:N(O),[N,O]),r=null==P?void 0:P.defaultView,o="focus",l=k(e=>{var t,n,r,o;0===c&&(x()||!d||!p||e.target!==window&&(null!=(n=null==(t=m.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=E.current)?void 0:r.contains)&&o.call(r,e.target)||g({type:1})))}),(0,b.useEffect)(()=>{function e(e){l.current(e)}return(r=null!=r?r:window).addEventListener(o,e,!0),()=>r.removeEventListener(o,e,!0)},[r,o,!0]),function(e,t,n=!0){let r=(0,b.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let l=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),u=o(n);if(null!==u&&u.getRootNode().contains(u)){for(let e of l){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(u)||n.composed&&n.composedPath().includes(t))return}return K(u,W.Loose)||-1===u.tabIndex||n.preventDefault(),t(n,u)}}(0,b.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,b.useRef)(null);Q("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),Q("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),Q("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}([d,p],(e,t)=>{g({type:1}),K(t,W.Loose)||(e.preventDefault(),null==d||d.focus())},0===c);let C=A(e=>{g({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:d:d;null==t||t.focus()}),T=(0,b.useMemo)(()=>({close:C,isPortalled:S}),[C,S]),M=(0,b.useMemo)(()=>({open:0===c,close:C}),[c,C]);return b.createElement(ea.Provider,{value:s},b.createElement(es.Provider,{value:T},b.createElement(J,{value:h(c,{0:X.Open,1:X.Closed})},y({ourProps:{ref:a},theirProps:e,slot:M,defaultTag:"div",name:"Popover"}))))}),eb=w(function(e,t){let n=M(),{id:r=`headlessui-popover-button-${n}`,...o}=e,[l,u]=ei("Popover.Button"),{isPortalled:a}=ec("Popover.Button"),i=(0,b.useRef)(null),s=`headlessui-focus-sentinel-${M()}`,c=ef(),d=null==c?void 0:c.closeOthers,f=null!==(0,b.useContext)(ep);(0,b.useEffect)(()=>{if(!f)return u({type:3,buttonId:r}),()=>{u({type:3,buttonId:null})}},[f,r,u]);let[p]=(0,b.useState)(()=>Symbol()),v=D(i,t,f?null:e=>{if(e)l.buttons.current.push(p);else{let e=l.buttons.current.indexOf(p);-1!==e&&l.buttons.current.splice(e,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&u({type:2,button:e})}),m=D(i,t),E=Z(i),g=A(e=>{var t,n,r;if(f){if(1===l.popoverState)return;switch(e.key){case R.Space:case R.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),u({type:1}),null==(r=l.button)||r.focus()}}else switch(e.key){case R.Space:case R.Enter:e.preventDefault(),e.stopPropagation(),1===l.popoverState&&(null==d||d(l.buttonId)),u({type:0});break;case R.Escape:if(0!==l.popoverState)return null==d?void 0:d(l.buttonId);if(!i.current||(null==E?void 0:E.activeElement)&&!i.current.contains(E.activeElement))return;e.preventDefault(),e.stopPropagation(),u({type:1})}}),P=A(e=>{f||e.key===R.Space&&e.preventDefault()}),S=A(t=>{var n,r;j(t.currentTarget)||e.disabled||(f?(u({type:1}),null==(n=l.button)||n.focus()):(t.preventDefault(),t.stopPropagation(),1===l.popoverState&&(null==d||d(l.buttonId)),u({type:0}),null==(r=l.button)||r.focus()))}),w=A(e=>{e.preventDefault(),e.stopPropagation()}),I=0===l.popoverState,O=(0,b.useMemo)(()=>({open:I}),[I]),F=function(e,t){let[n,r]=(0,b.useState)(()=>z(e));return T(()=>{r(z(e))},[e.type,e.as]),T(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,i),N=f?{ref:m,type:F,onKeyDown:g,onClick:S}:{ref:v,id:l.buttonId,type:F,"aria-expanded":e.disabled?void 0:0===l.popoverState,"aria-controls":l.panel?l.panelId:void 0,onKeyDown:g,onKeyUp:P,onClick:S,onMouseDown:w},x=er(),C=A(()=>{let e=l.panel;e&&h(x.current,{[en.Forwards]:()=>q(e,$.First),[en.Backwards]:()=>q(e,$.Last)})===_.Error&&q(U().filter(e=>"true"!==e.dataset.headlessuiFocusGuard),h(x.current,{[en.Forwards]:$.Next,[en.Backwards]:$.Previous}),{relativeTo:l.button})});return b.createElement(b.Fragment,null,y({ourProps:N,theirProps:o,slot:O,defaultTag:"button",name:"Popover.Button"}),I&&!f&&a&&b.createElement(et,{id:s,features:ee.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:C}))}),eh=E.RenderStrategy|E.Static,eE=w(function(e,t){let n=M(),{id:r=`headlessui-popover-overlay-${n}`,...o}=e,[{popoverState:l},u]=ei("Popover.Overlay"),a=D(t),i=Y(),s=null!==i?(i&X.Open)===X.Open:0===l;return y({ourProps:{ref:a,id:r,"aria-hidden":!0,onClick:A(e=>{if(j(e.currentTarget))return e.preventDefault();u({type:1})})},theirProps:o,slot:(0,b.useMemo)(()=>({open:0===l}),[l]),defaultTag:"div",features:eh,visible:s,name:"Popover.Overlay"})}),eg=E.RenderStrategy|E.Static,ey=Object.assign(em,{Button:eb,Overlay:eE,Panel:w(function(e,t){let n=M(),{id:r=`headlessui-popover-panel-${n}`,focus:o=!1,...l}=e,[u,a]=ei("Popover.Panel"),{close:i,isPortalled:s}=ec("Popover.Panel"),c=`headlessui-focus-sentinel-before-${M()}`,d=`headlessui-focus-sentinel-after-${M()}`,f=(0,b.useRef)(null),p=D(f,t,e=>{a({type:4,panel:e})}),v=Z(f);T(()=>(a({type:5,panelId:r}),()=>{a({type:5,panelId:null})}),[r,a]);let m=Y(),E=null!==m?(m&X.Open)===X.Open:0===u.popoverState,g=A(e=>{var t;if(e.key===R.Escape){if(0!==u.popoverState||!f.current||(null==v?void 0:v.activeElement)&&!f.current.contains(v.activeElement))return;e.preventDefault(),e.stopPropagation(),a({type:1}),null==(t=u.button)||t.focus()}});(0,b.useEffect)(()=>{var t;e.static||1===u.popoverState&&(null==(t=e.unmount)||t)&&a({type:4,panel:null})},[u.popoverState,e.unmount,e.static,a]),(0,b.useEffect)(()=>{if(!o||0!==u.popoverState||!f.current)return;let e=null==v?void 0:v.activeElement;f.current.contains(e)||q(f.current,$.First)},[o,f,u.popoverState]);let P=(0,b.useMemo)(()=>({open:0===u.popoverState,close:i}),[u,i]),S={ref:p,id:r,onKeyDown:g,onBlur:o&&0===u.popoverState?e=>{var t,n,r,o,l;let i=e.relatedTarget;!i||!f.current||null!=(t=f.current)&&t.contains(i)||(a({type:1}),((null==(r=null==(n=u.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,i))||(null==(l=null==(o=u.afterPanelSentinel.current)?void 0:o.contains)?void 0:l.call(o,i)))&&i.focus({preventScroll:!0}))}:void 0,tabIndex:-1},w=er(),I=A(()=>{let e=f.current;e&&h(w.current,{[en.Forwards]:()=>{var t;q(e,$.First)===_.Error&&(null==(t=u.afterPanelSentinel.current)||t.focus())},[en.Backwards]:()=>{var e;null==(e=u.button)||e.focus({preventScroll:!0})}})}),O=A(()=>{let e=f.current;e&&h(w.current,{[en.Forwards]:()=>{var e;if(!u.button)return;let t=U(),n=t.indexOf(u.button),r=t.slice(0,n+1),o=[...t.slice(n+1),...r];for(let t of o.slice())if("true"===t.dataset.headlessuiFocusGuard||(null==(e=u.panel)?void 0:e.contains(t))){let e=o.indexOf(t);-1!==e&&o.splice(e,1)}q(o,$.First,{sorted:!1})},[en.Backwards]:()=>{var t;q(e,$.Previous)===_.Error&&(null==(t=u.button)||t.focus())}})});return b.createElement(ep.Provider,{value:r},E&&s&&b.createElement(et,{id:c,ref:u.beforePanelSentinel,features:ee.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:I}),y({ourProps:S,theirProps:l,slot:P,defaultTag:"div",features:eg,visible:E,name:"Popover.Panel"}),E&&s&&b.createElement(et,{id:d,ref:u.afterPanelSentinel,features:ee.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:O}))}),Group:w(function(e,t){let n=(0,b.useRef)(null),r=D(n,t),[o,l]=(0,b.useState)([]),u=A(e=>{l(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),a=A(e=>(l(t=>[...t,e]),()=>u(e))),i=A(()=>{var e;let t=B(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId.current))?void 0:o.contains(r))})}),s=A(e=>{for(let t of o)t.buttonId.current!==e&&t.close()}),c=(0,b.useMemo)(()=>({registerPopover:a,unregisterPopover:u,isFocusWithinPopoverGroup:i,closeOthers:s}),[a,u,i,s]),d=(0,b.useMemo)(()=>({}),[]);return b.createElement(ed.Provider,{value:c},y({ourProps:{ref:r},theirProps:e,slot:d,defaultTag:"div",name:"Popover.Group"}))})})}}]);