import{r as hd,a as He,R as nf}from"./vendor_react-DQast4SZ.js";function bM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}const Ie=n=>typeof n=="string",Zi=()=>{let n,e;const t=new Promise((i,r)=>{n=i,e=r});return t.resolve=n,t.reject=e,t},Il=n=>n==null?"":""+n,dd=(n,e,t)=>{n.forEach(i=>{e[i]&&(t[i]=e[i])})},pd=/###/g,Ul=n=>n&&n.indexOf("###")>-1?n.replace(pd,"."):n,Fl=n=>!n||Ie(n),lr=(n,e,t)=>{const i=Ie(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(Fl(n))return{};const s=Ul(i[r]);!n[s]&&t&&(n[s]=new t),Object.prototype.hasOwnProperty.call(n,s)?n=n[s]:n={},++r}return Fl(n)?{}:{obj:n,k:Ul(i[r])}},Nl=(n,e,t)=>{const{obj:i,k:r}=lr(n,e,Object);if(i!==void 0||e.length===1){i[r]=t;return}let s=e[e.length-1],a=e.slice(0,e.length-1),o=lr(n,a,Object);for(;o.obj===void 0&&a.length;)s=`${a[a.length-1]}.${s}`,a=a.slice(0,a.length-1),o=lr(n,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${s}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${s}`]=t},md=(n,e,t,i)=>{const{obj:r,k:s}=lr(n,e,Object);r[s]=r[s]||[],r[s].push(t)},ms=(n,e)=>{const{obj:t,k:i}=lr(n,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},gd=(n,e,t)=>{const i=ms(n,t);return i!==void 0?i:ms(e,t)},rf=(n,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in n?Ie(n[i])||n[i]instanceof String||Ie(e[i])||e[i]instanceof String?t&&(n[i]=e[i]):rf(n[i],e[i],t):n[i]=e[i]);return n},gi=n=>n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var xd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const _d=n=>Ie(n)?n.replace(/[&<>"'\/]/g,e=>xd[e]):n;class vd{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const yd=[" ",",","?","!",";"],Sd=new vd(20),bd=(n,e,t)=>{e=e||"",t=t||"";const i=yd.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const r=Sd.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let s=!r.test(n);if(!s){const a=n.indexOf(t);a>0&&!r.test(n.substring(0,a))&&(s=!0)}return s},za=(n,e,t=".")=>{if(!n)return;if(n[e])return Object.prototype.hasOwnProperty.call(n,e)?n[e]:void 0;const i=e.split(t);let r=n;for(let s=0;s<i.length;){if(!r||typeof r!="object")return;let a,o="";for(let l=s;l<i.length;++l)if(l!==s&&(o+=t),o+=i[l],a=r[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;s+=l-s+1;break}r=a}return r},pr=n=>n==null?void 0:n.replace("_","-"),Md={type:"logger",log(n){this.output("log",n)},warn(n){this.output("warn",n)},error(n){this.output("error",n)},output(n,e){var t,i;(i=(t=console==null?void 0:console[n])==null?void 0:t.apply)==null||i.call(t,console,e)}};class gs{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||Md,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,r){return r&&!this.debug?null:(Ie(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new gs(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new gs(this.logger,e)}}var sn=new gs;class Rs{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(t)||0;this.observers[i].set(t,r+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([r,s])=>{for(let a=0;a<s;a++)r(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([r,s])=>{for(let a=0;a<s;a++)r.apply(r,[e,...t])})}}class Ol extends Rs{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,r={}){var c,u;const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,a=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):Ie(i)&&s?o.push(...i.split(s)):o.push(i)));const l=ms(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!Ie(i)?l:za((u=(c=this.data)==null?void 0:c[e])==null?void 0:u[t],i,s)}addResource(e,t,i,r,s={silent:!1}){const a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),r=t,t=o[1]),this.addNamespaces(t),Nl(this.data,o,r),s.silent||this.emit("added",e,t,i,r)}addResources(e,t,i,r={silent:!1}){for(const s in i)(Ie(i[s])||Array.isArray(i[s]))&&this.addResource(e,t,s,i[s],{silent:!0});r.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,r,s,a={silent:!1,skipCopy:!1}){let o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),r=i,i=t,t=o[1]),this.addNamespaces(t);let l=ms(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?rf(l,i,s):l={...l,...i},Nl(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(r=>t[r]&&Object.keys(t[r]).length>0)}toJSON(){return this.data}}var sf={processors:{},addPostProcessor(n){this.processors[n.name]=n},handle(n,e,t,i,r){return n.forEach(s=>{var a;e=((a=this.processors[s])==null?void 0:a.process(e,t,i,r))??e}),e}};const af=Symbol("i18next/PATH_KEY");function Ed(){const n=[],e=Object.create(null);let t;return e.get=(i,r)=>{var s;return(s=t==null?void 0:t.revoke)==null||s.call(t),r===af?n:(n.push(r),t=Proxy.revocable(i,e),t.proxy)},Proxy.revocable(Object.create(null),e).proxy}function Ga(n,e){const{[af]:t}=n(Ed());return t.join((e==null?void 0:e.keySeparator)??".")}const Bl={},Xs=n=>!Ie(n)&&typeof n!="boolean"&&typeof n!="number";class xs extends Rs{constructor(e,t={}){super(),dd(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=sn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i={...t};if(e==null)return!1;const r=this.resolve(e,i);if((r==null?void 0:r.res)===void 0)return!1;const s=Xs(r.res);return!(i.returnObjects===!1&&s)}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let s=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!bd(e,i,r);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Ie(s)?[s]:s};const c=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(c[0])>-1)&&(s=c.shift()),e=c.join(r)}return{key:e,namespaces:Ie(s)?[s]:s}}translate(e,t,i){let r=typeof t=="object"?{...t}:t;if(typeof r!="object"&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),typeof r=="object"&&(r={...r}),r||(r={}),e==null)return"";typeof e=="function"&&(e=Ga(e,{...this.options,...r})),Array.isArray(e)||(e=[String(e)]);const s=r.returnDetails!==void 0?r.returnDetails:this.options.returnDetails,a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,{key:o,namespaces:l}=this.extractFromKey(e[e.length-1],r),c=l[l.length-1];let u=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;u===void 0&&(u=":");const f=r.lng||this.language,h=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((f==null?void 0:f.toLowerCase())==="cimode")return h?s?{res:`${c}${u}${o}`,usedKey:o,exactUsedKey:o,usedLng:f,usedNS:c,usedParams:this.getUsedParamsDetails(r)}:`${c}${u}${o}`:s?{res:o,usedKey:o,exactUsedKey:o,usedLng:f,usedNS:c,usedParams:this.getUsedParamsDetails(r)}:o;const d=this.resolve(e,r);let m=d==null?void 0:d.res;const x=(d==null?void 0:d.usedKey)||o,g=(d==null?void 0:d.exactUsedKey)||o,p=["[object Number]","[object Function]","[object RegExp]"],E=r.joinArrays!==void 0?r.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,T=r.count!==void 0&&!Ie(r.count),C=xs.hasDefaultValue(r),A=T?this.pluralResolver.getSuffix(f,r.count,r):"",R=r.ordinal&&T?this.pluralResolver.getSuffix(f,r.count,{ordinal:!1}):"",U=T&&!r.ordinal&&r.count===0,M=U&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${A}`]||r[`defaultValue${R}`]||r.defaultValue;let y=m;b&&!m&&C&&(y=M);const D=Xs(y),B=Object.prototype.toString.apply(y);if(b&&y&&D&&p.indexOf(B)<0&&!(Ie(E)&&Array.isArray(y))){if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const V=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,y,{...r,ns:l}):`key '${o} (${this.language})' returned an object instead of string.`;return s?(d.res=V,d.usedParams=this.getUsedParamsDetails(r),d):V}if(a){const V=Array.isArray(y),k=V?[]:{},X=V?g:x;for(const H in y)if(Object.prototype.hasOwnProperty.call(y,H)){const te=`${X}${a}${H}`;C&&!m?k[H]=this.translate(te,{...r,defaultValue:Xs(M)?M[H]:void 0,joinArrays:!1,ns:l}):k[H]=this.translate(te,{...r,joinArrays:!1,ns:l}),k[H]===te&&(k[H]=y[H])}m=k}}else if(b&&Ie(E)&&Array.isArray(m))m=m.join(E),m&&(m=this.extendTranslation(m,e,r,i));else{let V=!1,k=!1;!this.isValidLookup(m)&&C&&(V=!0,m=M),this.isValidLookup(m)||(k=!0,m=o);const H=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&k?void 0:m,te=C&&M!==m&&this.options.updateMissing;if(k||V||te){if(this.logger.log(te?"updateKey":"missingKey",f,c,o,te?M:m),a){const Z=this.resolve(o,{...r,keySeparator:!1});Z&&Z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if(this.options.saveMissingTo==="fallback"&&j&&j[0])for(let Z=0;Z<j.length;Z++)I.push(j[Z]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(r.lng||this.language):I.push(r.lng||this.language);const $=(Z,de,Oe)=>{var We;const ke=C&&Oe!==m?Oe:H;this.options.missingKeyHandler?this.options.missingKeyHandler(Z,c,de,ke,te,r):(We=this.backendConnector)!=null&&We.saveMissing&&this.backendConnector.saveMissing(Z,c,de,ke,te,r),this.emit("missingKey",Z,c,de,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?I.forEach(Z=>{const de=this.pluralResolver.getSuffixes(Z,r);U&&r[`defaultValue${this.options.pluralSeparator}zero`]&&de.indexOf(`${this.options.pluralSeparator}zero`)<0&&de.push(`${this.options.pluralSeparator}zero`),de.forEach(Oe=>{$([Z],o+Oe,r[`defaultValue${Oe}`]||M)})}):$(I,o,M))}m=this.extendTranslation(m,e,r,d,i),k&&m===o&&this.options.appendNamespaceToMissingKey&&(m=`${c}${u}${o}`),(k||V)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${u}${o}`:o,V?m:void 0,r))}return s?(d.res=m,d.usedParams=this.getUsedParamsDetails(r),d):m}extendTranslation(e,t,i,r,s){var l,c;if((l=this.i18nFormat)!=null&&l.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const u=Ie(e)&&(((c=i==null?void 0:i.interpolation)==null?void 0:c.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(u){const d=e.match(this.interpolator.nestingRegexp);f=d&&d.length}let h=i.replace&&!Ie(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,i.lng||this.language||r.usedLng,i),u){const d=e.match(this.interpolator.nestingRegexp),m=d&&d.length;f<m&&(i.nest=!1)}!i.lng&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,(...d)=>(s==null?void 0:s[0])===d[0]&&!i.context?(this.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${t[0]}`),null):this.translate(...d,t),i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,o=Ie(a)?[a]:a;return e!=null&&(o!=null&&o.length)&&i.applyPostProcessor!==!1&&(e=sf.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e,t={}){let i,r,s,a,o;return Ie(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,t),u=c.key;r=u;let f=c.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const h=t.count!==void 0&&!Ie(t.count),d=h&&!t.ordinal&&t.count===0,m=t.context!==void 0&&(Ie(t.context)||typeof t.context=="number")&&t.context!=="",x=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);f.forEach(g=>{var p,E;this.isValidLookup(i)||(o=g,!Bl[`${x[0]}-${g}`]&&((p=this.utils)!=null&&p.hasLoadedNamespace)&&!((E=this.utils)!=null&&E.hasLoadedNamespace(o))&&(Bl[`${x[0]}-${g}`]=!0,this.logger.warn(`key "${r}" for languages "${x.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(b=>{var A;if(this.isValidLookup(i))return;a=b;const T=[u];if((A=this.i18nFormat)!=null&&A.addLookupKeys)this.i18nFormat.addLookupKeys(T,u,b,g,t);else{let R;h&&(R=this.pluralResolver.getSuffix(b,t.count,t));const U=`${this.options.pluralSeparator}zero`,M=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(t.ordinal&&R.indexOf(M)===0&&T.push(u+R.replace(M,this.options.pluralSeparator)),T.push(u+R),d&&T.push(u+U)),m){const y=`${u}${this.options.contextSeparator||"_"}${t.context}`;T.push(y),h&&(t.ordinal&&R.indexOf(M)===0&&T.push(y+R.replace(M,this.options.pluralSeparator)),T.push(y+R),d&&T.push(y+U))}}let C;for(;C=T.pop();)this.isValidLookup(i)||(s=C,i=this.getResource(b,g,C,t))}))})}),{res:i,usedKey:r,exactUsedKey:s,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i,r={}){var s;return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(e,t,i,r):this.resourceStore.getResource(e,t,i,r)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Ie(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const s of t)delete r[s]}return r}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class Vl{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=sn.create("languageUtils")}getScriptPartFromCode(e){if(e=pr(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=pr(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Ie(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(t=r)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const r=this.getScriptPartFromCode(i);if(this.isSupportedCode(r))return t=r;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(a=>{if(a===s)return a;if(!(a.indexOf("-")<0&&s.indexOf("-")<0)&&(a.indexOf("-")>0&&s.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===s||a.indexOf(s)===0&&s.length>1))return a})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Ie(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),r=[],s=a=>{a&&(this.isSupportedCode(a)?r.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Ie(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):Ie(e)&&s(this.formatLanguageCode(e)),i.forEach(a=>{r.indexOf(a)<0&&s(this.formatLanguageCode(a))}),r}}const kl={zero:0,one:1,two:2,few:3,many:4,other:5},zl={select:n=>n===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Td{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=sn.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=pr(e==="dev"?"en":e),r=t.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:r});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let a;try{a=new Intl.PluralRules(i,{type:r})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),zl;if(!e.match(/-|_/))return zl;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[s]=a,a}needsPlural(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(r=>`${t}${r}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((r,s)=>kl[r]-kl[s]).map(r=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${r}`):[]}getSuffix(e,t,i={}){const r=this.getRule(e,i);return r?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Gl=(n,e,t,i=".",r=!0)=>{let s=gd(n,e,t);return!s&&r&&Ie(t)&&(s=za(n,t,i),s===void 0&&(s=za(e,t,i))),s},js=n=>n.replace(/\$/g,"$$$$");class Ad{constructor(e={}){var t;this.logger=sn.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:r,prefix:s,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:f,nestingPrefix:h,nestingPrefixEscaped:d,nestingSuffix:m,nestingSuffixEscaped:x,nestingOptionsSeparator:g,maxReplaces:p,alwaysFormat:E}=e.interpolation;this.escape=t!==void 0?t:_d,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=s?gi(s):a||"{{",this.suffix=o?gi(o):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?gi(h):d||gi("$t("),this.nestingSuffix=m?gi(m):x||gi(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=p||1e3,this.alwaysFormat=E!==void 0?E:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,r){var d;let s,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=m=>{if(m.indexOf(this.formatSeparator)<0){const E=Gl(t,l,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,i,{...r,...t,interpolationkey:m}):E}const x=m.split(this.formatSeparator),g=x.shift().trim(),p=x.join(this.formatSeparator).trim();return this.format(Gl(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),p,i,{...r,...t,interpolationkey:g})};this.resetRegExp();const u=(r==null?void 0:r.missingInterpolationHandler)||this.options.missingInterpolationHandler,f=((d=r==null?void 0:r.interpolation)==null?void 0:d.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>js(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?js(this.escape(m)):js(m)}].forEach(m=>{for(o=0;s=m.regex.exec(e);){const x=s[1].trim();if(a=c(x),a===void 0)if(typeof u=="function"){const p=u(e,s,r);a=Ie(p)?p:""}else if(r&&Object.prototype.hasOwnProperty.call(r,x))a="";else if(f){a=s[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),a="";else!Ie(a)&&!this.useRawValueToEscape&&(a=Il(a));const g=m.safeValue(a);if(e=e.replace(s[0],g),f?(m.regex.lastIndex+=a.length,m.regex.lastIndex-=s[0].length):m.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,i={}){let r,s,a;const o=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const f=l.split(new RegExp(`${u}[ ]*{`));let h=`{${f[1]}`;l=f[0],h=this.interpolate(h,a);const d=h.match(/'/g),m=h.match(/"/g);(((d==null?void 0:d.length)??0)%2===0&&!m||m.length%2!==0)&&(h=h.replace(/'/g,'"'));try{a=JSON.parse(h),c&&(a={...c,...a})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,x),`${l}${u}${h}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!Ie(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;const c=/{.*}/.test(r[1])?r[1].lastIndexOf("}")+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(l=r[1].slice(c).split(this.formatSeparator).map(u=>u.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),s=t(o.call(this,r[1].trim(),a),a),s&&r[0]===e&&!Ie(s))return s;Ie(s)||(s=Il(s)),s||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),s=""),l.length&&(s=l.reduce((u,f)=>this.format(u,f,i.lng,{...i,interpolationkey:r[1].trim()}),s.trim())),e=e.replace(r[0],s),this.regexp.lastIndex=0}return e}}const wd=n=>{let e=n.toLowerCase().trim();const t={};if(n.indexOf("(")>-1){const i=n.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?t.currency||(t.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?t.range||(t.range=r.trim()):r.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=c),c==="false"&&(t[u]=!1),c==="true"&&(t[u]=!0),isNaN(c)||(t[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},Hl=n=>{const e={};return(t,i,r)=>{let s=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(s={...s,[r.interpolationkey]:void 0});const a=i+JSON.stringify(s);let o=e[a];return o||(o=n(pr(i),r),e[a]=o),o(t)}},Cd=n=>(e,t,i)=>n(pr(t),i)(e);class Rd{constructor(e={}){this.logger=sn.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?Hl:Cd;this.formats={number:i((r,s)=>{const a=new Intl.NumberFormat(r,{...s});return o=>a.format(o)}),currency:i((r,s)=>{const a=new Intl.NumberFormat(r,{...s,style:"currency"});return o=>a.format(o)}),datetime:i((r,s)=>{const a=new Intl.DateTimeFormat(r,{...s});return o=>a.format(o)}),relativetime:i((r,s)=>{const a=new Intl.RelativeTimeFormat(r,{...s});return o=>a.format(o,s.range||"day")}),list:i((r,s)=>{const a=new Intl.ListFormat(r,{...s});return o=>a.format(o)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Hl(t)}format(e,t,i,r={}){const s=t.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(o=>o.indexOf(")")>-1)){const o=s.findIndex(l=>l.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,o)].join(this.formatSeparator)}return s.reduce((o,l)=>{var f;const{formatName:c,formatOptions:u}=wd(l);if(this.formats[c]){let h=o;try{const d=((f=r==null?void 0:r.formatParams)==null?void 0:f[r.interpolationkey])||{},m=d.locale||d.lng||r.locale||r.lng||i;h=this.formats[c](o,m,{...u,...r,...d})}catch(d){this.logger.warn(d)}return h}else this.logger.warn(`there was no format function for ${c}`);return o},e)}}const Pd=(n,e)=>{n.pending[e]!==void 0&&(delete n.pending[e],n.pendingCount--)};class Ld extends Rs{constructor(e,t,i,r={}){var s,a;super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=sn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],(a=(s=this.backend)==null?void 0:s.init)==null||a.call(s,i,r.backend,r)}queueLoad(e,t,i,r){const s={},a={},o={},l={};return e.forEach(c=>{let u=!0;t.forEach(f=>{const h=`${c}|${f}`;!i.reload&&this.store.hasResourceBundle(c,f)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?a[h]===void 0&&(a[h]=!0):(this.state[h]=1,u=!1,a[h]===void 0&&(a[h]=!0),s[h]===void 0&&(s[h]=!0),l[f]===void 0&&(l[f]=!0)))}),u||(o[c]=!0)}),(Object.keys(s).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(s),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const r=e.split("|"),s=r[0],a=r[1];t&&this.emit("failedLoading",s,a,t),!t&&i&&this.store.addResourceBundle(s,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{md(l.loaded,[s],a),Pd(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{o[c]||(o[c]={});const u=l.loaded[c];u.length&&u.forEach(f=>{o[c][f]===void 0&&(o[c][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i,r=0,s=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:r,wait:s,callback:a});return}this.readingCalls++;const o=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(c&&u&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,r+1,s*2,a)},s);return}a(c,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(u=>o(null,u)).catch(o):o(null,c)}catch(c){o(c)}return}return l(e,t,o)}prepareLoading(e,t,i={},r){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();Ie(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Ie(t)&&(t=[t]);const s=this.queueLoad(e,t,i,r);if(!s.toLoad.length)return s.pending.length||r(),null;s.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),r=i[0],s=i[1];this.read(r,s,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${s} for language ${r} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${s} for language ${r}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,r,s,a={},o=()=>{}){var l,c,u,f,h;if((c=(l=this.services)==null?void 0:l.utils)!=null&&c.hasLoadedNamespace&&!((f=(u=this.services)==null?void 0:u.utils)!=null&&f.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((h=this.backend)!=null&&h.create){const d={...a,isUpdate:s},m=this.backend.create.bind(this.backend);if(m.length<6)try{let x;m.length===5?x=m(e,t,i,r,d):x=m(e,t,i,r),x&&typeof x.then=="function"?x.then(g=>o(null,g)).catch(o):o(null,x)}catch(x){o(x)}else m(e,t,i,r,o,d)}!e||!e[0]||this.store.addResource(e[0],t,i,r)}}}const Wl=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:n=>{let e={};if(typeof n[1]=="object"&&(e=n[1]),Ie(n[1])&&(e.defaultValue=n[1]),Ie(n[2])&&(e.tDescription=n[2]),typeof n[2]=="object"||typeof n[3]=="object"){const t=n[3]||n[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:n=>n,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Xl=n=>{var e,t;return Ie(n.ns)&&(n.ns=[n.ns]),Ie(n.fallbackLng)&&(n.fallbackLng=[n.fallbackLng]),Ie(n.fallbackNS)&&(n.fallbackNS=[n.fallbackNS]),((t=(e=n.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(n.supportedLngs=n.supportedLngs.concat(["cimode"])),typeof n.initImmediate=="boolean"&&(n.initAsync=n.initImmediate),n},Fr=()=>{},Dd=n=>{Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(t=>{typeof n[t]=="function"&&(n[t]=n[t].bind(n))})};class cr extends Rs{constructor(e={},t){if(super(),this.options=Xl(e),this.services={},this.logger=sn,this.modules={external:[]},Dd(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(Ie(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const i=Wl();this.options={...i,...this.options,...Xl(e)},this.options.interpolation={...i.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator);const r=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?sn.init(r(this.modules.logger),this.options):sn.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=Rd;const u=new Vl(this.options);this.store=new Ol(this.options.resources,this.options);const f=this.services;f.logger=sn,f.resourceStore=this.store,f.languageUtils=u,f.pluralResolver=new Td(u,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=r(c),f.formatter.init&&f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new Ad(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new Ld(r(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",(d,...m)=>{this.emit(d,...m)}),this.modules.languageDetector&&(f.languageDetector=r(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=r(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new xs(this.services,this.options),this.translator.on("*",(d,...m)=>{this.emit(d,...m)}),this.modules.external.forEach(d=>{d.init&&d.init(this)})}if(this.format=this.options.interpolation.format,t||(t=Fr),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...u)=>this.store[c](...u)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...u)=>(this.store[c](...u),this)});const o=Zi(),l=()=>{const c=(u,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),o.resolve(f),t(u,f)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),o}loadResources(e,t=Fr){var s,a;let i=t;const r=Ie(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((r==null?void 0:r.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(f=>{f!=="cimode"&&o.indexOf(f)<0&&o.push(f)})};r?l(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(a=(s=this.options.preload)==null?void 0:s.forEach)==null||a.call(s,c=>l(c)),this.services.backendConnector.load(o,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(c)})}else i(null)}reloadResources(e,t,i){const r=Zi();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Fr),this.services.backendConnector.reload(e,t,s=>{r.resolve(),i(s)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&sf.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=Zi();this.emit("languageChanging",e);const r=o=>{this.language=o,this.languages=this.services.languageUtils.toResolveHierarchy(o),this.resolvedLanguage=void 0,this.setResolvedLanguage(o)},s=(o,l)=>{l?this.isLanguageChangingTo===e&&(r(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve((...c)=>this.t(...c)),t&&t(o,(...c)=>this.t(...c))},a=o=>{var u,f;!e&&!o&&this.services.languageDetector&&(o=[]);const l=Ie(o)?o:o&&o[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(Ie(o)?[o]:o);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),(f=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||f.call(u,c)),this.loadResources(c,h=>{s(h,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),i}getFixedT(e,t,i){const r=(s,a,...o)=>{let l;typeof a!="object"?l=this.options.overloadTranslationOptionHandler([s,a].concat(o)):l={...a},l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const c=this.options.keySeparator||".";let u;return l.keyPrefix&&Array.isArray(s)?u=s.map(f=>(typeof f=="function"&&(f=Ga(f,{...this.options,...a})),`${l.keyPrefix}${c}${f}`)):(typeof s=="function"&&(s=Ga(s,{...this.options,...a})),u=l.keyPrefix?`${l.keyPrefix}${c}${s}`:s),this.t(u,l)};return Ie(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=i,r}t(...e){var t;return(t=this.translator)==null?void 0:t.translate(...e)}exists(...e){var t;return(t=this.translator)==null?void 0:t.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const c=this.services.backendConnector.state[`${o}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!r||a(s,e)))}loadNamespaces(e,t){const i=Zi();return this.options.ns?(Ie(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),t&&t(r)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=Zi();Ie(e)&&(e=[e]);const r=this.options.preload||[],s=e.filter(a=>r.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return s.length?(this.options.preload=r.concat(s),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var r,s;if(e||(e=this.resolvedLanguage||(((r=this.languages)==null?void 0:r.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const a=new Intl.Locale(e);if(a&&a.getTextInfo){const o=a.getTextInfo();if(o&&o.direction)return o.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((s=this.services)==null?void 0:s.languageUtils)||new Vl(Wl());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const i=new cr(e,t);return i.createInstance=cr.createInstance,i}cloneInstance(e={},t=Fr){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},s=new cr(r);if((e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(o=>{s[o]=this[o]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i){const o=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((u,f)=>(u[f]={...l[c][f]},u),l[c]),l),{});s.store=new Ol(o,r),s.services.resourceStore=s.store}return s.translator=new xs(s.services,r),s.translator.on("*",(o,...l)=>{s.emit(o,...l)}),s.init(r,t),s.translator.options=r,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Nt=cr.createInstance();Nt.createInstance;Nt.dir;Nt.init;Nt.loadResources;Nt.reloadResources;Nt.use;Nt.changeLanguage;Nt.getFixedT;Nt.t;Nt.exists;Nt.setDefaultNamespace;Nt.hasLoadedNamespace;Nt.loadNamespaces;Nt.loadLanguages;var qs={exports:{}},Ys={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jl;function Id(){if(jl)return Ys;jl=1;var n=hd();function e(f,h){return f===h&&(f!==0||1/f===1/h)||f!==f&&h!==h}var t=typeof Object.is=="function"?Object.is:e,i=n.useState,r=n.useEffect,s=n.useLayoutEffect,a=n.useDebugValue;function o(f,h){var d=h(),m=i({inst:{value:d,getSnapshot:h}}),x=m[0].inst,g=m[1];return s(function(){x.value=d,x.getSnapshot=h,l(x)&&g({inst:x})},[f,d,h]),r(function(){return l(x)&&g({inst:x}),f(function(){l(x)&&g({inst:x})})},[f]),a(d),d}function l(f){var h=f.getSnapshot;f=f.value;try{var d=h();return!t(f,d)}catch{return!0}}function c(f,h){return h()}var u=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:o;return Ys.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:u,Ys}var ql;function Ud(){return ql||(ql=1,qs.exports=Id()),qs.exports}var MM=Ud();const{slice:Fd,forEach:Nd}=[];function Od(n){return Nd.call(Fd.call(arguments,1),e=>{if(e)for(const t in e)n[t]===void 0&&(n[t]=e[t])}),n}function Bd(n){return typeof n!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(n))}const Yl=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Vd=function(n,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},r=encodeURIComponent(e);let s=`${n}=${r}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");s+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!Yl.test(i.domain))throw new TypeError("option domain is invalid");s+=`; Domain=${i.domain}`}if(i.path){if(!Yl.test(i.path))throw new TypeError("option path is invalid");s+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(s+="; Partitioned"),s},$l={create(n,e,t,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+t*60*1e3)),i&&(r.domain=i),document.cookie=Vd(n,e,r)},read(n){const e=`${n}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let r=t[i];for(;r.charAt(0)===" ";)r=r.substring(1,r.length);if(r.indexOf(e)===0)return r.substring(e.length,r.length)}return null},remove(n,e){this.create(n,"",-1,e)}};var kd={name:"cookie",lookup(n){let{lookupCookie:e}=n;if(e&&typeof document<"u")return $l.read(e)||void 0},cacheUserLanguage(n,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:r,cookieOptions:s}=e;t&&typeof document<"u"&&$l.create(t,n,i,r,s)}},zd={name:"querystring",lookup(n){var i;let{lookupQuerystring:e}=n,t;if(typeof window<"u"){let{search:r}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));const a=r.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}},Gd={name:"hash",lookup(n){var r;let{lookupHash:e,lookupFromHashIndex:t}=n,i;if(typeof window<"u"){const{hash:s}=window.location;if(s&&s.length>2){const a=s.substring(1);if(e){const o=a.split("&");for(let l=0;l<o.length;l++){const c=o[l].indexOf("=");c>0&&o[l].substring(0,c)===e&&(i=o[l].substring(c+1))}}if(i)return i;if(!i&&t>-1){const o=s.match(/\/([a-zA-Z-]*)/g);return Array.isArray(o)?(r=o[typeof t=="number"?t:0])==null?void 0:r.replace("/",""):void 0}}}return i}};let xi=null;const Kl=()=>{if(xi!==null)return xi;try{if(xi=typeof window<"u"&&window.localStorage!==null,!xi)return!1;const n="i18next.translate.boo";window.localStorage.setItem(n,"foo"),window.localStorage.removeItem(n)}catch{xi=!1}return xi};var Hd={name:"localStorage",lookup(n){let{lookupLocalStorage:e}=n;if(e&&Kl())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(n,e){let{lookupLocalStorage:t}=e;t&&Kl()&&window.localStorage.setItem(t,n)}};let _i=null;const Zl=()=>{if(_i!==null)return _i;try{if(_i=typeof window<"u"&&window.sessionStorage!==null,!_i)return!1;const n="i18next.translate.boo";window.sessionStorage.setItem(n,"foo"),window.sessionStorage.removeItem(n)}catch{_i=!1}return _i};var Wd={name:"sessionStorage",lookup(n){let{lookupSessionStorage:e}=n;if(e&&Zl())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(n,e){let{lookupSessionStorage:t}=e;t&&Zl()&&window.sessionStorage.setItem(t,n)}},Xd={name:"navigator",lookup(n){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:r}=navigator;if(t)for(let s=0;s<t.length;s++)e.push(t[s]);i&&e.push(i),r&&e.push(r)}return e.length>0?e:void 0}},jd={name:"htmlTag",lookup(n){let{htmlTag:e}=n,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},qd={name:"path",lookup(n){var r;let{lookupFromPathIndex:e}=n;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(r=t[typeof e=="number"?e:0])==null?void 0:r.replace("/",""):void 0}},Yd={name:"subdomain",lookup(n){var r,s;let{lookupFromSubdomainIndex:e}=n;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((s=(r=window.location)==null?void 0:r.hostname)==null?void 0:s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let of=!1;try{document.cookie,of=!0}catch{}const lf=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];of||lf.splice(1,1);const $d=()=>({order:lf,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:n=>n});class Kd{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Od(t,this.options||{},$d()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=r=>r.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(kd),this.addDetector(zd),this.addDetector(Hd),this.addDetector(Wd),this.addDetector(Xd),this.addDetector(jd),this.addDetector(qd),this.addDetector(Yd),this.addDetector(Gd)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let r=this.detectors[i].lookup(this.options);r&&typeof r=="string"&&(r=[r]),r&&(t=t.concat(r))}}),t=t.filter(i=>i!=null&&!Bd(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}Kd.type="languageDetector";var $s={exports:{}},Ks={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jl;function Zd(){return Jl||(Jl=1,(function(n){function e(I,j){var $=I.length;I.push(j);e:for(;0<$;){var Z=$-1>>>1,de=I[Z];if(0<r(de,j))I[Z]=j,I[$]=de,$=Z;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],$=I.pop();if($!==j){I[0]=$;e:for(var Z=0,de=I.length,Oe=de>>>1;Z<Oe;){var ke=2*(Z+1)-1,We=I[ke],Y=ke+1,J=I[Y];if(0>r(We,$))Y<de&&0>r(J,We)?(I[Z]=J,I[Y]=$,Z=Y):(I[Z]=We,I[ke]=$,Z=ke);else if(Y<de&&0>r(J,$))I[Z]=J,I[Y]=$,Z=Y;else break e}}return j}function r(I,j){var $=I.sortIndex-j.sortIndex;return $!==0?$:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,h=3,d=!1,m=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(I){for(var j=t(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=I)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(c)}}function T(I){if(x=!1,b(I),!m)if(t(l)!==null)m=!0,H(C);else{var j=t(c);j!==null&&te(T,j.startTime-I)}}function C(I,j){m=!1,x&&(x=!1,p(U),U=-1),d=!0;var $=h;try{for(b(j),f=t(l);f!==null&&(!(f.expirationTime>j)||I&&!D());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var de=Z(f.expirationTime<=j);j=n.unstable_now(),typeof de=="function"?f.callback=de:f===t(l)&&i(l),b(j)}else i(l);f=t(l)}if(f!==null)var Oe=!0;else{var ke=t(c);ke!==null&&te(T,ke.startTime-j),Oe=!1}return Oe}finally{f=null,h=$,d=!1}}var A=!1,R=null,U=-1,M=5,y=-1;function D(){return!(n.unstable_now()-y<M)}function B(){if(R!==null){var I=n.unstable_now();y=I;var j=!0;try{j=R(!0,I)}finally{j?V():(A=!1,R=null)}}else A=!1}var V;if(typeof E=="function")V=function(){E(B)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,X=k.port2;k.port1.onmessage=B,V=function(){X.postMessage(null)}}else V=function(){g(B,0)};function H(I){R=I,A||(A=!0,V())}function te(I,j){U=g(function(){I(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){m||d||(m=!0,H(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var $=h;h=j;try{return I()}finally{h=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=h;h=I;try{return j()}finally{h=$}},n.unstable_scheduleCallback=function(I,j,$){var Z=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Z+$:Z):$=Z,I){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=$+de,I={id:u++,callback:j,priorityLevel:I,startTime:$,expirationTime:de,sortIndex:-1},$>Z?(I.sortIndex=$,e(c,I),t(l)===null&&I===t(c)&&(x?(p(U),U=-1):x=!0,te(T,$-Z))):(I.sortIndex=de,e(l,I),m||d||(m=!0,H(C))),I},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(I){var j=h;return function(){var $=h;h=j;try{return I.apply(this,arguments)}finally{h=$}}}})(Ks)),Ks}var Ql;function EM(){return Ql||(Ql=1,$s.exports=Zd()),$s.exports}const cf=He.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Ps=He.createContext({}),Zo=He.createContext(null),Ls=typeof document<"u",ec=Ls?He.useLayoutEffect:He.useEffect,uf=He.createContext({strict:!1});function Jd(n,e,t,i){const{visualElement:r}=He.useContext(Ps),s=He.useContext(uf),a=He.useContext(Zo),o=He.useContext(cf).reducedMotion,l=He.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(n,{visualState:e,parent:r,props:t,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:o}));const c=l.current;return He.useInsertionEffect(()=>{c&&c.update(t,a)}),ec(()=>{c&&c.render()}),He.useEffect(()=>{c&&c.updateFeatures()}),(window.HandoffAppearAnimations?ec:He.useEffect)(()=>{c&&c.animationState&&c.animationState.animateChanges()}),c}function Ui(n){return typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Qd(n,e,t){return He.useCallback(i=>{i&&n.mount&&n.mount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):Ui(t)&&(t.current=i))},[e])}function mr(n){return typeof n=="string"||Array.isArray(n)}function Ds(n){return typeof n=="object"&&typeof n.start=="function"}const Jo=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Qo=["initial",...Jo];function Is(n){return Ds(n.animate)||Qo.some(e=>mr(n[e]))}function ff(n){return!!(Is(n)||n.variants)}function ep(n,e){if(Is(n)){const{initial:t,animate:i}=n;return{initial:t===!1||mr(t)?t:void 0,animate:mr(i)?i:void 0}}return n.inherit!==!1?e:{}}function tp(n){const{initial:e,animate:t}=ep(n,He.useContext(Ps));return He.useMemo(()=>({initial:e,animate:t}),[tc(e),tc(t)])}function tc(n){return Array.isArray(n)?n.join(" "):n}const nc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},gr={};for(const n in nc)gr[n]={isEnabled:e=>nc[n].some(t=>!!e[t])};function np(n){for(const e in n)gr[e]={...gr[e],...n[e]}}const hf=He.createContext({}),df=He.createContext({}),ip=Symbol.for("motionComponentSymbol");function rp({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:r}){n&&np(n);function s(o,l){let c;const u={...He.useContext(cf),...o,layoutId:sp(o)},{isStatic:f}=u,h=tp(o),d=i(o,f);if(!f&&Ls){h.visualElement=Jd(r,d,u,e);const m=He.useContext(df),x=He.useContext(uf).strict;h.visualElement&&(c=h.visualElement.loadFeatures(u,x,n,m))}return He.createElement(Ps.Provider,{value:h},c&&h.visualElement?He.createElement(c,{visualElement:h.visualElement,...u}):null,t(r,o,Qd(d,h.visualElement,l),d,f,h.visualElement))}const a=He.forwardRef(s);return a[ip]=r,a}function sp({layoutId:n}){const e=He.useContext(hf).id;return e&&n!==void 0?e+"-"+n:n}function ap(n){function e(i,r={}){return rp(n(i,r))}if(typeof Proxy>"u")return e;const t=new Map;return new Proxy(e,{get:(i,r)=>(t.has(r)||t.set(r,e(r)),t.get(r))})}const op=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function el(n){return typeof n!="string"||n.includes("-")?!1:!!(op.indexOf(n)>-1||/[A-Z]/.test(n))}const _s={};function lp(n){Object.assign(_s,n)}const Er=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],di=new Set(Er);function pf(n,{layout:e,layoutId:t}){return di.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!_s[n]||n==="opacity")}const Ft=n=>!!(n&&n.getVelocity),cp={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},up=Er.length;function fp(n,{enableHardwareAcceleration:e=!0,allowTransformNone:t=!0},i,r){let s="";for(let a=0;a<up;a++){const o=Er[a];if(n[o]!==void 0){const l=cp[o]||o;s+=`${l}(${n[o]}) `}}return e&&!n.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(n,i?"":s):t&&i&&(s="none"),s}const mf=n=>e=>typeof e=="string"&&e.startsWith(n),gf=mf("--"),Ha=mf("var(--"),hp=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,dp=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Gn=(n,e,t)=>Math.min(Math.max(t,n),e),pi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ur={...pi,transform:n=>Gn(0,1,n)},Nr={...pi,default:1},fr=n=>Math.round(n*1e5)/1e5,Us=/(-)?([\d]*\.?[\d])+/g,xf=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,pp=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Tr(n){return typeof n=="string"}const Ar=n=>({test:e=>Tr(e)&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Nn=Ar("deg"),on=Ar("%"),Ce=Ar("px"),mp=Ar("vh"),gp=Ar("vw"),ic={...on,parse:n=>on.parse(n)/100,transform:n=>on.transform(n*100)},rc={...pi,transform:Math.round},_f={borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,radius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,size:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,rotate:Nn,rotateX:Nn,rotateY:Nn,rotateZ:Nn,scale:Nr,scaleX:Nr,scaleY:Nr,scaleZ:Nr,skew:Nn,skewX:Nn,skewY:Nn,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:ur,originX:ic,originY:ic,originZ:Ce,zIndex:rc,fillOpacity:ur,strokeOpacity:ur,numOctaves:rc};function tl(n,e,t,i){const{style:r,vars:s,transform:a,transformOrigin:o}=n;let l=!1,c=!1,u=!0;for(const f in e){const h=e[f];if(gf(f)){s[f]=h;continue}const d=_f[f],m=dp(h,d);if(di.has(f)){if(l=!0,a[f]=m,!u)continue;h!==(d.default||0)&&(u=!1)}else f.startsWith("origin")?(c=!0,o[f]=m):r[f]=m}if(e.transform||(l||i?r.transform=fp(n.transform,t,u,i):r.transform&&(r.transform="none")),c){const{originX:f="50%",originY:h="50%",originZ:d=0}=o;r.transformOrigin=`${f} ${h} ${d}`}}const nl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function vf(n,e,t){for(const i in e)!Ft(e[i])&&!pf(i,t)&&(n[i]=e[i])}function xp({transformTemplate:n},e,t){return He.useMemo(()=>{const i=nl();return tl(i,e,{enableHardwareAcceleration:!t},n),Object.assign({},i.vars,i.style)},[e])}function _p(n,e,t){const i=n.style||{},r={};return vf(r,i,n),Object.assign(r,xp(n,e,t)),n.transformValues?n.transformValues(r):r}function vp(n,e,t){const i={},r=_p(n,e,t);return n.drag&&n.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(i.tabIndex=0),i.style=r,i}const yp=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function vs(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||yp.has(n)}let yf=n=>!vs(n);function Sp(n){n&&(yf=e=>e.startsWith("on")?!vs(e):n(e))}try{Sp(require("@emotion/is-prop-valid").default)}catch{}function bp(n,e,t){const i={};for(const r in n)r==="values"&&typeof n.values=="object"||(yf(r)||t===!0&&vs(r)||!e&&!vs(r)||n.draggable&&r.startsWith("onDrag"))&&(i[r]=n[r]);return i}function sc(n,e,t){return typeof n=="string"?n:Ce.transform(e+t*n)}function Mp(n,e,t){const i=sc(e,n.x,n.width),r=sc(t,n.y,n.height);return`${i} ${r}`}const Ep={offset:"stroke-dashoffset",array:"stroke-dasharray"},Tp={offset:"strokeDashoffset",array:"strokeDasharray"};function Ap(n,e,t=1,i=0,r=!0){n.pathLength=1;const s=r?Ep:Tp;n[s.offset]=Ce.transform(-i);const a=Ce.transform(e),o=Ce.transform(t);n[s.array]=`${a} ${o}`}function il(n,{attrX:e,attrY:t,attrScale:i,originX:r,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...c},u,f,h){if(tl(n,c,u,h),f){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:d,style:m,dimensions:x}=n;d.transform&&(x&&(m.transform=d.transform),delete d.transform),x&&(r!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=Mp(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),t!==void 0&&(d.y=t),i!==void 0&&(d.scale=i),a!==void 0&&Ap(d,a,o,l,!1)}const Sf=()=>({...nl(),attrs:{}}),rl=n=>typeof n=="string"&&n.toLowerCase()==="svg";function wp(n,e,t,i){const r=He.useMemo(()=>{const s=Sf();return il(s,e,{enableHardwareAcceleration:!1},rl(i),n.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(n.style){const s={};vf(s,n.style,n),r.style={...s,...r.style}}return r}function Cp(n=!1){return(t,i,r,{latestValues:s},a)=>{const l=(el(t)?wp:vp)(i,s,a,t),u={...bp(i,typeof t=="string",n),...l,ref:r},{children:f}=i,h=He.useMemo(()=>Ft(f)?f.get():f,[f]);return He.createElement(t,{...u,children:h})}}const sl=n=>n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function bf(n,{style:e,vars:t},i,r){Object.assign(n.style,e,r&&r.getProjectionStyles(i));for(const s in t)n.style.setProperty(s,t[s])}const Mf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ef(n,e,t,i){bf(n,e,void 0,i);for(const r in e.attrs)n.setAttribute(Mf.has(r)?r:sl(r),e.attrs[r])}function al(n,e){const{style:t}=n,i={};for(const r in t)(Ft(t[r])||e.style&&Ft(e.style[r])||pf(r,n))&&(i[r]=t[r]);return i}function Tf(n,e){const t=al(n,e);for(const i in n)if(Ft(n[i])||Ft(e[i])){const r=Er.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;t[r]=n[i]}return t}function ol(n,e,t,i={},r={}){return typeof e=="function"&&(e=e(t!==void 0?t:n.custom,i,r)),typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"&&(e=e(t!==void 0?t:n.custom,i,r)),e}function Rp(n){const e=He.useRef(null);return e.current===null&&(e.current=n()),e.current}const ys=n=>Array.isArray(n),Pp=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),Lp=n=>ys(n)?n[n.length-1]||0:n;function ls(n){const e=Ft(n)?n.get():n;return Pp(e)?e.toValue():e}function Dp({scrapeMotionValuesFromProps:n,createRenderState:e,onMount:t},i,r,s){const a={latestValues:Ip(i,r,s,n),renderState:e()};return t&&(a.mount=o=>t(i,o,a)),a}const Af=n=>(e,t)=>{const i=He.useContext(Ps),r=He.useContext(Zo),s=()=>Dp(n,e,i,r);return t?s():Rp(s)};function Ip(n,e,t,i){const r={},s=i(n,{});for(const h in s)r[h]=ls(s[h]);let{initial:a,animate:o}=n;const l=Is(n),c=ff(n);e&&c&&!l&&n.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let u=t?t.initial===!1:!1;u=u||a===!1;const f=u?o:a;return f&&typeof f!="boolean"&&!Ds(f)&&(Array.isArray(f)?f:[f]).forEach(d=>{const m=ol(n,d);if(!m)return;const{transitionEnd:x,transition:g,...p}=m;for(const E in p){let b=p[E];if(Array.isArray(b)){const T=u?b.length-1:0;b=b[T]}b!==null&&(r[E]=b)}for(const E in x)r[E]=x[E]}),r}const Up={useVisualState:Af({scrapeMotionValuesFromProps:Tf,createRenderState:Sf,onMount:(n,e,{renderState:t,latestValues:i})=>{try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}il(t,i,{enableHardwareAcceleration:!1},rl(e.tagName),n.transformTemplate),Ef(e,t)}})},Fp={useVisualState:Af({scrapeMotionValuesFromProps:al,createRenderState:nl})};function Np(n,{forwardMotionProps:e=!1},t,i){return{...el(n)?Up:Fp,preloadedFeatures:t,useRender:Cp(e),createVisualElement:i,Component:n}}function xn(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}const wf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function Fs(n,e="page"){return{point:{x:n[e+"X"],y:n[e+"Y"]}}}const Op=n=>e=>wf(e)&&n(e,Fs(e));function yn(n,e,t,i){return xn(n,e,Op(t),i)}const Bp=(n,e)=>t=>e(n(t)),kn=(...n)=>n.reduce(Bp);function Cf(n){let e=null;return()=>{const t=()=>{e=null};return e===null?(e=n,t):!1}}const ac=Cf("dragHorizontal"),oc=Cf("dragVertical");function Rf(n){let e=!1;if(n==="y")e=oc();else if(n==="x")e=ac();else{const t=ac(),i=oc();t&&i?e=()=>{t(),i()}:(t&&t(),i&&i())}return e}function Pf(){const n=Rf(!0);return n?(n(),!1):!0}class jn{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Vp(n){let e=[],t=[],i=0,r=!1,s=!1;const a=new WeakSet,o={schedule:(l,c=!1,u=!1)=>{const f=u&&r,h=f?e:t;return c&&a.add(l),h.indexOf(l)===-1&&(h.push(l),f&&r&&(i=e.length)),l},cancel:l=>{const c=t.indexOf(l);c!==-1&&t.splice(c,1),a.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,t]=[t,e],t.length=0,i=e.length,i)for(let c=0;c<i;c++){const u=e[c];u(l),a.has(u)&&(o.schedule(u),n())}r=!1,s&&(s=!1,o.process(l))}};return o}const ct={delta:0,timestamp:0,isProcessing:!1},kp=40;let Wa=!0,xr=!1;const Ns=["read","update","preRender","render","postRender"],Bi=Ns.reduce((n,e)=>(n[e]=Vp(()=>xr=!0),n),{}),zp=n=>Bi[n].process(ct),Lf=n=>{xr=!1,ct.delta=Wa?1e3/60:Math.max(Math.min(n-ct.timestamp,kp),1),ct.timestamp=n,ct.isProcessing=!0,Ns.forEach(zp),ct.isProcessing=!1,xr&&(Wa=!1,requestAnimationFrame(Lf))},Gp=()=>{xr=!0,Wa=!0,ct.isProcessing||requestAnimationFrame(Lf)},ft=Ns.reduce((n,e)=>{const t=Bi[e];return n[e]=(i,r=!1,s=!1)=>(xr||Gp(),t.schedule(i,r,s)),n},{});function En(n){Ns.forEach(e=>Bi[e].cancel(n))}function lc(n,e){const t="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,a)=>{if(s.type==="touch"||Pf())return;const o=n.getProps();n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",e),o[i]&&ft.update(()=>o[i](s,a))};return yn(n.current,t,r,{passive:!n.getProps()[i]})}class Hp extends jn{mount(){this.unmount=kn(lc(this.node,!0),lc(this.node,!1))}unmount(){}}class Wp extends jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=kn(xn(this.node.current,"focus",()=>this.onFocus()),xn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Df=(n,e)=>e?n===e?!0:Df(n,e.parentElement):!1,Mt=n=>n;function Zs(n,e){if(!e)return;const t=new PointerEvent("pointer"+n);e(t,Fs(t))}class Xp extends jn{constructor(){super(...arguments),this.removeStartListeners=Mt,this.removeEndListeners=Mt,this.removeAccessibleListeners=Mt,this.startPointerPress=(e,t)=>{if(this.removeEndListeners(),this.isPressing)return;const i=this.node.getProps(),s=yn(window,"pointerup",(o,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u}=this.node.getProps();ft.update(()=>{Df(this.node.current,o.target)?c&&c(o,l):u&&u(o,l)})},{passive:!(i.onTap||i.onPointerUp)}),a=yn(window,"pointercancel",(o,l)=>this.cancelPress(o,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=kn(s,a),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const a=o=>{o.key!=="Enter"||!this.checkPressEnd()||Zs("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&ft.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=xn(this.node.current,"keyup",a),Zs("down",(o,l)=>{this.startPress(o,l)})},t=xn(this.node.current,"keydown",e),i=()=>{this.isPressing&&Zs("cancel",(s,a)=>this.cancelPress(s,a))},r=xn(this.node.current,"blur",i);this.removeAccessibleListeners=kn(t,r)}}startPress(e,t){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&ft.update(()=>i(e,t))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Pf()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&ft.update(()=>i(e,t))}mount(){const e=this.node.getProps(),t=yn(this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=xn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=kn(t,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Xa=new WeakMap,Js=new WeakMap,jp=n=>{const e=Xa.get(n.target);e&&e(n)},qp=n=>{n.forEach(jp)};function Yp({root:n,...e}){const t=n||document;Js.has(t)||Js.set(t,{});const i=Js.get(t),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(qp,{root:n,...e})),i[r]}function $p(n,e,t){const i=Yp(e);return Xa.set(n,t),i.observe(n),()=>{Xa.delete(n),i.unobserve(n)}}const Kp={some:0,all:1};class Zp extends jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:r="some",once:s}=e,a={root:t?t.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:Kp[r]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),h=c?u:f;h&&h(l)};return $p(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Jp(e,t))&&this.startObserver()}unmount(){}}function Jp({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Qp={inView:{Feature:Zp},tap:{Feature:Xp},focus:{Feature:Wp},hover:{Feature:Hp}};function If(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function em(n){const e={};return n.values.forEach((t,i)=>e[i]=t.get()),e}function tm(n){const e={};return n.values.forEach((t,i)=>e[i]=t.getVelocity()),e}function Os(n,e,t){const i=n.getProps();return ol(i,e,t!==void 0?t:i.custom,em(n),tm(n))}const nm="framerAppearId",im="data-"+sl(nm);let ll=Mt;const ci=n=>n*1e3,Sn=n=>n/1e3,rm={current:!1},Uf=n=>Array.isArray(n)&&typeof n[0]=="number";function Ff(n){return!!(!n||typeof n=="string"&&Nf[n]||Uf(n)||Array.isArray(n)&&n.every(Ff))}const ar=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,Nf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ar([0,.65,.55,1]),circOut:ar([.55,0,1,.45]),backIn:ar([.31,.01,.66,-.59]),backOut:ar([.33,1.53,.69,.99])};function Of(n){if(n)return Uf(n)?ar(n):Array.isArray(n)?n.map(Of):Nf[n]}function sm(n,e,t,{delay:i=0,duration:r,repeat:s=0,repeatType:a="loop",ease:o,times:l}={}){const c={[e]:t};l&&(c.offset=l);const u=Of(o);return Array.isArray(u)&&(c.easing=u),n.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const cc={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},Qs={},Bf={};for(const n in cc)Bf[n]=()=>(Qs[n]===void 0&&(Qs[n]=cc[n]()),Qs[n]);function am(n,{repeat:e,repeatType:t="loop"}){const i=e&&t!=="loop"&&e%2===1?0:n.length-1;return n[i]}const Vf=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,om=1e-7,lm=12;function cm(n,e,t,i,r){let s,a,o=0;do a=e+(t-e)/2,s=Vf(a,i,r)-n,s>0?t=a:e=a;while(Math.abs(s)>om&&++o<lm);return a}function wr(n,e,t,i){if(n===e&&t===i)return Mt;const r=s=>cm(s,0,1,n,t);return s=>s===0||s===1?s:Vf(r(s),e,i)}const um=wr(.42,0,1,1),fm=wr(0,0,.58,1),kf=wr(.42,0,.58,1),hm=n=>Array.isArray(n)&&typeof n[0]!="number",zf=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Gf=n=>e=>1-n(1-e),Hf=n=>1-Math.sin(Math.acos(n)),cl=Gf(Hf),dm=zf(cl),Wf=wr(.33,1.53,.69,.99),ul=Gf(Wf),pm=zf(ul),mm=n=>(n*=2)<1?.5*ul(n):.5*(2-Math.pow(2,-10*(n-1))),gm={linear:Mt,easeIn:um,easeInOut:kf,easeOut:fm,circIn:Hf,circInOut:dm,circOut:cl,backIn:ul,backInOut:pm,backOut:Wf,anticipate:mm},uc=n=>{if(Array.isArray(n)){ll(n.length===4);const[e,t,i,r]=n;return wr(e,t,i,r)}else if(typeof n=="string")return gm[n];return n},fl=(n,e)=>t=>!!(Tr(t)&&pp.test(t)&&t.startsWith(n)||e&&Object.prototype.hasOwnProperty.call(t,e)),Xf=(n,e,t)=>i=>{if(!Tr(i))return i;const[r,s,a,o]=i.match(Us);return{[n]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},xm=n=>Gn(0,255,n),ea={...pi,transform:n=>Math.round(xm(n))},oi={test:fl("rgb","red"),parse:Xf("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+ea.transform(n)+", "+ea.transform(e)+", "+ea.transform(t)+", "+fr(ur.transform(i))+")"};function _m(n){let e="",t="",i="",r="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),r=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),r=n.substring(4,5),e+=e,t+=t,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ja={test:fl("#"),parse:_m,transform:oi.transform},Fi={test:fl("hsl","hue"),parse:Xf("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+on.transform(fr(e))+", "+on.transform(fr(t))+", "+fr(ur.transform(i))+")"},Rt={test:n=>oi.test(n)||ja.test(n)||Fi.test(n),parse:n=>oi.test(n)?oi.parse(n):Fi.test(n)?Fi.parse(n):ja.parse(n),transform:n=>Tr(n)?n:n.hasOwnProperty("red")?oi.transform(n):Fi.transform(n)},ut=(n,e,t)=>-t*n+t*e+n;function ta(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function vm({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let r=0,s=0,a=0;if(!e)r=s=a=t;else{const o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;r=ta(l,o,n+1/3),s=ta(l,o,n),a=ta(l,o,n-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}const na=(n,e,t)=>{const i=n*n;return Math.sqrt(Math.max(0,t*(e*e-i)+i))},ym=[ja,oi,Fi],Sm=n=>ym.find(e=>e.test(n));function fc(n){const e=Sm(n);let t=e.parse(n);return e===Fi&&(t=vm(t)),t}const jf=(n,e)=>{const t=fc(n),i=fc(e),r={...t};return s=>(r.red=na(t.red,i.red,s),r.green=na(t.green,i.green,s),r.blue=na(t.blue,i.blue,s),r.alpha=ut(t.alpha,i.alpha,s),oi.transform(r))};function bm(n){var e,t;return isNaN(n)&&Tr(n)&&(((e=n.match(Us))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(xf))===null||t===void 0?void 0:t.length)||0)>0}const qf={regex:hp,countKey:"Vars",token:"${v}",parse:Mt},Yf={regex:xf,countKey:"Colors",token:"${c}",parse:Rt.parse},$f={regex:Us,countKey:"Numbers",token:"${n}",parse:pi.parse};function ia(n,{regex:e,countKey:t,token:i,parse:r}){const s=n.tokenised.match(e);s&&(n["num"+t]=s.length,n.tokenised=n.tokenised.replace(e,i),n.values.push(...s.map(r)))}function Ss(n){const e=n.toString(),t={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return t.value.includes("var(--")&&ia(t,qf),ia(t,Yf),ia(t,$f),t}function Kf(n){return Ss(n).values}function Zf(n){const{values:e,numColors:t,numVars:i,tokenised:r}=Ss(n),s=e.length;return a=>{let o=r;for(let l=0;l<s;l++)l<i?o=o.replace(qf.token,a[l]):l<i+t?o=o.replace(Yf.token,Rt.transform(a[l])):o=o.replace($f.token,fr(a[l]));return o}}const Mm=n=>typeof n=="number"?0:n;function Em(n){const e=Kf(n);return Zf(n)(e.map(Mm))}const Hn={test:bm,parse:Kf,createTransformer:Zf,getAnimatableNone:Em},Jf=(n,e)=>t=>`${t>0?e:n}`;function Qf(n,e){return typeof n=="number"?t=>ut(n,e,t):Rt.test(n)?jf(n,e):n.startsWith("var(")?Jf(n,e):th(n,e)}const eh=(n,e)=>{const t=[...n],i=t.length,r=n.map((s,a)=>Qf(s,e[a]));return s=>{for(let a=0;a<i;a++)t[a]=r[a](s);return t}},Tm=(n,e)=>{const t={...n,...e},i={};for(const r in t)n[r]!==void 0&&e[r]!==void 0&&(i[r]=Qf(n[r],e[r]));return r=>{for(const s in i)t[s]=i[s](r);return t}},th=(n,e)=>{const t=Hn.createTransformer(e),i=Ss(n),r=Ss(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?kn(eh(i.values,r.values),t):Jf(n,e)},_r=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},hc=(n,e)=>t=>ut(n,e,t);function Am(n){return typeof n=="number"?hc:typeof n=="string"?Rt.test(n)?jf:th:Array.isArray(n)?eh:typeof n=="object"?Tm:hc}function wm(n,e,t){const i=[],r=t||Am(n[0]),s=n.length-1;for(let a=0;a<s;a++){let o=r(n[a],n[a+1]);if(e){const l=Array.isArray(e)?e[a]||Mt:e;o=kn(l,o)}i.push(o)}return i}function nh(n,e,{clamp:t=!0,ease:i,mixer:r}={}){const s=n.length;if(ll(s===e.length),s===1)return()=>e[0];n[0]>n[s-1]&&(n=[...n].reverse(),e=[...e].reverse());const a=wm(e,i,r),o=a.length,l=c=>{let u=0;if(o>1)for(;u<n.length-2&&!(c<n[u+1]);u++);const f=_r(n[u],n[u+1],c);return a[u](f)};return t?c=>l(Gn(n[0],n[s-1],c)):l}function Cm(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const r=_r(0,e,i);n.push(ut(t,1,r))}}function Rm(n){const e=[0];return Cm(e,n.length-1),e}function Pm(n,e){return n.map(t=>t*e)}function Lm(n,e){return n.map(()=>e||kf).splice(0,n.length-1)}function bs({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const r=hm(i)?i.map(uc):uc(i),s={done:!1,value:e[0]},a=Pm(t&&t.length===e.length?t:Rm(e),n),o=nh(a,e,{ease:Array.isArray(r)?r:Lm(e,r)});return{calculatedDuration:n,next:l=>(s.value=o(l),s.done=l>=n,s)}}function ih(n,e){return e?n*(1e3/e):0}const Dm=5;function rh(n,e,t){const i=Math.max(e-Dm,0);return ih(t-n(i),e-i)}const ra=.001,Im=.01,Um=10,Fm=.05,Nm=1;function Om({duration:n=800,bounce:e=.25,velocity:t=0,mass:i=1}){let r,s,a=1-e;a=Gn(Fm,Nm,a),n=Gn(Im,Um,Sn(n)),a<1?(r=c=>{const u=c*a,f=u*n,h=u-t,d=qa(c,a),m=Math.exp(-f);return ra-h/d*m},s=c=>{const f=c*a*n,h=f*t+t,d=Math.pow(a,2)*Math.pow(c,2)*n,m=Math.exp(-f),x=qa(Math.pow(c,2),a);return(-r(c)+ra>0?-1:1)*((h-d)*m)/x}):(r=c=>{const u=Math.exp(-c*n),f=(c-t)*n+1;return-ra+u*f},s=c=>{const u=Math.exp(-c*n),f=(t-c)*(n*n);return u*f});const o=5/n,l=Vm(r,s,o);if(n=ci(n),isNaN(l))return{stiffness:100,damping:10,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:n}}}const Bm=12;function Vm(n,e,t){let i=t;for(let r=1;r<Bm;r++)i=i-n(i)/e(i);return i}function qa(n,e){return n*Math.sqrt(1-e*e)}const km=["duration","bounce"],zm=["stiffness","damping","mass"];function dc(n,e){return e.some(t=>n[t]!==void 0)}function Gm(n){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...n};if(!dc(n,zm)&&dc(n,km)){const t=Om(n);e={...e,...t,velocity:0,mass:1},e.isResolvedFromDuration=!0}return e}function sh({keyframes:n,restDelta:e,restSpeed:t,...i}){const r=n[0],s=n[n.length-1],a={done:!1,value:r},{stiffness:o,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:h}=Gm(i),d=u?-Sn(u):0,m=l/(2*Math.sqrt(o*c)),x=s-r,g=Sn(Math.sqrt(o/c)),p=Math.abs(x)<5;t||(t=p?.01:2),e||(e=p?.005:.5);let E;if(m<1){const b=qa(g,m);E=T=>{const C=Math.exp(-m*g*T);return s-C*((d+m*g*x)/b*Math.sin(b*T)+x*Math.cos(b*T))}}else if(m===1)E=b=>s-Math.exp(-g*b)*(x+(d+g*x)*b);else{const b=g*Math.sqrt(m*m-1);E=T=>{const C=Math.exp(-m*g*T),A=Math.min(b*T,300);return s-C*((d+m*g*x)*Math.sinh(A)+b*x*Math.cosh(A))/b}}return{calculatedDuration:h&&f||null,next:b=>{const T=E(b);if(h)a.done=b>=f;else{let C=d;b!==0&&(m<1?C=rh(E,b,T):C=0);const A=Math.abs(C)<=t,R=Math.abs(s-T)<=e;a.done=A&&R}return a.value=a.done?s:T,a}}}function pc({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const f=n[0],h={done:!1,value:f},d=U=>o!==void 0&&U<o||l!==void 0&&U>l,m=U=>o===void 0?l:l===void 0||Math.abs(o-U)<Math.abs(l-U)?o:l;let x=t*e;const g=f+x,p=a===void 0?g:a(g);p!==g&&(x=p-f);const E=U=>-x*Math.exp(-U/i),b=U=>p+E(U),T=U=>{const M=E(U),y=b(U);h.done=Math.abs(M)<=c,h.value=h.done?p:y};let C,A;const R=U=>{d(h.value)&&(C=U,A=sh({keyframes:[h.value,m(h.value)],velocity:rh(b,U,h.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return R(0),{calculatedDuration:null,next:U=>{let M=!1;return!A&&C===void 0&&(M=!0,T(U),R(U)),C!==void 0&&U>C?A.next(U-C):(!M&&T(U),h)}}}const Hm=n=>{const e=({timestamp:t})=>n(t);return{start:()=>ft.update(e,!0),stop:()=>En(e),now:()=>ct.isProcessing?ct.timestamp:performance.now()}},mc=2e4;function gc(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<mc;)e+=t,i=n.next(e);return e>=mc?1/0:e}const Wm={decay:pc,inertia:pc,tween:bs,keyframes:bs,spring:sh};function Ms({autoplay:n=!0,delay:e=0,driver:t=Hm,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:o="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:f,...h}){let d=1,m=!1,x,g;const p=()=>{x&&x(),g=new Promise(Z=>{x=Z})};p();let E;const b=Wm[r]||bs;let T;b!==bs&&typeof i[0]!="number"&&(T=nh([0,100],i,{clamp:!1}),i=[0,100]);const C=b({...h,keyframes:i});let A;o==="mirror"&&(A=b({...h,keyframes:[...i].reverse(),velocity:-(h.velocity||0)}));let R="idle",U=null,M=null,y=null;C.calculatedDuration===null&&s&&(C.calculatedDuration=gc(C));const{calculatedDuration:D}=C;let B=1/0,V=1/0;D!==null&&(B=D+a,V=B*(s+1)-a);let k=0;const X=Z=>{if(M===null)return;d>0&&(M=Math.min(M,Z)),U!==null?k=U:k=(Z-M)*d;const de=k-e,Oe=de<0;k=Math.max(de,0),R==="finished"&&U===null&&(k=V);let ke=k,We=C;if(s){const Le=k/B;let ve=Math.floor(Le),Ue=Le%1;!Ue&&Le>=1&&(Ue=1),Ue===1&&ve--,ve=Math.min(ve,s+1);const gt=!!(ve%2);gt&&(o==="reverse"?(Ue=1-Ue,a&&(Ue-=a/B)):o==="mirror"&&(We=A));let ze=Gn(0,1,Ue);k>V&&(ze=o==="reverse"&&gt?1:0),ke=ze*B}const Y=Oe?{done:!1,value:i[0]}:We.next(ke);T&&(Y.value=T(Y.value));let{done:J}=Y;!Oe&&D!==null&&(J=k>=V);const pe=U===null&&(R==="finished"||R==="running"&&J||d<0&&k<=0);return f&&f(Y.value),pe&&I(),Y},H=()=>{E&&E.stop(),E=void 0},te=()=>{R="idle",H(),p(),M=y=null},I=()=>{R="finished",u&&u(),H(),p()},j=()=>{if(m)return;E||(E=t(X));const Z=E.now();l&&l(),U!==null?M=Z-U:(!M||R==="finished")&&(M=Z),y=M,U=null,R="running",E.start()};n&&j();const $={then(Z,de){return g.then(Z,de)},get time(){return Sn(k)},set time(Z){Z=ci(Z),k=Z,U!==null||!E||d===0?U=Z:M=E.now()-Z/d},get duration(){const Z=C.calculatedDuration===null?gc(C):C.calculatedDuration;return Sn(Z)},get speed(){return d},set speed(Z){Z===d||!E||(d=Z,$.time=Sn(k))},get state(){return R},play:j,pause:()=>{R="paused",U=k},stop:()=>{m=!0,R!=="idle"&&(R="idle",c&&c(),te())},cancel:()=>{y!==null&&X(y),te()},complete:()=>{R="finished"},sample:Z=>(M=0,X(Z))};return $}const Xm=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Or=10,jm=2e4,qm=(n,e)=>e.type==="spring"||n==="backgroundColor"||!Ff(e.ease);function Ym(n,e,{onUpdate:t,onComplete:i,...r}){if(!(Bf.waapi()&&Xm.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let a=!1,o,l;const c=()=>{l=new Promise(p=>{o=p})};c();let{keyframes:u,duration:f=300,ease:h,times:d}=r;if(qm(e,r)){const p=Ms({...r,repeat:0,delay:0});let E={done:!1,value:u[0]};const b=[];let T=0;for(;!E.done&&T<jm;)E=p.sample(T),b.push(E.value),T+=Or;d=void 0,u=b,f=T-Or,h="linear"}const m=sm(n.owner.current,e,u,{...r,duration:f,ease:h,times:d}),x=()=>m.cancel(),g=()=>{ft.update(x),o(),c()};return m.onfinish=()=>{n.set(am(u,r)),i&&i(),g()},{then(p,E){return l.then(p,E)},get time(){return Sn(m.currentTime||0)},set time(p){m.currentTime=ci(p)},get speed(){return m.playbackRate},set speed(p){m.playbackRate=p},get duration(){return Sn(f)},play:()=>{a||(m.play(),En(x))},pause:()=>m.pause(),stop:()=>{if(a=!0,m.playState==="idle")return;const{currentTime:p}=m;if(p){const E=Ms({...r,autoplay:!1});n.setWithVelocity(E.sample(p-Or).value,E.sample(p).value,Or)}g()},complete:()=>m.finish(),cancel:g}}function $m({keyframes:n,delay:e,onUpdate:t,onComplete:i}){const r=()=>(t&&t(n[n.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Mt,pause:Mt,stop:Mt,then:s=>(s(),Promise.resolve()),cancel:Mt,complete:Mt});return e?Ms({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const Km={type:"spring",stiffness:500,damping:25,restSpeed:10},Zm=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Jm={type:"keyframes",duration:.8},Qm={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},e0=(n,{keyframes:e})=>e.length>2?Jm:di.has(n)?n.startsWith("scale")?Zm(e[1]):Km:Qm,Ya=(n,e)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Hn.test(e)||e==="0")&&!e.startsWith("url(")),t0=new Set(["brightness","contrast","saturate","opacity"]);function n0(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Us)||[];if(!i)return n;const r=t.replace(i,"");let s=t0.has(e)?1:0;return i!==t&&(s*=100),e+"("+s+r+")"}const i0=/([a-z-]*)\(.*?\)/g,$a={...Hn,getAnimatableNone:n=>{const e=n.match(i0);return e?e.map(n0).join(" "):n}},r0={..._f,color:Rt,backgroundColor:Rt,outlineColor:Rt,fill:Rt,stroke:Rt,borderColor:Rt,borderTopColor:Rt,borderRightColor:Rt,borderBottomColor:Rt,borderLeftColor:Rt,filter:$a,WebkitFilter:$a},hl=n=>r0[n];function ah(n,e){let t=hl(n);return t!==$a&&(t=Hn),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const oh=n=>/^0[^.\s]+$/.test(n);function s0(n){if(typeof n=="number")return n===0;if(n!==null)return n==="none"||n==="0"||oh(n)}function a0(n,e,t,i){const r=Ya(e,t);let s;Array.isArray(t)?s=[...t]:s=[null,t];const a=i.from!==void 0?i.from:n.get();let o;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?a:s[c-1]),s0(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(o=s[c]);if(r&&l.length&&o)for(let c=0;c<l.length;c++){const u=l[c];s[u]=ah(e,o)}return s}function o0({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function lh(n,e){return n[e]||n.default||n}const dl=(n,e,t,i={})=>r=>{const s=lh(i,n)||{},a=s.delay||i.delay||0;let{elapsed:o=0}=i;o=o-ci(a);const l=a0(e,n,t,s),c=l[0],u=l[l.length-1],f=Ya(n,c),h=Ya(n,u);let d={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-o,onUpdate:m=>{e.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(o0(s)||(d={...d,...e0(n,d)}),d.duration&&(d.duration=ci(d.duration)),d.repeatDelay&&(d.repeatDelay=ci(d.repeatDelay)),!f||!h||rm.current||s.type===!1)return $m(d);if(e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const m=Ym(e,n,d);if(m)return m}return Ms(d)};function Es(n){return!!(Ft(n)&&n.add)}const l0=n=>/^\-?\d*\.?\d+$/.test(n);function pl(n,e){n.indexOf(e)===-1&&n.push(e)}function ml(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class gl{constructor(){this.subscriptions=[]}add(e){return pl(this.subscriptions,e),()=>ml(this.subscriptions,e)}notify(e,t,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const c0=n=>!isNaN(parseFloat(n));class u0{constructor(e,t={}){this.version="10.12.16",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:a}=ct;this.lastUpdated!==a&&(this.timeDelta=s,this.lastUpdated=a,ft.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ft.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=c0(this.current),this.owner=t.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new gl);const i=this.events[e].add(t);return e==="change"?()=>{i(),ft.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ih(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function zi(n,e){return new u0(n,e)}const ch=n=>e=>e.test(n),f0={test:n=>n==="auto",parse:n=>n},uh=[pi,Ce,on,Nn,gp,mp,f0],Ji=n=>uh.find(ch(n)),h0=[...uh,Rt,Hn],d0=n=>h0.find(ch(n));function p0(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,zi(t))}function m0(n,e){const t=Os(n,e);let{transitionEnd:i={},transition:r={},...s}=t?n.makeTargetAnimatable(t,!1):{};s={...s,...i};for(const a in s){const o=Lp(s[a]);p0(n,a,o)}}function g0(n,e,t){var i,r;const s=Object.keys(e).filter(o=>!n.hasValue(o)),a=s.length;if(a)for(let o=0;o<a;o++){const l=s[o],c=e[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(r=(i=t[l])!==null&&i!==void 0?i:n.readValue(l))!==null&&r!==void 0?r:e[l]),u!=null&&(typeof u=="string"&&(l0(u)||oh(u))?u=parseFloat(u):!d0(u)&&Hn.test(c)&&(u=ah(l,c)),n.addValue(l,zi(u,{owner:n})),t[l]===void 0&&(t[l]=u),u!==null&&n.setBaseTarget(l,u))}}function x0(n,e){return e?(e[n]||e.default||e).from:void 0}function _0(n,e,t){const i={};for(const r in n){const s=x0(r,e);if(s!==void 0)i[r]=s;else{const a=t.getValue(r);a&&(i[r]=a.get())}}return i}function v0({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function fh(n,e,{delay:t=0,transitionOverride:i,type:r}={}){let{transition:s=n.getDefaultTransition(),transitionEnd:a,...o}=n.makeTargetAnimatable(e);const l=n.getValue("willChange");i&&(s=i);const c=[],u=r&&n.animationState&&n.animationState.getState()[r];for(const f in o){const h=n.getValue(f),d=o[f];if(!h||d===void 0||u&&v0(u,f))continue;const m={delay:t,elapsed:0,...s};if(window.HandoffAppearAnimations&&!h.hasAnimated){const g=n.getProps()[im];g&&(m.elapsed=window.HandoffAppearAnimations(g,f,h,ft))}h.start(dl(f,h,d,n.shouldReduceMotion&&di.has(f)?{type:!1}:m));const x=h.animation;Es(l)&&(l.add(f),x.then(()=>l.remove(f))),c.push(x)}return a&&Promise.all(c).then(()=>{a&&m0(n,a)}),c}function Ka(n,e,t={}){const i=Os(n,e,t.custom);let{transition:r=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(r=t.transitionOverride);const s=i?()=>Promise.all(fh(n,i,t)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:f}=r;return y0(n,e,c+l,u,f,t)}:()=>Promise.resolve(),{when:o}=r;if(o){const[l,c]=o==="beforeChildren"?[s,a]:[a,s];return l().then(()=>c())}else return Promise.all([s(),a(t.delay)])}function y0(n,e,t=0,i=0,r=1,s){const a=[],o=(n.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>o-c*i;return Array.from(n.variantChildren).sort(S0).forEach((c,u)=>{c.notify("AnimationStart",e),a.push(Ka(c,e,{...s,delay:t+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(a)}function S0(n,e){return n.sortNodePosition(e)}function b0(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Ka(n,s,t));i=Promise.all(r)}else if(typeof e=="string")i=Ka(n,e,t);else{const r=typeof e=="function"?Os(n,e,t.custom):e;i=Promise.all(fh(n,r,t))}return i.then(()=>n.notify("AnimationComplete",e))}const M0=[...Jo].reverse(),E0=Jo.length;function T0(n){return e=>Promise.all(e.map(({animation:t,options:i})=>b0(n,t,i)))}function A0(n){let e=T0(n);const t=C0();let i=!0;const r=(l,c)=>{const u=Os(n,c);if(u){const{transition:f,transitionEnd:h,...d}=u;l={...l,...d,...h}}return l};function s(l){e=l(n)}function a(l,c){const u=n.getProps(),f=n.getVariantContext(!0)||{},h=[],d=new Set;let m={},x=1/0;for(let p=0;p<E0;p++){const E=M0[p],b=t[E],T=u[E]!==void 0?u[E]:f[E],C=mr(T),A=E===c?b.isActive:null;A===!1&&(x=p);let R=T===f[E]&&T!==u[E]&&C;if(R&&i&&n.manuallyAnimateOnMount&&(R=!1),b.protectedKeys={...m},!b.isActive&&A===null||!T&&!b.prevProp||Ds(T)||typeof T=="boolean")continue;const U=w0(b.prevProp,T);let M=U||E===c&&b.isActive&&!R&&C||p>x&&C;const y=Array.isArray(T)?T:[T];let D=y.reduce(r,{});A===!1&&(D={});const{prevResolvedValues:B={}}=b,V={...B,...D},k=X=>{M=!0,d.delete(X),b.needsAnimating[X]=!0};for(const X in V){const H=D[X],te=B[X];m.hasOwnProperty(X)||(H!==te?ys(H)&&ys(te)?!If(H,te)||U?k(X):b.protectedKeys[X]=!0:H!==void 0?k(X):d.add(X):H!==void 0&&d.has(X)?k(X):b.protectedKeys[X]=!0)}b.prevProp=T,b.prevResolvedValues=D,b.isActive&&(m={...m,...D}),i&&n.blockInitialAnimation&&(M=!1),M&&!R&&h.push(...y.map(X=>({animation:X,options:{type:E,...l}})))}if(d.size){const p={};d.forEach(E=>{const b=n.getBaseTarget(E);b!==void 0&&(p[E]=b)}),h.push({animation:p})}let g=!!h.length;return i&&u.initial===!1&&!n.manuallyAnimateOnMount&&(g=!1),i=!1,g?e(h):Promise.resolve()}function o(l,c,u){var f;if(t[l].isActive===c)return Promise.resolve();(f=n.variantChildren)===null||f===void 0||f.forEach(d=>{var m;return(m=d.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),t[l].isActive=c;const h=a(u,l);for(const d in t)t[d].protectedKeys={};return h}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>t}}function w0(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!If(e,n):!1}function $n(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function C0(){return{animate:$n(!0),whileInView:$n(),whileHover:$n(),whileTap:$n(),whileDrag:$n(),whileFocus:$n(),exit:$n()}}class R0 extends jn{constructor(e){super(e),e.animationState||(e.animationState=A0(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Ds(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}let P0=0;class L0 extends jn{constructor(){super(...arguments),this.id=P0++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});t&&!e&&s.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const D0={animation:{Feature:R0},exit:{Feature:L0}},xc=(n,e)=>Math.abs(n-e);function I0(n,e){const t=xc(n.x,e.x),i=xc(n.y,e.y);return Math.sqrt(t**2+i**2)}class hh{constructor(e,t,{transformPagePoint:i}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const c=aa(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,f=I0(c.offset,{x:0,y:0})>=3;if(!u&&!f)return;const{point:h}=c,{timestamp:d}=ct;this.history.push({...h,timestamp:d});const{onStart:m,onMove:x}=this.handlers;u||(m&&m(this.lastMoveEvent,c),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,c)},this.handlePointerMove=(c,u)=>{this.lastMoveEvent=c,this.lastMoveEventInfo=sa(u,this.transformPagePoint),ft.update(this.updatePoint,!0)},this.handlePointerUp=(c,u)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:f,onSessionEnd:h}=this.handlers,d=aa(c.type==="pointercancel"?this.lastMoveEventInfo:sa(u,this.transformPagePoint),this.history);this.startEvent&&f&&f(c,d),h&&h(c,d)},!wf(e))return;this.handlers=t,this.transformPagePoint=i;const r=Fs(e),s=sa(r,this.transformPagePoint),{point:a}=s,{timestamp:o}=ct;this.history=[{...a,timestamp:o}];const{onSessionStart:l}=t;l&&l(e,aa(s,this.history)),this.removeListeners=kn(yn(window,"pointermove",this.handlePointerMove),yn(window,"pointerup",this.handlePointerUp),yn(window,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),En(this.updatePoint)}}function sa(n,e){return e?{point:e(n.point)}:n}function _c(n,e){return{x:n.x-e.x,y:n.y-e.y}}function aa({point:n},e){return{point:n,delta:_c(n,dh(e)),offset:_c(n,U0(e)),velocity:F0(e,.1)}}function U0(n){return n[0]}function dh(n){return n[n.length-1]}function F0(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const r=dh(n);for(;t>=0&&(i=n[t],!(r.timestamp-i.timestamp>ci(e)));)t--;if(!i)return{x:0,y:0};const s=Sn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Gt(n){return n.max-n.min}function Za(n,e=0,t=.01){return Math.abs(n-e)<=t}function vc(n,e,t,i=.5){n.origin=i,n.originPoint=ut(e.min,e.max,n.origin),n.scale=Gt(t)/Gt(e),(Za(n.scale,1,1e-4)||isNaN(n.scale))&&(n.scale=1),n.translate=ut(t.min,t.max,n.origin)-n.originPoint,(Za(n.translate)||isNaN(n.translate))&&(n.translate=0)}function hr(n,e,t,i){vc(n.x,e.x,t.x,i?i.originX:void 0),vc(n.y,e.y,t.y,i?i.originY:void 0)}function yc(n,e,t){n.min=t.min+e.min,n.max=n.min+Gt(e)}function N0(n,e,t){yc(n.x,e.x,t.x),yc(n.y,e.y,t.y)}function Sc(n,e,t){n.min=e.min-t.min,n.max=n.min+Gt(e)}function dr(n,e,t){Sc(n.x,e.x,t.x),Sc(n.y,e.y,t.y)}function O0(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?ut(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?ut(t,n,i.max):Math.min(n,t)),n}function bc(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function B0(n,{top:e,left:t,bottom:i,right:r}){return{x:bc(n.x,t,r),y:bc(n.y,e,i)}}function Mc(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function V0(n,e){return{x:Mc(n.x,e.x),y:Mc(n.y,e.y)}}function k0(n,e){let t=.5;const i=Gt(n),r=Gt(e);return r>i?t=_r(e.min,e.max-i,n.min):i>r&&(t=_r(n.min,n.max-r,e.min)),Gn(0,1,t)}function z0(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Ja=.35;function G0(n=Ja){return n===!1?n=0:n===!0&&(n=Ja),{x:Ec(n,"left","right"),y:Ec(n,"top","bottom")}}function Ec(n,e,t){return{min:Tc(n,e),max:Tc(n,t)}}function Tc(n,e){return typeof n=="number"?n:n[e]||0}const Ac=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ni=()=>({x:Ac(),y:Ac()}),wc=()=>({min:0,max:0}),_t=()=>({x:wc(),y:wc()});function nn(n){return[n("x"),n("y")]}function ph({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function H0({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function W0(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function oa(n){return n===void 0||n===1}function Qa({scale:n,scaleX:e,scaleY:t}){return!oa(n)||!oa(e)||!oa(t)}function ni(n){return Qa(n)||mh(n)||n.z||n.rotate||n.rotateX||n.rotateY}function mh(n){return Cc(n.x)||Cc(n.y)}function Cc(n){return n&&n!=="0%"}function Ts(n,e,t){const i=n-t,r=e*i;return t+r}function Rc(n,e,t,i,r){return r!==void 0&&(n=Ts(n,r,i)),Ts(n,t,i)+e}function eo(n,e=0,t=1,i,r){n.min=Rc(n.min,e,t,i,r),n.max=Rc(n.max,e,t,i,r)}function gh(n,{x:e,y:t}){eo(n.x,e.translate,e.scale,e.originPoint),eo(n.y,t.translate,t.scale,t.originPoint)}function X0(n,e,t,i=!1){const r=t.length;if(!r)return;e.x=e.y=1;let s,a;for(let o=0;o<r;o++){s=t[o],a=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Oi(n,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,gh(n,a)),i&&ni(s.latestValues)&&Oi(n,s.latestValues))}e.x=Pc(e.x),e.y=Pc(e.y)}function Pc(n){return Number.isInteger(n)||n>1.0000000000001||n<.999999999999?n:1}function On(n,e){n.min=n.min+e,n.max=n.max+e}function Lc(n,e,[t,i,r]){const s=e[r]!==void 0?e[r]:.5,a=ut(n.min,n.max,s);eo(n,e[t],e[i],a,e.scale)}const j0=["x","scaleX","originX"],q0=["y","scaleY","originY"];function Oi(n,e){Lc(n.x,e,j0),Lc(n.y,e,q0)}function xh(n,e){return ph(W0(n.getBoundingClientRect(),e))}function Y0(n,e,t){const i=xh(n,t),{scroll:r}=e;return r&&(On(i.x,r.offset.x),On(i.y,r.offset.y)),i}const $0=new WeakMap;class K0{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=_t(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=l=>{this.stopAnimation(),t&&this.snapToCursor(Fs(l,"page").point)},s=(l,c)=>{const{drag:u,dragPropagation:f,onDragStart:h}=this.getProps();if(u&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Rf(u),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nn(m=>{let x=this.getAxisMotionValue(m).get()||0;if(on.test(x)){const{projection:g}=this.visualElement;if(g&&g.layout){const p=g.layout.layoutBox[m];p&&(x=Gt(p)*(parseFloat(x)/100))}}this.originPoint[m]=x}),h&&ft.update(()=>h(l,c),!1,!0);const{animationState:d}=this.visualElement;d&&d.setActive("whileDrag",!0)},a=(l,c)=>{const{dragPropagation:u,dragDirectionLock:f,onDirectionLock:h,onDrag:d}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:m}=c;if(f&&this.currentDirection===null){this.currentDirection=Z0(m),this.currentDirection!==null&&h&&h(this.currentDirection);return}this.updateAxis("x",c.point,m),this.updateAxis("y",c.point,m),this.visualElement.render(),d&&d(l,c)},o=(l,c)=>this.stop(l,c);this.panSession=new hh(e,{onSessionStart:r,onStart:s,onMove:a,onSessionEnd:o},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ft.update(()=>s(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:r}=this.getProps();if(!i||!Br(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let a=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(a=O0(a,this.constraints[e],this.elastic[e])),s.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),{layout:i}=this.visualElement.projection||{},r=this.constraints;e&&Ui(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=B0(i.layoutBox,e):this.constraints=!1,this.elastic=G0(t),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&nn(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=z0(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ui(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=Y0(i,r.root,this.visualElement.getTransformPagePoint());let a=V0(r.layout.layoutBox,s);if(t){const o=t(H0(a));this.hasMutatedConstraints=!!o,o&&(a=ph(o))}return a}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=nn(u=>{if(!Br(u,t,this.currentDirection))return;let f=l&&l[u]||{};a&&(f={min:0,max:0});const h=r?200:1e6,d=r?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return i.start(dl(e,i,0,t))}stopAnimation(){nn(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[t];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){nn(t=>{const{drag:i}=this.getProps();if(!Br(t,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(t);if(r&&r.layout){const{min:a,max:o}=r.layout.layoutBox[t];s.set(e[t]-ut(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Ui(t)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};nn(a=>{const o=this.getAxisMotionValue(a);if(o){const l=o.get();r[a]=k0({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),nn(a=>{if(!Br(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(ut(l,c,r[a]))})}addListeners(){if(!this.visualElement.current)return;$0.set(this.visualElement,this);const e=this.visualElement.current,t=yn(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ui(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const a=xn(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",(({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(nn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())}));return()=>{a(),t(),s(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=Ja,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function Br(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function Z0(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class J0 extends jn{constructor(e){super(e),this.removeGroupControls=Mt,this.removeListeners=Mt,this.controls=new K0(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Dc=n=>(e,t)=>{n&&ft.update(()=>n(e,t))};class Q0 extends jn{constructor(){super(...arguments),this.removePointerDownListener=Mt}onPointerDown(e){this.session=new hh(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Dc(e),onStart:Dc(t),onMove:i,onEnd:(s,a)=>{delete this.session,r&&ft.update(()=>r(s,a))}}}mount(){this.removePointerDownListener=yn(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function eg(){const n=He.useContext(Zo);if(n===null)return[!0,null];const{isPresent:e,onExitComplete:t,register:i}=n,r=He.useId();return He.useEffect(()=>i(r),[]),!e&&t?[!1,()=>t&&t(r)]:[!0]}const cs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ic(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Qi={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ce.test(n))n=parseFloat(n);else return n;const t=Ic(n,e.target.x),i=Ic(n,e.target.y);return`${t}% ${i}%`}},tg={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,r=Hn.parse(n);if(r.length>5)return i;const s=Hn.createTransformer(n),a=typeof r[0]!="number"?1:0,o=t.x.scale*e.x,l=t.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const c=ut(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=c),typeof r[3+a]=="number"&&(r[3+a]/=c),s(r)}};class ng extends nf.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;lp(ig),s&&(t.group&&t.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),cs.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:r,isPresent:s}=this.props,a=i.projection;return a&&(a.isPresent=s,r||e.layoutDependency!==t||t===void 0?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||ft.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function _h(n){const[e,t]=eg(),i=He.useContext(hf);return nf.createElement(ng,{...n,layoutGroup:i,switchLayoutGroup:He.useContext(df),isPresent:e,safeToRemove:t})}const ig={borderRadius:{...Qi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qi,borderTopRightRadius:Qi,borderBottomLeftRadius:Qi,borderBottomRightRadius:Qi,boxShadow:tg},vh=["TopLeft","TopRight","BottomLeft","BottomRight"],rg=vh.length,Uc=n=>typeof n=="string"?parseFloat(n):n,Fc=n=>typeof n=="number"||Ce.test(n);function sg(n,e,t,i,r,s){r?(n.opacity=ut(0,t.opacity!==void 0?t.opacity:1,ag(i)),n.opacityExit=ut(e.opacity!==void 0?e.opacity:1,0,og(i))):s&&(n.opacity=ut(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let a=0;a<rg;a++){const o=`border${vh[a]}Radius`;let l=Nc(e,o),c=Nc(t,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Fc(l)===Fc(c)?(n[o]=Math.max(ut(Uc(l),Uc(c),i),0),(on.test(c)||on.test(l))&&(n[o]+="%")):n[o]=c}(e.rotate||t.rotate)&&(n.rotate=ut(e.rotate||0,t.rotate||0,i))}function Nc(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const ag=yh(0,.5,cl),og=yh(.5,.95,Mt);function yh(n,e,t){return i=>i<n?0:i>e?1:t(_r(n,e,i))}function Oc(n,e){n.min=e.min,n.max=e.max}function Wt(n,e){Oc(n.x,e.x),Oc(n.y,e.y)}function Bc(n,e,t,i,r){return n-=e,n=Ts(n,1/t,i),r!==void 0&&(n=Ts(n,1/r,i)),n}function lg(n,e=0,t=1,i=.5,r,s=n,a=n){if(on.test(e)&&(e=parseFloat(e),e=ut(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=ut(s.min,s.max,i);n===s&&(o-=e),n.min=Bc(n.min,e,t,o,r),n.max=Bc(n.max,e,t,o,r)}function Vc(n,e,[t,i,r],s,a){lg(n,e[t],e[i],e[r],e.scale,s,a)}const cg=["x","scaleX","originX"],ug=["y","scaleY","originY"];function kc(n,e,t,i){Vc(n.x,e,cg,t?t.x:void 0,i?i.x:void 0),Vc(n.y,e,ug,t?t.y:void 0,i?i.y:void 0)}function zc(n){return n.translate===0&&n.scale===1}function Sh(n){return zc(n.x)&&zc(n.y)}function to(n,e){return n.x.min===e.x.min&&n.x.max===e.x.max&&n.y.min===e.y.min&&n.y.max===e.y.max}function Gc(n){return Gt(n.x)/Gt(n.y)}class fg{constructor(){this.members=[]}add(e){pl(this.members,e),e.scheduleRender()}remove(e){if(ml(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(r=>e===r);if(t===0)return!1;let i;for(let r=t;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Hc(n,e,t){let i="";const r=n.x.translate/e.x,s=n.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{rotate:l,rotateX:c,rotateY:u}=t;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),u&&(i+=`rotateY(${u}deg) `)}const a=n.x.scale*e.x,o=n.y.scale*e.y;return(a!==1||o!==1)&&(i+=`scale(${a}, ${o})`),i||"none"}const hg=(n,e)=>n.depth-e.depth;class dg{constructor(){this.children=[],this.isDirty=!1}add(e){pl(this.children,e),this.isDirty=!0}remove(e){ml(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(hg),this.isDirty=!1,this.children.forEach(e)}}function pg(n,e){const t=performance.now(),i=({timestamp:r})=>{const s=r-t;s>=e&&(En(i),n(s-e))};return ft.read(i,!0),()=>En(i)}function mg(n){window.MotionDebug&&window.MotionDebug.record(n)}function gg(n){return n instanceof SVGElement&&n.tagName!=="svg"}function xg(n,e,t){const i=Ft(n)?n:zi(n);return i.start(dl("",i,e,t)),i.animation}const Wc=["","X","Y","Z"],Xc=1e3;let _g=0;const ii={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function bh({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=e==null?void 0:e()){this.id=_g++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{ii.totalNodes=ii.resolvedTargetDeltas=ii.recalculatedProjection=0,this.nodes.forEach(Sg),this.nodes.forEach(Ag),this.nodes.forEach(wg),this.nodes.forEach(bg),mg(ii)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new dg)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new gl),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=gg(a),this.instance=a;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(c||l)&&(this.isLayoutDirty=!0),n){let f;const h=()=>this.root.updateBlockedByResize=!1;n(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=pg(h,250),cs.hasAnimatedSinceResize&&(cs.hasAnimatedSinceResize=!1,this.nodes.forEach(qc))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:d,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||Dg,{onLayoutAnimationStart:g,onLayoutAnimationComplete:p}=u.getProps(),E=!this.targetLayout||!to(this.targetLayout,m)||d,b=!h&&d;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||b||h&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,b);const T={...lh(x,"layout"),onPlay:g,onComplete:p};(u.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T)}else h||qc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,En(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Cg),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(jc);return}this.isUpdating||this.nodes.forEach(Eg),this.isUpdating=!1,this.nodes.forEach(Tg),this.nodes.forEach(vg),this.nodes.forEach(yg),this.clearAllSnapshots();const o=performance.now();ct.delta=Gn(0,1e3/60,o-ct.timestamp),ct.timestamp=o,ct.isProcessing=!0,Bi.update.process(ct),Bi.preRender.process(ct),Bi.render.process(ct),ct.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Mg),this.sharedNodes.forEach(Rg)}scheduleUpdateProjection(){ft.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){ft.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=_t(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:i(this.instance),offset:t(this.instance)})}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform,o=this.projectionDelta&&!Sh(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&(o||ni(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),Ig(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return _t();const o=a.measureViewportBox(),{scroll:l}=this.root;return l&&(On(o.x,l.offset.x),On(o.y,l.offset.y)),o}removeElementScroll(a){const o=_t();Wt(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:f}=c;if(c!==this.root&&u&&f.layoutScroll){if(u.isRoot){Wt(o,a);const{scroll:h}=this.root;h&&(On(o.x,-h.offset.x),On(o.y,-h.offset.y))}On(o.x,u.offset.x),On(o.y,u.offset.y)}}return o}applyTransform(a,o=!1){const l=_t();Wt(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];!o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Oi(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ni(u.latestValues)&&Oi(l,u.latestValues)}return ni(this.latestValues)&&Oi(l,this.latestValues),l}removeTransform(a){const o=_t();Wt(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ni(c.latestValues))continue;Qa(c.latestValues)&&c.updateSnapshot();const u=_t(),f=c.measurePageBox();Wt(u,f),kc(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ni(this.latestValues)&&kc(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ct.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=ct.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=_t(),this.relativeTargetOrigin=_t(),dr(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),Wt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=_t(),this.targetWithTransforms=_t()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),N0(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Wt(this.target,this.layout.layoutBox),gh(this.target,this.targetDelta)):Wt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=_t(),this.relativeTargetOrigin=_t(),dr(this.relativeTargetOrigin,this.target,d.target),Wt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ii.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Qa(this.parent.latestValues)||mh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===ct.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;Wt(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,d=this.treeScale.y;X0(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox);const{target:m}=o;if(!m){this.projectionTransform&&(this.projectionDelta=Ni(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Ni(),this.projectionDeltaWithTransform=Ni());const x=this.projectionTransform;hr(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=Hc(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==h||this.treeScale.y!==d)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),ii.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const o=this.getStack();o&&o.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Ni();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const h=_t(),d=l?l.source:void 0,m=this.layout?this.layout.source:void 0,x=d!==m,g=this.getStack(),p=!g||g.members.length<=1,E=!!(x&&!p&&this.options.crossfade===!0&&!this.path.some(Lg));this.animationProgress=0;let b;this.mixTargetDelta=T=>{const C=T/1e3;Yc(f.x,a.x,C),Yc(f.y,a.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(dr(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Pg(this.relativeTarget,this.relativeTargetOrigin,h,C),b&&to(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=_t()),Wt(b,this.relativeTarget)),x&&(this.animationValues=u,sg(u,c,this.latestValues,C,E,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(En(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ft.update(()=>{cs.hasAnimatedSinceResize=!0,this.currentAnimation=xg(0,Xc,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Xc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&Mh(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||_t();const f=Gt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const h=Gt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+h}Wt(o,l),Oi(o,u),hr(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new fg),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(o=!0),!o)return;const c={};for(let u=0;u<Wc.length;u++){const f="rotate"+Wc[u];l[f]&&(c[f]=l[f],a.setStaticValue(f,0))}a.render();for(const u in c)a.setStaticValue(u,c[u]);a.scheduleRender()}getProjectionStyles(a={}){var o,l;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=ls(a.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=ls(a.pointerEvents)||""),this.hasProjected&&!ni(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=Hc(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:d,y:m}=this.projectionDelta;c.transformOrigin=`${d.origin*100}% ${m.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(o=h.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in _s){if(h[x]===void 0)continue;const{correct:g,applyTo:p}=_s[x],E=c.transform==="none"?h[x]:g(h[x],f);if(p){const b=p.length;for(let T=0;T<b;T++)c[p[T]]=E}else c[x]=E}return this.options.layoutId&&(c.pointerEvents=f===this?ls(a.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(jc),this.root.sharedNodes.clear()}}}function vg(n){n.updateLayout()}function yg(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=n.layout,{animationType:s}=n.options,a=t.source!==n.layout.source;s==="size"?nn(f=>{const h=a?t.measuredBox[f]:t.layoutBox[f],d=Gt(h);h.min=i[f].min,h.max=h.min+d}):Mh(s,t.layoutBox,i)&&nn(f=>{const h=a?t.measuredBox[f]:t.layoutBox[f],d=Gt(i[f]);h.max=h.min+d,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[f].max=n.relativeTarget[f].min+d)});const o=Ni();hr(o,i,t.layoutBox);const l=Ni();a?hr(l,n.applyTransform(r,!0),t.measuredBox):hr(l,i,t.layoutBox);const c=!Sh(o);let u=!1;if(!n.resumeFrom){const f=n.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:d}=f;if(h&&d){const m=_t();dr(m,t.layoutBox,h.layoutBox);const x=_t();dr(x,i,d.layoutBox),to(m,x)||(u=!0),f.options.layoutRoot&&(n.relativeTarget=x,n.relativeTargetOrigin=m,n.relativeParent=f)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function Sg(n){ii.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function bg(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Mg(n){n.clearSnapshot()}function jc(n){n.clearMeasurements()}function Eg(n){n.isLayoutDirty=!1}function Tg(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function qc(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Ag(n){n.resolveTargetDelta()}function wg(n){n.calcProjection()}function Cg(n){n.resetRotation()}function Rg(n){n.removeLeadSnapshot()}function Yc(n,e,t){n.translate=ut(e.translate,0,t),n.scale=ut(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function $c(n,e,t,i){n.min=ut(e.min,t.min,i),n.max=ut(e.max,t.max,i)}function Pg(n,e,t,i){$c(n.x,e.x,t.x,i),$c(n.y,e.y,t.y,i)}function Lg(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Dg={duration:.45,ease:[.4,0,.1,1]};function Kc(n){n.min=Math.round(n.min),n.max=Math.round(n.max)}function Ig(n){Kc(n.x),Kc(n.y)}function Mh(n,e,t){return n==="position"||n==="preserve-aspect"&&!Za(Gc(e),Gc(t),.2)}const Ug=bh({attachResizeListener:(n,e)=>xn(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),la={current:void 0},Eh=bh({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!la.current){const n=new Ug({});n.mount(window),n.setOptions({layoutScroll:!0}),la.current=n}return la.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Fg={pan:{Feature:Q0},drag:{Feature:J0,ProjectionNode:Eh,MeasureLayout:_h}},Ng=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Og(n){const e=Ng.exec(n);if(!e)return[,];const[,t,i]=e;return[t,i]}function no(n,e,t=1){const[i,r]=Og(n);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);return s?s.trim():Ha(r)?no(r,e,t+1):r}function Bg(n,{...e},t){const i=n.current;if(!(i instanceof Element))return{target:e,transitionEnd:t};t&&(t={...t}),n.values.forEach(r=>{const s=r.get();if(!Ha(s))return;const a=no(s,i);a&&r.set(a)});for(const r in e){const s=e[r];if(!Ha(s))continue;const a=no(s,i);a&&(e[r]=a,t||(t={}),t[r]===void 0&&(t[r]=s))}return{target:e,transitionEnd:t}}const Vg=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Th=n=>Vg.has(n),kg=n=>Object.keys(n).some(Th),Zc=n=>n===pi||n===Ce,Jc=(n,e)=>parseFloat(n.split(", ")[e]),Qc=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return Jc(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?Jc(s[1],n):0}},zg=new Set(["x","y","z"]),Gg=Er.filter(n=>!zg.has(n));function Hg(n){const e=[];return Gg.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e.length&&n.render(),e}const eu={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Qc(4,13),y:Qc(5,14)},Wg=(n,e,t)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:a}=s,o={};a==="none"&&e.setStaticValue("display",n.display||"block"),t.forEach(c=>{o[c]=eu[c](i,s)}),e.render();const l=e.measureViewportBox();return t.forEach(c=>{const u=e.getValue(c);u&&u.jump(o[c]),n[c]=eu[c](l,s)}),n},Xg=(n,e,t={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(Th);let s=[],a=!1;const o=[];if(r.forEach(l=>{const c=n.getValue(l);if(!n.hasValue(l))return;let u=t[l],f=Ji(u);const h=e[l];let d;if(ys(h)){const m=h.length,x=h[0]===null?1:0;u=h[x],f=Ji(u);for(let g=x;g<m&&h[g]!==null;g++)d?ll(Ji(h[g])===d):d=Ji(h[g])}else d=Ji(h);if(f!==d)if(Zc(f)&&Zc(d)){const m=c.get();typeof m=="string"&&c.set(parseFloat(m)),typeof h=="string"?e[l]=parseFloat(h):Array.isArray(h)&&d===Ce&&(e[l]=h.map(parseFloat))}else f!=null&&f.transform&&(d!=null&&d.transform)&&(u===0||h===0)?u===0?c.set(d.transform(u)):e[l]=f.transform(h):(a||(s=Hg(n),a=!0),o.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(h))}),o.length){const l=o.indexOf("height")>=0?window.pageYOffset:null,c=Wg(e,n,o);return s.length&&s.forEach(([u,f])=>{n.getValue(u).set(f)}),n.render(),Ls&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function jg(n,e,t,i){return kg(e)?Xg(n,e,t,i):{target:e,transitionEnd:i}}const qg=(n,e,t,i)=>{const r=Bg(n,e,i);return e=r.target,i=r.transitionEnd,jg(n,e,t,i)},io={current:null},Ah={current:!1};function Yg(){if(Ah.current=!0,!!Ls)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>io.current=n.matches;n.addListener(e),e()}else io.current=!1}function $g(n,e,t){const{willChange:i}=e;for(const r in e){const s=e[r],a=t[r];if(Ft(s))n.addValue(r,s),Es(i)&&i.add(r);else if(Ft(a))n.addValue(r,zi(s,{owner:n})),Es(i)&&i.remove(r);else if(a!==s)if(n.hasValue(r)){const o=n.getValue(r);!o.hasAnimated&&o.set(s)}else{const o=n.getStaticValue(r);n.addValue(r,zi(o!==void 0?o:s,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const tu=new WeakMap,wh=Object.keys(gr),Kg=wh.length,nu=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Zg=Qo.length;class Jg{constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:r,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ft.render(this.render,!1,!0);const{latestValues:o,renderState:l}=s;this.latestValues=o,this.baseTarget={...o},this.initialValues=t.initial?{...o}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=Is(t),this.isVariantNode=ff(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(t,{});for(const f in u){const h=u[f];o[f]!==void 0&&Ft(h)&&(h.set(o[f],!1),Es(c)&&c.add(f))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,tu.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),Ah.current||Yg(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:io.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){tu.delete(this.current),this.projection&&this.projection.unmount(),En(this.notifyUpdate),En(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const i=di.has(e),r=t.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ft.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...t},i,r,s){let a,o;for(let l=0;l<Kg;l++){const c=wh[l],{isEnabled:u,Feature:f,ProjectionNode:h,MeasureLayout:d}=gr[c];h&&(a=h),u(t)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),d&&(o=d))}if(!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:f,layoutScroll:h,layoutRoot:d}=t;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||f&&Ui(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:h,layoutRoot:d})}return o}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):_t()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e,t=!0){return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<nu.length;i++){const r=nu[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=$g(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const t={};for(let i=0;i<Zg;i++){const r=Qo[i],s=this.props[r];(mr(s)||s===!1)&&(t[r]=s)}return t}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=zi(t,{owner:this}),this.addValue(e,i)),i}readValue(e){return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(t=ol(this.props,i))===null||t===void 0?void 0:t[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Ft(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new gl),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class Ch extends Jg{sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:t,...i},{transformValues:r},s){let a=_0(i,e||{},this);if(r&&(t&&(t=r(t)),i&&(i=r(i)),a&&(a=r(a))),s){g0(this,i,a);const o=qg(this,i,a,t);t=o.transitionEnd,i=o.target}return{transition:e,transitionEnd:t,...i}}}function Qg(n){return window.getComputedStyle(n)}class ex extends Ch{readValueFromInstance(e,t){if(di.has(t)){const i=hl(t);return i&&i.default||0}else{const i=Qg(e),r=(gf(t)?i.getPropertyValue(t):i[t])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return xh(e,t)}build(e,t,i,r){tl(e,t,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return al(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ft(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}renderInstance(e,t,i,r){bf(e,t,i,r)}}class tx extends Ch{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(di.has(t)){const i=hl(t);return i&&i.default||0}return t=Mf.has(t)?t:sl(t),e.getAttribute(t)}measureInstanceViewportBox(){return _t()}scrapeMotionValuesFromProps(e,t){return Tf(e,t)}build(e,t,i,r){il(e,t,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,i,r){Ef(e,t,i,r)}mount(e){this.isSVGTag=rl(e.tagName),super.mount(e)}}const nx=(n,e)=>el(n)?new tx(e,{enableHardwareAcceleration:!1}):new ex(e,{enableHardwareAcceleration:!0}),ix={layout:{ProjectionNode:Eh,MeasureLayout:_h}},rx={...D0,...Qp,...Fg,...ix},AM=ap((n,e)=>Np(n,e,rx,nx));try{self["workbox:window:7.3.0"]&&_()}catch{}function ro(n,e){return new Promise((function(t){var i=new MessageChannel;i.port1.onmessage=function(r){t(r.data)},n.postMessage(e,[i.port2])}))}function iu(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function sx(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,ox(i.key),i)}}function ax(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=(function(r,s){if(r){if(typeof r=="string")return iu(r,s);var a={}.toString.call(r).slice(8,-1);return a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set"?Array.from(r):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?iu(r,s):void 0}})(n))||e){t&&(n=t);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function so(n,e){return so=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},so(n,e)}function ox(n){var e=(function(t,i){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)})(n,"string");return typeof e=="symbol"?e:e+""}try{self["workbox:core:7.3.0"]&&_()}catch{}var ca=function(){var n=this;this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))};function ua(n,e){var t=location.href;return new URL(n,t).href===new URL(e,t).href}var Ii=function(n,e){this.type=n,Object.assign(this,e)};function Rn(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function lx(){}var cx={type:"SKIP_WAITING"};function ru(n,e){return n&&n.then?n.then(lx):Promise.resolve()}var ux=(function(n){function e(s,a){var o,l;return a===void 0&&(a={}),(o=n.call(this)||this).nn={},o.tn=0,o.rn=new ca,o.en=new ca,o.on=new ca,o.un=0,o.an=new Set,o.cn=function(){var c=o.fn,u=c.installing;o.tn>0||!ua(u.scriptURL,o.sn.toString())||performance.now()>o.un+6e4?(o.vn=u,c.removeEventListener("updatefound",o.cn)):(o.hn=u,o.an.add(u),o.rn.resolve(u)),++o.tn,u.addEventListener("statechange",o.ln)},o.ln=function(c){var u=o.fn,f=c.target,h=f.state,d=f===o.vn,m={sw:f,isExternal:d,originalEvent:c};!d&&o.mn&&(m.isUpdate=!0),o.dispatchEvent(new Ii(h,m)),h==="installed"?o.wn=self.setTimeout((function(){h==="installed"&&u.waiting===f&&o.dispatchEvent(new Ii("waiting",m))}),200):h==="activating"&&(clearTimeout(o.wn),d||o.en.resolve(f))},o.yn=function(c){var u=o.hn,f=u!==navigator.serviceWorker.controller;o.dispatchEvent(new Ii("controlling",{isExternal:f,originalEvent:c,sw:u,isUpdate:o.mn})),f||o.on.resolve(u)},o.gn=(l=function(c){var u=c.data,f=c.ports,h=c.source;return Rn(o.getSW(),(function(){o.an.has(h)&&o.dispatchEvent(new Ii("message",{data:u,originalEvent:c,ports:f,sw:h}))}))},function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];try{return Promise.resolve(l.apply(this,c))}catch(f){return Promise.reject(f)}}),o.sn=s,o.nn=a,navigator.serviceWorker.addEventListener("message",o.gn),o}var t,i;i=n,(t=e).prototype=Object.create(i.prototype),t.prototype.constructor=t,so(t,i);var r=e.prototype;return r.register=function(s){var a=(s===void 0?{}:s).immediate,o=a!==void 0&&a;try{var l=this;return Rn((function(c,u){var f=c();return f&&f.then?f.then(u):u(f)})((function(){if(!o&&document.readyState!=="complete")return ru(new Promise((function(c){return window.addEventListener("load",c)})))}),(function(){return l.mn=!!navigator.serviceWorker.controller,l.dn=l.pn(),Rn(l.bn(),(function(c){l.fn=c,l.dn&&(l.hn=l.dn,l.en.resolve(l.dn),l.on.resolve(l.dn),l.dn.addEventListener("statechange",l.ln,{once:!0}));var u=l.fn.waiting;return u&&ua(u.scriptURL,l.sn.toString())&&(l.hn=u,Promise.resolve().then((function(){l.dispatchEvent(new Ii("waiting",{sw:u,wasWaitingBeforeRegister:!0}))})).then((function(){}))),l.hn&&(l.rn.resolve(l.hn),l.an.add(l.hn)),l.fn.addEventListener("updatefound",l.cn),navigator.serviceWorker.addEventListener("controllerchange",l.yn),l.fn}))})))}catch(c){return Promise.reject(c)}},r.update=function(){try{return this.fn?Rn(ru(this.fn.update())):Rn()}catch(s){return Promise.reject(s)}},r.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},r.messageSW=function(s){try{return Rn(this.getSW(),(function(a){return ro(a,s)}))}catch(a){return Promise.reject(a)}},r.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&ro(this.fn.waiting,cx)},r.pn=function(){var s=navigator.serviceWorker.controller;return s&&ua(s.scriptURL,this.sn.toString())?s:void 0},r.bn=function(){try{var s=this;return Rn((function(a,o){try{var l=a()}catch(c){return o(c)}return l&&l.then?l.then(void 0,o):l})((function(){return Rn(navigator.serviceWorker.register(s.sn,s.nn),(function(a){return s.un=performance.now(),a}))}),(function(a){throw a})))}catch(a){return Promise.reject(a)}},(function(s,a,o){return a&&sx(s.prototype,a),Object.defineProperty(s,"prototype",{writable:!1}),s})(e,[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])})((function(){function n(){this.Pn=new Map}var e=n.prototype;return e.addEventListener=function(t,i){this.jn(t).add(i)},e.removeEventListener=function(t,i){this.jn(t).delete(i)},e.dispatchEvent=function(t){t.target=this;for(var i,r=ax(this.jn(t.type));!(i=r()).done;)(0,i.value)(t)},e.jn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},n})());const wM=Object.freeze(Object.defineProperty({__proto__:null,Workbox:ux,WorkboxEvent:Ii,messageSW:ro},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="181",fx=0,su=1,hx=2,Rh=1,dx=2,mn=3,Wn=0,It=1,gn=2,bn=0,Vi=1,au=2,ou=3,lu=4,px=5,si=100,mx=101,gx=102,xx=103,_x=104,vx=200,yx=201,Sx=202,bx=203,ao=204,oo=205,Mx=206,Ex=207,Tx=208,Ax=209,wx=210,Cx=211,Rx=212,Px=213,Lx=214,lo=0,co=1,uo=2,Gi=3,fo=4,ho=5,po=6,mo=7,Ph=0,Dx=1,Ix=2,zn=0,Ux=1,Fx=2,Nx=3,Ox=4,Bx=5,Vx=6,kx=7,Lh=300,Hi=301,Wi=302,go=303,xo=304,Bs=306,_o=1e3,_n=1001,vo=1002,zt=1003,zx=1004,Vr=1005,qt=1006,fa=1007,li=1008,Tn=1009,Dh=1010,Ih=1011,vr=1012,_l=1013,fi=1014,vn=1015,qi=1016,vl=1017,yl=1018,yr=1020,Uh=35902,Fh=35899,Nh=1021,Oh=1022,en=1023,Sr=1026,br=1027,Bh=1028,Sl=1029,bl=1030,Ml=1031,El=1033,us=33776,fs=33777,hs=33778,ds=33779,yo=35840,So=35841,bo=35842,Mo=35843,Eo=36196,To=37492,Ao=37496,wo=37808,Co=37809,Ro=37810,Po=37811,Lo=37812,Do=37813,Io=37814,Uo=37815,Fo=37816,No=37817,Oo=37818,Bo=37819,Vo=37820,ko=37821,zo=36492,Go=36494,Ho=36495,Wo=36283,Xo=36284,jo=36285,qo=36286,Gx=3200,Hx=3201,Wx=0,Xx=1,Bn="",jt="srgb",Xi="srgb-linear",As="linear",et="srgb",vi=7680,cu=519,jx=512,qx=513,Yx=514,Vh=515,$x=516,Kx=517,Zx=518,Jx=519,uu=35044,fu="300 es",an=2e3,ws=2001;function kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qx(){const n=Cs("canvas");return n.style.display="block",n}const hu={};function du(...n){const e="THREE."+n.shift();console.log(e,...n)}function Be(...n){const e="THREE."+n.shift();console.warn(e,...n)}function pt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Mr(...n){const e=n.join(" ");e in hu||(hu[e]=!0,Be(...n))}function e_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,Yo=180/Math.PI;function Cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function t_(n,e){return(n%e+e)%e}function da(n,e,t){return(1-t)*n+t*e}function er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],m=s[a+2],x=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(f!==x||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*x;g<0&&(h=-h,d=-d,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){const E=Math.acos(g),b=Math.sin(E);p=Math.sin(p*E)/b,o=Math.sin(o*E)/b,l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+x*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+x*o;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-o*d,e[t+2]=c*m+u*d+o*h-l*f,e[t+3]=u*m-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new W,pu=new Rr;class Ve{constructor(e,t,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],x=r[0],g=r[3],p=r[6],E=r[1],b=r[4],T=r[7],C=r[2],A=r[5],R=r[8];return s[0]=a*x+o*E+l*C,s[3]=a*g+o*b+l*A,s[6]=a*p+o*T+l*R,s[1]=c*x+u*E+f*C,s[4]=c*g+u*b+f*A,s[7]=c*p+u*T+f*R,s[2]=h*x+d*E+m*C,s[5]=h*g+d*b+m*A,s[8]=h*p+d*T+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,m=t*f+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Ve,mu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n_(){const n={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=Mn(r.r),r.g=Mn(r.g),r.b=Mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?As:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xi]:{primaries:e,whitePoint:i,transfer:As,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}const Ke=n_();function Mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yi;class i_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yi===void 0&&(yi=Cs("canvas")),yi.width=e.width,yi.height=e.height;const r=yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mn(t[i]/255)*255):t[i]=Mn(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r_=0;class Tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ga(r[a].image)):s.push(ga(r[a]))}else s=ga(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?i_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let s_=0;const xa=new W;class At extends Yi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=_n,r=_n,s=qt,a=li,o=en,l=Tn,c=At.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Cr(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Lh;At.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,T=(d+1)/2,C=(p+1)/2,A=(u+h)/4,R=(f+x)/4,U=(m+g)/4;return b>T&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=R/i):T>C?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=A/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=U/s),this.set(i,r,s,t),this}let E=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(f-x)/E,this.z=(h-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a_ extends Yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new At(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Tl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends a_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zh extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o_ extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),zr.subVectors(this.max,tr),Si.subVectors(e.a,tr),bi.subVectors(e.b,tr),Mi.subVectors(e.c,tr),Pn.subVectors(bi,Si),Ln.subVectors(Mi,bi),Kn.subVectors(Si,Mi);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Kn.z,Kn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Kn.z,0,-Kn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Kn.y,Kn.x,0];return!_a(t,Si,bi,Mi,zr)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Si,bi,Mi,zr))?!1:(Gr.crossVectors(Pn,Ln),t=[Gr.x,Gr.y,Gr.z],_a(t,Si,bi,Mi,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cn=[new W,new W,new W,new W,new W,new W,new W,new W],$t=new W,kr=new Pr,Si=new W,bi=new W,Mi=new W,Pn=new W,Ln=new W,Kn=new W,tr=new W,zr=new W,Gr=new W,Zn=new W;function _a(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zn.fromArray(n,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const l_=new Pr,nr=new W,va=new W;class Vs{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):l_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(nr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(va)),this.expandByPoint(nr.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const un=new W,ya=new W,Hr=new W,Dn=new W,Sa=new W,Wr=new W,ba=new W;class Gh{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ya.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(ya);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),o=Dn.dot(this.direction),l=-Dn.dot(Hr),c=Dn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,m;if(u>0)if(f=a*l-o,h=a*o-l,m=s*u,f>=0)if(h>=-m)if(h<=m){const x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ya).addScaledVector(Hr,h),d}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),r=un.dot(un)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,s){Sa.subVectors(t,e),Wr.subVectors(i,e),ba.crossVectors(Sa,Wr);let a=this.direction.dot(ba),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const l=o*this.direction.dot(Wr.crossVectors(Dn,Wr));if(l<0)return null;const c=o*this.direction.dot(Sa.cross(Dn));if(c<0||l+c>a)return null;const u=-o*Dn.dot(ba);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,m,x,g){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,m,x,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,m=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,m=c*u,x=c*f;t[0]=h+x*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,m=c*u,x=c*f;t[0]=h-x*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,m=o*u,x=o*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=x-h*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,u_)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),In.crossVectors(i,Vt),In.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),In.crossVectors(i,Vt)),In.normalize(),Xr.crossVectors(Vt,In),r[0]=In.x,r[4]=Xr.x,r[8]=Vt.x,r[1]=In.y,r[5]=Xr.y,r[9]=Vt.y,r[2]=In.z,r[6]=Xr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],E=i[3],b=i[7],T=i[11],C=i[15],A=r[0],R=r[4],U=r[8],M=r[12],y=r[1],D=r[5],B=r[9],V=r[13],k=r[2],X=r[6],H=r[10],te=r[14],I=r[3],j=r[7],$=r[11],Z=r[15];return s[0]=a*A+o*y+l*k+c*I,s[4]=a*R+o*D+l*X+c*j,s[8]=a*U+o*B+l*H+c*$,s[12]=a*M+o*V+l*te+c*Z,s[1]=u*A+f*y+h*k+d*I,s[5]=u*R+f*D+h*X+d*j,s[9]=u*U+f*B+h*H+d*$,s[13]=u*M+f*V+h*te+d*Z,s[2]=m*A+x*y+g*k+p*I,s[6]=m*R+x*D+g*X+p*j,s[10]=m*U+x*B+g*H+p*$,s[14]=m*M+x*V+g*te+p*Z,s[3]=E*A+b*y+T*k+C*I,s[7]=E*R+b*D+T*X+C*j,s[11]=E*U+b*B+T*H+C*$,s[15]=E*M+b*V+T*te+C*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+x*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+g*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],E=f*g*c-x*h*c+x*l*d-o*g*d-f*l*p+o*h*p,b=m*h*c-u*g*c-m*l*d+a*g*d+u*l*p-a*h*p,T=u*x*c-m*f*c+m*o*d-a*x*d-u*o*p+a*f*p,C=m*f*l-u*x*l-m*o*h+a*x*h+u*o*g-a*f*g,A=t*E+i*b+r*T+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=E*R,e[1]=(x*h*s-f*g*s-x*r*d+i*g*d+f*r*p-i*h*p)*R,e[2]=(o*g*s-x*l*s+x*r*c-i*g*c-o*r*p+i*l*p)*R,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*R,e[4]=b*R,e[5]=(u*g*s-m*h*s+m*r*d-t*g*d-u*r*p+t*h*p)*R,e[6]=(m*l*s-a*g*s-m*r*c+t*g*c+a*r*p-t*l*p)*R,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*R,e[8]=T*R,e[9]=(m*f*s-u*x*s-m*i*d+t*x*d+u*i*p-t*f*p)*R,e[10]=(a*x*s-m*o*s+m*i*c-t*x*c-a*i*p+t*o*p)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*R,e[12]=C*R,e[13]=(u*x*r-m*f*r+m*i*h-t*x*h-u*i*g+t*f*g)*R,e[14]=(m*o*r-a*x*r-m*i*l+t*x*l+a*i*g-t*o*g)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,m=s*f,x=a*u,g=a*f,p=o*f,E=l*c,b=l*u,T=l*f,C=i.x,A=i.y,R=i.z;return r[0]=(1-(x+p))*C,r[1]=(d+T)*C,r[2]=(m-b)*C,r[3]=0,r[4]=(d-T)*A,r[5]=(1-(h+p))*A,r[6]=(g+E)*A,r[7]=0,r[8]=(m+b)*R,r[9]=(g-E)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ei.set(r[0],r[1],r[2]).length();const a=Ei.set(r[4],r[5],r[6]).length(),o=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/s,u=1/a,f=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,t.setFromRotationMatrix(Kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=an,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===an)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ws)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=an,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===an)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===ws)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ei=new W,Kt=new vt,c_=new W(0,0,0),u_=new W(1,1,1),In=new W,Xr=new W,Vt=new W,xu=new vt,_u=new Rr;class An{constructor(e=0,t=0,i=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _u.setFromEuler(this),this.setFromQuaternion(_u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let f_=0;const vu=new W,Ti=new Rr,fn=new vt,jr=new W,ir=new W,h_=new W,d_=new Rr,yu=new W(1,0,0),Su=new W(0,1,0),bu=new W(0,0,1),Mu={type:"added"},p_={type:"removed"},Ai={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Ut extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new W,t=new An,i=new Rr,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(yu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return vu.copy(e).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ir,jr,this.up):fn.lookAt(jr,ir,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(fn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p_),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,h_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,d_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new W(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new W,hn=new W,Ea=new W,dn=new W,wi=new W,Ci=new W,Eu=new W,Ta=new W,Aa=new W,wa=new W,Ca=new mt,Ra=new mt,Pa=new mt;class Qt{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zt.subVectors(e,t),r.cross(Zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zt.subVectors(r,t),hn.subVectors(i,t),Ea.subVectors(e,t);const a=Zt.dot(Zt),o=Zt.dot(hn),l=Zt.dot(Ea),c=hn.dot(hn),u=hn.dot(Ea),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,m=(a*u-o*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ca.setScalar(0),Ra.setScalar(0),Pa.setScalar(0),Ca.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,i),Pa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ca,s.x),a.addScaledVector(Ra,s.y),a.addScaledVector(Pa,s.z),a}static isFrontFacing(e,t,i,r){return Zt.subVectors(i,t),hn.subVectors(e,t),Zt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Zt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;wi.subVectors(r,i),Ci.subVectors(s,i),Ta.subVectors(e,i);const l=wi.dot(Ta),c=Ci.dot(Ta);if(l<=0&&c<=0)return t.copy(i);Aa.subVectors(e,r);const u=wi.dot(Aa),f=Ci.dot(Aa);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(wi,a);wa.subVectors(e,s);const d=wi.dot(wa),m=Ci.dot(wa);if(m>=0&&d<=m)return t.copy(s);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Ci,o);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Eu.subVectors(s,r),o=(f-u)/(f-u+(d-m)),t.copy(r).addScaledVector(Eu,o);const p=1/(g+x+h);return a=x*p,o=h*p,t.copy(i).addScaledVector(wi,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},qr={h:0,s:0,l:0};function La(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=t_(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=La(a,s,e+1/3),this.g=La(a,s,e),this.b=La(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=jt){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=Wh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Ke.workingToColorSpace(Tt.copy(this),e),Math.round(Ye(Tt.r*255,0,255))*65536+Math.round(Ye(Tt.g*255,0,255))*256+Math.round(Ye(Tt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=jt){Ke.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(qr);const i=da(Un.h,qr.h,t),r=da(Un.s,qr.s,t),s=da(Un.l,qr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ze;Ze.NAMES=Wh;let m_=0;class Lr extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Vi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ao&&(i.blendSrc=this.blendSrc),this.blendDst!==oo&&(i.blendDst=this.blendDst),this.blendEquation!==si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xh extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new W,Yr=new tt;let g_=0;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uu,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uu&&(e.usage=this.usage),e}}class jh extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qh extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ui extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let x_=0;const Xt=new vt,Da=new Ut,Ri=new W,kt=new Pr,rr=new Pr,bt=new W;class Cn extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?qh:jh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ui(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(kt.min,rr.min),kt.expandByPoint(bt),bt.addVectors(kt.max,rr.max),kt.expandByPoint(bt)):(kt.expandByPoint(rr.min),kt.expandByPoint(rr.max))}kt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(e,c),bt.add(Ri)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new W,l[U]=new W;const c=new W,u=new W,f=new W,h=new tt,d=new tt,m=new tt,x=new W,g=new W;function p(U,M,y){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,U),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(D),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(D),o[U].add(x),o[M].add(x),o[y].add(x),l[U].add(g),l[M].add(g),l[y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,M=E.length;U<M;++U){const y=E[U],D=y.start,B=y.count;for(let V=D,k=D+B;V<k;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new W,T=new W,C=new W,A=new W;function R(U){C.fromBufferAttribute(r,U),A.copy(C);const M=o[U];b.copy(M),b.sub(C.multiplyScalar(C.dot(M))).normalize(),T.crossVectors(A,M);const D=T.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,D)}for(let U=0,M=E.length;U<M;++U){const y=E[U],D=y.start,B=y.count;for(let V=D,k=D+B;V<k;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new ln(h,u,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new vt,Jn=new Gh,$r=new Vs,Au=new W,Kr=new W,Zr=new W,Jr=new W,Ia=new W,Qr=new W,wu=new W,es=new W;class Xn extends Ut{constructor(e=new Cn,t=new Xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ia.fromBufferAttribute(f,e),a?Qr.addScaledVector(Ia,u):Qr.addScaledVector(Ia.sub(t),u))}t.add(Qr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!($r.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere($r,Au)===null||Jn.origin.distanceToSquared(Au)>(e.far-e.near)**2))&&(Tu.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(Tu),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],p=a[g.materialIndex],E=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let T=E,C=b;T<C;T+=3){const A=o.getX(T),R=o.getX(T+1),U=o.getX(T+2);r=ts(this,p,e,i,c,u,f,A,R,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const E=o.getX(g),b=o.getX(g+1),T=o.getX(g+2);r=ts(this,a,e,i,c,u,f,E,b,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],p=a[g.materialIndex],E=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let T=E,C=b;T<C;T+=3){const A=T,R=T+1,U=T+2;r=ts(this,p,e,i,c,u,f,A,R,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const E=g,b=g+1,T=g+2;r=ts(this,a,e,i,c,u,f,E,b,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function __(n,e,t,i,r,s,a,o){let l;if(e.side===It?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Wn,o),l===null)return null;es.copy(o),es.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:n}}function ts(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Kr),n.getVertexPosition(l,Zr),n.getVertexPosition(c,Jr);const u=__(n,e,t,i,Kr,Zr,Jr,wu);if(u){const f=new W;Qt.getBarycoord(wu,Kr,Zr,Jr,f),r&&(u.uv=Qt.getInterpolatedAttribute(r,o,l,c,f,new tt)),s&&(u.uv1=Qt.getInterpolatedAttribute(s,o,l,c,f,new tt)),a&&(u.normal=Qt.getInterpolatedAttribute(a,o,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new W,materialIndex:0};Qt.getNormal(Kr,Zr,Jr,h.normal),u.face=h,u.barycoord=f}return u}class Dr extends Cn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(f,2));function m(x,g,p,E,b,T,C,A,R,U,M){const y=T/R,D=C/U,B=T/2,V=C/2,k=A/2,X=R+1,H=U+1;let te=0,I=0;const j=new W;for(let $=0;$<H;$++){const Z=$*D-V;for(let de=0;de<X;de++){const Oe=de*y-B;j[x]=Oe*E,j[g]=Z*b,j[p]=k,c.push(j.x,j.y,j.z),j[x]=0,j[g]=0,j[p]=A>0?1:-1,u.push(j.x,j.y,j.z),f.push(de/R),f.push(1-$/U),te+=1}}for(let $=0;$<U;$++)for(let Z=0;Z<R;Z++){const de=h+Z+X*$,Oe=h+Z+X*($+1),ke=h+(Z+1)+X*($+1),We=h+(Z+1)+X*$;l.push(de,Oe,We),l.push(Oe,ke,We),I+=6}o.addGroup(d,I,M),d+=I,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=ji(n[t]);for(const r in i)e[r]=i[r]}return e}function v_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const y_={clone:ji,merge:Ct};var S_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S_,this.fragmentShader=b_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=v_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $h extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new W,Cu=new tt,Ru=new tt;class Jt extends $h{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,Cu,Ru),t.subVectors(Ru,Cu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Li=1;class M_ extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Pi,Li,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Pi,Li,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Pi,Li,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Pi,Li,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Pi,Li,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Pi,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===an)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Kh extends At{constructor(e=[],t=Hi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E_ extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Dr(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:bn});s.uniforms.tEquirect.value=t;const a=new Xn(r,s),o=t.minFilter;return t.minFilter===li&&(t.minFilter=qt),new M_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class ns extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class CM extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class A_ extends At{constructor(e=null,t=1,i=1,r,s,a,o,l,c=zt,u=zt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fa=new W,w_=new W,C_=new Ve;class ri{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fa.subVectors(i,t).cross(w_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||C_.getNormalMatrix(e),r=this.coplanarPoint(Fa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Vs,R_=new tt(.5,.5),is=new W;class Zh{constructor(e=new ri,t=new ri,i=new ri,r=new ri,s=new ri,a=new ri){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=an,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],E=s[12],b=s[13],T=s[14],C=s[15];if(r[0].setComponents(c-a,d-u,p-m,C-E).normalize(),r[1].setComponents(c+a,d+u,p+m,C+E).normalize(),r[2].setComponents(c+o,d+f,p+x,C+b).normalize(),r[3].setComponents(c-o,d-f,p-x,C-b).normalize(),i)r[4].setComponents(l,h,g,T).normalize(),r[5].setComponents(c-l,d-h,p-g,C-T).normalize();else if(r[4].setComponents(c-l,d-h,p-g,C-T).normalize(),t===an)r[5].setComponents(c+l,d+h,p+g,C+T).normalize();else if(t===ws)r[5].setComponents(l,h,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=R_.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class P_ extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pu=new vt,$o=new Gh,rs=new Vs,ss=new W;class RM extends Ut{constructor(e=new Cn,t=new P_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(r),rs.radius+=s,e.ray.intersectsSphere(rs)===!1)return;Pu.copy(r).invert(),$o.copy(e.ray).applyMatrix4(Pu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=h,x=d;m<x;m++){const g=c.getX(m);ss.fromBufferAttribute(f,g),Lu(ss,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=h,x=d;m<x;m++)ss.fromBufferAttribute(f,m),Lu(ss,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lu(n,e,t,i,r,s,a){const o=$o.distanceSqToPoint(n);if(o<t){const l=new W;$o.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class PM extends At{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jh extends At{constructor(e,t,i=fi,r,s,a,o=zt,l=zt,c,u=Sr,f=1){if(u!==Sr&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qh extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ks extends Cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){const E=p*h-a;for(let b=0;b<c;b++){const T=b*f-s;m.push(T,-E,0),x.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const b=E+c*p,T=E+c*(p+1),C=E+1+c*(p+1),A=E+1+c*p;d.push(b,T,A),d.push(T,C,A)}this.setIndex(d),this.setAttribute("position",new ui(m,3)),this.setAttribute("normal",new ui(x,3)),this.setAttribute("uv",new ui(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.widthSegments,e.heightSegments)}}class L_ extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D_ extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class I_ extends $h{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class U_ extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Du(n,e,t,i){const r=F_(i);switch(t){case Nh:return n*e;case Bh:return n*e/r.components*r.byteLength;case Sl:return n*e/r.components*r.byteLength;case bl:return n*e*2/r.components*r.byteLength;case Ml:return n*e*2/r.components*r.byteLength;case Oh:return n*e*3/r.components*r.byteLength;case en:return n*e*4/r.components*r.byteLength;case El:return n*e*4/r.components*r.byteLength;case us:case fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hs:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case So:case Mo:return Math.max(n,16)*Math.max(e,8)/4;case yo:case bo:return Math.max(n,8)*Math.max(e,8)/2;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Io:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zo:case Go:case Ho:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wo:case Xo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jo:case qo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function F_(n){switch(n){case Tn:case Dh:return{byteLength:1,components:1};case vr:case Ih:case qi:return{byteLength:2,components:1};case vl:case yl:return{byteLength:2,components:4};case fi:case _l:case vn:return{byteLength:4,components:1};case Uh:case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ed(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function N_(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const x=f[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var O_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,j_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,av=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ov=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ev=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,my=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_y=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,by=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,My=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ty=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ay=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ly=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Oy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:O_,alphahash_pars_fragment:B_,alphamap_fragment:V_,alphamap_pars_fragment:k_,alphatest_fragment:z_,alphatest_pars_fragment:G_,aomap_fragment:H_,aomap_pars_fragment:W_,batching_pars_vertex:X_,batching_vertex:j_,begin_vertex:q_,beginnormal_vertex:Y_,bsdfs:$_,iridescence_fragment:K_,bumpmap_pars_fragment:Z_,clipping_planes_fragment:J_,clipping_planes_pars_fragment:Q_,clipping_planes_pars_vertex:ev,clipping_planes_vertex:tv,color_fragment:nv,color_pars_fragment:iv,color_pars_vertex:rv,color_vertex:sv,common:av,cube_uv_reflection_fragment:ov,defaultnormal_vertex:lv,displacementmap_pars_vertex:cv,displacementmap_vertex:uv,emissivemap_fragment:fv,emissivemap_pars_fragment:hv,colorspace_fragment:dv,colorspace_pars_fragment:pv,envmap_fragment:mv,envmap_common_pars_fragment:gv,envmap_pars_fragment:xv,envmap_pars_vertex:_v,envmap_physical_pars_fragment:Rv,envmap_vertex:vv,fog_vertex:yv,fog_pars_vertex:Sv,fog_fragment:bv,fog_pars_fragment:Mv,gradientmap_pars_fragment:Ev,lightmap_pars_fragment:Tv,lights_lambert_fragment:Av,lights_lambert_pars_fragment:wv,lights_pars_begin:Cv,lights_toon_fragment:Pv,lights_toon_pars_fragment:Lv,lights_phong_fragment:Dv,lights_phong_pars_fragment:Iv,lights_physical_fragment:Uv,lights_physical_pars_fragment:Fv,lights_fragment_begin:Nv,lights_fragment_maps:Ov,lights_fragment_end:Bv,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:kv,logdepthbuf_pars_vertex:zv,logdepthbuf_vertex:Gv,map_fragment:Hv,map_pars_fragment:Wv,map_particle_fragment:Xv,map_particle_pars_fragment:jv,metalnessmap_fragment:qv,metalnessmap_pars_fragment:Yv,morphinstance_vertex:$v,morphcolor_vertex:Kv,morphnormal_vertex:Zv,morphtarget_pars_vertex:Jv,morphtarget_vertex:Qv,normal_fragment_begin:ey,normal_fragment_maps:ty,normal_pars_fragment:ny,normal_pars_vertex:iy,normal_vertex:ry,normalmap_pars_fragment:sy,clearcoat_normal_fragment_begin:ay,clearcoat_normal_fragment_maps:oy,clearcoat_pars_fragment:ly,iridescence_pars_fragment:cy,opaque_fragment:uy,packing:fy,premultiplied_alpha_fragment:hy,project_vertex:dy,dithering_fragment:py,dithering_pars_fragment:my,roughnessmap_fragment:gy,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:_y,shadowmap_pars_vertex:vy,shadowmap_vertex:yy,shadowmask_pars_fragment:Sy,skinbase_vertex:by,skinning_pars_vertex:My,skinning_vertex:Ey,skinnormal_vertex:Ty,specularmap_fragment:Ay,specularmap_pars_fragment:wy,tonemapping_fragment:Cy,tonemapping_pars_fragment:Ry,transmission_fragment:Py,transmission_pars_fragment:Ly,uv_pars_fragment:Dy,uv_pars_vertex:Iy,uv_vertex:Uy,worldpos_vertex:Fy,background_vert:Ny,background_frag:Oy,backgroundCube_vert:By,backgroundCube_frag:Vy,cube_vert:ky,cube_frag:zy,depth_vert:Gy,depth_frag:Hy,distanceRGBA_vert:Wy,distanceRGBA_frag:Xy,equirect_vert:jy,equirect_frag:qy,linedashed_vert:Yy,linedashed_frag:$y,meshbasic_vert:Ky,meshbasic_frag:Zy,meshlambert_vert:Jy,meshlambert_frag:Qy,meshmatcap_vert:eS,meshmatcap_frag:tS,meshnormal_vert:nS,meshnormal_frag:iS,meshphong_vert:rS,meshphong_frag:sS,meshphysical_vert:aS,meshphysical_frag:oS,meshtoon_vert:lS,meshtoon_frag:cS,points_vert:uS,points_frag:fS,shadow_vert:hS,shadow_frag:dS,sprite_vert:pS,sprite_frag:mS},le={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},rn={basic:{uniforms:Ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ct([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ct([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ct([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ct([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ct([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ct([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ct([le.common,le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ct([le.lights,le.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};rn.physical={uniforms:Ct([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const as={r:0,b:0,g:0},ei=new An,gS=new vt;function xS(n,e,t,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function m(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?t:e).get(T)),T}function x(b){let T=!1;const C=m(b);C===null?p(o,l):C&&C.isColor&&(p(C,1),T=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,T){const C=m(T);C&&(C.isCubeTexture||C.mapping===Bs)?(u===void 0&&(u=new Xn(new Dr(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ji(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ei.copy(T.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gS.makeRotationFromEuler(ei)),u.material.toneMapped=Ke.getTransfer(C.colorSpace)!==et,(f!==C||h!==C.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Xn(new ks(2,2),new wn({name:"BackgroundMaterial",uniforms:ji(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(C.colorSpace)!==et,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,T){b.getRGB(as,Yh(n)),i.buffers.color.setClear(as.r,as.g,as.b,T,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:g,dispose:E}}function _S(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(y,D,B,V,k){let X=!1;const H=f(V,B,D);s!==H&&(s=H,c(s.object)),X=d(y,V,B,k),X&&m(y,V,B,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,T(y,D,B,V),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,D,B){const V=B.wireframe===!0;let k=i[y.id];k===void 0&&(k={},i[y.id]=k);let X=k[D.id];X===void 0&&(X={},k[D.id]=X);let H=X[V];return H===void 0&&(H=h(l()),X[V]=H),H}function h(y){const D=[],B=[],V=[];for(let k=0;k<t;k++)D[k]=0,B[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:V,object:y,attributes:{},index:null}}function d(y,D,B,V){const k=s.attributes,X=D.attributes;let H=0;const te=B.getAttributes();for(const I in te)if(te[I].location>=0){const $=k[I];let Z=X[I];if(Z===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),$===void 0||$.attribute!==Z||Z&&$.data!==Z.data)return!0;H++}return s.attributesNum!==H||s.index!==V}function m(y,D,B,V){const k={},X=D.attributes;let H=0;const te=B.getAttributes();for(const I in te)if(te[I].location>=0){let $=X[I];$===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const Z={};Z.attribute=$,$&&$.data&&(Z.data=$.data),k[I]=Z,H++}s.attributes=k,s.attributesNum=H,s.index=V}function x(){const y=s.newAttributes;for(let D=0,B=y.length;D<B;D++)y[D]=0}function g(y){p(y,0)}function p(y,D){const B=s.newAttributes,V=s.enabledAttributes,k=s.attributeDivisors;B[y]=1,V[y]===0&&(n.enableVertexAttribArray(y),V[y]=1),k[y]!==D&&(n.vertexAttribDivisor(y,D),k[y]=D)}function E(){const y=s.newAttributes,D=s.enabledAttributes;for(let B=0,V=D.length;B<V;B++)D[B]!==y[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function b(y,D,B,V,k,X,H){H===!0?n.vertexAttribIPointer(y,D,B,k,X):n.vertexAttribPointer(y,D,B,V,k,X)}function T(y,D,B,V){x();const k=V.attributes,X=B.getAttributes(),H=D.defaultAttributeValues;for(const te in X){const I=X[te];if(I.location>=0){let j=k[te];if(j===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const $=j.normalized,Z=j.itemSize,de=e.get(j);if(de===void 0)continue;const Oe=de.buffer,ke=de.type,We=de.bytesPerElement,Y=ke===n.INT||ke===n.UNSIGNED_INT||j.gpuType===_l;if(j.isInterleavedBufferAttribute){const J=j.data,pe=J.stride,Le=j.offset;if(J.isInstancedInterleavedBuffer){for(let ve=0;ve<I.locationSize;ve++)p(I.location+ve,J.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<I.locationSize;ve++)g(I.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ve=0;ve<I.locationSize;ve++)b(I.location+ve,Z/I.locationSize,ke,$,pe*We,(Le+Z/I.locationSize*ve)*We,Y)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<I.locationSize;J++)p(I.location+J,j.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<I.locationSize;J++)g(I.location+J);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let J=0;J<I.locationSize;J++)b(I.location+J,Z/I.locationSize,ke,$,Z*We,Z/I.locationSize*J*We,Y)}}else if(H!==void 0){const $=H[te];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(I.location,$);break;case 3:n.vertexAttrib3fv(I.location,$);break;case 4:n.vertexAttrib4fv(I.location,$);break;default:n.vertexAttrib1fv(I.location,$)}}}}E()}function C(){U();for(const y in i){const D=i[y];for(const B in D){const V=D[B];for(const k in V)u(V[k].object),delete V[k];delete D[B]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const B in D){const V=D[B];for(const k in V)u(V[k].object),delete V[k];delete D[B]}delete i[y.id]}function R(y){for(const D in i){const B=i[D];if(B[y.id]===void 0)continue;const V=B[y.id];for(const k in V)u(V[k].object),delete V[k];delete B[y.id]}}function U(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:E}}function vS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x]*h[x];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==en&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vn&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:T,vertexTextures:C,maxSamples:A}}function SS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ri,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const E=s?0:i,b=E*4;let T=p.clippingState||null;l.value=T,T=u(m,h,b,d);for(let C=0;C!==b;++C)T[C]=t[C];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=d+x*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,T=d;b!==x;++b,T+=4)a.copy(f[b]).applyMatrix4(E,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function bS(n){let e=new WeakMap;function t(a,o){return o===go?a.mapping=Hi:o===xo&&(a.mapping=Wi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===go||o===xo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new E_(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Vn=4,Iu=[.125,.215,.35,.446,.526,.582],ai=20,MS=256,sr=new I_,Uu=new Ze;let Na=null,Oa=0,Ba=0,Va=!1;const ES=new W;class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=ES}=s;Na=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Oa,Ba),this._renderer.xr.enabled=Va,e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:qi,format:en,colorSpace:Xi,depthBuffer:!1},r=Nu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TS(s)),this._blurMaterial=wS(s,e,t),this._ggxMaterial=AS(s,e,t)}return r}_compileMaterial(e){const t=new Xn(new Cn,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,i,r,s){const l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Uu),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new Dr,new Xh({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,p=!0):(g.color.copy(Uu),p=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):T===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const C=this._cubeSize;Di(r,T*C,b>2?C:0,C,C),f.setRenderTarget(r),p&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hi||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Di(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,sr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,d=f*h,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-Vn?i-m+Vn:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Di(s,g,p,3*x,2*x),r.setRenderTarget(s),r.render(o,sr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Di(e,g,p,3*x,2*x),r.setRenderTarget(e),r.render(o,sr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ai-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):ai;g>ai&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ai}`);const p=[];let E=0;for(let R=0;R<ai;++R){const U=R/x,M=Math.exp(-U*U/2);p.push(M),R===0?E+=M:R<g&&(E+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=m,h.mipInt.value=b-i;const T=this._sizeLods[r],C=3*T*(r>b-Vn?r-b+Vn:0),A=4*(this._cubeSize-T);Di(t,C,A,3*T,2*T),l.setRenderTarget(t),l.render(f,sr)}}function TS(n){const e=[],t=[],i=[];let r=n;const s=n-Vn+1+Iu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Vn?l=Iu[a-n+Vn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,x=3,g=2,p=1,E=new Float32Array(x*m*d),b=new Float32Array(g*m*d),T=new Float32Array(p*m*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,U=A>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];E.set(M,x*m*A),b.set(h,g*m*A);const y=[A,A,A,A,A,A];T.set(y,p*m*A)}const C=new Cn;C.setAttribute("position",new ln(E,x)),C.setAttribute("uv",new ln(b,g)),C.setAttribute("faceIndex",new ln(T,p)),i.push(new Xn(C,null)),r>Vn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Nu(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=Bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Di(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AS(n,e,t){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function wS(n,e,t){const i=new Float32Array(ai),r=new W(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ou(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Bu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function zs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===go||l===xo,u=l===Hi||l===Wi;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Fu(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Fu(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function RS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Mr("WebGLRenderer: "+i+" extension not supported."),r}}}function PS(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let x=0;if(d!==null){const E=d.array;x=d.version;for(let b=0,T=E.length;b<T;b+=3){const C=E[b+0],A=E[b+1],R=E[b+2];h.push(C,A,A,R,R,C)}}else if(m!==void 0){const E=m.array;x=m.version;for(let b=0,T=E.length/3-1;b<T;b+=3){const C=b+0,A=b+1,R=b+2;h.push(C,A,A,R,R,C)}}else return;const g=new(kh(h)?qh:jh)(h,1);g.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function LS(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,h*a,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,i,1)}function f(h,d,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,x,0,m);let p=0;for(let E=0;E<m;E++)p+=d[E]*x[E];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function DS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function IS(n,e,t){const i=new WeakMap,r=new mt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;d===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let T=o.attributes.position.count*b,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*C*4*f),R=new zh(A,T,C,f);R.type=vn,R.needsUpdate=!0;const U=b*4;for(let y=0;y<f;y++){const D=g[y],B=p[y],V=E[y],k=T*C*4*y;for(let X=0;X<D.count;X++){const H=X*U;d===!0&&(r.fromBufferAttribute(D,X),A[k+H+0]=r.x,A[k+H+1]=r.y,A[k+H+2]=r.z,A[k+H+3]=0),m===!0&&(r.fromBufferAttribute(B,X),A[k+H+4]=r.x,A[k+H+5]=r.y,A[k+H+6]=r.z,A[k+H+7]=0),x===!0&&(r.fromBufferAttribute(V,X),A[k+H+8]=r.x,A[k+H+9]=r.y,A[k+H+10]=r.z,A[k+H+11]=V.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new tt(T,C)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function US(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const td=new At,Vu=new Jh(1,1),nd=new zh,id=new o_,rd=new Kh,ku=[],zu=[],Gu=new Float32Array(16),Hu=new Float32Array(9),Wu=new Float32Array(4);function $i(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ku[r];if(s===void 0&&(s=new Float32Array(r),ku[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gs(n,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function FS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function BS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function VS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Wu.set(i),n.uniformMatrix2fv(this.addr,!1,Wu),St(t,i)}}function kS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),St(t,i)}}function zS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Gu.set(i),n.uniformMatrix4fv(this.addr,!1,Gu),St(t,i)}}function GS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function WS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function XS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function jS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function KS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vu.compareFunction=Vh,s=Vu):s=td,t.setTexture2D(e||s,r)}function ZS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||id,r)}function JS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rd,r)}function QS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nd,r)}function eb(n){switch(n){case 5126:return FS;case 35664:return NS;case 35665:return OS;case 35666:return BS;case 35674:return VS;case 35675:return kS;case 35676:return zS;case 5124:case 35670:return GS;case 35667:case 35671:return HS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return jS;case 36294:return qS;case 36295:return YS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return JS;case 36289:case 36303:case 36311:case 36292:return QS}}function tb(n,e){n.uniform1fv(this.addr,e)}function nb(n,e){const t=$i(e,this.size,2);n.uniform2fv(this.addr,t)}function ib(n,e){const t=$i(e,this.size,3);n.uniform3fv(this.addr,t)}function rb(n,e){const t=$i(e,this.size,4);n.uniform4fv(this.addr,t)}function sb(n,e){const t=$i(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ab(n,e){const t=$i(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ob(n,e){const t=$i(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lb(n,e){n.uniform1iv(this.addr,e)}function cb(n,e){n.uniform2iv(this.addr,e)}function ub(n,e){n.uniform3iv(this.addr,e)}function fb(n,e){n.uniform4iv(this.addr,e)}function hb(n,e){n.uniform1uiv(this.addr,e)}function db(n,e){n.uniform2uiv(this.addr,e)}function pb(n,e){n.uniform3uiv(this.addr,e)}function mb(n,e){n.uniform4uiv(this.addr,e)}function gb(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||td,s[a])}function xb(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||id,s[a])}function _b(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rd,s[a])}function vb(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nd,s[a])}function yb(n){switch(n){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return rb;case 35674:return sb;case 35675:return ab;case 35676:return ob;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return ub;case 35669:case 35673:return fb;case 5125:return hb;case 36294:return db;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return vb}}class Sb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eb(t.type)}}class bb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yb(t.type)}}class Mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Xu(n,e){n.seq.push(e),n.map[e.id]=e}function Eb(n,e,t){const i=n.name,r=i.length;for(ka.lastIndex=0;;){const s=ka.exec(i),a=ka.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xu(t,c===void 0?new Sb(o,n,e):new bb(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Mb(o),Xu(t,f)),t=f}}}class ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Eb(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ju(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Tb=37297;let Ab=0;function wb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const qu=new Ve;function Cb(n){Ke._getMatrix(qu,Ke.workingColorSpace,n);const e=`mat3( ${qu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case As:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wb(n.getShaderSource(e),o)}else return s}function Rb(n,e){const t=Cb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pb(n,e){let t;switch(e){case Ux:t="Linear";break;case Fx:t="Reinhard";break;case Nx:t="Cineon";break;case Ox:t="ACESFilmic";break;case Vx:t="AgX";break;case kx:t="Neutral";break;case Bx:t="Custom";break;default:Be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const os=new W;function Lb(){Ke.getLuminanceCoefficients(os);const n=os.x.toFixed(4),e=os.y.toFixed(4),t=os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Ib(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ub(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function or(n){return n!==""}function $u(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(n){return n.replace(Fb,Ob)}const Nb=new Map;function Ob(n,e){let t=Ge[e];if(t===void 0){const i=Nb.get(e);if(i!==void 0)t=Ge[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ko(t)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(Bb,Vb)}function Vb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ju(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hi:case Wi:e="ENVMAP_TYPE_CUBE";break;case Bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Hb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case Dx:e="ENVMAP_BLENDING_MIX";break;case Ix:e="ENVMAP_BLENDING_ADD";break}return e}function Wb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Xb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=kb(t),c=zb(t),u=Gb(t),f=Hb(t),h=Wb(t),d=Db(t),m=Ib(s),x=r.createProgram();let g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(or).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(or).join(`
`),p.length>0&&(p+=`
`)):(g=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==zn?Pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Rb("linearToOutputTexel",t.outputColorSpace),Lb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=Ko(a),a=$u(a,t),a=Ku(a,t),o=Ko(o),o=$u(o,t),o=Ku(o,t),a=Zu(a),o=Zu(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+g+a,T=E+p+o,C=ju(r,r.VERTEX_SHADER,b),A=ju(r,r.FRAGMENT_SHADER,T);r.attachShader(x,C),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(D){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(C)||"",k=r.getShaderInfoLog(A)||"",X=B.trim(),H=V.trim(),te=k.trim();let I=!0,j=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,A);else{const $=Yu(r,C,"vertex"),Z=Yu(r,A,"fragment");pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+$+`
`+Z)}else X!==""?Be("WebGLProgram: Program Info Log:",X):(H===""||te==="")&&(j=!1);j&&(D.diagnostics={runnable:I,programLog:X,vertexShader:{log:H,prefix:g},fragmentShader:{log:te,prefix:p}})}r.deleteShader(C),r.deleteShader(A),U=new ps(r,x),M=Ub(r,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,Tb)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ab++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let jb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Yb(e),t.set(e,i)),i}}class Yb{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}}function $b(n,e,t,i,r,s,a){const o=new Hh,l=new qb,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,D,B,V){const k=B.fog,X=V.geometry,H=M.isMeshStandardMaterial?B.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),I=te&&te.mapping===Bs?te.image.height:null,j=m[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&Be("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Z=$!==void 0?$.length:0;let de=0;X.morphAttributes.position!==void 0&&(de=1),X.morphAttributes.normal!==void 0&&(de=2),X.morphAttributes.color!==void 0&&(de=3);let Oe,ke,We,Y;if(j){const Je=rn[j];Oe=Je.vertexShader,ke=Je.fragmentShader}else Oe=M.vertexShader,ke=M.fragmentShader,l.update(M),We=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);const J=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Le=V.isInstancedMesh===!0,ve=V.isBatchedMesh===!0,Ue=!!M.map,gt=!!M.matcap,ze=!!te,st=!!M.aoMap,P=!!M.lightMap,Xe=!!M.bumpMap,je=!!M.normalMap,it=!!M.displacementMap,_e=!!M.emissiveMap,at=!!M.metalnessMap,Me=!!M.roughnessMap,Ne=M.anisotropy>0,w=M.clearcoat>0,v=M.dispersion>0,O=M.iridescence>0,K=M.sheen>0,ee=M.transmission>0,q=Ne&&!!M.anisotropyMap,Se=w&&!!M.clearcoatMap,ce=w&&!!M.clearcoatNormalMap,Ee=w&&!!M.clearcoatRoughnessMap,ye=O&&!!M.iridescenceMap,ne=O&&!!M.iridescenceThicknessMap,se=K&&!!M.sheenColorMap,Re=K&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,he=!!M.specularColorMap,De=!!M.specularIntensityMap,L=ee&&!!M.transmissionMap,ue=ee&&!!M.thicknessMap,ae=!!M.gradientMap,oe=!!M.alphaMap,ie=M.alphaTest>0,Q=!!M.alphaHash,ge=!!M.extensions;let Fe=zn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const rt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:ke,defines:M.defines,customVertexShaderID:We,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ve,batchingColor:ve&&V._colorsTexture!==null,instancing:Le,instancingColor:Le&&V.instanceColor!==null,instancingMorph:Le&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Xi,alphaToCoverage:!!M.alphaToCoverage,map:Ue,matcap:gt,envMap:ze,envMapMode:ze&&te.mapping,envMapCubeUVHeight:I,aoMap:st,lightMap:P,bumpMap:Xe,normalMap:je,displacementMap:h&&it,emissiveMap:_e,normalMapObjectSpace:je&&M.normalMapType===Xx,normalMapTangentSpace:je&&M.normalMapType===Wx,metalnessMap:at,roughnessMap:Me,anisotropy:Ne,anisotropyMap:q,clearcoat:w,clearcoatMap:Se,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ee,dispersion:v,iridescence:O,iridescenceMap:ye,iridescenceThicknessMap:ne,sheen:K,sheenColorMap:se,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:he,specularIntensityMap:De,transmission:ee,transmissionMap:L,thicknessMap:ue,gradientMap:ae,opaque:M.transparent===!1&&M.blending===Vi&&M.alphaToCoverage===!1,alphaMap:oe,alphaTest:ie,alphaHash:Q,combine:M.combine,mapUv:Ue&&x(M.map.channel),aoMapUv:st&&x(M.aoMap.channel),lightMapUv:P&&x(M.lightMap.channel),bumpMapUv:Xe&&x(M.bumpMap.channel),normalMapUv:je&&x(M.normalMap.channel),displacementMapUv:it&&x(M.displacementMap.channel),emissiveMapUv:_e&&x(M.emissiveMap.channel),metalnessMapUv:at&&x(M.metalnessMap.channel),roughnessMapUv:Me&&x(M.roughnessMap.channel),anisotropyMapUv:q&&x(M.anisotropyMap.channel),clearcoatMapUv:Se&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:se&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(M.sheenRoughnessMap.channel),specularMapUv:Ae&&x(M.specularMap.channel),specularColorMapUv:he&&x(M.specularColorMap.channel),specularIntensityMapUv:De&&x(M.specularIntensityMap.channel),transmissionMapUv:L&&x(M.transmissionMap.channel),thicknessMapUv:ue&&x(M.thicknessMap.channel),alphaMapUv:oe&&x(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(je||Ne),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Ue||oe),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:de,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===et,decodeVideoTextureEmissive:_e&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gn,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&M.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)y.push(D),y.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(E(y,M),b(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function T(M){const y=m[M.type];let D;if(y){const B=rn[y];D=y_.clone(B.uniforms)}else D=M.uniforms;return D}function C(M,y){let D;for(let B=0,V=u.length;B<V;B++){const k=u[B];if(k.cacheKey===y){D=k,++D.usedTimes;break}}return D===void 0&&(D=new Xb(n,y,M,s),u.push(D)),D}function A(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:U}}function Kb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Zb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ef(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,m,x,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=x,p.group=g),e++,p}function o(f,h,d,m,x,g){const p=a(f,h,d,m,x,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,m,x,g){const p=a(f,h,d,m,x,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Zb),i.length>1&&i.sort(h||Qu),r.length>1&&r.sort(h||Qu)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Jb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ef,n.set(i,[a])):r>=s.length?(a=new ef,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ze};break;case"SpotLight":t={position:new W,direction:new W,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function eM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tM=0;function nM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iM(n){const e=new Qb,t=eM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new vt,a=new vt;function o(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,E=0,b=0,T=0,C=0,A=0,R=0;c.sort(nM);for(let M=0,y=c.length;M<y;M++){const D=c[M],B=D.color,V=D.intensity,k=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*V,f+=B.g*V,h+=B.b*V;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],V);R++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,I=t.get(D);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.directionalShadow[d]=I,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=D.shadow.matrix,E++}i.directional[d]=H,d++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(B).multiplyScalar(V),H.distance=k,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[x]=H;const te=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,te.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=te.matrix,D.castShadow){const I=t.get(D);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=X,T++}x++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(B).multiplyScalar(V),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=H,g++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const te=D.shadow,I=t.get(D);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,I.shadowCameraNear=te.camera.near,I.shadowCameraFar=te.camera.far,i.pointShadow[m]=I,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=D.shadow.matrix,b++}i.point[m]=H,m++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(V),H.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[p]=H,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==d||U.pointLength!==m||U.spotLength!==x||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==E||U.numPointShadows!==b||U.numSpotShadows!==T||U.numSpotMaps!==C||U.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,U.directionalLength=d,U.pointLength=m,U.spotLength=x,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=E,U.numPointShadows=b,U.numSpotShadows=T,U.numSpotMaps=C,U.numLightProbes=R,i.version=tM++)}function l(c,u){let f=0,h=0,d=0,m=0,x=0;const g=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const b=c[p];if(b.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),f++}else if(b.isSpotLight){const T=i.spot[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),d++}else if(b.isRectAreaLight){const T=i.rectArea[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function tf(n){const e=new iM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function rM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new tf(n),e.set(r,[o])):s>=a.length?(o=new tf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oM(n,e,t){let i=new Zh;const r=new tt,s=new tt,a=new mt,o=new L_({depthPacking:Hx}),l=new D_,c={},u=t.maxTextureSize,f={[Wn]:It,[It]:Wn,[gn]:gn},h=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:sM,fragmentShader:aM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Cn;m.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xn(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let p=this.type;this.render=function(A,R,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(bn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=p!==mn&&this.type===mn,k=p===mn&&this.type!==mn;for(let X=0,H=A.length;X<H;X++){const te=A[X],I=te.shadow;if(I===void 0){Be("WebGLShadowMap:",te,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||V===!0||k===!0){const Z=this.type!==mn?{minFilter:zt,magFilter:zt}:{};I.map!==null&&I.map.dispose(),I.map=new hi(r.x,r.y,Z),I.map.texture.name=te.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const $=I.getViewportCount();for(let Z=0;Z<$;Z++){const de=I.getViewport(Z);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),B.viewport(a),I.updateMatrices(te,Z),i=I.getFrustum(),T(R,U,I.camera,te,this.type)}I.isPointLightShadow!==!0&&this.type===mn&&E(I,U),I.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,y,D)};function E(A,R){const U=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,U,h,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,U,d,x,null)}function b(A,R,U,M){let y=null;const D=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=U.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=y.uuid,V=R.uuid;let k=c[B];k===void 0&&(k={},c[B]=k);let X=k[V];X===void 0&&(X=y.clone(),k[V]=X,R.addEventListener("dispose",C)),y=X}if(y.visible=R.visible,y.wireframe=R.wireframe,M===mn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:f[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=n.properties.get(y);B.light=U}return y}function T(A,R,U,M,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===mn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const V=e.update(A),k=A.material;if(Array.isArray(k)){const X=V.groups;for(let H=0,te=X.length;H<te;H++){const I=X[H],j=k[I.materialIndex];if(j&&j.visible){const $=b(A,j,M,y);A.onBeforeShadow(n,A,R,U,V,$,I),n.renderBufferDirect(U,null,V,$,A,I),A.onAfterShadow(n,A,R,U,V,$,I)}}}else if(k.visible){const X=b(A,k,M,y);A.onBeforeShadow(n,A,R,U,V,X,null),n.renderBufferDirect(U,null,V,X,A,null),A.onAfterShadow(n,A,R,U,V,X,null)}}const B=A.children;for(let V=0,k=B.length;V<k;V++)T(B[V],R,U,M,y)}function C(A){A.target.removeEventListener("dispose",C);for(const U in c){const M=c[U],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const lM={[lo]:co,[uo]:po,[fo]:mo,[Gi]:ho,[co]:lo,[po]:uo,[mo]:fo,[ho]:Gi};function cM(n,e){function t(){let L=!1;const ue=new mt;let ae=null;const oe=new mt(0,0,0,0);return{setMask:function(ie){ae!==ie&&!L&&(n.colorMask(ie,ie,ie,ie),ae=ie)},setLocked:function(ie){L=ie},setClear:function(ie,Q,ge,Fe,rt){rt===!0&&(ie*=Fe,Q*=Fe,ge*=Fe),ue.set(ie,Q,ge,Fe),oe.equals(ue)===!1&&(n.clearColor(ie,Q,ge,Fe),oe.copy(ue))},reset:function(){L=!1,ae=null,oe.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,ae=null,oe=null,ie=null;return{setReversed:function(Q){if(ue!==Q){const ge=e.get("EXT_clip_control");Q?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;const Fe=ie;ie=null,this.setClear(Fe)}},getReversed:function(){return ue},setTest:function(Q){Q?J(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(Q){ae!==Q&&!L&&(n.depthMask(Q),ae=Q)},setFunc:function(Q){if(ue&&(Q=lM[Q]),oe!==Q){switch(Q){case lo:n.depthFunc(n.NEVER);break;case co:n.depthFunc(n.ALWAYS);break;case uo:n.depthFunc(n.LESS);break;case Gi:n.depthFunc(n.LEQUAL);break;case fo:n.depthFunc(n.EQUAL);break;case ho:n.depthFunc(n.GEQUAL);break;case po:n.depthFunc(n.GREATER);break;case mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Q}},setLocked:function(Q){L=Q},setClear:function(Q){ie!==Q&&(ue&&(Q=1-Q),n.clearDepth(Q),ie=Q)},reset:function(){L=!1,ae=null,oe=null,ie=null,ue=!1}}}function r(){let L=!1,ue=null,ae=null,oe=null,ie=null,Q=null,ge=null,Fe=null,rt=null;return{setTest:function(Je){L||(Je?J(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!L&&(n.stencilMask(Je),ue=Je)},setFunc:function(Je,tn,Yt){(ae!==Je||oe!==tn||ie!==Yt)&&(n.stencilFunc(Je,tn,Yt),ae=Je,oe=tn,ie=Yt)},setOp:function(Je,tn,Yt){(Q!==Je||ge!==tn||Fe!==Yt)&&(n.stencilOp(Je,tn,Yt),Q=Je,ge=tn,Fe=Yt)},setLocked:function(Je){L=Je},setClear:function(Je){rt!==Je&&(n.clearStencil(Je),rt=Je)},reset:function(){L=!1,ue=null,ae=null,oe=null,ie=null,Q=null,ge=null,Fe=null,rt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,x=!1,g=null,p=null,E=null,b=null,T=null,C=null,A=null,R=new Ze(0,0,0),U=0,M=!1,y=null,D=null,B=null,V=null,k=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(I)[1]),H=te>=1):I.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),H=te>=2);let j=null,$={};const Z=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Oe=new mt().fromArray(Z),ke=new mt().fromArray(de);function We(L,ue,ae,oe){const ie=new Uint8Array(4),Q=n.createTexture();n.bindTexture(L,Q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<ae;ge++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(ue+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return Q}const Y={};Y[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(Gi),Xe(!1),je(su),J(n.CULL_FACE),st(bn);function J(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function pe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Le(L,ue){return f[L]!==ue?(n.bindFramebuffer(L,ue),f[L]=ue,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function ve(L,ue){let ae=d,oe=!1;if(L){ae=h.get(ue),ae===void 0&&(ae=[],h.set(ue,ae));const ie=L.textures;if(ae.length!==ie.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,ge=ie.length;Q<ge;Q++)ae[Q]=n.COLOR_ATTACHMENT0+Q;ae.length=ie.length,oe=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,oe=!0);oe&&n.drawBuffers(ae)}function Ue(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const gt={[si]:n.FUNC_ADD,[mx]:n.FUNC_SUBTRACT,[gx]:n.FUNC_REVERSE_SUBTRACT};gt[xx]=n.MIN,gt[_x]=n.MAX;const ze={[vx]:n.ZERO,[yx]:n.ONE,[Sx]:n.SRC_COLOR,[ao]:n.SRC_ALPHA,[wx]:n.SRC_ALPHA_SATURATE,[Tx]:n.DST_COLOR,[Mx]:n.DST_ALPHA,[bx]:n.ONE_MINUS_SRC_COLOR,[oo]:n.ONE_MINUS_SRC_ALPHA,[Ax]:n.ONE_MINUS_DST_COLOR,[Ex]:n.ONE_MINUS_DST_ALPHA,[Cx]:n.CONSTANT_COLOR,[Rx]:n.ONE_MINUS_CONSTANT_COLOR,[Px]:n.CONSTANT_ALPHA,[Lx]:n.ONE_MINUS_CONSTANT_ALPHA};function st(L,ue,ae,oe,ie,Q,ge,Fe,rt,Je){if(L===bn){x===!0&&(pe(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),L!==px){if(L!==g||Je!==M){if((p!==si||T!==si)&&(n.blendEquation(n.FUNC_ADD),p=si,T=si),Je)switch(L){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFunc(n.ONE,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:pt("WebGLState: Invalid blending: ",L);break}else switch(L){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ou:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",L);break}E=null,b=null,C=null,A=null,R.set(0,0,0),U=0,g=L,M=Je}return}ie=ie||ue,Q=Q||ae,ge=ge||oe,(ue!==p||ie!==T)&&(n.blendEquationSeparate(gt[ue],gt[ie]),p=ue,T=ie),(ae!==E||oe!==b||Q!==C||ge!==A)&&(n.blendFuncSeparate(ze[ae],ze[oe],ze[Q],ze[ge]),E=ae,b=oe,C=Q,A=ge),(Fe.equals(R)===!1||rt!==U)&&(n.blendColor(Fe.r,Fe.g,Fe.b,rt),R.copy(Fe),U=rt),g=L,M=!1}function P(L,ue){L.side===gn?pe(n.CULL_FACE):J(n.CULL_FACE);let ae=L.side===It;ue&&(ae=!ae),Xe(ae),L.blending===Vi&&L.transparent===!1?st(bn):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const oe=L.stencilWrite;o.setTest(oe),oe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(L){y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),y=L)}function je(L){L!==fx?(J(n.CULL_FACE),L!==D&&(L===su?n.cullFace(n.BACK):L===hx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),D=L}function it(L){L!==B&&(H&&n.lineWidth(L),B=L)}function _e(L,ue,ae){L?(J(n.POLYGON_OFFSET_FILL),(V!==ue||k!==ae)&&(n.polygonOffset(ue,ae),V=ue,k=ae)):pe(n.POLYGON_OFFSET_FILL)}function at(L){L?J(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Me(L){L===void 0&&(L=n.TEXTURE0+X-1),j!==L&&(n.activeTexture(L),j=L)}function Ne(L,ue,ae){ae===void 0&&(j===null?ae=n.TEXTURE0+X-1:ae=j);let oe=$[ae];oe===void 0&&(oe={type:void 0,texture:void 0},$[ae]=oe),(oe.type!==L||oe.texture!==ue)&&(j!==ae&&(n.activeTexture(ae),j=ae),n.bindTexture(L,ue||Y[L]),oe.type=L,oe.texture=ue)}function w(){const L=$[j];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function K(){try{n.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ee(){try{n.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ce(){try{n.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ee(){try{n.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ye(){try{n.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ne(){try{n.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function se(L){Oe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Oe.copy(L))}function Re(L){ke.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ke.copy(L))}function Ae(L,ue){let ae=c.get(ue);ae===void 0&&(ae=new WeakMap,c.set(ue,ae));let oe=ae.get(L);oe===void 0&&(oe=n.getUniformBlockIndex(ue,L.name),ae.set(L,oe))}function he(L,ue){const oe=c.get(ue).get(L);l.get(ue)!==oe&&(n.uniformBlockBinding(ue,oe,L.__bindingPointIndex),l.set(ue,oe))}function De(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},j=null,$={},f={},h=new WeakMap,d=[],m=null,x=!1,g=null,p=null,E=null,b=null,T=null,C=null,A=null,R=new Ze(0,0,0),U=0,M=!1,y=null,D=null,B=null,V=null,k=null,Oe.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:pe,bindFramebuffer:Le,drawBuffers:ve,useProgram:Ue,setBlending:st,setMaterial:P,setFlipSided:Xe,setCullFace:je,setLineWidth:it,setPolygonOffset:_e,setScissorTest:at,activeTexture:Me,bindTexture:Ne,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:ye,texImage3D:ne,updateUBOMapping:Ae,uniformBlockBinding:he,texStorage2D:ce,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:Se,scissor:se,viewport:Re,reset:De}}function uM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return d?new OffscreenCanvas(w,v):Cs("canvas")}function x(w,v,O){let K=1;const ee=Ne(w);if((ee.width>O||ee.height>O)&&(K=O/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(K*ee.width),Se=Math.floor(K*ee.height);f===void 0&&(f=m(q,Se));const ce=v?m(q,Se):f;return ce.width=q,ce.height=Se,ce.getContext("2d").drawImage(w,0,0,q,Se),Be("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Se+")."),ce}else return"data"in w&&Be("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,v,O,K,ee=!1){if(w!==null){if(n[w]!==void 0)return n[w];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=v;if(v===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),v===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){const Se=ee?As:Ke.getTransfer(K);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=Se===et?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(w,v){let O;return w?v===null||v===fi||v===yr?O=n.DEPTH24_STENCIL8:v===vn?O=n.DEPTH32F_STENCIL8:v===vr&&(O=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fi||v===yr?O=n.DEPTH_COMPONENT24:v===vn?O=n.DEPTH_COMPONENT32F:v===vr&&(O=n.DEPTH_COMPONENT16),O}function C(w,v){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==zt&&w.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),U(v),v.isVideoTexture&&u.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),y(v)}function U(w){const v=i.get(w);if(v.__webglInit===void 0)return;const O=w.source,K=h.get(O);if(K){const ee=K[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(w),Object.keys(K).length===0&&h.delete(O)}i.remove(w)}function M(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const O=w.source,K=h.get(O);delete K[v.__cacheKey],a.memory.textures--}function y(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ee=0;ee<v.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,ee=O.length;K<ee;K++){const q=i.get(O[K]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[K])}i.remove(w)}let D=0;function B(){D=0}function V(){const w=D;return w>=r.maxTextures&&Be("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),D+=1,w}function k(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function X(w,v){const O=i.get(w);if(w.isVideoTexture&&at(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,w,v);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function H(w,v){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Y(O,w,v);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function te(w,v){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Y(O,w,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function I(w,v){const O=i.get(w);if(w.version>0&&O.__version!==w.version){J(O,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const j={[_o]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[vo]:n.MIRRORED_REPEAT},$={[zt]:n.NEAREST,[zx]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[fa]:n.LINEAR_MIPMAP_NEAREST,[li]:n.LINEAR_MIPMAP_LINEAR},Z={[jx]:n.NEVER,[Jx]:n.ALWAYS,[qx]:n.LESS,[Vh]:n.LEQUAL,[Yx]:n.EQUAL,[Zx]:n.GEQUAL,[$x]:n.GREATER,[Kx]:n.NOTEQUAL};function de(w,v){if(v.type===vn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qt||v.magFilter===fa||v.magFilter===Vr||v.magFilter===li||v.minFilter===qt||v.minFilter===fa||v.minFilter===Vr||v.minFilter===li)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,j[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,j[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,j[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,$[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,$[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Z[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==Vr&&v.minFilter!==li||v.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const K=v.source;let ee=h.get(K);ee===void 0&&(ee={},h.set(K,ee));const q=k(v);if(q!==w.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ee[q].usedTimes++;const Se=ee[w.__cacheKey];Se!==void 0&&(ee[w.__cacheKey].usedTimes--,Se.usedTimes===0&&M(v)),w.__cacheKey=q,w.__webglTexture=ee[q].texture}return O}function ke(w,v,O){return Math.floor(Math.floor(w/O)/v)}function We(w,v,O,K){const q=w.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,K,v.data);else{q.sort((ne,se)=>ne.start-se.start);let Se=0;for(let ne=1;ne<q.length;ne++){const se=q[Se],Re=q[ne],Ae=se.start+se.count,he=ke(Re.start,v.width,4),De=ke(se.start,v.width,4);Re.start<=Ae+1&&he===De&&ke(Re.start+Re.count-1,v.width,4)===he?se.count=Math.max(se.count,Re.start+Re.count-se.start):(++Se,q[Se]=Re)}q.length=Se+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ne=0,se=q.length;ne<se;ne++){const Re=q[ne],Ae=Math.floor(Re.start/4),he=Math.ceil(Re.count/4),De=Ae%v.width,L=Math.floor(Ae/v.width),ue=he,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,De,L,ue,ae,O,K,v.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function Y(w,v,O){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const ee=Oe(w,v),q=v.source;t.bindTexture(K,w.__webglTexture,n.TEXTURE0+O);const Se=i.get(q);if(q.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);const ce=Ke.getPrimaries(Ke.workingColorSpace),Ee=v.colorSpace===Bn?null:Ke.getPrimaries(v.colorSpace),ye=v.colorSpace===Bn||ce===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ne=x(v.image,!1,r.maxTextureSize);ne=Me(v,ne);const se=s.convert(v.format,v.colorSpace),Re=s.convert(v.type);let Ae=b(v.internalFormat,se,Re,v.colorSpace,v.isVideoTexture);de(K,v);let he;const De=v.mipmaps,L=v.isVideoTexture!==!0,ue=Se.__version===void 0||ee===!0,ae=q.dataReady,oe=C(v,ne);if(v.isDepthTexture)Ae=T(v.format===br,v.type),ue&&(L?t.texStorage2D(n.TEXTURE_2D,1,Ae,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ne.width,ne.height,0,se,Re,null));else if(v.isDataTexture)if(De.length>0){L&&ue&&t.texStorage2D(n.TEXTURE_2D,oe,Ae,De[0].width,De[0].height);for(let ie=0,Q=De.length;ie<Q;ie++)he=De[ie],L?ae&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,he.width,he.height,se,Re,he.data):t.texImage2D(n.TEXTURE_2D,ie,Ae,he.width,he.height,0,se,Re,he.data);v.generateMipmaps=!1}else L?(ue&&t.texStorage2D(n.TEXTURE_2D,oe,Ae,ne.width,ne.height),ae&&We(v,ne,se,Re)):t.texImage2D(n.TEXTURE_2D,0,Ae,ne.width,ne.height,0,se,Re,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ae,De[0].width,De[0].height,ne.depth);for(let ie=0,Q=De.length;ie<Q;ie++)if(he=De[ie],v.format!==en)if(se!==null)if(L){if(ae)if(v.layerUpdates.size>0){const ge=Du(he.width,he.height,v.format,v.type);for(const Fe of v.layerUpdates){const rt=he.data.subarray(Fe*ge/he.data.BYTES_PER_ELEMENT,(Fe+1)*ge/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Fe,he.width,he.height,1,se,rt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,ne.depth,se,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ae,he.width,he.height,ne.depth,0,he.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,ne.depth,se,Re,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ae,he.width,he.height,ne.depth,0,se,Re,he.data)}else{L&&ue&&t.texStorage2D(n.TEXTURE_2D,oe,Ae,De[0].width,De[0].height);for(let ie=0,Q=De.length;ie<Q;ie++)he=De[ie],v.format!==en?se!==null?L?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,he.width,he.height,se,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ae,he.width,he.height,0,he.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ae&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,he.width,he.height,se,Re,he.data):t.texImage2D(n.TEXTURE_2D,ie,Ae,he.width,he.height,0,se,Re,he.data)}else if(v.isDataArrayTexture)if(L){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ae,ne.width,ne.height,ne.depth),ae)if(v.layerUpdates.size>0){const ie=Du(ne.width,ne.height,v.format,v.type);for(const Q of v.layerUpdates){const ge=ne.data.subarray(Q*ie/ne.data.BYTES_PER_ELEMENT,(Q+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,se,Re,ge)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,se,Re,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,se,Re,ne.data);else if(v.isData3DTexture)L?(ue&&t.texStorage3D(n.TEXTURE_3D,oe,Ae,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,se,Re,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,se,Re,ne.data);else if(v.isFramebufferTexture){if(ue)if(L)t.texStorage2D(n.TEXTURE_2D,oe,Ae,ne.width,ne.height);else{let ie=ne.width,Q=ne.height;for(let ge=0;ge<oe;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ae,ie,Q,0,se,Re,null),ie>>=1,Q>>=1}}else if(De.length>0){if(L&&ue){const ie=Ne(De[0]);t.texStorage2D(n.TEXTURE_2D,oe,Ae,ie.width,ie.height)}for(let ie=0,Q=De.length;ie<Q;ie++)he=De[ie],L?ae&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,se,Re,he):t.texImage2D(n.TEXTURE_2D,ie,Ae,se,Re,he);v.generateMipmaps=!1}else if(L){if(ue){const ie=Ne(ne);t.texStorage2D(n.TEXTURE_2D,oe,Ae,ie.width,ie.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,Re,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ae,se,Re,ne);g(v)&&p(K),Se.__version=q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function J(w,v,O){if(v.image.length!==6)return;const K=Oe(w,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const q=i.get(ee);if(ee.version!==q.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const Se=Ke.getPrimaries(Ke.workingColorSpace),ce=v.colorSpace===Bn?null:Ke.getPrimaries(v.colorSpace),Ee=v.colorSpace===Bn||Se===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,se=[];for(let Q=0;Q<6;Q++)!ye&&!ne?se[Q]=x(v.image[Q],!0,r.maxCubemapSize):se[Q]=ne?v.image[Q].image:v.image[Q],se[Q]=Me(v,se[Q]);const Re=se[0],Ae=s.convert(v.format,v.colorSpace),he=s.convert(v.type),De=b(v.internalFormat,Ae,he,v.colorSpace),L=v.isVideoTexture!==!0,ue=q.__version===void 0||K===!0,ae=ee.dataReady;let oe=C(v,Re);de(n.TEXTURE_CUBE_MAP,v);let ie;if(ye){L&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,De,Re.width,Re.height);for(let Q=0;Q<6;Q++){ie=se[Q].mipmaps;for(let ge=0;ge<ie.length;ge++){const Fe=ie[ge];v.format!==en?Ae!==null?L?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,Fe.width,Fe.height,Ae,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,De,Fe.width,Fe.height,0,Fe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,Fe.width,Fe.height,Ae,he,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,De,Fe.width,Fe.height,0,Ae,he,Fe.data)}}}else{if(ie=v.mipmaps,L&&ue){ie.length>0&&oe++;const Q=Ne(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,De,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,se[Q].width,se[Q].height,Ae,he,se[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,De,se[Q].width,se[Q].height,0,Ae,he,se[Q].data);for(let ge=0;ge<ie.length;ge++){const rt=ie[ge].image[Q].image;L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,rt.width,rt.height,Ae,he,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,De,rt.width,rt.height,0,Ae,he,rt.data)}}else{L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,he,se[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,De,Ae,he,se[Q]);for(let ge=0;ge<ie.length;ge++){const Fe=ie[ge];L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Ae,he,Fe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,De,Ae,he,Fe.image[Q])}}}g(v)&&p(n.TEXTURE_CUBE_MAP),q.__version=ee.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function pe(w,v,O,K,ee,q){const Se=s.convert(O.format,O.colorSpace),ce=s.convert(O.type),Ee=b(O.internalFormat,Se,ce,O.colorSpace),ye=i.get(v),ne=i.get(O);if(ne.__renderTarget=v,!ye.__hasExternalTextures){const se=Math.max(1,v.width>>q),Re=Math.max(1,v.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Ee,se,Re,v.depth,0,Se,ce,null):t.texImage2D(ee,q,Ee,se,Re,0,Se,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),_e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,ne.__webglTexture,0,it(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,ne.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(w,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const K=v.depthTexture,ee=K&&K.isDepthTexture?K.type:null,q=T(v.stencilBuffer,ee),Se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=it(v);_e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,q,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,w)}else{const K=v.textures;for(let ee=0;ee<K.length;ee++){const q=K[ee],Se=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),Ee=b(q.internalFormat,Se,ce,q.colorSpace),ye=it(v);O&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Ee,v.width,v.height):_e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,Ee,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const ee=K.__webglTexture,q=it(v);if(v.depthTexture.format===Sr)_e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===br)_e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(w){const v=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=K}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const K=w.texture.mipmaps;K&&K.length>0?ve(v.__webglFramebuffer[0],w):ve(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),Le(v.__webglDepthbuffer[K],w,!1);else{const ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Le(v.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(w,v,O){const K=i.get(w);v!==void 0&&pe(K.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ue(w)}function ze(w){const v=w.texture,O=i.get(w),K=i.get(v);w.addEventListener("dispose",R);const ee=w.textures,q=w.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let Ee=0;Ee<v.mipmaps.length;Ee++)O.__webglFramebuffer[ce][Ee]=n.createFramebuffer()}else O.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)O.__webglFramebuffer[ce]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ce=0,Ee=ee.length;ce<Ee;ce++){const ye=i.get(ee[ce]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&_e(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const Ee=ee[ce];O.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const ye=s.convert(Ee.format,Ee.colorSpace),ne=s.convert(Ee.type),se=b(Ee.internalFormat,ye,ne,Ee.colorSpace,w.isXRRenderTarget===!0),Re=it(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,se,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),de(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)pe(O.__webglFramebuffer[ce][Ee],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee);else pe(O.__webglFramebuffer[ce],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ce=0,Ee=ee.length;ce<Ee;ce++){const ye=ee[ce],ne=i.get(ye);let se=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ne.__webglTexture),de(se,ye),pe(O.__webglFramebuffer,w,ye,n.COLOR_ATTACHMENT0+ce,se,0),g(ye)&&p(se)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),de(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)pe(O.__webglFramebuffer[Ee],w,v,n.COLOR_ATTACHMENT0,ce,Ee);else pe(O.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ce,0);g(v)&&p(ce),t.unbindTexture()}w.depthBuffer&&Ue(w)}function st(w){const v=w.textures;for(let O=0,K=v.length;O<K;O++){const ee=v[O];if(g(ee)){const q=E(w),Se=i.get(ee).__webglTexture;t.bindTexture(q,Se),p(q),t.unbindTexture()}}}const P=[],Xe=[];function je(w){if(w.samples>0){if(_e(w)===!1){const v=w.textures,O=w.width,K=w.height;let ee=n.COLOR_BUFFER_BIT;const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(w),ce=v.length>1;if(ce)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ee=w.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ne=i.get(v[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,ee,n.NEAREST),l===!0&&(P.length=0,Xe.length=0,P.push(n.COLOR_ATTACHMENT0+ye),w.depthBuffer&&w.resolveDepthBuffer===!1&&(P.push(q),Xe.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ne=i.get(v[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function it(w){return Math.min(r.maxSamples,w.samples)}function _e(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function at(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function Me(w,v){const O=w.colorSpace,K=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Xi&&O!==Bn&&(Ke.getTransfer(O)===et?(K!==en||ee!==Tn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",O)),v}function Ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=te,this.setTextureCube=I,this.rebindTextures=gt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=_e}function fM(n,e){function t(i,r=Bn){let s;const a=Ke.getTransfer(r);if(i===Tn)return n.UNSIGNED_BYTE;if(i===vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dh)return n.BYTE;if(i===Ih)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===_l)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===qi)return n.HALF_FLOAT;if(i===Nh)return n.ALPHA;if(i===Oh)return n.RGB;if(i===en)return n.RGBA;if(i===Sr)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===Bh)return n.RED;if(i===Sl)return n.RED_INTEGER;if(i===bl)return n.RG;if(i===Ml)return n.RG_INTEGER;if(i===El)return n.RGBA_INTEGER;if(i===us||i===fs||i===hs||i===ds)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yo||i===So||i===bo||i===Mo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===So)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eo||i===To||i===Ao)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Eo||i===To)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ao)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wo||i===Co||i===Ro||i===Po||i===Lo||i===Do||i===Io||i===Uo||i===Fo||i===No||i===Oo||i===Bo||i===Vo||i===ko)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Co)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ro)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Po)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Do)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Io)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===No)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ko)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===Go||i===Ho)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zo)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wo||i===Xo||i===jo||i===qo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Qh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wn({vertexShader:hM,fragmentShader:dM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new ks(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mM extends Yi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new pM,p={},E=t.getContextAttributes();let b=null,T=null;const C=[],A=[],R=new tt;let U=null;const M=new Jt;M.viewport=new mt;const y=new Jt;y.viewport=new mt;const D=[M,y],B=new U_;let V=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=C[Y];return J===void 0&&(J=new Ua,C[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=C[Y];return J===void 0&&(J=new Ua,C[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=C[Y];return J===void 0&&(J=new Ua,C[Y]=J),J.getHandSpace()};function X(Y){const J=A.indexOf(Y.inputSource);if(J===-1)return;const pe=C[J];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",te);for(let Y=0;Y<C.length;Y++){const J=A[Y];J!==null&&(A[Y]=null,C[Y].disconnect(J))}V=null,k=null,g.reset();for(const Y in p)delete p[Y];e.setRenderTarget(b),d=null,h=null,f=null,r=null,T=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",H),r.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Le=null,ve=null;E.depth&&(ve=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=E.stencil?br:Sr,Le=E.stencil?yr:fi);const Ue={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new hi(h.textureWidth,h.textureHeight,{format:en,type:Tn,depthTexture:new Jh(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new hi(d.framebufferWidth,d.framebufferHeight,{format:en,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(Y){for(let J=0;J<Y.removed.length;J++){const pe=Y.removed[J],Le=A.indexOf(pe);Le>=0&&(A[Le]=null,C[Le].disconnect(pe))}for(let J=0;J<Y.added.length;J++){const pe=Y.added[J];let Le=A.indexOf(pe);if(Le===-1){for(let Ue=0;Ue<C.length;Ue++)if(Ue>=A.length){A.push(pe),Le=Ue;break}else if(A[Ue]===null){A[Ue]=pe,Le=Ue;break}if(Le===-1)break}const ve=C[Le];ve&&ve.connect(pe)}}const I=new W,j=new W;function $(Y,J,pe){I.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(pe.matrixWorld);const Le=I.distanceTo(j),ve=J.projectionMatrix.elements,Ue=pe.projectionMatrix.elements,gt=ve[14]/(ve[10]-1),ze=ve[14]/(ve[10]+1),st=(ve[9]+1)/ve[5],P=(ve[9]-1)/ve[5],Xe=(ve[8]-1)/ve[0],je=(Ue[8]+1)/Ue[0],it=gt*Xe,_e=gt*je,at=Le/(-Xe+je),Me=at*-Xe;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Me),Y.translateZ(at),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ne=gt+at,w=ze+at,v=it-Me,O=_e+(Le-Me),K=st*ze/w*Ne,ee=P*ze/w*Ne;Y.projectionMatrix.makePerspective(v,O,K,ee,Ne,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Z(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,pe=Y.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),B.near=y.near=M.near=J,B.far=y.far=M.far=pe,(V!==B.near||k!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,k=B.far),B.layers.mask=Y.layers.mask|6,M.layers.mask=B.layers.mask&3,y.layers.mask=B.layers.mask&5;const Le=Y.parent,ve=B.cameras;Z(B,Le);for(let Ue=0;Ue<ve.length;Ue++)Z(ve[Ue],Le);ve.length===2?$(B,M,y):B.projectionMatrix.copy(M.projectionMatrix),de(Y,B,Le)};function de(Y,J,pe){pe===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Y){return p[Y]};let Oe=null;function ke(Y,J){if(u=J.getViewerPose(c||a),m=J,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let Le=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let ze=0;ze<pe.length;ze++){const st=pe[ze];let P=null;if(d!==null)P=d.getViewport(st);else{const je=f.getViewSubImage(h,st);P=je.viewport,ze===0&&(e.setRenderTargetTextures(T,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(T))}let Xe=D[ze];Xe===void 0&&(Xe=new Jt,Xe.layers.enable(ze),Xe.viewport=new mt,D[ze]=Xe),Xe.matrix.fromArray(st.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(st.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(P.x,P.y,P.width,P.height),ze===0&&(B.matrix.copy(Xe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(Xe)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const ze=f.getDepthInformation(pe[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,r.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let ze=0;ze<pe.length;ze++){const st=pe[ze].camera;if(st){let P=p[st];P||(P=new Qh,p[st]=P);const Xe=f.getCameraImage(st);P.sourceTexture=Xe}}}}for(let pe=0;pe<C.length;pe++){const Le=A[pe],ve=C[pe];Le!==null&&ve!==void 0&&ve.update(Le,J,c||a)}Oe&&Oe(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}const We=new ed;We.setAnimationLoop(ke),this.setAnimationLoop=function(Y){Oe=Y},this.dispose=function(){}}}const ti=new An,gM=new vt;function xM(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Yh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,E,b,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,T)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,E,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===It&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===It&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=e.get(p),b=E.envMap,T=E.envMapRotation;b&&(g.envMap.value=b,ti.copy(T),ti.x*=-1,ti.y*=-1,ti.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),g.envMapRotation.value.setFromMatrix4(gM.makeRotationFromEuler(ti)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _M(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const T=b.program;i.uniformBlockBinding(E,T)}function c(E,b){let T=r[E.id];T===void 0&&(m(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",g));const C=b.program;i.updateUBOMapping(E,C);const A=e.render.frame;s[E.id]!==A&&(h(E),s[E.id]=A)}function u(E){const b=f();E.__bindingPointIndex=b;const T=n.createBuffer(),C=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,T),T}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const b=r[E.id],T=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,R=T.length;A<R;A++){const U=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,y=U.length;M<y;M++){const D=U[M];if(d(D,A,M,C)===!0){const B=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let X=0;X<V.length;X++){const H=V[X],te=x(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,B+k,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,k),k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,b,T,C){const A=E.value,R=b+"_"+T;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const U=C[R];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return C[R]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function m(E){const b=E.uniforms;let T=0;const C=16;for(let R=0,U=b.length;R<U;R++){const M=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,D=M.length;y<D;y++){const B=M[y],V=Array.isArray(B.value)?B.value:[B.value];for(let k=0,X=V.length;k<X;k++){const H=V[k],te=x(H),I=T%C,j=I%te.boundary,$=I+j;T+=j,$!==0&&C-$<te.storage&&(T+=C-$),B.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=te.storage}}}const A=T%C;return A>0&&(T+=C-A),E.__size=T,E.__cache={},this}function x(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",E),b}function g(E){const b=E.target;b.removeEventListener("dispose",g);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const vM=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let pn=null;function yM(){return pn===null&&(pn=new A_(vM,32,32,bl,qi),pn.minFilter=qt,pn.magFilter=qt,pn.wrapS=_n,pn.wrapT=_n,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class LM{constructor(e={}){const{canvas:t=Qx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Set([El,Ml,Sl]),x=new Set([Tn,fi,vr,yr,vl,yl]),g=new Uint32Array(4),p=new Int32Array(4);let E=null,b=null;const T=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=jt;let U=0,M=0,y=null,D=-1,B=null;const V=new mt,k=new mt;let X=null;const H=new Ze(0);let te=0,I=t.width,j=t.height,$=1,Z=null,de=null;const Oe=new mt(0,0,I,j),ke=new mt(0,0,I,j);let We=!1;const Y=new Zh;let J=!1,pe=!1;const Le=new vt,ve=new W,Ue=new mt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function st(){return y===null?$:1}let P=i;function Xe(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ge,!1),P===null){const F="webgl2";if(P=Xe(F,S),P===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw S("WebGLRenderer: "+S.message),S}let je,it,_e,at,Me,Ne,w,v,O,K,ee,q,Se,ce,Ee,ye,ne,se,Re,Ae,he,De,L,ue;function ae(){je=new RS(P),je.init(),De=new fM(P,je),it=new yS(P,je,e,De),_e=new cM(P,je),it.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),at=new DS(P),Me=new Kb,Ne=new uM(P,je,_e,Me,it,De,at),w=new bS(A),v=new CS(A),O=new N_(P),L=new _S(P,O),K=new PS(P,O,at,L),ee=new US(P,K,O,at),Re=new IS(P,it,Ne),ye=new SS(Me),q=new $b(A,w,v,je,it,L,ye),Se=new xM(A,Me),ce=new Jb,Ee=new rM(je),se=new xS(A,w,v,_e,ee,d,l),ne=new oM(A,ee,it),ue=new _M(P,at,it,_e),Ae=new vS(P,je,at),he=new LS(P,je,at),at.programs=q.programs,A.capabilities=it,A.extensions=je,A.properties=Me,A.renderLists=ce,A.shadowMap=ne,A.state=_e,A.info=at}ae();const oe=new mM(A,P);this.xr=oe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(I,j,!1))},this.getSize=function(S){return S.set(I,j)},this.setSize=function(S,F,z=!0){if(oe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}I=S,j=F,t.width=Math.floor(S*$),t.height=Math.floor(F*$),z===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(I*$,j*$).floor()},this.setDrawingBufferSize=function(S,F,z){I=S,j=F,$=z,t.width=Math.floor(S*z),t.height=Math.floor(F*z),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(V)},this.getViewport=function(S){return S.copy(Oe)},this.setViewport=function(S,F,z,G){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,F,z,G),_e.viewport(V.copy(Oe).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(ke)},this.setScissor=function(S,F,z,G){S.isVector4?ke.set(S.x,S.y,S.z,S.w):ke.set(S,F,z,G),_e.scissor(k.copy(ke).multiplyScalar($).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){_e.setScissorTest(We=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,z=!0){let G=0;if(S){let N=!1;if(y!==null){const re=y.texture.format;N=m.has(re)}if(N){const re=y.texture.type,fe=x.has(re),xe=se.getClearColor(),me=se.getClearAlpha(),we=xe.r,Pe=xe.g,be=xe.b;fe?(g[0]=we,g[1]=Pe,g[2]=be,g[3]=me,P.clearBufferuiv(P.COLOR,0,g)):(p[0]=we,p[1]=Pe,p[2]=be,p[3]=me,P.clearBufferiv(P.COLOR,0,p))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT),z&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),se.dispose(),ce.dispose(),Ee.dispose(),Me.dispose(),w.dispose(),v.dispose(),ee.dispose(),L.dispose(),ue.dispose(),q.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Al),oe.removeEventListener("sessionend",wl),qn.stop()};function ie(S){S.preventDefault(),du("WebGLRenderer: Context Lost."),R=!0}function Q(){du("WebGLRenderer: Context Restored."),R=!1;const S=at.autoReset,F=ne.enabled,z=ne.autoUpdate,G=ne.needsUpdate,N=ne.type;ae(),at.autoReset=S,ne.enabled=F,ne.autoUpdate=z,ne.needsUpdate=G,ne.type=N}function ge(S){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Fe(S){const F=S.target;F.removeEventListener("dispose",Fe),rt(F)}function rt(S){Je(S),Me.remove(S)}function Je(S){const F=Me.get(S).programs;F!==void 0&&(F.forEach(function(z){q.releaseProgram(z)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,z,G,N,re){F===null&&(F=gt);const fe=N.isMesh&&N.matrixWorld.determinant()<0,xe=ad(S,F,z,G,N);_e.setMaterial(G,fe);let me=z.index,we=1;if(G.wireframe===!0){if(me=K.getWireframeAttribute(z),me===void 0)return;we=2}const Pe=z.drawRange,be=z.attributes.position;let qe=Pe.start*we,Qe=(Pe.start+Pe.count)*we;re!==null&&(qe=Math.max(qe,re.start*we),Qe=Math.min(Qe,(re.start+re.count)*we)),me!==null?(qe=Math.max(qe,0),Qe=Math.min(Qe,me.count)):be!=null&&(qe=Math.max(qe,0),Qe=Math.min(Qe,be.count));const ht=Qe-qe;if(ht<0||ht===1/0)return;L.setup(N,G,xe,z,me);let dt,nt=Ae;if(me!==null&&(dt=O.get(me),nt=he,nt.setIndex(dt)),N.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*st()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(N.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),_e.setLineWidth(Te*st()),N.isLineSegments?nt.setMode(P.LINES):N.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else N.isPoints?nt.setMode(P.POINTS):N.isSprite&&nt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Mr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Te=N._multiDrawStarts,ot=N._multiDrawCounts,$e=N._multiDrawCount,Ot=me?O.get(me).bytesPerElement:1,mi=Me.get(G).currentProgram.getUniforms();for(let Bt=0;Bt<$e;Bt++)mi.setValue(P,"_gl_DrawID",Bt),nt.render(Te[Bt]/Ot,ot[Bt])}else if(N.isInstancedMesh)nt.renderInstances(qe,ht,N.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ot=Math.min(z.instanceCount,Te);nt.renderInstances(qe,ht,ot)}else nt.render(qe,ht)};function tn(S,F,z){S.transparent===!0&&S.side===gn&&S.forceSinglePass===!1?(S.side=It,S.needsUpdate=!0,Ur(S,F,z),S.side=Wn,S.needsUpdate=!0,Ur(S,F,z),S.side=gn):Ur(S,F,z)}this.compile=function(S,F,z=null){z===null&&(z=S),b=Ee.get(z),b.init(F),C.push(b),z.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(b.pushLight(N),N.castShadow&&b.pushShadow(N))}),S!==z&&S.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(b.pushLight(N),N.castShadow&&b.pushShadow(N))}),b.setupLights();const G=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const xe=re[fe];tn(xe,z,N),G.add(xe)}else tn(re,z,N),G.add(re)}),b=C.pop(),G},this.compileAsync=function(S,F,z=null){const G=this.compile(S,F,z);return new Promise(N=>{function re(){if(G.forEach(function(fe){Me.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){N(S);return}setTimeout(re,10)}je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Yt=null;function sd(S){Yt&&Yt(S)}function Al(){qn.stop()}function wl(){qn.start()}const qn=new ed;qn.setAnimationLoop(sd),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(S){Yt=S,oe.setAnimationLoop(S),S===null?qn.stop():qn.start()},oe.addEventListener("sessionstart",Al),oe.addEventListener("sessionend",wl),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,F,y),b=Ee.get(S,C.length),b.init(F),C.push(b),Le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Le,an,F.reversedDepth),pe=this.localClippingEnabled,J=ye.init(this.clippingPlanes,pe),E=ce.get(S,T.length),E.init(),T.push(E),oe.enabled===!0&&oe.isPresenting===!0){const re=A.xr.getDepthSensingMesh();re!==null&&Hs(re,F,-1/0,A.sortObjects)}Hs(S,F,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(Z,de),ze=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ze&&se.addToRenderList(E,S),this.info.render.frame++,J===!0&&ye.beginShadows();const z=b.state.shadowsArray;ne.render(z,S,F),J===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=E.opaque,N=E.transmissive;if(b.setupLights(),F.isArrayCamera){const re=F.cameras;if(N.length>0)for(let fe=0,xe=re.length;fe<xe;fe++){const me=re[fe];Rl(G,N,S,me)}ze&&se.render(S);for(let fe=0,xe=re.length;fe<xe;fe++){const me=re[fe];Cl(E,S,me,me.viewport)}}else N.length>0&&Rl(G,N,S,F),ze&&se.render(S),Cl(E,S,F);y!==null&&M===0&&(Ne.updateMultisampleRenderTarget(y),Ne.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(A,S,F),L.resetDefaultState(),D=-1,B=null,C.pop(),C.length>0?(b=C[C.length-1],J===!0&&ye.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?E=T[T.length-1]:E=null};function Hs(S,F,z,G){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){G&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);const fe=ee.update(S),xe=S.material;xe.visible&&E.push(S,fe,xe,z,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const fe=ee.update(S),xe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ue.copy(fe.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),Array.isArray(xe)){const me=fe.groups;for(let we=0,Pe=me.length;we<Pe;we++){const be=me[we],qe=xe[be.materialIndex];qe&&qe.visible&&E.push(S,fe,qe,z,Ue.z,be)}}else xe.visible&&E.push(S,fe,xe,z,Ue.z,null)}}const re=S.children;for(let fe=0,xe=re.length;fe<xe;fe++)Hs(re[fe],F,z,G)}function Cl(S,F,z,G){const{opaque:N,transmissive:re,transparent:fe}=S;b.setupLightsView(z),J===!0&&ye.setGlobalState(A.clippingPlanes,z),G&&_e.viewport(V.copy(G)),N.length>0&&Ir(N,F,z),re.length>0&&Ir(re,F,z),fe.length>0&&Ir(fe,F,z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Rl(S,F,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[G.id]===void 0&&(b.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?qi:Tn,minFilter:li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const re=b.state.transmissionRenderTarget[G.id],fe=G.viewport||V;re.setSize(fe.z*A.transmissionResolutionScale,fe.w*A.transmissionResolutionScale);const xe=A.getRenderTarget(),me=A.getActiveCubeFace(),we=A.getActiveMipmapLevel();A.setRenderTarget(re),A.getClearColor(H),te=A.getClearAlpha(),te<1&&A.setClearColor(16777215,.5),A.clear(),ze&&se.render(z);const Pe=A.toneMapping;A.toneMapping=zn;const be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),J===!0&&ye.setGlobalState(A.clippingPlanes,G),Ir(S,z,G),Ne.updateMultisampleRenderTarget(re),Ne.updateRenderTargetMipmap(re),je.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Qe=0,ht=F.length;Qe<ht;Qe++){const dt=F[Qe],{object:nt,geometry:Te,material:ot,group:$e}=dt;if(ot.side===gn&&nt.layers.test(G.layers)){const Ot=ot.side;ot.side=It,ot.needsUpdate=!0,Pl(nt,z,G,Te,ot,$e),ot.side=Ot,ot.needsUpdate=!0,qe=!0}}qe===!0&&(Ne.updateMultisampleRenderTarget(re),Ne.updateRenderTargetMipmap(re))}A.setRenderTarget(xe,me,we),A.setClearColor(H,te),be!==void 0&&(G.viewport=be),A.toneMapping=Pe}function Ir(S,F,z){const G=F.isScene===!0?F.overrideMaterial:null;for(let N=0,re=S.length;N<re;N++){const fe=S[N],{object:xe,geometry:me,group:we}=fe;let Pe=fe.material;Pe.allowOverride===!0&&G!==null&&(Pe=G),xe.layers.test(z.layers)&&Pl(xe,F,z,me,Pe,we)}}function Pl(S,F,z,G,N,re){S.onBeforeRender(A,F,z,G,N,re),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(A,F,z,G,S,re),N.transparent===!0&&N.side===gn&&N.forceSinglePass===!1?(N.side=It,N.needsUpdate=!0,A.renderBufferDirect(z,F,G,N,S,re),N.side=Wn,N.needsUpdate=!0,A.renderBufferDirect(z,F,G,N,S,re),N.side=gn):A.renderBufferDirect(z,F,G,N,S,re),S.onAfterRender(A,F,z,G,N,re)}function Ur(S,F,z){F.isScene!==!0&&(F=gt);const G=Me.get(S),N=b.state.lights,re=b.state.shadowsArray,fe=N.state.version,xe=q.getParameters(S,N.state,re,F,z),me=q.getProgramCacheKey(xe);let we=G.programs;G.environment=S.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(S.isMeshStandardMaterial?v:w).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",Fe),we=new Map,G.programs=we);let Pe=we.get(me);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===fe)return Dl(S,xe),Pe}else xe.uniforms=q.getUniforms(S),S.onBeforeCompile(xe,A),Pe=q.acquireProgram(xe,me),we.set(me,Pe),G.uniforms=xe.uniforms;const be=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=ye.uniform),Dl(S,xe),G.needsLights=ld(S),G.lightsStateVersion=fe,G.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function Ll(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=ps.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Dl(S,F){const z=Me.get(S);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function ad(S,F,z,G,N){F.isScene!==!0&&(F=gt),Ne.resetTextureUnits();const re=F.fog,fe=G.isMeshStandardMaterial?F.environment:null,xe=y===null?A.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Xi,me=(G.isMeshStandardMaterial?v:w).get(G.envMap||fe),we=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!z.morphAttributes.position,qe=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let ht=zn;G.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ht=A.toneMapping);const dt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,nt=dt!==void 0?dt.length:0,Te=Me.get(G),ot=b.state.lights;if(J===!0&&(pe===!0||S!==B)){const wt=S===B&&G.id===D;ye.setState(G,S,wt)}let $e=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ot.state.version||Te.outputColorSpace!==xe||N.isBatchedMesh&&Te.batching===!1||!N.isBatchedMesh&&Te.batching===!0||N.isBatchedMesh&&Te.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Te.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Te.instancing===!1||!N.isInstancedMesh&&Te.instancing===!0||N.isSkinnedMesh&&Te.skinning===!1||!N.isSkinnedMesh&&Te.skinning===!0||N.isInstancedMesh&&Te.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Te.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Te.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Te.instancingMorph===!1&&N.morphTexture!==null||Te.envMap!==me||G.fog===!0&&Te.fog!==re||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ye.numPlanes||Te.numIntersection!==ye.numIntersection)||Te.vertexAlphas!==we||Te.vertexTangents!==Pe||Te.morphTargets!==be||Te.morphNormals!==qe||Te.morphColors!==Qe||Te.toneMapping!==ht||Te.morphTargetsCount!==nt)&&($e=!0):($e=!0,Te.__version=G.version);let Ot=Te.currentProgram;$e===!0&&(Ot=Ur(G,F,N));let mi=!1,Bt=!1,Ki=!1;const lt=Ot.getUniforms(),Pt=Te.uniforms;if(_e.useProgram(Ot.program)&&(mi=!0,Bt=!0,Ki=!0),G.id!==D&&(D=G.id,Bt=!0),mi||B!==S){_e.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),lt.setValue(P,"projectionMatrix",S.projectionMatrix),lt.setValue(P,"viewMatrix",S.matrixWorldInverse);const Lt=lt.map.cameraPosition;Lt!==void 0&&Lt.setValue(P,ve.setFromMatrixPosition(S.matrixWorld)),it.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,Bt=!0,Ki=!0)}if(N.isSkinnedMesh){lt.setOptional(P,N,"bindMatrix"),lt.setOptional(P,N,"bindMatrixInverse");const wt=N.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),lt.setValue(P,"boneTexture",wt.boneTexture,Ne))}N.isBatchedMesh&&(lt.setOptional(P,N,"batchingTexture"),lt.setValue(P,"batchingTexture",N._matricesTexture,Ne),lt.setOptional(P,N,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",N._indirectTexture,Ne),lt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",N._colorsTexture,Ne));const Ht=z.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&Re.update(N,z,Ot),(Bt||Te.receiveShadow!==N.receiveShadow)&&(Te.receiveShadow=N.receiveShadow,lt.setValue(P,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Pt.envMap.value=me,Pt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Pt.envMapIntensity.value=F.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=yM()),Bt&&(lt.setValue(P,"toneMappingExposure",A.toneMappingExposure),Te.needsLights&&od(Pt,Ki),re&&G.fog===!0&&Se.refreshFogUniforms(Pt,re),Se.refreshMaterialUniforms(Pt,G,$,j,b.state.transmissionRenderTarget[S.id]),ps.upload(P,Ll(Te),Pt,Ne)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ps.upload(P,Ll(Te),Pt,Ne),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(P,"center",N.center),lt.setValue(P,"modelViewMatrix",N.modelViewMatrix),lt.setValue(P,"normalMatrix",N.normalMatrix),lt.setValue(P,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wt=G.uniformsGroups;for(let Lt=0,Ws=wt.length;Lt<Ws;Lt++){const Yn=wt[Lt];ue.update(Yn,Ot),ue.bind(Yn,Ot)}}return Ot}function od(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function ld(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(S,F,z){const G=Me.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Me.get(S.texture).__webglTexture=F,Me.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const z=Me.get(S);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0};const cd=P.createFramebuffer();this.setRenderTarget=function(S,F=0,z=0){y=S,U=F,M=z;let G=!0,N=null,re=!1,fe=!1;if(S){const me=Me.get(S);if(me.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(me.__webglFramebuffer===void 0)Ne.setupRenderTarget(S);else if(me.__hasExternalTextures)Ne.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const be=S.depthTexture;if(me.__boundDepthTexture!==be){if(be!==null&&Me.has(be)&&(S.width!==be.image.width||S.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(fe=!0);const Pe=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?N=Pe[F][z]:N=Pe[F],re=!0):S.samples>0&&Ne.useMultisampledRTT(S)===!1?N=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[z]:N=Pe,V.copy(S.viewport),k.copy(S.scissor),X=S.scissorTest}else V.copy(Oe).multiplyScalar($).floor(),k.copy(ke).multiplyScalar($).floor(),X=We;if(z!==0&&(N=cd),_e.bindFramebuffer(P.FRAMEBUFFER,N)&&G&&_e.drawBuffers(S,N),_e.viewport(V),_e.scissor(k),_e.setScissorTest(X),re){const me=Me.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,z)}else if(fe){const me=F;for(let we=0;we<S.textures.length;we++){const Pe=Me.get(S.textures[we]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+we,Pe.__webglTexture,z,me)}}else if(S!==null&&z!==0){const me=Me.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,z)}D=-1},this.readRenderTargetPixels=function(S,F,z,G,N,re,fe,xe=0){if(!(S&&S.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){_e.bindFramebuffer(P.FRAMEBUFFER,me);try{const we=S.textures[xe],Pe=we.format,be=we.type;if(!it.textureFormatReadable(Pe)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(be)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-G&&z>=0&&z<=S.height-N&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(F,z,G,N,De.convert(Pe),De.convert(be),re))}finally{const we=y!==null?Me.get(y).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,F,z,G,N,re,fe,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(F>=0&&F<=S.width-G&&z>=0&&z<=S.height-N){_e.bindFramebuffer(P.FRAMEBUFFER,me);const we=S.textures[xe],Pe=we.format,be=we.type;if(!it.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(F,z,G,N,De.convert(Pe),De.convert(be),0);const Qe=y!==null?Me.get(y).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,Qe);const ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await e_(P,ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(qe),P.deleteSync(ht),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,z=0){const G=Math.pow(2,-z),N=Math.floor(S.image.width*G),re=Math.floor(S.image.height*G),fe=F!==null?F.x:0,xe=F!==null?F.y:0;Ne.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,fe,xe,N,re),_e.unbindTexture()};const ud=P.createFramebuffer(),fd=P.createFramebuffer();this.copyTextureToTexture=function(S,F,z=null,G=null,N=0,re=null){re===null&&(N!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=N,N=0):re=0);let fe,xe,me,we,Pe,be,qe,Qe,ht;const dt=S.isCompressedTexture?S.mipmaps[re]:S.image;if(z!==null)fe=z.max.x-z.min.x,xe=z.max.y-z.min.y,me=z.isBox3?z.max.z-z.min.z:1,we=z.min.x,Pe=z.min.y,be=z.isBox3?z.min.z:0;else{const Ht=Math.pow(2,-N);fe=Math.floor(dt.width*Ht),xe=Math.floor(dt.height*Ht),S.isDataArrayTexture?me=dt.depth:S.isData3DTexture?me=Math.floor(dt.depth*Ht):me=1,we=0,Pe=0,be=0}G!==null?(qe=G.x,Qe=G.y,ht=G.z):(qe=0,Qe=0,ht=0);const nt=De.convert(F.format),Te=De.convert(F.type);let ot;F.isData3DTexture?(Ne.setTexture3D(F,0),ot=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ne.setTexture2DArray(F,0),ot=P.TEXTURE_2D_ARRAY):(Ne.setTexture2D(F,0),ot=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const $e=P.getParameter(P.UNPACK_ROW_LENGTH),Ot=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mi=P.getParameter(P.UNPACK_SKIP_PIXELS),Bt=P.getParameter(P.UNPACK_SKIP_ROWS),Ki=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,be);const lt=S.isDataArrayTexture||S.isData3DTexture,Pt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Ht=Me.get(S),wt=Me.get(F),Lt=Me.get(Ht.__renderTarget),Ws=Me.get(wt.__renderTarget);_e.bindFramebuffer(P.READ_FRAMEBUFFER,Lt.__webglFramebuffer),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Yn=0;Yn<me;Yn++)lt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(S).__webglTexture,N,be+Yn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(F).__webglTexture,re,ht+Yn)),P.blitFramebuffer(we,Pe,fe,xe,qe,Qe,fe,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||Me.has(S)){const Ht=Me.get(S),wt=Me.get(F);_e.bindFramebuffer(P.READ_FRAMEBUFFER,ud),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,fd);for(let Lt=0;Lt<me;Lt++)lt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ht.__webglTexture,N,be+Lt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ht.__webglTexture,N),Pt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wt.__webglTexture,re,ht+Lt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wt.__webglTexture,re),N!==0?P.blitFramebuffer(we,Pe,fe,xe,qe,Qe,fe,xe,P.COLOR_BUFFER_BIT,P.NEAREST):Pt?P.copyTexSubImage3D(ot,re,qe,Qe,ht+Lt,we,Pe,fe,xe):P.copyTexSubImage2D(ot,re,qe,Qe,we,Pe,fe,xe);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Pt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(ot,re,qe,Qe,ht,fe,xe,me,nt,Te,dt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(ot,re,qe,Qe,ht,fe,xe,me,nt,dt.data):P.texSubImage3D(ot,re,qe,Qe,ht,fe,xe,me,nt,Te,dt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,qe,Qe,fe,xe,nt,Te,dt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,qe,Qe,dt.width,dt.height,nt,dt.data):P.texSubImage2D(P.TEXTURE_2D,re,qe,Qe,fe,xe,nt,Te,dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,$e),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ki),re===0&&F.generateMipmaps&&P.generateMipmap(ot),_e.unbindTexture()},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&Ne.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ne.setTextureCube(S,0):S.isData3DTexture?Ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ne.setTexture2DArray(S,0):Ne.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){U=0,M=0,y=null,_e.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}export{au as A,Kd as B,Ze as C,Jt as P,CM as S,LM as W,Cn as a,ln as b,PM as c,P_ as d,RM as e,bM as g,Nt as i,AM as m,EM as r,MM as s,wM as w};
