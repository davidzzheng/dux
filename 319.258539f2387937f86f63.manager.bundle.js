(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[319],{1319:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorControl:()=>ColorControl,default:()=>Color});__webpack_require__(47941),__webpack_require__(82526),__webpack_require__(41817),__webpack_require__(41539),__webpack_require__(32165),__webpack_require__(78783),__webpack_require__(66992),__webpack_require__(33948),__webpack_require__(91038),__webpack_require__(92222),__webpack_require__(19601),__webpack_require__(26833),__webpack_require__(4723),__webpack_require__(74916),__webpack_require__(21249),__webpack_require__(9653),__webpack_require__(15306),__webpack_require__(23157),__webpack_require__(23123),__webpack_require__(47042),__webpack_require__(57327),__webpack_require__(68309);var react=__webpack_require__(67294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r.indexOf(t=a[o])>=0||(n[t]=e[t]);return n}function s(e){var t=(0,react.useRef)(e),o=(0,react.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,o.current}var i=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},f=function(e){return"touches"in e},v=function(e,r){var t=e.getBoundingClientRect(),o=f(r)?r.touches[0]:r;return{left:i((o.pageX-(t.left+window.pageXOffset))/t.width),top:i((o.pageY-(t.top+window.pageYOffset))/t.height)}},d=function(e){!f(e)&&e.preventDefault()},h=react.memo((function(n){var a=n.onMove,l=n.onKey,i=c(n,["onMove","onKey"]),h=(0,react.useRef)(null),m=s(a),g=s(l),p=(0,react.useRef)(!1),b=(0,react.useMemo)((function(){var e=function(e){d(e),(f(e)?e.touches.length>0:e.buttons>0)&&h.current?m(v(h.current,e)):t(!1)},r=function(){return t(!1)};function t(t){var o=p.current,n=t?self.addEventListener:self.removeEventListener;n(o?"touchmove":"mousemove",e),n(o?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,o=h.current;o&&(d(r),!function(e,r){return r&&!f(e)}(r,p.current)&&o&&(p.current=f(r),o.focus(),m(v(o,r)),t(!0)))},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),g({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[g,m]),_=b[0],x=b[1],C=b[2];return(0,react.useEffect)((function(){return C}),[C]),react.createElement("div",u({},i,{onTouchStart:_,onMouseDown:_,className:"react-colorful__interactive",ref:h,onKeyDown:x,tabIndex:0,role:"slider"}))})),m=function(e){return e.filter(Boolean).join(" ")},g=function(r){var t=r.color,o=r.left,n=r.top,a=void 0===n?.5:n,l=m(["react-colorful__pointer",r.className]);return react.createElement("div",{className:l,style:{top:100*a+"%",left:100*o+"%"}},react.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},p=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},b={grad:.9,turn:360,rad:360/(2*Math.PI)},_=function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},x=function(e,r){return void 0===r&&(r="deg"),Number(e)*(b[r]||1)},C=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?H({h:x(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},H=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},M=function(e){var r=e.s,t=e.v,o=e.a,n=(200-r)*t/100;return{h:p(e.h),s:p(n>0&&n<200?r*t/100/(n<=100?n:200-n)*100:0),l:p(n/2),a:p(o,2)}},N=function(e){var r=M(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},w=function(e){var r=M(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},y=function(e){var r=e.h,t=e.s,o=e.v,n=e.a;r=r/360*6,t/=100,o/=100;var a=Math.floor(r),l=o*(1-t),u=o*(1-(r-a)*t),c=o*(1-(1-r+a)*t),s=a%6;return{r:p(255*[o,u,l,l,c,o][s]),g:p(255*[c,o,o,u,l,l][s]),b:p(255*[l,l,c,o,o,u][s]),a:p(n,2)}},O=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?z({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},j=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},z=function(e){var r=e.r,t=e.g,o=e.b,n=e.a,a=Math.max(r,t,o),l=a-Math.min(r,t,o),u=l?a===r?(t-o)/l:a===t?2+(o-r)/l:4+(r-t)/l:0;return{h:p(60*(u<0?u+6:u)),s:p(a?l/a*100:0),v:p(a/255*100),a:n}},K=react.memo((function(r){var t=r.hue,o=r.onChange,n=m(["react-colorful__hue",r.className]);return react.createElement("div",{className:n},react.createElement(h,{onMove:function(e){o({h:360*e.left})},onKey:function(e){o({h:i(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":p(t)},react.createElement(g,{className:"react-colorful__hue-pointer",left:t/360,color:N({h:t,s:100,v:100,a:1})})))})),L=react.memo((function(r){var t=r.hsva,o=r.onChange,n={backgroundColor:N({h:t.h,s:100,v:100,a:1})};return react.createElement("div",{className:"react-colorful__saturation",style:n},react.createElement(h,{onMove:function(e){o({s:100*e.left,v:100-100*e.top})},onKey:function(e){o({s:i(t.s+100*e.left,0,100),v:i(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+p(t.s)+"%, Brightness "+p(t.v)+"%"},react.createElement(g,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:N(t)})))})),A=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},D=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function S(e,t,l){var u=s(l),c=(0,react.useState)((function(){return e.toHsva(t)})),i=c[0],f=c[1],v=(0,react.useRef)({color:t,hsva:i});(0,react.useEffect)((function(){if(!e.equal(t,v.current.color)){var r=e.toHsva(t);v.current={hsva:r,color:t},f(r)}}),[t,e]),(0,react.useEffect)((function(){var r;A(i,v.current.hsva)||e.equal(r=e.fromHsva(i),v.current.color)||(v.current={hsva:i,color:r},u(r))}),[i,e,u]);var d=(0,react.useCallback)((function(e){f((function(r){return Object.assign({},r,e)}))}),[]);return[i,d]}var F,P,_ColorPicker,_fallbackColor,T="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,R=function(){T((function(){if("undefined"!=typeof document&&!P){(P=document.createElement("style")).innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';var e=F||__webpack_require__.nc;e&&P.setAttribute("nonce",e),document.head.appendChild(P)}}),[])},$=function(r){var t=r.className,o=r.colorModel,n=r.color,a=void 0===n?o.defaultColor:n,l=r.onChange,s=c(r,["className","colorModel","color","onChange"]);R();var i=S(o,a,l),f=i[0],v=i[1],d=m(["react-colorful",t]);return react.createElement("div",u({},s,{className:d}),react.createElement(L,{hsva:f,onChange:v}),react.createElement(K,{hue:f.h,onChange:v,className:"react-colorful__last-control"}))},G={defaultColor:"000",toHsva:function(e){return z(_(e))},fromHsva:function(e){return t=(r=y(e)).g,o=r.b,"#"+j(r.r)+j(t)+j(o);var r,t,o},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||A(_(e),_(r))}},Q=function(r){var t=r.className,o=r.hsva,n=r.onChange,a={backgroundImage:"linear-gradient(90deg, "+w(Object.assign({},o,{a:0}))+", "+w(Object.assign({},o,{a:1}))+")"},l=m(["react-colorful__alpha",t]);return react.createElement("div",{className:l},react.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),react.createElement(h,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:i(o.a+e.left)})},"aria-label":"Alpha","aria-valuetext":p(100*o.a)+"%"},react.createElement(g,{className:"react-colorful__alpha-pointer",left:o.a,color:w(o)})))},U=function(r){var t=r.className,o=r.colorModel,n=r.color,a=void 0===n?o.defaultColor:n,l=r.onChange,s=c(r,["className","colorModel","color","onChange"]);R();var i=S(o,a,l),f=i[0],v=i[1],d=m(["react-colorful",t]);return react.createElement("div",u({},s,{className:d}),react.createElement(L,{hsva:f,onChange:v}),react.createElement(K,{hue:f.h,onChange:v}),react.createElement(Q,{hsva:f,onChange:v,className:"react-colorful__last-control"}))},Z={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:C,fromHsva:w,equal:D},me={defaultColor:"rgba(0, 0, 0, 1)",toHsva:O,fromHsva:function(e){var r=y(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:D},color_convert=__webpack_require__(12085),color_convert_default=__webpack_require__.n(color_convert),throttle=__webpack_require__(23493),throttle_default=__webpack_require__.n(throttle),esm=__webpack_require__(65316),TooltipNote=__webpack_require__(29694),lazy_WithTooltip=__webpack_require__(5349),esm_form=__webpack_require__(20409),icon=__webpack_require__(31482),helpers=__webpack_require__(89491);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Wrapper=esm.styled.div({position:"relative",maxWidth:250}),PickerTooltip=(0,esm.styled)(lazy_WithTooltip.R)({position:"absolute",zIndex:1,top:4,left:4}),TooltipContent=esm.styled.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Note=(0,esm.styled)(TooltipNote.g)((function(_ref){return{fontFamily:_ref.theme.typography.fonts.base}})),Swatches=esm.styled.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),SwatchColor=esm.styled.div((function(_ref2){var theme=_ref2.theme;return{width:16,height:16,boxShadow:_ref2.active?"".concat(theme.appBorderColor," 0 0 0 1px inset, ").concat(theme.color.mediumdark,"50 0 0 0 4px"):"".concat(theme.appBorderColor," 0 0 0 1px inset"),borderRadius:theme.appBorderRadius}})),Swatch=function Swatch(_ref3){var value=_ref3.value,active=_ref3.active,onClick=_ref3.onClick,style=_ref3.style,props=_objectWithoutProperties(_ref3,["value","active","onClick","style"]),backgroundImage="linear-gradient(".concat(value,", ").concat(value,"), ").concat('url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',", linear-gradient(#fff, #fff)");return react.createElement(SwatchColor,_extends({},props,{active,onClick,style:Object.assign({},style,{backgroundImage})}))};Swatch.displayName="Swatch";var ColorSpace,Input=(0,esm.styled)(esm_form.l.Input)((function(_ref4){return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:_ref4.theme.typography.fonts.base}})),ToggleIcon=(0,esm.styled)(icon.P)((function(_ref5){return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:_ref5.theme.input.color}}));!function(ColorSpace){ColorSpace.RGB="rgb",ColorSpace.HSL="hsl",ColorSpace.HEX="hex"}(ColorSpace||(ColorSpace={}));var COLOR_SPACES=Object.values(ColorSpace),COLOR_REGEXP=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,RGB_REGEXP=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,HSL_REGEXP=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,HEX_REGEXP=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,SHORTHEX_REGEXP=/^\s*#?([0-9a-f]{3})\s*$/i,ColorPicker=(_defineProperty(_ColorPicker={},ColorSpace.HEX,(function(r){return react.createElement($,u({},r,{colorModel:G}))})),_defineProperty(_ColorPicker,ColorSpace.RGB,(function(r){return react.createElement(U,u({},r,{colorModel:me}))})),_defineProperty(_ColorPicker,ColorSpace.HSL,(function(r){return react.createElement(U,u({},r,{colorModel:Z}))})),_ColorPicker),fallbackColor=(_defineProperty(_fallbackColor={},ColorSpace.HEX,"transparent"),_defineProperty(_fallbackColor,ColorSpace.RGB,"rgba(0, 0, 0, 0)"),_defineProperty(_fallbackColor,ColorSpace.HSL,"hsla(0, 0%, 0%, 0)"),_fallbackColor),stringToArgs=function stringToArgs(value){var match=null==value?void 0:value.match(COLOR_REGEXP);if(!match)return[0,0,0,1];var _match=_slicedToArray(match,5),x=_match[1],y=_match[2],z=_match[3],_match$=_match[4];return[x,y,z,void 0===_match$?1:_match$].map(Number)},parseValue=function parseValue(value){var _ref12;if(value){var valid=!0;if(RGB_REGEXP.test(value)){var _ref8,_stringToArgs2=_slicedToArray(stringToArgs(value),4),r=_stringToArgs2[0],g=_stringToArgs2[1],b=_stringToArgs2[2],a=_stringToArgs2[3],_ref7=_slicedToArray(color_convert_default().rgb.hsl([r,g,b])||[0,0,0],3),h=_ref7[0],s=_ref7[1],l=_ref7[2];return _defineProperty(_ref8={valid,value,keyword:color_convert_default().rgb.keyword([r,g,b]),colorSpace:ColorSpace.RGB},ColorSpace.RGB,value),_defineProperty(_ref8,ColorSpace.HSL,"hsla(".concat(h,", ").concat(s,"%, ").concat(l,"%, ").concat(a,")")),_defineProperty(_ref8,ColorSpace.HEX,"#".concat(color_convert_default().rgb.hex([r,g,b]).toLowerCase())),_ref8}if(HSL_REGEXP.test(value)){var _ref11,_stringToArgs4=_slicedToArray(stringToArgs(value),4),_h=_stringToArgs4[0],_s2=_stringToArgs4[1],_l=_stringToArgs4[2],_a=_stringToArgs4[3],_ref10=_slicedToArray(color_convert_default().hsl.rgb([_h,_s2,_l])||[0,0,0],3),_r=_ref10[0],_g=_ref10[1],_b=_ref10[2];return _defineProperty(_ref11={valid,value,keyword:color_convert_default().hsl.keyword([_h,_s2,_l]),colorSpace:ColorSpace.HSL},ColorSpace.RGB,"rgba(".concat(_r,", ").concat(_g,", ").concat(_b,", ").concat(_a,")")),_defineProperty(_ref11,ColorSpace.HSL,value),_defineProperty(_ref11,ColorSpace.HEX,"#".concat(color_convert_default().hsl.hex([_h,_s2,_l]).toLowerCase())),_ref11}var plain=value.replace("#",""),rgb=color_convert_default().keyword.rgb(plain)||color_convert_default().hex.rgb(plain),hsl=color_convert_default().rgb.hsl(rgb),mapped=value;if(/[^#a-f0-9]/i.test(value)?mapped=plain:HEX_REGEXP.test(value)&&(mapped="#".concat(plain)),mapped.startsWith("#"))valid=HEX_REGEXP.test(mapped);else try{color_convert_default().keyword.hex(mapped)}catch(e){valid=!1}return _defineProperty(_ref12={valid,value:mapped,keyword:color_convert_default().rgb.keyword(rgb),colorSpace:ColorSpace.HEX},ColorSpace.RGB,"rgba(".concat(rgb[0],", ").concat(rgb[1],", ").concat(rgb[2],", 1)")),_defineProperty(_ref12,ColorSpace.HSL,"hsla(".concat(hsl[0],", ").concat(hsl[1],"%, ").concat(hsl[2],"%, 1)")),_defineProperty(_ref12,ColorSpace.HEX,mapped),_ref12}},useColorInput=function useColorInput(initialValue,onChange){var _useState2=_slicedToArray((0,react.useState)(initialValue||""),2),value=_useState2[0],setValue=_useState2[1],_useState4=_slicedToArray((0,react.useState)((function(){return parseValue(value)})),2),color=_useState4[0],setColor=_useState4[1],_useState6=_slicedToArray((0,react.useState)((null==color?void 0:color.colorSpace)||ColorSpace.HEX),2),colorSpace=_useState6[0],setColorSpace=_useState6[1];(0,react.useEffect)((function(){void 0===initialValue&&(setValue(""),setColor(void 0),setColorSpace(ColorSpace.HEX))}),[initialValue]);var realValue=(0,react.useMemo)((function(){return function getRealValue(value,color,colorSpace){if(!value||null==color||!color.valid)return fallbackColor[colorSpace];if(colorSpace!==ColorSpace.HEX)return(null==color?void 0:color[colorSpace])||fallbackColor[colorSpace];if(!color.hex.startsWith("#"))try{return"#".concat(color_convert_default().keyword.hex(color.hex))}catch(e){return fallbackColor.hex}var short=color.hex.match(SHORTHEX_REGEXP);if(!short)return HEX_REGEXP.test(color.hex)?color.hex:fallbackColor.hex;var _short$1$split2=_slicedToArray(short[1].split(""),3),r=_short$1$split2[0],g=_short$1$split2[1],b=_short$1$split2[2];return"#".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b)}(value,color,colorSpace).toLowerCase()}),[value,color,colorSpace]),updateValue=(0,react.useCallback)((function(update){var parsed=parseValue(update);setValue((null==parsed?void 0:parsed.value)||update||""),parsed&&(setColor(parsed),setColorSpace(parsed.colorSpace),onChange(parsed.value))}),[onChange]),cycleColorSpace=(0,react.useCallback)((function(){var next=COLOR_SPACES.indexOf(colorSpace)+1;next>=COLOR_SPACES.length&&(next=0),setColorSpace(COLOR_SPACES[next]);var update=(null==color?void 0:color[COLOR_SPACES[next]])||"";setValue(update),onChange(update)}),[color,colorSpace,onChange]);return{value,realValue,updateValue,color,colorSpace,cycleColorSpace}},id=function id(value){return value.replace(/\s*/,"").toLowerCase()},ColorControl=function ColorControl(_ref13){var name=_ref13.name,initialValue=_ref13.value,onChange=_ref13.onChange,onFocus=_ref13.onFocus,onBlur=_ref13.onBlur,presetColors=_ref13.presetColors,startOpen=_ref13.startOpen,_useColorInput=useColorInput(initialValue,throttle_default()(onChange,200)),value=_useColorInput.value,realValue=_useColorInput.realValue,updateValue=_useColorInput.updateValue,color=_useColorInput.color,colorSpace=_useColorInput.colorSpace,cycleColorSpace=_useColorInput.cycleColorSpace,_usePresets=function usePresets(presetColors,currentColor,colorSpace){var _useState8=_slicedToArray((0,react.useState)(null!=currentColor&&currentColor.valid?[currentColor]:[]),2),selectedColors=_useState8[0],setSelectedColors=_useState8[1];(0,react.useEffect)((function(){void 0===currentColor&&setSelectedColors([])}),[currentColor]);var presets=(0,react.useMemo)((function(){return(presetColors||[]).map((function(preset){return"string"==typeof preset?parseValue(preset):preset.title?Object.assign({},parseValue(preset.color),{keyword:preset.title}):parseValue(preset.color)})).concat(selectedColors).filter(Boolean).slice(-27)}),[presetColors,selectedColors]),addPreset=(0,react.useCallback)((function(color){null!=color&&color.valid&&(presets.some((function(preset){return id(preset[colorSpace])===id(color[colorSpace])}))||setSelectedColors((function(arr){return arr.concat(color)})))}),[colorSpace,presets]);return{presets,addPreset}}(presetColors,color,colorSpace),presets=_usePresets.presets,addPreset=_usePresets.addPreset,Picker=ColorPicker[colorSpace];return react.createElement(Wrapper,null,react.createElement(PickerTooltip,{trigger:"click",startOpen,closeOnClick:!0,onVisibilityChange:function onVisibilityChange(){return addPreset(color)},tooltip:react.createElement(TooltipContent,null,react.createElement(Picker,{color:"transparent"===realValue?"#000000":realValue,onChange:updateValue,onFocus,onBlur}),presets.length>0&&react.createElement(Swatches,null,presets.map((function(preset,index){return react.createElement(lazy_WithTooltip.R,{key:"".concat(preset.value,"-").concat(index),hasChrome:!1,tooltip:react.createElement(Note,{note:preset.keyword||preset.value})},react.createElement(Swatch,{value:preset[colorSpace],active:color&&id(preset[colorSpace])===id(color[colorSpace]),onClick:function onClick(){return updateValue(preset.value)}}))}))))},react.createElement(Swatch,{value:realValue,style:{margin:4}})),react.createElement(Input,{id:(0,helpers.d)(name),value,onChange:function onChange(e){return updateValue(e.target.value)},onFocus:function onFocus(e){return e.target.select()},placeholder:"Choose color..."}),react.createElement(ToggleIcon,{icon:"markup",onClick:cycleColorSpace}))};ColorControl.displayName="ColorControl";const Color=ColorControl},48168:(module,__unused_webpack_exports,__webpack_require__)=>{const cssKeywords=__webpack_require__(8874),reverseKeywords={};for(const key of Object.keys(cssKeywords))reverseKeywords[cssKeywords[key]]=key;const convert={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};module.exports=convert;for(const model of Object.keys(convert)){if(!("channels"in convert[model]))throw new Error("missing channels property: "+model);if(!("labels"in convert[model]))throw new Error("missing channel labels property: "+model);if(convert[model].labels.length!==convert[model].channels)throw new Error("channel and label counts mismatch: "+model);const{channels,labels}=convert[model];delete convert[model].channels,delete convert[model].labels,Object.defineProperty(convert[model],"channels",{value:channels}),Object.defineProperty(convert[model],"labels",{value:labels})}convert.rgb.hsl=function(rgb){const r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min;let h,s;max===min?h=0:r===max?h=(g-b)/delta:g===max?h=2+(b-r)/delta:b===max&&(h=4+(r-g)/delta),h=Math.min(60*h,360),h<0&&(h+=360);const l=(min+max)/2;return s=max===min?0:l<=.5?delta/(max+min):delta/(2-max-min),[h,100*s,100*l]},convert.rgb.hsv=function(rgb){let rdif,gdif,bdif,h,s;const r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,v=Math.max(r,g,b),diff=v-Math.min(r,g,b),diffc=function(c){return(v-c)/6/diff+.5};return 0===diff?(h=0,s=0):(s=diff/v,rdif=diffc(r),gdif=diffc(g),bdif=diffc(b),r===v?h=bdif-gdif:g===v?h=1/3+rdif-bdif:b===v&&(h=2/3+gdif-rdif),h<0?h+=1:h>1&&(h-=1)),[360*h,100*s,100*v]},convert.rgb.hwb=function(rgb){const r=rgb[0],g=rgb[1];let b=rgb[2];const h=convert.rgb.hsl(rgb)[0],w=1/255*Math.min(r,Math.min(g,b));return b=1-1/255*Math.max(r,Math.max(g,b)),[h,100*w,100*b]},convert.rgb.cmyk=function(rgb){const r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,k=Math.min(1-r,1-g,1-b);return[100*((1-r-k)/(1-k)||0),100*((1-g-k)/(1-k)||0),100*((1-b-k)/(1-k)||0),100*k]},convert.rgb.keyword=function(rgb){const reversed=reverseKeywords[rgb];if(reversed)return reversed;let currentClosestKeyword,currentClosestDistance=1/0;for(const keyword of Object.keys(cssKeywords)){const value=cssKeywords[keyword],distance=(y=value,((x=rgb)[0]-y[0])**2+(x[1]-y[1])**2+(x[2]-y[2])**2);distance<currentClosestDistance&&(currentClosestDistance=distance,currentClosestKeyword=keyword)}var x,y;return currentClosestKeyword},convert.keyword.rgb=function(keyword){return cssKeywords[keyword]},convert.rgb.xyz=function(rgb){let r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255;r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,g=g>.04045?((g+.055)/1.055)**2.4:g/12.92,b=b>.04045?((b+.055)/1.055)**2.4:b/12.92;return[100*(.4124*r+.3576*g+.1805*b),100*(.2126*r+.7152*g+.0722*b),100*(.0193*r+.1192*g+.9505*b)]},convert.rgb.lab=function(rgb){const xyz=convert.rgb.xyz(rgb);let x=xyz[0],y=xyz[1],z=xyz[2];x/=95.047,y/=100,z/=108.883,x=x>.008856?x**(1/3):7.787*x+16/116,y=y>.008856?y**(1/3):7.787*y+16/116,z=z>.008856?z**(1/3):7.787*z+16/116;return[116*y-16,500*(x-y),200*(y-z)]},convert.hsl.rgb=function(hsl){const h=hsl[0]/360,s=hsl[1]/100,l=hsl[2]/100;let t2,t3,val;if(0===s)return val=255*l,[val,val,val];t2=l<.5?l*(1+s):l+s-l*s;const t1=2*l-t2,rgb=[0,0,0];for(let i=0;i<3;i++)t3=h+1/3*-(i-1),t3<0&&t3++,t3>1&&t3--,val=6*t3<1?t1+6*(t2-t1)*t3:2*t3<1?t2:3*t3<2?t1+(t2-t1)*(2/3-t3)*6:t1,rgb[i]=255*val;return rgb},convert.hsl.hsv=function(hsl){const h=hsl[0];let s=hsl[1]/100,l=hsl[2]/100,smin=s;const lmin=Math.max(l,.01);l*=2,s*=l<=1?l:2-l,smin*=lmin<=1?lmin:2-lmin;return[h,100*(0===l?2*smin/(lmin+smin):2*s/(l+s)),100*((l+s)/2)]},convert.hsv.rgb=function(hsv){const h=hsv[0]/60,s=hsv[1]/100;let v=hsv[2]/100;const hi=Math.floor(h)%6,f=h-Math.floor(h),p=255*v*(1-s),q=255*v*(1-s*f),t=255*v*(1-s*(1-f));switch(v*=255,hi){case 0:return[v,t,p];case 1:return[q,v,p];case 2:return[p,v,t];case 3:return[p,q,v];case 4:return[t,p,v];case 5:return[v,p,q]}},convert.hsv.hsl=function(hsv){const h=hsv[0],s=hsv[1]/100,v=hsv[2]/100,vmin=Math.max(v,.01);let sl,l;l=(2-s)*v;const lmin=(2-s)*vmin;return sl=s*vmin,sl/=lmin<=1?lmin:2-lmin,sl=sl||0,l/=2,[h,100*sl,100*l]},convert.hwb.rgb=function(hwb){const h=hwb[0]/360;let wh=hwb[1]/100,bl=hwb[2]/100;const ratio=wh+bl;let f;ratio>1&&(wh/=ratio,bl/=ratio);const i=Math.floor(6*h),v=1-bl;f=6*h-i,0!=(1&i)&&(f=1-f);const n=wh+f*(v-wh);let r,g,b;switch(i){default:case 6:case 0:r=v,g=n,b=wh;break;case 1:r=n,g=v,b=wh;break;case 2:r=wh,g=v,b=n;break;case 3:r=wh,g=n,b=v;break;case 4:r=n,g=wh,b=v;break;case 5:r=v,g=wh,b=n}return[255*r,255*g,255*b]},convert.cmyk.rgb=function(cmyk){const c=cmyk[0]/100,m=cmyk[1]/100,y=cmyk[2]/100,k=cmyk[3]/100;return[255*(1-Math.min(1,c*(1-k)+k)),255*(1-Math.min(1,m*(1-k)+k)),255*(1-Math.min(1,y*(1-k)+k))]},convert.xyz.rgb=function(xyz){const x=xyz[0]/100,y=xyz[1]/100,z=xyz[2]/100;let r,g,b;return r=3.2406*x+-1.5372*y+-.4986*z,g=-.9689*x+1.8758*y+.0415*z,b=.0557*x+-.204*y+1.057*z,r=r>.0031308?1.055*r**(1/2.4)-.055:12.92*r,g=g>.0031308?1.055*g**(1/2.4)-.055:12.92*g,b=b>.0031308?1.055*b**(1/2.4)-.055:12.92*b,r=Math.min(Math.max(0,r),1),g=Math.min(Math.max(0,g),1),b=Math.min(Math.max(0,b),1),[255*r,255*g,255*b]},convert.xyz.lab=function(xyz){let x=xyz[0],y=xyz[1],z=xyz[2];x/=95.047,y/=100,z/=108.883,x=x>.008856?x**(1/3):7.787*x+16/116,y=y>.008856?y**(1/3):7.787*y+16/116,z=z>.008856?z**(1/3):7.787*z+16/116;return[116*y-16,500*(x-y),200*(y-z)]},convert.lab.xyz=function(lab){let x,y,z;y=(lab[0]+16)/116,x=lab[1]/500+y,z=y-lab[2]/200;const y2=y**3,x2=x**3,z2=z**3;return y=y2>.008856?y2:(y-16/116)/7.787,x=x2>.008856?x2:(x-16/116)/7.787,z=z2>.008856?z2:(z-16/116)/7.787,x*=95.047,y*=100,z*=108.883,[x,y,z]},convert.lab.lch=function(lab){const l=lab[0],a=lab[1],b=lab[2];let h;h=360*Math.atan2(b,a)/2/Math.PI,h<0&&(h+=360);return[l,Math.sqrt(a*a+b*b),h]},convert.lch.lab=function(lch){const l=lch[0],c=lch[1],hr=lch[2]/360*2*Math.PI;return[l,c*Math.cos(hr),c*Math.sin(hr)]},convert.rgb.ansi16=function(args,saturation=null){const[r,g,b]=args;let value=null===saturation?convert.rgb.hsv(args)[2]:saturation;if(value=Math.round(value/50),0===value)return 30;let ansi=30+(Math.round(b/255)<<2|Math.round(g/255)<<1|Math.round(r/255));return 2===value&&(ansi+=60),ansi},convert.hsv.ansi16=function(args){return convert.rgb.ansi16(convert.hsv.rgb(args),args[2])},convert.rgb.ansi256=function(args){const r=args[0],g=args[1],b=args[2];if(r===g&&g===b)return r<8?16:r>248?231:Math.round((r-8)/247*24)+232;return 16+36*Math.round(r/255*5)+6*Math.round(g/255*5)+Math.round(b/255*5)},convert.ansi16.rgb=function(args){let color=args%10;if(0===color||7===color)return args>50&&(color+=3.5),color=color/10.5*255,[color,color,color];const mult=.5*(1+~~(args>50));return[(1&color)*mult*255,(color>>1&1)*mult*255,(color>>2&1)*mult*255]},convert.ansi256.rgb=function(args){if(args>=232){const c=10*(args-232)+8;return[c,c,c]}let rem;args-=16;return[Math.floor(args/36)/5*255,Math.floor((rem=args%36)/6)/5*255,rem%6/5*255]},convert.rgb.hex=function(args){const string=(((255&Math.round(args[0]))<<16)+((255&Math.round(args[1]))<<8)+(255&Math.round(args[2]))).toString(16).toUpperCase();return"000000".substring(string.length)+string},convert.hex.rgb=function(args){const match=args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!match)return[0,0,0];let colorString=match[0];3===match[0].length&&(colorString=colorString.split("").map((char=>char+char)).join(""));const integer=parseInt(colorString,16);return[integer>>16&255,integer>>8&255,255&integer]},convert.rgb.hcg=function(rgb){const r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,max=Math.max(Math.max(r,g),b),min=Math.min(Math.min(r,g),b),chroma=max-min;let grayscale,hue;return grayscale=chroma<1?min/(1-chroma):0,hue=chroma<=0?0:max===r?(g-b)/chroma%6:max===g?2+(b-r)/chroma:4+(r-g)/chroma,hue/=6,hue%=1,[360*hue,100*chroma,100*grayscale]},convert.hsl.hcg=function(hsl){const s=hsl[1]/100,l=hsl[2]/100,c=l<.5?2*s*l:2*s*(1-l);let f=0;return c<1&&(f=(l-.5*c)/(1-c)),[hsl[0],100*c,100*f]},convert.hsv.hcg=function(hsv){const s=hsv[1]/100,v=hsv[2]/100,c=s*v;let f=0;return c<1&&(f=(v-c)/(1-c)),[hsv[0],100*c,100*f]},convert.hcg.rgb=function(hcg){const h=hcg[0]/360,c=hcg[1]/100,g=hcg[2]/100;if(0===c)return[255*g,255*g,255*g];const pure=[0,0,0],hi=h%1*6,v=hi%1,w=1-v;let mg=0;switch(Math.floor(hi)){case 0:pure[0]=1,pure[1]=v,pure[2]=0;break;case 1:pure[0]=w,pure[1]=1,pure[2]=0;break;case 2:pure[0]=0,pure[1]=1,pure[2]=v;break;case 3:pure[0]=0,pure[1]=w,pure[2]=1;break;case 4:pure[0]=v,pure[1]=0,pure[2]=1;break;default:pure[0]=1,pure[1]=0,pure[2]=w}return mg=(1-c)*g,[255*(c*pure[0]+mg),255*(c*pure[1]+mg),255*(c*pure[2]+mg)]},convert.hcg.hsv=function(hcg){const c=hcg[1]/100,v=c+hcg[2]/100*(1-c);let f=0;return v>0&&(f=c/v),[hcg[0],100*f,100*v]},convert.hcg.hsl=function(hcg){const c=hcg[1]/100,l=hcg[2]/100*(1-c)+.5*c;let s=0;return l>0&&l<.5?s=c/(2*l):l>=.5&&l<1&&(s=c/(2*(1-l))),[hcg[0],100*s,100*l]},convert.hcg.hwb=function(hcg){const c=hcg[1]/100,v=c+hcg[2]/100*(1-c);return[hcg[0],100*(v-c),100*(1-v)]},convert.hwb.hcg=function(hwb){const w=hwb[1]/100,v=1-hwb[2]/100,c=v-w;let g=0;return c<1&&(g=(v-c)/(1-c)),[hwb[0],100*c,100*g]},convert.apple.rgb=function(apple){return[apple[0]/65535*255,apple[1]/65535*255,apple[2]/65535*255]},convert.rgb.apple=function(rgb){return[rgb[0]/255*65535,rgb[1]/255*65535,rgb[2]/255*65535]},convert.gray.rgb=function(args){return[args[0]/100*255,args[0]/100*255,args[0]/100*255]},convert.gray.hsl=function(args){return[0,0,args[0]]},convert.gray.hsv=convert.gray.hsl,convert.gray.hwb=function(gray){return[0,100,gray[0]]},convert.gray.cmyk=function(gray){return[0,0,0,gray[0]]},convert.gray.lab=function(gray){return[gray[0],0,0]},convert.gray.hex=function(gray){const val=255&Math.round(gray[0]/100*255),string=((val<<16)+(val<<8)+val).toString(16).toUpperCase();return"000000".substring(string.length)+string},convert.rgb.gray=function(rgb){return[(rgb[0]+rgb[1]+rgb[2])/3/255*100]}},12085:(module,__unused_webpack_exports,__webpack_require__)=>{const conversions=__webpack_require__(48168),route=__webpack_require__(4111),convert={};Object.keys(conversions).forEach((fromModel=>{convert[fromModel]={},Object.defineProperty(convert[fromModel],"channels",{value:conversions[fromModel].channels}),Object.defineProperty(convert[fromModel],"labels",{value:conversions[fromModel].labels});const routes=route(fromModel);Object.keys(routes).forEach((toModel=>{const fn=routes[toModel];convert[fromModel][toModel]=function wrapRounded(fn){const wrappedFn=function(...args){const arg0=args[0];if(null==arg0)return arg0;arg0.length>1&&(args=arg0);const result=fn(args);if("object"==typeof result)for(let len=result.length,i=0;i<len;i++)result[i]=Math.round(result[i]);return result};return"conversion"in fn&&(wrappedFn.conversion=fn.conversion),wrappedFn}(fn),convert[fromModel][toModel].raw=function wrapRaw(fn){const wrappedFn=function(...args){const arg0=args[0];return null==arg0?arg0:(arg0.length>1&&(args=arg0),fn(args))};return"conversion"in fn&&(wrappedFn.conversion=fn.conversion),wrappedFn}(fn)}))})),module.exports=convert},4111:(module,__unused_webpack_exports,__webpack_require__)=>{const conversions=__webpack_require__(48168);function deriveBFS(fromModel){const graph=function buildGraph(){const graph={},models=Object.keys(conversions);for(let len=models.length,i=0;i<len;i++)graph[models[i]]={distance:-1,parent:null};return graph}(),queue=[fromModel];for(graph[fromModel].distance=0;queue.length;){const current=queue.pop(),adjacents=Object.keys(conversions[current]);for(let len=adjacents.length,i=0;i<len;i++){const adjacent=adjacents[i],node=graph[adjacent];-1===node.distance&&(node.distance=graph[current].distance+1,node.parent=current,queue.unshift(adjacent))}}return graph}function link(from,to){return function(args){return to(from(args))}}function wrapConversion(toModel,graph){const path=[graph[toModel].parent,toModel];let fn=conversions[graph[toModel].parent][toModel],cur=graph[toModel].parent;for(;graph[cur].parent;)path.unshift(graph[cur].parent),fn=link(conversions[graph[cur].parent][cur],fn),cur=graph[cur].parent;return fn.conversion=path,fn}module.exports=function(fromModel){const graph=deriveBFS(fromModel),conversion={},models=Object.keys(graph);for(let len=models.length,i=0;i<len;i++){const toModel=models[i];null!==graph[toModel].parent&&(conversion[toModel]=wrapConversion(toModel,graph))}return conversion}},8874:module=>{"use strict";module.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}]);