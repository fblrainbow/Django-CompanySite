"object"==typeof navigator&&function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Plyr",t):(e=e||self).Plyr=t()}(this,function(){"use strict";!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,i;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}();var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n,i,r,a="object",o=function(e){return e&&e.Math==Math&&e},s=o(typeof globalThis==a&&globalThis)||o(typeof window==a&&window)||o(typeof self==a&&self)||o(typeof e==a&&e)||Function("return this")(),l=function(e){try{return!!e()}catch(e){return!0}},c=!l(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),u={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,f={f:h&&!u.call({1:2},1)?function(e){var t=h(this,e);return!!t&&t.enumerable}:u},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,m=function(e){return p.call(e).slice(8,-1)},g="".split,v=l(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==m(e)?g.call(e,""):Object(e)}:Object,y=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},b=function(e){return v(y(e))},w=function(e){return"object"==typeof e?null!==e:"function"==typeof e},k=function(e,t){if(!w(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!w(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!w(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!w(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")},T={}.hasOwnProperty,S=function(e,t){return T.call(e,t)},E=s.document,A=w(E)&&w(E.createElement),x=function(e){return A?E.createElement(e):{}},P=!c&&!l(function(){return 7!=Object.defineProperty(x("div"),"a",{get:function(){return 7}}).a}),C=Object.getOwnPropertyDescriptor,I={f:c?C:function(e,t){if(e=b(e),t=k(t,!0),P)try{return C(e,t)}catch(e){}if(S(e,t))return d(!f.f.call(e,t),e[t])}},L=function(e){if(!w(e))throw TypeError(String(e)+" is not an object");return e},M=Object.defineProperty,O={f:c?M:function(e,t,n){if(L(e),t=k(t,!0),L(n),P)try{return M(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},j=c?function(e,t,n){return O.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},N=function(e,t){try{j(s,e,t)}catch(n){s[e]=t}return t},_=t(function(e){var t=s["__core-js_shared__"]||N("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),R=_("native-function-to-string",Function.toString),U=s.WeakMap,F="function"==typeof U&&/native code/.test(R.call(U)),q=0,D=Math.random(),H=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++q+D).toString(36)},V=_("keys"),B=function(e){return V[e]||(V[e]=H(e))},z={},W=s.WeakMap;if(F){var K=new W,$=K.get,Y=K.has,G=K.set;n=function(e,t){return G.call(K,e,t),t},i=function(e){return $.call(K,e)||{}},r=function(e){return Y.call(K,e)}}else{var Q=B("state");z[Q]=!0,n=function(e,t){return j(e,Q,t),t},i=function(e){return S(e,Q)?e[Q]:{}},r=function(e){return S(e,Q)}}var X={set:n,get:i,has:r,enforce:function(e){return r(e)?i(e):n(e,{})},getterFor:function(e){return function(t){var n;if(!w(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=t(function(e){var t=X.get,n=X.enforce,i=String(R).split("toString");_("inspectSource",function(e){return R.call(e)}),(e.exports=function(e,t,r,a){var o=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;"function"==typeof r&&("string"!=typeof t||S(r,"name")||j(r,"name",t),n(r).source=i.join("string"==typeof t?t:"")),e!==s?(o?!c&&e[t]&&(l=!0):delete e[t],l?e[t]=r:j(e,t,r)):l?e[t]=r:N(t,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||R.call(this)})}),Z=s,ee=function(e){return"function"==typeof e?e:void 0},te=function(e,t){return arguments.length<2?ee(Z[e])||ee(s[e]):Z[e]&&Z[e][t]||s[e]&&s[e][t]},ne=Math.ceil,ie=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ie:ne)(e)},ae=Math.min,oe=function(e){return e>0?ae(re(e),9007199254740991):0},se=Math.max,le=Math.min,ce=function(e,t){var n=re(e);return n<0?se(n+t,0):le(n,t)},ue=function(e){return function(t,n,i){var r,a=b(t),o=oe(a.length),s=ce(i,o);if(e&&n!=n){for(;o>s;)if((r=a[s++])!=r)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},he={includes:ue(!0),indexOf:ue(!1)},fe=he.indexOf,de=function(e,t){var n,i=b(e),r=0,a=[];for(n in i)!S(z,n)&&S(i,n)&&a.push(n);for(;t.length>r;)S(i,n=t[r++])&&(~fe(a,n)||a.push(n));return a},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=pe.concat("length","prototype"),ge={f:Object.getOwnPropertyNames||function(e){return de(e,me)}},ve={f:Object.getOwnPropertySymbols},ye=te("Reflect","ownKeys")||function(e){var t=ge.f(L(e)),n=ve.f;return n?t.concat(n(e)):t},be=function(e,t){for(var n=ye(t),i=O.f,r=I.f,a=0;a<n.length;a++){var o=n[a];S(e,o)||i(e,o,r(t,o))}},we=/#|\.prototype\./,ke=function(e,t){var n=Se[Te(e)];return n==Ae||n!=Ee&&("function"==typeof t?l(t):!!t)},Te=ke.normalize=function(e){return String(e).replace(we,".").toLowerCase()},Se=ke.data={},Ee=ke.NATIVE="N",Ae=ke.POLYFILL="P",xe=ke,Pe=I.f,Ce=function(e,t){var n,i,r,a,o,l=e.target,c=e.global,u=e.stat;if(n=c?s:u?s[l]||N(l,{}):(s[l]||{}).prototype)for(i in t){if(a=t[i],r=e.noTargetGet?(o=Pe(n,i))&&o.value:n[i],!xe(c?i:l+(u?".":"#")+i,e.forced)&&void 0!==r){if(typeof a==typeof r)continue;be(a,r)}(e.sham||r&&r.sham)&&j(a,"sham",!0),J(n,i,a,e)}},Ie=!!Object.getOwnPropertySymbols&&!l(function(){return!String(Symbol())}),Le=Array.isArray||function(e){return"Array"==m(e)},Me=function(e){return Object(y(e))},Oe=Object.keys||function(e){return de(e,pe)},je=c?Object.defineProperties:function(e,t){L(e);for(var n,i=Oe(t),r=i.length,a=0;r>a;)O.f(e,n=i[a++],t[n]);return e},Ne=te("document","documentElement"),_e=B("IE_PROTO"),Re=function(){},Ue=function(){var e,t=x("iframe"),n=pe.length;for(t.style.display="none",Ne.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ue=e.F;n--;)delete Ue.prototype[pe[n]];return Ue()},Fe=Object.create||function(e,t){var n;return null!==e?(Re.prototype=L(e),n=new Re,Re.prototype=null,n[_e]=e):n=Ue(),void 0===t?n:je(n,t)};z[_e]=!0;var qe=ge.f,De={}.toString,He="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Ve={f:function(e){return He&&"[object Window]"==De.call(e)?function(e){try{return qe(e)}catch(e){return He.slice()}}(e):qe(b(e))}},Be=s.Symbol,ze=_("wks"),We=function(e){return ze[e]||(ze[e]=Ie&&Be[e]||(Ie?Be:H)("Symbol."+e))},Ke={f:We},$e=O.f,Ye=function(e){var t=Z.Symbol||(Z.Symbol={});S(t,e)||$e(t,e,{value:Ke.f(e)})},Ge=O.f,Qe=We("toStringTag"),Xe=function(e,t,n){e&&!S(e=n?e:e.prototype,Qe)&&Ge(e,Qe,{configurable:!0,value:t})},Je=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},Ze=function(e,t,n){if(Je(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}},et=We("species"),tt=function(e,t){var n;return Le(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!Le(n.prototype)?w(n)&&null===(n=n[et])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},nt=[].push,it=function(e){var t=1==e,n=2==e,i=3==e,r=4==e,a=6==e,o=5==e||a;return function(s,l,c,u){for(var h,f,d=Me(s),p=v(d),m=Ze(l,c,3),g=oe(p.length),y=0,b=u||tt,w=t?b(s,g):n?b(s,0):void 0;g>y;y++)if((o||y in p)&&(f=m(h=p[y],y,d),e))if(t)w[y]=f;else if(f)switch(e){case 3:return!0;case 5:return h;case 6:return y;case 2:nt.call(w,h)}else if(r)return!1;return a?-1:i||r?r:w}},rt={forEach:it(0),map:it(1),filter:it(2),some:it(3),every:it(4),find:it(5),findIndex:it(6)},at=rt.forEach,ot=B("hidden"),st=We("toPrimitive"),lt=X.set,ct=X.getterFor("Symbol"),ut=Object.prototype,ht=s.Symbol,ft=s.JSON,dt=ft&&ft.stringify,pt=I.f,mt=O.f,gt=Ve.f,vt=f.f,yt=_("symbols"),bt=_("op-symbols"),wt=_("string-to-symbol-registry"),kt=_("symbol-to-string-registry"),Tt=_("wks"),St=s.QObject,Et=!St||!St.prototype||!St.prototype.findChild,At=c&&l(function(){return 7!=Fe(mt({},"a",{get:function(){return mt(this,"a",{value:7}).a}})).a})?function(e,t,n){var i=pt(ut,t);i&&delete ut[t],mt(e,t,n),i&&e!==ut&&mt(ut,t,i)}:mt,xt=function(e,t){var n=yt[e]=Fe(ht.prototype);return lt(n,{type:"Symbol",tag:e,description:t}),c||(n.description=t),n},Pt=Ie&&"symbol"==typeof ht.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof ht},Ct=function(e,t,n){e===ut&&Ct(bt,t,n),L(e);var i=k(t,!0);return L(n),S(yt,i)?(n.enumerable?(S(e,ot)&&e[ot][i]&&(e[ot][i]=!1),n=Fe(n,{enumerable:d(0,!1)})):(S(e,ot)||mt(e,ot,d(1,{})),e[ot][i]=!0),At(e,i,n)):mt(e,i,n)},It=function(e,t){L(e);var n=b(t),i=Oe(n).concat(jt(n));return at(i,function(t){c&&!Lt.call(n,t)||Ct(e,t,n[t])}),e},Lt=function(e){var t=k(e,!0),n=vt.call(this,t);return!(this===ut&&S(yt,t)&&!S(bt,t))&&(!(n||!S(this,t)||!S(yt,t)||S(this,ot)&&this[ot][t])||n)},Mt=function(e,t){var n=b(e),i=k(t,!0);if(n!==ut||!S(yt,i)||S(bt,i)){var r=pt(n,i);return!r||!S(yt,i)||S(n,ot)&&n[ot][i]||(r.enumerable=!0),r}},Ot=function(e){var t=gt(b(e)),n=[];return at(t,function(e){S(yt,e)||S(z,e)||n.push(e)}),n},jt=function(e){var t=e===ut,n=gt(t?bt:b(e)),i=[];return at(n,function(e){!S(yt,e)||t&&!S(ut,e)||i.push(yt[e])}),i};Ie||(J((ht=function(){if(this instanceof ht)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=H(e),n=function(e){this===ut&&n.call(bt,e),S(this,ot)&&S(this[ot],t)&&(this[ot][t]=!1),At(this,t,d(1,e))};return c&&Et&&At(ut,t,{configurable:!0,set:n}),xt(t,e)}).prototype,"toString",function(){return ct(this).tag}),f.f=Lt,O.f=Ct,I.f=Mt,ge.f=Ve.f=Ot,ve.f=jt,c&&(mt(ht.prototype,"description",{configurable:!0,get:function(){return ct(this).description}}),J(ut,"propertyIsEnumerable",Lt,{unsafe:!0})),Ke.f=function(e){return xt(We(e),e)}),Ce({global:!0,wrap:!0,forced:!Ie,sham:!Ie},{Symbol:ht}),at(Oe(Tt),function(e){Ye(e)}),Ce({target:"Symbol",stat:!0,forced:!Ie},{for:function(e){var t=String(e);if(S(wt,t))return wt[t];var n=ht(t);return wt[t]=n,kt[n]=t,n},keyFor:function(e){if(!Pt(e))throw TypeError(e+" is not a symbol");if(S(kt,e))return kt[e]},useSetter:function(){Et=!0},useSimple:function(){Et=!1}}),Ce({target:"Object",stat:!0,forced:!Ie,sham:!c},{create:function(e,t){return void 0===t?Fe(e):It(Fe(e),t)},defineProperty:Ct,defineProperties:It,getOwnPropertyDescriptor:Mt}),Ce({target:"Object",stat:!0,forced:!Ie},{getOwnPropertyNames:Ot,getOwnPropertySymbols:jt}),Ce({target:"Object",stat:!0,forced:l(function(){ve.f(1)})},{getOwnPropertySymbols:function(e){return ve.f(Me(e))}}),ft&&Ce({target:"JSON",stat:!0,forced:!Ie||l(function(){var e=ht();return"[null]"!=dt([e])||"{}"!=dt({a:e})||"{}"!=dt(Object(e))})},{stringify:function(e){for(var t,n,i=[e],r=1;arguments.length>r;)i.push(arguments[r++]);if(n=t=i[1],(w(t)||void 0!==e)&&!Pt(e))return Le(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Pt(t))return t}),i[1]=t,dt.apply(ft,i)}}),ht.prototype[st]||j(ht.prototype,st,ht.prototype.valueOf),Xe(ht,"Symbol"),z[ot]=!0;var Nt=O.f,_t=s.Symbol;if(c&&"function"==typeof _t&&(!("description"in _t.prototype)||void 0!==_t().description)){var Rt={},Ut=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof Ut?new _t(e):void 0===e?_t():_t(e);return""===e&&(Rt[t]=!0),t};be(Ut,_t);var Ft=Ut.prototype=_t.prototype;Ft.constructor=Ut;var qt=Ft.toString,Dt="Symbol(test)"==String(_t("test")),Ht=/^Symbol\((.*)\)[^)]+$/;Nt(Ft,"description",{configurable:!0,get:function(){var e=w(this)?this.valueOf():this,t=qt.call(e);if(S(Rt,e))return"";var n=Dt?t.slice(7,-1):t.replace(Ht,"$1");return""===n?void 0:n}}),Ce({global:!0,forced:!0},{Symbol:Ut})}Ye("iterator");var Vt=We("unscopables"),Bt=Array.prototype;null==Bt[Vt]&&j(Bt,Vt,Fe(null));var zt,Wt,Kt,$t=function(e){Bt[Vt][e]=!0},Yt={},Gt=!l(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),Qt=B("IE_PROTO"),Xt=Object.prototype,Jt=Gt?Object.getPrototypeOf:function(e){return e=Me(e),S(e,Qt)?e[Qt]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Xt:null},Zt=We("iterator"),en=!1;[].keys&&("next"in(Kt=[].keys())?(Wt=Jt(Jt(Kt)))!==Object.prototype&&(zt=Wt):en=!0),null==zt&&(zt={}),S(zt,Zt)||j(zt,Zt,function(){return this});var tn={IteratorPrototype:zt,BUGGY_SAFARI_ITERATORS:en},nn=tn.IteratorPrototype,rn=function(){return this},an=function(e,t,n){var i=t+" Iterator";return e.prototype=Fe(nn,{next:d(1,n)}),Xe(e,i,!1),Yt[i]=rn,e},on=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,i){return L(n),function(e){if(!w(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(i),t?e.call(n,i):n.__proto__=i,n}}():void 0),sn=tn.IteratorPrototype,ln=tn.BUGGY_SAFARI_ITERATORS,cn=We("iterator"),un=function(){return this},hn=function(e,t,n,i,r,a,o){an(n,t,i);var s,l,c,u=function(e){if(e===r&&m)return m;if(!ln&&e in d)return d[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},h=t+" Iterator",f=!1,d=e.prototype,p=d[cn]||d["@@iterator"]||r&&d[r],m=!ln&&p||u(r),g="Array"==t&&d.entries||p;if(g&&(s=Jt(g.call(new e)),sn!==Object.prototype&&s.next&&(Jt(s)!==sn&&(on?on(s,sn):"function"!=typeof s[cn]&&j(s,cn,un)),Xe(s,h,!0))),"values"==r&&p&&"values"!==p.name&&(f=!0,m=function(){return p.call(this)}),d[cn]!==m&&j(d,cn,m),Yt[t]=m,r)if(l={values:u("values"),keys:a?m:u("keys"),entries:u("entries")},o)for(c in l)!ln&&!f&&c in d||J(d,c,l[c]);else Ce({target:t,proto:!0,forced:ln||f},l);return l},fn=X.set,dn=X.getterFor("Array Iterator"),pn=hn(Array,"Array",function(e,t){fn(this,{type:"Array Iterator",target:b(e),index:0,kind:t})},function(){var e=dn(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}},"values");Yt.Arguments=Yt.Array,$t("keys"),$t("values"),$t("entries");var mn=function(e,t){var n=[][e];return!n||!l(function(){n.call(null,t||function(){throw 1},1)})},gn=[].join,vn=v!=Object,yn=mn("join",",");Ce({target:"Array",proto:!0,forced:vn||yn},{join:function(e){return gn.call(b(this),void 0===e?",":e)}});var bn=function(e,t,n){var i=k(t);i in e?O.f(e,i,d(0,n)):e[i]=n},wn=We("species"),kn=function(e){return!l(function(){var t=[];return(t.constructor={})[wn]=function(){return{foo:1}},1!==t[e](Boolean).foo})},Tn=We("species"),Sn=[].slice,En=Math.max;Ce({target:"Array",proto:!0,forced:!kn("slice")},{slice:function(e,t){var n,i,r,a=b(this),o=oe(a.length),s=ce(e,o),l=ce(void 0===t?o:t,o);if(Le(a)&&("function"!=typeof(n=a.constructor)||n!==Array&&!Le(n.prototype)?w(n)&&null===(n=n[Tn])&&(n=void 0):n=void 0,n===Array||void 0===n))return Sn.call(a,s,l);for(i=new(void 0===n?Array:n)(En(l-s,0)),r=0;s<l;s++,r++)s in a&&bn(i,r,a[s]);return i.length=r,i}});var An=We("toStringTag"),xn="Arguments"==m(function(){return arguments}()),Pn=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),An))?n:xn?m(t):"Object"==(i=m(t))&&"function"==typeof t.callee?"Arguments":i},Cn={};Cn[We("toStringTag")]="z";var In="[object z]"!==String(Cn)?function(){return"[object "+Pn(this)+"]"}:Cn.toString,Ln=Object.prototype;In!==Ln.toString&&J(Ln,"toString",In,{unsafe:!0});var Mn=function(){var e=L(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},On=RegExp.prototype,jn=On.toString,Nn=l(function(){return"/a/b"!=jn.call({source:"a",flags:"b"})}),_n="toString"!=jn.name;(Nn||_n)&&J(RegExp.prototype,"toString",function(){var e=L(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in On)?Mn.call(e):n)},{unsafe:!0});var Rn=function(e){return function(t,n){var i,r,a=String(y(t)),o=re(n),s=a.length;return o<0||o>=s?e?"":void 0:(i=a.charCodeAt(o))<55296||i>56319||o+1===s||(r=a.charCodeAt(o+1))<56320||r>57343?e?a.charAt(o):i:e?a.slice(o,o+2):r-56320+(i-55296<<10)+65536}},Un={codeAt:Rn(!1),charAt:Rn(!0)},Fn=Un.charAt,qn=X.set,Dn=X.getterFor("String Iterator");hn(String,"String",function(e){qn(this,{type:"String Iterator",string:String(e),index:0})},function(){var e,t=Dn(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=Fn(n,i),t.index+=e.length,{value:e,done:!1})});var Hn=RegExp.prototype.exec,Vn=String.prototype.replace,Bn=Hn,zn=function(){var e=/a/,t=/b*/g;return Hn.call(e,"a"),Hn.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),Wn=void 0!==/()??/.exec("")[1];(zn||Wn)&&(Bn=function(e){var t,n,i,r,a=this;return Wn&&(n=new RegExp("^"+a.source+"$(?!\\s)",Mn.call(a))),zn&&(t=a.lastIndex),i=Hn.call(a,e),zn&&i&&(a.lastIndex=a.global?i.index+i[0].length:t),Wn&&i&&i.length>1&&Vn.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i});var Kn=Bn,$n=We("species"),Yn=!l(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),Gn=!l(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),Qn=function(e,t,n,i){var r=We(e),a=!l(function(){var t={};return t[r]=function(){return 7},7!=""[e](t)}),o=a&&!l(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[$n]=function(){return n}),n[r](""),!t});if(!a||!o||"replace"===e&&!Yn||"split"===e&&!Gn){var s=/./[r],c=n(r,""[e],function(e,t,n,i,r){return t.exec===Kn?a&&!r?{done:!0,value:s.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),u=c[0],h=c[1];J(String.prototype,e,u),J(RegExp.prototype,r,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)}),i&&j(RegExp.prototype[r],"sham",!0)}},Xn=Un.charAt,Jn=function(e,t,n){return t+(n?Xn(e,t).length:1)},Zn=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==m(e))throw TypeError("RegExp#exec called on incompatible receiver");return Kn.call(e,t)},ei=Math.max,ti=Math.min,ni=Math.floor,ii=/\$([$&'`]|\d\d?|<[^>]*>)/g,ri=/\$([$&'`]|\d\d?)/g;Qn("replace",2,function(e,t,n){return[function(n,i){var r=y(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,r,i):t.call(String(r),n,i)},function(e,r){var a=n(t,e,this,r);if(a.done)return a.value;var o=L(e),s=String(this),l="function"==typeof r;l||(r=String(r));var c=o.global;if(c){var u=o.unicode;o.lastIndex=0}for(var h=[];;){var f=Zn(o,s);if(null===f)break;if(h.push(f),!c)break;""===String(f[0])&&(o.lastIndex=Jn(s,oe(o.lastIndex),u))}for(var d,p="",m=0,g=0;g<h.length;g++){f=h[g];for(var v=String(f[0]),y=ei(ti(re(f.index),s.length),0),b=[],w=1;w<f.length;w++)b.push(void 0===(d=f[w])?d:String(d));var k=f.groups;if(l){var T=[v].concat(b,y,s);void 0!==k&&T.push(k);var S=String(r.apply(void 0,T))}else S=i(v,s,y,b,k,r);y>=m&&(p+=s.slice(m,y)+S,m=y+v.length)}return p+s.slice(m)}];function i(e,n,i,r,a,o){var s=i+e.length,l=r.length,c=ri;return void 0!==a&&(a=Me(a),c=ii),t.call(o,c,function(t,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,i);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var h=ni(u/10);return 0===h?t:h<=l?void 0===r[h-1]?o.charAt(1):r[h-1]+o.charAt(1):t}c=r[u-1]}return void 0===c?"":c})}});var ai=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};Qn("search",1,function(e,t,n){return[function(t){var n=y(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var r=L(e),a=String(this),o=r.lastIndex;ai(o,0)||(r.lastIndex=0);var s=Zn(r,a);return ai(r.lastIndex,o)||(r.lastIndex=o),null===s?-1:s.index}]});var oi=We("match"),si=function(e){var t;return w(e)&&(void 0!==(t=e[oi])?!!t:"RegExp"==m(e))},li=We("species"),ci=function(e,t){var n,i=L(e).constructor;return void 0===i||null==(n=L(i)[li])?t:Je(n)},ui=[].push,hi=Math.min,fi=!l(function(){return!RegExp(4294967295,"y")});Qn("split",2,function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(y(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===e)return[i];if(!si(e))return t.call(i,e,r);for(var a,o,s,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,h=new RegExp(e.source,c+"g");(a=Kn.call(h,i))&&!((o=h.lastIndex)>u&&(l.push(i.slice(u,a.index)),a.length>1&&a.index<i.length&&ui.apply(l,a.slice(1)),s=a[0].length,u=o,l.length>=r));)h.lastIndex===a.index&&h.lastIndex++;return u===i.length?!s&&h.test("")||l.push(""):l.push(i.slice(u)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=y(this),a=null==t?void 0:t[e];return void 0!==a?a.call(t,r,n):i.call(String(r),t,n)},function(e,r){var a=n(i,e,this,r,i!==t);if(a.done)return a.value;var o=L(e),s=String(this),l=ci(o,RegExp),c=o.unicode,u=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(fi?"y":"g"),h=new l(fi?o:"^(?:"+o.source+")",u),f=void 0===r?4294967295:r>>>0;if(0===f)return[];if(0===s.length)return null===Zn(h,s)?[s]:[];for(var d=0,p=0,m=[];p<s.length;){h.lastIndex=fi?p:0;var g,v=Zn(h,fi?s:s.slice(p));if(null===v||(g=hi(oe(h.lastIndex+(fi?0:p)),s.length))===d)p=Jn(s,p,c);else{if(m.push(s.slice(d,p)),m.length===f)return m;for(var y=1;y<=v.length-1;y++)if(m.push(v[y]),m.length===f)return m;p=d=g}}return m.push(s.slice(d)),m}]},!fi);var di={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},pi=rt.forEach,mi=mn("forEach")?function(e){return pi(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach;for(var gi in di){var vi=s[gi],yi=vi&&vi.prototype;if(yi&&yi.forEach!==mi)try{j(yi,"forEach",mi)}catch(e){yi.forEach=mi}}var bi=We("iterator"),wi=We("toStringTag"),ki=pn.values;for(var Ti in di){var Si=s[Ti],Ei=Si&&Si.prototype;if(Ei){if(Ei[bi]!==ki)try{j(Ei,bi,ki)}catch(e){Ei[bi]=ki}if(Ei[wi]||j(Ei,wi,Ti),di[Ti])for(var Ai in pn)if(Ei[Ai]!==pn[Ai])try{j(Ei,Ai,pn[Ai])}catch(e){Ei[Ai]=pn[Ai]}}}var xi=We("iterator"),Pi=!l(function(){var e=new URL("b?e=1","http://a"),t=e.searchParams;return e.pathname="c%20d",!t.sort||"http://a/c%20d?e=1"!==e.href||"1"!==t.get("e")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[xi]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash}),Ci=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e},Ii=Object.assign,Li=!Ii||l(function(){var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),7!=Ii({},e)[n]||"abcdefghijklmnopqrst"!=Oe(Ii({},t)).join("")})?function(e,t){for(var n=Me(e),i=arguments.length,r=1,a=ve.f,o=f.f;i>r;)for(var s,l=v(arguments[r++]),u=a?Oe(l).concat(a(l)):Oe(l),h=u.length,d=0;h>d;)s=u[d++],c&&!o.call(l,s)||(n[s]=l[s]);return n}:Ii,Mi=function(e,t,n,i){try{return i?t(L(n)[0],n[1]):t(n)}catch(t){var r=e.return;throw void 0!==r&&L(r.call(e)),t}},Oi=We("iterator"),ji=Array.prototype,Ni=function(e){return void 0!==e&&(Yt.Array===e||ji[Oi]===e)},_i=We("iterator"),Ri=function(e){if(null!=e)return e[_i]||e["@@iterator"]||Yt[Pn(e)]},Ui=function(e){var t,n,i,r,a=Me(e),o="function"==typeof this?this:Array,s=arguments.length,l=s>1?arguments[1]:void 0,c=void 0!==l,u=0,h=Ri(a);if(c&&(l=Ze(l,s>2?arguments[2]:void 0,2)),null==h||o==Array&&Ni(h))for(n=new o(t=oe(a.length));t>u;u++)bn(n,u,c?l(a[u],u):a[u]);else for(r=h.call(a),n=new o;!(i=r.next()).done;u++)bn(n,u,c?Mi(r,l,[i.value,u],!0):i.value);return n.length=u,n},Fi=/[^\0-\u007E]/,qi=/[.\u3002\uFF0E\uFF61]/g,Di="Overflow: input needs wider integers to process",Hi=Math.floor,Vi=String.fromCharCode,Bi=function(e){return e+22+75*(e<26)},zi=function(e,t,n){var i=0;for(e=n?Hi(e/700):e>>1,e+=Hi(e/t);e>455;i+=36)e=Hi(e/35);return Hi(i+36*e/(e+38))},Wi=function(e){var t,n,i=[],r=(e=function(e){for(var t=[],n=0,i=e.length;n<i;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=e.charCodeAt(n++);56320==(64512&a)?t.push(((1023&r)<<10)+(1023&a)+65536):(t.push(r),n--)}else t.push(r)}return t}(e)).length,a=128,o=0,s=72;for(t=0;t<e.length;t++)(n=e[t])<128&&i.push(Vi(n));var l=i.length,c=l;for(l&&i.push("-");c<r;){var u=2147483647;for(t=0;t<e.length;t++)(n=e[t])>=a&&n<u&&(u=n);var h=c+1;if(u-a>Hi((2147483647-o)/h))throw RangeError(Di);for(o+=(u-a)*h,a=u,t=0;t<e.length;t++){if((n=e[t])<a&&++o>2147483647)throw RangeError(Di);if(n==a){for(var f=o,d=36;;d+=36){var p=d<=s?1:d>=s+26?26:d-s;if(f<p)break;var m=f-p,g=36-p;i.push(Vi(Bi(p+m%g))),f=Hi(m/g)}i.push(Vi(Bi(f))),s=zi(o,h,c==l),o=0,++c}}++o,++a}return i.join("")},Ki=function(e,t,n){for(var i in t)J(e,i,t[i],n);return e},$i=function(e){var t=Ri(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return L(t.call(e))},Yi=We("iterator"),Gi=X.set,Qi=X.getterFor("URLSearchParams"),Xi=X.getterFor("URLSearchParamsIterator"),Ji=/\+/g,Zi=Array(4),er=function(e){return Zi[e-1]||(Zi[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},tr=function(e){try{return decodeURIComponent(e)}catch(t){return e}},nr=function(e){var t=e.replace(Ji," "),n=4;try{return decodeURIComponent(t)}catch(e){for(;n;)t=t.replace(er(n--),tr);return t}},ir=/[!'()~]|%20/g,rr={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ar=function(e){return rr[e]},or=function(e){return encodeURIComponent(e).replace(ir,ar)},sr=function(e,t){if(t)for(var n,i,r=t.split("&"),a=0;a<r.length;)(n=r[a++]).length&&(i=n.split("="),e.push({key:nr(i.shift()),value:nr(i.join("="))}))},lr=function(e){this.entries.length=0,sr(this.entries,e)},cr=function(e,t){if(e<t)throw TypeError("Not enough arguments")},ur=an(function(e,t){Gi(this,{type:"URLSearchParamsIterator",iterator:$i(Qi(e).entries),kind:t})},"Iterator",function(){var e=Xi(this),t=e.kind,n=e.iterator.next(),i=n.value;return n.done||(n.value="keys"===t?i.key:"values"===t?i.value:[i.key,i.value]),n}),hr=function(){Ci(this,hr,"URLSearchParams");var e,t,n,i,r,a,o,s=arguments.length>0?arguments[0]:void 0,l=[];if(Gi(this,{type:"URLSearchParams",entries:l,updateURL:function(){},updateSearchParams:lr}),void 0!==s)if(w(s))if("function"==typeof(e=Ri(s)))for(t=e.call(s);!(n=t.next()).done;){if((r=(i=$i(L(n.value))).next()).done||(a=i.next()).done||!i.next().done)throw TypeError("Expected sequence with length 2");l.push({key:r.value+"",value:a.value+""})}else for(o in s)S(s,o)&&l.push({key:o,value:s[o]+""});else sr(l,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},fr=hr.prototype;Ki(fr,{append:function(e,t){cr(arguments.length,2);var n=Qi(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){cr(arguments.length,1);for(var t=Qi(this),n=t.entries,i=e+"",r=0;r<n.length;)n[r].key===i?n.splice(r,1):r++;t.updateURL()},get:function(e){cr(arguments.length,1);for(var t=Qi(this).entries,n=e+"",i=0;i<t.length;i++)if(t[i].key===n)return t[i].value;return null},getAll:function(e){cr(arguments.length,1);for(var t=Qi(this).entries,n=e+"",i=[],r=0;r<t.length;r++)t[r].key===n&&i.push(t[r].value);return i},has:function(e){cr(arguments.length,1);for(var t=Qi(this).entries,n=e+"",i=0;i<t.length;)if(t[i++].key===n)return!0;return!1},set:function(e,t){cr(arguments.length,1);for(var n,i=Qi(this),r=i.entries,a=!1,o=e+"",s=t+"",l=0;l<r.length;l++)(n=r[l]).key===o&&(a?r.splice(l--,1):(a=!0,n.value=s));a||r.push({key:o,value:s}),i.updateURL()},sort:function(){var e,t,n,i=Qi(this),r=i.entries,a=r.slice();for(r.length=0,n=0;n<a.length;n++){for(e=a[n],t=0;t<n;t++)if(r[t].key>e.key){r.splice(t,0,e);break}t===n&&r.push(e)}i.updateURL()},forEach:function(e){for(var t,n=Qi(this).entries,i=Ze(e,arguments.length>1?arguments[1]:void 0,3),r=0;r<n.length;)i((t=n[r++]).value,t.key,this)},keys:function(){return new ur(this,"keys")},values:function(){return new ur(this,"values")},entries:function(){return new ur(this,"entries")}},{enumerable:!0}),J(fr,Yi,fr.entries),J(fr,"toString",function(){for(var e,t=Qi(this).entries,n=[],i=0;i<t.length;)e=t[i++],n.push(or(e.key)+"="+or(e.value));return n.join("&")},{enumerable:!0}),Xe(hr,"URLSearchParams"),Ce({global:!0,forced:!Pi},{URLSearchParams:hr});var dr,pr={URLSearchParams:hr,getState:Qi},mr=Un.codeAt,gr=s.URL,vr=pr.URLSearchParams,yr=pr.getState,br=X.set,wr=X.getterFor("URL"),kr=Math.floor,Tr=Math.pow,Sr=/[A-Za-z]/,Er=/[\d+\-.A-Za-z]/,Ar=/\d/,xr=/^(0x|0X)/,Pr=/^[0-7]+$/,Cr=/^\d+$/,Ir=/^[\dA-Fa-f]+$/,Lr=/[\u0000\u0009\u000A\u000D #%\/:?@[\\]]/,Mr=/[\u0000\u0009\u000A\u000D #\/:?@[\\]]/,Or=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,jr=/[\u0009\u000A\u000D]/g,Nr=function(e,t){var n,i,r;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host";if(!(n=Rr(t.slice(1,-1))))return"Invalid host";e.host=n}else if(zr(e)){if(t=function(e){var t,n,i=[],r=e.toLowerCase().replace(qi,".").split(".");for(t=0;t<r.length;t++)n=r[t],i.push(Fi.test(n)?"xn--"+Wi(n):n);return i.join(".")}(t),Lr.test(t))return"Invalid host";if(null===(n=_r(t)))return"Invalid host";e.host=n}else{if(Mr.test(t))return"Invalid host";for(n="",i=Ui(t),r=0;r<i.length;r++)n+=Vr(i[r],Fr);e.host=n}},_r=function(e){var t,n,i,r,a,o,s,l=e.split(".");if(l.length&&""==l[l.length-1]&&l.pop(),(t=l.length)>4)return e;for(n=[],i=0;i<t;i++){if(""==(r=l[i]))return e;if(a=10,r.length>1&&"0"==r.charAt(0)&&(a=xr.test(r)?16:8,r=r.slice(8==a?1:2)),""===r)o=0;else{if(!(10==a?Cr:8==a?Pr:Ir).test(r))return e;o=parseInt(r,a)}n.push(o)}for(i=0;i<t;i++)if(o=n[i],i==t-1){if(o>=Tr(256,5-t))return null}else if(o>255)return null;for(s=n.pop(),i=0;i<n.length;i++)s+=n[i]*Tr(256,3-i);return s},Rr=function(e){var t,n,i,r,a,o,s,l=[0,0,0,0,0,0,0,0],c=0,u=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,u=++c}for(;f();){if(8==c)return;if(":"!=f()){for(t=n=0;n<4&&Ir.test(f());)t=16*t+parseInt(f(),16),h++,n++;if("."==f()){if(0==n)return;if(h-=n,c>6)return;for(i=0;f();){if(r=null,i>0){if(!("."==f()&&i<4))return;h++}if(!Ar.test(f()))return;for(;Ar.test(f());){if(a=parseInt(f(),10),null===r)r=a;else{if(0==r)return;r=10*r+a}if(r>255)return;h++}l[c]=256*l[c]+r,2!=++i&&4!=i||c++}if(4!=i)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;l[c++]=t}else{if(null!==u)return;h++,u=++c}}if(null!==u)for(o=c-u,c=7;0!=c&&o>0;)s=l[c],l[c--]=l[u+o-1],l[u+--o]=s;else if(8!=c)return;return l},Ur=function(e){var t,n,i,r;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=kr(e/256);return t.join(".")}if("object"==typeof e){for(t="",i=function(e){for(var t=null,n=1,i=null,r=0,a=0;a<8;a++)0!==e[a]?(r>n&&(t=i,n=r),i=null,r=0):(null===i&&(i=a),++r);return r>n&&(t=i,n=r),t}(e),n=0;n<8;n++)r&&0===e[n]||(r&&(r=!1),i===n?(t+=n?":":"::",r=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},Fr={},qr=Li({},Fr,{" ":1,'"':1,"<":1,">":1,"`":1}),Dr=Li({},qr,{"#":1,"?":1,"{":1,"}":1}),Hr=Li({},Dr,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Vr=function(e,t){var n=mr(e,0);return n>32&&n<127&&!S(t,e)?e:encodeURIComponent(e)},Br={ftp:21,file:null,gopher:70,http:80,https:443,ws:80,wss:443},zr=function(e){return S(Br,e.scheme)},Wr=function(e){return""!=e.username||""!=e.password},Kr=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},$r=function(e,t){var n;return 2==e.length&&Sr.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},Yr=function(e){var t;return e.length>1&&$r(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},Gr=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&$r(t[0],!0)||t.pop()},Qr=function(e){return"."===e||"%2e"===e.toLowerCase()},Xr={},Jr={},Zr={},ea={},ta={},na={},ia={},ra={},aa={},oa={},sa={},la={},ca={},ua={},ha={},fa={},da={},pa={},ma={},ga={},va={},ya=function(e,t,n,i){var r,a,o,s,l,c=n||Xr,u=0,h="",f=!1,d=!1,p=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(Or,"")),t=t.replace(jr,""),r=Ui(t);u<=r.length;){switch(a=r[u],c){case Xr:if(!a||!Sr.test(a)){if(n)return"Invalid scheme";c=Zr;continue}h+=a.toLowerCase(),c=Jr;break;case Jr:if(a&&(Er.test(a)||"+"==a||"-"==a||"."==a))h+=a.toLowerCase();else{if(":"!=a){if(n)return"Invalid scheme";h="",c=Zr,u=0;continue}if(n&&(zr(e)!=S(Br,h)||"file"==h&&(Wr(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,n)return void(zr(e)&&Br[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?c=ua:zr(e)&&i&&i.scheme==e.scheme?c=ea:zr(e)?c=ra:"/"==r[u+1]?(c=ta,u++):(e.cannotBeABaseURL=!0,e.path.push(""),c=ma)}break;case Zr:if(!i||i.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(i.cannotBeABaseURL&&"#"==a){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,c=va;break}c="file"==i.scheme?ua:na;continue;case ea:if("/"!=a||"/"!=r[u+1]){c=na;continue}c=aa,u++;break;case ta:if("/"==a){c=oa;break}c=pa;continue;case na:if(e.scheme=i.scheme,a==dr)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query;else if("/"==a||"\\"==a&&zr(e))c=ia;else if("?"==a)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",c=ga;else{if("#"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),c=pa;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=va}break;case ia:if(!zr(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,c=pa;continue}c=oa}else c=aa;break;case ra:if(c=aa,"/"!=a||"/"!=h.charAt(u+1))continue;u++;break;case aa:if("/"!=a&&"\\"!=a){c=oa;continue}break;case oa:if("@"==a){f&&(h="%40"+h),f=!0,o=Ui(h);for(var m=0;m<o.length;m++){var g=o[m];if(":"!=g||p){var v=Vr(g,Hr);p?e.password+=v:e.username+=v}else p=!0}h=""}else if(a==dr||"/"==a||"?"==a||"#"==a||"\\"==a&&zr(e)){if(f&&""==h)return"Invalid authority";u-=Ui(h).length+1,h="",c=sa}else h+=a;break;case sa:case la:if(n&&"file"==e.scheme){c=fa;continue}if(":"!=a||d){if(a==dr||"/"==a||"?"==a||"#"==a||"\\"==a&&zr(e)){if(zr(e)&&""==h)return"Invalid host";if(n&&""==h&&(Wr(e)||null!==e.port))return;if(s=Nr(e,h))return s;if(h="",c=da,n)return;continue}"["==a?d=!0:"]"==a&&(d=!1),h+=a}else{if(""==h)return"Invalid host";if(s=Nr(e,h))return s;if(h="",c=ca,n==la)return}break;case ca:if(!Ar.test(a)){if(a==dr||"/"==a||"?"==a||"#"==a||"\\"==a&&zr(e)||n){if(""!=h){var y=parseInt(h,10);if(y>65535)return"Invalid port";e.port=zr(e)&&y===Br[e.scheme]?null:y,h=""}if(n)return;c=da;continue}return"Invalid port"}h+=a;break;case ua:if(e.scheme="file","/"==a||"\\"==a)c=ha;else{if(!i||"file"!=i.scheme){c=pa;continue}if(a==dr)e.host=i.host,e.path=i.path.slice(),e.query=i.query;else if("?"==a)e.host=i.host,e.path=i.path.slice(),e.query="",c=ga;else{if("#"!=a){Yr(r.slice(u).join(""))||(e.host=i.host,e.path=i.path.slice(),Gr(e)),c=pa;continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=va}}break;case ha:if("/"==a||"\\"==a){c=fa;break}i&&"file"==i.scheme&&!Yr(r.slice(u).join(""))&&($r(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),c=pa;continue;case fa:if(a==dr||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&$r(h))c=pa;else if(""==h){if(e.host="",n)return;c=da}else{if(s=Nr(e,h))return s;if("localhost"==e.host&&(e.host=""),n)return;h="",c=da}continue}h+=a;break;case da:if(zr(e)){if(c=pa,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=dr&&(c=pa,"/"!=a))continue}else e.fragment="",c=va;else e.query="",c=ga;break;case pa:if(a==dr||"/"==a||"\\"==a&&zr(e)||!n&&("?"==a||"#"==a)){if(".."===(l=(l=h).toLowerCase())||"%2e."===l||".%2e"===l||"%2e%2e"===l?(Gr(e),"/"==a||"\\"==a&&zr(e)||e.path.push("")):Qr(h)?"/"==a||"\\"==a&&zr(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&$r(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(a==dr||"?"==a||"#"==a))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",c=ga):"#"==a&&(e.fragment="",c=va)}else h+=Vr(a,Dr);break;case ma:"?"==a?(e.query="",c=ga):"#"==a?(e.fragment="",c=va):a!=dr&&(e.path[0]+=Vr(a,Fr));break;case ga:n||"#"!=a?a!=dr&&("'"==a&&zr(e)?e.query+="%27":e.query+="#"==a?"%23":Vr(a,Fr)):(e.fragment="",c=va);break;case va:a!=dr&&(e.fragment+=Vr(a,qr))}u++}},ba=function(e){var t,n,i=Ci(this,ba,"URL"),r=arguments.length>1?arguments[1]:void 0,a=String(e),o=br(i,{type:"URL"});if(void 0!==r)if(r instanceof ba)t=wr(r);else if(n=ya(t={},String(r)))throw TypeError(n);if(n=ya(o,a,null,t))throw TypeError(n);var s=o.searchParams=new vr,l=yr(s);l.updateSearchParams(o.query),l.updateURL=function(){o.query=String(s)||null},c||(i.href=ka.call(i),i.origin=Ta.call(i),i.protocol=Sa.call(i),i.username=Ea.call(i),i.password=Aa.call(i),i.host=xa.call(i),i.hostname=Pa.call(i),i.port=Ca.call(i),i.pathname=Ia.call(i),i.search=La.call(i),i.searchParams=Ma.call(i),i.hash=Oa.call(i))},wa=ba.prototype,ka=function(){var e=wr(this),t=e.scheme,n=e.username,i=e.password,r=e.host,a=e.port,o=e.path,s=e.query,l=e.fragment,c=t+":";return null!==r?(c+="//",Wr(e)&&(c+=n+(i?":"+i:"")+"@"),c+=Ur(r),null!==a&&(c+=":"+a)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==l&&(c+="#"+l),c},Ta=function(){var e=wr(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&zr(e)?t+"://"+Ur(e.host)+(null!==n?":"+n:""):"null"},Sa=function(){return wr(this).scheme+":"},Ea=function(){return wr(this).username},Aa=function(){return wr(this).password},xa=function(){var e=wr(this),t=e.host,n=e.port;return null===t?"":null===n?Ur(t):Ur(t)+":"+n},Pa=function(){var e=wr(this).host;return null===e?"":Ur(e)},Ca=function(){var e=wr(this).port;return null===e?"":String(e)},Ia=function(){var e=wr(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},La=function(){var e=wr(this).query;return e?"?"+e:""},Ma=function(){return wr(this).searchParams},Oa=function(){var e=wr(this).fragment;return e?"#"+e:""},ja=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(c&&je(wa,{href:ja(ka,function(e){var t=wr(this),n=String(e),i=ya(t,n);if(i)throw TypeError(i);yr(t.searchParams).updateSearchParams(t.query)}),origin:ja(Ta),protocol:ja(Sa,function(e){var t=wr(this);ya(t,String(e)+":",Xr)}),username:ja(Ea,function(e){var t=wr(this),n=Ui(String(e));if(!Kr(t)){t.username="";for(var i=0;i<n.length;i++)t.username+=Vr(n[i],Hr)}}),password:ja(Aa,function(e){var t=wr(this),n=Ui(String(e));if(!Kr(t)){t.password="";for(var i=0;i<n.length;i++)t.password+=Vr(n[i],Hr)}}),host:ja(xa,function(e){var t=wr(this);t.cannotBeABaseURL||ya(t,String(e),sa)}),hostname:ja(Pa,function(e){var t=wr(this);t.cannotBeABaseURL||ya(t,String(e),la)}),port:ja(Ca,function(e){var t=wr(this);Kr(t)||(""==(e=String(e))?t.port=null:ya(t,e,ca))}),pathname:ja(Ia,function(e){var t=wr(this);t.cannotBeABaseURL||(t.path=[],ya(t,e+"",da))}),search:ja(La,function(e){var t=wr(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",ya(t,e,ga)),yr(t.searchParams).updateSearchParams(t.query)}),searchParams:ja(Ma),hash:ja(Oa,function(e){var t=wr(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",ya(t,e,va)):t.fragment=null})}),J(wa,"toJSON",function(){return ka.call(this)},{enumerable:!0}),J(wa,"toString",function(){return ka.call(this)},{enumerable:!0}),gr){var Na=gr.createObjectURL,_a=gr.revokeObjectURL;Na&&J(ba,"createObjectURL",function(e){return Na.apply(gr,arguments)}),_a&&J(ba,"revokeObjectURL",function(e){return _a.apply(gr,arguments)})}function Ra(e){return(Ra="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ua(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fa(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function qa(e,t,n){return t&&Fa(e.prototype,t),n&&Fa(e,n),e}function Da(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ha(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Va(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Xe(ba,"URL"),Ce({global:!0,forced:!Pi,sham:!c},{URL:ba}),function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),n=function(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n},i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},r=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};"URLSearchParams"in e&&"a=1"===new e.URLSearchParams("?a=1").toString()||function(){var r=function e(t){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var n=Ra(t);if("undefined"===n);else if("string"===n)""!==t&&this._fromString(t);else if(t instanceof e){var i=this;t.forEach(function(e,t){i.append(t,e)})}else{if(null===t||"object"!==n)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(t))for(var r=0;r<t.length;r++){var a=t[r];if("[object Array]"!==Object.prototype.toString.call(a)&&2===a.length)throw new TypeError("Expected [string, any] as entry at index "+r+" of URLSearchParams's input");this.append(a[0],a[1])}else for(var o in t)t.hasOwnProperty(o)&&this.append(o,t[o])}},a=r.prototype;a.append=function(e,t){e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]},a.delete=function(e){delete this._entries[e]},a.get=function(e){return e in this._entries?this._entries[e][0]:null},a.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},a.has=function(e){return e in this._entries},a.set=function(e,t){this._entries[e]=[String(t)]},a.forEach=function(e,t){var n;for(var i in this._entries)if(this._entries.hasOwnProperty(i)){n=this._entries[i];for(var r=0;r<n.length;r++)e.call(t,n[r],i,this)}},a.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),n(e)},a.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},a.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),n(e)},t&&(a[Symbol.iterator]=a.entries),a.toString=function(){var e=[];return this.forEach(function(t,n){e.push(i(n)+"="+i(t))}),e.join("&")},e.URLSearchParams=r}();var a=e.URLSearchParams.prototype;"function"!=typeof a.sort&&(a.sort=function(){var e=this,t=[];this.forEach(function(n,i){t.push([i,n]),e._entries||e.delete(i)}),t.sort(function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0}),e._entries&&(e._entries={});for(var n=0;n<t.length;n++)this.append(t[n][0],t[n][1])}),"function"!=typeof a._fromString&&Object.defineProperty(a,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(this._entries)this._entries={};else{var t=[];this.forEach(function(e,n){t.push(n)});for(var n=0;n<t.length;n++)this.delete(t[n])}var i,a=(e=e.replace(/^\?/,"")).split("&");for(n=0;n<a.length;n++)i=a[n].split("="),this.append(r(i[0]),i.length>1?r(i[1]):"")}})}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e),function(e){if(function(){try{var t=new e.URL("b","http://a");return t.pathname="c%20d","http://a/c%20d"===t.href&&t.searchParams}catch(e){return!1}}()||function(){var t=e.URL,n=function(t,n){"string"!=typeof t&&(t=String(t));var i,r=document;if(n&&(void 0===e.location||n!==e.location.href)){(i=(r=document.implementation.createHTMLDocument("")).createElement("base")).href=n,r.head.appendChild(i);try{if(0!==i.href.indexOf(n))throw new Error(i.href)}catch(e){throw new Error("URL unable to set base "+n+" due to "+e)}}var a=r.createElement("a");if(a.href=t,i&&(r.body.appendChild(a),a.href=a.href),":"===a.protocol||!/:/.test(a.href))throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:a});var o=new e.URLSearchParams(this.search),s=!0,l=!0,c=this;["append","delete","set"].forEach(function(e){var t=o[e];o[e]=function(){t.apply(o,arguments),s&&(l=!1,c.search=o.toString(),l=!0)}}),Object.defineProperty(this,"searchParams",{value:o,enumerable:!0});var u=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==u&&(u=this.search,l&&(s=!1,this.searchParams._fromString(this.search),s=!0))}})},i=n.prototype;["hash","host","hostname","port","protocol"].forEach(function(e){!function(e){Object.defineProperty(i,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)}),Object.defineProperty(i,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(i,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol],t=this._anchorElement.port!=e&&""!==this._anchorElement.port;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0}}),n.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},n.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},e.URL=n}(),void 0!==e.location&&!("origin"in e.location)){var t=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:t,enumerable:!0})}catch(n){setInterval(function(){e.location.origin=t()},100)}}}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e);var Ba=We("isConcatSpreadable"),za=!l(function(){var e=[];return e[Ba]=!1,e.concat()[0]!==e}),Wa=kn("concat"),Ka=function(e){if(!w(e))return!1;var t=e[Ba];return void 0!==t?!!t:Le(e)};Ce({target:"Array",proto:!0,forced:!za||!Wa},{concat:function(e){var t,n,i,r,a,o=Me(this),s=tt(o,0),l=0;for(t=-1,i=arguments.length;t<i;t++)if(a=-1===t?o:arguments[t],Ka(a)){if(l+(r=oe(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,l++)n in a&&bn(s,l,a[n])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");bn(s,l++,a)}return s.length=l,s}});var $a=rt.filter;Ce({target:"Array",proto:!0,forced:!kn("filter")},{filter:function(e){return $a(this,e,arguments.length>1?arguments[1]:void 0)}});var Ya=rt.find,Ga=!0;"find"in[]&&Array(1).find(function(){Ga=!1}),Ce({target:"Array",proto:!0,forced:Ga},{find:function(e){return Ya(this,e,arguments.length>1?arguments[1]:void 0)}}),$t("find");var Qa=We("iterator"),Xa=!1;try{var Ja=0,Za={next:function(){return{done:!!Ja++}},return:function(){Xa=!0}};Za[Qa]=function(){return this},Array.from(Za,function(){throw 2})}catch(e){}var eo=function(e,t){if(!t&&!Xa)return!1;var n=!1;try{var i={};i[Qa]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(e){}return n},to=!eo(function(e){Array.from(e)});Ce({target:"Array",stat:!0,forced:to},{from:Ui});var no=he.includes;Ce({target:"Array",proto:!0},{includes:function(e){return no(this,e,arguments.length>1?arguments[1]:void 0)}}),$t("includes");var io=rt.map;Ce({target:"Array",proto:!0,forced:!kn("map")},{map:function(e){return io(this,e,arguments.length>1?arguments[1]:void 0)}});var ro=function(e,t,n){var i,r;return on&&"function"==typeof(i=t.constructor)&&i!==n&&w(r=i.prototype)&&r!==n.prototype&&on(e,r),e},ao="\t\n\v\f\r                　\u2028\u2029\ufeff",oo="["+ao+"]",so=RegExp("^"+oo+oo+"*"),lo=RegExp(oo+oo+"*$"),co=function(e){return function(t){var n=String(y(t));return 1&e&&(n=n.replace(so,"")),2&e&&(n=n.replace(lo,"")),n}},uo={start:co(1),end:co(2),trim:co(3)},ho=ge.f,fo=I.f,po=O.f,mo=uo.trim,go=s.Number,vo=go.prototype,yo="Number"==m(Fe(vo)),bo=function(e){var t,n,i,r,a,o,s,l,c=k(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=mo(c)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(o=(a=c.slice(2)).length,s=0;s<o;s++)if((l=a.charCodeAt(s))<48||l>r)return NaN;return parseInt(a,i)}return+c};if(xe("Number",!go(" 0o1")||!go("0b1")||go("+0x1"))){for(var wo,ko=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof ko&&(yo?l(function(){vo.valueOf.call(n)}):"Number"!=m(n))?ro(new go(bo(t)),n,ko):bo(t)},To=c?ho(go):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),So=0;To.length>So;So++)S(go,wo=To[So])&&!S(ko,wo)&&po(ko,wo,fo(go,wo));ko.prototype=vo,vo.constructor=ko,J(s,"Number",ko)}var Eo=l(function(){Oe(1)});Ce({target:"Object",stat:!0,forced:Eo},{keys:function(e){return Oe(Me(e))}});var Ao=function(e){if(si(e))throw TypeError("The method doesn't accept regular expressions");return e},xo=We("match"),Po=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[xo]=!1,"/./"[e](t)}catch(e){}}return!1};Ce({target:"String",proto:!0,forced:!Po("includes")},{includes:function(e){return!!~String(y(this)).indexOf(Ao(e),arguments.length>1?arguments[1]:void 0)}});var Co=!l(function(){return Object.isExtensible(Object.preventExtensions({}))}),Io=t(function(e){var t=O.f,n=H("meta"),i=0,r=Object.isExtensible||function(){return!0},a=function(e){t(e,n,{value:{objectID:"O"+ ++i,weakData:{}}})},o=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!w(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!S(e,n)){if(!r(e))return"F";if(!t)return"E";a(e)}return e[n].objectID},getWeakData:function(e,t){if(!S(e,n)){if(!r(e))return!0;if(!t)return!1;a(e)}return e[n].weakData},onFreeze:function(e){return Co&&o.REQUIRED&&r(e)&&!S(e,n)&&a(e),e}};z[n]=!0}),Lo=(Io.REQUIRED,Io.fastKey,Io.getWeakData,Io.onFreeze,t(function(e){var t=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,n,i,r,a){var o,s,l,c,u,h,f=Ze(n,i,r?2:1);if(a)o=e;else{if("function"!=typeof(s=Ri(e)))throw TypeError("Target is not iterable");if(Ni(s)){for(l=0,c=oe(e.length);c>l;l++)if((u=r?f(L(h=e[l])[0],h[1]):f(e[l]))&&u instanceof t)return u;return new t(!1)}o=s.call(e)}for(;!(h=o.next()).done;)if((u=Mi(o,f,h.value,r))&&u instanceof t)return u;return new t(!1)}).stop=function(e){return new t(!0,e)}})),Mo=Io.getWeakData,Oo=X.set,jo=X.getterFor,No=rt.find,_o=rt.findIndex,Ro=0,Uo=function(e){return e.frozen||(e.frozen=new Fo)},Fo=function(){this.entries=[]},qo=function(e,t){return No(e.entries,function(e){return e[0]===t})};Fo.prototype={get:function(e){var t=qo(this,e);if(t)return t[1]},has:function(e){return!!qo(this,e)},set:function(e,t){var n=qo(this,e);n?n[1]=t:this.entries.push([e,t])},delete:function(e){var t=_o(this.entries,function(t){return t[0]===e});return~t&&this.entries.splice(t,1),!!~t}};var Do={getConstructor:function(e,t,n,i){var r=e(function(e,a){Ci(e,r,t),Oo(e,{type:t,id:Ro++,frozen:void 0}),null!=a&&Lo(a,e[i],e,n)}),a=jo(t),o=function(e,t,n){var i=a(e),r=Mo(L(t),!0);return!0===r?Uo(i).set(t,n):r[i.id]=n,e};return Ki(r.prototype,{delete:function(e){var t=a(this);if(!w(e))return!1;var n=Mo(e);return!0===n?Uo(t).delete(e):n&&S(n,t.id)&&delete n[t.id]},has:function(e){var t=a(this);if(!w(e))return!1;var n=Mo(e);return!0===n?Uo(t).has(e):n&&S(n,t.id)}}),Ki(r.prototype,n?{get:function(e){var t=a(this);if(w(e)){var n=Mo(e);return!0===n?Uo(t).get(e):n?n[t.id]:void 0}},set:function(e,t){return o(this,e,t)}}:{add:function(e){return o(this,e,!0)}}),r}};t(function(e){var t,n=X.enforce,i=!s.ActiveXObject&&"ActiveXObject"in s,r=Object.isExtensible,a=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},o=e.exports=function(e,t,n,i,r){var a=s[e],o=a&&a.prototype,c=a,u=i?"set":"add",h={},f=function(e){var t=o[e];J(o,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(r&&!w(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return r&&!w(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(r&&!w(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(xe(e,"function"!=typeof a||!(r||o.forEach&&!l(function(){(new a).entries().next()}))))c=n.getConstructor(t,e,i,u),Io.REQUIRED=!0;else if(xe(e,!0)){var d=new c,p=d[u](r?{}:-0,1)!=d,m=l(function(){d.has(1)}),g=eo(function(e){new a(e)}),v=!r&&l(function(){for(var e=new a,t=5;t--;)e[u](t,t);return!e.has(-0)});g||((c=t(function(t,n){Ci(t,c,e);var r=ro(new a,t,c);return null!=n&&Lo(n,r[u],r,i),r})).prototype=o,o.constructor=c),(m||v)&&(f("delete"),f("has"),i&&f("get")),(v||p)&&f(u),r&&o.clear&&delete o.clear}return h[e]=c,Ce({global:!0,forced:c!=a},h),Xe(c,e),r||n.setStrong(c,e,i),c}("WeakMap",a,Do,!0,!0);if(F&&i){t=Do.getConstructor(a,"WeakMap",!0),Io.REQUIRED=!0;var c=o.prototype,u=c.delete,h=c.has,f=c.get,d=c.set;Ki(c,{delete:function(e){if(w(e)&&!r(e)){var i=n(this);return i.frozen||(i.frozen=new t),u.call(this,e)||i.frozen.delete(e)}return u.call(this,e)},has:function(e){if(w(e)&&!r(e)){var i=n(this);return i.frozen||(i.frozen=new t),h.call(this,e)||i.frozen.has(e)}return h.call(this,e)},get:function(e){if(w(e)&&!r(e)){var i=n(this);return i.frozen||(i.frozen=new t),h.call(this,e)?f.call(this,e):i.frozen.get(e)}return f.call(this,e)},set:function(e,i){if(w(e)&&!r(e)){var a=n(this);a.frozen||(a.frozen=new t),h.call(this,e)?d.call(this,e,i):a.frozen.set(e,i)}else d.call(this,e,i);return this}})}});Ce({target:"Object",stat:!0,forced:Object.assign!==Li},{assign:Li});var Ho=uo.trim;Ce({target:"String",proto:!0,forced:function(e){return l(function(){return!!ao[e]()||"​᠎"!="​᠎"[e]()||ao[e].name!==e})}("trim")},{trim:function(){return Ho(this)}});var Vo="".repeat||function(e){var t=String(y(this)),n="",i=re(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n},Bo=1..toFixed,zo=Math.floor,Wo=function(e,t,n){return 0===t?n:t%2==1?Wo(e,t-1,n*e):Wo(e*e,t/2,n)},Ko=Bo&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l(function(){Bo.call({})});Ce({target:"Number",proto:!0,forced:Ko},{toFixed:function(e){var t,n,i,r,a=function(e){if("number"!=typeof e&&"Number"!=m(e))throw TypeError("Incorrect invocation");return+e}(this),o=re(e),s=[0,0,0,0,0,0],l="",c="0",u=function(e,t){for(var n=-1,i=t;++n<6;)i+=e*s[n],s[n]=i%1e7,i=zo(i/1e7)},h=function(e){for(var t=6,n=0;--t>=0;)n+=s[t],s[t]=zo(n/e),n=n%e*1e7},f=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==s[e]){var n=String(s[e]);t=""===t?n:t+Vo.call("0",7-n.length)+n}return t};if(o<0||o>20)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(l="-",a=-a),a>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(a*Wo(2,69,1))-69)<0?a*Wo(2,-t,1):a/Wo(2,t,1),n*=4503599627370496,(t=52-t)>0){for(u(0,n),i=o;i>=7;)u(1e7,0),i-=7;for(u(Wo(10,i,1),0),i=t-1;i>=23;)h(1<<23),i-=23;h(1<<i),u(1,1),h(2),c=f()}else u(0,n),u(1<<-t,0),c=f()+Vo.call("0",o);return c=o>0?l+((r=c.length)<=o?"0."+Vo.call("0",o-r)+c:c.slice(0,r-o)+"."+c.slice(r-o)):l+c}});var $o=f.f,Yo=function(e){return function(t){for(var n,i=b(t),r=Oe(i),a=r.length,o=0,s=[];a>o;)n=r[o++],c&&!$o.call(i,n)||s.push(e?[n,i[n]]:i[n]);return s}},Go={entries:Yo(!0),values:Yo(!1)},Qo=Go.entries;Ce({target:"Object",stat:!0},{entries:function(e){return Qo(e)}});var Xo=Go.values;Ce({target:"Object",stat:!0},{values:function(e){return Xo(e)}});var Jo={addCSS:!0,thumbWidth:15,watch:!0};Ce({target:"Number",stat:!0},{isNaN:function(e){return e!=e}});var Zo=function(e){return null!=e?e.constructor:null},es=function(e,t){return Boolean(e&&t&&e instanceof t)},ts=function(e){return null==e},ns=function(e){return Zo(e)===Object},is=function(e){return Zo(e)===String},rs=function(e){return Array.isArray(e)},as=function(e){return es(e,NodeList)},os={nullOrUndefined:ts,object:ns,number:function(e){return Zo(e)===Number&&!Number.isNaN(e)},string:is,boolean:function(e){return Zo(e)===Boolean},function:function(e){return Zo(e)===Function},array:rs,nodeList:as,element:function(e){return es(e,Element)},event:function(e){return es(e,Event)},empty:function(e){return ts(e)||(is(e)||rs(e)||as(e))&&!e.length||ns(e)&&!Object.keys(e).length}};function ss(e,t){if(t<1){var n=(i="".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))?Math.max(0,(i[1]?i[1].length:0)-(i[2]?+i[2]:0)):0;return parseFloat(e.toFixed(n))}var i;return Math.round(e/t)*t}Qn("match",1,function(e,t,n){return[function(t){var n=y(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var r=L(e),a=String(this);if(!r.global)return Zn(r,a);var o=r.unicode;r.lastIndex=0;for(var s,l=[],c=0;null!==(s=Zn(r,a));){var u=String(s[0]);l[c]=u,""===u&&(r.lastIndex=Jn(a,oe(r.lastIndex),o)),c++}return 0===c?null:l}]});var ls,cs,us,hs=function(){function e(t,n){Ua(this,e),os.element(t)?this.element=t:os.string(t)&&(this.element=document.querySelector(t)),os.element(this.element)&&os.empty(this.element.rangeTouch)&&(this.config=Object.assign({},Jo,n),this.init())}return qa(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[n](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(t){if(!e.enabled||!os.event(t))return null;var n,i=t.target,r=t.changedTouches[0],a=parseFloat(i.getAttribute("min"))||0,o=parseFloat(i.getAttribute("max"))||100,s=parseFloat(i.getAttribute("step"))||1,l=o-a,c=i.getBoundingClientRect(),u=100/c.width*(this.config.thumbWidth/2)/100;return(n=100/c.width*(r.clientX-c.left))<0?n=0:n>100&&(n=100),n<50?n-=(100-2*n)*u:n>50&&(n+=2*(n-50)*u),a+ss(l*(n/100),s)}},{key:"set",value:function(t){e.enabled&&os.event(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;if(os.empty(t)||os.string(t)?i=Array.from(document.querySelectorAll(os.string(t)?t:'input[type="range"]')):os.element(t)?i=[t]:os.nodeList(t)?i=Array.from(t):os.array(t)&&(i=t.filter(os.element)),os.empty(i))return null;var r=Object.assign({},Jo,n);os.string(t)&&r.watch&&new MutationObserver(function(n){Array.from(n).forEach(function(n){Array.from(n.addedNodes).forEach(function(n){if(os.element(n)&&function(){return Array.from(document.querySelectorAll(i)).includes(this)}.call(n,i=t)){var i;new e(n,r)}})})}).observe(document.body,{childList:!0,subtree:!0});return i.map(function(t){return new e(t,n)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}(),fs=We("species"),ds=function(e){var t=te(e),n=O.f;c&&t&&!t[fs]&&n(t,fs,{configurable:!0,get:function(){return this}})},ps=s.location,ms=s.setImmediate,gs=s.clearImmediate,vs=s.process,ys=s.MessageChannel,bs=s.Dispatch,ws=0,ks={},Ts=function(e){if(ks.hasOwnProperty(e)){var t=ks[e];delete ks[e],t()}},Ss=function(e){return function(){Ts(e)}},Es=function(e){Ts(e.data)},As=function(e){s.postMessage(e+"",ps.protocol+"//"+ps.host)};ms&&gs||(ms=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return ks[++ws]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},ls(ws),ws},gs=function(e){delete ks[e]},"process"==m(vs)?ls=function(e){vs.nextTick(Ss(e))}:bs&&bs.now?ls=function(e){bs.now(Ss(e))}:ys?(us=(cs=new ys).port2,cs.port1.onmessage=Es,ls=Ze(us.postMessage,us,1)):!s.addEventListener||"function"!=typeof postMessage||s.importScripts||l(As)?ls="onreadystatechange"in x("script")?function(e){Ne.appendChild(x("script")).onreadystatechange=function(){Ne.removeChild(this),Ts(e)}}:function(e){setTimeout(Ss(e),0)}:(ls=As,s.addEventListener("message",Es,!1)));var xs,Ps,Cs,Is,Ls,Ms,Os,js={set:ms,clear:gs},Ns=te("navigator","userAgent")||"",_s=I.f,Rs=js.set,Us=s.MutationObserver||s.WebKitMutationObserver,Fs=s.process,qs=s.Promise,Ds="process"==m(Fs),Hs=_s(s,"queueMicrotask"),Vs=Hs&&Hs.value;Vs||(xs=function(){var e,t;for(Ds&&(e=Fs.domain)&&e.exit();Ps;){t=Ps.fn,Ps=Ps.next;try{t()}catch(e){throw Ps?Is():Cs=void 0,e}}Cs=void 0,e&&e.enter()},Ds?Is=function(){Fs.nextTick(xs)}:Us&&!/(iphone|ipod|ipad).*applewebkit/i.test(Ns)?(Ls=!0,Ms=document.createTextNode(""),new Us(xs).observe(Ms,{characterData:!0}),Is=function(){Ms.data=Ls=!Ls}):qs&&qs.resolve?(Os=qs.resolve(void 0),Is=function(){Os.then(xs)}):Is=function(){Rs.call(s,xs)});var Bs,zs,Ws,Ks=Vs||function(e){var t={fn:e,next:void 0};Cs&&(Cs.next=t),Ps||(Ps=t,Is()),Cs=t},$s=function(e){var t,n;this.promise=new e(function(e,i){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=i}),this.resolve=Je(t),this.reject=Je(n)},Ys={f:function(e){return new $s(e)}},Gs=function(e,t){if(L(e),w(t)&&t.constructor===e)return t;var n=Ys.f(e);return(0,n.resolve)(t),n.promise},Qs=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},Xs=js.set,Js=We("species"),Zs="Promise",el=X.get,tl=X.set,nl=X.getterFor(Zs),il=s.Promise,rl=s.TypeError,al=s.document,ol=s.process,sl=s.fetch,ll=ol&&ol.versions,cl=ll&&ll.v8||"",ul=Ys.f,hl=ul,fl="process"==m(ol),dl=!!(al&&al.createEvent&&s.dispatchEvent),pl=xe(Zs,function(){var e=il.resolve(1),t=function(){},n=(e.constructor={})[Js]=function(e){e(t,t)};return!((fl||"function"==typeof PromiseRejectionEvent)&&e.then(t)instanceof n&&0!==cl.indexOf("6.6")&&-1===Ns.indexOf("Chrome/66"))}),ml=pl||!eo(function(e){il.all(e).catch(function(){})}),gl=function(e){var t;return!(!w(e)||"function"!=typeof(t=e.then))&&t},vl=function(e,t,n){if(!t.notified){t.notified=!0;var i=t.reactions;Ks(function(){for(var r=t.value,a=1==t.state,o=0;i.length>o;){var s,l,c,u=i[o++],h=a?u.ok:u.fail,f=u.resolve,d=u.reject,p=u.domain;try{h?(a||(2===t.rejection&&kl(e,t),t.rejection=1),!0===h?s=r:(p&&p.enter(),s=h(r),p&&(p.exit(),c=!0)),s===u.promise?d(rl("Promise-chain cycle")):(l=gl(s))?l.call(s,f,d):f(s)):d(r)}catch(e){p&&!c&&p.exit(),d(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&bl(e,t)})}},yl=function(e,t,n){var i,r;dl?((i=al.createEvent("Event")).promise=t,i.reason=n,i.initEvent(e,!1,!0),s.dispatchEvent(i)):i={promise:t,reason:n},(r=s["on"+e])?r(i):"unhandledrejection"===e&&function(e,t){var n=s.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}("Unhandled promise rejection",n)},bl=function(e,t){Xs.call(s,function(){var n,i=t.value;if(wl(t)&&(n=Qs(function(){fl?ol.emit("unhandledRejection",i,e):yl("unhandledrejection",e,i)}),t.rejection=fl||wl(t)?2:1,n.error))throw n.value})},wl=function(e){return 1!==e.rejection&&!e.parent},kl=function(e,t){Xs.call(s,function(){fl?ol.emit("rejectionHandled",e):yl("rejectionhandled",e,t.value)})},Tl=function(e,t,n,i){return function(r){e(t,n,r,i)}},Sl=function(e,t,n,i){t.done||(t.done=!0,i&&(t=i),t.value=n,t.state=2,vl(e,t,!0))},El=function(e,t,n,i){if(!t.done){t.done=!0,i&&(t=i);try{if(e===n)throw rl("Promise can't be resolved itself");var r=gl(n);r?Ks(function(){var i={done:!1};try{r.call(n,Tl(El,e,i,t),Tl(Sl,e,i,t))}catch(n){Sl(e,i,n,t)}}):(t.value=n,t.state=1,vl(e,t,!1))}catch(n){Sl(e,{done:!1},n,t)}}};pl&&(il=function(e){Ci(this,il,Zs),Je(e),Bs.call(this);var t=el(this);try{e(Tl(El,this,t),Tl(Sl,this,t))}catch(e){Sl(this,t,e)}},(Bs=function(e){tl(this,{type:Zs,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=Ki(il.prototype,{then:function(e,t){var n=nl(this),i=ul(ci(this,il));return i.ok="function"!=typeof e||e,i.fail="function"==typeof t&&t,i.domain=fl?ol.domain:void 0,n.parent=!0,n.reactions.push(i),0!=n.state&&vl(this,n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),zs=function(){var e=new Bs,t=el(e);this.promise=e,this.resolve=Tl(El,e,t),this.reject=Tl(Sl,e,t)},Ys.f=ul=function(e){return e===il||e===Ws?new zs(e):hl(e)},"function"==typeof sl&&Ce({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return Gs(il,sl.apply(s,arguments))}})),Ce({global:!0,wrap:!0,forced:pl},{Promise:il}),Xe(il,Zs,!1),ds(Zs),Ws=Z.Promise,Ce({target:Zs,stat:!0,forced:pl},{reject:function(e){var t=ul(this);return t.reject.call(void 0,e),t.promise}}),Ce({target:Zs,stat:!0,forced:pl},{resolve:function(e){return Gs(this,e)}}),Ce({target:Zs,stat:!0,forced:ml},{all:function(e){var t=this,n=ul(t),i=n.resolve,r=n.reject,a=Qs(function(){var n=Je(t.resolve),a=[],o=0,s=1;Lo(e,function(e){var l=o++,c=!1;a.push(void 0),s++,n.call(t,e).then(function(e){c||(c=!0,a[l]=e,--s||i(a))},r)}),--s||i(a)});return a.error&&r(a.value),n.promise},race:function(e){var t=this,n=ul(t),i=n.reject,r=Qs(function(){var r=Je(t.resolve);Lo(e,function(e){r.call(t,e).then(n.resolve,i)})});return r.error&&i(r.value),n.promise}});var Al="".startsWith,xl=Math.min;Ce({target:"String",proto:!0,forced:!Po("startsWith")},{startsWith:function(e){var t=String(y(this));Ao(e);var n=oe(xl(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return Al?Al.call(t,i,n):t.slice(n,n+i.length)===i}});var Pl,Cl,Il,Ll=function(e){return null!=e?e.constructor:null},Ml=function(e,t){return Boolean(e&&t&&e instanceof t)},Ol=function(e){return null==e},jl=function(e){return Ll(e)===Object},Nl=function(e){return Ll(e)===String},_l=function(e){return Array.isArray(e)},Rl=function(e){return Ml(e,NodeList)},Ul=function(e){return Ol(e)||(Nl(e)||_l(e)||Rl(e))&&!e.length||jl(e)&&!Object.keys(e).length},Fl={nullOrUndefined:Ol,object:jl,number:function(e){return Ll(e)===Number&&!Number.isNaN(e)},string:Nl,boolean:function(e){return Ll(e)===Boolean},function:function(e){return Ll(e)===Function},array:_l,weakMap:function(e){return Ml(e,WeakMap)},nodeList:Rl,element:function(e){return Ml(e,Element)},textNode:function(e){return Ll(e)===Text},event:function(e){return Ml(e,Event)},keyboardEvent:function(e){return Ml(e,KeyboardEvent)},cue:function(e){return Ml(e,window.TextTrackCue)||Ml(e,window.VTTCue)},track:function(e){return Ml(e,TextTrack)||!Ol(e)&&Nl(e.kind)},promise:function(e){return Ml(e,Promise)},url:function(e){if(Ml(e,window.URL))return!0;if(!Nl(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!Ul(new URL(t).hostname)}catch(e){return!1}},empty:Ul},ql=(Pl=document.createElement("span"),Cl={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},Il=Object.keys(Cl).find(function(e){return void 0!==Pl.style[e]}),!!Fl.string(Il)&&Cl[Il]);function Dl(e,t){setTimeout(function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}},t)}var Hl={isIE:!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)},Vl=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}();function Bl(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(e&&"addEventListener"in e&&!Fl.empty(t)&&Fl.function(n)){var s=t.split(" "),l=o;Vl&&(l={passive:a,capture:o}),s.forEach(function(t){i&&i.eventListeners&&r&&i.eventListeners.push({element:e,type:t,callback:n,options:l}),e[r?"addEventListener":"removeEventListener"](t,n,l)})}}function zl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Bl.call(this,e,t,n,!0,i,r)}function Wl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Bl.call(this,e,t,n,!1,i,r)}function Kl(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Bl.call(this,e,n,function o(){Wl(e,n,o,r,a);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];i.apply(t,l)},!0,r,a)}function $l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Fl.element(e)&&!Fl.empty(t)){var r=new CustomEvent(t,{bubbles:n,detail:Object.assign({},i,{plyr:this})});e.dispatchEvent(r)}}function Yl(e,t){return t.split(".").reduce(function(e,t){return e&&e[t]},e)}function Gl(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!n.length)return e;var r=n.shift();return Fl.object(r)?(Object.keys(r).forEach(function(t){Fl.object(r[t])?(Object.keys(e).includes(t)||Object.assign(e,Da({},t,{})),Gl(e[t],r[t])):Object.assign(e,Da({},t,r[t]))}),Gl.apply(void 0,[e].concat(n))):e}function Ql(e,t){var n=e.length?e:[e];Array.from(n).reverse().forEach(function(e,n){var i=n>0?t.cloneNode(!0):t,r=e.parentNode,a=e.nextSibling;i.appendChild(e),a?r.insertBefore(i,a):r.appendChild(i)})}function Xl(e,t){Fl.element(e)&&!Fl.empty(t)&&Object.entries(t).filter(function(e){var t=Ha(e,2)[1];return!Fl.nullOrUndefined(t)}).forEach(function(t){var n=Ha(t,2),i=n[0],r=n[1];return e.setAttribute(i,r)})}function Jl(e,t,n){var i=document.createElement(e);return Fl.object(t)&&Xl(i,t),Fl.string(n)&&(i.innerText=n),i}function Zl(e,t,n,i){Fl.element(t)&&t.appendChild(Jl(e,n,i))}function ec(e){Fl.nodeList(e)||Fl.array(e)?Array.from(e).forEach(ec):Fl.element(e)&&Fl.element(e.parentNode)&&e.parentNode.removeChild(e)}function tc(e){if(Fl.element(e))for(var t=e.childNodes.length;t>0;)e.removeChild(e.lastChild),t-=1}function nc(e,t){return Fl.element(t)&&Fl.element(t.parentNode)&&Fl.element(e)?(t.parentNode.replaceChild(e,t),e):null}function ic(e,t){if(!Fl.string(e)||Fl.empty(e))return{};var n={},i=Gl({},t);return e.split(",").forEach(function(e){var t=e.trim(),r=t.replace(".",""),a=t.replace(/[[\]]/g,"").split("="),o=Ha(a,1)[0],s=a.length>1?a[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":Fl.string(i.class)?n.class="".concat(i.class," ").concat(r):n.class=r;break;case"#":n.id=t.replace("#","");break;case"[":n[o]=s}}),Gl(i,n)}function rc(e,t){if(Fl.element(e)){var n=t;Fl.boolean(n)||(n=!e.hidden),e.hidden=n}}function ac(e,t,n){if(Fl.nodeList(e))return Array.from(e).map(function(e){return ac(e,t,n)});if(Fl.element(e)){var i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}function oc(e,t){return Fl.element(e)&&e.classList.contains(t)}function sc(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function lc(e){return this.elements.container.querySelectorAll(e)}function cc(e){return this.elements.container.querySelector(e)}function uc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Fl.element(e)&&(e.focus({preventScroll:!0}),t&&ac(e,this.config.classNames.tabFocus))}var hc,fc={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},dc={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,n){var i=Hl.isIPhone&&n&&dc.playsinline,r=dc[e]||"html5"!==t;return{api:r,ui:r&&dc.rangeInput&&("video"!==e||!Hl.isIPhone||i)}},pip:!(Hl.isIPhone||!Fl.function(Jl("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||Jl("video").disablePictureInPicture)),airplay:Fl.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(Fl.empty(e))return!1;var t=Ha(e.split("/"),1)[0],n=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(fc).includes(n)&&(n+='; codecs="'.concat(fc[e],'"'));try{return Boolean(n&&this.media.canPlayType(n).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(hc=document.createElement("input"),hc.type="range","range"===hc.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==ql,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches};function pc(e){return!!(Fl.array(e)||Fl.string(e)&&e.includes(":"))&&(Fl.array(e)?e:e.split(":")).map(Number).every(Fl.number)}function mc(e){if(!Fl.array(e)||!e.every(Fl.number))return null;var t=Ha(e,2),n=t[0],i=t[1],r=function e(t,n){return 0===n?t:e(n,t%n)}(n,i);return[n/r,i/r]}function gc(e){var t=function(e){return pc(e)?e.split(":").map(Number):null},n=t(e);if(null===n&&(n=t(this.config.ratio)),null===n&&!Fl.empty(this.embed)&&Fl.array(this.embed.ratio)&&(n=this.embed.ratio),null===n&&this.isHTML5){var i=this.media;n=mc([i.videoWidth,i.videoHeight])}return n}function vc(e){if(!this.isVideo)return{};var t=gc.call(this,e),n=Ha(Fl.array(t)?t:[0,0],2),i=100/n[0]*n[1];if(this.elements.wrapper.style.paddingBottom="".concat(i,"%"),this.isVimeo&&this.supported.ui){var r=(240-i)/4.8;this.media.style.transform="translateY(-".concat(r,"%)")}else this.isHTML5&&this.elements.wrapper.classList.toggle(this.config.classNames.videoFixedRatio,null!==t);return{padding:i,ratio:t}}var yc={getSources:function(){var e=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter(function(t){var n=t.getAttribute("type");return!!Fl.empty(n)||dc.mime.call(e,n)}):[]},getQualityOptions:function(){return yc.getSources.call(this).map(function(e){return Number(e.getAttribute("size"))}).filter(Boolean)},extend:function(){if(this.isHTML5){var e=this;Fl.empty(this.config.ratio)||vc.call(e),Object.defineProperty(e.media,"quality",{get:function(){var t=yc.getSources.call(e).find(function(t){return t.getAttribute("src")===e.source});return t&&Number(t.getAttribute("size"))},set:function(t){var n=yc.getSources.call(e).find(function(e){return Number(e.getAttribute("size"))===t});if(n){var i=e.media,r=i.currentTime,a=i.paused,o=i.preload,s=i.readyState;e.media.src=n.getAttribute("src"),("none"!==o||s)&&(e.once("loadedmetadata",function(){e.currentTime=r,a||e.play()}),e.media.load()),$l.call(e,e.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:function(){this.isHTML5&&(ec(yc.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function bc(e){return Fl.array(e)?e.filter(function(t,n){return e.indexOf(t)===n}):e}var wc=O.f,kc=ge.f,Tc=We("match"),Sc=s.RegExp,Ec=Sc.prototype,Ac=/a/g,xc=/a/g,Pc=new Sc(Ac)!==Ac;if(c&&xe("RegExp",!Pc||l(function(){return xc[Tc]=!1,Sc(Ac)!=Ac||Sc(xc)==xc||"/a/i"!=Sc(Ac,"i")}))){for(var Cc=function(e,t){var n=this instanceof Cc,i=si(e),r=void 0===t;return!n&&i&&e.constructor===Cc&&r?e:ro(Pc?new Sc(i&&!r?e.source:e,t):Sc((i=e instanceof Cc)?e.source:e,i&&r?Mn.call(e):t),n?this:Ec,Cc)},Ic=function(e){e in Cc||wc(Cc,e,{configurable:!0,get:function(){return Sc[e]},set:function(t){Sc[e]=t}})},Lc=kc(Sc),Mc=0;Lc.length>Mc;)Ic(Lc[Mc++]);Ec.constructor=Cc,Cc.prototype=Ec,J(s,"RegExp",Cc)}function Oc(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return Fl.empty(e)?e:e.toString().replace(/{(\d+)}/g,function(e,t){return n[t].toString()})}function jc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1"),"g"),n.toString())}function Nc(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function _c(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return(e=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return e=jc(e,"-"," "),e=jc(e,"_"," "),jc(e=Nc(e)," ","")}(e)).charAt(0).toLowerCase()+e.slice(1)}function Rc(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}ds("RegExp");var Uc={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},Fc=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Fl.empty(e)||Fl.empty(t))return"";var n=Yl(t.i18n,e);if(Fl.empty(n))return Object.keys(Uc).includes(e)?Uc[e]:"";var i={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(i).forEach(function(e){var t=Ha(e,2),i=t[0],r=t[1];n=jc(n,i,r)}),n},qc=function(){function e(t){Ua(this,e),this.enabled=t.config.storage.enabled,this.key=t.config.storage.key}return qa(e,[{key:"get",value:function(t){if(!e.supported||!this.enabled)return null;var n=window.localStorage.getItem(this.key);if(Fl.empty(n))return null;var i=JSON.parse(n);return Fl.string(t)&&t.length?i[t]:i}},{key:"set",value:function(t){if(e.supported&&this.enabled&&Fl.object(t)){var n=this.get();Fl.empty(n)&&(n={}),Gl(n,t),window.localStorage.setItem(this.key,JSON.stringify(n))}}}],[{key:"supported",get:function(){try{if(!("localStorage"in window))return!1;return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(e){return!1}}}]),e}();function Dc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise(function(n,i){try{var r=new XMLHttpRequest;if(!("withCredentials"in r))return;r.addEventListener("load",function(){if("text"===t)try{n(JSON.parse(r.responseText))}catch(e){n(r.responseText)}else n(r.response)}),r.addEventListener("error",function(){throw new Error(r.status)}),r.open("GET",e,!0),r.responseType=t,r.send()}catch(e){i(e)}})}function Hc(e,t){if(Fl.string(e)){var n=Fl.string(t),i=function(){return null!==document.getElementById(t)},r=function(e,t){e.innerHTML=t,n&&i()||document.body.insertAdjacentElement("afterbegin",e)};if(!n||!i()){var a=qc.supported,o=document.createElement("div");if(o.setAttribute("hidden",""),n&&o.setAttribute("id",t),a){var s=window.localStorage.getItem("".concat("cache","-").concat(t));if(null!==s){var l=JSON.parse(s);r(o,l.content)}}Dc(e).then(function(e){Fl.empty(e)||(a&&window.localStorage.setItem("".concat("cache","-").concat(t),JSON.stringify({content:e})),r(o,e))}).catch(function(){})}}}var Vc=Math.ceil,Bc=Math.floor;Ce({target:"Math",stat:!0},{trunc:function(e){return(e>0?Bc:Vc)(e)}});var zc=function(e){return Math.trunc(e/60/60%60,10)},Wc=function(e){return Math.trunc(e/60%60,10)},Kc=function(e){return Math.trunc(e%60,10)};function $c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!Fl.number(e))return $c(null,t,n);var i=function(e){return"0".concat(e).slice(-2)},r=zc(e),a=Wc(e),o=Kc(e);return r=t||r>0?"".concat(r,":"):"","".concat(n&&e>0?"-":"").concat(r).concat(i(a),":").concat(i(o))}var Yc={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||Hl.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=cc.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:lc.call(this,this.config.selectors.buttons.play),pause:cc.call(this,this.config.selectors.buttons.pause),restart:cc.call(this,this.config.selectors.buttons.restart),rewind:cc.call(this,this.config.selectors.buttons.rewind),fastForward:cc.call(this,this.config.selectors.buttons.fastForward),mute:cc.call(this,this.config.selectors.buttons.mute),pip:cc.call(this,this.config.selectors.buttons.pip),airplay:cc.call(this,this.config.selectors.buttons.airplay),settings:cc.call(this,this.config.selectors.buttons.settings),captions:cc.call(this,this.config.selectors.buttons.captions),fullscreen:cc.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=cc.call(this,this.config.selectors.progress),this.elements.inputs={seek:cc.call(this,this.config.selectors.inputs.seek),volume:cc.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:cc.call(this,this.config.selectors.display.buffer),currentTime:cc.call(this,this.config.selectors.display.currentTime),duration:cc.call(this,this.config.selectors.display.duration)},Fl.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var n=Yc.getIconUrl.call(this),i="".concat(n.cors?"":n.url,"#").concat(this.config.iconPrefix),r=document.createElementNS("http://www.w3.org/2000/svg","svg");Xl(r,Gl(t,{role:"presentation",focusable:"false"}));var a=document.createElementNS("http://www.w3.org/2000/svg","use"),o="".concat(i,"-").concat(e);return"href"in a&&a.setAttributeNS("http://www.w3.org/1999/xlink","href",o),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o),r.appendChild(a),r},createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Fc(e,this.config);return Jl("span",Object.assign({},t,{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")}),n)},createBadge:function(e){if(Fl.empty(e))return null;var t=Jl("span",{class:this.config.classNames.menu.value});return t.appendChild(Jl("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var n=this,i=Gl({},t),r=_c(e),a={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(function(e){Object.keys(i).includes(e)&&(a[e]=i[e],delete i[e])}),"button"!==a.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").some(function(e){return e===n.config.classNames.control})||Gl(i,{class:"".concat(i.class," ").concat(this.config.classNames.control)}):i.class=this.config.classNames.control,e){case"play":a.toggle=!0,a.label="play",a.labelPressed="pause",a.icon="play",a.iconPressed="pause";break;case"mute":a.toggle=!0,a.label="mute",a.labelPressed="unmute",a.icon="volume",a.iconPressed="muted";break;case"captions":a.toggle=!0,a.label="enableCaptions",a.labelPressed="disableCaptions",a.icon="captions-off",a.iconPressed="captions-on";break;case"fullscreen":a.toggle=!0,a.label="enterFullscreen",a.labelPressed="exitFullscreen",a.icon="enter-fullscreen",a.iconPressed="exit-fullscreen";break;case"play-large":i.class+=" ".concat(this.config.classNames.control,"--overlaid"),r="play",a.label="play",a.icon="play";break;default:Fl.empty(a.label)&&(a.label=r),Fl.empty(a.icon)&&(a.icon=e)}var o=Jl(a.element);return a.toggle?(o.appendChild(Yc.createIcon.call(this,a.iconPressed,{class:"icon--pressed"})),o.appendChild(Yc.createIcon.call(this,a.icon,{class:"icon--not-pressed"})),o.appendChild(Yc.createLabel.call(this,a.labelPressed,{class:"label--pressed"})),o.appendChild(Yc.createLabel.call(this,a.label,{class:"label--not-pressed"}))):(o.appendChild(Yc.createIcon.call(this,a.icon)),o.appendChild(Yc.createLabel.call(this,a.label))),Gl(i,ic(this.config.selectors.buttons[r],i)),Xl(o,i),"play"===r?(Fl.array(this.elements.buttons[r])||(this.elements.buttons[r]=[]),this.elements.buttons[r].push(o)):this.elements.buttons[r]=o,o},createRange:function(e,t){var n=Jl("input",Gl(ic(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":Fc(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=n,Yc.updateRangeFill.call(this,n),hs.setup(n),n},createProgress:function(e,t){var n=Jl("progress",Gl(ic(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){n.appendChild(Jl("span",null,"0"));var i={played:"played",buffer:"buffered"}[e],r=i?Fc(i,this.config):"";n.innerText="% ".concat(r.toLowerCase())}return this.elements.display[e]=n,n},createTime:function(e,t){var n=ic(this.config.selectors.display[e],t),i=Jl("div",Gl(n,{class:"".concat(n.class?n.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":Fc(e,this.config)}),"00:00");return this.elements.display[e]=i,i},bindMenuItemShortcuts:function(e,t){var n=this;zl(e,"keydown keyup",function(i){if([32,38,39,40].includes(i.which)&&(i.preventDefault(),i.stopPropagation(),"keydown"!==i.type)){var r,a=sc(e,'[role="menuitemradio"]');if(!a&&[32,39].includes(i.which))Yc.showMenuPanel.call(n,t,!0);else 32!==i.which&&(40===i.which||a&&39===i.which?(r=e.nextElementSibling,Fl.element(r)||(r=e.parentNode.firstElementChild)):(r=e.previousElementSibling,Fl.element(r)||(r=e.parentNode.lastElementChild)),uc.call(n,r,!0))}},!1),zl(e,"keyup",function(e){13===e.which&&Yc.focusFirstMenuItem.call(n,null,!0)})},createMenuItem:function(e){var t=this,n=e.value,i=e.list,r=e.type,a=e.title,o=e.badge,s=void 0===o?null:o,l=e.checked,c=void 0!==l&&l,u=ic(this.config.selectors.inputs[r]),h=Jl("button",Gl(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:n})),f=Jl("span");f.innerHTML=a,Fl.element(s)&&f.appendChild(s),h.appendChild(f),Object.defineProperty(h,"checked",{enumerable:!0,get:function(){return"true"===h.getAttribute("aria-checked")},set:function(e){e&&Array.from(h.parentNode.children).filter(function(e){return sc(e,'[role="menuitemradio"]')}).forEach(function(e){return e.setAttribute("aria-checked","false")}),h.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(h,"click keyup",function(e){if(!Fl.keyboardEvent(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),h.checked=!0,r){case"language":t.currentTrack=Number(n);break;case"quality":t.quality=n;break;case"speed":t.speed=parseFloat(n)}Yc.showMenuPanel.call(t,"home",Fl.keyboardEvent(e))}},r,!1),Yc.bindMenuItemShortcuts.call(this,h,r),i.appendChild(h)},formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Fl.number(e)?$c(e,zc(this.duration)>0,t):e},updateTimeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Fl.element(e)&&Fl.number(t)&&(e.innerText=Yc.formatTime(t,n))},updateVolume:function(){this.supported.ui&&(Fl.element(this.elements.inputs.volume)&&Yc.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),Fl.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Fl.element(e)&&(e.value=t,Yc.updateRangeFill.call(this,e))},updateProgress:function(e){var t=this;if(this.supported.ui&&Fl.event(e)){var n=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":n=function(e,t){return 0===e||0===t||Number.isNaN(e)||Number.isNaN(t)?0:(e/t*100).toFixed(2)}(this.currentTime,this.duration),"timeupdate"===e.type&&Yc.setRange.call(this,this.elements.inputs.seek,n);break;case"playing":case"progress":!function(e,n){var i=Fl.number(n)?n:0,r=Fl.element(e)?e:t.elements.display.buffer;if(Fl.element(r)){r.value=i;var a=r.getElementsByTagName("span")[0];Fl.element(a)&&(a.childNodes[0].nodeValue=i)}}(this.elements.display.buffer,100*this.buffered)}}},updateRangeFill:function(e){var t=Fl.event(e)?e.target:e;if(Fl.element(t)&&"range"===t.getAttribute("type")){if(sc(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var n=Yc.formatTime(this.currentTime),i=Yc.formatTime(this.duration),r=Fc("seekLabel",this.config);t.setAttribute("aria-valuetext",r.replace("{currentTime}",n).replace("{duration}",i))}else if(sc(t,this.config.selectors.inputs.volume)){var a=100*t.value;t.setAttribute("aria-valuenow",a),t.setAttribute("aria-valuetext","".concat(a.toFixed(1),"%"))}else t.setAttribute("aria-valuenow",t.value);Hl.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"))}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&Fl.element(this.elements.inputs.seek)&&Fl.element(this.elements.display.seekTooltip)&&0!==this.duration){var n="".concat(this.config.classNames.tooltip,"--visible"),i=function(e){return ac(t.elements.display.seekTooltip,n,e)};if(this.touch)i(!1);else{var r=0,a=this.elements.progress.getBoundingClientRect();if(Fl.event(e))r=100/a.width*(e.pageX-a.left);else{if(!oc(this.elements.display.seekTooltip,n))return;r=parseFloat(this.elements.display.seekTooltip.style.left,10)}r<0?r=0:r>100&&(r=100),Yc.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*r),this.elements.display.seekTooltip.style.left="".concat(r,"%"),Fl.event(e)&&["mouseenter","mouseleave"].includes(e.type)&&i("mouseenter"===e.type)}}},timeUpdate:function(e){var t=!Fl.element(this.elements.display.duration)&&this.config.invertTime;Yc.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||Yc.updateProgress.call(this,e)},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return rc(this.elements.display.currentTime,!0),void rc(this.elements.progress,!0);Fl.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=Fl.element(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&Yc.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&Yc.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),Yc.updateSeekTooltip.call(this)}},toggleMenuButton:function(e,t){rc(this.elements.settings.buttons[e],!t)},updateSetting:function(e,t,n){var i=this.elements.settings.panels[e],r=null,a=t;if("captions"===e)r=this.currentTrack;else{if(r=Fl.empty(n)?this[e]:n,Fl.empty(r)&&(r=this.config[e].default),!Fl.empty(this.options[e])&&!this.options[e].includes(r))return void this.debug.warn("Unsupported value of '".concat(r,"' for ").concat(e));if(!this.config[e].options.includes(r))return void this.debug.warn("Disabled value of '".concat(r,"' for ").concat(e))}if(Fl.element(a)||(a=i&&i.querySelector('[role="menu"]')),Fl.element(a)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=Yc.getLabel.call(this,e,r);var o=a&&a.querySelector('[value="'.concat(r,'"]'));Fl.element(o)&&(o.checked=!0)}},getLabel:function(e,t){switch(e){case"speed":return 1===t?Fc("normal",this.config):"".concat(t,"&times;");case"quality":if(Fl.number(t)){var n=Fc("qualityLabel.".concat(t),this.config);return n.length?n:"".concat(t,"p")}return Nc(t);case"captions":return Xc.getLabel.call(this);default:return null}},setQualityMenu:function(e){var t=this;if(Fl.element(this.elements.settings.panels.quality)){var n=this.elements.settings.panels.quality.querySelector('[role="menu"]');Fl.array(e)&&(this.options.quality=bc(e).filter(function(e){return t.config.quality.options.includes(e)}));var i=!Fl.empty(this.options.quality)&&this.options.quality.length>1;if(Yc.toggleMenuButton.call(this,"quality",i),tc(n),Yc.checkMenu.call(this),i){var r=function(e){var n=Fc("qualityBadge.".concat(e),t.config);return n.length?Yc.createBadge.call(t,n):null};this.options.quality.sort(function(e,n){var i=t.config.quality.options;return i.indexOf(e)>i.indexOf(n)?1:-1}).forEach(function(e){Yc.createMenuItem.call(t,{value:e,list:n,type:"quality",title:Yc.getLabel.call(t,"quality",e),badge:r(e)})}),Yc.updateSetting.call(this,"quality",n)}}},setCaptionsMenu:function(){var e=this;if(Fl.element(this.elements.settings.panels.captions)){var t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),n=Xc.getTracks.call(this),i=Boolean(n.length);if(Yc.toggleMenuButton.call(this,"captions",i),tc(t),Yc.checkMenu.call(this),i){var r=n.map(function(n,i){return{value:i,checked:e.captions.toggled&&e.currentTrack===i,title:Xc.getLabel.call(e,n),badge:n.language&&Yc.createBadge.call(e,n.language.toUpperCase()),list:t,type:"language"}});r.unshift({value:-1,checked:!this.captions.toggled,title:Fc("disabled",this.config),list:t,type:"language"}),r.forEach(Yc.createMenuItem.bind(this)),Yc.updateSetting.call(this,"captions",t)}}},setSpeedMenu:function(e){var t=this;if(Fl.element(this.elements.settings.panels.speed)){var n=this.elements.settings.panels.speed.querySelector('[role="menu"]');Fl.array(e)?this.options.speed=e:(this.isHTML5||this.isVimeo)&&(this.options.speed=[.5,.75,1,1.25,1.5,1.75,2]),this.options.speed=this.options.speed.filter(function(e){return t.config.speed.options.includes(e)});var i=!Fl.empty(this.options.speed)&&this.options.speed.length>1;Yc.toggleMenuButton.call(this,"speed",i),tc(n),Yc.checkMenu.call(this),i&&(this.options.speed.forEach(function(e){Yc.createMenuItem.call(t,{value:e,list:n,type:"speed",title:Yc.getLabel.call(t,"speed",e)})}),Yc.updateSetting.call(this,"speed",n))}},checkMenu:function(){var e=this.elements.settings.buttons,t=!Fl.empty(e)&&Object.values(e).some(function(e){return!e.hidden});rc(this.elements.settings.menu,!t)},focusFirstMenuItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.elements.settings.popup.hidden){var n=e;Fl.element(n)||(n=Object.values(this.elements.settings.panels).find(function(e){return!e.hidden}));var i=n.querySelector('[role^="menuitem"]');uc.call(this,i,t)}},toggleMenu:function(e){var t=this.elements.settings.popup,n=this.elements.buttons.settings;if(Fl.element(t)&&Fl.element(n)){var i=t.hidden,r=i;if(Fl.boolean(e))r=e;else if(Fl.keyboardEvent(e)&&27===e.which)r=!1;else if(Fl.event(e)){var a=Fl.function(e.composedPath)?e.composedPath()[0]:e.target,o=t.contains(a);if(o||!o&&e.target!==n&&r)return}n.setAttribute("aria-expanded",r),rc(t,!r),ac(this.elements.container,this.config.classNames.menu.open,r),r&&Fl.keyboardEvent(e)?Yc.focusFirstMenuItem.call(this,null,!0):r||i||uc.call(this,n,Fl.keyboardEvent(e))}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var n=t.scrollWidth,i=t.scrollHeight;return ec(t),{width:n,height:i}},showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(Fl.element(i)){var r=i.parentNode,a=Array.from(r.children).find(function(e){return!e.hidden});if(dc.transitions&&!dc.reducedMotion){r.style.width="".concat(a.scrollWidth,"px"),r.style.height="".concat(a.scrollHeight,"px");var o=Yc.getMenuSize.call(this,i);zl.call(this,r,ql,function t(n){n.target===r&&["width","height"].includes(n.propertyName)&&(r.style.width="",r.style.height="",Wl.call(e,r,ql,t))}),r.style.width="".concat(o.width,"px"),r.style.height="".concat(o.height,"px")}rc(a,!0),rc(i,!1),Yc.focusFirstMenuItem.call(this,i,n)}},setDownloadUrl:function(){var e=this.elements.buttons.download;Fl.element(e)&&e.setAttribute("href",this.download)},create:function(e){var t=this,n=Yc.bindMenuItemShortcuts,i=Yc.createButton,r=Yc.createProgress,a=Yc.createRange,o=Yc.createTime,s=Yc.setQualityMenu,l=Yc.setSpeedMenu,c=Yc.showMenuPanel;this.elements.controls=null,this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large"));var u=Jl("div",ic(this.config.selectors.controls.wrapper));this.elements.controls=u;var h={class:"plyr__controls__item"};return bc(this.config.controls).forEach(function(s){if("restart"===s&&u.appendChild(i.call(t,"restart",h)),"rewind"===s&&u.appendChild(i.call(t,"rewind",h)),"play"===s&&u.appendChild(i.call(t,"play",h)),"fast-forward"===s&&u.appendChild(i.call(t,"fast-forward",h)),"progress"===s){var l=Jl("div",{class:"".concat(h.class," plyr__progress__container")}),f=Jl("div",ic(t.config.selectors.progress));if(f.appendChild(a.call(t,"seek",{id:"plyr-seek-".concat(e.id)})),f.appendChild(r.call(t,"buffer")),t.config.tooltips.seek){var d=Jl("span",{class:t.config.classNames.tooltip},"00:00");f.appendChild(d),t.elements.display.seekTooltip=d}t.elements.progress=f,l.appendChild(t.elements.progress),u.appendChild(l)}if("current-time"===s&&u.appendChild(o.call(t,"currentTime",h)),"duration"===s&&u.appendChild(o.call(t,"duration",h)),"mute"===s||"volume"===s){var p=t.elements.volume;if(Fl.element(p)&&u.contains(p)||(p=Jl("div",Gl({},h,{class:"".concat(h.class," plyr__volume").trim()})),t.elements.volume=p,u.appendChild(p)),"mute"===s&&p.appendChild(i.call(t,"mute")),"volume"===s){var m={max:1,step:.05,value:t.config.volume};p.appendChild(a.call(t,"volume",Gl(m,{id:"plyr-volume-".concat(e.id)})))}}if("captions"===s&&u.appendChild(i.call(t,"captions",h)),"settings"===s&&!Fl.empty(t.config.settings)){var g=Jl("div",Gl({},h,{class:"".concat(h.class," plyr__menu").trim(),hidden:""}));g.appendChild(i.call(t,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(e.id),"aria-expanded":!1}));var v=Jl("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(e.id),hidden:""}),y=Jl("div"),b=Jl("div",{id:"plyr-settings-".concat(e.id,"-home")}),w=Jl("div",{role:"menu"});b.appendChild(w),y.appendChild(b),t.elements.settings.panels.home=b,t.config.settings.forEach(function(i){var r=Jl("button",Gl(ic(t.config.selectors.buttons.settings),{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));n.call(t,r,i),zl(r,"click",function(){c.call(t,i,!1)});var a=Jl("span",null,Fc(i,t.config)),o=Jl("span",{class:t.config.classNames.menu.value});o.innerHTML=e[i],a.appendChild(o),r.appendChild(a),w.appendChild(r);var s=Jl("div",{id:"plyr-settings-".concat(e.id,"-").concat(i),hidden:""}),l=Jl("button",{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--back")});l.appendChild(Jl("span",{"aria-hidden":!0},Fc(i,t.config))),l.appendChild(Jl("span",{class:t.config.classNames.hidden},Fc("menuBack",t.config))),zl(s,"keydown",function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),c.call(t,"home",!0))},!1),zl(l,"click",function(){c.call(t,"home",!1)}),s.appendChild(l),s.appendChild(Jl("div",{role:"menu"})),y.appendChild(s),t.elements.settings.buttons[i]=r,t.elements.settings.panels[i]=s}),v.appendChild(y),g.appendChild(v),u.appendChild(g),t.elements.settings.popup=v,t.elements.settings.menu=g}if("pip"===s&&dc.pip&&u.appendChild(i.call(t,"pip",h)),"airplay"===s&&dc.airplay&&u.appendChild(i.call(t,"airplay",h)),"download"===s){var k=Gl({},h,{element:"a",href:t.download,target:"_blank"}),T=t.config.urls.download;!Fl.url(T)&&t.isEmbed&&Gl(k,{icon:"logo-".concat(t.provider),label:t.provider}),u.appendChild(i.call(t,"download",k))}"fullscreen"===s&&u.appendChild(i.call(t,"fullscreen",h))}),this.isHTML5&&s.call(this,yc.getQualityOptions.call(this)),l.call(this),u},inject:function(){var e=this;if(this.config.loadSprite){var t=Yc.getIconUrl.call(this);t.cors&&Hc(t.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var n=null;this.elements.controls=null;var i={id:this.id,seektime:this.config.seekTime,title:this.config.title},r=!0;Fl.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,i)),this.config.controls||(this.config.controls=[]),Fl.element(this.config.controls)||Fl.string(this.config.controls)?n=this.config.controls:(n=Yc.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Xc.getLabel.call(this)}),r=!1);var a,o=function(e){var t=e;return Object.entries(i).forEach(function(e){var n=Ha(e,2),i=n[0],r=n[1];t=jc(t,"{".concat(i,"}"),r)}),t};if(r&&(Fl.string(this.config.controls)?n=o(n):Fl.element(n)&&(n.innerHTML=o(n.innerHTML))),Fl.string(this.config.selectors.controls.container)&&(a=document.querySelector(this.config.selectors.controls.container)),Fl.element(a)||(a=this.elements.container),a[Fl.element(n)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",n),Fl.element(this.elements.controls)||Yc.findElements.call(this),!Fl.empty(this.elements.buttons)){var s=function(t){var n=e.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function(){return oc(t,n)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];ac(t,n,e)}})};Object.values(this.elements.buttons).filter(Boolean).forEach(function(e){Fl.array(e)||Fl.nodeList(e)?Array.from(e).filter(Boolean).forEach(s):s(e)})}if(Hl.isEdge&&Dl(a),this.config.tooltips.controls){var l=this.config,c=l.classNames,u=l.selectors,h="".concat(u.controls.wrapper," ").concat(u.labels," .").concat(c.hidden),f=lc.call(this,h);Array.from(f).forEach(function(t){ac(t,e.config.classNames.hidden,!1),ac(t,e.config.classNames.tooltip,!0)})}}};function Gc(e){var t=e;if(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]){var n=document.createElement("a");n.href=t,t=n.href}try{return new URL(t)}catch(e){return null}}function Qc(e){var t=new URLSearchParams;return Fl.object(e)&&Object.entries(e).forEach(function(e){var n=Ha(e,2),i=n[0],r=n[1];t.set(i,r)}),t}var Xc={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!dc.textTracks)Fl.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&Yc.setCaptionsMenu.call(this);else{if(Fl.element(this.elements.captions)||(this.elements.captions=Jl("div",ic(this.config.selectors.captions)),function(e,t){Fl.element(e)&&Fl.element(t)&&t.parentNode.insertBefore(e,t.nextSibling)}(this.elements.captions,this.elements.wrapper)),Hl.isIE&&window.URL){var e=this.media.querySelectorAll("track");Array.from(e).forEach(function(e){var t=e.getAttribute("src"),n=Gc(t);null!==n&&n.hostname!==window.location.href.hostname&&["http:","https:"].includes(n.protocol)&&Dc(t,"blob").then(function(t){e.setAttribute("src",window.URL.createObjectURL(t))}).catch(function(){ec(e)})})}var t=bc((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(function(e){return e.split("-")[0]})),n=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===n)n=Ha(t,1)[0];var i=this.storage.get("captions");if(Fl.boolean(i)||(i=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:i,language:n,languages:t}),this.isHTML5){var r=this.config.captions.update?"addtrack removetrack":"removetrack";zl.call(this,this.media.textTracks,r,Xc.update.bind(this))}setTimeout(Xc.update.bind(this),0)}},update:function(){var e=this,t=Xc.getTracks.call(this,!0),n=this.captions,i=n.active,r=n.language,a=n.meta,o=n.currentTrackNode,s=Boolean(t.find(function(e){return e.language===r}));this.isHTML5&&this.isVideo&&t.filter(function(e){return!a.get(e)}).forEach(function(t){e.debug.log("Track added",t),a.set(t,{default:"showing"===t.mode}),t.mode="hidden",zl.call(e,t,"cuechange",function(){return Xc.updateCues.call(e)})}),(s&&this.language!==r||!t.includes(o))&&(Xc.setLanguage.call(this,r),Xc.toggle.call(this,i&&s)),ac(this.elements.container,this.config.classNames.captions.enabled,!Fl.empty(t)),(this.config.controls||[]).includes("settings")&&this.config.settings.includes("captions")&&Yc.setCaptionsMenu.call(this)},toggle:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.supported.ui){var n=this.captions.toggled,i=this.config.classNames.captions.active,r=Fl.nullOrUndefined(e)?!n:e;if(r!==n){if(t||(this.captions.active=r,this.storage.set({captions:r})),!this.language&&r&&!t){var a=Xc.getTracks.call(this),o=Xc.findTrack.call(this,[this.captions.language].concat(Va(this.captions.languages)),!0);return this.captions.language=o.language,void Xc.set.call(this,a.indexOf(o))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=r),ac(this.elements.container,i,r),this.captions.toggled=r,Yc.updateSetting.call(this,"captions"),$l.call(this,this.media,r?"captionsenabled":"captionsdisabled")}}},set:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Xc.getTracks.call(this);if(-1!==e)if(Fl.number(e))if(e in n){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;var i=n[e],r=(i||{}).language;this.captions.currentTrackNode=i,Yc.updateSetting.call(this,"captions"),t||(this.captions.language=r,this.storage.set({language:r})),this.isVimeo&&this.embed.enableTextTrack(r),$l.call(this,this.media,"languagechange")}Xc.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&Xc.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else Xc.toggle.call(this,!1,t)},setLanguage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Fl.string(e)){var n=e.toLowerCase();this.captions.language=n;var i=Xc.getTracks.call(this),r=Xc.findTrack.call(this,[n]);Xc.set.call(this,i.indexOf(r),t)}else this.debug.warn("Invalid language argument",e)},getTracks:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Array.from((this.media||{}).textTracks||[]).filter(function(n){return!e.isHTML5||t||e.captions.meta.has(n)}).filter(function(e){return["captions","subtitles"].includes(e.kind)})},findTrack:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Xc.getTracks.call(this),a=function(e){return Number((n.captions.meta.get(e)||{}).default)},o=Array.from(r).sort(function(e,t){return a(t)-a(e)});return e.every(function(e){return!(t=o.find(function(t){return t.language===e}))}),t||(i?o[0]:void 0)},getCurrentTrack:function(){return Xc.getTracks.call(this)[this.currentTrack]},getLabel:function(e){var t=e;return!Fl.track(t)&&dc.textTracks&&this.captions.toggled&&(t=Xc.getCurrentTrack.call(this)),Fl.track(t)?Fl.empty(t.label)?Fl.empty(t.language)?Fc("enabled",this.config):e.language.toUpperCase():t.label:Fc("disabled",this.config)},updateCues:function(e){if(this.supported.ui)if(Fl.element(this.elements.captions))if(Fl.nullOrUndefined(e)||Array.isArray(e)){var t=e;if(!t){var n=Xc.getCurrentTrack.call(this);t=Array.from((n||{}).activeCues||[]).map(function(e){return e.getCueAsHTML()}).map(Rc)}var i=t.map(function(e){return e.trim()}).join("\n");if(i!==this.elements.captions.innerHTML){tc(this.elements.captions);var r=Jl("span",ic(this.config.selectors.caption));r.innerHTML=i,this.elements.captions.appendChild(r),$l.call(this,this.media,"cuechange")}}else this.debug.warn("updateCues: Invalid input",e);else this.debug.warn("No captions element to render to")}},Jc={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.6/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240]},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},Zc="picture-in-picture",eu="inline",tu={html5:"html5",youtube:"youtube",vimeo:"vimeo"},nu={audio:"audio",video:"video"};var iu=function(){},ru=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Ua(this,e),this.enabled=window.console&&t,this.enabled&&this.log("Debugging enabled")}return qa(e,[{key:"log",get:function(){return this.enabled?Function.prototype.bind.call(console.log,console):iu}},{key:"warn",get:function(){return this.enabled?Function.prototype.bind.call(console.warn,console):iu}},{key:"error",get:function(){return this.enabled?Function.prototype.bind.call(console.error,console):iu}}]),e}();function au(){if(this.enabled){var e=this.player.elements.buttons.fullscreen;Fl.element(e)&&(e.pressed=this.active),$l.call(this.player,this.target,this.active?"enterfullscreen":"exitfullscreen",!0),Hl.isIos||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Fl.element(e)){var n=lc.call(this,"button:not(:disabled), input:not(:disabled), [tabindex]"),i=n[0],r=n[n.length-1];Bl.call(this,this.elements.container,"keydown",function(e){if("Tab"===e.key&&9===e.keyCode){var t=document.activeElement;t!==r||e.shiftKey?t===i&&e.shiftKey&&(r.focus(),e.preventDefault()):(i.focus(),e.preventDefault())}},t,!1)}}.call(this.player,this.target,this.active)}}function ou(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e?this.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",ac(this.target,this.player.config.classNames.fullscreen.fallback,e),Hl.isIos){var t=document.head.querySelector('meta[name="viewport"]'),n="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var i=Fl.string(t.content)&&t.content.includes(n);e?(this.cleanupViewport=!i,i||(t.content+=",".concat(n))):this.cleanupViewport&&(t.content=t.content.split(",").filter(function(e){return e.trim()!==n}).join(","))}au.call(this)}var su=function(){function e(t){var n=this;Ua(this,e),this.player=t,this.prefix=e.prefix,this.property=e.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===t.config.fullscreen.fallback,zl.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),function(){au.call(n)}),zl.call(this.player,this.player.elements.container,"dblclick",function(e){Fl.element(n.player.elements.controls)&&n.player.elements.controls.contains(e.target)||n.toggle()}),this.update()}return qa(e,[{key:"update",value:function(){var t;this.enabled?(t=this.forceFallback?"Fallback (forced)":e.native?"Native":"Fallback",this.player.debug.log("".concat(t," fullscreen enabled"))):this.player.debug.log("Fullscreen not supported and fallback disabled");ac(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.enabled)}},{key:"enter",value:function(){this.enabled&&(Hl.isIos&&this.player.config.fullscreen.iosNative?this.target.webkitEnterFullscreen():!e.native||this.forceFallback?ou.call(this,!0):this.prefix?Fl.empty(this.prefix)||this.target["".concat(this.prefix,"Request").concat(this.property)]():this.target.requestFullscreen())}},{key:"exit",value:function(){if(this.enabled)if(Hl.isIos&&this.player.config.fullscreen.iosNative)this.target.webkitExitFullscreen(),this.player.play();else if(!e.native||this.forceFallback)ou.call(this,!1);else if(this.prefix){if(!Fl.empty(this.prefix)){var t="moz"===this.prefix?"Cancel":"Exit";document["".concat(this.prefix).concat(t).concat(this.property)]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}},{key:"toggle",value:function(){this.active?this.exit():this.enter()}},{key:"usingNative",get:function(){return e.native&&!this.forceFallback}},{key:"enabled",get:function(){return(e.native||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo}},{key:"active",get:function(){return!!this.enabled&&(!e.native||this.forceFallback?oc(this.target,this.player.config.classNames.fullscreen.fallback):(this.prefix?document["".concat(this.prefix).concat(this.property,"Element")]:document.fullscreenElement)===this.target)}},{key:"target",get:function(){return Hl.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.container}}],[{key:"native",get:function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}},{key:"prefix",get:function(){if(Fl.function(document.exitFullscreen))return"";var e="";return["webkit","moz","ms"].some(function(t){return!(!Fl.function(document["".concat(t,"ExitFullscreen")])&&!Fl.function(document["".concat(t,"CancelFullScreen")]))&&(e=t,!0)}),e}},{key:"property",get:function(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}}]),e}(),lu=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1};function cu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise(function(n,i){var r=new Image,a=function(){delete r.onload,delete r.onerror,(r.naturalWidth>=t?n:i)(r)};Object.assign(r,{onload:a,onerror:a,src:e})})}Ce({target:"Math",stat:!0},{sign:lu});var uu={addStyleHook:function(){ac(this.elements.container,this.config.selectors.container.replace(".",""),!0),ac(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build:function(){var e=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ").concat(this.type)),void uu.toggleNativeControls.call(this,!0);Fl.element(this.elements.controls)||(Yc.inject.call(this),this.listeners.controls()),uu.toggleNativeControls.call(this),this.isHTML5&&Xc.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,Yc.updateVolume.call(this),Yc.timeUpdate.call(this),uu.checkPlaying.call(this),ac(this.elements.container,this.config.classNames.pip.supported,dc.pip&&this.isHTML5&&this.isVideo),ac(this.elements.container,this.config.classNames.airplay.supported,dc.airplay&&this.isHTML5),ac(this.elements.container,this.config.classNames.isIos,Hl.isIos),ac(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(function(){$l.call(e,e.media,"ready")},0),uu.setTitle.call(this),this.poster&&uu.setPoster.call(this,this.poster,!1).catch(function(){}),this.config.duration&&Yc.durationUpdate.call(this)},setTitle:function(){var e=Fc("play",this.config);if(Fl.string(this.config.title)&&!Fl.empty(this.config.title)&&(e+=", ".concat(this.config.title)),Array.from(this.elements.buttons.play||[]).forEach(function(t){t.setAttribute("aria-label",e)}),this.isEmbed){var t=cc.call(this,"iframe");if(!Fl.element(t))return;var n=Fl.empty(this.config.title)?"video":this.config.title,i=Fc("frameTitle",this.config);t.setAttribute("title",i.replace("{title}",n))}},togglePoster:function(e){ac(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster:function(e){var t=this;return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]||!this.poster?(this.media.setAttribute("poster",e),function(){var e=this;return new Promise(function(t){return e.ready?setTimeout(t,0):zl.call(e,e.elements.container,"ready",t)}).then(function(){})}.call(this).then(function(){return cu(e)}).catch(function(n){throw e===t.poster&&uu.togglePoster.call(t,!1),n}).then(function(){if(e!==t.poster)throw new Error("setPoster cancelled by later call to setPoster")}).then(function(){return Object.assign(t.elements.poster.style,{backgroundImage:"url('".concat(e,"')"),backgroundSize:""}),uu.togglePoster.call(t,!0),e})):Promise.reject(new Error("Poster already set"))},checkPlaying:function(e){var t=this;ac(this.elements.container,this.config.classNames.playing,this.playing),ac(this.elements.container,this.config.classNames.paused,this.paused),ac(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(function(e){Object.assign(e,{pressed:t.playing})}),Fl.event(e)&&"timeupdate"===e.type||uu.toggleControls.call(this)},checkLoading:function(e){var t=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(function(){ac(t.elements.container,t.config.classNames.loading,t.loading),uu.toggleControls.call(t)},this.loading?250:0)},toggleControls:function(e){var t=this.elements.controls;if(t&&this.config.hideControls){var n=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||n))}}},hu=function(){function e(t){Ua(this,e),this.player=t,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this)}return qa(e,[{key:"handleKey",value:function(e){var t=this.player,n=t.elements,i=e.keyCode?e.keyCode:e.which,r="keydown"===e.type,a=r&&i===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&Fl.number(i)){if(r){var o=document.activeElement;if(Fl.element(o)){var s=t.config.selectors.editable;if(o!==n.inputs.seek&&sc(o,s))return;if(32===e.which&&sc(o,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:a||(t.currentTime=t.duration/10*(i-48));break;case 32:case 75:a||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:a||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:a||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}}},{key:"toggleMenu",value:function(e){Yc.toggleMenu.call(this.player,e)}},{key:"firstTouch",value:function(){var e=this.player,t=e.elements;e.touch=!0,ac(t.container,e.config.classNames.isTouch,!0)}},{key:"setTabFocus",value:function(e){var t=this.player,n=t.elements;if(clearTimeout(this.focusTimer),"keydown"!==e.type||9===e.which){"keydown"===e.type&&(this.lastKeyDown=e.timeStamp);var i,r=e.timeStamp-this.lastKeyDown<=20;if("focus"!==e.type||r)i=t.config.classNames.tabFocus,ac(lc.call(t,".".concat(i)),i,!1),this.focusTimer=setTimeout(function(){var e=document.activeElement;n.container.contains(e)&&ac(document.activeElement,t.config.classNames.tabFocus,!0)},10)}}},{key:"global",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.player;t.config.keyboard.global&&Bl.call(t,window,"keydown keyup",this.handleKey,e,!1),Bl.call(t,document.body,"click",this.toggleMenu,e),Kl.call(t,document.body,"touchstart",this.firstTouch),Bl.call(t,document.body,"keydown focus blur",this.setTabFocus,e,!1,!0)}},{key:"container",value:function(){var e=this.player,t=e.config,n=e.elements,i=e.timers;!t.keyboard.global&&t.keyboard.focused&&zl.call(e,n.container,"keydown keyup",this.handleKey,!1),zl.call(e,n.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",function(t){var r=n.controls;r&&"enterfullscreen"===t.type&&(r.pressed=!1,r.hover=!1);var a=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(uu.toggleControls.call(e,!0),a=e.touch?3e3:2e3),clearTimeout(i.controls),i.controls=setTimeout(function(){return uu.toggleControls.call(e,!1)},a)});var r=function(t){if(!t)return vc.call(e);var i=n.container.getBoundingClientRect(),r=i.width,a=i.height;return vc.call(e,"".concat(r,":").concat(a))},a=function(){clearTimeout(i.resized),i.resized=setTimeout(r,50)};zl.call(e,n.container,"enterfullscreen exitfullscreen",function(t){var i=e.fullscreen,o=i.target,s=i.usingNative;if(o===n.container&&(e.isEmbed||!Fl.empty(e.config.ratio))){var l="enterfullscreen"===t.type,c=r(l);c.padding;!function(t,n,i){if(e.isVimeo){var r=e.elements.wrapper.firstChild,a=Ha(t,2)[1],o=Ha(gc.call(e),2),s=o[0],l=o[1];r.style.maxWidth=i?"".concat(a/l*s,"px"):null,r.style.margin=i?"0 auto":null}}(c.ratio,0,l),s||(l?zl.call(e,window,"resize",a):Wl.call(e,window,"resize",a))}})}},{key:"media",value:function(){var e=this,t=this.player,n=t.elements;if(zl.call(t,t.media,"timeupdate seeking seeked",function(e){return Yc.timeUpdate.call(t,e)}),zl.call(t,t.media,"durationchange loadeddata loadedmetadata",function(e){return Yc.durationUpdate.call(t,e)}),zl.call(t,t.media,"canplay loadeddata",function(){rc(n.volume,!t.hasAudio),rc(n.buttons.mute,!t.hasAudio)}),zl.call(t,t.media,"ended",function(){t.isHTML5&&t.isVideo&&t.config.resetOnEnd&&t.restart()}),zl.call(t,t.media,"progress playing seeking seeked",function(e){return Yc.updateProgress.call(t,e)}),zl.call(t,t.media,"volumechange",function(e){return Yc.updateVolume.call(t,e)}),zl.call(t,t.media,"playing play pause ended emptied timeupdate",function(e){return uu.checkPlaying.call(t,e)}),zl.call(t,t.media,"waiting canplay seeked playing",function(e){return uu.checkLoading.call(t,e)}),t.supported.ui&&t.config.clickToPlay&&!t.isAudio){var i=cc.call(t,".".concat(t.config.classNames.video));if(!Fl.element(i))return;zl.call(t,n.container,"click",function(r){([n.container,i].includes(r.target)||i.contains(r.target))&&(t.touch&&t.config.hideControls||(t.ended?(e.proxy(r,t.restart,"restart"),e.proxy(r,t.play,"play")):e.proxy(r,t.togglePlay,"play")))})}t.supported.ui&&t.config.disableContextMenu&&zl.call(t,n.wrapper,"contextmenu",function(e){e.preventDefault()},!1),zl.call(t,t.media,"volumechange",function(){t.storage.set({volume:t.volume,muted:t.muted})}),zl.call(t,t.media,"ratechange",function(){Yc.updateSetting.call(t,"speed"),t.storage.set({speed:t.speed})}),zl.call(t,t.media,"qualitychange",function(e){Yc.updateSetting.call(t,"quality",null,e.detail.quality)}),zl.call(t,t.media,"ready qualitychange",function(){Yc.setDownloadUrl.call(t)});var r=t.config.events.concat(["keyup","keydown"]).join(" ");zl.call(t,t.media,r,function(e){var i=e.detail,r=void 0===i?{}:i;"error"===e.type&&(r=t.media.error),$l.call(t,n.container,e.type,!0,r)})}},{key:"proxy",value:function(e,t,n){var i=this.player,r=i.config.listeners[n],a=!0;Fl.function(r)&&(a=r.call(i,e)),a&&Fl.function(t)&&t.call(i,e)}},{key:"bind",value:function(e,t,n,i){var r=this,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.player,s=o.config.listeners[i],l=Fl.function(s);zl.call(o,e,t,function(e){return r.proxy(e,n,i)},a&&!l)}},{key:"controls",value:function(){var e=this,t=this.player,n=t.elements,i=Hl.isIE?"change":"input";if(n.buttons.play&&Array.from(n.buttons.play).forEach(function(n){e.bind(n,"click",t.togglePlay,"play")}),this.bind(n.buttons.restart,"click",t.restart,"restart"),this.bind(n.buttons.rewind,"click",t.rewind,"rewind"),this.bind(n.buttons.fastForward,"click",t.forward,"fastForward"),this.bind(n.buttons.mute,"click",function(){t.muted=!t.muted},"mute"),this.bind(n.buttons.captions,"click",function(){return t.toggleCaptions()}),this.bind(n.buttons.download,"click",function(){$l.call(t,t.media,"download")},"download"),this.bind(n.buttons.fullscreen,"click",function(){t.fullscreen.toggle()},"fullscreen"),this.bind(n.buttons.pip,"click",function(){t.pip="toggle"},"pip"),this.bind(n.buttons.airplay,"click",t.airplay,"airplay"),this.bind(n.buttons.settings,"click",function(e){e.stopPropagation(),Yc.toggleMenu.call(t,e)}),this.bind(n.buttons.settings,"keyup",function(e){var n=e.which;[13,32].includes(n)&&(13!==n?(e.preventDefault(),e.stopPropagation(),Yc.toggleMenu.call(t,e)):Yc.focusFirstMenuItem.call(t,null,!0))},null,!1),this.bind(n.settings.menu,"keydown",function(e){27===e.which&&Yc.toggleMenu.call(t,e)}),this.bind(n.inputs.seek,"mousedown mousemove",function(e){var t=n.progress.getBoundingClientRect(),i=100/t.width*(e.pageX-t.left);e.currentTarget.setAttribute("seek-value",i)}),this.bind(n.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",function(e){var n=e.currentTarget,i=e.keyCode?e.keyCode:e.which;if(!Fl.keyboardEvent(e)||39===i||37===i){t.lastSeekTime=Date.now();var r=n.hasAttribute("play-on-seeked"),a=["mouseup","touchend","keyup"].includes(e.type);r&&a?(n.removeAttribute("play-on-seeked"),t.play()):!a&&t.playing&&(n.setAttribute("play-on-seeked",""),t.pause())}}),Hl.isIos){var r=lc.call(t,'input[type="range"]');Array.from(r).forEach(function(t){return e.bind(t,i,function(e){return Dl(e.target)})})}this.bind(n.inputs.seek,i,function(e){var n=e.currentTarget,i=n.getAttribute("seek-value");Fl.empty(i)&&(i=n.value),n.removeAttribute("seek-value"),t.currentTime=i/n.max*t.duration},"seek"),this.bind(n.progress,"mouseenter mouseleave mousemove",function(e){return Yc.updateSeekTooltip.call(t,e)}),this.bind(n.progress,"mousemove touchmove",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startMove(e)}),this.bind(n.progress,"mouseleave click",function(){var e=t.previewThumbnails;e&&e.loaded&&e.endMove(!1,!0)}),this.bind(n.progress,"mousedown touchstart",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startScrubbing(e)}),this.bind(n.progress,"mouseup touchend",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.endScrubbing(e)}),Hl.isWebkit&&Array.from(lc.call(t,'input[type="range"]')).forEach(function(n){e.bind(n,"input",function(e){return Yc.updateRangeFill.call(t,e.target)})}),t.config.toggleInvert&&!Fl.element(n.display.duration)&&this.bind(n.display.currentTime,"click",function(){0!==t.currentTime&&(t.config.invertTime=!t.config.invertTime,Yc.timeUpdate.call(t))}),this.bind(n.inputs.volume,i,function(e){t.volume=e.target.value},"volume"),this.bind(n.controls,"mouseenter mouseleave",function(e){n.controls.hover=!t.touch&&"mouseenter"===e.type}),this.bind(n.controls,"mousedown mouseup touchstart touchend touchcancel",function(e){n.controls.pressed=["mousedown","touchstart"].includes(e.type)}),this.bind(n.controls,"focusin",function(){var i=t.config,r=t.timers;ac(n.controls,i.classNames.noTransition,!0),uu.toggleControls.call(t,!0),setTimeout(function(){ac(n.controls,i.classNames.noTransition,!1)},0);var a=e.touch?3e3:4e3;clearTimeout(r.controls),r.controls=setTimeout(function(){return uu.toggleControls.call(t,!1)},a)}),this.bind(n.inputs.volume,"wheel",function(e){var n=e.webkitDirectionInvertedFromDevice,i=Ha([e.deltaX,-e.deltaY].map(function(e){return n?-e:e}),2),r=i[0],a=i[1],o=Math.sign(Math.abs(r)>Math.abs(a)?r:a);t.increaseVolume(o/50);var s=t.media.volume;(1===o&&s<1||-1===o&&s>0)&&e.preventDefault()},"volume",!1)}}]),e}(),fu=O.f,du=Function.prototype,pu=du.toString,mu=/^\s*function ([^ (]*)/;!c||"name"in du||fu(du,"name",{configurable:!0,get:function(){try{return pu.call(this).match(mu)[1]}catch(e){return""}}});var gu=Math.max,vu=Math.min;Ce({target:"Array",proto:!0,forced:!kn("splice")},{splice:function(e,t){var n,i,r,a,o,s,l=Me(this),c=oe(l.length),u=ce(e,c),h=arguments.length;if(0===h?n=i=0:1===h?(n=0,i=c-u):(n=h-2,i=vu(gu(re(t),0),c-u)),c+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(r=tt(l,i),a=0;a<i;a++)(o=u+a)in l&&bn(r,a,l[o]);if(r.length=i,n<i){for(a=u;a<c-i;a++)s=a+n,(o=a+i)in l?l[s]=l[o]:delete l[s];for(a=c;a>c-i+n;a--)delete l[a-1]}else if(n>i)for(a=c-i;a>u;a--)s=a+n-1,(o=a+i-1)in l?l[s]=l[o]:delete l[s];for(a=0;a<n;a++)l[a+u]=arguments[a+2];return l.length=c-i+n,r}});var yu=t(function(e,t){e.exports=function(){var e=function(){},t={},n={},i={};function r(e,t){if(e){var r=i[e];if(n[e]=t,r)for(;r.length;)r[0](e,t),r.splice(0,1)}}function a(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function o(t,n,i,r){var a,s,l=document,c=i.async,u=(i.numRetries||0)+1,h=i.before||e,f=t.replace(/^(css|img)!/,"");r=r||0,/(^css!|\.css$)/.test(t)?((s=l.createElement("link")).rel="stylesheet",s.href=f,(a="hideFocus"in s)&&s.relList&&(a=0,s.rel="preload",s.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(s=l.createElement("img")).src=f:((s=l.createElement("script")).src=t,s.async=void 0===c||c),s.onload=s.onerror=s.onbeforeload=function(e){var l=e.type[0];if(a)try{s.sheet.cssText.length||(l="e")}catch(e){18!=e.code&&(l="e")}if("e"==l){if((r+=1)<u)return o(t,n,i,r)}else if("preload"==s.rel&&"style"==s.as)return s.rel="stylesheet";n(t,l,e.defaultPrevented)},!1!==h(t,s)&&l.head.appendChild(s)}function s(e,n,i){var s,l;if(n&&n.trim&&(s=n),l=(s?i:n)||{},s){if(s in t)throw"LoadJS";t[s]=!0}function c(t,n){!function(e,t,n){var i,r,a=(e=e.push?e:[e]).length,s=a,l=[];for(i=function(e,n,i){if("e"==n&&l.push(e),"b"==n){if(!i)return;l.push(e)}--a||t(l)},r=0;r<s;r++)o(e[r],i,n)}(e,function(e){a(l,e),t&&a({success:t,error:n},e),r(s,e)},l)}if(l.returnPromise)return new Promise(c);c()}return s.ready=function(e,t){return function(e,t){e=e.push?e:[e];var r,a,o,s=[],l=e.length,c=l;for(r=function(e,n){n.length&&s.push(e),--c||t(s)};l--;)a=e[l],(o=n[a])?r(a,o):(i[a]=i[a]||[]).push(r)}(e,function(e){a(t,e)}),s},s.done=function(e){r(e,[])},s.reset=function(){t={},n={},i={}},s.isDefined=function(e){return e in t},s}()});function bu(e){return new Promise(function(t,n){yu(e,{success:t,error:n})})}function wu(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,$l.call(this,this.media,e?"play":"pause"))}var ku={setup:function(){var e=this;ac(this.elements.wrapper,this.config.classNames.embed,!0),vc.call(this),Fl.object(window.Vimeo)?ku.ready.call(this):bu(this.config.urls.vimeo.sdk).then(function(){ku.ready.call(e)}).catch(function(t){e.debug.warn("Vimeo SDK (player.js) failed to load",t)})},ready:function(){var e=this,t=this,n=t.config.vimeo,i=Qc(Gl({},{loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},n)),r=t.media.getAttribute("src");Fl.empty(r)&&(r=t.media.getAttribute(t.config.attributes.embed.id));var a,o=(a=r,Fl.empty(a)?null:Fl.number(Number(a))?a:a.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:a),s=Jl("iframe"),l=Oc(t.config.urls.vimeo.iframe,o,i);s.setAttribute("src",l),s.setAttribute("allowfullscreen",""),s.setAttribute("allowtransparency",""),s.setAttribute("allow","autoplay");var c=Jl("div",{poster:t.poster,class:t.config.classNames.embedContainer});c.appendChild(s),t.media=nc(c,t.media),Dc(Oc(t.config.urls.vimeo.api,o),"json").then(function(e){if(!Fl.empty(e)){var n=new URL(e[0].thumbnail_large);n.pathname="".concat(n.pathname.split("_")[0],".jpg"),uu.setPoster.call(t,n.href).catch(function(){})}}),t.embed=new window.Vimeo.Player(s,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return wu.call(t,!0),t.embed.play()},t.media.pause=function(){return wu.call(t,!1),t.embed.pause()},t.media.stop=function(){t.pause(),t.currentTime=0};var u=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return u},set:function(e){var n=t.embed,i=t.media,r=t.paused,a=t.volume,o=r&&!n.hasPlayed;i.seeking=!0,$l.call(t,i,"seeking"),Promise.resolve(o&&n.setVolume(0)).then(function(){return n.setCurrentTime(e)}).then(function(){return o&&n.pause()}).then(function(){return o&&n.setVolume(a)}).catch(function(){})}});var h=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return h},set:function(e){t.embed.setPlaybackRate(e).then(function(){h=e,$l.call(t,t.media,"ratechange")}).catch(function(e){"Error"===e.name&&Yc.setSpeedMenu.call(t,[])})}});var f=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return f},set:function(e){t.embed.setVolume(e).then(function(){f=e,$l.call(t,t.media,"volumechange")})}});var d=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return d},set:function(e){var n=!!Fl.boolean(e)&&e;t.embed.setVolume(n?0:t.config.volume).then(function(){d=n,$l.call(t,t.media,"volumechange")})}});var p,m=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return m},set:function(e){var n=Fl.boolean(e)?e:t.config.loop.active;t.embed.setLoop(n).then(function(){m=n})}}),t.embed.getVideoUrl().then(function(e){p=e,Yc.setDownloadUrl.call(t)}).catch(function(t){e.debug.warn(t)}),Object.defineProperty(t.media,"currentSrc",{get:function(){return p}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then(function(n){var i=Ha(n,2),r=i[0],a=i[1];t.embed.ratio=[r,a],vc.call(e)}),t.embed.setAutopause(t.config.autopause).then(function(e){t.config.autopause=e}),t.embed.getVideoTitle().then(function(n){t.config.title=n,uu.setTitle.call(e)}),t.embed.getCurrentTime().then(function(e){u=e,$l.call(t,t.media,"timeupdate")}),t.embed.getDuration().then(function(e){t.media.duration=e,$l.call(t,t.media,"durationchange")}),t.embed.getTextTracks().then(function(e){t.media.textTracks=e,Xc.setup.call(t)}),t.embed.on("cuechange",function(e){var n=e.cues,i=(void 0===n?[]:n).map(function(e){return function(e){var t=document.createDocumentFragment(),n=document.createElement("div");return t.appendChild(n),n.innerHTML=e,t.firstChild.innerText}(e.text)});Xc.updateCues.call(t,i)}),t.embed.on("loaded",function(){(t.embed.getPaused().then(function(e){wu.call(t,!e),e||$l.call(t,t.media,"playing")}),Fl.element(t.embed.element)&&t.supported.ui)&&t.embed.element.setAttribute("tabindex",-1)}),t.embed.on("play",function(){wu.call(t,!0),$l.call(t,t.media,"playing")}),t.embed.on("pause",function(){wu.call(t,!1)}),t.embed.on("timeupdate",function(e){t.media.seeking=!1,u=e.seconds,$l.call(t,t.media,"timeupdate")}),t.embed.on("progress",function(e){t.media.buffered=e.percent,$l.call(t,t.media,"progress"),1===parseInt(e.percent,10)&&$l.call(t,t.media,"canplaythrough"),t.embed.getDuration().then(function(e){e!==t.media.duration&&(t.media.duration=e,$l.call(t,t.media,"durationchange"))})}),t.embed.on("seeked",function(){t.media.seeking=!1,$l.call(t,t.media,"seeked")}),t.embed.on("ended",function(){t.media.paused=!0,$l.call(t,t.media,"ended")}),t.embed.on("error",function(e){t.media.error=e,$l.call(t,t.media,"error")}),setTimeout(function(){return uu.build.call(t)},0)}};function Tu(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,$l.call(this,this.media,e?"play":"pause"))}function Su(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}var Eu={setup:function(){var e=this;if(ac(this.elements.wrapper,this.config.classNames.embed,!0),Fl.object(window.YT)&&Fl.function(window.YT.Player))Eu.ready.call(this);else{var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){Fl.function(t)&&t(),Eu.ready.call(e)},bu(this.config.urls.youtube.sdk).catch(function(t){e.debug.warn("YouTube API failed to load",t)})}},getTitle:function(e){var t=this;Dc(Oc(this.config.urls.youtube.api,e)).then(function(e){if(Fl.object(e)){var n=e.title,i=e.height,r=e.width;t.config.title=n,uu.setTitle.call(t),t.embed.ratio=[r,i]}vc.call(t)}).catch(function(){vc.call(t)})},ready:function(){var e=this,t=e.media&&e.media.getAttribute("id");if(Fl.empty(t)||!t.startsWith("youtube-")){var n=e.media.getAttribute("src");Fl.empty(n)&&(n=e.media.getAttribute(this.config.attributes.embed.id));var i,r,a=(i=n,Fl.empty(i)?null:i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:i),o=(r=e.provider,"".concat(r,"-").concat(Math.floor(1e4*Math.random()))),s=Jl("div",{id:o,poster:e.poster});e.media=nc(s,e.media);var l=function(e){return"https://i.ytimg.com/vi/".concat(a,"/").concat(e,"default.jpg")};cu(l("maxres"),121).catch(function(){return cu(l("sd"),121)}).catch(function(){return cu(l("hq"))}).then(function(t){return uu.setPoster.call(e,t.src)}).then(function(t){t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover")}).catch(function(){});var c=e.config.youtube;e.embed=new window.YT.Player(o,{videoId:a,host:Su(c),playerVars:Gl({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},c),events:{onError:function(t){if(!e.media.error){var n=t.data,i={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[n]||"An unknown error occured";e.media.error={code:n,message:i},$l.call(e,e.media,"error")}},onPlaybackRateChange:function(t){var n=t.target;e.media.playbackRate=n.getPlaybackRate(),$l.call(e,e.media,"ratechange")},onReady:function(t){if(!Fl.function(e.media.play)){var n=t.target;Eu.getTitle.call(e,a),e.media.play=function(){Tu.call(e,!0),n.playVideo()},e.media.pause=function(){Tu.call(e,!1),n.pauseVideo()},e.media.stop=function(){n.stopVideo()},e.media.duration=n.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:function(){return Number(n.getCurrentTime())},set:function(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,$l.call(e,e.media,"seeking"),n.seekTo(t)}}),Object.defineProperty(e.media,"playbackRate",{get:function(){return n.getPlaybackRate()},set:function(e){n.setPlaybackRate(e)}});var i=e.config.volume;Object.defineProperty(e.media,"volume",{get:function(){return i},set:function(t){i=t,n.setVolume(100*i),$l.call(e,e.media,"volumechange")}});var r=e.config.muted;Object.defineProperty(e.media,"muted",{get:function(){return r},set:function(t){var i=Fl.boolean(t)?t:r;r=i,n[i?"mute":"unMute"](),$l.call(e,e.media,"volumechange")}}),Object.defineProperty(e.media,"currentSrc",{get:function(){return n.getVideoUrl()}}),Object.defineProperty(e.media,"ended",{get:function(){return e.currentTime===e.duration}}),e.options.speed=n.getAvailablePlaybackRates(),e.supported.ui&&e.media.setAttribute("tabindex",-1),$l.call(e,e.media,"timeupdate"),$l.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval(function(){e.media.buffered=n.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&$l.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),$l.call(e,e.media,"canplaythrough"))},200),setTimeout(function(){return uu.build.call(e)},50)}},onStateChange:function(t){var n=t.target;switch(clearInterval(e.timers.playing),e.media.seeking&&[1,2].includes(t.data)&&(e.media.seeking=!1,$l.call(e,e.media,"seeked")),t.data){case-1:$l.call(e,e.media,"timeupdate"),e.media.buffered=n.getVideoLoadedFraction(),$l.call(e,e.media,"progress");break;case 0:Tu.call(e,!1),e.media.loop?(n.stopVideo(),n.playVideo()):$l.call(e,e.media,"ended");break;case 1:e.config.autoplay||!e.media.paused||e.embed.hasPlayed?(Tu.call(e,!0),$l.call(e,e.media,"playing"),e.timers.playing=setInterval(function(){$l.call(e,e.media,"timeupdate")},50),e.media.duration!==n.getDuration()&&(e.media.duration=n.getDuration(),$l.call(e,e.media,"durationchange"))):e.media.pause();break;case 2:e.muted||e.embed.unMute(),Tu.call(e,!1)}$l.call(e,e.elements.container,"statechange",!1,{code:t.data})}}})}}},Au={setup:function(){this.media?(ac(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),ac(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&ac(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=Jl("div",{class:this.config.classNames.video}),Ql(this.media,this.elements.wrapper),this.elements.poster=Jl("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?yc.extend.call(this):this.isYouTube?Eu.setup.call(this):this.isVimeo&&ku.setup.call(this)):this.debug.warn("No media element found!")}},xu=function(){function e(t){var n=this;Ua(this,e),this.player=t,this.config=t.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise(function(e,t){n.on("loaded",e),n.on("error",t)}),this.load()}return qa(e,[{key:"load",value:function(){var e=this;this.enabled&&(Fl.object(window.google)&&Fl.object(window.google.ima)?this.ready():bu(this.player.config.urls.googleIMA.sdk).then(function(){e.ready()}).catch(function(){e.trigger("error",new Error("Google IMA SDK failed to load"))}))}},{key:"ready",value:function(){var e,t=this;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then(function(){t.clearSafetyTimer("onAdsManagerLoaded()")}),this.listeners(),this.setupIMA()}},{key:"setupIMA",value:function(){this.elements.container=Jl("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.requestAds()}},{key:"requestAds",value:function(){var e=this,t=this.player.elements.container;try{this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,function(t){return e.onAdsManagerLoaded(t)},!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(t){return e.onAdError(t)},!1);var n=new google.ima.AdsRequest;n.adTagUrl=this.tagUrl,n.linearAdSlotWidth=t.offsetWidth,n.linearAdSlotHeight=t.offsetHeight,n.nonLinearAdSlotWidth=t.offsetWidth,n.nonLinearAdSlotHeight=t.offsetHeight,n.forceNonLinearFullSlot=!1,n.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(n)}catch(e){this.onAdError(e)}}},{key:"pollCountdown",value:function(){var e=this;if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0]))return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval(function(){var t=$c(Math.max(e.manager.getRemainingTime(),0)),n="".concat(Fc("advertisement",e.player.config)," - ").concat(t);e.elements.container.setAttribute("data-badge-text",n)},100)}},{key:"onAdsManagerLoaded",value:function(e){var t=this;if(this.enabled){var n=new google.ima.AdsRenderingSettings;n.restoreCustomPlaybackStateOnAdBreakComplete=!0,n.enablePreloading=!0,this.manager=e.getAdsManager(this.player,n),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){return t.onAdError(e)}),Object.keys(google.ima.AdEvent.Type).forEach(function(e){t.manager.addEventListener(google.ima.AdEvent.Type[e],function(e){return t.onAdEvent(e)})}),this.trigger("loaded")}}},{key:"addCuePoints",value:function(){var e=this;Fl.empty(this.cuePoints)||this.cuePoints.forEach(function(t){if(0!==t&&-1!==t&&t<e.player.duration){var n=e.player.elements.progress;if(Fl.element(n)){var i=100/e.player.duration*t,r=Jl("span",{class:e.player.config.classNames.cues});r.style.left="".concat(i.toString(),"%"),n.appendChild(r)}}})}},{key:"onAdEvent",value:function(e){var t=this,n=this.player.elements.container,i=e.getAd(),r=e.getAdData();switch(function(e){$l.call(t.player,t.player.media,"ads".concat(e.replace(/_/g,"").toLowerCase()))}(e.type),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),i.isLinear()||(i.width=n.offsetWidth,i.height=n.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:r.adError&&this.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()))}}},{key:"onAdError",value:function(e){this.cancel(),this.player.debug.warn("Ads error",e)}},{key:"listeners",value:function(){var e,t=this,n=this.player.elements.container;this.player.on("canplay",function(){t.addCuePoints()}),this.player.on("ended",function(){t.loader.contentComplete()}),this.player.on("timeupdate",function(){e=t.player.currentTime}),this.player.on("seeked",function(){var n=t.player.currentTime;Fl.empty(t.cuePoints)||t.cuePoints.forEach(function(i,r){e<i&&i<n&&(t.manager.discardAdBreak(),t.cuePoints.splice(r,1))})}),window.addEventListener("resize",function(){t.manager&&t.manager.resize(n.offsetWidth,n.offsetHeight,google.ima.ViewMode.NORMAL)})}},{key:"play",value:function(){var e=this,t=this.player.elements.container;this.managerPromise||this.resumeContent(),this.managerPromise.then(function(){e.manager.setVolume(e.player.volume),e.elements.displayContainer.initialize();try{e.initialized||(e.manager.init(t.offsetWidth,t.offsetHeight,google.ima.ViewMode.NORMAL),e.manager.start()),e.initialized=!0}catch(t){e.onAdError(t)}}).catch(function(){})}},{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play()}},{key:"pauseContent",value:function(){this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}},{key:"cancel",value:function(){this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}},{key:"loadAds",value:function(){var e=this;this.managerPromise.then(function(){e.manager&&e.manager.destroy(),e.managerPromise=new Promise(function(t){e.on("loaded",t),e.player.debug.log(e.manager)}),e.requestAds()}).catch(function(){})}},{key:"trigger",value:function(e){for(var t=this,n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var a=this.events[e];Fl.array(a)&&a.forEach(function(e){Fl.function(e)&&e.apply(t,i)})}},{key:"on",value:function(e,t){return Fl.array(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this}},{key:"startSafetyTimer",value:function(e,t){var n=this;this.player.debug.log("Safety timer invoked from: ".concat(t)),this.safetyTimer=setTimeout(function(){n.cancel(),n.clearSafetyTimer("startSafetyTimer()")},e)}},{key:"clearSafetyTimer",value:function(e){Fl.nullOrUndefined(this.safetyTimer)||(this.player.debug.log("Safety timer cleared from: ".concat(e)),clearTimeout(this.safetyTimer),this.safetyTimer=null)}},{key:"enabled",get:function(){var e=this.config;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!Fl.empty(e.publisherId)||Fl.url(e.tagUrl))}},{key:"tagUrl",get:function(){var e=this.config;if(Fl.url(e.tagUrl))return e.tagUrl;var t={AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:this.publisherId};return"".concat("https://go.aniview.com/api/adserver6/vast/","?").concat(Qc(t))}}]),e}(),Pu=rt.findIndex,Cu=!0;"findIndex"in[]&&Array(1).findIndex(function(){Cu=!1}),Ce({target:"Array",proto:!0,forced:Cu},{findIndex:function(e){return Pu(this,e,arguments.length>1?arguments[1]:void 0)}}),$t("findIndex");var Iu=function(){function e(t){Ua(this,e),this.player=t,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}return qa(e,[{key:"load",value:function(){var e=this;this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then(function(){e.enabled&&(e.render(),e.determineContainerAutoSizing(),e.loaded=!0)})}},{key:"getThumbnails",value:function(){var e=this;return new Promise(function(t){var n=e.player.config.previewThumbnails.src;if(Fl.empty(n))throw new Error("Missing previewThumbnails.src config attribute");var i=(Fl.string(n)?[n]:n).map(function(t){return e.getThumbnail(t)});Promise.all(i).then(function(){e.thumbnails.sort(function(e,t){return e.height-t.height}),e.player.debug.log("Preview thumbnails",e.thumbnails),t()})})}},{key:"getThumbnail",value:function(e){var t=this;return new Promise(function(n){Dc(e).then(function(i){var r,a,o={frames:(r=i,a=[],r.split(/\r\n\r\n|\n\n|\r\r/).forEach(function(e){var t={};e.split(/\r\n|\n|\r/).forEach(function(e){if(Fl.number(t.startTime)){if(!Fl.empty(e.trim())&&Fl.empty(t.text)){var n=e.trim().split("#xywh="),i=Ha(n,1);if(t.text=i[0],n[1]){var r=Ha(n[1].split(","),4);t.x=r[0],t.y=r[1],t.w=r[2],t.h=r[3]}}}else{var a=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);a&&(t.startTime=60*Number(a[1]||0)*60+60*Number(a[2])+Number(a[3])+Number("0.".concat(a[4])),t.endTime=60*Number(a[6]||0)*60+60*Number(a[7])+Number(a[8])+Number("0.".concat(a[9])))}}),t.text&&a.push(t)}),a),height:null,urlPrefix:""};o.frames[0].text.startsWith("/")||o.frames[0].text.startsWith("http://")||o.frames[0].text.startsWith("https://")||(o.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));var s=new Image;s.onload=function(){o.height=s.naturalHeight,o.width=s.naturalWidth,t.thumbnails.push(o),n()},s.src=o.urlPrefix+o.frames[0].text})})}},{key:"startMove",value:function(e){if(this.loaded&&Fl.event(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t=this.player.elements.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);this.seekTime=this.player.media.duration*(n/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=$c(this.seekTime)}this.showImageAtCurrentTime()}}},{key:"endMove",value:function(){this.toggleThumbContainer(!1,!0)}},{key:"startScrubbing",value:function(e){!1!==e.button&&0!==e.button||(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}},{key:"endScrubbing",value:function(){var e=this;this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):Kl.call(this.player,this.player.media,"timeupdate",function(){e.mouseDown||e.toggleScrubbingContainer(!1)})}},{key:"listeners",value:function(){var e=this;this.player.on("play",function(){e.toggleThumbContainer(!1,!0)}),this.player.on("seeked",function(){e.toggleThumbContainer(!1)}),this.player.on("timeupdate",function(){e.lastTime=e.player.media.currentTime})}},{key:"render",value:function(){this.elements.thumb.container=Jl("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=Jl("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);var e=Jl("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=Jl("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.container.appendChild(e),Fl.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=Jl("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}},{key:"showImageAtCurrentTime",value:function(){var e=this;this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();var t=this.thumbnails[0].frames.findIndex(function(t){return e.seekTime>=t.startTime&&e.seekTime<=t.endTime}),n=t>=0,i=0;this.mouseDown||this.toggleThumbContainer(n),n&&(this.thumbnails.forEach(function(n,r){e.loadedImages.includes(n.frames[t].text)&&(i=r)}),t!==this.showingThumb&&(this.showingThumb=t,this.loadImage(i)))}},{key:"loadImage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this.showingThumb,i=this.thumbnails[t],r=i.urlPrefix,a=i.frames[n],o=i.frames[n].text,s=r+o;if(this.currentImageElement&&this.currentImageElement.dataset.filename===o)this.showImage(this.currentImageElement,a,t,n,o,!1),this.currentImageElement.dataset.index=n,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);var l=new Image;l.src=s,l.dataset.index=n,l.dataset.filename=o,this.showingThumbFilename=o,this.player.debug.log("Loading image: ".concat(s)),l.onload=function(){return e.showImage(l,a,t,n,o,!0)},this.loadingImage=l,this.removeOldImages(l)}}},{key:"showImage",value:function(e,t,n,i,r){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];this.player.debug.log("Showing thumb: ".concat(r,". num: ").concat(i,". qual: ").concat(n,". newimg: ").concat(a)),this.setImageSizeAndOffset(e,t),a&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(r)||this.loadedImages.push(r)),this.preloadNearby(i,!0).then(this.preloadNearby(i,!1)).then(this.getHigherQuality(n,e,t,r))}},{key:"removeOldImages",value:function(e){var t=this;Array.from(this.currentImageContainer.children).forEach(function(n){if("img"===n.tagName.toLowerCase()){var i=t.usingSprites?500:1e3;if(n.dataset.index!==e.dataset.index&&!n.dataset.deleting){n.dataset.deleting=!0;var r=t.currentImageContainer;setTimeout(function(){r.removeChild(n),t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))},i)}}})}},{key:"preloadNearby",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(i){setTimeout(function(){var r=t.thumbnails[0].frames[e].text;if(t.showingThumbFilename===r){var a;a=n?t.thumbnails[0].frames.slice(e):t.thumbnails[0].frames.slice(0,e).reverse();var o=!1;a.forEach(function(e){var n=e.text;if(n!==r&&!t.loadedImages.includes(n)){o=!0,t.player.debug.log("Preloading thumb filename: ".concat(n));var a=t.thumbnails[0].urlPrefix+n,s=new Image;s.src=a,s.onload=function(){t.player.debug.log("Preloaded thumb filename: ".concat(n)),t.loadedImages.includes(n)||t.loadedImages.push(n),i()}}}),o||i()}},300)})}},{key:"getHigherQuality",value:function(e,t,n,i){var r=this;if(e<this.thumbnails.length-1){var a=t.naturalHeight;this.usingSprites&&(a=n.h),a<this.thumbContainerHeight&&setTimeout(function(){r.showingThumbFilename===i&&(r.player.debug.log("Showing higher quality thumb for: ".concat(i)),r.loadImage(e+1))},300)}}},{key:"toggleThumbContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(n,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"toggleScrubbingContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"determineContainerAutoSizing",value:function(){this.elements.thumb.imageContainer.clientHeight>20&&(this.sizeSpecifiedInCSS=!0)}},{key:"setThumbContainerSizeAndPos",value:function(){if(!this.sizeSpecifiedInCSS){var e=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(this.thumbContainerHeight,"px"),this.elements.thumb.imageContainer.style.width="".concat(e,"px")}this.setThumbContainerPos()}},{key:"setThumbContainerPos",value:function(){var e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),n=this.elements.thumb.container,i=t.left-e.left+10,r=t.right-e.left-n.clientWidth-10,a=this.mousePosX-e.left-n.clientWidth/2;a<i&&(a=i),a>r&&(a=r),n.style.left="".concat(a,"px")}},{key:"setScrubbingContainerSize",value:function(){this.elements.scrubbing.container.style.width="".concat(this.player.media.clientWidth,"px"),this.elements.scrubbing.container.style.height="".concat(this.player.media.clientWidth/this.thumbAspectRatio,"px")}},{key:"setImageSizeAndOffset",value:function(e,t){if(this.usingSprites){var n=this.thumbContainerHeight/t.h;e.style.height="".concat(Math.floor(e.naturalHeight*n),"px"),e.style.width="".concat(Math.floor(e.naturalWidth*n),"px"),e.style.left="-".concat(t.x*n,"px"),e.style.top="-".concat(t.y*n,"px")}}},{key:"enabled",get:function(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}},{key:"currentImageContainer",get:function(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}},{key:"usingSprites",get:function(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}},{key:"thumbAspectRatio",get:function(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}},{key:"thumbContainerHeight",get:function(){return this.mouseDown?Math.floor(this.player.media.clientWidth/this.thumbAspectRatio):Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}},{key:"currentImageElement",get:function(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement},set:function(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}}]),e}(),Lu={insertElements:function(e,t){var n=this;Fl.string(t)?Zl(e,this.media,{src:t}):Fl.array(t)&&t.forEach(function(t){Zl(e,n.media,t)})},change:function(e){var t=this;Yl(e,"sources.length")?(yc.cancelRequests.call(this),this.destroy.call(this,function(){t.options.quality=[],ec(t.media),t.media=null,Fl.element(t.elements.container)&&t.elements.container.removeAttribute("class");var n=e.sources,i=e.type,r=Ha(n,1)[0],a=r.provider,o=void 0===a?tu.html5:a,s=r.src,l="html5"===o?i:"div",c="html5"===o?{}:{src:s};Object.assign(t,{provider:o,type:i,supported:dc.check(i,o,t.config.playsinline),media:Jl(l,c)}),t.elements.container.appendChild(t.media),Fl.boolean(e.autoplay)&&(t.config.autoplay=e.autoplay),t.isHTML5&&(t.config.crossorigin&&t.media.setAttribute("crossorigin",""),t.config.autoplay&&t.media.setAttribute("autoplay",""),Fl.empty(e.poster)||(t.poster=e.poster),t.config.loop.active&&t.media.setAttribute("loop",""),t.config.muted&&t.media.setAttribute("muted",""),t.config.playsinline&&t.media.setAttribute("playsinline","")),uu.addStyleHook.call(t),t.isHTML5&&Lu.insertElements.call(t,"source",n),t.config.title=e.title,Au.setup.call(t),t.isHTML5&&Object.keys(e).includes("tracks")&&Lu.insertElements.call(t,"track",e.tracks),(t.isHTML5||t.isEmbed&&!t.supported.ui)&&uu.build.call(t),t.isHTML5&&t.media.load(),t.previewThumbnails&&t.previewThumbnails.load(),t.fullscreen.update()},!0)):this.debug.warn("Invalid source format")}};var Mu,Ou=function(){function e(t,n){var i=this;if(Ua(this,e),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=dc.touch,this.media=t,Fl.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||Fl.nodeList(this.media)||Fl.array(this.media))&&(this.media=this.media[0]),this.config=Gl({},Jc,e.defaults,n||{},function(){try{return JSON.parse(i.media.getAttribute("data-plyr-config"))}catch(e){return{}}}()),this.elements={container:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new ru(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",dc),!Fl.nullOrUndefined(this.media)&&Fl.element(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(dc.check().api){var r=this.media.cloneNode(!0);r.autoplay=!1,this.elements.original=r;var a=this.media.tagName.toLowerCase(),o=null,s=null;switch(a){case"div":if(o=this.media.querySelector("iframe"),Fl.element(o)){if(s=Gc(o.getAttribute("src")),this.provider=function(e){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?tu.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?tu.vimeo:null}(s.toString()),this.elements.container=this.media,this.media=o,this.elements.container.className="",s.search.length){var l=["1","true"];l.includes(s.searchParams.get("autoplay"))&&(this.config.autoplay=!0),l.includes(s.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=l.includes(s.searchParams.get("playsinline")),this.config.youtube.hl=s.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(Fl.empty(this.provider)||!Object.keys(tu).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=nu.video;break;case"video":case"audio":this.type=a,this.provider=tu.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=dc.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new hu(this),this.storage=new qc(this),this.media.plyr=this,Fl.element(this.elements.container)||(this.elements.container=Jl("div",{tabindex:0}),Ql(this.media,this.elements.container)),uu.addStyleHook.call(this),Au.setup.call(this),this.config.debug&&zl.call(this,this.elements.container,this.config.events.join(" "),function(e){i.debug.log("event: ".concat(e.type))}),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&uu.build.call(this),this.listeners.container(),this.listeners.global(),this.fullscreen=new su(this),this.config.ads.enabled&&(this.ads=new xu(this)),this.isHTML5&&this.config.autoplay&&setTimeout(function(){return i.play()},10),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new Iu(this))):this.debug.error("Setup failed: no support")}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed")}return qa(e,[{key:"play",value:function(){var e=this;return Fl.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then(function(){return e.ads.play()}).catch(function(){return e.media.play()}),this.media.play()):null}},{key:"pause",value:function(){this.playing&&Fl.function(this.media.pause)&&this.media.pause()}},{key:"togglePlay",value:function(e){(Fl.boolean(e)?e:!this.playing)?this.play():this.pause()}},{key:"stop",value:function(){this.isHTML5?(this.pause(),this.restart()):Fl.function(this.media.stop)&&this.media.stop()}},{key:"restart",value:function(){this.currentTime=0}},{key:"rewind",value:function(e){this.currentTime=this.currentTime-(Fl.number(e)?e:this.config.seekTime)}},{key:"forward",value:function(e){this.currentTime=this.currentTime+(Fl.number(e)?e:this.config.seekTime)}},{key:"increaseVolume",value:function(e){var t=this.media.muted?0:this.volume;this.volume=t+(Fl.number(e)?e:0)}},{key:"decreaseVolume",value:function(e){this.increaseVolume(-e)}},{key:"toggleCaptions",value:function(e){Xc.toggle.call(this,e,!1)}},{key:"airplay",value:function(){dc.airplay&&this.media.webkitShowPlaybackTargetPicker()}},{key:"toggleControls",value:function(e){if(this.supported.ui&&!this.isAudio){var t=oc(this.elements.container,this.config.classNames.hideControls),n=void 0===e?void 0:!e,i=ac(this.elements.container,this.config.classNames.hideControls,n);if(i&&this.config.controls.includes("settings")&&!Fl.empty(this.config.settings)&&Yc.toggleMenu.call(this,!1),i!==t){var r=i?"controlshidden":"controlsshown";$l.call(this,this.media,r)}return!i}return!1}},{key:"on",value:function(e,t){zl.call(this,this.elements.container,e,t)}},{key:"once",value:function(e,t){Kl.call(this,this.elements.container,e,t)}},{key:"off",value:function(e,t){Wl(this.elements.container,e,t)}},{key:"destroy",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.ready){var i=function(){document.body.style.overflow="",t.embed=null,n?(Object.keys(t.elements).length&&(ec(t.elements.buttons.play),ec(t.elements.captions),ec(t.elements.controls),ec(t.elements.wrapper),t.elements.buttons.play=null,t.elements.captions=null,t.elements.controls=null,t.elements.wrapper=null),Fl.function(e)&&e()):(function(){this&&this.eventListeners&&(this.eventListeners.forEach(function(e){var t=e.element,n=e.type,i=e.callback,r=e.options;t.removeEventListener(n,i,r)}),this.eventListeners=[])}.call(t),nc(t.elements.original,t.elements.container),$l.call(t,t.elements.original,"destroyed",!0),Fl.function(e)&&e.call(t.elements.original),t.ready=!1,setTimeout(function(){t.elements=null,t.media=null},200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(uu.toggleNativeControls.call(this,!0),i()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&Fl.function(this.embed.destroy)&&this.embed.destroy(),i()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(i),setTimeout(i,200))}}},{key:"supports",value:function(e){return dc.mime.call(this,e)}},{key:"isHTML5",get:function(){return this.provider===tu.html5}},{key:"isEmbed",get:function(){return this.isYouTube||this.isVimeo}},{key:"isYouTube",get:function(){return this.provider===tu.youtube}},{key:"isVimeo",get:function(){return this.provider===tu.vimeo}},{key:"isVideo",get:function(){return this.type===nu.video}},{key:"isAudio",get:function(){return this.type===nu.audio}},{key:"playing",get:function(){return Boolean(this.ready&&!this.paused&&!this.ended)}},{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:function(){return Boolean(this.paused&&0===this.currentTime)}},{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:function(e){if(this.duration){var t=Fl.number(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds"))}},get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:function(){var e=this.media.buffered;return Fl.number(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}},{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:function(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,n=Fl.number(t)&&t!==1/0?t:0;return e||n}},{key:"volume",set:function(e){var t=e;Fl.string(t)&&(t=Number(t)),Fl.number(t)||(t=this.storage.get("volume")),Fl.number(t)||(t=this.config.volume),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!Fl.empty(e)&&this.muted&&t>0&&(this.muted=!1)},get:function(){return Number(this.media.volume)}},{key:"muted",set:function(e){var t=e;Fl.boolean(t)||(t=this.storage.get("muted")),Fl.boolean(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t},get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:function(){return!this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}},{key:"speed",set:function(e){var t=this,n=null;Fl.number(e)&&(n=e),Fl.number(n)||(n=this.storage.get("speed")),Fl.number(n)||(n=this.config.speed.selected);var i=this.minimumSpeed,r=this.maximumSpeed;n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return Math.min(Math.max(e,t),n)}(n,i,r),this.config.speed.selected=n,setTimeout(function(){t.media.playbackRate=n},0)},get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,Va(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:function(){return this.isYouTube?Math.max.apply(Math,Va(this.options.speed)):this.isVimeo?2:16}},{key:"quality",set:function(e){var t=this.config.quality,n=this.options.quality;if(n.length){var i=[!Fl.empty(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(Fl.number),r=!0;if(!n.includes(i)){var a=function(e,t){return Fl.array(e)&&e.length?e.reduce(function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e}):null}(n,i);this.debug.warn("Unsupported quality option: ".concat(i,", using ").concat(a," instead")),i=a,r=!1}t.selected=i,this.media.quality=i,r&&this.storage.set({quality:i})}},get:function(){return this.media.quality}},{key:"loop",set:function(e){var t=Fl.boolean(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t},get:function(){return Boolean(this.media.loop)}},{key:"source",set:function(e){Lu.change.call(this,e)},get:function(){return this.media.currentSrc}},{key:"download",get:function(){var e=this.config.urls.download;return Fl.url(e)?e:this.source},set:function(e){Fl.url(e)&&(this.config.urls.download=e,Yc.setDownloadUrl.call(this))}},{key:"poster",set:function(e){this.isVideo?uu.setPoster.call(this,e,!1).catch(function(){}):this.debug.warn("Poster can only be set for video")},get:function(){return this.isVideo?this.media.getAttribute("poster"):null}},{key:"ratio",get:function(){if(!this.isVideo)return null;var e=mc(gc.call(this));return Fl.array(e)?e.join(":"):e},set:function(e){this.isVideo?Fl.string(e)&&pc(e)?(this.config.ratio=e,vc.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video")}},{key:"autoplay",set:function(e){var t=Fl.boolean(e)?e:this.config.autoplay;this.config.autoplay=t},get:function(){return Boolean(this.config.autoplay)}},{key:"currentTrack",set:function(e){Xc.set.call(this,e,!1)},get:function(){var e=this.captions,t=e.toggled,n=e.currentTrack;return t?n:-1}},{key:"language",set:function(e){Xc.setLanguage.call(this,e,!1)},get:function(){return(Xc.getCurrentTrack.call(this)||{}).language}},{key:"pip",set:function(e){if(dc.pip){var t=Fl.boolean(e)?e:!this.pip;Fl.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?Zc:eu),Fl.function(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}},get:function(){return dc.pip?Fl.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Zc:null}}],[{key:"supported",value:function(e,t,n){return dc.check(e,t,n)}},{key:"loadSprite",value:function(e,t){return Hc(e,t)}},{key:"setup",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;return Fl.string(t)?i=Array.from(document.querySelectorAll(t)):Fl.nodeList(t)?i=Array.from(t):Fl.array(t)&&(i=t.filter(Fl.element)),Fl.empty(i)?null:i.map(function(t){return new e(t,n)})}}]),e}();return Ou.defaults=(Mu=Jc,JSON.parse(JSON.stringify(Mu))),Ou});
//# sourceMappingURL=plyr.polyfilled.min.js.


"object"==typeof navigator&&function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Plyr",t):(e=e||self).Plyr=t()}(this,function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,s=void 0;try{for(var r,o=e[Symbol.iterator]();!(i=(r=o.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){a=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r={addCSS:!0,thumbWidth:15,watch:!0};var o=function(e){return null!=e?e.constructor:null},l=function(e,t){return Boolean(e&&t&&e instanceof t)},c=function(e){return null==e},u=function(e){return o(e)===Object},d=function(e){return o(e)===String},h=function(e){return Array.isArray(e)},m=function(e){return l(e,NodeList)},p={nullOrUndefined:c,object:u,number:function(e){return o(e)===Number&&!Number.isNaN(e)},string:d,boolean:function(e){return o(e)===Boolean},function:function(e){return o(e)===Function},array:h,nodeList:m,element:function(e){return l(e,Element)},event:function(e){return l(e,Event)},empty:function(e){return c(e)||(d(e)||h(e)||m(e))&&!e.length||u(e)&&!Object.keys(e).length}};function f(e,t){if(t<1){var n=(i="".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))?Math.max(0,(i[1]?i[1].length:0)-(i[2]?+i[2]:0)):0;return parseFloat(e.toFixed(n))}var i;return Math.round(e/t)*t}var g,y,v,b=function(){function t(n,i){e(this,t),p.element(n)?this.element=n:p.string(n)&&(this.element=document.querySelector(n)),p.element(this.element)&&p.empty(this.element.rangeTouch)&&(this.config=Object.assign({},r,i),this.init())}return n(t,[{key:"init",value:function(){t.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){t.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[n](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(e){if(!t.enabled||!p.event(e))return null;var n,i=e.target,a=e.changedTouches[0],s=parseFloat(i.getAttribute("min"))||0,r=parseFloat(i.getAttribute("max"))||100,o=parseFloat(i.getAttribute("step"))||1,l=r-s,c=i.getBoundingClientRect(),u=100/c.width*(this.config.thumbWidth/2)/100;return(n=100/c.width*(a.clientX-c.left))<0?n=0:n>100&&(n=100),n<50?n-=(100-2*n)*u:n>50&&(n+=2*(n-50)*u),s+f(l*(n/100),o)}},{key:"set",value:function(e){t.enabled&&p.event(e)&&!e.target.disabled&&(e.preventDefault(),e.target.value=this.get(e),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(e.target,"touchend"===e.type?"change":"input"))}}],[{key:"setup",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;if(p.empty(e)||p.string(e)?i=Array.from(document.querySelectorAll(p.string(e)?e:'input[type="range"]')):p.element(e)?i=[e]:p.nodeList(e)?i=Array.from(e):p.array(e)&&(i=e.filter(p.element)),p.empty(i))return null;var a=Object.assign({},r,n);p.string(e)&&a.watch&&new MutationObserver(function(n){Array.from(n).forEach(function(n){Array.from(n.addedNodes).forEach(function(n){if(p.element(n)&&function(){return Array.from(document.querySelectorAll(i)).includes(this)}.call(n,i=e)){var i;new t(n,a)}})})}).observe(document.body,{childList:!0,subtree:!0});return i.map(function(e){return new t(e,n)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),t}(),k=function(e){return null!=e?e.constructor:null},w=function(e,t){return Boolean(e&&t&&e instanceof t)},T=function(e){return null==e},C=function(e){return k(e)===Object},A=function(e){return k(e)===String},E=function(e){return Array.isArray(e)},S=function(e){return w(e,NodeList)},P=function(e){return T(e)||(A(e)||E(e)||S(e))&&!e.length||C(e)&&!Object.keys(e).length},N={nullOrUndefined:T,object:C,number:function(e){return k(e)===Number&&!Number.isNaN(e)},string:A,boolean:function(e){return k(e)===Boolean},function:function(e){return k(e)===Function},array:E,weakMap:function(e){return w(e,WeakMap)},nodeList:S,element:function(e){return w(e,Element)},textNode:function(e){return k(e)===Text},event:function(e){return w(e,Event)},keyboardEvent:function(e){return w(e,KeyboardEvent)},cue:function(e){return w(e,window.TextTrackCue)||w(e,window.VTTCue)},track:function(e){return w(e,TextTrack)||!T(e)&&A(e.kind)},promise:function(e){return w(e,Promise)},url:function(e){if(w(e,window.URL))return!0;if(!A(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!P(new URL(t).hostname)}catch(e){return!1}},empty:P},M=(g=document.createElement("span"),y={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},v=Object.keys(y).find(function(e){return void 0!==g.style[e]}),!!N.string(v)&&y[v]);function x(e,t){setTimeout(function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}},t)}var L={isIE:!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)},I=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}();function _(e,t,n){var i=this,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(e&&"addEventListener"in e&&!N.empty(t)&&N.function(n)){var o=t.split(" "),l=r;I&&(l={passive:s,capture:r}),o.forEach(function(t){i&&i.eventListeners&&a&&i.eventListeners.push({element:e,type:t,callback:n,options:l}),e[a?"addEventListener":"removeEventListener"](t,n,l)})}}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];_.call(this,e,t,n,!0,i,a)}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];_.call(this,e,t,n,!1,i,a)}function q(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];_.call(this,e,n,function r(){j(e,n,r,a,s);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];i.apply(t,l)},!0,a,s)}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(N.element(e)&&!N.empty(t)){var a=new CustomEvent(t,{bubbles:n,detail:Object.assign({},i,{plyr:this})});e.dispatchEvent(a)}}function D(e,t){return t.split(".").reduce(function(e,t){return e&&e[t]},e)}function F(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(!n.length)return e;var s=n.shift();return N.object(s)?(Object.keys(s).forEach(function(t){N.object(s[t])?(Object.keys(e).includes(t)||Object.assign(e,i({},t,{})),F(e[t],s[t])):Object.assign(e,i({},t,s[t]))}),F.apply(void 0,[e].concat(n))):e}function R(e,t){var n=e.length?e:[e];Array.from(n).reverse().forEach(function(e,n){var i=n>0?t.cloneNode(!0):t,a=e.parentNode,s=e.nextSibling;i.appendChild(e),s?a.insertBefore(i,s):a.appendChild(i)})}function V(e,t){N.element(e)&&!N.empty(t)&&Object.entries(t).filter(function(e){var t=a(e,2)[1];return!N.nullOrUndefined(t)}).forEach(function(t){var n=a(t,2),i=n[0],s=n[1];return e.setAttribute(i,s)})}function B(e,t,n){var i=document.createElement(e);return N.object(t)&&V(i,t),N.string(n)&&(i.innerText=n),i}function U(e,t,n,i){N.element(t)&&t.appendChild(B(e,n,i))}function W(e){N.nodeList(e)||N.array(e)?Array.from(e).forEach(W):N.element(e)&&N.element(e.parentNode)&&e.parentNode.removeChild(e)}function z(e){if(N.element(e))for(var t=e.childNodes.length;t>0;)e.removeChild(e.lastChild),t-=1}function K(e,t){return N.element(t)&&N.element(t.parentNode)&&N.element(e)?(t.parentNode.replaceChild(e,t),e):null}function Y(e,t){if(!N.string(e)||N.empty(e))return{};var n={},i=F({},t);return e.split(",").forEach(function(e){var t=e.trim(),s=t.replace(".",""),r=t.replace(/[[\]]/g,"").split("="),o=a(r,1)[0],l=r.length>1?r[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":N.string(i.class)?n.class="".concat(i.class," ").concat(s):n.class=s;break;case"#":n.id=t.replace("#","");break;case"[":n[o]=l}}),F(i,n)}function Q(e,t){if(N.element(e)){var n=t;N.boolean(n)||(n=!e.hidden),e.hidden=n}}function X(e,t,n){if(N.nodeList(e))return Array.from(e).map(function(e){return X(e,t,n)});if(N.element(e)){var i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}function J(e,t){return N.element(e)&&e.classList.contains(t)}function $(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function G(e){return this.elements.container.querySelectorAll(e)}function Z(e){return this.elements.container.querySelector(e)}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];N.element(e)&&(e.focus({preventScroll:!0}),t&&X(e,this.config.classNames.tabFocus))}var te,ne={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},ie={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,n){var i=L.isIPhone&&n&&ie.playsinline,a=ie[e]||"html5"!==t;return{api:a,ui:a&&ie.rangeInput&&("video"!==e||!L.isIPhone||i)}},pip:!(L.isIPhone||!N.function(B("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||B("video").disablePictureInPicture)),airplay:N.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(N.empty(e))return!1;var t=a(e.split("/"),1)[0],n=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(ne).includes(n)&&(n+='; codecs="'.concat(ne[e],'"'));try{return Boolean(n&&this.media.canPlayType(n).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(te=document.createElement("input"),te.type="range","range"===te.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==M,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches};function ae(e){return!!(N.array(e)||N.string(e)&&e.includes(":"))&&(N.array(e)?e:e.split(":")).map(Number).every(N.number)}function se(e){if(!N.array(e)||!e.every(N.number))return null;var t=a(e,2),n=t[0],i=t[1],s=function e(t,n){return 0===n?t:e(n,t%n)}(n,i);return[n/s,i/s]}function re(e){var t=function(e){return ae(e)?e.split(":").map(Number):null},n=t(e);if(null===n&&(n=t(this.config.ratio)),null===n&&!N.empty(this.embed)&&N.array(this.embed.ratio)&&(n=this.embed.ratio),null===n&&this.isHTML5){var i=this.media;n=se([i.videoWidth,i.videoHeight])}return n}function oe(e){if(!this.isVideo)return{};var t=re.call(this,e),n=a(N.array(t)?t:[0,0],2),i=100/n[0]*n[1];if(this.elements.wrapper.style.paddingBottom="".concat(i,"%"),this.isVimeo&&this.supported.ui){var s=(240-i)/4.8;this.media.style.transform="translateY(-".concat(s,"%)")}else this.isHTML5&&this.elements.wrapper.classList.toggle(this.config.classNames.videoFixedRatio,null!==t);return{padding:i,ratio:t}}var le={getSources:function(){var e=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter(function(t){var n=t.getAttribute("type");return!!N.empty(n)||ie.mime.call(e,n)}):[]},getQualityOptions:function(){return le.getSources.call(this).map(function(e){return Number(e.getAttribute("size"))}).filter(Boolean)},extend:function(){if(this.isHTML5){var e=this;N.empty(this.config.ratio)||oe.call(e),Object.defineProperty(e.media,"quality",{get:function(){var t=le.getSources.call(e).find(function(t){return t.getAttribute("src")===e.source});return t&&Number(t.getAttribute("size"))},set:function(t){var n=le.getSources.call(e).find(function(e){return Number(e.getAttribute("size"))===t});if(n){var i=e.media,a=i.currentTime,s=i.paused,r=i.preload,o=i.readyState;e.media.src=n.getAttribute("src"),("none"!==r||o)&&(e.once("loadedmetadata",function(){e.currentTime=a,s||e.play()}),e.media.load()),H.call(e,e.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:function(){this.isHTML5&&(W(le.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function ce(e){return N.array(e)?e.filter(function(t,n){return e.indexOf(t)===n}):e}function ue(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return N.empty(e)?e:e.toString().replace(/{(\d+)}/g,function(e,t){return n[t].toString()})}function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1"),"g"),n.toString())}function he(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function me(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return(e=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return e=de(e,"-"," "),e=de(e,"_"," "),de(e=he(e)," ","")}(e)).charAt(0).toLowerCase()+e.slice(1)}function pe(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}var fe={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(N.empty(e)||N.empty(t))return"";var n=D(t.i18n,e);if(N.empty(n))return Object.keys(fe).includes(e)?fe[e]:"";var i={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(i).forEach(function(e){var t=a(e,2),i=t[0],s=t[1];n=de(n,i,s)}),n},ye=function(){function t(n){e(this,t),this.enabled=n.config.storage.enabled,this.key=n.config.storage.key}return n(t,[{key:"get",value:function(e){if(!t.supported||!this.enabled)return null;var n=window.localStorage.getItem(this.key);if(N.empty(n))return null;var i=JSON.parse(n);return N.string(e)&&e.length?i[e]:i}},{key:"set",value:function(e){if(t.supported&&this.enabled&&N.object(e)){var n=this.get();N.empty(n)&&(n={}),F(n,e),window.localStorage.setItem(this.key,JSON.stringify(n))}}}],[{key:"supported",get:function(){try{if(!("localStorage"in window))return!1;return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(e){return!1}}}]),t}();function ve(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise(function(n,i){try{var a=new XMLHttpRequest;if(!("withCredentials"in a))return;a.addEventListener("load",function(){if("text"===t)try{n(JSON.parse(a.responseText))}catch(e){n(a.responseText)}else n(a.response)}),a.addEventListener("error",function(){throw new Error(a.status)}),a.open("GET",e,!0),a.responseType=t,a.send()}catch(e){i(e)}})}function be(e,t){if(N.string(e)){var n=N.string(t),i=function(){return null!==document.getElementById(t)},a=function(e,t){e.innerHTML=t,n&&i()||document.body.insertAdjacentElement("afterbegin",e)};if(!n||!i()){var s=ye.supported,r=document.createElement("div");if(r.setAttribute("hidden",""),n&&r.setAttribute("id",t),s){var o=window.localStorage.getItem("".concat("cache","-").concat(t));if(null!==o){var l=JSON.parse(o);a(r,l.content)}}ve(e).then(function(e){N.empty(e)||(s&&window.localStorage.setItem("".concat("cache","-").concat(t),JSON.stringify({content:e})),a(r,e))}).catch(function(){})}}}var ke=function(e){return Math.trunc(e/60/60%60,10)},we=function(e){return Math.trunc(e/60%60,10)},Te=function(e){return Math.trunc(e%60,10)};function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!N.number(e))return Ce(null,t,n);var i=function(e){return"0".concat(e).slice(-2)},a=ke(e),s=we(e),r=Te(e);return a=t||a>0?"".concat(a,":"):"","".concat(n&&e>0?"-":"").concat(a).concat(i(s),":").concat(i(r))}var Ae={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||L.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=Z.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:G.call(this,this.config.selectors.buttons.play),pause:Z.call(this,this.config.selectors.buttons.pause),restart:Z.call(this,this.config.selectors.buttons.restart),rewind:Z.call(this,this.config.selectors.buttons.rewind),fastForward:Z.call(this,this.config.selectors.buttons.fastForward),mute:Z.call(this,this.config.selectors.buttons.mute),pip:Z.call(this,this.config.selectors.buttons.pip),airplay:Z.call(this,this.config.selectors.buttons.airplay),settings:Z.call(this,this.config.selectors.buttons.settings),captions:Z.call(this,this.config.selectors.buttons.captions),fullscreen:Z.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=Z.call(this,this.config.selectors.progress),this.elements.inputs={seek:Z.call(this,this.config.selectors.inputs.seek),volume:Z.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:Z.call(this,this.config.selectors.display.buffer),currentTime:Z.call(this,this.config.selectors.display.currentTime),duration:Z.call(this,this.config.selectors.display.duration)},N.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var n=Ae.getIconUrl.call(this),i="".concat(n.cors?"":n.url,"#").concat(this.config.iconPrefix),a=document.createElementNS("http://www.w3.org/2000/svg","svg");V(a,F(t,{role:"presentation",focusable:"false"}));var s=document.createElementNS("http://www.w3.org/2000/svg","use"),r="".concat(i,"-").concat(e);return"href"in s&&s.setAttributeNS("http://www.w3.org/1999/xlink","href",r),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r),a.appendChild(s),a},createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=ge(e,this.config);return B("span",Object.assign({},t,{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")}),n)},createBadge:function(e){if(N.empty(e))return null;var t=B("span",{class:this.config.classNames.menu.value});return t.appendChild(B("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var n=this,i=F({},t),a=me(e),s={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(function(e){Object.keys(i).includes(e)&&(s[e]=i[e],delete i[e])}),"button"!==s.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").some(function(e){return e===n.config.classNames.control})||F(i,{class:"".concat(i.class," ").concat(this.config.classNames.control)}):i.class=this.config.classNames.control,e){case"play":s.toggle=!0,s.label="play",s.labelPressed="pause",s.icon="play",s.iconPressed="pause";break;case"mute":s.toggle=!0,s.label="mute",s.labelPressed="unmute",s.icon="volume",s.iconPressed="muted";break;case"captions":s.toggle=!0,s.label="enableCaptions",s.labelPressed="disableCaptions",s.icon="captions-off",s.iconPressed="captions-on";break;case"fullscreen":s.toggle=!0,s.label="enterFullscreen",s.labelPressed="exitFullscreen",s.icon="enter-fullscreen",s.iconPressed="exit-fullscreen";break;case"play-large":i.class+=" ".concat(this.config.classNames.control,"--overlaid"),a="play",s.label="play",s.icon="play";break;default:N.empty(s.label)&&(s.label=a),N.empty(s.icon)&&(s.icon=e)}var r=B(s.element);return s.toggle?(r.appendChild(Ae.createIcon.call(this,s.iconPressed,{class:"icon--pressed"})),r.appendChild(Ae.createIcon.call(this,s.icon,{class:"icon--not-pressed"})),r.appendChild(Ae.createLabel.call(this,s.labelPressed,{class:"label--pressed"})),r.appendChild(Ae.createLabel.call(this,s.label,{class:"label--not-pressed"}))):(r.appendChild(Ae.createIcon.call(this,s.icon)),r.appendChild(Ae.createLabel.call(this,s.label))),F(i,Y(this.config.selectors.buttons[a],i)),V(r,i),"play"===a?(N.array(this.elements.buttons[a])||(this.elements.buttons[a]=[]),this.elements.buttons[a].push(r)):this.elements.buttons[a]=r,r},createRange:function(e,t){var n=B("input",F(Y(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":ge(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=n,Ae.updateRangeFill.call(this,n),b.setup(n),n},createProgress:function(e,t){var n=B("progress",F(Y(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){n.appendChild(B("span",null,"0"));var i={played:"played",buffer:"buffered"}[e],a=i?ge(i,this.config):"";n.innerText="% ".concat(a.toLowerCase())}return this.elements.display[e]=n,n},createTime:function(e,t){var n=Y(this.config.selectors.display[e],t),i=B("div",F(n,{class:"".concat(n.class?n.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":ge(e,this.config)}),"00:00");return this.elements.display[e]=i,i},bindMenuItemShortcuts:function(e,t){var n=this;O(e,"keydown keyup",function(i){if([32,38,39,40].includes(i.which)&&(i.preventDefault(),i.stopPropagation(),"keydown"!==i.type)){var a,s=$(e,'[role="menuitemradio"]');if(!s&&[32,39].includes(i.which))Ae.showMenuPanel.call(n,t,!0);else 32!==i.which&&(40===i.which||s&&39===i.which?(a=e.nextElementSibling,N.element(a)||(a=e.parentNode.firstElementChild)):(a=e.previousElementSibling,N.element(a)||(a=e.parentNode.lastElementChild)),ee.call(n,a,!0))}},!1),O(e,"keyup",function(e){13===e.which&&Ae.focusFirstMenuItem.call(n,null,!0)})},createMenuItem:function(e){var t=this,n=e.value,i=e.list,a=e.type,s=e.title,r=e.badge,o=void 0===r?null:r,l=e.checked,c=void 0!==l&&l,u=Y(this.config.selectors.inputs[a]),d=B("button",F(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:n})),h=B("span");h.innerHTML=s,N.element(o)&&h.appendChild(o),d.appendChild(h),Object.defineProperty(d,"checked",{enumerable:!0,get:function(){return"true"===d.getAttribute("aria-checked")},set:function(e){e&&Array.from(d.parentNode.children).filter(function(e){return $(e,'[role="menuitemradio"]')}).forEach(function(e){return e.setAttribute("aria-checked","false")}),d.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(d,"click keyup",function(e){if(!N.keyboardEvent(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),d.checked=!0,a){case"language":t.currentTrack=Number(n);break;case"quality":t.quality=n;break;case"speed":t.speed=parseFloat(n)}Ae.showMenuPanel.call(t,"home",N.keyboardEvent(e))}},a,!1),Ae.bindMenuItemShortcuts.call(this,d,a),i.appendChild(d)},formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return N.number(e)?Ce(e,ke(this.duration)>0,t):e},updateTimeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];N.element(e)&&N.number(t)&&(e.innerText=Ae.formatTime(t,n))},updateVolume:function(){this.supported.ui&&(N.element(this.elements.inputs.volume)&&Ae.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),N.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;N.element(e)&&(e.value=t,Ae.updateRangeFill.call(this,e))},updateProgress:function(e){var t=this;if(this.supported.ui&&N.event(e)){var n,i,a=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":n=this.currentTime,i=this.duration,a=0===n||0===i||Number.isNaN(n)||Number.isNaN(i)?0:(n/i*100).toFixed(2),"timeupdate"===e.type&&Ae.setRange.call(this,this.elements.inputs.seek,a);break;case"playing":case"progress":!function(e,n){var i=N.number(n)?n:0,a=N.element(e)?e:t.elements.display.buffer;if(N.element(a)){a.value=i;var s=a.getElementsByTagName("span")[0];N.element(s)&&(s.childNodes[0].nodeValue=i)}}(this.elements.display.buffer,100*this.buffered)}}},updateRangeFill:function(e){var t=N.event(e)?e.target:e;if(N.element(t)&&"range"===t.getAttribute("type")){if($(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var n=Ae.formatTime(this.currentTime),i=Ae.formatTime(this.duration),a=ge("seekLabel",this.config);t.setAttribute("aria-valuetext",a.replace("{currentTime}",n).replace("{duration}",i))}else if($(t,this.config.selectors.inputs.volume)){var s=100*t.value;t.setAttribute("aria-valuenow",s),t.setAttribute("aria-valuetext","".concat(s.toFixed(1),"%"))}else t.setAttribute("aria-valuenow",t.value);L.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"))}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&N.element(this.elements.inputs.seek)&&N.element(this.elements.display.seekTooltip)&&0!==this.duration){var n="".concat(this.config.classNames.tooltip,"--visible"),i=function(e){return X(t.elements.display.seekTooltip,n,e)};if(this.touch)i(!1);else{var a=0,s=this.elements.progress.getBoundingClientRect();if(N.event(e))a=100/s.width*(e.pageX-s.left);else{if(!J(this.elements.display.seekTooltip,n))return;a=parseFloat(this.elements.display.seekTooltip.style.left,10)}a<0?a=0:a>100&&(a=100),Ae.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*a),this.elements.display.seekTooltip.style.left="".concat(a,"%"),N.event(e)&&["mouseenter","mouseleave"].includes(e.type)&&i("mouseenter"===e.type)}}},timeUpdate:function(e){var t=!N.element(this.elements.display.duration)&&this.config.invertTime;Ae.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||Ae.updateProgress.call(this,e)},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return Q(this.elements.display.currentTime,!0),void Q(this.elements.progress,!0);N.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=N.element(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&Ae.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&Ae.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),Ae.updateSeekTooltip.call(this)}},toggleMenuButton:function(e,t){Q(this.elements.settings.buttons[e],!t)},updateSetting:function(e,t,n){var i=this.elements.settings.panels[e],a=null,s=t;if("captions"===e)a=this.currentTrack;else{if(a=N.empty(n)?this[e]:n,N.empty(a)&&(a=this.config[e].default),!N.empty(this.options[e])&&!this.options[e].includes(a))return void this.debug.warn("Unsupported value of '".concat(a,"' for ").concat(e));if(!this.config[e].options.includes(a))return void this.debug.warn("Disabled value of '".concat(a,"' for ").concat(e))}if(N.element(s)||(s=i&&i.querySelector('[role="menu"]')),N.element(s)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=Ae.getLabel.call(this,e,a);var r=s&&s.querySelector('[value="'.concat(a,'"]'));N.element(r)&&(r.checked=!0)}},getLabel:function(e,t){switch(e){case"speed":return 1===t?ge("normal",this.config):"".concat(t,"&times;");case"quality":if(N.number(t)){var n=ge("qualityLabel.".concat(t),this.config);return n.length?n:"".concat(t,"p")}return he(t);case"captions":return Pe.getLabel.call(this);default:return null}},setQualityMenu:function(e){var t=this;if(N.element(this.elements.settings.panels.quality)){var n=this.elements.settings.panels.quality.querySelector('[role="menu"]');N.array(e)&&(this.options.quality=ce(e).filter(function(e){return t.config.quality.options.includes(e)}));var i=!N.empty(this.options.quality)&&this.options.quality.length>1;if(Ae.toggleMenuButton.call(this,"quality",i),z(n),Ae.checkMenu.call(this),i){var a=function(e){var n=ge("qualityBadge.".concat(e),t.config);return n.length?Ae.createBadge.call(t,n):null};this.options.quality.sort(function(e,n){var i=t.config.quality.options;return i.indexOf(e)>i.indexOf(n)?1:-1}).forEach(function(e){Ae.createMenuItem.call(t,{value:e,list:n,type:"quality",title:Ae.getLabel.call(t,"quality",e),badge:a(e)})}),Ae.updateSetting.call(this,"quality",n)}}},setCaptionsMenu:function(){var e=this;if(N.element(this.elements.settings.panels.captions)){var t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),n=Pe.getTracks.call(this),i=Boolean(n.length);if(Ae.toggleMenuButton.call(this,"captions",i),z(t),Ae.checkMenu.call(this),i){var a=n.map(function(n,i){return{value:i,checked:e.captions.toggled&&e.currentTrack===i,title:Pe.getLabel.call(e,n),badge:n.language&&Ae.createBadge.call(e,n.language.toUpperCase()),list:t,type:"language"}});a.unshift({value:-1,checked:!this.captions.toggled,title:ge("disabled",this.config),list:t,type:"language"}),a.forEach(Ae.createMenuItem.bind(this)),Ae.updateSetting.call(this,"captions",t)}}},setSpeedMenu:function(e){var t=this;if(N.element(this.elements.settings.panels.speed)){var n=this.elements.settings.panels.speed.querySelector('[role="menu"]');N.array(e)?this.options.speed=e:(this.isHTML5||this.isVimeo)&&(this.options.speed=[.5,.75,1,1.25,1.5,1.75,2]),this.options.speed=this.options.speed.filter(function(e){return t.config.speed.options.includes(e)});var i=!N.empty(this.options.speed)&&this.options.speed.length>1;Ae.toggleMenuButton.call(this,"speed",i),z(n),Ae.checkMenu.call(this),i&&(this.options.speed.forEach(function(e){Ae.createMenuItem.call(t,{value:e,list:n,type:"speed",title:Ae.getLabel.call(t,"speed",e)})}),Ae.updateSetting.call(this,"speed",n))}},checkMenu:function(){var e=this.elements.settings.buttons,t=!N.empty(e)&&Object.values(e).some(function(e){return!e.hidden});Q(this.elements.settings.menu,!t)},focusFirstMenuItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.elements.settings.popup.hidden){var n=e;N.element(n)||(n=Object.values(this.elements.settings.panels).find(function(e){return!e.hidden}));var i=n.querySelector('[role^="menuitem"]');ee.call(this,i,t)}},toggleMenu:function(e){var t=this.elements.settings.popup,n=this.elements.buttons.settings;if(N.element(t)&&N.element(n)){var i=t.hidden,a=i;if(N.boolean(e))a=e;else if(N.keyboardEvent(e)&&27===e.which)a=!1;else if(N.event(e)){var s=N.function(e.composedPath)?e.composedPath()[0]:e.target,r=t.contains(s);if(r||!r&&e.target!==n&&a)return}n.setAttribute("aria-expanded",a),Q(t,!a),X(this.elements.container,this.config.classNames.menu.open,a),a&&N.keyboardEvent(e)?Ae.focusFirstMenuItem.call(this,null,!0):a||i||ee.call(this,n,N.keyboardEvent(e))}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var n=t.scrollWidth,i=t.scrollHeight;return W(t),{width:n,height:i}},showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(N.element(i)){var a=i.parentNode,s=Array.from(a.children).find(function(e){return!e.hidden});if(ie.transitions&&!ie.reducedMotion){a.style.width="".concat(s.scrollWidth,"px"),a.style.height="".concat(s.scrollHeight,"px");var r=Ae.getMenuSize.call(this,i);O.call(this,a,M,function t(n){n.target===a&&["width","height"].includes(n.propertyName)&&(a.style.width="",a.style.height="",j.call(e,a,M,t))}),a.style.width="".concat(r.width,"px"),a.style.height="".concat(r.height,"px")}Q(s,!0),Q(i,!1),Ae.focusFirstMenuItem.call(this,i,n)}},setDownloadUrl:function(){var e=this.elements.buttons.download;N.element(e)&&e.setAttribute("href",this.download)},create:function(e){var t=this,n=Ae.bindMenuItemShortcuts,i=Ae.createButton,a=Ae.createProgress,s=Ae.createRange,r=Ae.createTime,o=Ae.setQualityMenu,l=Ae.setSpeedMenu,c=Ae.showMenuPanel;this.elements.controls=null,this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large"));var u=B("div",Y(this.config.selectors.controls.wrapper));this.elements.controls=u;var d={class:"plyr__controls__item"};return ce(this.config.controls).forEach(function(o){if("restart"===o&&u.appendChild(i.call(t,"restart",d)),"rewind"===o&&u.appendChild(i.call(t,"rewind",d)),"play"===o&&u.appendChild(i.call(t,"play",d)),"fast-forward"===o&&u.appendChild(i.call(t,"fast-forward",d)),"progress"===o){var l=B("div",{class:"".concat(d.class," plyr__progress__container")}),h=B("div",Y(t.config.selectors.progress));if(h.appendChild(s.call(t,"seek",{id:"plyr-seek-".concat(e.id)})),h.appendChild(a.call(t,"buffer")),t.config.tooltips.seek){var m=B("span",{class:t.config.classNames.tooltip},"00:00");h.appendChild(m),t.elements.display.seekTooltip=m}t.elements.progress=h,l.appendChild(t.elements.progress),u.appendChild(l)}if("current-time"===o&&u.appendChild(r.call(t,"currentTime",d)),"duration"===o&&u.appendChild(r.call(t,"duration",d)),"mute"===o||"volume"===o){var p=t.elements.volume;if(N.element(p)&&u.contains(p)||(p=B("div",F({},d,{class:"".concat(d.class," plyr__volume").trim()})),t.elements.volume=p,u.appendChild(p)),"mute"===o&&p.appendChild(i.call(t,"mute")),"volume"===o){var f={max:1,step:.05,value:t.config.volume};p.appendChild(s.call(t,"volume",F(f,{id:"plyr-volume-".concat(e.id)})))}}if("captions"===o&&u.appendChild(i.call(t,"captions",d)),"settings"===o&&!N.empty(t.config.settings)){var g=B("div",F({},d,{class:"".concat(d.class," plyr__menu").trim(),hidden:""}));g.appendChild(i.call(t,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(e.id),"aria-expanded":!1}));var y=B("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(e.id),hidden:""}),v=B("div"),b=B("div",{id:"plyr-settings-".concat(e.id,"-home")}),k=B("div",{role:"menu"});b.appendChild(k),v.appendChild(b),t.elements.settings.panels.home=b,t.config.settings.forEach(function(i){var a=B("button",F(Y(t.config.selectors.buttons.settings),{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));n.call(t,a,i),O(a,"click",function(){c.call(t,i,!1)});var s=B("span",null,ge(i,t.config)),r=B("span",{class:t.config.classNames.menu.value});r.innerHTML=e[i],s.appendChild(r),a.appendChild(s),k.appendChild(a);var o=B("div",{id:"plyr-settings-".concat(e.id,"-").concat(i),hidden:""}),l=B("button",{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--back")});l.appendChild(B("span",{"aria-hidden":!0},ge(i,t.config))),l.appendChild(B("span",{class:t.config.classNames.hidden},ge("menuBack",t.config))),O(o,"keydown",function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),c.call(t,"home",!0))},!1),O(l,"click",function(){c.call(t,"home",!1)}),o.appendChild(l),o.appendChild(B("div",{role:"menu"})),v.appendChild(o),t.elements.settings.buttons[i]=a,t.elements.settings.panels[i]=o}),y.appendChild(v),g.appendChild(y),u.appendChild(g),t.elements.settings.popup=y,t.elements.settings.menu=g}if("pip"===o&&ie.pip&&u.appendChild(i.call(t,"pip",d)),"airplay"===o&&ie.airplay&&u.appendChild(i.call(t,"airplay",d)),"download"===o){var w=F({},d,{element:"a",href:t.download,target:"_blank"}),T=t.config.urls.download;!N.url(T)&&t.isEmbed&&F(w,{icon:"logo-".concat(t.provider),label:t.provider}),u.appendChild(i.call(t,"download",w))}"fullscreen"===o&&u.appendChild(i.call(t,"fullscreen",d))}),this.isHTML5&&o.call(this,le.getQualityOptions.call(this)),l.call(this),u},inject:function(){var e=this;if(this.config.loadSprite){var t=Ae.getIconUrl.call(this);t.cors&&be(t.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var n=null;this.elements.controls=null;var i={id:this.id,seektime:this.config.seekTime,title:this.config.title},s=!0;N.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,i)),this.config.controls||(this.config.controls=[]),N.element(this.config.controls)||N.string(this.config.controls)?n=this.config.controls:(n=Ae.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Pe.getLabel.call(this)}),s=!1);var r,o=function(e){var t=e;return Object.entries(i).forEach(function(e){var n=a(e,2),i=n[0],s=n[1];t=de(t,"{".concat(i,"}"),s)}),t};if(s&&(N.string(this.config.controls)?n=o(n):N.element(n)&&(n.innerHTML=o(n.innerHTML))),N.string(this.config.selectors.controls.container)&&(r=document.querySelector(this.config.selectors.controls.container)),N.element(r)||(r=this.elements.container),r[N.element(n)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",n),N.element(this.elements.controls)||Ae.findElements.call(this),!N.empty(this.elements.buttons)){var l=function(t){var n=e.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function(){return J(t,n)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];X(t,n,e)}})};Object.values(this.elements.buttons).filter(Boolean).forEach(function(e){N.array(e)||N.nodeList(e)?Array.from(e).filter(Boolean).forEach(l):l(e)})}if(L.isEdge&&x(r),this.config.tooltips.controls){var c=this.config,u=c.classNames,d=c.selectors,h="".concat(d.controls.wrapper," ").concat(d.labels," .").concat(u.hidden),m=G.call(this,h);Array.from(m).forEach(function(t){X(t,e.config.classNames.hidden,!1),X(t,e.config.classNames.tooltip,!0)})}}};function Ee(e){var t=e;if(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]){var n=document.createElement("a");n.href=t,t=n.href}try{return new URL(t)}catch(e){return null}}function Se(e){var t=new URLSearchParams;return N.object(e)&&Object.entries(e).forEach(function(e){var n=a(e,2),i=n[0],s=n[1];t.set(i,s)}),t}var Pe={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!ie.textTracks)N.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&Ae.setCaptionsMenu.call(this);else{if(N.element(this.elements.captions)||(this.elements.captions=B("div",Y(this.config.selectors.captions)),function(e,t){N.element(e)&&N.element(t)&&t.parentNode.insertBefore(e,t.nextSibling)}(this.elements.captions,this.elements.wrapper)),L.isIE&&window.URL){var e=this.media.querySelectorAll("track");Array.from(e).forEach(function(e){var t=e.getAttribute("src"),n=Ee(t);null!==n&&n.hostname!==window.location.href.hostname&&["http:","https:"].includes(n.protocol)&&ve(t,"blob").then(function(t){e.setAttribute("src",window.URL.createObjectURL(t))}).catch(function(){W(e)})})}var t=ce((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(function(e){return e.split("-")[0]})),n=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===n)n=a(t,1)[0];var i=this.storage.get("captions");if(N.boolean(i)||(i=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:i,language:n,languages:t}),this.isHTML5){var s=this.config.captions.update?"addtrack removetrack":"removetrack";O.call(this,this.media.textTracks,s,Pe.update.bind(this))}setTimeout(Pe.update.bind(this),0)}},update:function(){var e=this,t=Pe.getTracks.call(this,!0),n=this.captions,i=n.active,a=n.language,s=n.meta,r=n.currentTrackNode,o=Boolean(t.find(function(e){return e.language===a}));this.isHTML5&&this.isVideo&&t.filter(function(e){return!s.get(e)}).forEach(function(t){e.debug.log("Track added",t),s.set(t,{default:"showing"===t.mode}),t.mode="hidden",O.call(e,t,"cuechange",function(){return Pe.updateCues.call(e)})}),(o&&this.language!==a||!t.includes(r))&&(Pe.setLanguage.call(this,a),Pe.toggle.call(this,i&&o)),X(this.elements.container,this.config.classNames.captions.enabled,!N.empty(t)),(this.config.controls||[]).includes("settings")&&this.config.settings.includes("captions")&&Ae.setCaptionsMenu.call(this)},toggle:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.supported.ui){var n=this.captions.toggled,i=this.config.classNames.captions.active,a=N.nullOrUndefined(e)?!n:e;if(a!==n){if(t||(this.captions.active=a,this.storage.set({captions:a})),!this.language&&a&&!t){var r=Pe.getTracks.call(this),o=Pe.findTrack.call(this,[this.captions.language].concat(s(this.captions.languages)),!0);return this.captions.language=o.language,void Pe.set.call(this,r.indexOf(o))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=a),X(this.elements.container,i,a),this.captions.toggled=a,Ae.updateSetting.call(this,"captions"),H.call(this,this.media,a?"captionsenabled":"captionsdisabled")}}},set:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Pe.getTracks.call(this);if(-1!==e)if(N.number(e))if(e in n){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;var i=n[e],a=(i||{}).language;this.captions.currentTrackNode=i,Ae.updateSetting.call(this,"captions"),t||(this.captions.language=a,this.storage.set({language:a})),this.isVimeo&&this.embed.enableTextTrack(a),H.call(this,this.media,"languagechange")}Pe.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&Pe.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else Pe.toggle.call(this,!1,t)},setLanguage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(N.string(e)){var n=e.toLowerCase();this.captions.language=n;var i=Pe.getTracks.call(this),a=Pe.findTrack.call(this,[n]);Pe.set.call(this,i.indexOf(a),t)}else this.debug.warn("Invalid language argument",e)},getTracks:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Array.from((this.media||{}).textTracks||[]).filter(function(n){return!e.isHTML5||t||e.captions.meta.has(n)}).filter(function(e){return["captions","subtitles"].includes(e.kind)})},findTrack:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Pe.getTracks.call(this),s=function(e){return Number((n.captions.meta.get(e)||{}).default)},r=Array.from(a).sort(function(e,t){return s(t)-s(e)});return e.every(function(e){return!(t=r.find(function(t){return t.language===e}))}),t||(i?r[0]:void 0)},getCurrentTrack:function(){return Pe.getTracks.call(this)[this.currentTrack]},getLabel:function(e){var t=e;return!N.track(t)&&ie.textTracks&&this.captions.toggled&&(t=Pe.getCurrentTrack.call(this)),N.track(t)?N.empty(t.label)?N.empty(t.language)?ge("enabled",this.config):e.language.toUpperCase():t.label:ge("disabled",this.config)},updateCues:function(e){if(this.supported.ui)if(N.element(this.elements.captions))if(N.nullOrUndefined(e)||Array.isArray(e)){var t=e;if(!t){var n=Pe.getCurrentTrack.call(this);t=Array.from((n||{}).activeCues||[]).map(function(e){return e.getCueAsHTML()}).map(pe)}var i=t.map(function(e){return e.trim()}).join("\n");if(i!==this.elements.captions.innerHTML){z(this.elements.captions);var a=B("span",Y(this.config.selectors.caption));a.innerHTML=i,this.elements.captions.appendChild(a),H.call(this,this.media,"cuechange")}}else this.debug.warn("updateCues: Invalid input",e);else this.debug.warn("No captions element to render to")}},Ne={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.6/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240]},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},Me="picture-in-picture",xe="inline",Le={html5:"html5",youtube:"youtube",vimeo:"vimeo"},Ie={audio:"audio",video:"video"};var _e=function(){},Oe=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e(this,t),this.enabled=window.console&&n,this.enabled&&this.log("Debugging enabled")}return n(t,[{key:"log",get:function(){return this.enabled?Function.prototype.bind.call(console.log,console):_e}},{key:"warn",get:function(){return this.enabled?Function.prototype.bind.call(console.warn,console):_e}},{key:"error",get:function(){return this.enabled?Function.prototype.bind.call(console.error,console):_e}}]),t}();function je(){if(this.enabled){var e=this.player.elements.buttons.fullscreen;N.element(e)&&(e.pressed=this.active),H.call(this.player,this.target,this.active?"enterfullscreen":"exitfullscreen",!0),L.isIos||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(N.element(e)){var n=G.call(this,"button:not(:disabled), input:not(:disabled), [tabindex]"),i=n[0],a=n[n.length-1];_.call(this,this.elements.container,"keydown",function(e){if("Tab"===e.key&&9===e.keyCode){var t=document.activeElement;t!==a||e.shiftKey?t===i&&e.shiftKey&&(a.focus(),e.preventDefault()):(i.focus(),e.preventDefault())}},t,!1)}}.call(this.player,this.target,this.active)}}function qe(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e?this.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",X(this.target,this.player.config.classNames.fullscreen.fallback,e),L.isIos){var t=document.head.querySelector('meta[name="viewport"]'),n="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var i=N.string(t.content)&&t.content.includes(n);e?(this.cleanupViewport=!i,i||(t.content+=",".concat(n))):this.cleanupViewport&&(t.content=t.content.split(",").filter(function(e){return e.trim()!==n}).join(","))}je.call(this)}var He=function(){function t(n){var i=this;e(this,t),this.player=n,this.prefix=t.prefix,this.property=t.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===n.config.fullscreen.fallback,O.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),function(){je.call(i)}),O.call(this.player,this.player.elements.container,"dblclick",function(e){N.element(i.player.elements.controls)&&i.player.elements.controls.contains(e.target)||i.toggle()}),this.update()}return n(t,[{key:"update",value:function(){var e;this.enabled?(e=this.forceFallback?"Fallback (forced)":t.native?"Native":"Fallback",this.player.debug.log("".concat(e," fullscreen enabled"))):this.player.debug.log("Fullscreen not supported and fallback disabled");X(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.enabled)}},{key:"enter",value:function(){this.enabled&&(L.isIos&&this.player.config.fullscreen.iosNative?this.target.webkitEnterFullscreen():!t.native||this.forceFallback?qe.call(this,!0):this.prefix?N.empty(this.prefix)||this.target["".concat(this.prefix,"Request").concat(this.property)]():this.target.requestFullscreen())}},{key:"exit",value:function(){if(this.enabled)if(L.isIos&&this.player.config.fullscreen.iosNative)this.target.webkitExitFullscreen(),this.player.play();else if(!t.native||this.forceFallback)qe.call(this,!1);else if(this.prefix){if(!N.empty(this.prefix)){var e="moz"===this.prefix?"Cancel":"Exit";document["".concat(this.prefix).concat(e).concat(this.property)]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}},{key:"toggle",value:function(){this.active?this.exit():this.enter()}},{key:"usingNative",get:function(){return t.native&&!this.forceFallback}},{key:"enabled",get:function(){return(t.native||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo}},{key:"active",get:function(){return!!this.enabled&&(!t.native||this.forceFallback?J(this.target,this.player.config.classNames.fullscreen.fallback):(this.prefix?document["".concat(this.prefix).concat(this.property,"Element")]:document.fullscreenElement)===this.target)}},{key:"target",get:function(){return L.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.container}}],[{key:"native",get:function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}},{key:"prefix",get:function(){if(N.function(document.exitFullscreen))return"";var e="";return["webkit","moz","ms"].some(function(t){return!(!N.function(document["".concat(t,"ExitFullscreen")])&&!N.function(document["".concat(t,"CancelFullScreen")]))&&(e=t,!0)}),e}},{key:"property",get:function(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}}]),t}();function De(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise(function(n,i){var a=new Image,s=function(){delete a.onload,delete a.onerror,(a.naturalWidth>=t?n:i)(a)};Object.assign(a,{onload:s,onerror:s,src:e})})}var Fe={addStyleHook:function(){X(this.elements.container,this.config.selectors.container.replace(".",""),!0),X(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build:function(){var e=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ").concat(this.type)),void Fe.toggleNativeControls.call(this,!0);N.element(this.elements.controls)||(Ae.inject.call(this),this.listeners.controls()),Fe.toggleNativeControls.call(this),this.isHTML5&&Pe.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,Ae.updateVolume.call(this),Ae.timeUpdate.call(this),Fe.checkPlaying.call(this),X(this.elements.container,this.config.classNames.pip.supported,ie.pip&&this.isHTML5&&this.isVideo),X(this.elements.container,this.config.classNames.airplay.supported,ie.airplay&&this.isHTML5),X(this.elements.container,this.config.classNames.isIos,L.isIos),X(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(function(){H.call(e,e.media,"ready")},0),Fe.setTitle.call(this),this.poster&&Fe.setPoster.call(this,this.poster,!1).catch(function(){}),this.config.duration&&Ae.durationUpdate.call(this)},setTitle:function(){var e=ge("play",this.config);if(N.string(this.config.title)&&!N.empty(this.config.title)&&(e+=", ".concat(this.config.title)),Array.from(this.elements.buttons.play||[]).forEach(function(t){t.setAttribute("aria-label",e)}),this.isEmbed){var t=Z.call(this,"iframe");if(!N.element(t))return;var n=N.empty(this.config.title)?"video":this.config.title,i=ge("frameTitle",this.config);t.setAttribute("title",i.replace("{title}",n))}},togglePoster:function(e){X(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster:function(e){var t=this;return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]||!this.poster?(this.media.setAttribute("poster",e),function(){var e=this;return new Promise(function(t){return e.ready?setTimeout(t,0):O.call(e,e.elements.container,"ready",t)}).then(function(){})}.call(this).then(function(){return De(e)}).catch(function(n){throw e===t.poster&&Fe.togglePoster.call(t,!1),n}).then(function(){if(e!==t.poster)throw new Error("setPoster cancelled by later call to setPoster")}).then(function(){return Object.assign(t.elements.poster.style,{backgroundImage:"url('".concat(e,"')"),backgroundSize:""}),Fe.togglePoster.call(t,!0),e})):Promise.reject(new Error("Poster already set"))},checkPlaying:function(e){var t=this;X(this.elements.container,this.config.classNames.playing,this.playing),X(this.elements.container,this.config.classNames.paused,this.paused),X(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(function(e){Object.assign(e,{pressed:t.playing})}),N.event(e)&&"timeupdate"===e.type||Fe.toggleControls.call(this)},checkLoading:function(e){var t=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(function(){X(t.elements.container,t.config.classNames.loading,t.loading),Fe.toggleControls.call(t)},this.loading?250:0)},toggleControls:function(e){var t=this.elements.controls;if(t&&this.config.hideControls){var n=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||n))}}},Re=function(){function t(n){e(this,t),this.player=n,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this)}return n(t,[{key:"handleKey",value:function(e){var t=this.player,n=t.elements,i=e.keyCode?e.keyCode:e.which,a="keydown"===e.type,s=a&&i===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&N.number(i)){if(a){var r=document.activeElement;if(N.element(r)){var o=t.config.selectors.editable;if(r!==n.inputs.seek&&$(r,o))return;if(32===e.which&&$(r,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:s||(t.currentTime=t.duration/10*(i-48));break;case 32:case 75:s||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:s||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:s||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}}},{key:"toggleMenu",value:function(e){Ae.toggleMenu.call(this.player,e)}},{key:"firstTouch",value:function(){var e=this.player,t=e.elements;e.touch=!0,X(t.container,e.config.classNames.isTouch,!0)}},{key:"setTabFocus",value:function(e){var t=this.player,n=t.elements;if(clearTimeout(this.focusTimer),"keydown"!==e.type||9===e.which){"keydown"===e.type&&(this.lastKeyDown=e.timeStamp);var i,a=e.timeStamp-this.lastKeyDown<=20;if("focus"!==e.type||a)i=t.config.classNames.tabFocus,X(G.call(t,".".concat(i)),i,!1),this.focusTimer=setTimeout(function(){var e=document.activeElement;n.container.contains(e)&&X(document.activeElement,t.config.classNames.tabFocus,!0)},10)}}},{key:"global",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.player;t.config.keyboard.global&&_.call(t,window,"keydown keyup",this.handleKey,e,!1),_.call(t,document.body,"click",this.toggleMenu,e),q.call(t,document.body,"touchstart",this.firstTouch),_.call(t,document.body,"keydown focus blur",this.setTabFocus,e,!1,!0)}},{key:"container",value:function(){var e=this.player,t=e.config,n=e.elements,i=e.timers;!t.keyboard.global&&t.keyboard.focused&&O.call(e,n.container,"keydown keyup",this.handleKey,!1),O.call(e,n.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",function(t){var a=n.controls;a&&"enterfullscreen"===t.type&&(a.pressed=!1,a.hover=!1);var s=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(Fe.toggleControls.call(e,!0),s=e.touch?3e3:2e3),clearTimeout(i.controls),i.controls=setTimeout(function(){return Fe.toggleControls.call(e,!1)},s)});var s=function(t){if(!t)return oe.call(e);var i=n.container.getBoundingClientRect(),a=i.width,s=i.height;return oe.call(e,"".concat(a,":").concat(s))},r=function(){clearTimeout(i.resized),i.resized=setTimeout(s,50)};O.call(e,n.container,"enterfullscreen exitfullscreen",function(t){var i=e.fullscreen,o=i.target,l=i.usingNative;if(o===n.container&&(e.isEmbed||!N.empty(e.config.ratio))){var c="enterfullscreen"===t.type,u=s(c);u.padding;!function(t,n,i){if(e.isVimeo){var s=e.elements.wrapper.firstChild,r=a(t,2)[1],o=a(re.call(e),2),l=o[0],c=o[1];s.style.maxWidth=i?"".concat(r/c*l,"px"):null,s.style.margin=i?"0 auto":null}}(u.ratio,0,c),l||(c?O.call(e,window,"resize",r):j.call(e,window,"resize",r))}})}},{key:"media",value:function(){var e=this,t=this.player,n=t.elements;if(O.call(t,t.media,"timeupdate seeking seeked",function(e){return Ae.timeUpdate.call(t,e)}),O.call(t,t.media,"durationchange loadeddata loadedmetadata",function(e){return Ae.durationUpdate.call(t,e)}),O.call(t,t.media,"canplay loadeddata",function(){Q(n.volume,!t.hasAudio),Q(n.buttons.mute,!t.hasAudio)}),O.call(t,t.media,"ended",function(){t.isHTML5&&t.isVideo&&t.config.resetOnEnd&&t.restart()}),O.call(t,t.media,"progress playing seeking seeked",function(e){return Ae.updateProgress.call(t,e)}),O.call(t,t.media,"volumechange",function(e){return Ae.updateVolume.call(t,e)}),O.call(t,t.media,"playing play pause ended emptied timeupdate",function(e){return Fe.checkPlaying.call(t,e)}),O.call(t,t.media,"waiting canplay seeked playing",function(e){return Fe.checkLoading.call(t,e)}),t.supported.ui&&t.config.clickToPlay&&!t.isAudio){var i=Z.call(t,".".concat(t.config.classNames.video));if(!N.element(i))return;O.call(t,n.container,"click",function(a){([n.container,i].includes(a.target)||i.contains(a.target))&&(t.touch&&t.config.hideControls||(t.ended?(e.proxy(a,t.restart,"restart"),e.proxy(a,t.play,"play")):e.proxy(a,t.togglePlay,"play")))})}t.supported.ui&&t.config.disableContextMenu&&O.call(t,n.wrapper,"contextmenu",function(e){e.preventDefault()},!1),O.call(t,t.media,"volumechange",function(){t.storage.set({volume:t.volume,muted:t.muted})}),O.call(t,t.media,"ratechange",function(){Ae.updateSetting.call(t,"speed"),t.storage.set({speed:t.speed})}),O.call(t,t.media,"qualitychange",function(e){Ae.updateSetting.call(t,"quality",null,e.detail.quality)}),O.call(t,t.media,"ready qualitychange",function(){Ae.setDownloadUrl.call(t)});var a=t.config.events.concat(["keyup","keydown"]).join(" ");O.call(t,t.media,a,function(e){var i=e.detail,a=void 0===i?{}:i;"error"===e.type&&(a=t.media.error),H.call(t,n.container,e.type,!0,a)})}},{key:"proxy",value:function(e,t,n){var i=this.player,a=i.config.listeners[n],s=!0;N.function(a)&&(s=a.call(i,e)),s&&N.function(t)&&t.call(i,e)}},{key:"bind",value:function(e,t,n,i){var a=this,s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.player,o=r.config.listeners[i],l=N.function(o);O.call(r,e,t,function(e){return a.proxy(e,n,i)},s&&!l)}},{key:"controls",value:function(){var e=this,t=this.player,n=t.elements,i=L.isIE?"change":"input";if(n.buttons.play&&Array.from(n.buttons.play).forEach(function(n){e.bind(n,"click",t.togglePlay,"play")}),this.bind(n.buttons.restart,"click",t.restart,"restart"),this.bind(n.buttons.rewind,"click",t.rewind,"rewind"),this.bind(n.buttons.fastForward,"click",t.forward,"fastForward"),this.bind(n.buttons.mute,"click",function(){t.muted=!t.muted},"mute"),this.bind(n.buttons.captions,"click",function(){return t.toggleCaptions()}),this.bind(n.buttons.download,"click",function(){H.call(t,t.media,"download")},"download"),this.bind(n.buttons.fullscreen,"click",function(){t.fullscreen.toggle()},"fullscreen"),this.bind(n.buttons.pip,"click",function(){t.pip="toggle"},"pip"),this.bind(n.buttons.airplay,"click",t.airplay,"airplay"),this.bind(n.buttons.settings,"click",function(e){e.stopPropagation(),Ae.toggleMenu.call(t,e)}),this.bind(n.buttons.settings,"keyup",function(e){var n=e.which;[13,32].includes(n)&&(13!==n?(e.preventDefault(),e.stopPropagation(),Ae.toggleMenu.call(t,e)):Ae.focusFirstMenuItem.call(t,null,!0))},null,!1),this.bind(n.settings.menu,"keydown",function(e){27===e.which&&Ae.toggleMenu.call(t,e)}),this.bind(n.inputs.seek,"mousedown mousemove",function(e){var t=n.progress.getBoundingClientRect(),i=100/t.width*(e.pageX-t.left);e.currentTarget.setAttribute("seek-value",i)}),this.bind(n.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",function(e){var n=e.currentTarget,i=e.keyCode?e.keyCode:e.which;if(!N.keyboardEvent(e)||39===i||37===i){t.lastSeekTime=Date.now();var a=n.hasAttribute("play-on-seeked"),s=["mouseup","touchend","keyup"].includes(e.type);a&&s?(n.removeAttribute("play-on-seeked"),t.play()):!s&&t.playing&&(n.setAttribute("play-on-seeked",""),t.pause())}}),L.isIos){var s=G.call(t,'input[type="range"]');Array.from(s).forEach(function(t){return e.bind(t,i,function(e){return x(e.target)})})}this.bind(n.inputs.seek,i,function(e){var n=e.currentTarget,i=n.getAttribute("seek-value");N.empty(i)&&(i=n.value),n.removeAttribute("seek-value"),t.currentTime=i/n.max*t.duration},"seek"),this.bind(n.progress,"mouseenter mouseleave mousemove",function(e){return Ae.updateSeekTooltip.call(t,e)}),this.bind(n.progress,"mousemove touchmove",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startMove(e)}),this.bind(n.progress,"mouseleave click",function(){var e=t.previewThumbnails;e&&e.loaded&&e.endMove(!1,!0)}),this.bind(n.progress,"mousedown touchstart",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startScrubbing(e)}),this.bind(n.progress,"mouseup touchend",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.endScrubbing(e)}),L.isWebkit&&Array.from(G.call(t,'input[type="range"]')).forEach(function(n){e.bind(n,"input",function(e){return Ae.updateRangeFill.call(t,e.target)})}),t.config.toggleInvert&&!N.element(n.display.duration)&&this.bind(n.display.currentTime,"click",function(){0!==t.currentTime&&(t.config.invertTime=!t.config.invertTime,Ae.timeUpdate.call(t))}),this.bind(n.inputs.volume,i,function(e){t.volume=e.target.value},"volume"),this.bind(n.controls,"mouseenter mouseleave",function(e){n.controls.hover=!t.touch&&"mouseenter"===e.type}),this.bind(n.controls,"mousedown mouseup touchstart touchend touchcancel",function(e){n.controls.pressed=["mousedown","touchstart"].includes(e.type)}),this.bind(n.controls,"focusin",function(){var i=t.config,a=t.timers;X(n.controls,i.classNames.noTransition,!0),Fe.toggleControls.call(t,!0),setTimeout(function(){X(n.controls,i.classNames.noTransition,!1)},0);var s=e.touch?3e3:4e3;clearTimeout(a.controls),a.controls=setTimeout(function(){return Fe.toggleControls.call(t,!1)},s)}),this.bind(n.inputs.volume,"wheel",function(e){var n=e.webkitDirectionInvertedFromDevice,i=a([e.deltaX,-e.deltaY].map(function(e){return n?-e:e}),2),s=i[0],r=i[1],o=Math.sign(Math.abs(s)>Math.abs(r)?s:r);t.increaseVolume(o/50);var l=t.media.volume;(1===o&&l<1||-1===o&&l>0)&&e.preventDefault()},"volume",!1)}}]),t}();"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Ve=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,t){e.exports=function(){var e=function(){},t={},n={},i={};function a(e,t){if(e){var a=i[e];if(n[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function s(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function r(t,n,i,a){var s,o,l=document,c=i.async,u=(i.numRetries||0)+1,d=i.before||e,h=t.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(t)?((o=l.createElement("link")).rel="stylesheet",o.href=h,(s="hideFocus"in o)&&o.relList&&(s=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(o=l.createElement("img")).src=h:((o=l.createElement("script")).src=t,o.async=void 0===c||c),o.onload=o.onerror=o.onbeforeload=function(e){var l=e.type[0];if(s)try{o.sheet.cssText.length||(l="e")}catch(e){18!=e.code&&(l="e")}if("e"==l){if((a+=1)<u)return r(t,n,i,a)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";n(t,l,e.defaultPrevented)},!1!==d(t,o)&&l.head.appendChild(o)}function o(e,n,i){var o,l;if(n&&n.trim&&(o=n),l=(o?i:n)||{},o){if(o in t)throw"LoadJS";t[o]=!0}function c(t,n){!function(e,t,n){var i,a,s=(e=e.push?e:[e]).length,o=s,l=[];for(i=function(e,n,i){if("e"==n&&l.push(e),"b"==n){if(!i)return;l.push(e)}--s||t(l)},a=0;a<o;a++)r(e[a],i,n)}(e,function(e){s(l,e),t&&s({success:t,error:n},e),a(o,e)},l)}if(l.returnPromise)return new Promise(c);c()}return o.ready=function(e,t){return function(e,t){e=e.push?e:[e];var a,s,r,o=[],l=e.length,c=l;for(a=function(e,n){n.length&&o.push(e),--c||t(o)};l--;)s=e[l],(r=n[s])?a(s,r):(i[s]=i[s]||[]).push(a)}(e,function(e){s(t,e)}),o},o.done=function(e){a(e,[])},o.reset=function(){t={},n={},i={}},o.isDefined=function(e){return e in t},o}()});function Be(e){return new Promise(function(t,n){Ve(e,{success:t,error:n})})}function Ue(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,H.call(this,this.media,e?"play":"pause"))}var We={setup:function(){var e=this;X(this.elements.wrapper,this.config.classNames.embed,!0),oe.call(this),N.object(window.Vimeo)?We.ready.call(this):Be(this.config.urls.vimeo.sdk).then(function(){We.ready.call(e)}).catch(function(t){e.debug.warn("Vimeo SDK (player.js) failed to load",t)})},ready:function(){var e=this,t=this,n=t.config.vimeo,i=Se(F({},{loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},n)),s=t.media.getAttribute("src");N.empty(s)&&(s=t.media.getAttribute(t.config.attributes.embed.id));var r,o=(r=s,N.empty(r)?null:N.number(Number(r))?r:r.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:r),l=B("iframe"),c=ue(t.config.urls.vimeo.iframe,o,i);l.setAttribute("src",c),l.setAttribute("allowfullscreen",""),l.setAttribute("allowtransparency",""),l.setAttribute("allow","autoplay");var u=B("div",{poster:t.poster,class:t.config.classNames.embedContainer});u.appendChild(l),t.media=K(u,t.media),ve(ue(t.config.urls.vimeo.api,o),"json").then(function(e){if(!N.empty(e)){var n=new URL(e[0].thumbnail_large);n.pathname="".concat(n.pathname.split("_")[0],".jpg"),Fe.setPoster.call(t,n.href).catch(function(){})}}),t.embed=new window.Vimeo.Player(l,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return Ue.call(t,!0),t.embed.play()},t.media.pause=function(){return Ue.call(t,!1),t.embed.pause()},t.media.stop=function(){t.pause(),t.currentTime=0};var d=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return d},set:function(e){var n=t.embed,i=t.media,a=t.paused,s=t.volume,r=a&&!n.hasPlayed;i.seeking=!0,H.call(t,i,"seeking"),Promise.resolve(r&&n.setVolume(0)).then(function(){return n.setCurrentTime(e)}).then(function(){return r&&n.pause()}).then(function(){return r&&n.setVolume(s)}).catch(function(){})}});var h=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return h},set:function(e){t.embed.setPlaybackRate(e).then(function(){h=e,H.call(t,t.media,"ratechange")}).catch(function(e){"Error"===e.name&&Ae.setSpeedMenu.call(t,[])})}});var m=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return m},set:function(e){t.embed.setVolume(e).then(function(){m=e,H.call(t,t.media,"volumechange")})}});var p=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return p},set:function(e){var n=!!N.boolean(e)&&e;t.embed.setVolume(n?0:t.config.volume).then(function(){p=n,H.call(t,t.media,"volumechange")})}});var f,g=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return g},set:function(e){var n=N.boolean(e)?e:t.config.loop.active;t.embed.setLoop(n).then(function(){g=n})}}),t.embed.getVideoUrl().then(function(e){f=e,Ae.setDownloadUrl.call(t)}).catch(function(t){e.debug.warn(t)}),Object.defineProperty(t.media,"currentSrc",{get:function(){return f}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then(function(n){var i=a(n,2),s=i[0],r=i[1];t.embed.ratio=[s,r],oe.call(e)}),t.embed.setAutopause(t.config.autopause).then(function(e){t.config.autopause=e}),t.embed.getVideoTitle().then(function(n){t.config.title=n,Fe.setTitle.call(e)}),t.embed.getCurrentTime().then(function(e){d=e,H.call(t,t.media,"timeupdate")}),t.embed.getDuration().then(function(e){t.media.duration=e,H.call(t,t.media,"durationchange")}),t.embed.getTextTracks().then(function(e){t.media.textTracks=e,Pe.setup.call(t)}),t.embed.on("cuechange",function(e){var n=e.cues,i=(void 0===n?[]:n).map(function(e){return function(e){var t=document.createDocumentFragment(),n=document.createElement("div");return t.appendChild(n),n.innerHTML=e,t.firstChild.innerText}(e.text)});Pe.updateCues.call(t,i)}),t.embed.on("loaded",function(){(t.embed.getPaused().then(function(e){Ue.call(t,!e),e||H.call(t,t.media,"playing")}),N.element(t.embed.element)&&t.supported.ui)&&t.embed.element.setAttribute("tabindex",-1)}),t.embed.on("play",function(){Ue.call(t,!0),H.call(t,t.media,"playing")}),t.embed.on("pause",function(){Ue.call(t,!1)}),t.embed.on("timeupdate",function(e){t.media.seeking=!1,d=e.seconds,H.call(t,t.media,"timeupdate")}),t.embed.on("progress",function(e){t.media.buffered=e.percent,H.call(t,t.media,"progress"),1===parseInt(e.percent,10)&&H.call(t,t.media,"canplaythrough"),t.embed.getDuration().then(function(e){e!==t.media.duration&&(t.media.duration=e,H.call(t,t.media,"durationchange"))})}),t.embed.on("seeked",function(){t.media.seeking=!1,H.call(t,t.media,"seeked")}),t.embed.on("ended",function(){t.media.paused=!0,H.call(t,t.media,"ended")}),t.embed.on("error",function(e){t.media.error=e,H.call(t,t.media,"error")}),setTimeout(function(){return Fe.build.call(t)},0)}};function ze(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,H.call(this,this.media,e?"play":"pause"))}function Ke(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}var Ye={setup:function(){var e=this;if(X(this.elements.wrapper,this.config.classNames.embed,!0),N.object(window.YT)&&N.function(window.YT.Player))Ye.ready.call(this);else{var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){N.function(t)&&t(),Ye.ready.call(e)},Be(this.config.urls.youtube.sdk).catch(function(t){e.debug.warn("YouTube API failed to load",t)})}},getTitle:function(e){var t=this;ve(ue(this.config.urls.youtube.api,e)).then(function(e){if(N.object(e)){var n=e.title,i=e.height,a=e.width;t.config.title=n,Fe.setTitle.call(t),t.embed.ratio=[a,i]}oe.call(t)}).catch(function(){oe.call(t)})},ready:function(){var e=this,t=e.media&&e.media.getAttribute("id");if(N.empty(t)||!t.startsWith("youtube-")){var n=e.media.getAttribute("src");N.empty(n)&&(n=e.media.getAttribute(this.config.attributes.embed.id));var i,a,s=(i=n,N.empty(i)?null:i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:i),r=(a=e.provider,"".concat(a,"-").concat(Math.floor(1e4*Math.random()))),o=B("div",{id:r,poster:e.poster});e.media=K(o,e.media);var l=function(e){return"https://i.ytimg.com/vi/".concat(s,"/").concat(e,"default.jpg")};De(l("maxres"),121).catch(function(){return De(l("sd"),121)}).catch(function(){return De(l("hq"))}).then(function(t){return Fe.setPoster.call(e,t.src)}).then(function(t){t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover")}).catch(function(){});var c=e.config.youtube;e.embed=new window.YT.Player(r,{videoId:s,host:Ke(c),playerVars:F({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},c),events:{onError:function(t){if(!e.media.error){var n=t.data,i={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[n]||"An unknown error occured";e.media.error={code:n,message:i},H.call(e,e.media,"error")}},onPlaybackRateChange:function(t){var n=t.target;e.media.playbackRate=n.getPlaybackRate(),H.call(e,e.media,"ratechange")},onReady:function(t){if(!N.function(e.media.play)){var n=t.target;Ye.getTitle.call(e,s),e.media.play=function(){ze.call(e,!0),n.playVideo()},e.media.pause=function(){ze.call(e,!1),n.pauseVideo()},e.media.stop=function(){n.stopVideo()},e.media.duration=n.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:function(){return Number(n.getCurrentTime())},set:function(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,H.call(e,e.media,"seeking"),n.seekTo(t)}}),Object.defineProperty(e.media,"playbackRate",{get:function(){return n.getPlaybackRate()},set:function(e){n.setPlaybackRate(e)}});var i=e.config.volume;Object.defineProperty(e.media,"volume",{get:function(){return i},set:function(t){i=t,n.setVolume(100*i),H.call(e,e.media,"volumechange")}});var a=e.config.muted;Object.defineProperty(e.media,"muted",{get:function(){return a},set:function(t){var i=N.boolean(t)?t:a;a=i,n[i?"mute":"unMute"](),H.call(e,e.media,"volumechange")}}),Object.defineProperty(e.media,"currentSrc",{get:function(){return n.getVideoUrl()}}),Object.defineProperty(e.media,"ended",{get:function(){return e.currentTime===e.duration}}),e.options.speed=n.getAvailablePlaybackRates(),e.supported.ui&&e.media.setAttribute("tabindex",-1),H.call(e,e.media,"timeupdate"),H.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval(function(){e.media.buffered=n.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&H.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),H.call(e,e.media,"canplaythrough"))},200),setTimeout(function(){return Fe.build.call(e)},50)}},onStateChange:function(t){var n=t.target;switch(clearInterval(e.timers.playing),e.media.seeking&&[1,2].includes(t.data)&&(e.media.seeking=!1,H.call(e,e.media,"seeked")),t.data){case-1:H.call(e,e.media,"timeupdate"),e.media.buffered=n.getVideoLoadedFraction(),H.call(e,e.media,"progress");break;case 0:ze.call(e,!1),e.media.loop?(n.stopVideo(),n.playVideo()):H.call(e,e.media,"ended");break;case 1:e.config.autoplay||!e.media.paused||e.embed.hasPlayed?(ze.call(e,!0),H.call(e,e.media,"playing"),e.timers.playing=setInterval(function(){H.call(e,e.media,"timeupdate")},50),e.media.duration!==n.getDuration()&&(e.media.duration=n.getDuration(),H.call(e,e.media,"durationchange"))):e.media.pause();break;case 2:e.muted||e.embed.unMute(),ze.call(e,!1)}H.call(e,e.elements.container,"statechange",!1,{code:t.data})}}})}}},Qe={setup:function(){this.media?(X(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),X(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&X(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=B("div",{class:this.config.classNames.video}),R(this.media,this.elements.wrapper),this.elements.poster=B("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?le.extend.call(this):this.isYouTube?Ye.setup.call(this):this.isVimeo&&We.setup.call(this)):this.debug.warn("No media element found!")}},Xe=function(){function t(n){var i=this;e(this,t),this.player=n,this.config=n.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise(function(e,t){i.on("loaded",e),i.on("error",t)}),this.load()}return n(t,[{key:"load",value:function(){var e=this;this.enabled&&(N.object(window.google)&&N.object(window.google.ima)?this.ready():Be(this.player.config.urls.googleIMA.sdk).then(function(){e.ready()}).catch(function(){e.trigger("error",new Error("Google IMA SDK failed to load"))}))}},{key:"ready",value:function(){var e,t=this;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then(function(){t.clearSafetyTimer("onAdsManagerLoaded()")}),this.listeners(),this.setupIMA()}},{key:"setupIMA",value:function(){this.elements.container=B("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.requestAds()}},{key:"requestAds",value:function(){var e=this,t=this.player.elements.container;try{this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,function(t){return e.onAdsManagerLoaded(t)},!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(t){return e.onAdError(t)},!1);var n=new google.ima.AdsRequest;n.adTagUrl=this.tagUrl,n.linearAdSlotWidth=t.offsetWidth,n.linearAdSlotHeight=t.offsetHeight,n.nonLinearAdSlotWidth=t.offsetWidth,n.nonLinearAdSlotHeight=t.offsetHeight,n.forceNonLinearFullSlot=!1,n.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(n)}catch(e){this.onAdError(e)}}},{key:"pollCountdown",value:function(){var e=this;if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0]))return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval(function(){var t=Ce(Math.max(e.manager.getRemainingTime(),0)),n="".concat(ge("advertisement",e.player.config)," - ").concat(t);e.elements.container.setAttribute("data-badge-text",n)},100)}},{key:"onAdsManagerLoaded",value:function(e){var t=this;if(this.enabled){var n=new google.ima.AdsRenderingSettings;n.restoreCustomPlaybackStateOnAdBreakComplete=!0,n.enablePreloading=!0,this.manager=e.getAdsManager(this.player,n),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){return t.onAdError(e)}),Object.keys(google.ima.AdEvent.Type).forEach(function(e){t.manager.addEventListener(google.ima.AdEvent.Type[e],function(e){return t.onAdEvent(e)})}),this.trigger("loaded")}}},{key:"addCuePoints",value:function(){var e=this;N.empty(this.cuePoints)||this.cuePoints.forEach(function(t){if(0!==t&&-1!==t&&t<e.player.duration){var n=e.player.elements.progress;if(N.element(n)){var i=100/e.player.duration*t,a=B("span",{class:e.player.config.classNames.cues});a.style.left="".concat(i.toString(),"%"),n.appendChild(a)}}})}},{key:"onAdEvent",value:function(e){var t=this,n=this.player.elements.container,i=e.getAd(),a=e.getAdData();switch(function(e){H.call(t.player,t.player.media,"ads".concat(e.replace(/_/g,"").toLowerCase()))}(e.type),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),i.isLinear()||(i.width=n.offsetWidth,i.height=n.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:a.adError&&this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()))}}},{key:"onAdError",value:function(e){this.cancel(),this.player.debug.warn("Ads error",e)}},{key:"listeners",value:function(){var e,t=this,n=this.player.elements.container;this.player.on("canplay",function(){t.addCuePoints()}),this.player.on("ended",function(){t.loader.contentComplete()}),this.player.on("timeupdate",function(){e=t.player.currentTime}),this.player.on("seeked",function(){var n=t.player.currentTime;N.empty(t.cuePoints)||t.cuePoints.forEach(function(i,a){e<i&&i<n&&(t.manager.discardAdBreak(),t.cuePoints.splice(a,1))})}),window.addEventListener("resize",function(){t.manager&&t.manager.resize(n.offsetWidth,n.offsetHeight,google.ima.ViewMode.NORMAL)})}},{key:"play",value:function(){var e=this,t=this.player.elements.container;this.managerPromise||this.resumeContent(),this.managerPromise.then(function(){e.manager.setVolume(e.player.volume),e.elements.displayContainer.initialize();try{e.initialized||(e.manager.init(t.offsetWidth,t.offsetHeight,google.ima.ViewMode.NORMAL),e.manager.start()),e.initialized=!0}catch(t){e.onAdError(t)}}).catch(function(){})}},{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play()}},{key:"pauseContent",value:function(){this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}},{key:"cancel",value:function(){this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}},{key:"loadAds",value:function(){var e=this;this.managerPromise.then(function(){e.manager&&e.manager.destroy(),e.managerPromise=new Promise(function(t){e.on("loaded",t),e.player.debug.log(e.manager)}),e.requestAds()}).catch(function(){})}},{key:"trigger",value:function(e){for(var t=this,n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var s=this.events[e];N.array(s)&&s.forEach(function(e){N.function(e)&&e.apply(t,i)})}},{key:"on",value:function(e,t){return N.array(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this}},{key:"startSafetyTimer",value:function(e,t){var n=this;this.player.debug.log("Safety timer invoked from: ".concat(t)),this.safetyTimer=setTimeout(function(){n.cancel(),n.clearSafetyTimer("startSafetyTimer()")},e)}},{key:"clearSafetyTimer",value:function(e){N.nullOrUndefined(this.safetyTimer)||(this.player.debug.log("Safety timer cleared from: ".concat(e)),clearTimeout(this.safetyTimer),this.safetyTimer=null)}},{key:"enabled",get:function(){var e=this.config;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!N.empty(e.publisherId)||N.url(e.tagUrl))}},{key:"tagUrl",get:function(){var e=this.config;if(N.url(e.tagUrl))return e.tagUrl;var t={AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:this.publisherId};return"".concat("https://go.aniview.com/api/adserver6/vast/","?").concat(Se(t))}}]),t}(),Je=function(){function t(n){e(this,t),this.player=n,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}return n(t,[{key:"load",value:function(){var e=this;this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then(function(){e.enabled&&(e.render(),e.determineContainerAutoSizing(),e.loaded=!0)})}},{key:"getThumbnails",value:function(){var e=this;return new Promise(function(t){var n=e.player.config.previewThumbnails.src;if(N.empty(n))throw new Error("Missing previewThumbnails.src config attribute");var i=(N.string(n)?[n]:n).map(function(t){return e.getThumbnail(t)});Promise.all(i).then(function(){e.thumbnails.sort(function(e,t){return e.height-t.height}),e.player.debug.log("Preview thumbnails",e.thumbnails),t()})})}},{key:"getThumbnail",value:function(e){var t=this;return new Promise(function(n){ve(e).then(function(i){var s,r,o={frames:(s=i,r=[],s.split(/\r\n\r\n|\n\n|\r\r/).forEach(function(e){var t={};e.split(/\r\n|\n|\r/).forEach(function(e){if(N.number(t.startTime)){if(!N.empty(e.trim())&&N.empty(t.text)){var n=e.trim().split("#xywh="),i=a(n,1);if(t.text=i[0],n[1]){var s=a(n[1].split(","),4);t.x=s[0],t.y=s[1],t.w=s[2],t.h=s[3]}}}else{var r=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);r&&(t.startTime=60*Number(r[1]||0)*60+60*Number(r[2])+Number(r[3])+Number("0.".concat(r[4])),t.endTime=60*Number(r[6]||0)*60+60*Number(r[7])+Number(r[8])+Number("0.".concat(r[9])))}}),t.text&&r.push(t)}),r),height:null,urlPrefix:""};o.frames[0].text.startsWith("/")||o.frames[0].text.startsWith("http://")||o.frames[0].text.startsWith("https://")||(o.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));var l=new Image;l.onload=function(){o.height=l.naturalHeight,o.width=l.naturalWidth,t.thumbnails.push(o),n()},l.src=o.urlPrefix+o.frames[0].text})})}},{key:"startMove",value:function(e){if(this.loaded&&N.event(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t=this.player.elements.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);this.seekTime=this.player.media.duration*(n/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=Ce(this.seekTime)}this.showImageAtCurrentTime()}}},{key:"endMove",value:function(){this.toggleThumbContainer(!1,!0)}},{key:"startScrubbing",value:function(e){!1!==e.button&&0!==e.button||(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}},{key:"endScrubbing",value:function(){var e=this;this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):q.call(this.player,this.player.media,"timeupdate",function(){e.mouseDown||e.toggleScrubbingContainer(!1)})}},{key:"listeners",value:function(){var e=this;this.player.on("play",function(){e.toggleThumbContainer(!1,!0)}),this.player.on("seeked",function(){e.toggleThumbContainer(!1)}),this.player.on("timeupdate",function(){e.lastTime=e.player.media.currentTime})}},{key:"render",value:function(){this.elements.thumb.container=B("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=B("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);var e=B("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=B("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.container.appendChild(e),N.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=B("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}},{key:"showImageAtCurrentTime",value:function(){var e=this;this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();var t=this.thumbnails[0].frames.findIndex(function(t){return e.seekTime>=t.startTime&&e.seekTime<=t.endTime}),n=t>=0,i=0;this.mouseDown||this.toggleThumbContainer(n),n&&(this.thumbnails.forEach(function(n,a){e.loadedImages.includes(n.frames[t].text)&&(i=a)}),t!==this.showingThumb&&(this.showingThumb=t,this.loadImage(i)))}},{key:"loadImage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this.showingThumb,i=this.thumbnails[t],a=i.urlPrefix,s=i.frames[n],r=i.frames[n].text,o=a+r;if(this.currentImageElement&&this.currentImageElement.dataset.filename===r)this.showImage(this.currentImageElement,s,t,n,r,!1),this.currentImageElement.dataset.index=n,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);var l=new Image;l.src=o,l.dataset.index=n,l.dataset.filename=r,this.showingThumbFilename=r,this.player.debug.log("Loading image: ".concat(o)),l.onload=function(){return e.showImage(l,s,t,n,r,!0)},this.loadingImage=l,this.removeOldImages(l)}}},{key:"showImage",value:function(e,t,n,i,a){var s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];this.player.debug.log("Showing thumb: ".concat(a,". num: ").concat(i,". qual: ").concat(n,". newimg: ").concat(s)),this.setImageSizeAndOffset(e,t),s&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(a)||this.loadedImages.push(a)),this.preloadNearby(i,!0).then(this.preloadNearby(i,!1)).then(this.getHigherQuality(n,e,t,a))}},{key:"removeOldImages",value:function(e){var t=this;Array.from(this.currentImageContainer.children).forEach(function(n){if("img"===n.tagName.toLowerCase()){var i=t.usingSprites?500:1e3;if(n.dataset.index!==e.dataset.index&&!n.dataset.deleting){n.dataset.deleting=!0;var a=t.currentImageContainer;setTimeout(function(){a.removeChild(n),t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))},i)}}})}},{key:"preloadNearby",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(i){setTimeout(function(){var a=t.thumbnails[0].frames[e].text;if(t.showingThumbFilename===a){var s;s=n?t.thumbnails[0].frames.slice(e):t.thumbnails[0].frames.slice(0,e).reverse();var r=!1;s.forEach(function(e){var n=e.text;if(n!==a&&!t.loadedImages.includes(n)){r=!0,t.player.debug.log("Preloading thumb filename: ".concat(n));var s=t.thumbnails[0].urlPrefix+n,o=new Image;o.src=s,o.onload=function(){t.player.debug.log("Preloaded thumb filename: ".concat(n)),t.loadedImages.includes(n)||t.loadedImages.push(n),i()}}}),r||i()}},300)})}},{key:"getHigherQuality",value:function(e,t,n,i){var a=this;if(e<this.thumbnails.length-1){var s=t.naturalHeight;this.usingSprites&&(s=n.h),s<this.thumbContainerHeight&&setTimeout(function(){a.showingThumbFilename===i&&(a.player.debug.log("Showing higher quality thumb for: ".concat(i)),a.loadImage(e+1))},300)}}},{key:"toggleThumbContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(n,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"toggleScrubbingContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"determineContainerAutoSizing",value:function(){this.elements.thumb.imageContainer.clientHeight>20&&(this.sizeSpecifiedInCSS=!0)}},{key:"setThumbContainerSizeAndPos",value:function(){if(!this.sizeSpecifiedInCSS){var e=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(this.thumbContainerHeight,"px"),this.elements.thumb.imageContainer.style.width="".concat(e,"px")}this.setThumbContainerPos()}},{key:"setThumbContainerPos",value:function(){var e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),n=this.elements.thumb.container,i=t.left-e.left+10,a=t.right-e.left-n.clientWidth-10,s=this.mousePosX-e.left-n.clientWidth/2;s<i&&(s=i),s>a&&(s=a),n.style.left="".concat(s,"px")}},{key:"setScrubbingContainerSize",value:function(){this.elements.scrubbing.container.style.width="".concat(this.player.media.clientWidth,"px"),this.elements.scrubbing.container.style.height="".concat(this.player.media.clientWidth/this.thumbAspectRatio,"px")}},{key:"setImageSizeAndOffset",value:function(e,t){if(this.usingSprites){var n=this.thumbContainerHeight/t.h;e.style.height="".concat(Math.floor(e.naturalHeight*n),"px"),e.style.width="".concat(Math.floor(e.naturalWidth*n),"px"),e.style.left="-".concat(t.x*n,"px"),e.style.top="-".concat(t.y*n,"px")}}},{key:"enabled",get:function(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}},{key:"currentImageContainer",get:function(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}},{key:"usingSprites",get:function(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}},{key:"thumbAspectRatio",get:function(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}},{key:"thumbContainerHeight",get:function(){return this.mouseDown?Math.floor(this.player.media.clientWidth/this.thumbAspectRatio):Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}},{key:"currentImageElement",get:function(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement},set:function(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}}]),t}(),$e={insertElements:function(e,t){var n=this;N.string(t)?U(e,this.media,{src:t}):N.array(t)&&t.forEach(function(t){U(e,n.media,t)})},change:function(e){var t=this;D(e,"sources.length")?(le.cancelRequests.call(this),this.destroy.call(this,function(){t.options.quality=[],W(t.media),t.media=null,N.element(t.elements.container)&&t.elements.container.removeAttribute("class");var n=e.sources,i=e.type,s=a(n,1)[0],r=s.provider,o=void 0===r?Le.html5:r,l=s.src,c="html5"===o?i:"div",u="html5"===o?{}:{src:l};Object.assign(t,{provider:o,type:i,supported:ie.check(i,o,t.config.playsinline),media:B(c,u)}),t.elements.container.appendChild(t.media),N.boolean(e.autoplay)&&(t.config.autoplay=e.autoplay),t.isHTML5&&(t.config.crossorigin&&t.media.setAttribute("crossorigin",""),t.config.autoplay&&t.media.setAttribute("autoplay",""),N.empty(e.poster)||(t.poster=e.poster),t.config.loop.active&&t.media.setAttribute("loop",""),t.config.muted&&t.media.setAttribute("muted",""),t.config.playsinline&&t.media.setAttribute("playsinline","")),Fe.addStyleHook.call(t),t.isHTML5&&$e.insertElements.call(t,"source",n),t.config.title=e.title,Qe.setup.call(t),t.isHTML5&&Object.keys(e).includes("tracks")&&$e.insertElements.call(t,"track",e.tracks),(t.isHTML5||t.isEmbed&&!t.supported.ui)&&Fe.build.call(t),t.isHTML5&&t.media.load(),t.previewThumbnails&&t.previewThumbnails.load(),t.fullscreen.update()},!0)):this.debug.warn("Invalid source format")}};var Ge,Ze=function(){function t(n,i){var a=this;if(e(this,t),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=ie.touch,this.media=n,N.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||N.nodeList(this.media)||N.array(this.media))&&(this.media=this.media[0]),this.config=F({},Ne,t.defaults,i||{},function(){try{return JSON.parse(a.media.getAttribute("data-plyr-config"))}catch(e){return{}}}()),this.elements={container:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Oe(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",ie),!N.nullOrUndefined(this.media)&&N.element(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(ie.check().api){var s=this.media.cloneNode(!0);s.autoplay=!1,this.elements.original=s;var r=this.media.tagName.toLowerCase(),o=null,l=null;switch(r){case"div":if(o=this.media.querySelector("iframe"),N.element(o)){if(l=Ee(o.getAttribute("src")),this.provider=function(e){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?Le.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?Le.vimeo:null}(l.toString()),this.elements.container=this.media,this.media=o,this.elements.container.className="",l.search.length){var c=["1","true"];c.includes(l.searchParams.get("autoplay"))&&(this.config.autoplay=!0),c.includes(l.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=c.includes(l.searchParams.get("playsinline")),this.config.youtube.hl=l.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(N.empty(this.provider)||!Object.keys(Le).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=Ie.video;break;case"video":case"audio":this.type=r,this.provider=Le.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=ie.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new Re(this),this.storage=new ye(this),this.media.plyr=this,N.element(this.elements.container)||(this.elements.container=B("div",{tabindex:0}),R(this.media,this.elements.container)),Fe.addStyleHook.call(this),Qe.setup.call(this),this.config.debug&&O.call(this,this.elements.container,this.config.events.join(" "),function(e){a.debug.log("event: ".concat(e.type))}),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&Fe.build.call(this),this.listeners.container(),this.listeners.global(),this.fullscreen=new He(this),this.config.ads.enabled&&(this.ads=new Xe(this)),this.isHTML5&&this.config.autoplay&&setTimeout(function(){return a.play()},10),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new Je(this))):this.debug.error("Setup failed: no support")}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed")}return n(t,[{key:"play",value:function(){var e=this;return N.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then(function(){return e.ads.play()}).catch(function(){return e.media.play()}),this.media.play()):null}},{key:"pause",value:function(){this.playing&&N.function(this.media.pause)&&this.media.pause()}},{key:"togglePlay",value:function(e){(N.boolean(e)?e:!this.playing)?this.play():this.pause()}},{key:"stop",value:function(){this.isHTML5?(this.pause(),this.restart()):N.function(this.media.stop)&&this.media.stop()}},{key:"restart",value:function(){this.currentTime=0}},{key:"rewind",value:function(e){this.currentTime=this.currentTime-(N.number(e)?e:this.config.seekTime)}},{key:"forward",value:function(e){this.currentTime=this.currentTime+(N.number(e)?e:this.config.seekTime)}},{key:"increaseVolume",value:function(e){var t=this.media.muted?0:this.volume;this.volume=t+(N.number(e)?e:0)}},{key:"decreaseVolume",value:function(e){this.increaseVolume(-e)}},{key:"toggleCaptions",value:function(e){Pe.toggle.call(this,e,!1)}},{key:"airplay",value:function(){ie.airplay&&this.media.webkitShowPlaybackTargetPicker()}},{key:"toggleControls",value:function(e){if(this.supported.ui&&!this.isAudio){var t=J(this.elements.container,this.config.classNames.hideControls),n=void 0===e?void 0:!e,i=X(this.elements.container,this.config.classNames.hideControls,n);if(i&&this.config.controls.includes("settings")&&!N.empty(this.config.settings)&&Ae.toggleMenu.call(this,!1),i!==t){var a=i?"controlshidden":"controlsshown";H.call(this,this.media,a)}return!i}return!1}},{key:"on",value:function(e,t){O.call(this,this.elements.container,e,t)}},{key:"once",value:function(e,t){q.call(this,this.elements.container,e,t)}},{key:"off",value:function(e,t){j(this.elements.container,e,t)}},{key:"destroy",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.ready){var i=function(){document.body.style.overflow="",t.embed=null,n?(Object.keys(t.elements).length&&(W(t.elements.buttons.play),W(t.elements.captions),W(t.elements.controls),W(t.elements.wrapper),t.elements.buttons.play=null,t.elements.captions=null,t.elements.controls=null,t.elements.wrapper=null),N.function(e)&&e()):(function(){this&&this.eventListeners&&(this.eventListeners.forEach(function(e){var t=e.element,n=e.type,i=e.callback,a=e.options;t.removeEventListener(n,i,a)}),this.eventListeners=[])}.call(t),K(t.elements.original,t.elements.container),H.call(t,t.elements.original,"destroyed",!0),N.function(e)&&e.call(t.elements.original),t.ready=!1,setTimeout(function(){t.elements=null,t.media=null},200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(Fe.toggleNativeControls.call(this,!0),i()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&N.function(this.embed.destroy)&&this.embed.destroy(),i()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(i),setTimeout(i,200))}}},{key:"supports",value:function(e){return ie.mime.call(this,e)}},{key:"isHTML5",get:function(){return this.provider===Le.html5}},{key:"isEmbed",get:function(){return this.isYouTube||this.isVimeo}},{key:"isYouTube",get:function(){return this.provider===Le.youtube}},{key:"isVimeo",get:function(){return this.provider===Le.vimeo}},{key:"isVideo",get:function(){return this.type===Ie.video}},{key:"isAudio",get:function(){return this.type===Ie.audio}},{key:"playing",get:function(){return Boolean(this.ready&&!this.paused&&!this.ended)}},{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:function(){return Boolean(this.paused&&0===this.currentTime)}},{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:function(e){if(this.duration){var t=N.number(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds"))}},get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:function(){var e=this.media.buffered;return N.number(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}},{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:function(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,n=N.number(t)&&t!==1/0?t:0;return e||n}},{key:"volume",set:function(e){var t=e;N.string(t)&&(t=Number(t)),N.number(t)||(t=this.storage.get("volume")),N.number(t)||(t=this.config.volume),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!N.empty(e)&&this.muted&&t>0&&(this.muted=!1)},get:function(){return Number(this.media.volume)}},{key:"muted",set:function(e){var t=e;N.boolean(t)||(t=this.storage.get("muted")),N.boolean(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t},get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:function(){return!this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}},{key:"speed",set:function(e){var t=this,n=null;N.number(e)&&(n=e),N.number(n)||(n=this.storage.get("speed")),N.number(n)||(n=this.config.speed.selected);var i=this.minimumSpeed,a=this.maximumSpeed;n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return Math.min(Math.max(e,t),n)}(n,i,a),this.config.speed.selected=n,setTimeout(function(){t.media.playbackRate=n},0)},get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,s(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:function(){return this.isYouTube?Math.max.apply(Math,s(this.options.speed)):this.isVimeo?2:16}},{key:"quality",set:function(e){var t=this.config.quality,n=this.options.quality;if(n.length){var i=[!N.empty(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(N.number),a=!0;if(!n.includes(i)){var s=function(e,t){return N.array(e)&&e.length?e.reduce(function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e}):null}(n,i);this.debug.warn("Unsupported quality option: ".concat(i,", using ").concat(s," instead")),i=s,a=!1}t.selected=i,this.media.quality=i,a&&this.storage.set({quality:i})}},get:function(){return this.media.quality}},{key:"loop",set:function(e){var t=N.boolean(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t},get:function(){return Boolean(this.media.loop)}},{key:"source",set:function(e){$e.change.call(this,e)},get:function(){return this.media.currentSrc}},{key:"download",get:function(){var e=this.config.urls.download;return N.url(e)?e:this.source},set:function(e){N.url(e)&&(this.config.urls.download=e,Ae.setDownloadUrl.call(this))}},{key:"poster",set:function(e){this.isVideo?Fe.setPoster.call(this,e,!1).catch(function(){}):this.debug.warn("Poster can only be set for video")},get:function(){return this.isVideo?this.media.getAttribute("poster"):null}},{key:"ratio",get:function(){if(!this.isVideo)return null;var e=se(re.call(this));return N.array(e)?e.join(":"):e},set:function(e){this.isVideo?N.string(e)&&ae(e)?(this.config.ratio=e,oe.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video")}},{key:"autoplay",set:function(e){var t=N.boolean(e)?e:this.config.autoplay;this.config.autoplay=t},get:function(){return Boolean(this.config.autoplay)}},{key:"currentTrack",set:function(e){Pe.set.call(this,e,!1)},get:function(){var e=this.captions,t=e.toggled,n=e.currentTrack;return t?n:-1}},{key:"language",set:function(e){Pe.setLanguage.call(this,e,!1)},get:function(){return(Pe.getCurrentTrack.call(this)||{}).language}},{key:"pip",set:function(e){if(ie.pip){var t=N.boolean(e)?e:!this.pip;N.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?Me:xe),N.function(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}},get:function(){return ie.pip?N.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Me:null}}],[{key:"supported",value:function(e,t,n){return ie.check(e,t,n)}},{key:"loadSprite",value:function(e,t){return be(e,t)}},{key:"setup",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;return N.string(e)?i=Array.from(document.querySelectorAll(e)):N.nodeList(e)?i=Array.from(e):N.array(e)&&(i=e.filter(N.element)),N.empty(i)?null:i.map(function(e){return new t(e,n)})}}]),t}();return Ze.defaults=(Ge=Ne,JSON.parse(JSON.stringify(Ge))),Ze});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function(i) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], i)
        : "undefined" != typeof exports
        ? (module.exports = i(require("jquery")))
        : i(jQuery);
})(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = (function() {
        function e(e, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(e),
                appendDots: i(e),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(e)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(e).data("slick") || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                "undefined" != typeof document.mozHidden
                    ? ((n.hidden = "mozHidden"),
                      (n.visibilityChange = "mozvisibilitychange"))
                    : "undefined" != typeof document.webkitHidden &&
                      ((n.hidden = "webkitHidden"),
                      (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = t++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        }
        var t = 0;
        return e;
    })()),
        (e.prototype.activateADA = function() {
            var i = this;
            i.$slideTrack
                .find(".slick-active")
                .attr({ "aria-hidden": "false" })
                .find("a, input, button, select")
                .attr({ tabindex: "0" });
        }),
        (e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
            var s = this;
            if ("boolean" == typeof t) (o = t), (t = null);
            else if (t < 0 || t >= s.slideCount) return !1;
            s.unload(),
                "number" == typeof t
                    ? 0 === t && 0 === s.$slides.length
                        ? i(e).appendTo(s.$slideTrack)
                        : o
                        ? i(e).insertBefore(s.$slides.eq(t))
                        : i(e).insertAfter(s.$slides.eq(t))
                    : o === !0
                    ? i(e).prependTo(s.$slideTrack)
                    : i(e).appendTo(s.$slideTrack),
                (s.$slides = s.$slideTrack.children(this.options.slide)),
                s.$slideTrack.children(this.options.slide).detach(),
                s.$slideTrack.append(s.$slides),
                s.$slides.each(function(e, t) {
                    i(t).attr("data-slick-index", e);
                }),
                (s.$slidesCache = s.$slides),
                s.reinit();
        }),
        (e.prototype.animateHeight = function() {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                i.options.adaptiveHeight === !0 &&
                i.options.vertical === !1
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function(e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
                s.transformsEnabled === !1
                    ? s.options.vertical === !1
                        ? s.$slideTrack.animate(
                              { left: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                        : s.$slideTrack.animate(
                              { top: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                    : s.cssTransitions === !1
                    ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
                      i({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function(i) {
                                  (i = Math.ceil(i)),
                                      s.options.vertical === !1
                                          ? ((o[s.animType] =
                                                "translate(" + i + "px, 0px)"),
                                            s.$slideTrack.css(o))
                                          : ((o[s.animType] =
                                                "translate(0px," + i + "px)"),
                                            s.$slideTrack.css(o));
                              },
                              complete: function() {
                                  t && t.call();
                              }
                          }
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      s.options.vertical === !1
                          ? (o[s.animType] =
                                "translate3d(" + e + "px, 0px, 0px)")
                          : (o[s.animType] =
                                "translate3d(0px," + e + "px, 0px)"),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function() {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function() {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function(e) {
            var t = this,
                o = t.getNavTarget();
            null !== o &&
                "object" == typeof o &&
                o.each(function() {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function(i) {
            var e = this,
                t = {};
            e.options.fade === !1
                ? (t[e.transitionType] =
                      e.transformType +
                      " " +
                      e.options.speed +
                      "ms " +
                      e.options.cssEase)
                : (t[e.transitionType] =
                      "opacity " + e.options.speed + "ms " + e.options.cssEase),
                e.options.fade === !1
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function() {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                    (i.autoPlayTimer = setInterval(
                        i.autoPlayIterator,
                        i.options.autoplaySpeed
                    ));
        }),
        (e.prototype.autoPlayClear = function() {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function() {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (i.options.infinite === !1 &&
                    (1 === i.direction &&
                    i.currentSlide + 1 === i.slideCount - 1
                        ? (i.direction = 0)
                        : 0 === i.direction &&
                          ((e = i.currentSlide - i.options.slidesToScroll),
                          i.currentSlide - 1 === 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass(
                    "slick-arrow"
                )),
                (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                      e.options.infinite !== !0 &&
                          e.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"))
                    : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function() {
            var e,
                t,
                o = this;
            if (
                o.options.dots === !0 &&
                o.slideCount > o.options.slidesToShow
            ) {
                for (
                    o.$slider.addClass("slick-dotted"),
                        t = i("<ul />").addClass(o.options.dotsClass),
                        e = 0;
                    e <= o.getDotCount();
                    e += 1
                )
                    t.append(
                        i("<li />").append(
                            o.options.customPaging.call(this, o, e)
                        )
                    );
                (o.$dots = t.appendTo(o.options.appendDots)),
                    o.$dots
                        .find("li")
                        .first()
                        .addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function() {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function(e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack =
                    0 === e.slideCount
                        ? i('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                              .wrapAll('<div class="slick-track"/>')
                              .parent()),
                (e.$list = e.$slideTrack
                    .wrap('<div class="slick-list"/>')
                    .parent()),
                e.$slideTrack.css("opacity", 0),
                (e.options.centerMode !== !0 &&
                    e.options.swipeToSlide !== !0) ||
                    (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider)
                    .not("[src]")
                    .addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.options.draggable === !0 && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function() {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                (n = l.$slider.children()),
                l.options.rows > 0)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        i = 0;
                    i < s;
                    i++
                ) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / l.options.slidesPerRow + "%",
                            display: "inline-block"
                        });
            }
        }),
        (e.prototype.checkResponsive = function(e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ("window" === r.respondTo
                    ? (n = a)
                    : "slider" === r.respondTo
                    ? (n = d)
                    : "min" === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                        (r.originalSettings.mobileFirst === !1
                            ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                            : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                e === !0 &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                e === !0 &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint &&
                      ((r.activeBreakpoint = null),
                      (r.options = r.originalSettings),
                      e === !0 && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e),
                      (l = s)),
                    e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function(e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is("a") && e.preventDefault(),
                l.is("li") || (l = l.closest("li")),
                (n = r.slideCount % r.options.slidesToScroll !== 0),
                (o = n
                    ? 0
                    : (r.slideCount - r.currentSlide) %
                      r.options.slidesToScroll),
                e.data.message)
            ) {
                case "previous":
                    (s =
                        0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d =
                        0 === e.data.index
                            ? 0
                            : e.data.index ||
                              l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function(i) {
            var e,
                t,
                o = this;
            if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
                i = e[e.length - 1];
            else
                for (var s in e) {
                    if (i < e[s]) {
                        i = t;
                        break;
                    }
                    t = e[s];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i("li", e.$dots)
                    .off("click.slick", e.changeSlide)
                    .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                    .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                e.options.accessibility === !0 &&
                    e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                e.options.arrows === !0 &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow &&
                        e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow &&
                        e.$nextArrow.off("click.slick", e.changeSlide),
                    e.options.accessibility === !0 &&
                        (e.$prevArrow &&
                            e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow &&
                            e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off(
                    "touchcancel.slick mouseleave.slick",
                    e.swipeHandler
                ),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                e.options.accessibility === !0 &&
                    e.$list.off("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 &&
                    i(e.$slideTrack)
                        .children()
                        .off("click.slick", e.selectHandler),
                i(window).off(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    e.orientationChange
                ),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).off(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                );
        }),
        (e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function() {
            var i,
                e = this;
            e.options.rows > 0 &&
                ((i = e.$slides.children().children()),
                i.removeAttr("style"),
                e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function(i) {
            var e = this;
            e.shouldClick === !1 &&
                (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault());
        }),
        (e.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass(
                            "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function() {
                            i(this).attr(
                                "style",
                                i(this).data("originalStyling")
                            );
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function(i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""),
                e.options.fade === !1
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function(i, e) {
            var t = this;
            t.cssTransitions === !1
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
                  t.$slides
                      .eq(i)
                      .animate(
                          { opacity: 1 },
                          t.options.speed,
                          t.options.easing,
                          e
                      ))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function() {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function(i) {
            var e = this;
            e.cssTransitions === !1
                ? e.$slides
                      .eq(i)
                      .animate(
                          { opacity: 0, zIndex: e.options.zIndex - 2 },
                          e.options.speed,
                          e.options.easing
                      )
                : (e.applyTransition(i),
                  e.$slides
                      .eq(i)
                      .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
            var e = this;
            null !== i &&
                ((e.$slidesCache = e.$slides),
                e.unload(),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                e.reinit());
        }),
        (e.prototype.focusHandler = function() {
            var e = this;
            e.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick", "*", function(t) {
                    var o = i(this);
                    setTimeout(function() {
                        e.options.pauseOnFocus &&
                            o.is(":focus") &&
                            ((e.focussed = !0), e.autoPlay());
                    }, 0);
                })
                .on("blur.slick", "*", function(t) {
                    i(this);
                    e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var i = this;
            return i.currentSlide;
        }),
        (e.prototype.getDotCount = function() {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (i.options.infinite === !0)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            (e = t + i.options.slidesToScroll),
                            (t +=
                                i.options.slidesToScroll <=
                                i.options.slidesToShow
                                    ? i.options.slidesToScroll
                                    : i.options.slidesToShow);
            else if (i.options.centerMode === !0) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow
                                ? i.options.slidesToScroll
                                : i.options.slidesToShow);
            else
                o =
                    1 +
                    Math.ceil(
                        (i.slideCount - i.options.slidesToShow) /
                            i.options.slidesToScroll
                    );
            return o - 1;
        }),
        (e.prototype.getLeft = function(i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                n.options.infinite === !0
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                              n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          n.options.vertical === !0 &&
                              n.options.centerMode === !0 &&
                              (2 === n.options.slidesToShow
                                  ? (s = -1.5)
                                  : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll !== 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    t *
                                    -1))
                              : ((n.slideOffset =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    t *
                                    -1))))
                    : i + n.options.slidesToShow > n.slideCount &&
                      ((n.slideOffset =
                          (i + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                      (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                    ((n.slideOffset = 0), (r = 0)),
                n.options.centerMode === !0 &&
                n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset =
                          (n.slideWidth * Math.floor(n.options.slidesToShow)) /
                              2 -
                          (n.slideWidth * n.slideCount) / 2)
                    : n.options.centerMode === !0 && n.options.infinite === !0
                    ? (n.slideOffset +=
                          n.slideWidth *
                              Math.floor(n.options.slidesToShow / 2) -
                          n.slideWidth)
                    : n.options.centerMode === !0 &&
                      ((n.slideOffset = 0),
                      (n.slideOffset +=
                          n.slideWidth *
                          Math.floor(n.options.slidesToShow / 2))),
                (e =
                    n.options.vertical === !1
                        ? i * n.slideWidth * -1 + n.slideOffset
                        : i * t * -1 + r),
                n.options.variableWidth === !0 &&
                    ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        n.options.infinite === !1
                            ? n.$slideTrack.children(".slick-slide").eq(i)
                            : n.$slideTrack
                                  .children(".slick-slide")
                                  .eq(i + n.options.slidesToShow)),
                    (e =
                        n.options.rtl === !0
                            ? o[0]
                                ? (n.$slideTrack.width() -
                                      o[0].offsetLeft -
                                      o.width()) *
                                  -1
                                : 0
                            : o[0]
                            ? o[0].offsetLeft * -1
                            : 0),
                    n.options.centerMode === !0 &&
                        ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            n.options.infinite === !1
                                ? n.$slideTrack.children(".slick-slide").eq(i)
                                : n.$slideTrack
                                      .children(".slick-slide")
                                      .eq(i + n.options.slidesToShow + 1)),
                        (e =
                            n.options.rtl === !0
                                ? o[0]
                                    ? (n.$slideTrack.width() -
                                          o[0].offsetLeft -
                                          o.width()) *
                                      -1
                                    : 0
                                : o[0]
                                ? o[0].offsetLeft * -1
                                : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption = function(i) {
            var e = this;
            return e.options[i];
        }),
        (e.prototype.getNavigableIndexes = function() {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (
                e.options.infinite === !1
                    ? (i = e.slideCount)
                    : ((t = e.options.slidesToScroll * -1),
                      (o = e.options.slidesToScroll * -1),
                      (i = 2 * e.slideCount));
                t < i;

            )
                s.push(t),
                    (t = o + e.options.slidesToScroll),
                    (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function() {
            return this;
        }),
        (e.prototype.getSlideCount = function() {
            var e,
                t,
                o,
                s,
                n = this;
            return (
                (s =
                    n.options.centerMode === !0
                        ? Math.floor(n.$list.width() / 2)
                        : 0),
                (o = n.swipeLeft * -1 + s),
                n.options.swipeToSlide === !0
                    ? (n.$slideTrack.find(".slick-slide").each(function(e, s) {
                          var r, l, d;
                          if (
                              ((r = i(s).outerWidth()),
                              (l = s.offsetLeft),
                              n.options.centerMode !== !0 && (l += r / 2),
                              (d = l + r),
                              o < d)
                          )
                              return (t = s), !1;
                      }),
                      (e =
                          Math.abs(
                              i(t).attr("data-slick-index") - n.currentSlide
                          ) || 1))
                    : n.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
            var t = this;
            t.changeSlide(
                { data: { message: "index", index: parseInt(i) } },
                e
            );
        }),
        (e.prototype.init = function(e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
                (i(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                t.options.accessibility === !0 && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function() {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function(i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                null !== e.$dots &&
                    (e.$slides
                        .not(e.$slideTrack.find(".slick-cloned"))
                        .each(function(t) {
                            var s = o.indexOf(t);
                            if (
                                (i(this).attr({
                                    role: "tabpanel",
                                    id: "slick-slide" + e.instanceUid + t,
                                    tabindex: -1
                                }),
                                s !== -1)
                            ) {
                                var n =
                                    "slick-slide-control" + e.instanceUid + s;
                                i("#" + n).length &&
                                    i(this).attr({ "aria-describedby": n });
                            }
                        }),
                    e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function(s) {
                            var n = o[s];
                            i(this).attr({ role: "presentation" }),
                                i(this)
                                    .find("button")
                                    .first()
                                    .attr({
                                        role: "tab",
                                        id:
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                        "aria-controls":
                                            "slick-slide" + e.instanceUid + n,
                                        "aria-label": s + 1 + " of " + t,
                                        "aria-selected": null,
                                        tabindex: "-1"
                                    });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
            for (
                var s = e.currentSlide, n = s + e.options.slidesToShow;
                s < n;
                s++
            )
                e.options.focusOnChange
                    ? e.$slides.eq(s).attr({ tabindex: "0" })
                    : e.$slides.eq(s).removeAttr("tabindex");
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function() {
            var i = this;
            i.options.arrows === !0 &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow
                    .off("click.slick")
                    .on("click.slick", { message: "next" }, i.changeSlide),
                i.options.accessibility === !0 &&
                    (i.$prevArrow.on("keydown.slick", i.keyHandler),
                    i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 &&
                e.slideCount > e.options.slidesToShow &&
                (i("li", e.$dots).on(
                    "click.slick",
                    { message: "index" },
                    e.changeSlide
                ),
                e.options.accessibility === !0 &&
                    e.$dots.on("keydown.slick", e.keyHandler)),
                e.options.dots === !0 &&
                    e.options.pauseOnDotsHover === !0 &&
                    e.slideCount > e.options.slidesToShow &&
                    i("li", e.$dots)
                        .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                        .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover &&
                (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    "touchstart.slick mousedown.slick",
                    { action: "start" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchmove.slick mousemove.slick",
                    { action: "move" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchend.slick mouseup.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchcancel.slick mouseleave.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                e.options.accessibility === !0 &&
                    e.$list.on("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                i(window).on(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    i.proxy(e.orientationChange, e)
                ),
                i(window).on(
                    "resize.slick.slick-" + e.instanceUid,
                    i.proxy(e.resize, e)
                ),
                i("[draggable!=true]", e.$slideTrack).on(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).on(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                ),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function() {
            var i = this;
            i.options.arrows === !0 &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()),
                i.options.dots === !0 &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.show();
        }),
        (e.prototype.keyHandler = function(i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && e.options.accessibility === !0
                    ? e.changeSlide({
                          data: {
                              message:
                                  e.options.rtl === !0 ? "next" : "previous"
                          }
                      })
                    : 39 === i.keyCode &&
                      e.options.accessibility === !0 &&
                      e.changeSlide({
                          data: {
                              message:
                                  e.options.rtl === !0 ? "previous" : "next"
                          }
                      }));
        }),
        (e.prototype.lazyLoad = function() {
            function e(e) {
                i("img[data-lazy]", e).each(function() {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s =
                            i(this).attr("data-sizes") ||
                            r.$slider.attr("data-sizes"),
                        n = document.createElement("img");
                    (n.onload = function() {
                        e.animate({ opacity: 0 }, 100, function() {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e
                                    .attr("src", t)
                                    .animate({ opacity: 1 }, 200, function() {
                                        e.removeAttr(
                                            "data-lazy data-srcset data-sizes"
                                        ).removeClass("slick-loading");
                                    }),
                                r.$slider.trigger("lazyLoaded", [r, e, t]);
                        });
                    }),
                        (n.onerror = function() {
                            e
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                r.$slider.trigger("lazyLoadError", [r, e, t]);
                        }),
                        (n.src = t);
                });
            }
            var t,
                o,
                s,
                n,
                r = this;
            if (
                (r.options.centerMode === !0
                    ? r.options.infinite === !0
                        ? ((s =
                              r.currentSlide +
                              (r.options.slidesToShow / 2 + 1)),
                          (n = s + r.options.slidesToShow + 2))
                        : ((s = Math.max(
                              0,
                              r.currentSlide - (r.options.slidesToShow / 2 + 1)
                          )),
                          (n =
                              2 +
                              (r.options.slidesToShow / 2 + 1) +
                              r.currentSlide))
                    : ((s = r.options.infinite
                          ? r.options.slidesToShow + r.currentSlide
                          : r.currentSlide),
                      (n = Math.ceil(s + r.options.slidesToShow)),
                      r.options.fade === !0 &&
                          (s > 0 && s--, n <= r.slideCount && n++)),
                (t = r.$slider.find(".slick-slide").slice(s, n)),
                "anticipated" === r.options.lazyLoad)
            )
                for (
                    var l = s - 1,
                        d = n,
                        a = r.$slider.find(".slick-slide"),
                        c = 0;
                    c < r.options.slidesToScroll;
                    c++
                )
                    l < 0 && (l = r.slideCount - 1),
                        (t = t.add(a.eq(l))),
                        (t = t.add(a.eq(d))),
                        l--,
                        d++;
            e(t),
                r.slideCount <= r.options.slidesToShow
                    ? ((o = r.$slider.find(".slick-slide")), e(o))
                    : r.currentSlide >= r.slideCount - r.options.slidesToShow
                    ? ((o = r.$slider
                          .find(".slick-cloned")
                          .slice(0, r.options.slidesToShow)),
                      e(o))
                    : 0 === r.currentSlide &&
                      ((o = r.$slider
                          .find(".slick-cloned")
                          .slice(r.options.slidesToShow * -1)),
                      e(o));
        }),
        (e.prototype.loadSlider = function() {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext = function() {
            var i = this;
            i.changeSlide({ data: { message: "next" } });
        }),
        (e.prototype.orientationChange = function() {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause = function() {
            var i = this;
            i.autoPlayClear(), (i.paused = !0);
        }),
        (e.prototype.play = e.prototype.slickPlay = function() {
            var i = this;
            i.autoPlay(),
                (i.options.autoplay = !0),
                (i.paused = !1),
                (i.focussed = !1),
                (i.interrupted = !1);
        }),
        (e.prototype.postSlide = function(e) {
            var t = this;
            if (
                !t.unslicked &&
                (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                t.options.accessibility === !0 &&
                    (t.initADA(), t.options.focusOnChange))
            ) {
                var o = i(t.$slides.get(t.currentSlide));
                o.attr("tabindex", 0).focus();
            }
        }),
        (e.prototype.prev = e.prototype.slickPrev = function() {
            var i = this;
            i.changeSlide({ data: { message: "previous" } });
        }),
        (e.prototype.preventDefault = function(i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr("data-lazy")),
                  (s = t.attr("data-srcset")),
                  (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                  (r = document.createElement("img")),
                  (r.onload = function() {
                      s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                          t
                              .attr("src", o)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                          l.options.adaptiveHeight === !0 && l.setPosition(),
                          l.$slider.trigger("lazyLoaded", [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function() {
                      e < 3
                          ? setTimeout(function() {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                            l.$slider.trigger("lazyLoadError", [l, t, o]),
                            l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function(e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite &&
                    s.currentSlide > o &&
                    (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e ||
                    s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function() {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] &&
                                s.breakpoints[o] === t &&
                                s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function(i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function() {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount &&
                    0 !== e.currentSlide &&
                    (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                e.options.focusOnSelect === !0 &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function() {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function() {
                    (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
            var o = this;
            return (
                "boolean" == typeof i
                    ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1))
                    : (i = e === !0 ? --i : i),
                !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
                    (o.unload(),
                    t === !0
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack
                              .children(this.options.slide)
                              .eq(i)
                              .remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    void o.reinit())
            );
        }),
        (e.prototype.setCSS = function(i) {
            var e,
                t,
                o = this,
                s = {};
            o.options.rtl === !0 && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                o.transformsEnabled === !1
                    ? o.$slideTrack.css(s)
                    : ((s = {}),
                      o.cssTransitions === !1
                          ? ((s[o.animType] =
                                "translate(" + e + ", " + t + ")"),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] =
                                "translate3d(" + e + ", " + t + ", 0px)"),
                            o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function() {
            var i = this;
            i.options.vertical === !1
                ? i.options.centerMode === !0 &&
                  i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(
                      i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                  ),
                  i.options.centerMode === !0 &&
                      i.$list.css({
                          padding: i.options.centerPadding + " 0px"
                      })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                i.options.vertical === !1 && i.options.variableWidth === !1
                    ? ((i.slideWidth = Math.ceil(
                          i.listWidth / i.options.slidesToShow
                      )),
                      i.$slideTrack.width(
                          Math.ceil(
                              i.slideWidth *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ))
                    : i.options.variableWidth === !0
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)),
                      i.$slideTrack.height(
                          Math.ceil(
                              i.$slides.first().outerHeight(!0) *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ));
            var e =
                i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            i.options.variableWidth === !1 &&
                i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function() {
            var e,
                t = this;
            t.$slides.each(function(o, s) {
                (e = t.slideWidth * o * -1),
                    t.options.rtl === !0
                        ? i(s).css({
                              position: "relative",
                              right: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0
                          })
                        : i(s).css({
                              position: "relative",
                              left: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0
                          });
            }),
                t.$slides
                    .eq(t.currentSlide)
                    .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function() {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                i.options.adaptiveHeight === !0 &&
                i.options.vertical === !1
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e,
                t,
                o,
                s,
                n,
                r = this,
                l = !1;
            if (
                ("object" === i.type(arguments[0])
                    ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
                    : "string" === i.type(arguments[0]) &&
                      ((o = arguments[0]),
                      (s = arguments[1]),
                      (l = arguments[2]),
                      "responsive" === arguments[0] &&
                      "array" === i.type(arguments[1])
                          ? (n = "responsive")
                          : "undefined" != typeof arguments[1] &&
                            (n = "single")),
                "single" === n)
            )
                r.options[o] = s;
            else if ("multiple" === n)
                i.each(o, function(i, e) {
                    r.options[i] = e;
                });
            else if ("responsive" === n)
                for (t in s)
                    if ("array" !== i.type(r.options.responsive))
                        r.options.responsive = [s[t]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0; )
                            r.options.responsive[e].breakpoint ===
                                s[t].breakpoint &&
                                r.options.responsive.splice(e, 1),
                                e--;
                        r.options.responsive.push(s[t]);
                    }
            l && (r.unload(), r.reinit());
        }),
        (e.prototype.setPosition = function() {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                i.options.fade === !1
                    ? i.setCSS(i.getLeft(i.currentSlide))
                    : i.setFade(),
                i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function() {
            var i = this,
                e = document.body.style;
            (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
                "top" === i.positionProp
                    ? i.$slider.addClass("slick-vertical")
                    : i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition &&
                    void 0 === e.MozTransition &&
                    void 0 === e.msTransition) ||
                    (i.options.useCSS === !0 && (i.cssTransitions = !0)),
                i.options.fade &&
                    ("number" == typeof i.options.zIndex
                        ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                        : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform &&
                    ((i.animType = "OTransform"),
                    (i.transformType = "-o-transform"),
                    (i.transitionType = "OTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.MozTransform &&
                    ((i.animType = "MozTransform"),
                    (i.transformType = "-moz-transform"),
                    (i.transitionType = "MozTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = "webkitTransform"),
                    (i.transformType = "-webkit-transform"),
                    (i.transitionType = "webkitTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.msTransform &&
                    ((i.animType = "msTransform"),
                    (i.transformType = "-ms-transform"),
                    (i.transitionType = "msTransition"),
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform &&
                    i.animType !== !1 &&
                    ((i.animType = "transform"),
                    (i.transformType = "transform"),
                    (i.transitionType = "transition")),
                (i.transformsEnabled =
                    i.options.useTransform &&
                    null !== i.animType &&
                    i.animType !== !1);
        }),
        (e.prototype.setSlideClasses = function(i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                    .find(".slick-slide")
                    .removeClass("slick-active slick-center slick-current")
                    .attr("aria-hidden", "true")),
                n.$slides.eq(i).addClass("slick-current"),
                n.options.centerMode === !0)
            ) {
                var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    n.options.infinite === !0 &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")),
                        0 === i
                            ? t
                                  .eq(t.length - 1 - n.options.slidesToShow)
                                  .addClass("slick-center")
                            : i === n.slideCount - 1 &&
                              t
                                  .eq(n.options.slidesToShow)
                                  .addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                    : t.length <= n.options.slidesToShow
                    ? t.addClass("slick-active").attr("aria-hidden", "false")
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o =
                          n.options.infinite === !0
                              ? n.options.slidesToShow + i
                              : i),
                      n.options.slidesToShow == n.options.slidesToScroll &&
                      n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad &&
                "anticipated" !== n.options.lazyLoad) ||
                n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function() {
            var e,
                t,
                o,
                s = this;
            if (
                (s.options.fade === !0 && (s.options.centerMode = !1),
                s.options.infinite === !0 &&
                    s.options.fade === !1 &&
                    ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o =
                        s.options.centerMode === !0
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                        e = s.slideCount;
                    e > s.slideCount - o;
                    e -= 1
                )
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function() {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function(i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function(e) {
            var t = this,
                o = i(e.target).is(".slick-slide")
                    ? i(e.target)
                    : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            return (
                s || (s = 0),
                t.slideCount <= t.options.slidesToShow
                    ? void t.slideHandler(s, !1, !0)
                    : void t.slideHandler(s)
            );
        }),
        (e.prototype.slideHandler = function(i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1),
                !(
                    (a.animating === !0 && a.options.waitForAnimate === !0) ||
                    (a.options.fade === !0 && a.currentSlide === i)
                ))
            )
                return (
                    e === !1 && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    a.options.infinite === !1 &&
                    a.options.centerMode === !1 &&
                    (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
                        ? void (
                              a.options.fade === !1 &&
                              ((o = a.currentSlide),
                              t !== !0 && a.slideCount > a.options.slidesToShow
                                  ? a.animateSlide(r, function() {
                                        a.postSlide(o);
                                    })
                                  : a.postSlide(o))
                          )
                        : a.options.infinite === !1 &&
                          a.options.centerMode === !0 &&
                          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                        ? void (
                              a.options.fade === !1 &&
                              ((o = a.currentSlide),
                              t !== !0 && a.slideCount > a.options.slidesToShow
                                  ? a.animateSlide(r, function() {
                                        a.postSlide(o);
                                    })
                                  : a.postSlide(o))
                          )
                        : (a.options.autoplay && clearInterval(a.autoPlayTimer),
                          (s =
                              o < 0
                                  ? a.slideCount % a.options.slidesToScroll !==
                                    0
                                      ? a.slideCount -
                                        (a.slideCount %
                                            a.options.slidesToScroll)
                                      : a.slideCount + o
                                  : o >= a.slideCount
                                  ? a.slideCount % a.options.slidesToScroll !==
                                    0
                                      ? 0
                                      : o - a.slideCount
                                  : o),
                          (a.animating = !0),
                          a.$slider.trigger("beforeChange", [
                              a,
                              a.currentSlide,
                              s
                          ]),
                          (n = a.currentSlide),
                          (a.currentSlide = s),
                          a.setSlideClasses(a.currentSlide),
                          a.options.asNavFor &&
                              ((l = a.getNavTarget()),
                              (l = l.slick("getSlick")),
                              l.slideCount <= l.options.slidesToShow &&
                                  l.setSlideClasses(a.currentSlide)),
                          a.updateDots(),
                          a.updateArrows(),
                          a.options.fade === !0
                              ? (t !== !0
                                    ? (a.fadeSlideOut(n),
                                      a.fadeSlide(s, function() {
                                          a.postSlide(s);
                                      }))
                                    : a.postSlide(s),
                                void a.animateHeight())
                              : void (t !== !0 &&
                                a.slideCount > a.options.slidesToShow
                                    ? a.animateSlide(d, function() {
                                          a.postSlide(s);
                                      })
                                    : a.postSlide(s)))
                );
        }),
        (e.prototype.startLoad = function() {
            var i = this;
            i.options.arrows === !0 &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()),
                i.options.dots === !0 &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function() {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)),
                o < 0 && (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? s.options.rtl === !1
                        ? "left"
                        : "right"
                    : o <= 360 && o >= 315
                    ? s.options.rtl === !1
                        ? "left"
                        : "right"
                    : o >= 135 && o <= 225
                    ? s.options.rtl === !1
                        ? "right"
                        : "left"
                    : s.options.verticalSwiping === !0
                    ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                    : "vertical"
            );
        }),
        (e.prototype.swipeEnd = function(i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (o.touchObject.edgeHit === !0 &&
                    o.$slider.trigger("edge", [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide + o.getSlideCount()
                              )
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide - o.getSlideCount()
                              )
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                }
                "vertical" != t &&
                    (o.slideHandler(e),
                    (o.touchObject = {}),
                    o.$slider.trigger("swipe", [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                    (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function(i) {
            var e = this;
            if (
                !(
                    e.options.swipe === !1 ||
                    ("ontouchend" in document && e.options.swipe === !1) ||
                    (e.options.draggable === !1 &&
                        i.type.indexOf("mouse") !== -1)
                )
            )
                switch (
                    ((e.touchObject.fingerCount =
                        i.originalEvent && void 0 !== i.originalEvent.touches
                            ? i.originalEvent.touches.length
                            : 1),
                    (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                    e.options.verticalSwiping === !0 &&
                        (e.touchObject.minSwipe =
                            e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function(i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n =
                    void 0 !== i.originalEvent
                        ? i.originalEvent.touches
                        : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curX - l.touchObject.startX,
                                2
                            )
                        )
                    )),
                    (r = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curY - l.touchObject.startY,
                                2
                            )
                        )
                    )),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (l.options.verticalSwiping === !0 &&
                              (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent &&
                              l.touchObject.swipeLength > 4 &&
                              ((l.swiping = !0), i.preventDefault()),
                          (s =
                              (l.options.rtl === !1 ? 1 : -1) *
                              (l.touchObject.curX > l.touchObject.startX
                                  ? 1
                                  : -1)),
                          l.options.verticalSwiping === !0 &&
                              (s =
                                  l.touchObject.curY > l.touchObject.startY
                                      ? 1
                                      : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          l.options.infinite === !1 &&
                              ((0 === l.currentSlide && "right" === t) ||
                                  (l.currentSlide >= l.getDotCount() &&
                                      "left" === t)) &&
                              ((o =
                                  l.touchObject.swipeLength *
                                  l.options.edgeFriction),
                              (l.touchObject.edgeHit = !0)),
                          l.options.vertical === !1
                              ? (l.swipeLeft = e + o * s)
                              : (l.swipeLeft =
                                    e +
                                    o * (l.$list.height() / l.listWidth) * s),
                          l.options.verticalSwiping === !0 &&
                              (l.swipeLeft = e + o * s),
                          l.options.fade !== !0 &&
                              l.options.touchMove !== !1 &&
                              (l.animating === !0
                                  ? ((l.swipeLeft = null), !1)
                                  : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function(i) {
            var e,
                t = this;
            return (
                (t.interrupted = !0),
                1 !== t.touchObject.fingerCount ||
                t.slideCount <= t.options.slidesToShow
                    ? ((t.touchObject = {}), !1)
                    : (void 0 !== i.originalEvent &&
                          void 0 !== i.originalEvent.touches &&
                          (e = i.originalEvent.touches[0]),
                      (t.touchObject.startX = t.touchObject.curX =
                          void 0 !== e ? e.pageX : i.clientX),
                      (t.touchObject.startY = t.touchObject.curY =
                          void 0 !== e ? e.pageY : i.clientY),
                      void (t.dragging = !0))
            );
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var i = this;
            null !== i.$slidesCache &&
                (i.unload(),
                i.$slideTrack.children(this.options.slide).detach(),
                i.$slidesCache.appendTo(i.$slideTrack),
                i.reinit());
        }),
        (e.prototype.unload = function() {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                    e.htmlExpr.test(e.options.prevArrow) &&
                    e.$prevArrow.remove(),
                e.$nextArrow &&
                    e.htmlExpr.test(e.options.nextArrow) &&
                    e.$nextArrow.remove(),
                e.$slides
                    .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                    )
                    .attr("aria-hidden", "true")
                    .css("width", "");
        }),
        (e.prototype.unslick = function(i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function() {
            var i,
                e = this;
            (i = Math.floor(e.options.slidesToShow / 2)),
                e.options.arrows === !0 &&
                    e.slideCount > e.options.slidesToShow &&
                    !e.options.infinite &&
                    (e.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    e.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    0 === e.currentSlide
                        ? (e.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          e.$nextArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : e.currentSlide >=
                              e.slideCount - e.options.slidesToShow &&
                          e.options.centerMode === !1
                        ? (e.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          e.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : e.currentSlide >= e.slideCount - 1 &&
                          e.options.centerMode === !0 &&
                          (e.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          e.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function() {
            var i = this;
            null !== i.$dots &&
                (i.$dots
                    .find("li")
                    .removeClass("slick-active")
                    .end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function() {
            var i = this;
            i.options.autoplay &&
                (document[i.hidden]
                    ? (i.interrupted = !0)
                    : (i.interrupted = !1));
        }),
        (i.fn.slick = function() {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ("object" == typeof s || "undefined" == typeof s
                        ? (o[i].slick = new e(o[i], s))
                        : (t = o[i].slick[s].apply(o[i].slick, n)),
                    "undefined" != typeof t)
                )
                    return t;
            return o;
        });
});
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parallax =
/*#__PURE__*/
function () {
  function Parallax(option) {
    _classCallCheck(this, Parallax);

    this._img = null;
    this._scrollBox = null;
    this._initYPos = 0;
    this.setting = Object.assign(this.defaultOption, option);
  }

  _createClass(Parallax, [{
    key: "init",
    value: function init() {
      this.setWindowSize();
      this.container = this.setting.container;
      this.scrollBox = this.setting.scrollBox;
      this.initYPosPer = this.setting.initYPosPer;
      this.parallaxDom = $(this.setting.parallaxDom, this.container)[0];
      this.img = $(this.parallaxDom).find("img")[0];
      this.setting.initDone();
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this$container$getBo = this.container.getBoundingClientRect(),
          top = _this$container$getBo.top,
          bottom = _this$container$getBo.bottom,
          height = _this$container$getBo.height,
          width = _this$container$getBo.width;

      var percentage = (this.windowSize.height + height - (top + height)) / (this.windowSize.height + height);
      percentage = Math.min(1, Math.max(0, percentage));
      if (percentage === 0 || percentage === 1) return false;
      $(this.parallaxDom).css("transform", "translate3d(0, ".concat(this.initYPos * this.setting.rotate - percentage * this.initYPos * this.setting.rotate, "px, 0)"));
    }
  }, {
    key: "setWindowSize",
    value: function setWindowSize() {
      var _this = this;

      this.windowSize = {
        height: window.innerHeight,
        width: window.innerWidth
      };
      $(window).on("resize.parallax", function () {
        _this.windowSize = {
          height: window.innerHeight,
          width: window.innerWidth
        };
        _this.initYPos = _this.initYPosPer * $(_this.parallaxDom).width();
      });
    }
  }, {
    key: "initYPos",
    get: function get() {
      return this._initYPos;
    },
    set: function set(value) {
      this._initYPos = Math.max(-$(this.parallaxDom).height(), value);
      this.animate();
    }
  }, {
    key: "defaultOption",
    get: function get() {
      var _this2 = this;

      return {
        scrollBox: "body",
        initYPosPer: -0.25,
        rotate: 1.1,
        parallaxDom: ".parallax",
        initDone: function initDone() {
          console.log("initDone");
          _this2.initYPos = -0.25 * $(_this2.parallaxDom).width();
        },
        imgLoaded: function imgLoaded() {
          console.log("image_loaded");
        },
        scrolling: function scrolling() {// console.log("scrolling");
        }
      };
    }
  }, {
    key: "scrollBox",
    get: function get() {
      return this._scrollBox;
    },
    set: function set(value) {
      var _this3 = this;

      $(this._scrollBox).off("scroll.parallax");
      this._scrollBox = value;
      $(this._scrollBox).on("scroll.parallax", function () {
        requestAnimationFrame(function () {
          _this3.animate();
        });

        _this3.setting.scrolling();
      });
    }
  }, {
    key: "img",
    get: function get() {
      return this._img;
    },
    set: function set(value) {
      var _this4 = this;

      if (!value) return false;
      this._img = value;

      if (this.constructor.isImageLoaded(value)) {
        this.setting.imgLoaded();
      } else {
        $(this._img).one("load", function () {
          _this4.setting.imgLoaded();
        });
      }
    }
  }], [{
    key: "isImageLoaded",
    value: function isImageLoaded(image) {
      // check if image is set as the parameter
      if (!image) {
        return false;
      } // check if image has been 100% loaded


      if (!image.complete) {
        return false;
      } // check if the image is displayed


      if (typeof image.naturalWidth !== "undefined" && image.naturalWidth === 0) {
        return false;
      }

      return true;
    }
  }]);

  return Parallax;
}();// 新编辑器方法


$(function () {

      $("#page_body_editor-wrapper  img ").removeAttr('srcset')
  $('#page_body_editor-wrapper .layout_bg.layout_bg_pc[data-effect="parallax"]').each(function (i, e) {
    new Parallax({
      scrollBox: document,
      container: $(e).closest(".layout_group")[0],
      parallaxDom: ".layout_bg_pc"
    }).init();
  });
  var wow = new WOW({
    boxClass: "longPage #page_body_editor-wrapper .col",
    // default
    animateClass: "animated",
    // default
    offset: 0,
    // default
    mobile: true,
    // default
    live: false // default

  });
  wow.init();
  $("#page_body_editor-wrapper .layout_slider").each(function (i, e) {
    $(e).slick({
      slidesToShow: $(e).attr("data-num") || 1,
      autoplay: $(e).attr("data-autoplay") || false,
      vertical: $(e).attr("data-slider-vertical") || false,
      verticalSwiping: $(e).attr("data-slider-vertical") || false,
      fade: $(e).attr("data-slider-fade") || false,
      dots: true,
      adaptiveHeight: $(e).attr("data-slider-adaptiveHeight") || true,
      prevArrow: "<div class=\"slick-prev\"><i class=\"fa fa-angle-left\"></i></div>",
      nextArrow: "<div class=\"slick-next\"><i class=\"fa fa-angle-right\"></i></div>"
    });
    $(e).data("_slick", e.slick);
  });
  Plyr.setup("#page_body_editor-wrapper video", {
    vimeo: {
      speed: false
    }
  });
  Plyr.setup("#page_body_editor-wrapper audio");
    function deal_a_with_img () {

                $('a').on('click', function () {
                    let link = $(this).attr('href');
                    if (!$(this).attr('download') && /https?:\/\/.+\.(jpg|png|gif)$/.test(link.trim())) {
                        var new_img_preview_dom  = $('<div class="new_img_preview_dom" style="display: none"> <img src="'+ link +'"> </div>');
                        new_img_preview_dom.appendTo('body').on('click', function (ev) {
                            if (ev.target == this) {
                                $(this).fadeOut(function () {
                                    $(this).remove();
                                })
                            }
                        });

                        setTimeout(() => {
                            new_img_preview_dom.fadeIn()   
                        });
                        
                        return false;
                    }
                    
                })
            }
            deal_a_with_img();
            
            $("#page_body_editor-wrapper").on(
                "mouseenter",
                "a[data-after-bg],a[data-after-color]",
                function() {
                    
                    $(this).css({
                        backgroundColor: $(this).attr("data-after-outline") == '1' ? "transparent" : $(this).attr("data-after-bg"),
                        borderColor: $(this).attr("data-after-bg"),
                        color: $(this).attr("data-after-color")
                    });
                }
            );
            $("#page_body_editor-wrapper").on(
                "mouseleave",
                "a[data-after-bg],a[data-after-color]",
                function() {
                     $(this).css({
                       backgroundColor:
                         $(this).attr("data-before-outline") == "1"
                           ? "transparent"
                           : $(this).attr("data-before-bg"),
                       borderColor: $(this).attr("data-before-bg"),
                       color: $(this).attr("data-before-color")
                     });
                }
            );
            
});

/*! For license information please see imageGallary.umd.min.js.LICENSE */
//# sourceMappingURL=imageGallary.umd.min.js.map
// 图片画廊功能
$(function () {
	

if ($("#page_body_editor-wrapper .layout_group[data-img_gallery] img").length) {
    /*! For license information please see imageGallary.umd.min.js.LICENSE */

//# sourceMappingURL=imageGallary.umd.min.js.map


new imageGallary($("#page_body_editor-wrapper .layout_group[data-img_gallery]")).init()
}
})
// 新编辑器表单

$(function () {
    
            function form_handler(dom) {
              var style =
                '<style>#page_body_editor-wrapper .layout_form { width: 100%; color: #777; } #page_body_editor-wrapper .layout_form option { line-height: 32px; height: 40px; cursor: pointer; color: #777; } #page_body_editor-wrapper .layout_form select { line-height: 40px; min-width: 200px; height: 40px; cursor: pointer; color: #777; border: 1px solid rgba(0, 0, 0, 0.2); } #page_body_editor-wrapper .layout_form .layout_form-row { margin-bottom: 16px; } #page_body_editor-wrapper .layout_form .layout_form-row .layout_form-option { font-size: 13px; line-height: 32px; display: flex; margin-right: 10px; align-items: center; } #page_body_editor-wrapper .layout_form .layout_form-row .layout_form-option input { cursor: pointer; } #page_body_editor-wrapper .layout_form .layout_form-row .layout_form-option label { margin-left: 4px; cursor: pointer; } #page_body_editor-wrapper .layout_form .layout_form-row[data-type=radio] .layout_form-row_body, #page_body_editor-wrapper .layout_form .layout_form-row[data-type=checkbox] .layout_form-row_body { display: flex; flex-wrap: wrap; } #page_body_editor-wrapper .layout_form .layout_form-row:last-child { margin-bottom: 0; } #page_body_editor-wrapper .layout_form .layout_form-row[data-type=line] .layout_form-row_name { font-size: 15px; } #page_body_editor-wrapper .layout_form .layout_form-row[data-type=line] .layout_form-row_body[data-show_line="1"] { height: 1px; background: rgba(0, 0, 0, 0.2); } #page_body_editor-wrapper .layout_form .layout_form-row[data-require="1"] .layout_form-row_name:after { padding-left: 4px; content: "*"; color: red; } #page_body_editor-wrapper .layout_form .layout_form-row_name { font-size: 16px; } #page_body_editor-wrapper .layout_form .layout_form-row_des { font-size: 12px; color: #999; } #page_body_editor-wrapper .layout_form .layout_form-row_head { margin-bottom: 10px; } #page_body_editor-wrapper .layout_form .layout_form-submit_row { display: flex; flex-wrap: wrap; } #page_body_editor-wrapper .layout_form .layout_form-submit_row[data-pos=center] { justify-content: center; } #page_body_editor-wrapper .layout_form .layout_form-submit_row[data-pos=right] { justify-content: flex-end; } #page_body_editor-wrapper .layout_form .layout_form-submit_row .fa-spinner { font-size: 20px; position: absolute; right: 12px; display: none; vertical-align: middle; vertical-align: middle; } #page_body_editor-wrapper .layout_form .layout_form-submit_row .layout_form-button { position: relative; } #page_body_editor-wrapper .layout_form .layout_form-submit_row .form-err_msg { display: block; width: 100%; } #page_body_editor-wrapper .layout_form .layout_form-submit_row.form-submit_loading .fa-spinner { display: inline-block; animation: fa-spin 2s infinite linear; } #page_body_editor-wrapper .layout_form .layout_form-submit_row.form-submit_loading .fa-spinner:before { content: ""; } #page_body_editor-wrapper .layout_form .layout_form-submit_row.form-submit_suc { animation: none; } #page_body_editor-wrapper .layout_form .layout_form-submit_row.form-submit_suc .fa-spinner { animation: none; } #page_body_editor-wrapper .layout_form .layout_form-submit_row.form-submit_suc .fa-spinner:before { display: inline-block; content: ""; color: #1d9d74; } #page_body_editor-wrapper .layout_form .layout_form-submit_row.form-submit_err .fa-spinner { animation: none; } #page_body_editor-wrapper .layout_form .layout_form-submit_row.form-submit_err .fa-spinner:before { display: inline-block; content: ""; color: #ff5151; } #page_body_editor-wrapper .layout_form .layout_form-row_body ::-webkit-input-placeholder { /* Chrome/Opera/Safari */ color: rgba(0, 0, 0, 0.3); } #page_body_editor-wrapper .layout_form .layout_form-row_body ::-moz-placeholder { /* Firefox 19+ */ color: rgba(0, 0, 0, 0.3); } #page_body_editor-wrapper .layout_form .layout_form-row_body :-ms-input-placeholder { /* IE 10+ */ color: rgba(0, 0, 0, 0.3); } #page_body_editor-wrapper .layout_form .layout_form-row_body :-moz-placeholder { /* Firefox 18- */ color: rgba(0, 0, 0, 0.3); } #page_body_editor-wrapper .layout_form .layout_form-row_body textarea { resize: vertical; } #page_body_editor-wrapper .layout_form .layout_form-row_body select { background: rgba(250, 250, 250, 0.1); } #page_body_editor-wrapper .layout_form .layout_form-row_body textarea, #page_body_editor-wrapper .layout_form .layout_form-row_body input { font-size: 14px; line-height: normal; -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%; padding: 12px; color: #777; border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 2px; background: rgba(250, 250, 250, 0.1); box-shadow: none; } #page_body_editor-wrapper .layout_form .layout_form-row_body textarea { -webkit-appearance: none; } #page_body_editor-wrapper .layout_form .layout_form-row_body input[type=text] { -webkit-appearance: none; } #page_body_editor-wrapper .layout_form .layout_form-row_body input[type=checkbox], #page_body_editor-wrapper .layout_form .layout_form-row_body input[type=radio] { width: auto; border: 1px solid rgba(0, 0, 0, 0.2); } #page_body_editor-wrapper .layout_form .layout_form-row_ver_code .layout_form-row_body { display: flex; align-items: center; } #page_body_editor-wrapper .layout_form .layout_form-row_ver_code .layout_form-row_body input { flex: 0 1 200px; width: 200px; margin-right: 20px; } #page_body_editor-wrapper .layout_form .layout_form-submit_row { margin-top: 40px; } #page_body_editor-wrapper .layout_form .layout_form-button { font-size: 16px; line-height: 42px; min-width: 80px; height: 42px; padding: 0 20px; cursor: pointer; text-align: center; color: #777; border: 1px solid rgba(0, 0, 0, 0.2); background: rgba(250, 250, 250, 0.1); } #page_body_editor-wrapper .layout_form .form-err_msg { padding-top: 10px; color: #ff3737; } #page_body_editor-wrapper .layout_form .form-err_msg:before { padding-right: 5px; content: "*"; }</style>';
              if (!$("#form_style").length) {
                $(style).appendTo("head");
              }
              var test_reg = {
                require: {
                  test: /\S+/,
                  err_msg: "此项不能为空"
                },
                number: {
                  test: /^[0-9]+$/,
                  err_msg: "只能输入数字"
                },
                email: {
                  test: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
                  err_msg: "请输入正确的邮箱"
                },
                phone: {
                  test: /^[1][3,4,5,7,8][0-9]{9}$/,
                  err_msg: "请输入正确的手机号"
                },
                date: {
                  test: /^[0-9]{4}-[0-9]{2}-[0-9]{2}(\s[0-9]{2}:[0-9]{2})?$/,
                  err_msg:
                    "请输入正确的时间，格式为 2018-09-10 或者 2018-09-10 21:09"
                }
              };

              var can_pass = true;
              $(dom)
                .find(".form-code_img")
                .each(function(i, img_dom) {
                  $(img_dom)
                    .on("click.change_code", function() {
                      $(this).attr("src", function() {
                        return $(this).attr("data-src") + "?" + +new Date();
                      });
                    })
                    .trigger("click");
                });

              function get_value(input) {
                var result = "";
                if (input.eq(0).attr("type") === "checkbox") {
                  result = String(
                    input.filter("input[type='checkbox']:checked").val() || ""
                  );
                } else if (input.eq(0).attr("type") === "radio") {
                  result = String(
                    input.filter("input[type='radio']:checked").val() || ""
                  );
                } else {
                  result = input.val();
                }
                return result;
              }
              function clear_status() {
                $(".layout_form-submit_row", dom).removeClass(
                  "form-submit_loading, form-submit_suc, form-submit_err"
                );
              }
              var can_send = true;
              $(".layout_form-button", dom).on("click", function() {
                $(".form-err_msg", dom).remove();
                $(".layout_form-submit_row", dom).removeClass(
                  "form-submit_loading, form-submit_suc, form-submit_err"
                );
                can_pass = true;
                $(".layout_form-row", dom).each(function(i, row_dom) {
                  var input = $(row_dom).find("input,select,textarea");

                  if (input && input.length) {
                    var value = get_value(input);
                    var error_msg = "";
                    var rules = $(row_dom)
                      .data("ruler")
                      .split(",");
                    $(rules).each(function(i, ruler) {
                      if (test_reg[ruler]) {
                        var is_ok = test_reg[ruler].test.test(value.trim());
                        if (!is_ok) {
                          can_pass = false;
                          error_msg = test_reg[ruler].err_msg;
                        }
                      }
                      if (i == rules.length - 1 && error_msg.length) {
                        $(
                          "<div class='form-err_msg'>" + error_msg + "</div>"
                        ).appendTo(row_dom);
                      }
                    });
                    // console.log($(dom).serialize());
                  }
                });
                if (!can_pass) {
                  $(
                    "<div class='form-err_msg'>请检查表单后重新提交</div>"
                  ).appendTo($(".layout_form-submit_row", dom));
                } else {
                  clear_status();
                  $(".layout_form-submit_row", dom).addClass(
                    "form-submit_loading"
                  );

                  if (!can_send) return;
                  can_send = false;

                  function get_email_html(data) {
                    if (typeof data !== "object") return "";
                    var format_data = {};

                    $(data).each(function(i, v) {
                      var name = v.name;
                      if (name in format_data) {
                        format_data[name].value.push(v.value);
                      } else {
                        format_data[name] = {
                          name: name,
                          value: [v.value]
                        };
                      }
                    });

                    var result = {
                      code: "",
                      type: "",
                      content:
                        "<style>table{border-right:#cccccc 1px solid;border-bottom:#cccccc 1px solid;}tr{ margin:0; padding:0}td,th{ border-left:#cccccc 1px solid;border-top:#cccccc 1px solid; margin:0; padding:0 10px; font-size:14px; background:#f8f8f8; color:#666; line-height:30px}</style>"
                    };

                    result.content +=
                      '<table width="600" border="0" cellspacing="0"> <tbody>';
                    console.log('format_data:', format_data)
                    for (const key in format_data) {
                      if (format_data.hasOwnProperty(key)) {
                        const e = format_data[key];
                        if (e.name == "code") {
                          result.code = e.value[0];
                        } else if (e.name == "type") {
                          result.type = e.value[0];
                        } else {
                          result.content +=
                            "<tr><th>" +
                            e.name +
                            "</th><td>" +
                            e.value +
                            "</td></tr>";
                        }
                      }
                    }
                    result.content += "</tbody> </table>";
                    result.content +=
                      '<p style="color:#666; font-size:12px">来自&nbsp;&nbsp;' +
                      window.location.href +
                      "</p>";
                    return result;
                  }

                  $.ajax({
                    type: "POST",
                    url: "/message/formpage",
                    data: get_email_html($(dom).serializeArray()),
                    complete: function() {
                      can_send = true;
                    },
                    success: function(msg) {
                      msg = JSON.parse(msg);
                      if (msg.code == "0") {
                        clear_status();
                        $(".layout_form-submit_row", dom).addClass(
                          "form-submit_suc"
                        );
                      } else {
                        clear_status();
                        $(".layout_form-submit_row", dom).addClass(
                          "form-submit_err"
                        );

                        $(
                          "<div class='form-err_msg'>请检查验证码是否填写正确</div>"
                        ).appendTo($(".layout_form-submit_row", dom));
                      }

                      $(dom)
                        .find(".form-code_img")
                        .trigger("click");
                      can_send = true;
                    },
                    error: function() {
                      clear_status();

                      $(".layout_form-submit_row", dom).addClass(
                        "form-submit_err"
                      );
                      alert("请检查网络");

                      $(dom)
                        .find(".form-code_img")
                        .trigger("click");
                      can_send = true;
                    }
                  });
                }
              });
            }

            $(".layout_form").each(function(i, dom) {
              form_handler(dom);
            });
})






// 新编辑器底部-单页
$(function () {
    if ($('.singlescreen.bodyindex .page_contect_editor .page_body_editor-wrapper')[0] && $('.singlescreen.bodyindex .page_contect_editor .page_body_editor-wrapper').height()>0) {
        var $last = $('#moduleControl a.moduleCItem:last');
        var lastIndex = $last.index();
        var speed = $('#indexPage').data('scroll-speed');
        var ease = $('#indexPage').data('scroll-ease');
        var _top = $('.ff_indexPage .module').eq(lastIndex).position().top;
        var _height = $('.page_contect_editor').outerHeight();

        var open = false;
        var isAnimate = false;

        $(window).on("mousewheel", function (event, delta) {
            var direction = delta > 0 ? "prev" : "next";
            var _hash = +window.location.hash.slice(-2, -1);
            
            if (_hash === lastIndex) {
                if (isAnimate) return;
                if (direction === "next" && !open) {
                    isAnimate = true;
                    $last.removeClass('active');
                    open = true;
                    TweenMax.to('#indexPage', speed, {
                        ease: ease, y: -(_top + _height), force3D: 1, onComplete: function () {
                            isAnimate = false;
                        }
                    });
                } else if (direction === "prev" && open) {
                    open = false;
                    $('#moduleControl a.moduleCItem:last').trigger('click')
                }
            }
        });
    }
});
