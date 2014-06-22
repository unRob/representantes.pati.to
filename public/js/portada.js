/* jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
(function(w) {
  var emit, evt_callbacks, _off, _on;
  evt_callbacks = {};
  _on = function(evt, callback) {
    evt_callbacks[evt] || (evt_callbacks[evt] = []);
    return evt_callbacks[evt].push(callback);
  };
  emit = function(evt, data) {
    var callback, cbs, e, _i, _len, _results;
    cbs = evt_callbacks[evt];
    if (!cbs) {
      console.error("No puedo notificar a <" + evt + ">, porque no tengo callbacks");
      return;
    }
    _results = [];
    for (_i = 0, _len = cbs.length; _i < _len; _i++) {
      callback = cbs[_i];
      try {
        _results.push(callback(data));
      } catch (_error) {
        e = _error;
        console.error("Error de callback");
        console.log(e.message);
        console.error(e.stack);
        _results.push(console.log(e));
      }
    }
    return _results;
  };
  _off = function(evt) {
    return evt_callbacks[evt] = [];
  };
  return w.NotificationCenter = {
    on: _on,
    off: _off,
    emit: emit
  };
})(window);

$(function() {
  var resizeTO;
  resizeTO = null;
  return $(window).on('resize', function() {
    clearTimeout(resizeTO);
    return resizeTO = setTimeout(function() {
      return NotificationCenter.emit('resize');
    }, 250);
  });
});

$(function() {
  window.filtros = function() {
    var activos, inactivos;
    activos = [];
    inactivos = [];
    $('.filtro').each(function(index, el) {
      var $el, activo, set;
      $el = $(el);
      activo = $el.hasClass('activo');
      set = activo ? activos : inactivos;
      return set.push($el.data('filtro'));
    });
    return {
      activos: activos,
      inactivos: inactivos
    };
  };
  return $('#filtros').on('click', '.filtro', function(evt) {
    evt.preventDefault();
    $(this).toggleClass('activo');
    return NotificationCenter.emit('filtros', window.filtros());
  });
});

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else {
    var mustache = {};

    factory(mustache);

    if (typeof define === "function" && define.amd) {
      define(mustache); // AMD
    } else {
      root.Mustache = mustache; // <script>
    }
  }
}(this, function (mustache) {

  var Object_toString = Object.prototype.toString;
  var isArray = Array.isArray || function (object) {
    return Object_toString.call(object) === '[object Array]';
  };

  function isFunction(object) {
    return typeof object === 'function';
  }

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var RegExp_test = RegExp.prototype.test;
  function testRegExp(re, string) {
    return RegExp_test.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }
  
  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate(template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags(tags) {
      if (typeof tags === 'string')
        tags = tags.split(spaceRe, 2);

      if (!isArray(tags) || tags.length !== 2)
        throw new Error('Invalid tags: ' + tags);

      openingTagRe = new RegExp(escapeRegExp(tags[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tags[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tags[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context(view, parentContext) {
    this.view = view == null ? {} : view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function (name) {
    var cache = this.cache;

    var value;
    if (name in cache) {
      value = cache[name];
    } else {
      var context = this, names, index;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          while (value != null && index < names.length)
            value = value[names[index++]];
        } else {
          value = context.view[name];
        }

        if (value != null)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer() {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function (tokens, context, partials, originalTemplate) {
    var buffer = '';

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    var self = this;
    function subRender(template) {
      return self.render(template, context, partials);
    }

    var token, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
        value = context.lookup(token[1]);

        if (!value)
          continue;

        if (isArray(value)) {
          for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
            buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
          }
        } else if (typeof value === 'object' || typeof value === 'string') {
          buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
        } else if (isFunction(value)) {
          if (typeof originalTemplate !== 'string')
            throw new Error('Cannot use higher-order sections without the original template');

          // Extract the portion of the original template that the section contains.
          value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

          if (value != null)
            buffer += value;
        } else {
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        }

        break;
      case '^':
        value = context.lookup(token[1]);

        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || (isArray(value) && value.length === 0))
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);

        break;
      case '>':
        if (!partials)
          continue;

        value = isFunction(partials) ? partials(token[1]) : partials[token[1]];

        if (value != null)
          buffer += this.renderTokens(this.parse(value), context, partials, value);

        break;
      case '&':
        value = context.lookup(token[1]);

        if (value != null)
          buffer += value;

        break;
      case 'name':
        value = context.lookup(token[1]);

        if (value != null)
          buffer += mustache.escape(value);

        break;
      case 'text':
        buffer += token[1];
        break;
      }
    }

    return buffer;
  };

  mustache.name = "mustache.js";
  mustache.version = "0.8.1";
  mustache.tags = [ "{{", "}}" ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  mustache.to_html = function (template, view, partials, send) {
    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));
var Mapa, canvas, overlay;

Mapa = function(container, options) {
  var self;
  this.canvas = container.get(0);
  this.latLng = new google.maps.LatLng(options.latitude, options.longitude);
  this.instance = this.iniciaMapa();
  this.marker = this.agregaMarcador(this.latLng);
  this.callbacks = [];
  this.polygons = [];
  self = this;
  google.maps.event.addListenerOnce(this.instance, 'tilesloaded', (function(_this) {
    return function() {
      return self.trigger('map.loaded');
    };
  })(this));
  google.maps.event.addDomListener(window, "resize", function() {
    var c;
    c = self.instance.getCenter();
    google.maps.event.trigger(self.instance, "resize");
    return self.instance.setCenter(c);
  });
  google.maps.event.addListener(this.instance, 'zoom', function() {
    var c;
    c = self.instance.getCenter();
    google.maps.event.trigger(self.instance, "resize");
    return self.instance.setCenter(c);
  });
  google.maps.event.addListener(this.instance, 'center_changed', function() {
    return self.marker.setPosition(self.instance.getCenter());
  });
  return this;
};

Mapa.prototype.on = function(evt, callback) {
  this.callbacks[evt] = this.callbacks[evt] || [];
  this.callbacks[evt].push(callback);
  return true;
};

Mapa.prototype.trigger = function(evt, data) {
  var cb, cbs, _i, _len;
  if (data == null) {
    data = {};
  }
  cbs = this.callbacks[evt];
  if (!cbs) {
    return false;
  }
  for (_i = 0, _len = cbs.length; _i < _len; _i++) {
    cb = cbs[_i];
    cb(data);
  }
  return true;
};

Mapa.prototype.iniciaMapa = function() {
  var map, mapOptions, mapType, styledMapOptions;
  styledMapOptions = {
    name: 'Simple'
  };
  mapType = new google.maps.StyledMapType(Mapa.estilo, styledMapOptions);
  mapOptions = {
    center: this.latLng,
    zoom: 15,
    panControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeId: 'Simple'
  };
  map = new google.maps.Map(this.canvas, mapOptions);
  map.mapTypes.set('Simple', mapType);
  return map;
};

Mapa.prototype.agregaMarcador = function(latLng) {
  return new google.maps.Marker({
    position: latLng,
    map: this.instance,
    animation: google.maps.Animation.DROP,
    title: "Yo mero"
  });
};

Mapa.prototype.pan = function(coords) {
  if (!coords.hasOwnProperty('latitude')) {
    coords = {
      latitude: coords.lat(),
      longitude: coords.lng()
    };
  }
  this.instance.panTo(new google.maps.LatLng(coords.latitude, coords.longitude));
  return this.instance.setZoom(16);
};

Mapa.prototype.setPolygons = function(polygons) {
  var o, opts, overlay, polygon, _i, _j, _len, _len1, _ref;
  _ref = this.polygons;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    overlay = _ref[_i];
    overlay.setMap(null);
  }
  this.polygons = [];
  for (_j = 0, _len1 = polygons.length; _j < _len1; _j++) {
    polygon = polygons[_j];
    opts = {
      strokeColor: "transparent",
      strokeOpacity: 0.0,
      fillColor: "#ED1E79",
      fillOpacity: 0.5
    };
    opts.paths = $.map(polygon, function(coord) {
      return new google.maps.LatLng(coord[1], coord[0]);
    });
    o = new google.maps.Polygon(opts);
    o.setMap(this.instance);
    this.polygons.push(o);
  }
  return true;
};

Mapa.prototype.centroid = function() {
  var bounds, path, _i, _len, _ref;
  bounds = new google.maps.LatLngBounds();
  _ref = this.polygons[0].getPath().getArray();
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    path = _ref[_i];
    bounds.extend(path);
  }
  return bounds.getCenter();
};

Mapa.prototype.overlay = null;

Mapa.estilo = [
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, {
    "featureType": "landscape.man_made",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  }, {
    "featureType": "landscape.natural",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }, {
        "hue": "#ff0055"
      }, {
        "lightness": 4
      }
    ]
  }, {
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "simplified"
      }, {
        "lightness": 56
      }
    ]
  }, {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }, {
        "weight": 0.1
      }
    ]
  }, {}, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "lightness": -9
      }
    ]
  }, {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "hue": "#ffa200"
      }, {
        "lightness": 3
      }, {
        "gamma": 1.53
      }
    ]
  }, {}, {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "weight": 5.4
      }, {
        "color": "#ff94c3"
      }
    ]
  }
];

overlay = null;

canvas = $('#mapa-canvas').get(0);

var Geo;

Geo = {
  geolocation: false,
  watcher: null,
  defaultOptions: {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
  },
  callbacks: {}
};

Geo.setup = function() {
  Geo.geolocation = navigator.hasOwnProperty('geolocation');
  if (Geo.geolocation) {
    Geo.trigger('ubicando');
    return navigator.geolocation.getCurrentPosition(Geo.aquired, Geo.error, Geo.defaultOptions);
  }
};

Geo.on = function(evt, callback) {
  Geo.callbacks[evt] = Geo.callbacks[evt] || [];
  Geo.callbacks[evt].push(callback);
  return true;
};

Geo.trigger = function(evt, data) {
  var cb, cbs, _i, _len;
  if (data == null) {
    data = {};
  }
  cbs = Geo.callbacks[evt];
  if (!cbs) {
    return false;
  }
  for (_i = 0, _len = cbs.length; _i < _len; _i++) {
    cb = cbs[_i];
    cb(data);
  }
  return true;
};

Geo.error = function(data) {
  console.error(data);
  return Geo.trigger('error');
};

Geo.aquired = function(pos) {
  var coords, lat, long, ngl;
  ngl = pos.hasOwnProperty('coords');
  lat = ngl && pos.coords.latitude || pos.lat();
  long = ngl && pos.coords.longitude || pos.lng();
  coords = {
    latitude: lat,
    longitude: long
  };
  return Geo.trigger('posicion', coords);
};

var Templates;

Templates = {};

Templates.setup = function(els) {
  return els.each(function(index, tpl) {
    var id;
    id = tpl.id.replace('tpl-', '');
    Templates[id] = (function(str) {
      Mustache.parse(str);
      return function(data) {
        return Mustache.render(str, data);
      };
    })(tpl.innerText);
    return true;
  });
};

var Representante, clase, porcentaje;

porcentaje = function(de, a) {
  if (a === 0) {
    return 0;
  }
  return 100 - Math.round(de / a * 100);
};

clase = function(pc) {
  if (pc > 75) {
    return 'safe';
  }
  if (pc > 50) {
    return 'cagandola';
  }
  if (pc > 30) {
    return 'zurrandola';
  }
  return 'diarrea';
};

Representante = function(data) {
  var k, link, links, pc, periodosAsistencias, periodosVotaciones, postal, v, _i, _len, _ref, _ref1, _ref2;
  this.data = data;
  this.orig = $.extend({}, data);
  links = [];
  postal = null;
  _ref = this.data.links;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    link = _ref[_i];
    if (link.servicio === 'postal') {
      postal = link;
    } else {
      link.clase = 'social-icon';
      link.icono = link.servicio;
      if (link.servicio === 'http') {
        link.clase = "icon round";
        link.icono = "globe";
      }
      links.push(link);
    }
  }
  this.data.links = links;
  this.data.desempeno = this.data.inasistencias || this.data.votaciones;
  if (this.data.inasistencias && !this.data.inasistencias.pc) {
    pc = porcentaje(this.data.inasistencias.total, this.data.inasistencias.sesiones);
    this.data.inasistencias.pc = {
      valor: pc,
      clase: clase(pc)
    };
    periodosAsistencias = [];
    _ref1 = this.data.inasistencias.periodos;
    for (k in _ref1) {
      v = _ref1[k];
      periodosAsistencias.push({
        fecha: k,
        valor: v
      });
    }
    this.data.inasistencias.periodos = periodosAsistencias;
  }
  if (this.data.votaciones && !this.data.votaciones.pc) {
    pc = porcentaje(this.data.votaciones.ausente, this.data.votaciones.total);
    this.data.votaciones.pc = {
      valor: pc,
      clase: clase(pc)
    };
    periodosVotaciones = [];
    _ref2 = this.data.votaciones.periodos;
    for (k in _ref2) {
      v = _ref2[k];
      periodosVotaciones.push({
        fecha: k,
        valor: porcentaje(v.ausente, v.total)
      });
    }
    this.data.votaciones.periodos = periodosVotaciones;
  }
  return this;
};

Representante.show = function(rep, els) {
  var back, gA, gV;
  els.body.addClass('covered');
  rep = new Representante(rep);
  back = function(evt) {
    console.log('back');
    evt.preventDefault();
    History.back();
    return NotificationCenter.off('resize');
  };
  els.cover.html(rep.detalles()).removeClass('inactive').one('click', back);
  $('.info-close').one('click', back);
  gA = rep.graficas.Asistencias.call(rep);
  gV = rep.graficas.Votaciones.call(rep);
  if (gA || gV) {
    NotificationCenter.on('resize', function() {
      gA.resize();
      return gV.resize();
    });
  }
  return $('#cover .hoja').click(function(evt) {
    return evt.stopPropagation();
  });
};

Representante.prototype.graficas = {};

Representante.prototype.graficas.Asistencias = function() {
  var grafica;
  if (!this.data.inasistencias) {
    return;
  }
  $('#data-asistencias').replaceWith('<div id="grafica-asistencias" class="grafica">');
  grafica = new Asistencias('#grafica-asistencias', this.data.inasistencias.periodos);
  grafica.draw();
  return grafica;
};

Representante.prototype.graficas.Votaciones = function() {
  var grafica;
  if (!this.data.votaciones) {
    return;
  }
  $('#data-votaciones').replaceWith('<div id="grafica-votaciones" class="grafica">');
  grafica = new Votaciones('#grafica-votaciones', this.data.votaciones.periodos);
  grafica.draw();
  return grafica;
};

Representante.prototype.state = function() {
  var data, title, url;
  url = "/actores/" + this.data.stub + "/" + this.data.id;
  title = "Detalles de " + this.data.nombre;
  data = {
    evt: 'Representante.show',
    data: this.orig
  };
  return [data, title, url];
};

Representante.prototype.toString = function() {
  return Templates['representante'](this.data);
};

Representante.prototype.detalles = function() {
  return Templates.detalles(this.data);
};

var Representantes;

Representantes = {};

Representantes.seccion = null;

Representantes.loaded_extra = false;

Representantes.query = function(url, data) {
  var req;
  req = $.ajax({
    url: "/actores/" + url,
    data: data,
    type: 'post'
  });
  return req;
};

Representantes.actores = {};

Representantes.find = function(id) {
  return Representantes.actores[id];
};

Representantes.state = function() {
  var actores, data, id, rep, reps, seccion, title;
  seccion = Representantes.seccion;
  title = "Representantes de la Sección " + seccion._id;
  reps = Representantes.actores;
  actores = [];
  for (id in reps) {
    rep = reps[id];
    actores.push(rep.orig);
  }
  data = {
    evt: 'Representantes.show',
    data: {
      seccion: seccion,
      representantes: actores
    }
  };
  return [data, title, "/actores/de-seccion/" + seccion._id];
};

Representantes.deUbicacion = function(coords, callback) {
  var query;
  query = Representantes.query('por-ubicacion', coords, callback);
  query.done(function(data) {
    Representantes.seccion = data.seccion;
    Representantes.parse(data.representantes);
    return callback(Representantes.actores, data.seccion);
  });
  return query.fail(function(xhr, reason, error) {
    return callback('error', xhr.responseJSON);
  });
};

Representantes.show = function(data, els) {
  var actor, html, id, _ref;
  els.cover.addClass('inactive');
  $('body').removeClass('covered');
  html = '';
  Representantes.parse(data.representantes);
  mapita.setPolygons(data.seccion.coords.coordinates);
  _ref = Representantes.actores;
  for (id in _ref) {
    actor = _ref[id];
    html += actor.toString();
  }
  els.representantes.html(html);
  return Representantes.filtros();
};

Representantes.filtros = function() {
  var activos, filtros, inactivos;
  filtros = window.filtros();
  activos = filtros.activos.map(function(a) {
    return "." + a;
  }).join(', ');
  inactivos = filtros.inactivos.map(function(i) {
    return "." + i;
  }).join(', ');
  $(activos).show();
  return $(inactivos).hide();
};

Representantes.parse = function(reps) {
  var r, rep, _i, _len;
  Representantes.actores = {};
  for (_i = 0, _len = reps.length; _i < _len; _i++) {
    rep = reps[_i];
    r = new Representante(rep);
    Representantes.actores[rep.id] = r;
  }
  return Representantes.actores;
};

typeof JSON != "object" && (JSON = {}),
function() {
    "use strict";

    function f(e) {
        return e < 10 ? "0" + e : e
    }
    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
        var n, r, i, s, o = gap,
            u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
            case "string":
                return quote(a);
            case "number":
                return isFinite(a) ? String(a) : "null";
            case "boolean":
            case "null":
                return String(a);
            case "object":
                if (!a) return "null";
                gap += indent, u = [];
                if (Object.prototype.toString.apply(a) === "[object Array]") {
                    s = a.length;
                    for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                    return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                }
                if (rep && typeof rep == "object") {
                    s = rep.length;
                    for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                } else for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(),
function(e, t) {
    "use strict";
    var n = e.History = e.History || {};
    if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    n.Adapter = {
        handlers: {},
        _uid: 1,
        uid: function(e) {
            return e._uid || (e._uid = n.Adapter._uid++)
        },
        bind: function(e, t, r) {
            var i = n.Adapter.uid(e);
            n.Adapter.handlers[i] = n.Adapter.handlers[i] || {}, n.Adapter.handlers[i][t] = n.Adapter.handlers[i][t] || [], n.Adapter.handlers[i][t].push(r), e["on" + t] = function(e, t) {
                return function(r) {
                    n.Adapter.trigger(e, t, r)
                }
            }(e, t)
        },
        trigger: function(e, t, r) {
            r = r || {};
            var i = n.Adapter.uid(e),
                s, o;
            n.Adapter.handlers[i] = n.Adapter.handlers[i] || {}, n.Adapter.handlers[i][t] = n.Adapter.handlers[i][t] || [];
            for (s = 0, o = n.Adapter.handlers[i][t].length; s < o; ++s) n.Adapter.handlers[i][t][s].apply(this, [r])
        },
        extractEventData: function(e, n) {
            var r = n && n[e] || t;
            return r
        },
        onDomLoad: function(t) {
            var n = e.setTimeout(function() {
                t()
            }, 2e3);
            e.onload = function() {
                clearTimeout(n), t()
            }
        }
    }, typeof n.init != "undefined" && n.init()
}(window),
function(e, t) {
    "use strict";
    var n = e.document,
        r = e.setTimeout || r,
        i = e.clearTimeout || i,
        s = e.setInterval || s,
        o = e.History = e.History || {};
    if (typeof o.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
    o.initHtml4 = function() {
        if (typeof o.initHtml4.initialized != "undefined") return !1;
        o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function(e) {
            var t = o.getHashByIndex(),
                n;
            return n = e === t, n
        }, o.isHashEqual = function(e, t) {
            return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
        }, o.saveHash = function(e) {
            return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
        }, o.getHashByIndex = function(e) {
            var t = null;
            return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
        }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function(e, t, n) {
            var r = o.getHashByState(e),
                i;
            return i = {
                discardedState: e,
                backState: n,
                forwardState: t
            }, o.discardedStates[r] = i, !0
        }, o.discardHash = function(e, t, n) {
            var r = {
                discardedHash: e,
                backState: n,
                forwardState: t
            };
            return o.discardedHashes[e] = r, !0
        }, o.discardedState = function(e) {
            var t = o.getHashByState(e),
                n;
            return n = o.discardedStates[t] || !1, n
        }, o.discardedHash = function(e) {
            var t = o.discardedHashes[e] || !1;
            return t
        }, o.recycleState = function(e) {
            var t = o.getHashByState(e);
            return o.discardedState(e) && delete o.discardedStates[t], !0
        }, o.emulated.hashChange && (o.hashChangeInit = function() {
            o.checkerFunction = null;
            var t = "",
                r, i, u, a, f = Boolean(o.getHash());
            return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function() {
                if (a) return !1;
                a = !0;
                var n = o.getHash(),
                    r = o.getHash(i.contentWindow.document);
                return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && r === "" ? o.back() : o.setHash(r, !1)), a = !1, !0
            }) : o.checkerFunction = function() {
                var n = o.getHash() || "";
                return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
            }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
        }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function(t) {
            var n = t && t.newURL || o.getLocationHref(),
                r = o.getHashByUrl(n),
                i = null,
                s = null,
                u = null,
                a;
            return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
        }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function(t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.pushState,
                args: arguments,
                queue: i
            }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r),
                u = o.getHashByState(s),
                a = o.getState(!1),
                f = o.getHashByState(a),
                l = o.getHash(),
                c = o.expectedStateId == s.id;
            return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
        }, o.replaceState = function(t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.replaceState,
                args: arguments,
                queue: i
            }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r),
                u = o.getHashByState(s),
                a = o.getState(!1),
                f = o.getHashByState(a),
                l = o.getStateByIndex(-2);
            return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
        }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() {
            o.Adapter.trigger(e, "hashchange")
        })
    }, typeof o.init != "undefined" && o.init()
}(window),
function(e, t) {
    "use strict";
    var n = e.console || t,
        r = e.document,
        i = e.navigator,
        s = !1,
        o = e.setTimeout,
        u = e.clearTimeout,
        a = e.setInterval,
        f = e.clearInterval,
        l = e.JSON,
        c = e.alert,
        h = e.History = e.History || {}, p = e.history;
    try {
        s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
    } catch (d) {
        s = !1
    }
    l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
    if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
    h.init = function(e) {
        return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
    }, h.initCore = function(d) {
        if (typeof h.initCore.initialized != "undefined") return !1;
        h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
            var e, t = h.intervalList;
            if (typeof t != "undefined" && t !== null) {
                for (e = 0; e < t.length; e++) f(t[e]);
                h.intervalList = null
            }
        }, h.debug = function() {
            (h.options.debug || !1) && h.log.apply(h, arguments)
        }, h.log = function() {
            var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                t = r.getElementById("log"),
                i, s, o, u, a;
            e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
            for (s = 1, o = arguments.length; s < o; ++s) {
                a = arguments[s];
                if (typeof a == "object" && typeof l != "undefined") try {
                    a = l.stringify(a)
                } catch (f) {}
                i += "\n" + a + "\n"
            }
            return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
        }, h.getInternetExplorerMajorVersion = function() {
            var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function() {
                    var e = 3,
                        t = r.createElement("div"),
                        n = t.getElementsByTagName("i");
                    while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                    return e > 4 ? e : !1
                }();
            return e
        }, h.isInternetExplorer = function() {
            var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
            return e
        }, h.options.html4Mode ? h.emulated = {
            pushState: !0,
            hashChange: !0
        } : h.emulated = {
            pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
            hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
        }, h.enabled = !h.emulated.pushState, h.bugs = {
            setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
        }, h.isEmptyObject = function(e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
        }, h.cloneObject = function(e) {
            var t, n;
            return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
        }, h.getRootUrl = function() {
            var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
            if (r.location.port || !1) e += ":" + r.location.port;
            return e += "/", e
        }, h.getBaseHref = function() {
            var e = r.getElementsByTagName("base"),
                t = null,
                n = "";
            return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
        }, h.getBaseUrl = function() {
            var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
            return e
        }, h.getPageUrl = function() {
            var e = h.getState(!1, !1),
                t = (e || {}).url || h.getLocationHref(),
                n;
            return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
                return /\./.test(e) ? e : e + "/"
            }), n
        }, h.getBasePageUrl = function() {
            var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
                return /[^\/]$/.test(e) ? "" : e
            }).replace(/\/+$/, "") + "/";
            return e
        }, h.getFullUrl = function(e, t) {
            var n = e,
                r = e.substring(0, 1);
            return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
        }, h.getShortUrl = function(e) {
            var t = e,
                n = h.getBaseUrl(),
                r = h.getRootUrl();
            return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
        }, h.getLocationHref = function(e) {
            return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
        }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
            h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
        }, h.getState = function(e, t) {
            typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
            var n = h.getLastSavedState();
            return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
        }, h.getIdByState = function(e) {
            var t = h.extractId(e.url),
                n;
            if (!t) {
                n = h.getStateString(e);
                if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                else {
                    for (;;) {
                        t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                    }
                    h.stateToId[n] = t, h.idToState[t] = e
                }
            }
            return t
        }, h.normalizeState = function(e) {
            var t, n;
            if (!e || typeof e != "object") e = {};
            if (typeof e.normalized != "undefined") return e;
            if (!e.data || typeof e.data != "object") e.data = {};
            return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
        }, h.createStateObject = function(e, t, n) {
            var r = {
                data: e,
                title: t,
                url: n
            };
            return r = h.normalizeState(r), r
        }, h.getStateById = function(e) {
            e = String(e);
            var n = h.idToState[e] || h.store.idToState[e] || t;
            return n
        }, h.getStateString = function(e) {
            var t, n, r;
            return t = h.normalizeState(e), n = {
                data: t.data,
                title: e.title,
                url: e.url
            }, r = l.stringify(n), r
        }, h.getStateId = function(e) {
            var t, n;
            return t = h.normalizeState(e), n = t.id, n
        }, h.getHashByState = function(e) {
            var t, n;
            return t = h.normalizeState(e), n = t.hash, n
        }, h.extractId = function(e) {
            var t, n, r, i;
            return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
        }, h.isTraditionalAnchor = function(e) {
            var t = !/[\/\?\.]/.test(e);
            return t
        }, h.extractState = function(e, t) {
            var n = null,
                r, i;
            return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
        }, h.getIdByUrl = function(e) {
            var n = h.urlToId[e] || h.store.urlToId[e] || t;
            return n
        }, h.getLastSavedState = function() {
            return h.savedStates[h.savedStates.length - 1] || t
        }, h.getLastStoredState = function() {
            return h.storedStates[h.storedStates.length - 1] || t
        }, h.hasUrlDuplicate = function(e) {
            var t = !1,
                n;
            return n = h.extractState(e.url), t = n && n.id !== e.id, t
        }, h.storeState = function(e) {
            return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
        }, h.isLastSavedState = function(e) {
            var t = !1,
                n, r, i;
            return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
        }, h.saveState = function(e) {
            return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
        }, h.getStateByIndex = function(e) {
            var t = null;
            return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
        }, h.getCurrentIndex = function() {
            var e = null;
            return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
        }, h.getHash = function(e) {
            var t = h.getLocationHref(e),
                n;
            return n = h.getHashByUrl(t), n
        }, h.unescapeHash = function(e) {
            var t = h.normalizeHash(e);
            return t = decodeURIComponent(t), t
        }, h.normalizeHash = function(e) {
            var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
            return t
        }, h.setHash = function(e, t) {
            var n, i;
            return t !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.setHash,
                args: arguments,
                queue: t
            }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
        }, h.escapeHash = function(t) {
            var n = h.normalizeHash(t);
            return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
        }, h.getHashByUrl = function(e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return t = h.unescapeHash(t), t
        }, h.setTitle = function(e) {
            var t = e.title,
                n;
            t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
            try {
                r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "<").replace(">", ">").replace(" & ", " & ")
            } catch (i) {}
            return r.title = t, h
        }, h.queues = [], h.busy = function(e) {
            typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
            if (!h.busy.flag) {
                u(h.busy.timeout);
                var t = function() {
                    var e, n, r;
                    if (h.busy.flag) return;
                    for (e = h.queues.length - 1; e >= 0; --e) {
                        n = h.queues[e];
                        if (n.length === 0) continue;
                        r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                    }
                };
                h.busy.timeout = o(t, h.options.busyDelay)
            }
            return h.busy.flag
        }, h.busy.flag = !1, h.fireQueueItem = function(e) {
            return e.callback.apply(e.scope || h, e.args || [])
        }, h.pushQueue = function(e) {
            return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
        }, h.queue = function(e, t) {
            return typeof e == "function" && (e = {
                callback: e
            }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
        }, h.clearQueue = function() {
            return h.busy.flag = !1, h.queues = [], h
        }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
            return h.stateChanged = !0, h.doubleCheckClear(), h
        }, h.doubleCheckClear = function() {
            return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
        }, h.doubleCheck = function(e) {
            return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                return h.doubleCheckClear(), h.stateChanged || e(), !0
            }, h.options.doubleCheckInterval)), h
        }, h.safariStatePoll = function() {
            var t = h.extractState(h.getLocationHref()),
                n;
            if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
            return
        }, h.back = function(e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.back,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function() {
                h.back(!1)
            }), p.go(-1), !0)
        }, h.forward = function(e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.forward,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function() {
                h.forward(!1)
            }), p.go(1), !0)
        }, h.go = function(e, t) {
            var n;
            if (e > 0) for (n = 1; n <= e; ++n) h.forward(t);
            else {
                if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (n = -1; n >= e; --n) h.back(t)
            }
            return h
        };
        if (h.emulated.pushState) {
            var v = function() {};
            h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
        } else h.onPopState = function(t, n) {
            var r = !1,
                i = !1,
                s, o;
            return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
        }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function(t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.pushState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        }, h.replaceState = function(t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.replaceState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        };
        if (s) {
            try {
                h.store = l.parse(s.getItem("History.store")) || {}
            } catch (m) {
                h.store = {}
            }
            h.normalizeStore()
        } else h.store = {}, h.normalizeStore();
        h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function() {
            var e, t, n;
            try {
                e = l.parse(s.getItem("History.store")) || {}
            } catch (r) {
                e = {}
            }
            e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
            for (t in h.idToState) {
                if (!h.idToState.hasOwnProperty(t)) continue;
                e.idToState[t] = h.idToState[t]
            }
            for (t in h.urlToId) {
                if (!h.urlToId.hasOwnProperty(t)) continue;
                e.urlToId[t] = h.urlToId[t]
            }
            for (t in h.stateToId) {
                if (!h.stateToId.hasOwnProperty(t)) continue;
                e.stateToId[t] = h.stateToId[t]
            }
            h.store = e, h.normalizeStore(), n = l.stringify(e);
            try {
                s.setItem("History.store", n)
            } catch (i) {
                if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
            }
        }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
        if (!h.emulated.pushState) {
            h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
            if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function() {
                h.Adapter.trigger(e, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function() {
                h.Adapter.trigger(e, "hashchange")
            })
        }
    }, (!h.options || !h.options.delayInit) && h.init()
}(window)
!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null!=n&&!isNaN(n)}function r(n){return{left:function(t,r,e,u){for(arguments.length<3&&(e=0),arguments.length<4&&(u=t.length);u>e;){var i=e+u>>>1;n(t[i],r)<0?e=i+1:u=i}return e},right:function(t,r,e,u){for(arguments.length<3&&(e=0),arguments.length<4&&(u=t.length);u>e;){var i=e+u>>>1;n(t[i],r)>0?u=i:e=i+1}return e}}}function e(n){return n.length}function u(n){for(var t=1;n*t%1;)t*=10;return t}function i(n,t){try{for(var r in t)Object.defineProperty(n.prototype,r,{value:t[r],enumerable:!1})}catch(e){n.prototype=t}}function o(){}function a(n){return sa+n in this}function c(n){return n=sa+n,n in this&&delete this[n]}function s(){var n=[];return this.forEach(function(t){n.push(t)}),n}function l(){var n=0;for(var t in this)t.charCodeAt(0)===la&&++n;return n}function f(){for(var n in this)if(n.charCodeAt(0)===la)return!1;return!0}function h(){}function g(n,t,r){return function(){var e=r.apply(t,arguments);return e===t?n:e}}function p(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var r=0,e=fa.length;e>r;++r){var u=fa[r]+t;if(u in n)return u}}function v(){}function d(){}function m(n){function t(){for(var t,e=r,u=-1,i=e.length;++u<i;)(t=e[u].on)&&t.apply(this,arguments);return n}var r=[],e=new o;return t.on=function(t,u){var i,o=e.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,r=r.slice(0,i=r.indexOf(o)).concat(r.slice(i+1)),e.remove(t)),u&&r.push(e.set(t,{on:u})),n)},t}function y(){Bo.event.preventDefault()}function x(){for(var n,t=Bo.event;n=t.sourceEvent;)t=n;return t}function M(n){for(var t=new d,r=0,e=arguments.length;++r<e;)t[arguments[r]]=m(t);return t.of=function(r,e){return function(u){try{var i=u.sourceEvent=Bo.event;u.target=n,Bo.event=u,t[u.type].apply(r,e)}finally{Bo.event=i}}},t}function _(n){return ga(n,ya),n}function b(n){return"function"==typeof n?n:function(){return pa(n,this)}}function w(n){return"function"==typeof n?n:function(){return va(n,this)}}function S(n,t){function r(){this.removeAttribute(n)}function e(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var r=t.apply(this,arguments);null==r?this.removeAttribute(n):this.setAttribute(n,r)}function a(){var r=t.apply(this,arguments);null==r?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,r)}return n=Bo.ns.qualify(n),null==t?n.local?e:r:"function"==typeof t?n.local?a:o:n.local?i:u}function k(n){return n.trim().replace(/\s+/g," ")}function E(n){return new RegExp("(?:^|\\s+)"+Bo.requote(n)+"(?:\\s+|$)","g")}function A(n){return n.trim().split(/^|\s+/)}function C(n,t){function r(){for(var r=-1;++r<u;)n[r](this,t)}function e(){for(var r=-1,e=t.apply(this,arguments);++r<u;)n[r](this,e)}n=A(n).map(N);var u=n.length;return"function"==typeof t?e:r}function N(n){var t=E(n);return function(r,e){if(u=r.classList)return e?u.add(n):u.remove(n);var u=r.getAttribute("class")||"";e?(t.lastIndex=0,t.test(u)||r.setAttribute("class",k(u+" "+n))):r.setAttribute("class",k(u.replace(t," ")))}}function z(n,t,r){function e(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,r)}function i(){var e=t.apply(this,arguments);null==e?this.style.removeProperty(n):this.style.setProperty(n,e,r)}return null==t?e:"function"==typeof t?i:u}function L(n,t){function r(){delete this[n]}function e(){this[n]=t}function u(){var r=t.apply(this,arguments);null==r?delete this[n]:this[n]=r}return null==t?r:"function"==typeof t?u:e}function T(n){return"function"==typeof n?n:(n=Bo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function q(n){return{__data__:n}}function R(n){return function(){return ma(this,n)}}function D(t){return arguments.length||(t=n),function(n,r){return n&&r?t(n.__data__,r.__data__):!n-!r}}function P(n,t){for(var r=0,e=n.length;e>r;r++)for(var u,i=n[r],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,r);return n}function U(n){return ga(n,Ma),n}function j(n){var t,r;return function(e,u,i){var o,a=n[i].update,c=a.length;for(i!=r&&(r=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function H(){var n=this.__transition__;n&&++n.active}function F(n,t,r){function e(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Wo(arguments));e.call(this),this.addEventListener(n,this[o]=u,u.$=r),u._=t}function i(){var t,r=new RegExp("^__on([^.]+)"+Bo.requote(n)+"$");for(var e in this)if(t=e.match(r)){var u=this[e];this.removeEventListener(t[1],u,u.$),delete this[e]}}var o="__on"+n,a=n.indexOf("."),c=O;a>0&&(n=n.substring(0,a));var s=ba.get(n);return s&&(n=s,c=I),a?t?u:e:t?v:i}function O(n,t){return function(r){var e=Bo.event;Bo.event=r,t[0]=this.__data__;try{n.apply(this,t)}finally{Bo.event=e}}}function I(n,t){var r=O(n,t);return function(n){var t=this,e=n.relatedTarget;e&&(e===t||8&e.compareDocumentPosition(t))||r.call(t,n)}}function Y(){var n=".dragsuppress-"+ ++Sa,t="click"+n,r=Bo.select(Qo).on("touchmove"+n,y).on("dragstart"+n,y).on("selectstart"+n,y);if(wa){var e=Ko.style,u=e[wa];e[wa]="none"}return function(i){function o(){r.on(t,null)}r.on(n,null),wa&&(e[wa]=u),i&&(r.on(t,function(){y(),o()},!0),setTimeout(o,0))}}function Z(n,t){t.changedTouches&&(t=t.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var e=r.createSVGPoint();return e.x=t.clientX,e.y=t.clientY,e=e.matrixTransform(n.getScreenCTM().inverse()),[e.x,e.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function V(){return Bo.event.changedTouches[0].identifier}function $(){return Bo.event.target}function X(){return Qo}function B(n){return n>0?1:0>n?-1:0}function J(n,t,r){return(t[0]-n[0])*(r[1]-n[1])-(t[1]-n[1])*(r[0]-n[0])}function W(n){return n>1?0:-1>n?ka:Math.acos(n)}function G(n){return n>1?Aa:-1>n?-Aa:Math.asin(n)}function K(n){return((n=Math.exp(n))-1/n)/2}function Q(n){return((n=Math.exp(n))+1/n)/2}function nt(n){return((n=Math.exp(2*n))-1)/(n+1)}function tt(n){return(n=Math.sin(n/2))*n}function rt(){}function et(n,t,r){return new ut(n,t,r)}function ut(n,t,r){this.h=n,this.s=t,this.l=r}function it(n,t,r){function e(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*e(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,r=0>r?0:r>1?1:r,o=.5>=r?r*(1+t):r+t-r*t,i=2*r-o,yt(u(n+120),u(n),u(n-120))}function ot(n,t,r){return new at(n,t,r)}function at(n,t,r){this.h=n,this.c=t,this.l=r}function ct(n,t,r){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),st(r,Math.cos(n*=za)*t,Math.sin(n)*t)}function st(n,t,r){return new lt(n,t,r)}function lt(n,t,r){this.l=n,this.a=t,this.b=r}function ft(n,t,r){var e=(n+16)/116,u=e+t/500,i=e-r/200;return u=gt(u)*Oa,e=gt(e)*Ia,i=gt(i)*Ya,yt(vt(3.2404542*u-1.5371385*e-.4985314*i),vt(-.969266*u+1.8760108*e+.041556*i),vt(.0556434*u-.2040259*e+1.0572252*i))}function ht(n,t,r){return n>0?ot(Math.atan2(r,t)*La,Math.sqrt(t*t+r*r),n):ot(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n){return yt(n>>16,255&n>>8,255&n)}function mt(n){return dt(n)+""}function yt(n,t,r){return new xt(n,t,r)}function xt(n,t,r){this.r=n,this.g=t,this.b=r}function Mt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _t(n,t,r){var e,u,i,o=0,a=0,c=0;if(e=/([a-z]+)\((.*)\)/i.exec(n))switch(u=e[2].split(","),e[1]){case"hsl":return r(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=$a.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.substring(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function bt(n,t,r){var e,u,i=Math.min(n/=255,t/=255,r/=255),o=Math.max(n,t,r),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),e=n==o?(t-r)/a+(r>t?6:0):t==o?(r-n)/a+2:(n-t)/a+4,e*=60):(e=0/0,u=c>0&&1>c?0:e),et(e,u,c)}function wt(n,t,r){n=St(n),t=St(t),r=St(r);var e=pt((.4124564*n+.3575761*t+.1804375*r)/Oa),u=pt((.2126729*n+.7151522*t+.072175*r)/Ia),i=pt((.0193339*n+.119192*t+.9503041*r)/Ya);return st(116*u-16,500*(e-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return"function"==typeof n?n:function(){return n}}function At(n){return n}function Ct(n){return function(t,r,e){return 2===arguments.length&&"function"==typeof r&&(e=r,r=null),Nt(t,r,n,e)}}function Nt(n,t,r,e){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=r.call(i,c)}catch(e){return o.error.call(i,e),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Bo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!Qo.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Bo.event;Bo.event=n;try{o.progress.call(i,c)}finally{Bo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return r=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Wo(arguments)))}}),i.send=function(r,e,u){if(2===arguments.length&&"function"==typeof e&&(u=e,e=null),c.open(r,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==e?null:e),i},i.abort=function(){return c.abort(),i},Bo.rebind(i,o,"on"),null==e?i:i.get(zt(e))}function zt(n){return 1===n.length?function(t,r){n(null==t?r:null)}:n}function Lt(){var n=Tt(),t=qt()-n;t>24?(isFinite(t)&&(clearTimeout(Wa),Wa=setTimeout(Lt,t)),Ja=0):(Ja=1,Ka(Lt))}function Tt(){var n=Date.now();for(Ga=Xa;Ga;)n>=Ga.t&&(Ga.f=Ga.c(n-Ga.t)),Ga=Ga.n;return n}function qt(){for(var n,t=Xa,r=1/0;t;)t.f?t=n?n.n=t.n:Xa=t.n:(t.t<r&&(r=t.t),t=(n=t).n);return Ba=n,r}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var r=Math.pow(10,3*ca(8-t));return{scale:t>8?function(n){return n/r}:function(n){return n*r},symbol:n}}function Pt(n){var t=n.decimal,r=n.thousands,e=n.grouping,u=n.currency,i=e?function(n){for(var t=n.length,u=[],i=0,o=e[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=e[i=(i+1)%e.length];return u.reverse().join(r)}:At;return function(n){var r=nc.exec(n),e=r[1]||" ",o=r[2]||">",a=r[3]||"",c=r[4]||"",s=r[5],l=+r[6],f=r[7],h=r[8],g=r[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===e&&"="===o)&&(s=e="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=tc.get(g)||Ut;var y=s&&f;return function(n){var r=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Bo.formatPrefix(n,h);n=c.scale(n),r=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(e):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+r}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ht(n,t,r){function e(t){var r=n(t),e=i(r,1);return e-t>t-r?r:e}function u(r){return t(r=n(new ec(r-1)),1),r}function i(n,r){return t(n=new ec(+n),r),n}function o(n,e,i){var o=u(n),a=[];if(i>1)for(;e>o;)r(o)%i||a.push(new Date(+o)),t(o,1);else for(;e>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,r){try{ec=jt;var e=new jt;return e._=n,o(e,t,r)}finally{ec=Date}}n.floor=n,n.round=e,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ft(n);return c.floor=c,c.round=Ft(e),c.ceil=Ft(u),c.offset=Ft(i),c.range=a,n}function Ft(n){return function(t,r){try{ec=jt;var e=new jt;return e._=t,n(e,r)._}finally{ec=Date}}}function Ot(n){function t(n){function t(t){for(var r,u,i,o=[],a=-1,c=0;++a<e;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=ic[r=n.charAt(++a)])&&(r=n.charAt(++a)),(i=C[r])&&(r=i(t,null==u?"e"===r?" ":"0":u)),o.push(r),c=a+1);return o.push(n.substring(c,a)),o.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=r(e,n,t,0);if(u!=t.length)return null;"p"in e&&(e.H=e.H%12+12*e.p);var i=null!=e.Z&&ec!==jt,o=new(i?jt:ec);return"j"in e?o.setFullYear(e.y,0,e.j):"w"in e&&("W"in e||"U"in e)?(o.setFullYear(e.y,0,1),o.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(o.getDay()+5)%7:e.w+7*e.U-(o.getDay()+6)%7)):o.setFullYear(e.y,e.m,e.d),o.setHours(e.H+Math.floor(e.Z/100),e.M+e.Z%100,e.S,e.L),i?o._:o},t.toString=function(){return n},t}function r(n,t,r,e){for(var u,i,o,a=0,c=t.length,s=r.length;c>a;){if(e>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in ic?t.charAt(a++):o],!i||(e=i(n,r,e))<0)return-1}else if(u!=r.charCodeAt(e++))return-1}return e}function e(n,t,r){b.lastIndex=0;var e=b.exec(t.substring(r));return e?(n.w=w.get(e[0].toLowerCase()),r+e[0].length):-1}function u(n,t,r){M.lastIndex=0;var e=M.exec(t.substring(r));return e?(n.w=_.get(e[0].toLowerCase()),r+e[0].length):-1}function i(n,t,r){E.lastIndex=0;var e=E.exec(t.substring(r));return e?(n.m=A.get(e[0].toLowerCase()),r+e[0].length):-1}function o(n,t,r){S.lastIndex=0;var e=S.exec(t.substring(r));return e?(n.m=k.get(e[0].toLowerCase()),r+e[0].length):-1}function a(n,t,e){return r(n,C.c.toString(),t,e)}function c(n,t,e){return r(n,C.x.toString(),t,e)}function s(n,t,e){return r(n,C.X.toString(),t,e)}function l(n,t,r){var e=x.get(t.substring(r,r+=2).toLowerCase());return null==e?-1:(n.p=e,r)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function r(n){try{ec=jt;var t=new ec;return t._=n,e(t)}finally{ec=Date}}var e=t(n);return r.parse=function(n){try{ec=jt;var t=e.parse(n);return t&&t._}finally{ec=Date}},r.toString=e.toString,r},t.multi=t.utc.multi=ar;var x=Bo.map(),M=Yt(v),_=Zt(v),b=Yt(d),w=Zt(d),S=Yt(m),k=Zt(m),E=Yt(y),A=Zt(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+rc.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(rc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(rc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:ir,"%":function(){return"%"}},N={a:e,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:tr,I:tr,j:nr,L:ur,m:Kt,M:rr,p:l,S:er,U:$t,w:Vt,W:Xt,x:c,X:s,y:Jt,Y:Bt,Z:Wt,"%":or};return t}function It(n,t,r){var e=0>n?"-":"",u=(e?-n:n)+"",i=u.length;return e+(r>i?new Array(r-i+1).join(t)+u:u)}function Yt(n){return new RegExp("^(?:"+n.map(Bo.requote).join("|")+")","i")}function Zt(n){for(var t=new o,r=-1,e=n.length;++r<e;)t.set(n[r].toLowerCase(),r);return t}function Vt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+1));return e?(n.w=+e[0],r+e[0].length):-1}function $t(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r));return e?(n.U=+e[0],r+e[0].length):-1}function Xt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r));return e?(n.W=+e[0],r+e[0].length):-1}function Bt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+4));return e?(n.y=+e[0],r+e[0].length):-1}function Jt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.y=Gt(+e[0]),r+e[0].length):-1}function Wt(n,t,r){return/^[+-]\d{4}$/.test(t=t.substring(r,r+5))?(n.Z=-t,r+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.m=e[0]-1,r+e[0].length):-1}function Qt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.d=+e[0],r+e[0].length):-1}function nr(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+3));return e?(n.j=+e[0],r+e[0].length):-1}function tr(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.H=+e[0],r+e[0].length):-1}function rr(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.M=+e[0],r+e[0].length):-1}function er(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.S=+e[0],r+e[0].length):-1}function ur(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+3));return e?(n.L=+e[0],r+e[0].length):-1}function ir(n){var t=n.getTimezoneOffset(),r=t>0?"-":"+",e=~~(ca(t)/60),u=ca(t)%60;return r+It(e,"0",2)+It(u,"0",2)}function or(n,t,r){ac.lastIndex=0;var e=ac.exec(t.substring(r,r+1));return e?r+e[0].length:-1}function ar(n){for(var t=n.length,r=-1;++r<t;)n[r][0]=this(n[r][0]);return function(t){for(var r=0,e=n[r];!e[1](t);)e=n[++r];return e[0](t)}}function cr(){}function sr(n,t,r){var e=r.s=n+t,u=e-n,i=e-u;r.t=n-i+(t-u)}function lr(n,t){n&&fc.hasOwnProperty(n.type)&&fc[n.type](n,t)}function fr(n,t,r){var e,u=-1,i=n.length-r;for(t.lineStart();++u<i;)e=n[u],t.point(e[0],e[1],e[2]);t.lineEnd()}function hr(n,t){var r=-1,e=n.length;for(t.polygonStart();++r<e;)fr(n[r],t,1);t.polygonEnd()}function gr(){function n(n,t){n*=za,t=t*za/2+ka/4;var r=n-e,o=r>=0?1:-1,a=o*r,c=Math.cos(t),s=Math.sin(t),l=i*s,f=u*c+l*Math.cos(a),h=l*o*Math.sin(a);gc.add(Math.atan2(h,f)),e=n,u=c,i=s}var t,r,e,u,i;pc.point=function(o,a){pc.point=n,e=(t=o)*za,u=Math.cos(a=(r=a)*za/2+ka/4),i=Math.sin(a)},pc.lineEnd=function(){n(t,r)}}function pr(n){var t=n[0],r=n[1],e=Math.cos(r);return[e*Math.cos(t),e*Math.sin(t),Math.sin(r)]}function vr(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function dr(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function mr(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function yr(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xr(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Mr(n){return[Math.atan2(n[1],n[0]),G(n[2])]}function _r(n,t){return ca(n[0]-t[0])<Ca&&ca(n[1]-t[1])<Ca}function br(n,t){n*=za;var r=Math.cos(t*=za);wr(r*Math.cos(n),r*Math.sin(n),Math.sin(t))}function wr(n,t,r){++vc,mc+=(n-mc)/vc,yc+=(t-yc)/vc,xc+=(r-xc)/vc}function Sr(){function n(n,u){n*=za;var i=Math.cos(u*=za),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=r*c-e*a)*s+(s=e*o-t*c)*s+(s=t*a-r*o)*s),t*o+r*a+e*c);dc+=s,Mc+=s*(t+(t=o)),_c+=s*(r+(r=a)),bc+=s*(e+(e=c)),wr(t,r,e)}var t,r,e;Ec.point=function(u,i){u*=za;var o=Math.cos(i*=za);t=o*Math.cos(u),r=o*Math.sin(u),e=Math.sin(i),Ec.point=n,wr(t,r,e)}}function kr(){Ec.point=br}function Er(){function n(n,t){n*=za;var r=Math.cos(t*=za),o=r*Math.cos(n),a=r*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-e*c,f=e*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=e*o+u*a+i*c,p=h&&-W(g)/h,v=Math.atan2(h,g);wc+=p*s,Sc+=p*l,kc+=p*f,dc+=v,Mc+=v*(e+(e=o)),_c+=v*(u+(u=a)),bc+=v*(i+(i=c)),wr(e,u,i)}var t,r,e,u,i;Ec.point=function(o,a){t=o,r=a,Ec.point=n,o*=za;var c=Math.cos(a*=za);e=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),wr(e,u,i)},Ec.lineEnd=function(){n(t,r),Ec.lineEnd=kr,Ec.point=br}}function Ar(){return!0}function Cr(n,t,r,e,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,r=n[0],e=n[t];if(_r(r,e)){u.lineStart();for(var a=0;t>a;++a)u.point((r=n[a])[0],r[1]);return u.lineEnd(),void 0}var c=new zr(r,n,null,!0),s=new zr(r,null,c,!1);c.o=s,i.push(c),o.push(s),c=new zr(e,n,null,!1),s=new zr(e,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Nr(i),Nr(o),i.length){for(var a=0,c=r,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else e(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else e(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Nr(n){if(t=n.length){for(var t,r,e=0,u=n[0];++e<t;)u.n=r=n[e],r.p=u,u=r;u.n=r=n[0],r.p=u}}function zr(n,t,r,e){this.x=n,this.z=t,this.o=r,this.e=e,this.v=!1,this.n=this.p=null}function Lr(n,t,r,e){return function(u,i){function o(t,r){var e=u(t,r);n(t=e[0],r=e[1])&&i.point(t,r)}function a(n,t){var r=u(n,t);d.point(r[0],r[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var r=u(n,t);M.point(r[0],r[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),r=x.buffer(),e=r.length;if(v.pop(),p.push(v),v=null,e)if(1&t){n=r[0];var u,e=n.length-1,o=-1;if(e>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<e;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else e>1&&2&t&&r.push(r.pop().concat(r.shift())),g.push(r.filter(Tr))}var g,p,v,d=t(i),m=u.invert(e[0],e[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Bo.merge(g);var n=Dr(m,p);g.length?(_||(i.polygonStart(),_=!0),Cr(g,Rr,n,r,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),r(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),r(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=qr(),M=t(x),_=!1;return y}}function Tr(n){return n.length>1}function qr(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,r){n.push([t,r])},lineEnd:v,buffer:function(){var r=t;return t=[],n=null,r},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Rr(n,t){return((n=n.x)[0]<0?n[1]-Aa-Ca:Aa-n[1])-((t=t.x)[0]<0?t[1]-Aa-Ca:Aa-t[1])}function Dr(n,t){var r=n[0],e=n[1],u=[Math.sin(r),-Math.cos(r),0],i=0,o=0;gc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+ka/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+ka/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>ka,k=p*x;if(gc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*Ea:_,S^h>=r^m>=r){var E=dr(pr(f),pr(n));xr(E);var A=dr(u,E);xr(A);var C=(S^_>=0?-1:1)*G(A[2]);(e>C||e===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Ca>i||Ca>i&&0>gc)^1&o}function Pr(n){var t,r=0/0,e=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?ka:-ka,c=ca(i-r);ca(c-ka)<Ca?(n.point(r,e=(e+o)/2>0?Aa:-Aa),n.point(u,e),n.lineEnd(),n.lineStart(),n.point(a,e),n.point(i,e),t=0):u!==a&&c>=ka&&(ca(r-u)<Ca&&(r-=u*Ca),ca(i-a)<Ca&&(i-=a*Ca),e=Ur(r,e,i,o),n.point(u,e),n.lineEnd(),n.lineStart(),n.point(a,e),t=0),n.point(r=i,e=o),u=a},lineEnd:function(){n.lineEnd(),r=e=0/0},clean:function(){return 2-t}}}function Ur(n,t,r,e){var u,i,o=Math.sin(n-r);return ca(o)>Ca?Math.atan((Math.sin(t)*(i=Math.cos(e))*Math.sin(r)-Math.sin(e)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+e)/2}function jr(n,t,r,e){var u;if(null==n)u=r*Aa,e.point(-ka,u),e.point(0,u),e.point(ka,u),e.point(ka,0),e.point(ka,-u),e.point(0,-u),e.point(-ka,-u),e.point(-ka,0),e.point(-ka,u);else if(ca(n[0]-t[0])>Ca){var i=n[0]<t[0]?ka:-ka;u=r*i/2,e.point(-i,u),e.point(0,u),e.point(i,u)}else e.point(t[0],t[1])}function Hr(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function r(n){var r,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?ka:-ka),h):0;if(!r&&(s=c=v)&&n.lineStart(),v!==c&&(g=e(r,p),(_r(r,g)||_r(p,g))&&(p[0]+=Ca,p[1]+=Ca,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=e(p,r),n.point(g[0],g[1])):(g=e(r,p),n.point(g[0],g[1]),n.lineEnd()),r=g;else if(a&&r&&o^v){var m;d&i||!(m=e(p,r,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||r&&_r(r,p)||n.point(p[0],p[1]),r=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),r=null},clean:function(){return l|(s&&c)<<1}}}function e(n,t,r){var e=pr(n),u=pr(t),o=[1,0,0],a=dr(e,u),c=vr(a,a),s=a[0],l=c-s*s;if(!l)return!r&&n;var f=i*c/l,h=-i*s/l,g=dr(o,a),p=yr(o,f),v=yr(a,h);mr(p,v);var d=g,m=vr(p,d),y=vr(d,d),x=m*m-y*(vr(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=yr(d,(-m-M)/y);if(mr(_,p),_=Mr(_),!r)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=ca(A-ka)<Ca,N=C||Ca>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(ca(_[0]-w)<Ca?k:E):k<=_[1]&&_[1]<=E:A>ka^(w<=_[0]&&_[0]<=S)){var z=yr(d,(-m+M)/y);return mr(z,p),[_,Mr(z)]}}}function u(t,r){var e=o?n:ka-n,u=0;return-e>t?u|=1:t>e&&(u|=2),-e>r?u|=4:r>e&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ca(i)>Ca,c=ge(n,6*za);return Lr(t,r,c,o?[0,-n]:[-ka,n-ka])}function Fr(n,t,r,e){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=r-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=e-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Or(n,t,r,e){function u(e,u){return ca(e[0]-n)<Ca?u>0?0:3:ca(e[0]-r)<Ca?u>0?2:1:ca(e[1]-t)<Ca?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var r=u(n,1),e=u(t,1);return r!==e?r-e:0===r?t[1]-n[1]:1===r?n[0]-t[0]:2===r?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,r=d.length,e=n[1],u=0;r>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=e?i[1]>e&&J(s,i,n)>0&&++t:i[1]<=e&&J(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:r,l>1?e:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&r>=u&&i>=t&&e>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Cc,Math.min(Cc,n)),t=Math.max(-Cc,Math.min(Cc,t));var r=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=r,S=!1,r&&(a.lineStart(),a.point(n,t));else if(r&&w)a.point(n,t);else{var e={a:{x:_,y:b},b:{x:n,y:t}};C(e)?(w||(a.lineStart(),a.point(e.a.x,e.a.y)),a.point(e.b.x,e.b.y),r||a.lineEnd(),k=!1):r&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=r}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=qr(),C=Fr(n,t,r,e),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Bo.merge(v);var t=c([n,e]),r=k&&t,u=v.length;(r||u)&&(a.polygonStart(),r&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&Cr(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function Ir(n,t){function r(r,e){return r=n(r,e),t(r[0],r[1])}return n.invert&&t.invert&&(r.invert=function(r,e){return r=t.invert(r,e),r&&n.invert(r[0],r[1])}),r}function Yr(n){var t=0,r=ka/3,e=ie(n),u=e(t,r);return u.parallels=function(n){return arguments.length?e(t=n[0]*ka/180,r=n[1]*ka/180):[180*(t/ka),180*(r/ka)]},u}function Zr(n,t){function r(n,t){var r=Math.sqrt(i-2*u*Math.sin(t))/u;return[r*Math.sin(n*=u),o-r*Math.cos(n)]}var e=Math.sin(n),u=(e+Math.sin(t))/2,i=1+e*(2*u-e),o=Math.sqrt(i)/u;return r.invert=function(n,t){var r=o-t;return[Math.atan2(n,r)/u,G((i-(n*n+r*r)*u*u)/(2*u))]},r}function Vr(){function n(n,t){zc+=u*n-e*t,e=n,u=t}var t,r,e,u;Dc.point=function(i,o){Dc.point=n,t=e=i,r=u=o},Dc.lineEnd=function(){n(t,r)}}function $r(n,t){Lc>n&&(Lc=n),n>qc&&(qc=n),Tc>t&&(Tc=t),t>Rc&&(Rc=t)}function Xr(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=r}function r(n,t){o.push("L",n,",",t)}function e(){a.point=n}function u(){o.push("Z")}var i=Br(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:e,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=e,a.point=n},pointRadius:function(n){return i=Br(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Br(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Jr(n,t){mc+=n,yc+=t,++xc}function Wr(){function n(n,e){var u=n-t,i=e-r,o=Math.sqrt(u*u+i*i);Mc+=o*(t+n)/2,_c+=o*(r+e)/2,bc+=o,Jr(t=n,r=e)}var t,r;Uc.point=function(e,u){Uc.point=n,Jr(t=e,r=u)}}function Gr(){Uc.point=Jr}function Kr(){function n(n,t){var r=n-e,i=t-u,o=Math.sqrt(r*r+i*i);Mc+=o*(e+n)/2,_c+=o*(u+t)/2,bc+=o,o=u*n-e*t,wc+=o*(e+n),Sc+=o*(u+t),kc+=3*o,Jr(e=n,u=t)}var t,r,e,u;Uc.point=function(i,o){Uc.point=n,Jr(t=e=i,r=u=o)},Uc.lineEnd=function(){n(t,r)}}function Qr(n){function t(t,r){n.moveTo(t,r),n.arc(t,r,o,0,Ea)}function r(t,r){n.moveTo(t,r),a.point=e}function e(t,r){n.lineTo(t,r)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=r},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:v};return a}function ne(n){function t(n){return(a?e:r)(n)}function r(t){return ee(t,function(r,e){r=n(r,e),t.point(r[0],r[1])})}function e(t){function r(r,e){r=n(r,e),t.point(r[0],r[1])}function e(){x=0/0,S.point=i,t.lineStart()}function i(r,e){var i=pr([r,e]),o=n(r,e);u(x,M,y,_,b,w,x=o[0],M=o[1],y=r,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=r,t.lineEnd()}function c(){e(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:r,lineStart:e,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=e}};return S}function u(t,r,e,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-r,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=ca(ca(w)-1)<Ca||ca(e-h)<Ca?(e+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],z=C-t,L=N-r,T=x*z-y*L;(T*T/M>i||ca((y*z+x*L)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,r,e,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*za),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function te(n){var t=ne(function(t,r){return n([t*La,r*La])});return function(n){return oe(t(n))}}function re(n){this.stream=n}function ee(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ue(n){return ie(function(){return n})()}function ie(n){function t(n){return n=a(n[0]*za,n[1]*za),[n[0]*h+c,s-n[1]*h]}function r(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*La,n[1]*La]}function e(){a=Ir(o=se(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()
}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=ne(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Ac,_=At,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=oe(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Ac):Hr((b=+n)*za),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Or(n[0][0],n[0][1],n[1][0],n[1][1]):At,u()):w},t.scale=function(n){return arguments.length?(h=+n,e()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],e()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*za,d=n[1]%360*za,e()):[v*La,d*La]},t.rotate=function(n){return arguments.length?(m=n[0]%360*za,y=n[1]%360*za,x=n.length>2?n[2]%360*za:0,e()):[m*La,y*La,x*La]},Bo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&r,e()}}function oe(n){return ee(n,function(t,r){n.point(t*za,r*za)})}function ae(n,t){return[n,t]}function ce(n,t){return[n>ka?n-Ea:-ka>n?n+Ea:n,t]}function se(n,t,r){return n?t||r?Ir(fe(n),he(t,r)):fe(n):t||r?he(t,r):ce}function le(n){return function(t,r){return t+=n,[t>ka?t-Ea:-ka>t?t+Ea:t,r]}}function fe(n){var t=le(n);return t.invert=le(-n),t}function he(n,t){function r(n,t){var r=Math.cos(t),a=Math.cos(n)*r,c=Math.sin(n)*r,s=Math.sin(t),l=s*e+a*u;return[Math.atan2(c*i-l*o,a*e-s*u),G(l*i+c*o)]}var e=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return r.invert=function(n,t){var r=Math.cos(t),a=Math.cos(n)*r,c=Math.sin(n)*r,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*e+l*u),G(l*e-a*u)]},r}function ge(n,t){var r=Math.cos(n),e=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pe(r,u),i=pe(r,i),(o>0?i>u:u>i)&&(u+=o*Ea)):(u=n+o*Ea,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=Mr([r,-e*Math.cos(l),-e*Math.sin(l)]))[0],s[1])}}function pe(n,t){var r=pr(t);r[0]-=n,xr(r);var e=W(-r[1]);return((-r[2]<0?-e:e)+2*Math.PI-Ca)%(2*Math.PI)}function ve(n,t,r){var e=Bo.range(n,t-Ca,r).concat(t);return function(n){return e.map(function(t){return[n,t]})}}function de(n,t,r){var e=Bo.range(n,t-Ca,r).concat(t);return function(n){return e.map(function(t){return[t,n]})}}function me(n){return n.source}function ye(n){return n.target}function xe(n,t,r,e){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(e),a=Math.sin(e),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(r),f=o*Math.sin(r),h=2*Math.asin(Math.sqrt(tt(e-t)+u*o*tt(r-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,r=Math.sin(h-n)*g,e=r*c+t*l,u=r*s+t*f,o=r*i+t*a;return[Math.atan2(u,e)*La,Math.atan2(o,Math.sqrt(e*e+u*u))*La]}:function(){return[n*La,t*La]};return p.distance=h,p}function Me(){function n(n,u){var i=Math.sin(u*=za),o=Math.cos(u),a=ca((n*=za)-t),c=Math.cos(a);jc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=e*i-r*o*c)*a),r*i+e*o*c),t=n,r=i,e=o}var t,r,e;Hc.point=function(u,i){t=u*za,r=Math.sin(i*=za),e=Math.cos(i),Hc.point=n},Hc.lineEnd=function(){Hc.point=Hc.lineEnd=v}}function _e(n,t){function r(t,r){var e=Math.cos(t),u=Math.cos(r),i=n(e*u);return[i*u*Math.sin(t),i*Math.sin(r)]}return r.invert=function(n,r){var e=Math.sqrt(n*n+r*r),u=t(e),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,e*o),Math.asin(e&&r*i/e)]},r}function be(n,t){function r(n,t){o>0?-Aa+Ca>t&&(t=-Aa+Ca):t>Aa-Ca&&(t=Aa-Ca);var r=o/Math.pow(u(t),i);return[r*Math.sin(i*n),o-r*Math.cos(i*n)]}var e=Math.cos(n),u=function(n){return Math.tan(ka/4+n/2)},i=n===t?Math.sin(n):Math.log(e/Math.cos(t))/Math.log(u(t)/u(n)),o=e*Math.pow(u(n),i)/i;return i?(r.invert=function(n,t){var r=o-t,e=B(i)*Math.sqrt(n*n+r*r);return[Math.atan2(n,r)/i,2*Math.atan(Math.pow(o/e,1/i))-Aa]},r):Se}function we(n,t){function r(n,t){var r=i-t;return[r*Math.sin(u*n),i-r*Math.cos(u*n)]}var e=Math.cos(n),u=n===t?Math.sin(n):(e-Math.cos(t))/(t-n),i=e/u+n;return ca(u)<Ca?ae:(r.invert=function(n,t){var r=i-t;return[Math.atan2(n,r)/u,i-B(u)*Math.sqrt(n*n+r*r)]},r)}function Se(n,t){return[n,Math.log(Math.tan(ka/4+t/2))]}function ke(n){var t,r=ue(n),e=r.scale,u=r.translate,i=r.clipExtent;return r.scale=function(){var n=e.apply(r,arguments);return n===r?t?r.clipExtent(null):r:n},r.translate=function(){var n=u.apply(r,arguments);return n===r?t?r.clipExtent(null):r:n},r.clipExtent=function(n){var o=i.apply(r,arguments);if(o===r){if(t=null==n){var a=ka*e(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},r.clipExtent(null)}function Ee(n,t){return[Math.log(Math.tan(ka/4+t/2)),-n]}function Ae(n){return n[0]}function Ce(n){return n[1]}function Ne(n){for(var t=n.length,r=[0,1],e=2,u=2;t>u;u++){for(;e>1&&J(n[r[e-2]],n[r[e-1]],n[u])<=0;)--e;r[e++]=u}return r.slice(0,e)}function ze(n,t){return n[0]-t[0]||n[1]-t[1]}function Le(n,t,r){return(r[0]-t[0])*(n[1]-t[1])<(r[1]-t[1])*(n[0]-t[0])}function Te(n,t,r,e){var u=n[0],i=r[0],o=t[0]-u,a=e[0]-i,c=n[1],s=r[1],l=t[1]-c,f=e[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function qe(n){var t=n[0],r=n[n.length-1];return!(t[0]-r[0]||t[1]-r[1])}function Re(){tu(this),this.edge=this.site=this.circle=null}function De(n){var t=Gc.pop()||new Re;return t.site=n,t}function Pe(n){$e(n),Bc.remove(n),Gc.push(n),tu(n)}function Ue(n){var t=n.circle,r=t.x,e=t.cy,u={x:r,y:e},i=n.P,o=n.N,a=[n];Pe(n);for(var c=i;c.circle&&ca(r-c.circle.x)<Ca&&ca(e-c.circle.cy)<Ca;)i=c.P,a.unshift(c),Pe(c),c=i;a.unshift(c),$e(c);for(var s=o;s.circle&&ca(r-s.circle.x)<Ca&&ca(e-s.circle.cy)<Ca;)o=s.N,a.push(s),Pe(s),s=o;a.push(s),$e(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],Ke(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=We(c.site,s.site,null,u),Ve(c),Ve(s)}function je(n){for(var t,r,e,u,i=n.x,o=n.y,a=Bc._;a;)if(e=He(a,o)-i,e>Ca)a=a.L;else{if(u=i-Fe(a,o),!(u>Ca)){e>-Ca?(t=a.P,r=a):u>-Ca?(t=a,r=a.N):t=r=a;break}if(!a.R){t=a;break}a=a.R}var c=De(n);if(Bc.insert(t,c),t||r){if(t===r)return $e(t),r=De(t.site),Bc.insert(c,r),c.edge=r.edge=We(t.site,c.site),Ve(t),Ve(r),void 0;if(!r)return c.edge=We(t.site,c.site),void 0;$e(t),$e(r);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=r.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};Ke(r.edge,s,p,M),c.edge=We(s,n,null,M),r.edge=We(n,p,null,M),Ve(t),Ve(r)}}function He(n,t){var r=n.site,e=r.x,u=r.y,i=u-t;if(!i)return e;var o=n.P;if(!o)return-1/0;r=o.site;var a=r.x,c=r.y,s=c-t;if(!s)return a;var l=a-e,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+e:(e+a)/2}function Fe(n,t){var r=n.N;if(r)return He(r,t);var e=n.site;return e.y===t?e.x:1/0}function Oe(n){this.site=n,this.edges=[]}function Ie(n){for(var t,r,e,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Xc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),e=l.x,u=l.y,s=a[++o%c].start(),t=s.x,r=s.y,(ca(e-t)>Ca||ca(u-r)>Ca)&&(a.splice(o,0,new Qe(Ge(i.site,l,ca(e-f)<Ca&&p-u>Ca?{x:f,y:ca(t-f)<Ca?r:p}:ca(u-p)<Ca&&h-e>Ca?{x:ca(r-p)<Ca?t:h,y:p}:ca(e-h)<Ca&&u-g>Ca?{x:h,y:ca(t-h)<Ca?r:g}:ca(u-g)<Ca&&e-f>Ca?{x:ca(r-g)<Ca?t:f,y:g}:null),i.site,null)),++c)}function Ye(n,t){return t.angle-n.angle}function Ze(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Ve(n){var t=n.P,r=n.N;if(t&&r){var e=t.site,u=n.site,i=r.site;if(e!==i){var o=u.x,a=u.y,c=e.x-o,s=e.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-Na)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=Kc.pop()||new Ze;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Wc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Wc.insert(y,m),y||(Jc=m)}}}}function $e(n){var t=n.circle;t&&(t.P||(Jc=t.N),Wc.remove(t),Kc.push(t),tu(t),n.circle=null)}function Xe(n){for(var t,r=$c,e=Fr(n[0][0],n[0][1],n[1][0],n[1][1]),u=r.length;u--;)t=r[u],(!Be(t,n)||!e(t)||ca(t.a.x-t.b.x)<Ca&&ca(t.a.y-t.b.y)<Ca)&&(t.a=t.b=null,r.splice(u,1))}function Be(n,t){var r=n.b;if(r)return!0;var e,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};r={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};r={x:d,y:c}}}else if(e=(h-p)/(v-g),u=m-e*d,-1>e||e>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/e,y:c};r={x:(s-u)/e,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/e,y:s};r={x:(c-u)/e,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:e*o+u};r={x:a,y:e*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:e*a+u};r={x:o,y:e*o+u}}return n.a=i,n.b=r,!0}function Je(n,t){this.l=n,this.r=t,this.a=this.b=null}function We(n,t,r,e){var u=new Je(n,t);return $c.push(u),r&&Ke(u,n,t,r),e&&Ke(u,t,n,e),Xc[n.i].edges.push(new Qe(u,n,t)),Xc[t.i].edges.push(new Qe(u,t,n)),u}function Ge(n,t,r){var e=new Je(n,null);return e.a=t,e.b=r,$c.push(e),e}function Ke(n,t,r,e){n.a||n.b?n.l===r?n.b=e:n.a=e:(n.a=e,n.l=t,n.r=r)}function Qe(n,t,r){var e=n.a,u=n.b;this.edge=n,this.site=t,this.angle=r?Math.atan2(r.y-t.y,r.x-t.x):n.l===t?Math.atan2(u.x-e.x,e.y-u.y):Math.atan2(e.x-u.x,u.y-e.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ru(n,t){var r=t,e=t.R,u=r.U;u?u.L===r?u.L=e:u.R=e:n._=e,e.U=u,r.U=e,r.R=e.L,r.R&&(r.R.U=r),e.L=r}function eu(n,t){var r=t,e=t.L,u=r.U;u?u.L===r?u.L=e:u.R=e:n._=e,e.U=u,r.U=e,r.L=e.R,r.L&&(r.L.U=r),e.R=r}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var r,e,u,i=n.sort(ou).pop();for($c=[],Xc=new Array(n.length),Bc=new nu,Wc=new nu;;)if(u=Jc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==r||i.y!==e)&&(Xc[i.i]=new Oe(i),je(i),r=i.x,e=i.y),i=n.pop();else{if(!u)break;Ue(u.arc)}t&&(Xe(t),Ie(t));var o={cells:Xc,edges:$c};return Bc=Wc=$c=Xc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,r){return(n.x-r.x)*(t.y-n.y)-(n.x-t.x)*(r.y-n.y)}function cu(n){return n.x}function su(n){return n.y}function lu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,r,e,u,i){if(!n(t,r,e,u,i)){var o=.5*(r+u),a=.5*(e+i),c=t.nodes;c[0]&&fu(n,c[0],r,e,o,a),c[1]&&fu(n,c[1],o,e,u,a),c[2]&&fu(n,c[2],r,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t){n=Bo.rgb(n),t=Bo.rgb(t);var r=n.r,e=n.g,u=n.b,i=t.r-r,o=t.g-e,a=t.b-u;return function(n){return"#"+Mt(Math.round(r+i*n))+Mt(Math.round(e+o*n))+Mt(Math.round(u+a*n))}}function gu(n,t){var r,e={},u={};for(r in n)r in t?e[r]=du(n[r],t[r]):u[r]=n[r];for(r in t)r in n||(u[r]=t[r]);return function(n){for(r in e)u[r]=e[r](n);return u}}function pu(n,t){return t-=n=+n,function(r){return n+t*r}}function vu(n,t){var r,e,u,i=ns.lastIndex=ts.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(r=ns.exec(n))&&(e=ts.exec(t));)(u=e.index)>i&&(u=t.substring(i,u),a[o]?a[o]+=u:a[++o]=u),(r=r[0])===(e=e[0])?a[o]?a[o]+=e:a[++o]=e:(a[++o]=null,c.push({i:o,x:pu(r,e)})),i=ts.lastIndex;return i<t.length&&(u=t.substring(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var r,e=0;t>e;++e)a[(r=c[e]).i]=r.x(n);return a.join("")})}function du(n,t){for(var r,e=Bo.interpolators.length;--e>=0&&!(r=Bo.interpolators[e](n,t)););return r}function mu(n,t){var r,e=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(r=0;a>r;++r)e.push(du(n[r],t[r]));for(;i>r;++r)u[r]=n[r];for(;o>r;++r)u[r]=t[r];return function(n){for(r=0;a>r;++r)u[r]=e[r](n);return u}}function yu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function Mu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function bu(n){return n*n*n}function wu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,r=t*n;return 4*(.5>n?r:3*(n-t)+r-.75)}function Su(n){return function(t){return Math.pow(t,n)}}function ku(n){return 1-Math.cos(n*Aa)}function Eu(n){return Math.pow(2,10*(n-1))}function Au(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var r;return arguments.length<2&&(t=.45),arguments.length?r=t/Ea*Math.asin(1/n):(n=1,r=t/4),function(e){return 1+n*Math.pow(2,-10*e)*Math.sin((e-r)*Ea/t)}}function Nu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function zu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=Bo.hcl(n),t=Bo.hcl(t);var r=n.h,e=n.c,u=n.l,i=t.h-r,o=t.c-e,a=t.l-u;return isNaN(o)&&(o=0,e=isNaN(e)?t.c:e),isNaN(i)?(i=0,r=isNaN(r)?t.h:r):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(r+i*n,e+o*n,u+a*n)+""}}function Tu(n,t){n=Bo.hsl(n),t=Bo.hsl(t);var r=n.h,e=n.s,u=n.l,i=t.h-r,o=t.s-e,a=t.l-u;return isNaN(o)&&(o=0,e=isNaN(e)?t.s:e),isNaN(i)?(i=0,r=isNaN(r)?t.h:r):i>180?i-=360:-180>i&&(i+=360),function(n){return it(r+i*n,e+o*n,u+a*n)+""}}function qu(n,t){n=Bo.lab(n),t=Bo.lab(t);var r=n.l,e=n.a,u=n.b,i=t.l-r,o=t.a-e,a=t.b-u;return function(n){return ft(r+i*n,e+o*n,u+a*n)+""}}function Ru(n,t){return t-=n,function(r){return Math.round(n+t*r)}}function Du(n){var t=[n.a,n.b],r=[n.c,n.d],e=Uu(t),u=Pu(t,r),i=Uu(ju(r,t,-u))||0;t[0]*r[1]<r[0]*t[1]&&(t[0]*=-1,t[1]*=-1,e*=-1,u*=-1),this.rotate=(e?Math.atan2(t[1],t[0]):Math.atan2(-r[0],r[1]))*La,this.translate=[n.e,n.f],this.scale=[e,i],this.skew=i?Math.atan2(u,i)*La:0}function Pu(n,t){return n[0]*t[0]+n[1]*t[1]}function Uu(n){var t=Math.sqrt(Pu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function ju(n,t,r){return n[0]+=r*t[0],n[1]+=r*t[1],n}function Hu(n,t){var r,e=[],u=[],i=Bo.transform(n),o=Bo.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(e.push("translate(",null,",",null,")"),u.push({i:1,x:pu(a[0],c[0])},{i:3,x:pu(a[1],c[1])})):c[0]||c[1]?e.push("translate("+c+")"):e.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:e.push(e.pop()+"rotate(",null,")")-2,x:pu(s,l)})):l&&e.push(e.pop()+"rotate("+l+")"),f!=h?u.push({i:e.push(e.pop()+"skewX(",null,")")-2,x:pu(f,h)}):h&&e.push(e.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(r=e.push(e.pop()+"scale(",null,",",null,")"),u.push({i:r-4,x:pu(g[0],p[0])},{i:r-2,x:pu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&e.push(e.pop()+"scale("+p+")"),r=u.length,function(n){for(var t,i=-1;++i<r;)e[(t=u[i]).i]=t.x(n);return e.join("")}}function Fu(n,t){return t=t-(n=+n)?1/(t-n):0,function(r){return(r-n)*t}}function Ou(n,t){return t=t-(n=+n)?1/(t-n):0,function(r){return Math.max(0,Math.min(1,(r-n)*t))}}function Iu(n){for(var t=n.source,r=n.target,e=Zu(t,r),u=[t];t!==e;)t=t.parent,u.push(t);for(var i=u.length;r!==e;)u.splice(i,0,r),r=r.parent;return u}function Yu(n){for(var t=[],r=n.parent;null!=r;)t.push(n),n=r,r=r.parent;return t.push(n),t}function Zu(n,t){if(n===t)return n;for(var r=Yu(n),e=Yu(t),u=r.pop(),i=e.pop(),o=null;u===i;)o=u,u=r.pop(),i=e.pop();return o}function Vu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Xu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Bu(n){n.fixed&=-5}function Ju(n,t,r){var e=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,r),n.charge+=i.charge,e+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*r[n.point.index];n.charge+=n.pointCharge=s,e+=s*n.point.x,u+=s*n.point.y}n.cx=e/n.charge,n.cy=u/n.charge}function Wu(n,t){return Bo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ri,n}function Gu(n,t){for(var r=[n];null!=(n=r.pop());)if(t(n),(u=n.children)&&(e=u.length))for(var e,u;--e>=0;)r.push(u[e])}function Ku(n,t){for(var r=[n],e=[];null!=(n=r.pop());)if(e.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)r.push(i[o]);for(;null!=(n=e.pop());)t(n)}function Qu(n){return n.children}function ni(n){return n.value}function ti(n,t){return t.value-n.value}function ri(n){return Bo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ei(n){return n.x}function ui(n){return n.y}function ii(n,t,r){n.y0=t,n.y=r}function oi(n){return Bo.range(n.length)}function ai(n){for(var t=-1,r=n[0].length,e=[];++t<r;)e[t]=0;return e}function ci(n){for(var t,r=1,e=0,u=n[0][1],i=n.length;i>r;++r)(t=n[r][1])>u&&(e=r,u=t);return e}function si(n){return n.reduce(li,0)}function li(n,t){return n+t[1]}function fi(n,t){return hi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function hi(n,t){for(var r=-1,e=+n[0],u=(n[1]-e)/t,i=[];++r<=t;)i[r]=u*r+e;return i}function gi(n){return[Bo.min(n),Bo.max(n)]}function pi(n,t){return n.value-t.value}function vi(n,t){var r=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=r,r._pack_prev=t}function di(n,t){n._pack_next=t,t._pack_prev=n}function mi(n,t){var r=t.x-n.x,e=t.y-n.y,u=n.r+t.r;return.999*u*u>r*r+e*e}function yi(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((r=n.children)&&(s=r.length)){var r,e,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(r.forEach(xi),e=r[0],e.x=-e.r,e.y=0,t(e),s>1&&(u=r[1],u.x=u.r,u.y=0,t(u),s>2))for(i=r[2],bi(e,u,i),t(i),vi(e,i),e._pack_prev=i,vi(i,u),u=e._pack_next,o=3;s>o;o++){bi(e,u,i=r[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(mi(a,i)){p=1;break}if(1==p)for(c=e._pack_prev;c!==a._pack_prev&&!mi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<e.r?di(e,u=a):di(e=c,u),o--):(vi(e,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=r[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,r.forEach(Mi)}}function xi(n){n._pack_next=n._pack_prev=n}function Mi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,r,e){var u=n.children;if(n.x=t+=e*n.x,n.y=r+=e*n.y,n.r*=e,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,r,e)}function bi(n,t,r){var e=n.r+r.r,u=t.x-n.x,i=t.y-n.y;if(e&&(u||i)){var o=t.r+r.r,a=u*u+i*i;o*=o,e*=e;var c=.5+(e-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(e+a)-(e-=a)*e-o*o))/(2*a);r.x=n.x+c*u+s*i,r.y=n.y+c*i-s*u}else r.x=n.x+e,r.y=n.y}function wi(n,t){return n.parent==t.parent?1:2}function Si(n){var t=n.children;return t.length?t[0]:n.t}function ki(n){var t,r=n.children;return(t=r.length)?r[t-1]:n.t}function Ei(n,t,r){var e=r/(t.i-n.i);t.c-=e,t.s+=r,n.c+=e,t.z+=r,t.m+=r}function Ai(n){for(var t,r=0,e=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=r,t.m+=r,r+=t.s+(e+=t.c)}function Ci(n,t,r){return n.a.parent===t.parent?n.a:r}function Ni(n){return 1+Bo.max(n,function(n){return n.y})}function zi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,r=n.children;return r&&(t=r.length)?Ti(r[t-1]):n}function qi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ri(n,t){var r=n.x+t[3],e=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(r+=u/2,u=0),0>i&&(e+=i/2,i=0),{x:r,y:e,dx:u,dy:i}}function Di(n){var t=n[0],r=n[n.length-1];return r>t?[t,r]:[r,t]}function Pi(n){return n.rangeExtent?n.rangeExtent():Di(n.range())}function Ui(n,t,r,e){var u=r(n[0],n[1]),i=e(t[0],t[1]);return function(n){return i(u(n))}}function ji(n,t){var r,e=0,u=n.length-1,i=n[e],o=n[u];return i>o&&(r=e,e=u,u=r,r=i,i=o,o=r),n[e]=t.floor(i),n[u]=t.ceil(o),n}function Hi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:hs}function Fi(n,t,r,e){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(r(n[o-1],n[o])),i.push(e(t[o-1],t[o]));return function(t){var r=Bo.bisect(n,t,1,a)-1;return i[r](u[r](t))}}function Oi(n,t,r,e){function u(){var u=Math.min(n.length,t.length)>2?Fi:Ui,c=e?Ou:Fu;return o=u(n,t,c,r),a=u(t,n,c,du),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ru)},i.clamp=function(n){return arguments.length?(e=n,u()):e},i.interpolate=function(n){return arguments.length?(r=n,u()):r},i.ticks=function(t){return Vi(n,t)},i.tickFormat=function(t,r){return $i(n,t,r)},i.nice=function(t){return Yi(n,t),u()},i.copy=function(){return Oi(n,t,r,e)},u()}function Ii(n,t){return Bo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Yi(n,t){return ji(n,Hi(Zi(n,t)[2]))}function Zi(n,t){null==t&&(t=10);var r=Di(n),e=r[1]-r[0],u=Math.pow(10,Math.floor(Math.log(e/t)/Math.LN10)),i=t/e*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),r[0]=Math.ceil(r[0]/u)*u,r[1]=Math.floor(r[1]/u)*u+.5*u,r[2]=u,r}function Vi(n,t){return Bo.range.apply(Bo,Zi(n,t))}function $i(n,t,r){var e=Zi(n,t);if(r){var u=nc.exec(r);if(u.shift(),"s"===u[8]){var i=Bo.formatPrefix(Math.max(ca(e[0]),ca(e[1])));return u[7]||(u[7]="."+Xi(i.scale(e[2]))),u[8]="f",r=Bo.format(u.join("")),function(n){return r(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Bi(u[8],e)),r=u.join("")}else r=",."+Xi(e[2])+"f";return Bo.format(r)}function Xi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Bi(n,t){var r=Xi(t[2]);return n in gs?Math.abs(r-Xi(Math.max(ca(t[0]),ca(t[1]))))+ +("e"!==n):r-2*("%"===n)}function Ji(n,t,r,e){function u(n){return(r?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return r?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(r=t[0]>=0,n.domain((e=t.map(Number)).map(u)),o):e},o.base=function(r){return arguments.length?(t=+r,n.domain(e.map(u)),o):t},o.nice=function(){var t=ji(e.map(u),r?Math:vs);return n.domain(t),e=t.map(i),o},o.ticks=function(){var n=Di(e),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(r){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return ps;arguments.length<2?t=ps:"function"!=typeof t&&(t=Bo.format(t));var e,a=Math.max(.1,n/o.ticks().length),c=r?(e=1e-12,Math.ceil):(e=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+e))<=a?t(n):""}},o.copy=function(){return Ji(n.copy(),t,r,e)},Ii(o,n)}function Wi(n,t,r){function e(t){return n(u(t))}var u=Gi(t),i=Gi(1/t);return e.invert=function(t){return i(n.invert(t))},e.domain=function(t){return arguments.length?(n.domain((r=t.map(Number)).map(u)),e):r},e.ticks=function(n){return Vi(r,n)},e.tickFormat=function(n,t){return $i(r,n,t)},e.nice=function(n){return e.domain(Yi(r,n))},e.exponent=function(o){return arguments.length?(u=Gi(t=o),i=Gi(1/t),n.domain(r.map(u)),e):t},e.copy=function(){return Wi(n.copy(),t,r)},Ii(e,n)}function Gi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Ki(n,t){function r(r){return i[((u.get(r)||("range"===t.t?u.set(r,n.push(r)):0/0))-1)%i.length]}function e(t,r){return Bo.range(n.length).map(function(n){return t+r*n})}var u,i,a;return r.domain=function(e){if(!arguments.length)return n;n=[],u=new o;for(var i,a=-1,c=e.length;++a<c;)u.has(i=e[a])||u.set(i,n.push(i));return r[t.t].apply(r,t.a)},r.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},r):i},r.rangePoints=function(u,o){arguments.length<2&&(o=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+o);return i=e(n.length<2?(c+s)/2:c+l*o/2,l),a=0,t={t:"rangePoints",a:arguments},r},r.rangeBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-o+2*c);return i=e(l+h*c,h),s&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},r},r.rangeRoundBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-o+2*c)),g=f-l-(n.length-o)*h;return i=e(l+Math.round(g/2),h),s&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},r},r.rangeBand=function(){return a},r.rangeExtent=function(){return Di(t.a[0])},r.copy=function(){return Ki(n,t)},r.domain(n)}function Qi(r,e){function u(){var n=0,t=e.length;for(o=[];++n<t;)o[n-1]=Bo.quantile(r,n/t);return i}function i(n){return isNaN(n=+n)?void 0:e[Bo.bisect(o,n)]}var o;return i.domain=function(e){return arguments.length?(r=e.filter(t).sort(n),u()):r},i.range=function(n){return arguments.length?(e=n,u()):e},i.quantiles=function(){return o},i.invertExtent=function(n){return n=e.indexOf(n),0>n?[0/0,0/0]:[n>0?o[n-1]:r[0],n<o.length?o[n]:r[r.length-1]]},i.copy=function(){return Qi(r,e)},u()}function no(n,t,r){function e(t){return r[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=r.length/(t-n),o=r.length-1,e}var i,o;return e.domain=function(r){return arguments.length?(n=+r[0],t=+r[r.length-1],u()):[n,t]},e.range=function(n){return arguments.length?(r=n,u()):r},e.invertExtent=function(t){return t=r.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},e.copy=function(){return no(n,t,r)},u()}function to(n,t){function r(r){return r>=r?t[Bo.bisect(n,r)]:void 0}return r.domain=function(t){return arguments.length?(n=t,r):n},r.range=function(n){return arguments.length?(t=n,r):t},r.invertExtent=function(r){return r=t.indexOf(r),[n[r-1],n[r]]},r.copy=function(){return to(n,t)},r}function ro(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(r){return arguments.length?(n=r.map(t),t):n},t.ticks=function(t){return Vi(n,t)},t.tickFormat=function(t,r){return $i(n,t,r)},t.copy=function(){return ro(n)},t}function eo(n){return n.innerRadius}function uo(n){return n.outerRadius}function io(n){return n.startAngle}function oo(n){return n.endAngle}function ao(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=Et(r),p=Et(e);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var r=Ae,e=Ce,u=Ar,i=co,o=i.key,a=.7;return t.x=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(e=n,t):e},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=bs.get(n)||co).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function co(n){return n.join("L")}function so(n){return co(n)+"Z"}function lo(n){for(var t=0,r=n.length,e=n[0],u=[e[0],",",e[1]];++t<r;)u.push("H",(e[0]+(e=n[t])[0])/2,"V",e[1]);return r>1&&u.push("H",e[0]),u.join("")}function fo(n){for(var t=0,r=n.length,e=n[0],u=[e[0],",",e[1]];++t<r;)u.push("V",(e=n[t])[1],"H",e[0]);return u.join("")}function ho(n){for(var t=0,r=n.length,e=n[0],u=[e[0],",",e[1]];++t<r;)u.push("H",(e=n[t])[0],"V",e[1]);return u.join("")}function go(n,t){return n.length<4?co(n):n[1]+mo(n.slice(1,n.length-1),yo(n,t))}function po(n,t){return n.length<3?co(n):n[0]+mo((n.push(n[0]),n),yo([n[n.length-2]].concat(n,[n[1]]),t))}function vo(n,t){return n.length<3?co(n):n[0]+mo(n,yo(n,t))}function mo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return co(n);var r=n.length!=t.length,e="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(r&&(e+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,e+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],e+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(r){var l=n[c];e+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return e}function yo(n,t){for(var r,e=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)r=i,i=o,o=n[a],e.push([u*(o[0]-r[0]),u*(o[1]-r[1])]);return e}function xo(n){if(n.length<3)return co(n);var t=1,r=n.length,e=n[0],u=e[0],i=e[1],o=[u,u,u,(e=n[1])[0]],a=[i,i,i,e[1]],c=[u,",",i,"L",wo(ks,o),",",wo(ks,a)];for(n.push(n[r-1]);++t<=r;)e=n[t],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),So(c,o,a);return n.pop(),c.push("L",e),c.join("")}function Mo(n){if(n.length<4)return co(n);for(var t,r=[],e=-1,u=n.length,i=[0],o=[0];++e<3;)t=n[e],i.push(t[0]),o.push(t[1]);for(r.push(wo(ks,i)+","+wo(ks,o)),--e;++e<u;)t=n[e],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),So(r,i,o);return r.join("")}function _o(n){for(var t,r,e=-1,u=n.length,i=u+4,o=[],a=[];++e<4;)r=n[e%u],o.push(r[0]),a.push(r[1]);for(t=[wo(ks,o),",",wo(ks,a)],--e;++e<i;)r=n[e%u],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),So(t,o,a);return t.join("")}function bo(n,t){var r=n.length-1;if(r)for(var e,u,i=n[0][0],o=n[0][1],a=n[r][0]-i,c=n[r][1]-o,s=-1;++s<=r;)e=n[s],u=s/r,e[0]=t*e[0]+(1-t)*(i+u*a),e[1]=t*e[1]+(1-t)*(o+u*c);return xo(n)}function wo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function So(n,t,r){n.push("C",wo(ws,t),",",wo(ws,r),",",wo(Ss,t),",",wo(Ss,r),",",wo(ks,t),",",wo(ks,r))}function ko(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Eo(n){for(var t=0,r=n.length-1,e=[],u=n[0],i=n[1],o=e[0]=ko(u,i);++t<r;)e[t]=(o+(o=ko(u=i,i=n[t+1])))/2;return e[t]=o,e}function Ao(n){for(var t,r,e,u,i=[],o=Eo(n),a=-1,c=n.length-1;++a<c;)t=ko(n[a],n[a+1]),ca(t)<Ca?o[a]=o[a+1]=0:(r=o[a]/t,e=o[a+1]/t,u=r*r+e*e,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*r,o[a+1]=u*e));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Co(n){return n.length<3?co(n):n[0]+mo(n,Ao(n))}function No(n){for(var t,r,e,u=-1,i=n.length;++u<i;)t=n[u],r=t[0],e=t[1]+Ms,t[0]=r*Math.cos(e),t[1]=r*Math.sin(e);return n}function zo(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=Et(r),_=Et(u),b=r===e?function(){return g}:Et(e),w=u===i?function(){return p}:Et(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var r=Ae,e=Ae,u=0,i=Ce,o=Ar,a=co,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(r=e=n,t):e},t.x0=function(n){return arguments.length?(r=n,t):r},t.x1=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=bs.get(n)||co).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Lo(n){return n.radius}function To(n){return[n.x,n.y]}function qo(n){return function(){var t=n.apply(this,arguments),r=t[0],e=t[1]+Ms;return[r*Math.cos(e),r*Math.sin(e)]}}function Ro(){return 64}function Do(){return"circle"}function Po(n){var t=Math.sqrt(n/ka);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Uo(n,t){return ga(n,Ls),n.id=t,n}function jo(n,t,r,e){var u=n.id;return P(n,"function"==typeof r?function(n,i,o){n.__transition__[u].tween.set(t,e(r.call(n,n.__data__,i,o)))}:(r=e(r),function(n){n.__transition__[u].tween.set(t,r)}))}function Ho(n){return null==n&&(n=""),function(){this.textContent=n}}function Fo(n,t,r,e){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[r];if(!i){var a=e.time;i=u[r]={tween:new o,time:a,ease:e.ease,delay:e.delay,duration:e.duration},++u.count,Bo.timer(function(e){function o(e){return u.active>r?s():(u.active=r,i.event&&i.event.start.call(n,l,t),i.tween.forEach(function(r,e){(e=e.call(n,l,t))&&v.push(e)}),Bo.timer(function(){return p.c=c(e||1)?Ar:c,1},0,a),void 0)}function c(e){if(u.active!==r)return s();for(var o=e/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);return o>=1?(i.event&&i.event.end.call(n,l,t),s()):void 0}function s(){return--u.count?delete u[r]:delete n.__transition__,1}var l=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=Ga,v=[];return p.t=h+a,e>=h?o(e-h):(p.c=o,void 0)},0,a)}}function Oo(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Io(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Yo(n){return n.toISOString()}function Zo(n,t,r){function e(t){return n(t)}function u(n,r){var e=n[1]-n[0],u=e/r,i=Bo.bisect(Fs,u);return i==Fs.length?[t.year,Zi(n.map(function(n){return n/31536e6}),r)[2]]:i?t[u/Fs[i-1]<Fs[i]/u?i-1:i]:[Ys,Zi(n,r)[2]]}return e.invert=function(t){return Vo(n.invert(t))
},e.domain=function(t){return arguments.length?(n.domain(t),e):n.domain().map(Vo)},e.nice=function(n,t){function r(r){return!isNaN(r)&&!n.range(r,Vo(+r+1),t).length}var i=e.domain(),o=Di(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),e.domain(ji(i,t>1?{floor:function(t){for(;r(t=n.floor(t));)t=Vo(t-1);return t},ceil:function(t){for(;r(t=n.ceil(t));)t=Vo(+t+1);return t}}:n))},e.ticks=function(n,t){var r=Di(e.domain()),i=null==n?u(r,10):"number"==typeof n?u(r,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(r[0],Vo(+r[1]+1),1>t?1:t)},e.tickFormat=function(){return r},e.copy=function(){return Zo(n.copy(),t,r)},Ii(e,n)}function Vo(n){return new Date(n)}function $o(n){return JSON.parse(n.responseText)}function Xo(n){var t=Go.createRange();return t.selectNode(Go.body),t.createContextualFragment(n.responseText)}var Bo={version:"3.4.8"};Date.now||(Date.now=function(){return+new Date});var Jo=[].slice,Wo=function(n){return Jo.call(n)},Go=document,Ko=Go.documentElement,Qo=window;try{Wo(Ko.childNodes)[0].nodeType}catch(na){Wo=function(n){for(var t=n.length,r=new Array(t);t--;)r[t]=n[t];return r}}try{Go.createElement("div").style.setProperty("opacity",0,"")}catch(ta){var ra=Qo.Element.prototype,ea=ra.setAttribute,ua=ra.setAttributeNS,ia=Qo.CSSStyleDeclaration.prototype,oa=ia.setProperty;ra.setAttribute=function(n,t){ea.call(this,n,t+"")},ra.setAttributeNS=function(n,t,r){ua.call(this,n,t,r+"")},ia.setProperty=function(n,t,r){oa.call(this,n,t+"",r)}}Bo.ascending=n,Bo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Bo.min=function(n,t){var r,e,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(r=n[u])&&r>=r);)r=void 0;for(;++u<i;)null!=(e=n[u])&&r>e&&(r=e)}else{for(;++u<i&&!(null!=(r=t.call(n,n[u],u))&&r>=r);)r=void 0;for(;++u<i;)null!=(e=t.call(n,n[u],u))&&r>e&&(r=e)}return r},Bo.max=function(n,t){var r,e,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(r=n[u])&&r>=r);)r=void 0;for(;++u<i;)null!=(e=n[u])&&e>r&&(r=e)}else{for(;++u<i&&!(null!=(r=t.call(n,n[u],u))&&r>=r);)r=void 0;for(;++u<i;)null!=(e=t.call(n,n[u],u))&&e>r&&(r=e)}return r},Bo.extent=function(n,t){var r,e,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(r=u=n[i])&&r>=r);)r=u=void 0;for(;++i<o;)null!=(e=n[i])&&(r>e&&(r=e),e>u&&(u=e))}else{for(;++i<o&&!(null!=(r=u=t.call(n,n[i],i))&&r>=r);)r=void 0;for(;++i<o;)null!=(e=t.call(n,n[i],i))&&(r>e&&(r=e),e>u&&(u=e))}return[r,u]},Bo.sum=function(n,t){var r,e=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(r=+n[i])||(e+=r);else for(;++i<u;)isNaN(r=+t.call(n,n[i],i))||(e+=r);return e},Bo.mean=function(n,r){var e,u=0,i=n.length,o=-1,a=i;if(1===arguments.length)for(;++o<i;)t(e=n[o])?u+=e:--a;else for(;++o<i;)t(e=r.call(n,n[o],o))?u+=e:--a;return a?u/a:void 0},Bo.quantile=function(n,t){var r=(n.length-1)*t+1,e=Math.floor(r),u=+n[e-1],i=r-e;return i?u+i*(n[e]-u):u},Bo.median=function(r,e){return arguments.length>1&&(r=r.map(e)),r=r.filter(t),r.length?Bo.quantile(r.sort(n),.5):void 0};var aa=r(n);Bo.bisectLeft=aa.left,Bo.bisect=Bo.bisectRight=aa.right,Bo.bisector=function(t){return r(1===t.length?function(r,e){return n(t(r),e)}:t)},Bo.shuffle=function(n){for(var t,r,e=n.length;e;)r=0|Math.random()*e--,t=n[e],n[e]=n[r],n[r]=t;return n},Bo.permute=function(n,t){for(var r=t.length,e=new Array(r);r--;)e[r]=n[t[r]];return e},Bo.pairs=function(n){for(var t,r=0,e=n.length-1,u=n[0],i=new Array(0>e?0:e);e>r;)i[r]=[t=u,u=n[++r]];return i},Bo.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,t=Bo.min(arguments,e),r=new Array(t);++n<t;)for(var u,i=-1,o=r[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return r},Bo.transpose=function(n){return Bo.zip.apply(Bo,n)},Bo.keys=function(n){var t=[];for(var r in n)t.push(r);return t},Bo.values=function(n){var t=[];for(var r in n)t.push(n[r]);return t},Bo.entries=function(n){var t=[];for(var r in n)t.push({key:r,value:n[r]});return t},Bo.merge=function(n){for(var t,r,e,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(r=new Array(o);--u>=0;)for(e=n[u],t=e.length;--t>=0;)r[--o]=e[t];return r};var ca=Math.abs;Bo.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var e,i=[],o=u(ca(r)),a=-1;if(n*=o,t*=o,r*=o,0>r)for(;(e=n+r*++a)>t;)i.push(e/o);else for(;(e=n+r*++a)<t;)i.push(e/o);return i},Bo.map=function(n){var t=new o;if(n instanceof o)n.forEach(function(n,r){t.set(n,r)});else for(var r in n)t.set(r,n[r]);return t},i(o,{has:a,get:function(n){return this[sa+n]},set:function(n,t){return this[sa+n]=t},remove:c,keys:s,values:function(){var n=[];return this.forEach(function(t,r){n.push(r)}),n},entries:function(){var n=[];return this.forEach(function(t,r){n.push({key:t,value:r})}),n},size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===la&&n.call(this,t.substring(1),this[t])}});var sa="\x00",la=sa.charCodeAt(0);Bo.nest=function(){function n(t,a,c){if(c>=i.length)return e?e.call(u,a):r?a.sort(r):a;for(var s,l,f,h,g=-1,p=a.length,v=i[c++],d=new o;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(r,e){l.set(r,n(t,e,c))}):(l={},f=function(r,e){l[r]=n(t,e,c)}),d.forEach(f),l}function t(n,r){if(r>=i.length)return n;var e=[],u=a[r++];return n.forEach(function(n,u){e.push({key:n,values:t(u,r)})}),u?e.sort(function(n,t){return u(n.key,t.key)}):e}var r,e,u={},i=[],a=[];return u.map=function(t,r){return n(r,t,0)},u.entries=function(r){return t(n(Bo.map,r,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return r=n,u},u.rollup=function(n){return e=n,u},u},Bo.set=function(n){var t=new h;if(n)for(var r=0,e=n.length;e>r;++r)t.add(n[r]);return t},i(h,{has:a,add:function(n){return this[sa+n]=!0,n},remove:function(n){return n=sa+n,n in this&&delete this[n]},values:s,size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===la&&n.call(this,t.substring(1))}}),Bo.behavior={},Bo.rebind=function(n,t){for(var r,e=1,u=arguments.length;++e<u;)n[r=arguments[e]]=g(n,t,t[r]);return n};var fa=["webkit","ms","moz","Moz","o","O"];Bo.dispatch=function(){for(var n=new d,t=-1,r=arguments.length;++t<r;)n[arguments[t]]=m(n);return n},d.prototype.on=function(n,t){var r=n.indexOf("."),e="";if(r>=0&&(e=n.substring(r+1),n=n.substring(0,r)),n)return arguments.length<2?this[n].on(e):this[n].on(e,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(e,null);return this}},Bo.event=null,Bo.requote=function(n){return n.replace(ha,"\\$&")};var ha=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ga={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var r in t)n[r]=t[r]},pa=function(n,t){return t.querySelector(n)},va=function(n,t){return t.querySelectorAll(n)},da=Ko[p(Ko,"matchesSelector")],ma=function(n,t){return da.call(n,t)};"function"==typeof Sizzle&&(pa=function(n,t){return Sizzle(n,t)[0]||null},va=Sizzle,ma=Sizzle.matchesSelector),Bo.selection=function(){return _a};var ya=Bo.selection.prototype=[];ya.select=function(n){var t,r,e,u,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(e=this[o]).parentNode;for(var c=-1,s=e.length;++c<s;)(u=e[c])?(t.push(r=n.call(u,u.__data__,c,o)),r&&"__data__"in u&&(r.__data__=u.__data__)):t.push(null)}return _(i)},ya.selectAll=function(n){var t,r,e=[];n=w(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(r=o[a])&&(e.push(t=Wo(n.call(r,r.__data__,a,u))),t.parentNode=r);return _(e)};var xa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Bo.ns={prefix:xa,qualify:function(n){var t=n.indexOf(":"),r=n;return t>=0&&(r=n.substring(0,t),n=n.substring(t+1)),xa.hasOwnProperty(r)?{space:xa[r],local:n}:n}},ya.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var r=this.node();return n=Bo.ns.qualify(n),n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}for(t in n)this.each(S(t,n[t]));return this}return this.each(S(n,t))},ya.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var r=this.node(),e=(n=A(n)).length,u=-1;if(t=r.classList){for(;++u<e;)if(!t.contains(n[u]))return!1}else for(t=r.getAttribute("class");++u<e;)if(!E(n[u]).test(t))return!1;return!0}for(t in n)this.each(C(t,n[t]));return this}return this.each(C(n,t))},ya.style=function(n,t,r){var e=arguments.length;if(3>e){if("string"!=typeof n){2>e&&(t="");for(r in n)this.each(z(r,n[r],t));return this}if(2>e)return Qo.getComputedStyle(this.node(),null).getPropertyValue(n);r=""}return this.each(z(n,t,r))},ya.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(L(t,n[t]));return this}return this.each(L(n,t))},ya.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ya.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ya.append=function(n){return n=T(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ya.insert=function(n,t){return n=T(n),t=b(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ya.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},ya.data=function(n,t){function r(n,r){var e,u,i,a=n.length,f=r.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new o,y=new o,x=[];for(e=-1;++e<a;)d=t.call(u=n[e],u.__data__,e),m.has(d)?v[e]=u:m.set(d,u),x.push(d);for(e=-1;++e<f;)d=t.call(r,i=r[e],e),(u=m.get(d))?(g[e]=u,u.__data__=i):y.has(d)||(p[e]=q(i)),y.set(d,i),m.remove(d);for(e=-1;++e<a;)m.has(x[e])&&(v[e]=n[e])}else{for(e=-1;++e<h;)u=n[e],i=r[e],u?(u.__data__=i,g[e]=u):p[e]=q(i);for(;f>e;++e)p[e]=q(r[e]);for(;a>e;++e)v[e]=n[e]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var e,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(e=this[0]).length);++i<a;)(u=e[i])&&(n[i]=u.__data__);return n}var c=U([]),s=_([]),l=_([]);if("function"==typeof n)for(;++i<a;)r(e=this[i],n.call(e,e.parentNode.__data__,i));else for(;++i<a;)r(e=this[i],n);return s.enter=function(){return c},s.exit=function(){return l},s},ya.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ya.filter=function(n){var t,r,e,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(r=this[i]).parentNode;for(var a=0,c=r.length;c>a;a++)(e=r[a])&&n.call(e,e.__data__,a,i)&&t.push(e)}return _(u)},ya.order=function(){for(var n=-1,t=this.length;++n<t;)for(var r,e=this[n],u=e.length-1,i=e[u];--u>=0;)(r=e[u])&&(i&&i!==r.nextSibling&&i.parentNode.insertBefore(r,i),i=r);return this},ya.sort=function(n){n=D.apply(this,arguments);for(var t=-1,r=this.length;++t<r;)this[t].sort(n);return this.order()},ya.each=function(n){return P(this,function(t,r,e){n.call(t,t.__data__,r,e)})},ya.call=function(n){var t=Wo(arguments);return n.apply(t[0]=this,t),this},ya.empty=function(){return!this.node()},ya.node=function(){for(var n=0,t=this.length;t>n;n++)for(var r=this[n],e=0,u=r.length;u>e;e++){var i=r[e];if(i)return i}return null},ya.size=function(){var n=0;return this.each(function(){++n}),n};var Ma=[];Bo.selection.enter=U,Bo.selection.enter.prototype=Ma,Ma.append=ya.append,Ma.empty=ya.empty,Ma.node=ya.node,Ma.call=ya.call,Ma.size=ya.size,Ma.select=function(n){for(var t,r,e,u,i,o=[],a=-1,c=this.length;++a<c;){e=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(e[s]=r=n.call(u.parentNode,i.__data__,s,a)),r.__data__=i.__data__):t.push(null)}return _(o)},Ma.insert=function(n,t){return arguments.length<2&&(t=j(this)),ya.insert.call(this,n,t)},ya.transition=function(){for(var n,t,r=As||++Ts,e=[],u=Cs||{time:Date.now(),ease:wu,delay:0,duration:250},i=-1,o=this.length;++i<o;){e.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&Fo(t,c,r,u),n.push(t)}return Uo(e,r)},ya.interrupt=function(){return this.each(H)},Bo.select=function(n){var t=["string"==typeof n?pa(n,Go):n];return t.parentNode=Ko,_([t])},Bo.selectAll=function(n){var t=Wo("string"==typeof n?va(n,Go):n);return t.parentNode=Ko,_([t])};var _a=Bo.select(Ko);ya.on=function(n,t,r){var e=arguments.length;if(3>e){if("string"!=typeof n){2>e&&(t=!1);for(r in n)this.each(F(r,n[r],t));return this}if(2>e)return(e=this.node()["__on"+n])&&e._;r=!1}return this.each(F(n,t,r))};var ba=Bo.map({mouseenter:"mouseover",mouseleave:"mouseout"});ba.forEach(function(n){"on"+n in Go&&ba.remove(n)});var wa="onselectstart"in Go?null:p(Ko.style,"userSelect"),Sa=0;Bo.mouse=function(n){return Z(n,x())},Bo.touches=function(n,t){return arguments.length<2&&(t=x().touches),t?Wo(t).map(function(t){var r=Z(n,t);return r.identifier=t.identifier,r}):[]},Bo.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,r,e=t(h,v);e&&(n=e[0]-x[0],r=e[1]-x[1],p|=n|r,x=e,g({type:"drag",x:e[0]+s[0],y:e[1]+s[1],dx:n,dy:r}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Bo.event.target===f),g({type:"dragend"}))}var s,l=this,f=Bo.event.target,h=l.parentNode,g=r.of(l,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Bo.select(u()).on(i+d,a).on(o+d,c),y=Y(),x=t(h,v);e?(s=e.apply(l,arguments),s=[s.x-x[0],s.y-x[1]]):s=[0,0],g({type:"dragstart"})}}var r=M(n,"drag","dragstart","dragend"),e=null,u=t(v,Bo.mouse,X,"mousemove","mouseup"),i=t(V,Bo.touch,$,"touchmove","touchend");return n.origin=function(t){return arguments.length?(e=t,n):e},Bo.rebind(n,r,"on")};var ka=Math.PI,Ea=2*ka,Aa=ka/2,Ca=1e-6,Na=Ca*Ca,za=ka/180,La=180/ka,Ta=Math.SQRT2,qa=2,Ra=4;Bo.interpolateZoom=function(n,t){function r(n){var t=n*y;if(m){var r=Q(v),o=i/(qa*h)*(r*nt(Ta*t+v)-K(v));return[e+o*s,u+o*l,i*r/Q(Ta*t+v)]}return[e+n*s,u+n*l,i*Math.exp(Ta*t)]}var e=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-e,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ra*f)/(2*i*qa*h),p=(c*c-i*i-Ra*f)/(2*c*qa*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Ta;return r.duration=1e3*y,r},Bo.behavior.zoom=function(){function n(n){n.on(A,s).on(Ua+".zoom",f).on(C,h).on("dblclick.zoom",g).on(z,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function r(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function e(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=r(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(x.range().map(function(n){return(n-S.x)/S.k}).map(x.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Bo.mouse(e),g),a(s)}function r(){f.on(C,Qo===e?h:null).on(N,null),p(l&&Bo.event.target===i),c(s)}var e=this,i=Bo.event.target,s=L.of(e,arguments),l=0,f=Bo.select(Qo).on(C,n).on(N,r),g=t(Bo.mouse(e)),p=Y();H.call(e),o(s)}function l(){function n(){var n=Bo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function r(){var t=Bo.event.target;Bo.select(t).on(M,i).on(_,f),b.push(t);for(var r=Bo.event.changedTouches,o=0,c=r.length;c>o;++o)v[r[o].identifier]=null;var s=n(),l=Date.now();if(1===s.length){if(500>l-m){var h=s[0],g=v[h.identifier];e(2*S.k),u(h,g),y(),a(p)}m=l}else if(s.length>1){var h=s[0],x=s[1],w=h[0]-x[0],k=h[1]-x[1];d=w*w+k*k}}function i(){for(var n,t,r,i,o=Bo.touches(g),c=0,s=o.length;s>c;++c,i=null)if(r=o[c],i=v[r.identifier]){if(t)break;n=r,t=i}if(i){var l=(l=r[0]-n[0])*l+(l=r[1]-n[1])*l,f=d&&Math.sqrt(l/d);n=[(n[0]+r[0])/2,(n[1]+r[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],e(f*h)}m=null,u(n,t),a(p)}function f(){if(Bo.event.touches.length){for(var t=Bo.event.changedTouches,r=0,e=t.length;e>r;++r)delete v[t[r].identifier];for(var u in v)return void n()}Bo.selectAll(b).on(x,null),w.on(A,s).on(z,l),k(),c(p)}var h,g=this,p=L.of(g,arguments),v={},d=0,x=".zoom-"+Bo.event.changedTouches[0].identifier,M="touchmove"+x,_="touchend"+x,b=[],w=Bo.select(g).on(A,null).on(z,r),k=Y();H.call(g),r(),o(p)}function f(){var n=L.of(this,arguments);d?clearTimeout(d):(H.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),y();var r=v||Bo.mouse(this);p||(p=t(r)),e(Math.pow(2,.002*Da())*S.k),u(r,p),a(n)}function h(){p=null}function g(){var n=L.of(this,arguments),r=Bo.mouse(this),i=t(r),s=Math.log(S.k)/Math.LN2;o(n),e(Math.pow(2,Bo.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(r,i),a(n),c(n)}var p,v,d,m,x,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Pa,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",z="touchstart.zoom",L=M(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=L.of(this,arguments),t=S;As?Bo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var r=k[0],e=k[1],u=r/2,i=e/2,o=Bo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,r/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,r/t.k]);return function(t){var e=o(t),c=r/e[2];this.__chart__=S={x:u-e[0]*c,y:i-e[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Pa:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,x=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Bo.rebind(n,L,"on")};var Da,Pa=[0,1/0],Ua="onwheel"in Go?(Da=function(){return-Bo.event.deltaY*(Bo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Go?(Da=function(){return Bo.event.wheelDelta},"mousewheel"):(Da=function(){return-Bo.event.detail},"MozMousePixelScroll");rt.prototype.toString=function(){return this.rgb()+""},Bo.hsl=function(n,t,r){return 1===arguments.length?n instanceof ut?et(n.h,n.s,n.l):_t(""+n,bt,et):et(+n,+t,+r)};var ja=ut.prototype=new rt;ja.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),et(this.h,this.s,this.l/n)},ja.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),et(this.h,this.s,n*this.l)},ja.rgb=function(){return it(this.h,this.s,this.l)},Bo.hcl=function(n,t,r){return 1===arguments.length?n instanceof at?ot(n.h,n.c,n.l):n instanceof lt?ht(n.l,n.a,n.b):ht((n=wt((n=Bo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):ot(+n,+t,+r)};var Ha=at.prototype=new rt;Ha.brighter=function(n){return ot(this.h,this.c,Math.min(100,this.l+Fa*(arguments.length?n:1)))},Ha.darker=function(n){return ot(this.h,this.c,Math.max(0,this.l-Fa*(arguments.length?n:1)))},Ha.rgb=function(){return ct(this.h,this.c,this.l).rgb()},Bo.lab=function(n,t,r){return 1===arguments.length?n instanceof lt?st(n.l,n.a,n.b):n instanceof at?ct(n.l,n.c,n.h):wt((n=Bo.rgb(n)).r,n.g,n.b):st(+n,+t,+r)};var Fa=18,Oa=.95047,Ia=1,Ya=1.08883,Za=lt.prototype=new rt;Za.brighter=function(n){return st(Math.min(100,this.l+Fa*(arguments.length?n:1)),this.a,this.b)},Za.darker=function(n){return st(Math.max(0,this.l-Fa*(arguments.length?n:1)),this.a,this.b)},Za.rgb=function(){return ft(this.l,this.a,this.b)},Bo.rgb=function(n,t,r){return 1===arguments.length?n instanceof xt?yt(n.r,n.g,n.b):_t(""+n,yt,it):yt(~~n,~~t,~~r)};var Va=xt.prototype=new rt;Va.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,r=this.g,e=this.b,u=30;return t||r||e?(t&&u>t&&(t=u),r&&u>r&&(r=u),e&&u>e&&(e=u),yt(Math.min(255,~~(t/n)),Math.min(255,~~(r/n)),Math.min(255,~~(e/n)))):yt(u,u,u)},Va.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),yt(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Va.hsl=function(){return bt(this.r,this.g,this.b)},Va.toString=function(){return"#"+Mt(this.r)+Mt(this.g)+Mt(this.b)};var $a=Bo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});$a.forEach(function(n,t){$a.set(n,dt(t))}),Bo.functor=Et,Bo.xhr=Ct(At),Bo.dsv=function(n,t){function r(n,r,i){arguments.length<3&&(i=r,r=null);var o=Nt(n,t,null==r?e:u(r),i);return o.row=function(n){return arguments.length?o.response(null==(r=n)?e:u(n)):r},o}function e(n){return r.parse(n.responseText)}function u(n){return function(t){return r.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return r.parse=function(n,t){var e;return r.parseRows(n,function(n,r){if(e)return e(n,r-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");e=t?function(n,r){return t(u(n),r)}:u})},r.parseRows=function(n,t){function r(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var r=t;r++<s;)if(34===n.charCodeAt(r)){if(34!==n.charCodeAt(r+1))break;++r}l=r+2;var e=n.charCodeAt(r+1);return 13===e?(u=!0,10===n.charCodeAt(r+2)&&++l):10===e&&(u=!0),n.substring(t+1,r).replace(/""/g,'"')}for(;s>l;){var e=n.charCodeAt(l++),a=1;if(10===e)u=!0;else if(13===e)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(e!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var e,u,i={},o={},a=[],s=n.length,l=0,f=0;(e=r())!==o;){for(var h=[];e!==i&&e!==o;)h.push(e),e=r();(!t||(h=t(h,f++)))&&a.push(h)}return a},r.format=function(t){if(Array.isArray(t[0]))return r.formatRows(t);var e=new h,u=[];return t.forEach(function(n){for(var t in n)e.has(t)||u.push(e.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},r.formatRows=function(n){return n.map(i).join("\n")},r},Bo.csv=Bo.dsv(",","text/csv"),Bo.tsv=Bo.dsv("	","text/tab-separated-values"),Bo.touch=function(n,t,r){if(arguments.length<3&&(r=t,t=x().changedTouches),t)for(var e,u=0,i=t.length;i>u;++u)if((e=t[u]).identifier===r)return Z(n,e)};var Xa,Ba,Ja,Wa,Ga,Ka=Qo[p(Qo,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Bo.timer=function(n,t,r){var e=arguments.length;2>e&&(t=0),3>e&&(r=Date.now());var u=r+t,i={c:n,t:u,f:!1,n:null};Ba?Ba.n=i:Xa=i,Ba=i,Ja||(Wa=clearTimeout(Wa),Ja=1,Ka(Lt))},Bo.timer.flush=function(){Tt(),qt()},Bo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var Qa=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);Bo.formatPrefix=function(n,t){var r=0;return n&&(0>n&&(n*=-1),t&&(n=Bo.round(n,Rt(n,t))),r=1+Math.floor(1e-12+Math.log(n)/Math.LN10),r=Math.max(-24,Math.min(24,3*Math.floor((r-1)/3)))),Qa[8+r/3]};var nc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,tc=Bo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Bo.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),rc=Bo.time={},ec=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){uc.setUTCDate.apply(this._,arguments)},setDay:function(){uc.setUTCDay.apply(this._,arguments)},setFullYear:function(){uc.setUTCFullYear.apply(this._,arguments)},setHours:function(){uc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){uc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){uc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){uc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){uc.setUTCSeconds.apply(this._,arguments)},setTime:function(){uc.setTime.apply(this._,arguments)}};var uc=Date.prototype;rc.year=Ht(function(n){return n=rc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),rc.years=rc.year.range,rc.years.utc=rc.year.utc.range,rc.day=Ht(function(n){var t=new ec(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),rc.days=rc.day.range,rc.days.utc=rc.day.utc.range,rc.dayOfYear=function(n){var t=rc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var r=rc[n]=Ht(function(n){return(n=rc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var r=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(r+t)%7)/7)-(r!==t)});rc[n+"s"]=r.range,rc[n+"s"].utc=r.utc.range,rc[n+"OfYear"]=function(n){var r=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(r+t)%7)/7)}}),rc.week=rc.sunday,rc.weeks=rc.sunday.range,rc.weeks.utc=rc.sunday.utc.range,rc.weekOfYear=rc.sundayOfYear;var ic={"-":"",_:" ",0:"0"},oc=/^\s*\d+/,ac=/^%/;Bo.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var cc=Bo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Bo.format=cc.numberFormat,Bo.geo={},cr.prototype={s:0,t:0,add:function(n){sr(n,this.t,sc),sr(sc.s,this.s,this),this.s?this.t+=sc.t:this.s=sc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var sc=new cr;Bo.geo.stream=function(n,t){n&&lc.hasOwnProperty(n.type)?lc[n.type](n,t):lr(n,t)};var lc={Feature:function(n,t){lr(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,e=-1,u=r.length;++e<u;)lr(r[e].geometry,t)}},fc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,e=-1,u=r.length;++e<u;)n=r[e],t.point(n[0],n[1],n[2])},LineString:function(n,t){fr(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,e=-1,u=r.length;++e<u;)fr(r[e],t,0)},Polygon:function(n,t){hr(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,e=-1,u=r.length;++e<u;)hr(r[e],t)},GeometryCollection:function(n,t){for(var r=n.geometries,e=-1,u=r.length;++e<u;)lr(r[e],t)}};Bo.geo.area=function(n){return hc=0,Bo.geo.stream(n,pc),hc};var hc,gc=new cr,pc={sphere:function(){hc+=4*ka},point:v,lineStart:v,lineEnd:v,polygonStart:function(){gc.reset(),pc.lineStart=gr},polygonEnd:function(){var n=2*gc;hc+=0>n?4*ka+n:n,pc.lineStart=pc.lineEnd=pc.point=v}};Bo.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,r){var e=pr([t*za,r*za]);if(m){var u=dr(m,e),i=[u[1],-u[0],0],o=dr(i,u);xr(o),o=Mr(o);var c=t-p,s=c>0?1:-1,v=o[0]*La*s,d=ca(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*La;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*La;f>y&&(f=y)}else f>r&&(f=r),r>g&&(g=r);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,r);m=e,p=t}function r(){_.point=t}function e(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,r){if(m){var e=n-p;y+=ca(e)>180?e+(e>0?360:-360):e}else v=n,d=r;pc.point(n,r),t(n,r)}function i(){pc.lineStart()}function o(){u(v,d),pc.lineEnd(),ca(y)>Ca&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:r,lineEnd:e,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,pc.polygonStart()},polygonEnd:function(){pc.polygonEnd(),_.point=n,_.lineStart=r,_.lineEnd=e,0>gc?(l=-(h=180),f=-(g=90)):y>Ca?g=90:-Ca>y&&(f=-90),M[0]=l,M[1]=h}};return function(n){g=h=-(l=f=1/0),x=[],Bo.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var r,e=1,u=x[0],i=[u];t>e;++e)r=x[e],s(r[0],u)||s(r[1],u)?(a(u[0],r[1])>a(u[0],u[1])&&(u[1]=r[1]),a(r[0],u[1])>a(u[0],u[1])&&(u[0]=r[0])):i.push(u=r);for(var o,r,p=-1/0,t=i.length-1,e=0,u=i[t];t>=e;u=r,++e)r=i[e],(o=a(u[1],r[0]))>p&&(p=o,l=r[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]
}}(),Bo.geo.centroid=function(n){vc=dc=mc=yc=xc=Mc=_c=bc=wc=Sc=kc=0,Bo.geo.stream(n,Ec);var t=wc,r=Sc,e=kc,u=t*t+r*r+e*e;return Na>u&&(t=Mc,r=_c,e=bc,Ca>dc&&(t=mc,r=yc,e=xc),u=t*t+r*r+e*e,Na>u)?[0/0,0/0]:[Math.atan2(r,t)*La,G(e/Math.sqrt(u))*La]};var vc,dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc,Ec={sphere:v,point:br,lineStart:Sr,lineEnd:kr,polygonStart:function(){Ec.lineStart=Er},polygonEnd:function(){Ec.lineStart=Sr}},Ac=Lr(Ar,Pr,jr,[-ka,-ka/2]),Cc=1e9;Bo.geo.clipExtent=function(){var n,t,r,e,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Or(n=+a[0][0],t=+a[0][1],r=+a[1][0],e=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[r,e]]}};return o.extent([[0,0],[960,500]])},(Bo.geo.conicEqualArea=function(){return Yr(Zr)}).raw=Zr,Bo.geo.albers=function(){return Bo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Bo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,r(i,o),t||(e(i,o),t)||u(i,o),t}var t,r,e,u,i=Bo.geo.albers(),o=Bo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Bo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,r){t=[n,r]}};return n.invert=function(n){var t=i.scale(),r=i.translate(),e=(n[0]-r[0])/t,u=(n[1]-r[1])/t;return(u>=.12&&.234>u&&e>=-.425&&-.214>e?o:u>=.166&&.234>u&&e>=-.214&&-.115>e?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),r=o.stream(n),e=a.stream(n);return{point:function(n,u){t.point(n,u),r.point(n,u),e.point(n,u)},sphere:function(){t.sphere(),r.sphere(),e.sphere()},lineStart:function(){t.lineStart(),r.lineStart(),e.lineStart()},lineEnd:function(){t.lineEnd(),r.lineEnd(),e.lineEnd()},polygonStart:function(){t.polygonStart(),r.polygonStart(),e.polygonStart()},polygonEnd:function(){t.polygonEnd(),r.polygonEnd(),e.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return r=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,e=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Ca,f+.12*s+Ca],[l-.214*s-Ca,f+.234*s-Ca]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Ca,f+.166*s+Ca],[l-.115*s-Ca,f+.234*s-Ca]]).stream(c).point,n},n.scale(1070)};var Nc,zc,Lc,Tc,qc,Rc,Dc={point:v,lineStart:v,lineEnd:v,polygonStart:function(){zc=0,Dc.lineStart=Vr},polygonEnd:function(){Dc.lineStart=Dc.lineEnd=Dc.point=v,Nc+=ca(zc/2)}},Pc={point:$r,lineStart:v,lineEnd:v,polygonStart:v,polygonEnd:v},Uc={point:Jr,lineStart:Wr,lineEnd:Gr,polygonStart:function(){Uc.lineStart=Kr},polygonEnd:function(){Uc.point=Jr,Uc.lineStart=Wr,Uc.lineEnd=Gr}};Bo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Bo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var r,e,u,i,o,a=4.5;return n.area=function(n){return Nc=0,Bo.geo.stream(n,u(Dc)),Nc},n.centroid=function(n){return mc=yc=xc=Mc=_c=bc=wc=Sc=kc=0,Bo.geo.stream(n,u(Uc)),kc?[wc/kc,Sc/kc]:bc?[Mc/bc,_c/bc]:xc?[mc/xc,yc/xc]:[0/0,0/0]},n.bounds=function(n){return qc=Rc=-(Lc=Tc=1/0),Bo.geo.stream(n,u(Pc)),[[Lc,Tc],[qc,Rc]]},n.projection=function(n){return arguments.length?(u=(r=n)?n.stream||te(n):At,t()):r},n.context=function(n){return arguments.length?(i=null==(e=n)?new Xr:new Qr(n),"function"!=typeof a&&i.pointRadius(a),t()):e},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Bo.geo.albersUsa()).context(null)},Bo.geo.transform=function(n){return{stream:function(t){var r=new re(t);for(var e in n)r[e]=n[e];return r}}},re.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Bo.geo.projection=ue,Bo.geo.projectionMutator=ie,(Bo.geo.equirectangular=function(){return ue(ae)}).raw=ae.invert=ae,Bo.geo.rotation=function(n){function t(t){return t=n(t[0]*za,t[1]*za),t[0]*=La,t[1]*=La,t}return n=se(n[0]%360*za,n[1]*za,n.length>2?n[2]*za:0),t.invert=function(t){return t=n.invert(t[0]*za,t[1]*za),t[0]*=La,t[1]*=La,t},t},ce.invert=ae,Bo.geo.circle=function(){function n(){var n="function"==typeof e?e.apply(this,arguments):e,t=se(-n[0]*za,-n[1]*za,0).invert,u=[];return r(null,null,1,{point:function(n,r){u.push(n=t(n,r)),n[0]*=La,n[1]*=La}}),{type:"Polygon",coordinates:[u]}}var t,r,e=[0,0],u=6;return n.origin=function(t){return arguments.length?(e=t,n):e},n.angle=function(e){return arguments.length?(r=ge((t=+e)*za,u*za),n):t},n.precision=function(e){return arguments.length?(r=ge(t*za,(u=+e)*za),n):u},n.angle(90)},Bo.geo.distance=function(n,t){var r,e=(t[0]-n[0])*za,u=n[1]*za,i=t[1]*za,o=Math.sin(e),a=Math.cos(e),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((r=f*o)*r+(r=s*l-c*f*a)*r),c*l+s*f*a)},Bo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Bo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Bo.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Bo.range(Math.ceil(e/p)*p,r,p).filter(function(n){return ca(n%d)>Ca}).map(l)).concat(Bo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ca(n%m)>Ca}).map(f))}var r,e,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(e=+t[0][0],r=+t[1][0],a=+t[0][1],o=+t[1][1],e>r&&(t=e,e=r,r=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[e,a],[r,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=ve(a,o,90),f=de(e,r,y),h=ve(s,c,90),g=de(i,u,y),n):y},n.majorExtent([[-180,-90+Ca],[180,90-Ca]]).minorExtent([[-180,-80-Ca],[180,80+Ca]])},Bo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||e.apply(this,arguments),r||u.apply(this,arguments)]}}var t,r,e=me,u=ye;return n.distance=function(){return Bo.geo.distance(t||e.apply(this,arguments),r||u.apply(this,arguments))},n.source=function(r){return arguments.length?(e=r,t="function"==typeof r?null:r,n):e},n.target=function(t){return arguments.length?(u=t,r="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Bo.geo.interpolate=function(n,t){return xe(n[0]*za,n[1]*za,t[0]*za,t[1]*za)},Bo.geo.length=function(n){return jc=0,Bo.geo.stream(n,Hc),jc};var jc,Hc={sphere:v,point:v,lineStart:Me,lineEnd:v,polygonStart:v,polygonEnd:v},Fc=_e(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Bo.geo.azimuthalEqualArea=function(){return ue(Fc)}).raw=Fc;var Oc=_e(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},At);(Bo.geo.azimuthalEquidistant=function(){return ue(Oc)}).raw=Oc,(Bo.geo.conicConformal=function(){return Yr(be)}).raw=be,(Bo.geo.conicEquidistant=function(){return Yr(we)}).raw=we;var Ic=_e(function(n){return 1/n},Math.atan);(Bo.geo.gnomonic=function(){return ue(Ic)}).raw=Ic,Se.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Aa]},(Bo.geo.mercator=function(){return ke(Se)}).raw=Se;var Yc=_e(function(){return 1},Math.asin);(Bo.geo.orthographic=function(){return ue(Yc)}).raw=Yc;var Zc=_e(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Bo.geo.stereographic=function(){return ue(Zc)}).raw=Zc,Ee.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Aa]},(Bo.geo.transverseMercator=function(){var n=ke(Ee),t=n.center,r=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[-n[1],n[0]])},n.rotate=function(n){return n?r([n[0],n[1],n.length>2?n[2]+90:90]):(n=r(),[n[0],n[1],n[2]-90])},n.rotate([0,0])}).raw=Ee,Bo.geom={},Bo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(r),i=Et(e),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(ze),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=Ne(a),l=Ne(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var r=Ae,e=Ce;return arguments.length?t(n):(t.x=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(e=n,t):e},t)},Bo.geom.polygon=function(n){return ga(n,Vc),n};var Vc=Bo.geom.polygon.prototype=[];Vc.area=function(){for(var n,t=-1,r=this.length,e=this[r-1],u=0;++t<r;)n=e,e=this[t],u+=n[1]*e[0]-n[0]*e[1];return.5*u},Vc.centroid=function(n){var t,r,e=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++e<u;)t=a,a=this[e],r=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*r,o+=(t[1]+a[1])*r;return[i*n,o*n]},Vc.clip=function(n){for(var t,r,e,u,i,o,a=qe(n),c=-1,s=this.length-qe(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(e=t.length-a)-1],r=-1;++r<e;)o=t[r],Le(o,l,u)?(Le(i,l,u)||n.push(Te(i,o,l,u)),n.push(o)):Le(i,l,u)&&n.push(Te(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var $c,Xc,Bc,Jc,Wc,Gc=[],Kc=[];Oe.prototype.prepare=function(){for(var n,t=this.edges,r=t.length;r--;)n=t[r].edge,n.b&&n.a||t.splice(r,1);return t.sort(Ye),t.length},Qe.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var r,e,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;r=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,r=n):(t.P=t.N=null,this._=t,r=null);for(t.L=t.R=null,t.U=r,t.C=!0,n=t;r&&r.C;)e=r.U,r===e.L?(u=e.R,u&&u.C?(r.C=u.C=!1,e.C=!0,n=e):(n===r.R&&(ru(this,r),n=r,r=n.U),r.C=!1,e.C=!0,eu(this,e))):(u=e.L,u&&u.C?(r.C=u.C=!1,e.C=!0,n=e):(n===r.L&&(eu(this,r),n=r,r=n.U),r.C=!1,e.C=!0,ru(this,e))),r=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,r,e,u=n.U,i=n.L,o=n.R;if(r=i?o?uu(o):i:o,u?u.L===n?u.L=r:u.R=r:this._=r,i&&o?(e=r.C,r.C=n.C,r.L=i,i.U=r,r!==o?(u=r.U,r.U=n.U,n=r.R,u.L=n,r.R=o,o.U=r):(r.U=u,u=r,n=r.R)):(e=n.C,n=r),n&&(n.U=u),!e){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,eu(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,ru(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ru(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,eu(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Bo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),e=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(r(n),a).cells.forEach(function(r,a){var c=r.edges,s=r.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=e&&s.x<=i&&s.y>=u&&s.y<=o?[[e,o],[i,o],[i,u],[e,u]]:[];l.point=n[a]}),t}function r(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ca)*Ca,y:Math.round(o(n,t)/Ca)*Ca,i:t}})}var e=Ae,u=Ce,i=e,o=u,a=Qc;return n?t(n):(t.links=function(n){return iu(r(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(r(n)).cells.forEach(function(r,e){for(var u,i,o=r.site,a=r.edges.sort(Ye),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,e<i.i&&e<f.i&&au(o,i,f)<0&&t.push([n[e],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(e=n),t):e},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?Qc:n,t):a===Qc?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===Qc?null:a&&a[1]},t)};var Qc=[[-1e6,-1e6],[1e6,1e6]];Bo.geom.delaunay=function(n){return Bo.geom.voronoi().triangles(n)},Bo.geom.quadtree=function(n,t,r,e,u){function i(n){function i(n,t,r,e,u,i,o,a){if(!isNaN(r)&&!isNaN(e))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(ca(c-r)+ca(l-e)<.01)s(n,t,r,e,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,r,e,u,i,o,a)}else n.x=r,n.y=e,n.point=t}else s(n,t,r,e,u,i,o,a)}function s(n,t,r,e,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=r>=s,h=e>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=lu()),f?u=s:a=s,h?o=l:c=l,i(n,t,r,e,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=Et(a),M=Et(c);if(null!=t)v=t,d=r,m=e,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=lu();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=Ae,c=Ce;return(o=arguments.length)?(a=cu,c=su,3===o&&(u=r,e=t,r=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=r=e=u=null:(t=+n[0][0],r=+n[0][1],e=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,r],[e,u]]},i.size=function(n){return arguments.length?(null==n?t=r=e=u=null:(t=r=0,e=+n[0],u=+n[1]),i):null==t?null:[e-t,u-r]},i)},Bo.interpolateRgb=hu,Bo.interpolateObject=gu,Bo.interpolateNumber=pu,Bo.interpolateString=vu;var ns=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ts=new RegExp(ns.source,"g");Bo.interpolate=du,Bo.interpolators=[function(n,t){var r=typeof t;return("string"===r?$a.has(t)||/^(#|rgb\(|hsl\()/.test(t)?hu:vu:t instanceof rt?hu:Array.isArray(t)?mu:"object"===r&&isNaN(t)?gu:pu)(n,t)}],Bo.interpolateArray=mu;var rs=function(){return At},es=Bo.map({linear:rs,poly:Su,quad:function(){return _u},cubic:function(){return bu},sin:function(){return ku},exp:function(){return Eu},circle:function(){return Au},elastic:Cu,back:Nu,bounce:function(){return zu}}),us=Bo.map({"in":At,out:xu,"in-out":Mu,"out-in":function(n){return Mu(xu(n))}});Bo.ease=function(n){var t=n.indexOf("-"),r=t>=0?n.substring(0,t):n,e=t>=0?n.substring(t+1):"in";return r=es.get(r)||rs,e=us.get(e)||At,yu(e(r.apply(null,Jo.call(arguments,1))))},Bo.interpolateHcl=Lu,Bo.interpolateHsl=Tu,Bo.interpolateLab=qu,Bo.interpolateRound=Ru,Bo.transform=function(n){var t=Go.createElementNS(Bo.ns.prefix.svg,"g");return(Bo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var r=t.transform.baseVal.consolidate()}return new Du(r?r.matrix:is)})(n)},Du.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var is={a:1,b:0,c:0,d:1,e:0,f:0};Bo.interpolateTransform=Hu,Bo.layout={},Bo.layout.bundle=function(){return function(n){for(var t=[],r=-1,e=n.length;++r<e;)t.push(Iu(n[r]));return t}},Bo.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Bo.range(i),m=[];for(r=[],e=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Bo.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,r){return a(u[t][n],u[t][r])})}),n=(Ea-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}e[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&r.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){r.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var r,e,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,r=e=null,s):u},s.padding=function(n){return arguments.length?(l=n,r=e=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,r=e=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,r=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,r&&t(),s):c},s.chords=function(){return r||n(),r},s.groups=function(){return e||n(),e},s},Bo.layout.force=function(){function n(n){return function(t,r,e,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-r,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Bo.event.x,n.py=Bo.event.y,a.resume()}var r,e,u,i,o,a={},c=Bo.dispatch("start","tick","end"),s=[1,1],l=.9,f=os,h=as,g=-30,p=cs,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((e*=.99)<.005)return c.end({type:"end",alpha:e=0}),!0;var t,r,a,f,h,p,d,x,M,_=m.length,b=y.length;for(r=0;b>r;++r)a=y[r],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=e*i[r]*((p=Math.sqrt(p))-u[r])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=e*v)&&(x=s[0]/2,M=s[1]/2,r=-1,d))for(;++r<_;)a=m[r],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Ju(t=Bo.geom.quadtree(m),e,o),r=-1;++r<_;)(a=m[r]).fixed||t.visit(n(a));for(r=-1;++r<_;)a=m[r],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:e})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,e?e=n>0?n:0:n>0&&(c.start({type:"start",alpha:e=n}),Bo.timer(a.tick)),a):e},a.start=function(){function n(n,e){if(!r){for(r=new Array(c),a=0;c>a;++a)r[a]=[];for(a=0;s>a;++a){var u=y[a];r[u.source.index].push(u.target),r[u.target.index].push(u.source)}}for(var i,o=r[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*e}var t,r,e,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(e=m[t]).index=t,e.weight=0;for(t=0;l>t;++t)e=y[t],"number"==typeof e.source&&(e.source=m[e.source]),"number"==typeof e.target&&(e.target=m[e.target]),++e.source.weight,++e.target.weight;for(t=0;c>t;++t)e=m[t],isNaN(e.x)&&(e.x=n("x",p)),isNaN(e.y)&&(e.y=n("y",v)),isNaN(e.px)&&(e.px=e.x),isNaN(e.py)&&(e.py=e.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return r||(r=Bo.behavior.drag().origin(At).on("dragstart.force",Vu).on("drag.force",t).on("dragend.force",$u)),arguments.length?(this.on("mouseover.force",Xu).on("mouseout.force",Bu).call(r),void 0):r},Bo.rebind(a,c,"on")};var os=20,as=1,cs=1/0;Bo.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(s=r.call(n,i,i.depth))&&(c=s.length)){for(var c,s,l;--c>=0;)o.push(l=s[c]),l.parent=i,l.depth=i.depth+1;e&&(i.value=0),i.children=s}else e&&(i.value=+e.call(n,i,i.depth)||0),delete i.children;return Ku(u,function(n){var r,u;t&&(r=n.children)&&r.sort(t),e&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ti,r=Qu,e=ni;return n.sort=function(r){return arguments.length?(t=r,n):t},n.children=function(t){return arguments.length?(r=t,n):r},n.value=function(t){return arguments.length?(e=t,n):e},n.revalue=function(t){return e&&(Gu(t,function(n){n.children&&(n.value=0)}),Ku(t,function(t){var r;t.children||(t.value=+e.call(n,t,t.depth)||0),(r=t.parent)&&(r.value+=t.value)})),t},n},Bo.layout.partition=function(){function n(t,r,e,u){var i=t.children;if(t.x=r,t.y=t.depth*u,t.dx=e,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(e=t.value?e/t.value:0;++s<o;)n(a=i[s],r,c=a.value*e,u),r+=c}}function t(n){var r=n.children,e=0;if(r&&(u=r.length))for(var u,i=-1;++i<u;)e=Math.max(e,t(r[i]));return 1+e}function r(r,i){var o=e.call(this,r,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var e=Bo.layout.hierarchy(),u=[1,1];return r.size=function(n){return arguments.length?(u=n,r):u},Wu(r,e)},Bo.layout.pie=function(){function n(i){var o=i.map(function(r,e){return+t.call(n,r,e)}),a=+("function"==typeof e?e.apply(this,arguments):e),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Bo.sum(o),s=Bo.range(i.length);null!=r&&s.sort(r===ss?function(n,t){return o[t]-o[n]}:function(n,t){return r(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,r=ss,e=0,u=Ea;return n.value=function(r){return arguments.length?(t=r,n):t},n.sort=function(t){return arguments.length?(r=t,n):r},n.startAngle=function(t){return arguments.length?(e=t,n):e},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var ss={};Bo.layout.stack=function(){function n(a,c){var s=a.map(function(r,e){return t.call(n,r,e)}),l=s.map(function(t){return t.map(function(t,r){return[i.call(n,t,r),o.call(n,t,r)]})}),f=r.call(n,l,c);s=Bo.permute(s,f),l=Bo.permute(l,f);var h,g,p,v=e.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=At,r=oi,e=ai,u=ii,i=ei,o=ui;return n.values=function(r){return arguments.length?(t=r,n):t},n.order=function(t){return arguments.length?(r="function"==typeof t?t:ls.get(t)||oi,n):r},n.offset=function(t){return arguments.length?(e="function"==typeof t?t:fs.get(t)||ai,n):e},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var ls=Bo.map({"inside-out":function(n){var t,r,e=n.length,u=n.map(ci),i=n.map(si),o=Bo.range(e).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;e>t;++t)r=o[t],c>a?(a+=i[r],s.push(r)):(c+=i[r],l.push(r));return l.reverse().concat(s)},reverse:function(n){return Bo.range(n.length).reverse()},"default":oi}),fs=Bo.map({silhouette:function(n){var t,r,e,u=n.length,i=n[0].length,o=[],a=0,c=[];for(r=0;i>r;++r){for(t=0,e=0;u>t;t++)e+=n[t][r][1];e>a&&(a=e),o.push(e)}for(r=0;i>r;++r)c[r]=(a-o[r])/2;return c},wiggle:function(n){var t,r,e,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,r=1;h>r;++r){for(t=0,u=0;l>t;++t)u+=n[t][r][1];for(t=0,i=0,a=f[r][0]-f[r-1][0];l>t;++t){for(e=0,o=(n[t][r][1]-n[t][r-1][1])/(2*a);t>e;++e)o+=(n[e][r][1]-n[e][r-1][1])/a;i+=o*n[t][r][1]}g[r]=c-=u?i/u*a:0,s>c&&(s=c)}for(r=0;h>r;++r)g[r]-=s;return g},expand:function(n){var t,r,e,u=n.length,i=n[0].length,o=1/u,a=[];for(r=0;i>r;++r){for(t=0,e=0;u>t;t++)e+=n[t][r][1];if(e)for(t=0;u>t;t++)n[t][r][1]/=e;else for(t=0;u>t;t++)n[t][r][1]=o}for(r=0;i>r;++r)a[r]=0;return a},zero:ai});Bo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(r,this),l=e.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Bo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,r=Number,e=gi,u=fi;return n.value=function(t){return arguments.length?(r=t,n):r},n.range=function(t){return arguments.length?(e=Et(t),n):e},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return hi(n,t)}:Et(t),n):u},n.frequency=function(r){return arguments.length?(t=!!r,n):t},n},Bo.layout.pack=function(){function n(n,i){var o=r.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Ku(a,function(n){n.r=+l(n.value)}),Ku(a,yi),e){var f=e*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;Ku(a,function(n){n.r+=f}),Ku(a,yi),Ku(a,function(n){n.r-=f})}return _i(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,r=Bo.layout.hierarchy().sort(pi),e=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(r){return arguments.length?(t=null==r||"function"==typeof r?r:+r,n):t},n.padding=function(t){return arguments.length?(e=+t,n):e},Wu(n,r)},Bo.layout.tree=function(){function n(n,u){var l=o.call(this,n,u),f=l[0],h=t(f);if(Ku(h,r),h.parent.m=-h.z,Gu(h,e),s)Gu(f,i);else{var g=f,p=f,v=f;Gu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Gu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return l}function t(n){for(var t,r={A:null,children:[n]},e=[r];null!=(t=e.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)e.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return r.children[0]}function r(n){var t=n.children,r=n.parent.children,e=n.i?r[n.i-1]:null;if(t.length){Ai(n);var i=(t[0].z+t[t.length-1].z)/2;e?(n.z=e.z+a(n._,e._),n.m=n.z-i):n.z=i}else e&&(n.z=e.z+a(n._,e._));n.parent.A=u(n,e,n.parent.A||r[0])}function e(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,r){if(t){for(var e,u=n,i=n,o=t,c=u.parent.children[0],s=u.m,l=i.m,f=o.m,h=c.m;o=ki(o),u=Si(u),o&&u;)c=Si(c),i=ki(i),i.a=n,e=o.z+f-u.z-s+a(o._,u._),e>0&&(Ei(Ci(o,n,r),n,e),s+=e,l+=e),f+=o.m,s+=u.m,h+=c.m,l+=i.m;o&&!ki(i)&&(i.t=o,i.m+=f-l),u&&!Si(c)&&(c.t=u,c.m+=s-h,r=n)}return r}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=Bo.layout.hierarchy().sort(null).value(null),a=wi,c=[1,1],s=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(s=null==(c=t)?i:null,n):s?null:c},n.nodeSize=function(t){return arguments.length?(s=null==(c=t)?null:i,n):s?c:null},Wu(n,o)},Bo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;Ku(c,function(n){var t=n.children;t&&t.length?(n.x=zi(t),n.y=Ni(t)):(n.x=o?s+=r(n,o):0,n.y=0,o=n)});var l=Li(c),f=Ti(c),h=l.x-r(l,f)/2,g=f.x+r(f,l)/2;return Ku(c,u?function(n){n.x=(n.x-c.x)*e[0],n.y=(c.y-n.y)*e[1]}:function(n){n.x=(n.x-h)/(g-h)*e[0],n.y=(1-(c.y?n.y/c.y:1))*e[1]}),a}var t=Bo.layout.hierarchy().sort(null).value(null),r=wi,e=[1,1],u=!1;return n.separation=function(t){return arguments.length?(r=t,n):r},n.size=function(t){return arguments.length?(u=null==(e=t),n):u?null:e},n.nodeSize=function(t){return arguments.length?(u=null!=(e=t),n):u?e:null},Wu(n,t)},Bo.layout.treemap=function(){function n(n,t){for(var r,e,u=-1,i=n.length;++u<i;)e=(r=n[u]).value*(0>t?0:t),r.area=isNaN(e)||0>=e?0:e}function t(r){var i=r.children;if(i&&i.length){var o,a,c,s=f(r),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&r.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/r.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=e(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function r(t){var e=t.children;if(e&&e.length){var i,o=f(t),a=e.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);e.forEach(r)}}function e(n,t){for(var r,e=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(r=n[o].area)&&(i>r&&(i=r),r>u&&(u=r));return e*=e,t*=t,e?Math.max(t*u*p/e,e/(t*i*p)):1/0}function u(n,t,r,e){var u,i=-1,o=n.length,a=r.x,s=r.y,l=t?c(n.area/t):0;if(t==r.dx){for((e||l>r.dy)&&(l=r.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(r.x+r.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=r.x+r.dx-a,r.y+=l,r.dy-=l}else{for((e||l>r.dx)&&(l=r.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(r.y+r.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=r.y+r.dy-s,r.x+=l,r.dx-=l}}function i(e){var u=o||a(e),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?r:t)(i),h&&(o=u),u}var o,a=Bo.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=qi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var r=n.call(i,t,t.depth);return null==r?qi(t):Ri(t,"number"==typeof r?[r,r,r,r]:r)}function r(t){return Ri(t,n)}if(!arguments.length)return l;var e;return f=null==(l=n)?qi:"function"==(e=typeof n)?t:"number"===e?(n=[n,n,n,n],r):r,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Wu(i,a)},Bo.random={normal:function(n,t){var r=arguments.length;return 2>r&&(t=1),1>r&&(n=0),function(){var r,e,u;do r=2*Math.random()-1,e=2*Math.random()-1,u=r*r+e*e;while(!u||u>1);return n+t*r*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Bo.random.normal.apply(Bo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Bo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,r=0;n>r;r++)t+=Math.random();return t}}},Bo.scale={};var hs={floor:At,ceil:At};Bo.scale.linear=function(){return Oi([0,1],[0,1],du,!1)};var gs={s:1,g:1,p:1,r:1,e:1};Bo.scale.log=function(){return Ji(Bo.scale.linear().domain([0,1]),10,!0,[1,10])};var ps=Bo.format(".0e"),vs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Bo.scale.pow=function(){return Wi(Bo.scale.linear(),1,[0,1])},Bo.scale.sqrt=function(){return Bo.scale.pow().exponent(.5)},Bo.scale.ordinal=function(){return Ki([],{t:"range",a:[[]]})},Bo.scale.category10=function(){return Bo.scale.ordinal().range(ds)},Bo.scale.category20=function(){return Bo.scale.ordinal().range(ms)},Bo.scale.category20b=function(){return Bo.scale.ordinal().range(ys)},Bo.scale.category20c=function(){return Bo.scale.ordinal().range(xs)};var ds=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(mt),ms=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(mt),ys=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(mt),xs=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(mt);Bo.scale.quantile=function(){return Qi([],[])},Bo.scale.quantize=function(){return no(0,1,[0,1])},Bo.scale.threshold=function(){return to([.5],[0,1])},Bo.scale.identity=function(){return ro([0,1])},Bo.svg={},Bo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=r.apply(this,arguments),o=e.apply(this,arguments)+Ms,a=u.apply(this,arguments)+Ms,c=(o>a&&(c=o,o=a,a=c),a-o),s=ka>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);
return c>=_s?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=eo,r=uo,e=io,u=oo;return n.innerRadius=function(r){return arguments.length?(t=Et(r),n):t},n.outerRadius=function(t){return arguments.length?(r=Et(t),n):r},n.startAngle=function(t){return arguments.length?(e=Et(t),n):e},n.endAngle=function(t){return arguments.length?(u=Et(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+r.apply(this,arguments))/2,i=(e.apply(this,arguments)+u.apply(this,arguments))/2+Ms;return[Math.cos(i)*n,Math.sin(i)*n]},n};var Ms=-Aa,_s=Ea-Ca;Bo.svg.line=function(){return ao(At)};var bs=Bo.map({linear:co,"linear-closed":so,step:lo,"step-before":fo,"step-after":ho,basis:xo,"basis-open":Mo,"basis-closed":_o,bundle:bo,cardinal:vo,"cardinal-open":go,"cardinal-closed":po,monotone:Co});bs.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var ws=[0,2/3,1/3,0],Ss=[0,1/3,2/3,0],ks=[0,1/6,2/3,1/6];Bo.svg.line.radial=function(){var n=ao(No);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},fo.reverse=ho,ho.reverse=fo,Bo.svg.area=function(){return zo(At)},Bo.svg.area.radial=function(){var n=zo(No);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Bo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+e(c.r,c.p1,c.a1-c.a0)+(r(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+e(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,r,e){var u=t.call(n,r,e),i=a.call(n,u,e),o=c.call(n,u,e)+Ms,l=s.call(n,u,e)+Ms;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function r(n,t){return n.a0==t.a0&&n.a1==t.a1}function e(n,t,r){return"A"+n+","+n+" 0 "+ +(r>ka)+",1 "+t}function u(n,t,r,e){return"Q 0,0 "+e}var i=me,o=ye,a=Lo,c=io,s=oo;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(s=Et(t),n):s},n},Bo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=r.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(e),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=me,r=ye,e=To;return n.source=function(r){return arguments.length?(t=Et(r),n):t},n.target=function(t){return arguments.length?(r=Et(t),n):r},n.projection=function(t){return arguments.length?(e=t,n):e},n},Bo.svg.diagonal.radial=function(){var n=Bo.svg.diagonal(),t=To,r=n.projection;return n.projection=function(n){return arguments.length?r(qo(t=n)):t},n},Bo.svg.symbol=function(){function n(n,e){return(Es.get(t.call(this,n,e))||Po)(r.call(this,n,e))}var t=Do,r=Ro;return n.type=function(r){return arguments.length?(t=Et(r),n):t},n.size=function(t){return arguments.length?(r=Et(t),n):r},n};var Es=Bo.map({circle:Po,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*zs)),r=t*zs;return"M0,"+-t+"L"+r+",0"+" 0,"+t+" "+-r+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Ns),r=t*Ns/2;return"M0,"+r+"L"+t+","+-r+" "+-t+","+-r+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Ns),r=t*Ns/2;return"M0,"+-r+"L"+t+","+r+" "+-t+","+r+"Z"}});Bo.svg.symbolTypes=Es.keys();var As,Cs,Ns=Math.sqrt(3),zs=Math.tan(30*za),Ls=[],Ts=0;Ls.call=ya.call,Ls.empty=ya.empty,Ls.node=ya.node,Ls.size=ya.size,Bo.transition=function(n){return arguments.length?As?n.transition():n:_a.transition()},Bo.transition.prototype=Ls,Ls.select=function(n){var t,r,e,u=this.id,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(e=c[s])&&(r=n.call(e,e.__data__,s,o))?("__data__"in e&&(r.__data__=e.__data__),Fo(r,s,u,e.__transition__[u]),t.push(r)):t.push(null)}return Uo(i,u)},Ls.selectAll=function(n){var t,r,e,u,i,o=this.id,a=[];n=w(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(e=l[f]){i=e.__transition__[o],r=n.call(e,e.__data__,f,c),a.push(t=[]);for(var g=-1,p=r.length;++g<p;)(u=r[g])&&Fo(u,g,o,i),t.push(u)}return Uo(a,o)},Ls.filter=function(n){var t,r,e,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var r=this[i],a=0,c=r.length;c>a;a++)(e=r[a])&&n.call(e,e.__data__,a,i)&&t.push(e)}return Uo(u,this.id)},Ls.tween=function(n,t){var r=this.id;return arguments.length<2?this.node().__transition__[r].tween.get(n):P(this,null==t?function(t){t.__transition__[r].tween.remove(n)}:function(e){e.__transition__[r].tween.set(n,t)})},Ls.attr=function(n,t){function r(){this.removeAttribute(a)}function e(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?r:(n+="",function(){var t,r=this.getAttribute(a);return r!==n&&(t=o(r,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?e:(n+="",function(){var t,r=this.getAttributeNS(a.space,a.local);return r!==n&&(t=o(r,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Hu:du,a=Bo.ns.qualify(n);return jo(this,"attr."+n,t,a.local?i:u)},Ls.attrTween=function(n,t){function r(n,r){var e=t.call(this,n,r,this.getAttribute(u));return e&&function(n){this.setAttribute(u,e(n))}}function e(n,r){var e=t.call(this,n,r,this.getAttributeNS(u.space,u.local));return e&&function(n){this.setAttributeNS(u.space,u.local,e(n))}}var u=Bo.ns.qualify(n);return this.tween("attr."+n,u.local?e:r)},Ls.style=function(n,t,r){function e(){this.style.removeProperty(n)}function u(t){return null==t?e:(t+="",function(){var e,u=Qo.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(e=du(u,t),function(t){this.style.setProperty(n,e(t),r)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(r in n)this.style(r,n[r],t);return this}r=""}return jo(this,"style."+n,t,u)},Ls.styleTween=function(n,t,r){function e(e,u){var i=t.call(this,e,u,Qo.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,e)},Ls.text=function(n){return jo(this,"text",n,Ho)},Ls.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Ls.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Bo.ease.apply(Bo,arguments)),P(this,function(r){r.__transition__[t].ease=n}))},Ls.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:P(this,"function"==typeof n?function(r,e,u){r.__transition__[t].delay=+n.call(r,r.__data__,e,u)}:(n=+n,function(r){r.__transition__[t].delay=n}))},Ls.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:P(this,"function"==typeof n?function(r,e,u){r.__transition__[t].duration=Math.max(1,n.call(r,r.__data__,e,u))}:(n=Math.max(1,n),function(r){r.__transition__[t].duration=n}))},Ls.each=function(n,t){var r=this.id;if(arguments.length<2){var e=Cs,u=As;As=r,P(this,function(t,e,u){Cs=t.__transition__[r],n.call(t,t.__data__,e,u)}),Cs=e,As=u}else P(this,function(e){var u=e.__transition__[r];(u.event||(u.event=Bo.dispatch("start","end"))).on(n,t)});return this},Ls.transition=function(){for(var n,t,r,e,u=this.id,i=++Ts,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(r=t[s])&&(e=Object.create(r.__transition__[u]),e.delay+=e.duration,Fo(r,s,i,e)),n.push(r)}return Uo(o,i)},Bo.svg.axis=function(){function n(n){n.each(function(){var n,s=Bo.select(this),l=this.__chart__||r,f=this.__chart__=r.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):At:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ca),d=Bo.transition(p.exit()).style("opacity",Ca).remove(),m=Bo.transition(p.order()).style("opacity",1),y=Pi(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Bo.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(e){case"bottom":n=Oo,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Oo,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=Io,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=Io,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,r=Bo.scale.linear(),e=qs,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(r=t,n):r},n.orient=function(t){return arguments.length?(e=t in Rs?t+"":qs,n):e},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(r){return arguments.length?(t=r,n):t},n.tickSize=function(t){var r=arguments.length;return r?(u=+t,i=+arguments[r-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var qs="bottom",Rs={top:1,right:1,bottom:1,left:1};Bo.svg.brush=function(){function n(i){i.each(function(){var i=Bo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,At);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Ds[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Bo.transition(i),h=Bo.transition(o);c&&(l=Pi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(f)),s&&(l=Pi(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),e(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function e(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Bo.event.keyCode&&(C||(x=null,z[0]-=l[1],z[1]-=f[1],C=2),y())}function p(){32==Bo.event.keyCode&&2==C&&(z[0]+=l[1],z[1]+=f[1],C=0,y())}function v(){var n=Bo.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Bo.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),z[0]=l[+(n[0]<x[0])],z[1]=f[+(n[1]<x[1])]):x=null),E&&d(n,c,0)&&(r(S),u=!0),A&&d(n,s,1)&&(e(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,r){var e,u,a=Pi(t),c=a[0],s=a[1],p=z[r],v=r?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),e=(r?g:h)?Math.max(c,Math.min(s,n[r])):n[r],C?u=(e+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[r]-e))),e>p?(u=e,e=p):u=p),v[0]!=e||v[1]!=u?(r?o=null:i=null,v[0]=e,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Bo.select("body").style("cursor",null),L.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Bo.select(Bo.event.target),w=a.of(_,arguments),S=Bo.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=Y(),z=Bo.mouse(_),L=Bo.select(Qo).on("keydown.brush",u).on("keyup.brush",p);if(Bo.event.changedTouches?L.on("touchmove.brush",v).on("touchend.brush",m):L.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)z[0]=l[0]-z[0],z[1]=f[0]-z[1];else if(k){var T=+/w$/.test(k),q=+/^n/.test(k);M=[l[1-T]-z[0],f[1-q]-z[1]],z[0]=l[T],z[1]=f[q]}else Bo.event.altKey&&(x=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Bo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=M(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=Ps[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},r=this.__chart__||t;this.__chart__=t,As?Bo.select(this).transition().each("start.brush",function(){i=r.i,o=r.j,l=r.x,f=r.y,n({type:"brushstart"})}).tween("brush:brush",function(){var r=mu(l,t.x),e=mu(f,t.y);return i=o=null,function(u){l=t.x=r(u),f=t.y=e(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Ps[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=Ps[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var r,e,u,a,h;return arguments.length?(c&&(r=t[0],e=t[1],s&&(r=r[0],e=e[0]),i=[r,e],c.invert&&(r=c(r),e=c(e)),r>e&&(h=r,r=e,e=h),(r!=l[0]||e!=l[1])&&(l=[r,e])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(r=i[0],e=i[1]):(r=l[0],e=l[1],c.invert&&(r=c.invert(r),e=c.invert(e)),r>e&&(h=r,r=e,e=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[r,u],[e,a]]:c?[r,e]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Bo.rebind(n,a,"on")};var Ds={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ps=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Us=rc.format=cc.timeFormat,js=Us.utc,Hs=js("%Y-%m-%dT%H:%M:%S.%LZ");Us.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Yo:Hs,Yo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Yo.toString=Hs.toString,rc.second=Ht(function(n){return new ec(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),rc.seconds=rc.second.range,rc.seconds.utc=rc.second.utc.range,rc.minute=Ht(function(n){return new ec(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),rc.minutes=rc.minute.range,rc.minutes.utc=rc.minute.utc.range,rc.hour=Ht(function(n){var t=n.getTimezoneOffset()/60;return new ec(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),rc.hours=rc.hour.range,rc.hours.utc=rc.hour.utc.range,rc.month=Ht(function(n){return n=rc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),rc.months=rc.month.range,rc.months.utc=rc.month.utc.range;var Fs=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Os=[[rc.second,1],[rc.second,5],[rc.second,15],[rc.second,30],[rc.minute,1],[rc.minute,5],[rc.minute,15],[rc.minute,30],[rc.hour,1],[rc.hour,3],[rc.hour,6],[rc.hour,12],[rc.day,1],[rc.day,2],[rc.week,1],[rc.month,1],[rc.month,3],[rc.year,1]],Is=Us.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ar]]),Ys={range:function(n,t,r){return Bo.range(Math.ceil(n/r)*r,+t,r).map(Vo)},floor:At,ceil:At};Os.year=rc.year,rc.scale=function(){return Zo(Bo.scale.linear(),Os,Is)};var Zs=Os.map(function(n){return[n[0].utc,n[1]]}),Vs=js.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ar]]);Zs.year=rc.year.utc,rc.scale.utc=function(){return Zo(Bo.scale.linear(),Zs,Vs)},Bo.text=Ct(function(n){return n.responseText}),Bo.json=function(n,t){return Nt(n,"application/json",$o,t)},Bo.html=function(n,t){return Nt(n,"text/html",Xo,t)},Bo.xml=Ct(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Bo):"object"==typeof module&&module.exports?module.exports=Bo:this.d3=Bo}();
var Asistencias;

Asistencias = function(selector, data) {
  this.cuadro = {
    width: 15,
    height: 15
  };
  this.container = $(selector);
  this.data = data;
  this.calculaTamano();
  this.svg = d3.select('#grafica-asistencias').append('svg:svg').attr('width', this.container.width()).attr('height', (this.rows * this.cuadro.height) + (this.margin * this.rows));
  this.tt = d3.select('#grafica-asistencias').append('div').attr('class', 'graph-tooltip').text('2014-01-01');
  return this;
};

Asistencias.prototype.draw = function() {
  var self;
  self = this;
  return this.svg.selectAll('.asistencia').data(this.data).enter().append('rect').attr('width', this.cuadro.width).attr('height', this.cuadro.height).attr('class', this.cuadro_clase).attr('x', this.cuadro_x.bind(this)).attr('y', this.cuadro_y.bind(this)).on('mouseover', function(d) {
    return self.cuadro_hover(d, this);
  }).on('mouseout', function(d) {
    return self.cuadro_out(d, this);
  });
};

Asistencias.prototype.cuadro_hover = function(d, cuadro) {
  var $cuadro, bbox, centro, h, left, pos, top, w;
  this.tt.classed('shown', true);
  this.tt.text(d.fecha);
  $cuadro = $(cuadro);
  pos = $cuadro.position();
  centro = {
    x: pos.left + cuadro.getAttribute('width') / 2,
    y: pos.top + cuadro.getAttribute('height') / 2
  };
  bbox = window.getComputedStyle(this.tt.node());
  w = parseInt(bbox.width, 10);
  h = parseInt(bbox.height, 10);
  left = centro.x - (w / 2) - 4;
  top = centro.y - h - 8 - 15;
  return this.tt.style('left', left + 'px').style('top', top + 'px');
};

Asistencias.prototype.cuadro_out = function() {
  return this.tt.classed('shown', false);
};

Asistencias.prototype.resize = function() {
  this.calculaTamano();
  this.svg.transition().attr('width', this.container.width()).attr('height', (this.rows * this.cuadro.height) + (this.margin * this.rows));
  return this.svg.selectAll('.asistencia').transition().attr('x', this.cuadro_x.bind(this)).attr('y', this.cuadro_y.bind(this));
};

Asistencias.prototype.calculaTamano = function() {
  var cw;
  cw = this.container.width();
  this.perRow = Math.floor(cw / (this.cuadro.width + 2));
  this.margin = (cw - (this.perRow * this.cuadro.width)) / (this.perRow - 1);
  return this.rows = Math.ceil(this.data.length / this.perRow);
};

Asistencias.prototype.cuadro_x = function(d, i) {
  var offset, orig, start;
  orig = i % this.perRow;
  start = orig * this.cuadro.width;
  offset = this.margin * orig;
  return start + offset;
};

Asistencias.prototype.cuadro_y = function(d, i) {
  var offset, orig, start;
  orig = Math.floor(i / this.perRow);
  start = orig * this.cuadro.height;
  offset = this.margin * orig;
  return start + offset;
};

Asistencias.prototype.cuadro_clase = function(d) {
  var c;
  c = d.valor && 'presente' || 'ausente';
  return "asistencia " + c;
};

var Votaciones;

Votaciones = function(selector, data) {
  var self;
  this.container = $(selector);
  this.data = data;
  this.svg = d3.select('#grafica-votaciones').append('svg:svg').attr('width', this.container.width()).attr('height', 100);
  this.overlay = d3.select('#grafica-votaciones').append('div').attr("class", "grafica-overlay");
  this.tt = d3.select('#grafica-votaciones').append('div').attr('class', 'graph-tooltip').text('100%');
  this.calculaTamano();
  self = this;
  return this;
};

Votaciones.prototype.toInt = function(str) {
  return parseInt(str.replace(/\D/g, ''), 10);
};

Votaciones.prototype.draw = function() {
  var self;
  self = this;
  this.line = d3.svg.line().interpolate("monotone").x(function(d, i) {
    return self.x(i);
  }).y(function(d) {
    return self.y(d.valor);
  });
  this.svg.append('path').datum(this.data).attr("class", "linea-votacion").attr('d', this.line).attr('fill', 'transparent');
  this.inc = this.x(1) - this.x(0);
  this.overlay.on('mouseout', function() {
    return self.tt.classed('shown', false);
  });
  return this.overlay.on('mousemove', function() {
    var bbox, h, left, punto, top, w, x, x0;
    x0 = self.x.invert(d3.mouse(this)[0]);
    x = Math.round(x0);
    punto = self.data[x];
    self.tt.classed('shown', true);
    self.tt.text("" + punto.fecha + ": " + punto.valor + "%");
    bbox = window.getComputedStyle(self.tt.node());
    w = parseInt(bbox.width, 10);
    h = parseInt(bbox.height, 10);
    left = self.x(x) - w / 2 - 4;
    top = self.y(punto.valor) - h - 15;
    return self.tt.style('left', left + 'px').style('top', top + 'px');
  });
};

Votaciones.prototype.resize = function() {
  this.calculaTamano();
  this.svg.transition().attr('width', this.container.width());
  return this.svg.selectAll('.linea-votacion').transition().attr('d', this.line);
};

Votaciones.prototype.calculaTamano = function() {
  var ch, cw;
  cw = this.container.width();
  ch = this.container.height();
  this.x = d3.scale.linear().domain([0, this.data.length]).range([0, cw]);
  return this.y = d3.scale.linear().range([5, ch - 5]).domain([100, 0]);
};

$(function() {
  var els, mapita, newPosition, opts, portada, quitaDetalles;
  els = {
    body: $('body'),
    mapa: {
      instrucciones: $('#instrucciones-mapa'),
      container: $('#mapa'),
      canvas: $('#mapa-canvas'),
      loading: $('#mapa-loading')
    },
    aquiVivo: $('#aqui-vivo'),
    localizame: {
      container: $('#localizame'),
      icono: $('#localizame .icono')
    },
    cover: $('#cover'),
    representantes: $("#representantes")
  };
  Templates.setup($('.render-template'));
  opts = {
    latitude: 19.432479,
    longitude: -99.133192
  };
  mapita = new Mapa(els.mapa.canvas, opts);
  window.mapita = mapita;
  mapita.on('map.loaded', function() {
    var centro;
    els.mapa.container.removeClass('loading').on('click', function(evt) {
      evt.preventDefault();
      return els.mapa.instrucciones.fadeOut();
    });
    if (window.request_data) {
      mapita.setPolygons(window.request_data.seccion.coords.coordinates);
      centro = mapita.centroid();
      mapita.marker.setPosition(centro);
      mapita.pan(centro);
    }
    return els.mapa.container.on('webkitAnimationEnd animationend', function(evt) {
      return els.mapa.loading.css('display', 'none');
    });
  });
  newPosition = function(evt) {
    var c, coords;
    els.mapa.instrucciones.fadeOut();
    if (evt.hasOwnProperty('latitude')) {
      coords = evt;
      mapita.pan(coords);
    } else {
      evt.preventDefault();
      c = mapita.instance.getCenter();
      coords = {
        latitude: c.lat(),
        longitude: c.lng()
      };
    }
    return Representantes.deUbicacion(coords, function(representantes, seccion) {
      if (representantes === 'error') {
        ls.mapa.instrucciones.text(seccion.razon).fadeIn();
        setTimeout(function() {
          return ls.mapa.instrucciones.fadeOut(500);
        }, 3000);
        return false;
      }
      History.pushState.apply(null, Representantes.state());
      return null;
    });
  };
  Geo.on('ubicando', function(evt) {
    return els.localizame.icono.text('loading').addClass('loading');
  });
  Geo.on('error', function(evt) {
    return els.localizame.icono.text('locate').removeClass('loading');
  });
  Geo.on('posicion', function(evt) {
    newPosition(evt);
    return els.localizame.icono.text('locate').removeClass('loading');
  });

  /*
  	History
   */
  quitaDetalles = function(evt) {
    if (!els.body.hasClass('covered')) {
      return false;
    }
    evt && evt.preventDefault();
    els.cover.addClass('inactive');
    return els.body.removeClass('covered');
  };
  portada = function() {
    quitaDetalles();
    els.representantes.html('');
    return mapita.polygons.forEach(function(p) {
      return p.setMap(null);
    });
  };
  History.Adapter.bind(window, 'statechange', function() {
    var State;
    State = History.getState();
    _gaq.push(['_trackPageview', State.url.replace(window.location.origin, '')]);
    console.log("Navigate: " + State.hash);
    if (State.hash === '/') {
      return portada();
    } else {
      return State.data.evt && eval(State.data.evt)(State.data.data, els);
    }
  });
  if (window.request_data) {
    Representantes.show(window.request_data, els);
    els.mapa.instrucciones.fadeOut();
  }
  els.cover.appendTo('body');
  els.representantes.on('click', '.representante', function(evt) {
    var actor, id;
    evt.preventDefault();
    id = this.id.split('-')[1];
    actor = Representantes.find(id);
    return History.pushState.apply(null, actor.state());
  });
  els.aquiVivo.on('click', newPosition);
  els.localizame.container.on('click', function(evt) {
    evt.preventDefault();
    els.mapa.instrucciones.fadeOut();
    return Geo.setup();
  });
  return NotificationCenter.on('filtros', function(data) {
    var activos, inactivos;
    activos = data.activos.map(function(a) {
      return "." + a;
    }).join(', ');
    inactivos = data.inactivos.map(function(i) {
      return "." + i;
    }).join(', ');
    $(activos).show();
    return $(inactivos).hide();
  });
});
