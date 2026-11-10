import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm';
/* ===== HWP 미리보기 (내장) 시작 ===== */
/*! hwp.js 0.0.3 (c) Han Lee and contributors, Apache-2.0, patched for 개인연구 사이트 | cfb (c) SheetJS, Apache-2.0 | pako (c) Vitaly Puzrin, Andrei Tuputcyn, MIT. */
var HWPjs=(()=>{var Is=Object.create;var oa=Object.defineProperty;var Bs=Object.getOwnPropertyDescriptor;var Hs=Object.getOwnPropertyNames;var Ns=Object.getPrototypeOf,Os=Object.prototype.hasOwnProperty;var If=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(i,t)=>(typeof require<"u"?require:i)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Ls=(e,i)=>()=>(e&&(i=e(e=0)),i);var je=(e,i)=>()=>(i||e((i={exports:{}}).exports,i),i.exports),Bf=(e,i)=>{for(var t in i)oa(e,t,{get:i[t],enumerable:!0})},Hf=(e,i,t,r)=>{if(i&&typeof i=="object"||typeof i=="function")for(let a of Hs(i))!Os.call(e,a)&&a!==t&&oa(e,a,{get:()=>i[a],enumerable:!(r=Bs(i,a))||r.enumerable});return e};var Nf=(e,i,t)=>(t=e!=null?Is(Ns(e)):{},Hf(i||!e||!e.__esModule?oa(t,"default",{value:e,enumerable:!0}):t,e)),Of=e=>Hf(oa({},"__esModule",{value:!0}),e);var Lf={};Bf(Lf,{default:()=>sn});var sn,un=Ls(()=>{sn={}});var Do=je((Wc,Yn)=>{var ar="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function Bo(e){for(var i="",t=0,r=0,a=0,n=0,f=0,h=0,y=0,o=0;o<e.length;)t=e.charCodeAt(o++),n=t>>2,r=e.charCodeAt(o++),f=(t&3)<<4|r>>4,a=e.charCodeAt(o++),h=(r&15)<<2|a>>6,y=a&63,isNaN(r)?h=y=64:isNaN(a)&&(y=64),i+=ar.charAt(n)+ar.charAt(f)+ar.charAt(h)+ar.charAt(y);return i}function Ho(e){var i="",t=0,r=0,a=0,n=0,f=0,h=0,y=0;e=e.replace(/[^\w\+\/\=]/g,"");for(var o=0;o<e.length;)n=ar.indexOf(e.charAt(o++)),f=ar.indexOf(e.charAt(o++)),t=n<<2|f>>4,i+=String.fromCharCode(t),h=ar.indexOf(e.charAt(o++)),r=(f&15)<<4|h>>2,h!==64&&(i+=String.fromCharCode(r)),y=ar.indexOf(e.charAt(o++)),a=(h&3)<<6|y,y!==64&&(i+=String.fromCharCode(a));return i}var ct=function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node}(),Xn=function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(i,t){return t?new Buffer(i,t):new Buffer(i)}:Buffer.from.bind(Buffer)}return function(){}}();function zo(e){if(ct){if(Buffer.alloc)return Buffer.alloc(e);var i=new Buffer(e);return i.fill(0),i}return typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function No(e){return ct?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var Kr=function(i){return ct?Xn(i,"binary"):i.split("").map(function(t){return t.charCodeAt(0)&255})},Hi=/\u0000/g,Ba=/[\u0001-\u0006]/g,Ha=function(e){for(var i=[],t=0;t<e[0].length;++t)i.push.apply(i,e[0][t]);return i},Ud=Ha,Vn=function(e,i,t){for(var r=[],a=i;a<t;a+=2)r.push(String.fromCharCode(Mo(e,a)));return r.join("").replace(Hi,"")},Md=Vn,Na=function(e,i,t){for(var r=[],a=i;a<i+t;++a)r.push(("0"+e[a].toString(16)).slice(-2));return r.join("")},Gd=Na,Uo=function(e){if(Array.isArray(e[0]))return[].concat.apply([],e);var i=0,t=0;for(t=0;t<e.length;++t)i+=e[t].length;var r=new Uint8Array(i);for(t=0,i=0;t<e.length;i+=e[t].length,++t)r.set(e[t],i);return r},Yr=Uo;ct&&(Vn=function(e,i,t){return Buffer.isBuffer(e)?e.toString("utf16le",i,t).replace(Hi,""):Md(e,i,t)},Na=function(e,i,t){return Buffer.isBuffer(e)?e.toString("hex",i,i+t):Gd(e,i,t)},Ha=function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0]):Ud(e)},Kr=function(e){return Xn(e,"binary")},Yr=function(e){return Buffer.isBuffer(e[0])?Buffer.concat(e):Uo(e)});var Zd=function(e,i){return e[i]},Mo=function(e,i){return e[i+1]*256+e[i]},Dd=function(e,i){var t=e[i+1]*256+e[i];return t<32768?t:(65535-t+1)*-1},Oo=function(e,i){return e[i+3]*(1<<24)+(e[i+2]<<16)+(e[i+1]<<8)+e[i]},Xr=function(e,i){return(e[i+3]<<24)+(e[i+2]<<16)+(e[i+1]<<8)+e[i]};function Go(e,i){var t,r,a=0;switch(e){case 1:t=Zd(this,this.l);break;case 2:t=(i!=="i"?Mo:Dd)(this,this.l);break;case 4:t=Xr(this,this.l);break;case 16:a=2,r=Na(this,this.l,e)}return this.l+=e,a===0?t:r}var Wd=function(e,i,t){e[t]=i&255,e[t+1]=i>>>8&255,e[t+2]=i>>>16&255,e[t+3]=i>>>24&255},jd=function(e,i,t){e[t]=i&255,e[t+1]=i>>8&255,e[t+2]=i>>16&255,e[t+3]=i>>24&255};function $d(e,i,t){var r=0,a=0;switch(t){case"hex":for(;a<e;++a)this[this.l++]=parseInt(i.slice(2*a,2*a+2),16)||0;return this;case"utf16le":var n=this.l+e;for(a=0;a<Math.min(i.length,e);++a){var f=i.charCodeAt(a);this[this.l++]=f&255,this[this.l++]=f>>8}for(;this.l<n;)this[this.l++]=0;return this}switch(e){case 1:r=1,this[this.l]=i&255;break;case 2:r=2,this[this.l]=i&255,i>>>=8,this[this.l+1]=i&255;break;case 4:r=4,Wd(this,i,this.l);break;case-4:r=4,jd(this,i,this.l);break}return this.l+=r,this}function Zo(e,i){var t=Na(this,this.l,e.length>>1);if(t!==e)throw new Error(i+"Expected "+e+" saw "+t);this.l+=e.length>>1}function ir(e,i){e.l=i,e.read_shift=Go,e.chk=Zo,e.write_shift=$d}function It(e){var i=zo(e);return ir(i,0),i}var Lo=function(){var e={};e.version="1.2.1";function i(){for(var C=0,$=new Array(256),O=0;O!=256;++O)C=O,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,$[O]=C;return typeof Int32Array<"u"?new Int32Array($):$}var t=i();function r(C){var $=0,O=0,re=0,z=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(re=0;re!=256;++re)z[re]=C[re];for(re=0;re!=256;++re)for(O=C[re],$=256+re;$<4096;$+=256)O=z[$]=O>>>8^C[O&255];var _e=[];for(re=1;re!=16;++re)_e[re-1]=typeof Int32Array<"u"?z.subarray(re*256,re*256+256):z.slice(re*256,re*256+256);return _e}var a=r(t),n=a[0],f=a[1],h=a[2],y=a[3],o=a[4],l=a[5],L=a[6],A=a[7],m=a[8],j=a[9],D=a[10],q=a[11],M=a[12],fe=a[13],ee=a[14];function Q(C,$){for(var O=$^-1,re=0,z=C.length;re<z;)O=O>>>8^t[(O^C.charCodeAt(re++))&255];return~O}function B(C,$){for(var O=$^-1,re=C.length-15,z=0;z<re;)O=ee[C[z++]^O&255]^fe[C[z++]^O>>8&255]^M[C[z++]^O>>16&255]^q[C[z++]^O>>>24]^D[C[z++]]^j[C[z++]]^m[C[z++]]^A[C[z++]]^L[C[z++]]^l[C[z++]]^o[C[z++]]^y[C[z++]]^h[C[z++]]^f[C[z++]]^n[C[z++]]^t[C[z++]];for(re+=15;z<re;)O=O>>>8^t[(O^C[z++])&255];return~O}function ie(C,$){for(var O=$^-1,re=0,z=C.length,_e=0,xe=0;re<z;)_e=C.charCodeAt(re++),_e<128?O=O>>>8^t[(O^_e)&255]:_e<2048?(O=O>>>8^t[(O^(192|_e>>6&31))&255],O=O>>>8^t[(O^(128|_e&63))&255]):_e>=55296&&_e<57344?(_e=(_e&1023)+64,xe=C.charCodeAt(re++)&1023,O=O>>>8^t[(O^(240|_e>>8&7))&255],O=O>>>8^t[(O^(128|_e>>2&63))&255],O=O>>>8^t[(O^(128|xe>>6&15|(_e&3)<<4))&255],O=O>>>8^t[(O^(128|xe&63))&255]):(O=O>>>8^t[(O^(224|_e>>12&15))&255],O=O>>>8^t[(O^(128|_e>>6&63))&255],O=O>>>8^t[(O^(128|_e&63))&255]);return~O}return e.table=t,e.bstr=Q,e.buf=B,e.str=ie,e}(),Vr=function(){var i={};i.version="1.2.2";function t(s,c){for(var d=s.split("/"),_=c.split("/"),p=0,g=0,F=Math.min(d.length,_.length);p<F;++p){if(g=d[p].length-_[p].length)return g;if(d[p]!=_[p])return d[p]<_[p]?-1:1}return d.length-_.length}function r(s){if(s.charAt(s.length-1)=="/")return s.slice(0,-1).indexOf("/")===-1?s:r(s.slice(0,-1));var c=s.lastIndexOf("/");return c===-1?s:s.slice(0,c+1)}function a(s){if(s.charAt(s.length-1)=="/")return a(s.slice(0,-1));var c=s.lastIndexOf("/");return c===-1?s:s.slice(c+1)}function n(s,c){typeof c=="string"&&(c=new Date(c));var d=c.getHours();d=d<<6|c.getMinutes(),d=d<<5|c.getSeconds()>>>1,s.write_shift(2,d);var _=c.getFullYear()-1980;_=_<<4|c.getMonth()+1,_=_<<5|c.getDate(),s.write_shift(2,_)}function f(s){var c=s.read_shift(2)&65535,d=s.read_shift(2)&65535,_=new Date,p=d&31;d>>>=5;var g=d&15;d>>>=4,_.setMilliseconds(0),_.setFullYear(d+1980),_.setMonth(g-1),_.setDate(p);var F=c&31;c>>>=5;var H=c&63;return c>>>=6,_.setHours(c),_.setMinutes(H),_.setSeconds(F<<1),_}function h(s){ir(s,0);for(var c={},d=0;s.l<=s.length-4;){var _=s.read_shift(2),p=s.read_shift(2),g=s.l+p,F={};switch(_){case 21589:d=s.read_shift(1),d&1&&(F.mtime=s.read_shift(4)),p>5&&(d&2&&(F.atime=s.read_shift(4)),d&4&&(F.ctime=s.read_shift(4))),F.mtime&&(F.mt=new Date(F.mtime*1e3));break}s.l=g,c[_]=F}return c}var y;function o(){return y||(y=(un(),Of(Lf)))}function l(s,c){if(s[0]==80&&s[1]==75)return aa(s,c);if((s[0]|32)==109&&(s[1]|32)==105)return fa(s,c);if(s.length<512)throw new Error("CFB file size "+s.length+" < 512");var d=3,_=512,p=0,g=0,F=0,H=0,S=0,T=[],P=s.slice(0,512);ir(P,0);var X=L(P);switch(d=X[0],d){case 3:_=512;break;case 4:_=4096;break;case 0:if(X[1]==0)return aa(s,c);default:throw new Error("Major Version: Expected 3 or 4 saw "+d)}_!==512&&(P=s.slice(0,_),ir(P,28));var V=s.slice(0,_);A(P,d);var oe=P.read_shift(4,"i");if(d===3&&oe!==0)throw new Error("# Directory Sectors: Expected 0 saw "+oe);P.l+=4,F=P.read_shift(4,"i"),P.l+=4,P.chk("00100000","Mini Stream Cutoff Size: "),H=P.read_shift(4,"i"),p=P.read_shift(4,"i"),S=P.read_shift(4,"i"),g=P.read_shift(4,"i");for(var J=-1,te=0;te<109&&(J=P.read_shift(4,"i"),!(J<0));++te)T[te]=J;var ve=m(s,_);q(S,g,ve,_,T);var Te=fe(ve,F,T,_);Te[F].name="!Directory",p>0&&H!==xe&&(Te[H].name="!MiniFAT"),Te[T[0]].name="!FAT",Te.fat_addrs=T,Te.ssz=_;var Ge={},Ne=[],Qe=[],_r=[];ee(F,Te,ve,Ne,p,Ge,Qe,H),j(Qe,_r,Ne),Ne.shift();var cr={FileIndex:Qe,FullPaths:_r};return c&&c.raw&&(cr.raw={header:V,sectors:ve}),cr}function L(s){if(s[s.l]==80&&s[s.l+1]==75)return[0,0];s.chk(Ye,"Header Signature: "),s.l+=16;var c=s.read_shift(2,"u");return[s.read_shift(2,"u"),c]}function A(s,c){var d=9;switch(s.l+=2,d=s.read_shift(2)){case 9:if(c!=3)throw new Error("Sector Shift: Expected 9 saw "+d);break;case 12:if(c!=4)throw new Error("Sector Shift: Expected 12 saw "+d);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+d)}s.chk("0600","Mini Sector Shift: "),s.chk("000000000000","Reserved: ")}function m(s,c){for(var d=Math.ceil(s.length/c)-1,_=[],p=1;p<d;++p)_[p-1]=s.slice(p*c,(p+1)*c);return _[d-1]=s.slice(d*c),_}function j(s,c,d){for(var _=0,p=0,g=0,F=0,H=0,S=d.length,T=[],P=[];_<S;++_)T[_]=P[_]=_,c[_]=d[_];for(;H<P.length;++H)_=P[H],p=s[_].L,g=s[_].R,F=s[_].C,T[_]===_&&(p!==-1&&T[p]!==p&&(T[_]=T[p]),g!==-1&&T[g]!==g&&(T[_]=T[g])),F!==-1&&(T[F]=_),p!==-1&&_!=T[_]&&(T[p]=T[_],P.lastIndexOf(p)<H&&P.push(p)),g!==-1&&_!=T[_]&&(T[g]=T[_],P.lastIndexOf(g)<H&&P.push(g));for(_=1;_<S;++_)T[_]===_&&(g!==-1&&T[g]!==g?T[_]=T[g]:p!==-1&&T[p]!==p&&(T[_]=T[p]));for(_=1;_<S;++_)if(s[_].type!==0){if(H=_,H!=T[H])do H=T[H],c[_]=c[H]+"/"+c[_];while(H!==0&&T[H]!==-1&&H!=T[H]);T[_]=-1}for(c[0]+="/",_=1;_<S;++_)s[_].type!==2&&(c[_]+="/")}function D(s,c,d){for(var _=s.start,p=s.size,g=[],F=_;d&&p>0&&F>=0;)g.push(c.slice(F*_e,F*_e+_e)),p-=_e,F=Xr(d,F*4);return g.length===0?It(0):Yr(g).slice(0,s.size)}function q(s,c,d,_,p){var g=xe;if(s===xe){if(c!==0)throw new Error("DIFAT chain shorter than expected")}else if(s!==-1){var F=d[s],H=(_>>>2)-1;if(!F)return;for(var S=0;S<H&&(g=Xr(F,S*4))!==xe;++S)p.push(g);c>=1&&q(Xr(F,_-4),c-1,d,_,p)}}function M(s,c,d,_,p){var g=[],F=[];p||(p=[]);var H=_-1,S=0,T=0;for(S=c;S>=0;){p[S]=!0,g[g.length]=S,F.push(s[S]);var P=d[Math.floor(S*4/_)];if(T=S*4&H,_<4+T)throw new Error("FAT boundary crossed: "+S+" 4 "+_);if(!s[P])break;S=Xr(s[P],T)}return{nodes:g,data:Ha([F])}}function fe(s,c,d,_){var p=s.length,g=[],F=[],H=[],S=[],T=_-1,P=0,X=0,V=0,oe=0;for(P=0;P<p;++P)if(H=[],V=P+c,V>=p&&(V-=p),!F[V]){S=[];var J=[];for(X=V;X>=0;){J[X]=!0,F[X]=!0,H[H.length]=X,S.push(s[X]);var te=d[Math.floor(X*4/_)];if(oe=X*4&T,_<4+oe)throw new Error("FAT boundary crossed: "+X+" 4 "+_);if(!s[te]||(X=Xr(s[te],oe),J[X]))break}g[V]={nodes:H,data:Ha([S])}}return g}function ee(s,c,d,_,p,g,F,H){for(var S=0,T=_.length?2:0,P=c[s].data,X=0,V=0,oe;X<P.length;X+=128){var J=P.slice(X,X+128);ir(J,64),V=J.read_shift(2),oe=Vn(J,0,V-T),_.push(oe);var te={name:oe,type:J.read_shift(1),color:J.read_shift(1),L:J.read_shift(4,"i"),R:J.read_shift(4,"i"),C:J.read_shift(4,"i"),clsid:J.read_shift(16),state:J.read_shift(4,"i"),start:0,size:0},ve=J.read_shift(2)+J.read_shift(2)+J.read_shift(2)+J.read_shift(2);ve!==0&&(te.ct=Q(J,J.l-8));var Te=J.read_shift(2)+J.read_shift(2)+J.read_shift(2)+J.read_shift(2);Te!==0&&(te.mt=Q(J,J.l-8)),te.start=J.read_shift(4,"i"),te.size=J.read_shift(4,"i"),te.size<0&&te.start<0&&(te.size=te.type=0,te.start=xe,te.name=""),te.type===5?(S=te.start,p>0&&S!==xe&&(c[S].name="!StreamData")):te.size>=4096?(te.storage="fat",c[te.start]===void 0&&(c[te.start]=M(d,te.start,c.fat_addrs,c.ssz)),c[te.start].name=te.name,te.content=c[te.start].data.slice(0,te.size)):(te.storage="minifat",te.size<0?te.size=0:S!==xe&&te.start!==xe&&c[S]&&(te.content=D(te,c[S].data,(c[H]||{}).data))),te.content&&ir(te.content,0),g[oe]=te,F.push(te)}}function Q(s,c){return new Date((Oo(s,c+4)/1e7*Math.pow(2,32)+Oo(s,c)/1e7-11644473600)*1e3)}function B(s,c){return o(),l(y.readFileSync(s),c)}function ie(s,c){var d=c&&c.type;switch(d||ct&&Buffer.isBuffer(s)&&(d="buffer"),d||"base64"){case"file":return B(s,c);case"base64":return l(Kr(Ho(s)),c);case"binary":return l(Kr(s),c)}return l(s,c)}function C(s,c){var d=c||{},_=d.root||"Root Entry";if(s.FullPaths||(s.FullPaths=[]),s.FileIndex||(s.FileIndex=[]),s.FullPaths.length!==s.FileIndex.length)throw new Error("inconsistent CFB structure");s.FullPaths.length===0&&(s.FullPaths[0]=_+"/",s.FileIndex[0]={name:_,type:5}),d.CLSID&&(s.FileIndex[0].clsid=d.CLSID),$(s)}function $(s){var c="Sh33tJ5";if(!Vr.find(s,"/"+c)){var d=It(4);d[0]=55,d[1]=d[3]=50,d[2]=54,s.FileIndex.push({name:c,type:2,content:d,size:4,L:69,R:69,C:69}),s.FullPaths.push(s.FullPaths[0]+c),O(s)}}function O(s,c){C(s);for(var d=!1,_=!1,p=s.FullPaths.length-1;p>=0;--p){var g=s.FileIndex[p];switch(g.type){case 0:_?d=!0:(s.FileIndex.pop(),s.FullPaths.pop());break;case 1:case 2:case 5:_=!0,isNaN(g.R*g.L*g.C)&&(d=!0),g.R>-1&&g.L>-1&&g.R==g.L&&(d=!0);break;default:d=!0;break}}if(!(!d&&!c)){var F=new Date(1987,1,19),H=0,S=Object.create?Object.create(null):{},T=[];for(p=0;p<s.FullPaths.length;++p)S[s.FullPaths[p]]=!0,s.FileIndex[p].type!==0&&T.push([s.FullPaths[p],s.FileIndex[p]]);for(p=0;p<T.length;++p){var P=r(T[p][0]);for(_=S[P];!_;){for(;r(P)&&!S[r(P)];)P=r(P);T.push([P,{name:a(P).replace("/",""),type:1,clsid:U,ct:F,mt:F,content:null}]),S[P]=!0,P=r(T[p][0]),_=S[P]}}for(T.sort(function(oe,J){return t(oe[0],J[0])}),s.FullPaths=[],s.FileIndex=[],p=0;p<T.length;++p)s.FullPaths[p]=T[p][0],s.FileIndex[p]=T[p][1];for(p=0;p<T.length;++p){var X=s.FileIndex[p],V=s.FullPaths[p];if(X.name=a(V).replace("/",""),X.L=X.R=X.C=-(X.color=1),X.size=X.content?X.content.length:0,X.start=0,X.clsid=X.clsid||U,p===0)X.C=T.length>1?1:-1,X.size=0,X.type=5;else if(V.slice(-1)=="/"){for(H=p+1;H<T.length&&r(s.FullPaths[H])!=V;++H);for(X.C=H>=T.length?-1:H,H=p+1;H<T.length&&r(s.FullPaths[H])!=r(V);++H);X.R=H>=T.length?-1:H,X.type=1}else r(s.FullPaths[p+1]||"")==r(V)&&(X.R=p+1),X.type=2}}}function re(s,c){var d=c||{};if(d.fileType=="mad")return Lr(s,d);switch(O(s),d.fileType){case"zip":return dr(s,d)}var _=function(oe){for(var J=0,te=0,ve=0;ve<oe.FileIndex.length;++ve){var Te=oe.FileIndex[ve];if(Te.content){var Ge=Te.content.length;Ge>0&&(Ge<4096?J+=Ge+63>>6:te+=Ge+511>>9)}}for(var Ne=oe.FullPaths.length+3>>2,Qe=J+7>>3,_r=J+127>>7,cr=Qe+te+Ne+_r,yt=cr+127>>7,wi=yt<=109?0:Math.ceil((yt-109)/127);cr+yt+wi+127>>7>yt;)wi=++yt<=109?0:Math.ceil((yt-109)/127);var kt=[1,wi,yt,_r,Ne,te,J,0];return oe.FileIndex[0].size=J<<6,kt[7]=(oe.FileIndex[0].start=kt[0]+kt[1]+kt[2]+kt[3]+kt[4]+kt[5])+(kt[6]+7>>3),kt}(s),p=It(_[7]<<9),g=0,F=0;{for(g=0;g<8;++g)p.write_shift(1,rt[g]);for(g=0;g<8;++g)p.write_shift(2,0);for(p.write_shift(2,62),p.write_shift(2,3),p.write_shift(2,65534),p.write_shift(2,9),p.write_shift(2,6),g=0;g<3;++g)p.write_shift(2,0);for(p.write_shift(4,0),p.write_shift(4,_[2]),p.write_shift(4,_[0]+_[1]+_[2]+_[3]-1),p.write_shift(4,0),p.write_shift(4,4096),p.write_shift(4,_[3]?_[0]+_[1]+_[2]-1:xe),p.write_shift(4,_[3]),p.write_shift(-4,_[1]?_[0]-1:xe),p.write_shift(4,_[1]),g=0;g<109;++g)p.write_shift(-4,g<_[2]?_[1]+g:-1)}if(_[1])for(F=0;F<_[1];++F){for(;g<236+F*127;++g)p.write_shift(-4,g<_[2]?_[1]+g:-1);p.write_shift(-4,F===_[1]-1?xe:F+1)}var H=function(oe){for(F+=oe;g<F-1;++g)p.write_shift(-4,g+1);oe&&(++g,p.write_shift(-4,xe))};for(F=g=0,F+=_[1];g<F;++g)p.write_shift(-4,G.DIFSECT);for(F+=_[2];g<F;++g)p.write_shift(-4,G.FATSECT);H(_[3]),H(_[4]);for(var S=0,T=0,P=s.FileIndex[0];S<s.FileIndex.length;++S)P=s.FileIndex[S],P.content&&(T=P.content.length,!(T<4096)&&(P.start=F,H(T+511>>9)));for(H(_[6]+7>>3);p.l&511;)p.write_shift(-4,G.ENDOFCHAIN);for(F=g=0,S=0;S<s.FileIndex.length;++S)P=s.FileIndex[S],P.content&&(T=P.content.length,!(!T||T>=4096)&&(P.start=F,H(T+63>>6)));for(;p.l&511;)p.write_shift(-4,G.ENDOFCHAIN);for(g=0;g<_[4]<<2;++g){var X=s.FullPaths[g];if(!X||X.length===0){for(S=0;S<17;++S)p.write_shift(4,0);for(S=0;S<3;++S)p.write_shift(4,-1);for(S=0;S<12;++S)p.write_shift(4,0);continue}P=s.FileIndex[g],g===0&&(P.start=P.size?P.start-1:xe);var V=g===0&&d.root||P.name;if(V.length>32&&(console.error("Name "+V+" will be truncated to "+V.slice(0,32)),V=V.slice(0,32)),T=2*(V.length+1),p.write_shift(64,V,"utf16le"),p.write_shift(2,T),p.write_shift(1,P.type),p.write_shift(1,P.color),p.write_shift(-4,P.L),p.write_shift(-4,P.R),p.write_shift(-4,P.C),P.clsid)p.write_shift(16,P.clsid,"hex");else for(S=0;S<4;++S)p.write_shift(4,0);p.write_shift(4,P.state||0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,P.start),p.write_shift(4,P.size),p.write_shift(4,0)}for(g=1;g<s.FileIndex.length;++g)if(P=s.FileIndex[g],P.size>=4096)if(p.l=P.start+1<<9,ct&&Buffer.isBuffer(P.content))P.content.copy(p,p.l,0,P.size),p.l+=P.size+511&-512;else{for(S=0;S<P.size;++S)p.write_shift(1,P.content[S]);for(;S&511;++S)p.write_shift(1,0)}for(g=1;g<s.FileIndex.length;++g)if(P=s.FileIndex[g],P.size>0&&P.size<4096)if(ct&&Buffer.isBuffer(P.content))P.content.copy(p,p.l,0,P.size),p.l+=P.size+63&-64;else{for(S=0;S<P.size;++S)p.write_shift(1,P.content[S]);for(;S&63;++S)p.write_shift(1,0)}if(ct)p.l=p.length;else for(;p.l<p.length;)p.write_shift(1,0);return p}function z(s,c){var d=s.FullPaths.map(function(S){return S.toUpperCase()}),_=d.map(function(S){var T=S.split("/");return T[T.length-(S.slice(-1)=="/"?2:1)]}),p=!1;c.charCodeAt(0)===47?(p=!0,c=d[0].slice(0,-1)+c):p=c.indexOf("/")!==-1;var g=c.toUpperCase(),F=p===!0?d.indexOf(g):_.indexOf(g);if(F!==-1)return s.FileIndex[F];var H=!g.match(Ba);for(g=g.replace(Hi,""),H&&(g=g.replace(Ba,"!")),F=0;F<d.length;++F)if((H?d[F].replace(Ba,"!"):d[F]).replace(Hi,"")==g||(H?_[F].replace(Ba,"!"):_[F]).replace(Hi,"")==g)return s.FileIndex[F];return null}var _e=64,xe=-2,Ye="d0cf11e0a1b11ae1",rt=[208,207,17,224,161,177,26,225],U="00000000000000000000000000000000",G={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:xe,FREESECT:-1,HEADER_SIGNATURE:Ye,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:U,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function Y(s,c,d){o();var _=re(s,d);y.writeFileSync(c,_)}function pe(s){for(var c=new Array(s.length),d=0;d<s.length;++d)c[d]=String.fromCharCode(s[d]);return c.join("")}function ye(s,c){var d=re(s,c);switch(c&&c.type||"buffer"){case"file":return o(),y.writeFileSync(c.filename,d),d;case"binary":return typeof d=="string"?d:pe(d);case"base64":return Bo(typeof d=="string"?d:pe(d));case"buffer":if(ct)return Buffer.isBuffer(d)?d:Xn(d);case"array":return typeof d=="string"?Kr(d):d}return d}var Ue;function Xe(s){try{var c=s.InflateRaw,d=new c;if(d._processChunk(new Uint8Array([3,0]),d._finishFlushFlag),d.bytesRead)Ue=s;else throw new Error("zlib does not expose bytesRead")}catch(_){console.error("cannot use native zlib: "+(_.message||_))}}function ae(s,c){if(!Ue)return ia(s,c);var d=Ue.InflateRaw,_=new d,p=_._processChunk(s.slice(s.l),_._finishFlushFlag);return s.l+=_.bytesRead,p}function Pe(s){return Ue?Ue.deflateRawSync(s):Qi(s)}var W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ae=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],ge=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function Re(s){var c=(s<<1|s<<11)&139536|(s<<5|s<<15)&558144;return(c>>16|c>>8|c)&255}for(var He=typeof Uint8Array<"u",gt=He?new Uint8Array(256):[],Hr=0;Hr<256;++Hr)gt[Hr]=Re(Hr);function qi(s,c){var d=gt[s&255];return c<=8?d>>>8-c:(d=d<<8|gt[s>>8&255],c<=16?d>>>16-c:(d=d<<8|gt[s>>16&255],d>>>24-c))}function en(s,c){var d=c&7,_=c>>>3;return(s[_]|(d<=6?0:s[_+1]<<8))>>>d&3}function hi(s,c){var d=c&7,_=c>>>3;return(s[_]|(d<=5?0:s[_+1]<<8))>>>d&7}function tn(s,c){var d=c&7,_=c>>>3;return(s[_]|(d<=4?0:s[_+1]<<8))>>>d&15}function oi(s,c){var d=c&7,_=c>>>3;return(s[_]|(d<=3?0:s[_+1]<<8))>>>d&31}function Ji(s,c){var d=c&7,_=c>>>3;return(s[_]|(d<=1?0:s[_+1]<<8))>>>d&127}function Nr(s,c,d){var _=c&7,p=c>>>3,g=(1<<d)-1,F=s[p]>>>_;return d<8-_||(F|=s[p+1]<<8-_,d<16-_)||(F|=s[p+2]<<16-_,d<24-_)||(F|=s[p+3]<<24-_),F&g}function St(s,c,d){var _=c&7,p=c>>>3;return _<=5?s[p]|=(d&7)<<_:(s[p]|=d<<_&255,s[p+1]=(d&7)>>8-_),c+3}function rn(s,c,d){var _=c&7,p=c>>>3;return d=(d&1)<<_,s[p]|=d,c+1}function Ft(s,c,d){var _=c&7,p=c>>>3;return d<<=_,s[p]|=d&255,d>>>=8,s[p+1]=d,c+8}function li(s,c,d){var _=c&7,p=c>>>3;return d<<=_,s[p]|=d&255,d>>>=8,s[p+1]=d&255,s[p+2]=d>>>8,c+16}function si(s,c){var d=s.length,_=2*d>c?2*d:c+5,p=0;if(d>=c)return s;if(ct){var g=No(_);if(s.copy)s.copy(g);else for(;p<s.length;++p)g[p]=s[p];return g}else if(He){var F=new Uint8Array(_);if(F.set)F.set(s);else for(;p<d;++p)F[p]=s[p];return F}return s.length=_,s}function qe(s){for(var c=new Array(s),d=0;d<s;++d)c[d]=0;return c}function Me(s,c,d){var _=1,p=0,g=0,F=0,H=0,S=s.length,T=He?new Uint16Array(32):qe(32);for(g=0;g<32;++g)T[g]=0;for(g=S;g<d;++g)s[g]=0;S=s.length;var P=He?new Uint16Array(S):qe(S);for(g=0;g<S;++g)T[p=s[g]]++,_<p&&(_=p),P[g]=0;for(T[0]=0,g=1;g<=_;++g)T[g+16]=H=H+T[g-1]<<1;for(g=0;g<S;++g)H=s[g],H!=0&&(P[g]=T[H+16]++);var X=0;for(g=0;g<S;++g)if(X=s[g],X!=0)for(H=qi(P[g],_)>>_-X,F=(1<<_+4-X)-1;F>=0;--F)c[H|F<<X]=X&15|g<<4;return _}var Or=He?new Uint16Array(512):qe(512),ui=He?new Uint16Array(32):qe(32);if(!He){for(var xt=0;xt<512;++xt)Or[xt]=0;for(xt=0;xt<32;++xt)ui[xt]=0}(function(){for(var s=[],c=0;c<32;c++)s.push(5);Me(s,ui,32);var d=[];for(c=0;c<=143;c++)d.push(8);for(;c<=255;c++)d.push(9);for(;c<=279;c++)d.push(7);for(;c<=287;c++)d.push(8);Me(d,Or,288)})();var ur=function(){for(var c=He?new Uint8Array(32768):[],d=0,_=0;d<ge.length-1;++d)for(;_<ge[d+1];++_)c[_]=d;for(;_<32768;++_)c[_]=29;var p=He?new Uint8Array(259):[];for(d=0,_=0;d<Ae.length-1;++d)for(;_<Ae[d+1];++_)p[_]=d;function g(H,S){for(var T=0;T<H.length;){var P=Math.min(65535,H.length-T),X=T+P==H.length;for(S.write_shift(1,+X),S.write_shift(2,P),S.write_shift(2,~P&65535);P-- >0;)S[S.l++]=H[T++]}return S.l}function F(H,S){for(var T=0,P=0,X=He?new Uint16Array(32768):[];P<H.length;){var V=Math.min(65535,H.length-P);if(V<10){for(T=St(S,T,+(P+V==H.length)),T&7&&(T+=8-(T&7)),S.l=T/8|0,S.write_shift(2,V),S.write_shift(2,~V&65535);V-- >0;)S[S.l++]=H[P++];T=S.l*8;continue}T=St(S,T,+(P+V==H.length)+2);for(var oe=0;V-- >0;){var J=H[P];oe=(oe<<5^J)&32767;var te=-1,ve=0;if((te=X[oe])&&(te|=P&-32768,te>P&&(te-=32768),te<P))for(;H[te+ve]==H[P+ve]&&ve<250;)++ve;if(ve>2){J=p[ve],J<=22?T=Ft(S,T,gt[J+1]>>1)-1:(Ft(S,T,3),T+=5,Ft(S,T,gt[J-23]>>5),T+=3);var Te=J<8?0:J-4>>2;Te>0&&(li(S,T,ve-Ae[J]),T+=Te),J=c[P-te],T=Ft(S,T,gt[J]>>3),T-=3;var Ge=J<4?0:J-2>>1;Ge>0&&(li(S,T,P-te-ge[J]),T+=Ge);for(var Ne=0;Ne<ve;++Ne)X[oe]=P&32767,oe=(oe<<5^H[P])&32767,++P;V-=ve-1}else J<=143?J=J+48:T=rn(S,T,1),T=Ft(S,T,gt[J]),X[oe]=P&32767,++P}T=Ft(S,T,0)-1}return S.l=(T+7)/8|0,S.l}return function(S,T){return S.length<8?g(S,T):F(S,T)}}();function Qi(s){var c=It(50+Math.floor(s.length*1.1)),d=ur(s,c);return c.slice(0,d)}var Xt=He?new Uint16Array(32768):qe(32768),ea=He?new Uint16Array(32768):qe(32768),Vt=He?new Uint16Array(128):qe(128),ta=1,ra=1;function an(s,c){var d=oi(s,c)+257;c+=5;var _=oi(s,c)+1;c+=5;var p=tn(s,c)+4;c+=4;for(var g=0,F=He?new Uint8Array(19):qe(19),H=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],S=1,T=He?new Uint8Array(8):qe(8),P=He?new Uint8Array(8):qe(8),X=F.length,V=0;V<p;++V)F[W[V]]=g=hi(s,c),S<g&&(S=g),T[g]++,c+=3;var oe=0;for(T[0]=0,V=1;V<=S;++V)P[V]=oe=oe+T[V-1]<<1;for(V=0;V<X;++V)(oe=F[V])!=0&&(H[V]=P[oe]++);var J=0;for(V=0;V<X;++V)if(J=F[V],J!=0){oe=gt[H[V]]>>8-J;for(var te=(1<<7-J)-1;te>=0;--te)Vt[oe|te<<J]=J&7|V<<3}var ve=[];for(S=1;ve.length<d+_;)switch(oe=Vt[Ji(s,c)],c+=oe&7,oe>>>=3){case 16:for(g=3+en(s,c),c+=2,oe=ve[ve.length-1];g-- >0;)ve.push(oe);break;case 17:for(g=3+hi(s,c),c+=3;g-- >0;)ve.push(0);break;case 18:for(g=11+Ji(s,c),c+=7;g-- >0;)ve.push(0);break;default:ve.push(oe),S<oe&&(S=oe);break}var Te=ve.slice(0,d),Ge=ve.slice(d);for(V=d;V<286;++V)Te[V]=0;for(V=_;V<30;++V)Ge[V]=0;return ta=Me(Te,Xt,286),ra=Me(Ge,ea,30),c}function nn(s,c){if(s[0]==3&&!(s[1]&3))return[zo(c),2];for(var d=0,_=0,p=No(c||1<<18),g=0,F=p.length>>>0,H=0,S=0;!(_&1);){if(_=hi(s,d),d+=3,_>>>1)_>>1==1?(H=9,S=5):(d=an(s,d),H=ta,S=ra);else{d&7&&(d+=8-(d&7));var T=s[d>>>3]|s[(d>>>3)+1]<<8;if(d+=32,T>0)for(!c&&F<g+T&&(p=si(p,g+T),F=p.length);T-- >0;)p[g++]=s[d>>>3],d+=8;continue}for(;;){!c&&F<g+32767&&(p=si(p,g+32767),F=p.length);var P=Nr(s,d,H),X=_>>>1==1?Or[P]:Xt[P];if(d+=X&15,X>>>=4,!(X>>>8&255))p[g++]=X;else{if(X==256)break;X-=257;var V=X<8?0:X-4>>2;V>5&&(V=0);var oe=g+Ae[X];V>0&&(oe+=Nr(s,d,V),d+=V),P=Nr(s,d,S),X=_>>>1==1?ui[P]:ea[P],d+=X&15,X>>>=4;var J=X<4?0:X-2>>1,te=ge[X];for(J>0&&(te+=Nr(s,d,J),d+=J),!c&&F<oe&&(p=si(p,oe+100),F=p.length);g<oe;)p[g]=p[g-te],++g}}}return c?[p,d+7>>>3]:[p.slice(0,g),d+7>>>3]}function ia(s,c){var d=s.slice(s.l||0),_=nn(d,c);return s.l+=_[1],_[0]}function di(s,c){if(s)typeof console<"u"&&console.error(c);else throw new Error(c)}function aa(s,c){var d=s;ir(d,0);var _=[],p=[],g={FileIndex:_,FullPaths:p};C(g,{root:c.root});for(var F=d.length-4;(d[F]!=80||d[F+1]!=75||d[F+2]!=5||d[F+3]!=6)&&F>=0;)--F;d.l=F+4,d.l+=4;var H=d.read_shift(2);d.l+=6;var S=d.read_shift(4);for(d.l=S,F=0;F<H;++F){d.l+=20;var T=d.read_shift(4),P=d.read_shift(4),X=d.read_shift(2),V=d.read_shift(2),oe=d.read_shift(2);d.l+=8;var J=d.read_shift(4),te=h(d.slice(d.l+X,d.l+X+V));d.l+=X+V+oe;var ve=d.l;d.l=J+4,Je(d,T,P,g,te),d.l=ve}return g}function Je(s,c,d,_,p){s.l+=2;var g=s.read_shift(2),F=s.read_shift(2),H=f(s);if(g&8257)throw new Error("Unsupported ZIP encryption");for(var S=s.read_shift(4),T=s.read_shift(4),P=s.read_shift(4),X=s.read_shift(2),V=s.read_shift(2),oe="",J=0;J<X;++J)oe+=String.fromCharCode(s[s.l++]);if(V){var te=h(s.slice(s.l,s.l+V));(te[21589]||{}).mt&&(H=te[21589].mt),((p||{})[21589]||{}).mt&&(H=p[21589].mt)}s.l+=V;var ve=s.slice(s.l,s.l+T);switch(F){case 8:ve=ae(s,P);break;case 0:break;default:throw new Error("Unsupported ZIP Compression method "+F)}var Te=!1;g&8&&(S=s.read_shift(4),S==134695760&&(S=s.read_shift(4),Te=!0),T=s.read_shift(4),P=s.read_shift(4)),T!=c&&di(Te,"Bad compressed size: "+c+" != "+T),P!=d&&di(Te,"Bad uncompressed size: "+d+" != "+P);var Ge=Lo.buf(ve,0);S>>0!=Ge>>0&&di(Te,"Bad CRC32 checksum: "+S+" != "+Ge),it(_,oe,ve,{unsafe:!0,mt:H})}function dr(s,c){var d=c||{},_=[],p=[],g=It(1),F=d.compression?8:0,H=0,S=!1;S&&(H|=8);var T=0,P=0,X=0,V=0,oe=s.FullPaths[0],J=oe,te=s.FileIndex[0],ve=[],Te=0;for(T=1;T<s.FullPaths.length;++T)if(J=s.FullPaths[T].slice(oe.length),te=s.FileIndex[T],!(!te.size||!te.content||J=="Sh33tJ5")){var Ge=X,Ne=It(J.length);for(P=0;P<J.length;++P)Ne.write_shift(1,J.charCodeAt(P)&127);Ne=Ne.slice(0,Ne.l),ve[V]=Lo.buf(te.content,0);var Qe=te.content;F==8&&(Qe=Pe(Qe)),g=It(30),g.write_shift(4,67324752),g.write_shift(2,20),g.write_shift(2,H),g.write_shift(2,F),te.mt?n(g,te.mt):g.write_shift(4,0),g.write_shift(-4,H&8?0:ve[V]),g.write_shift(4,H&8?0:Qe.length),g.write_shift(4,H&8?0:te.content.length),g.write_shift(2,Ne.length),g.write_shift(2,0),X+=g.length,_.push(g),X+=Ne.length,_.push(Ne),X+=Qe.length,_.push(Qe),H&8&&(g=It(12),g.write_shift(-4,ve[V]),g.write_shift(4,Qe.length),g.write_shift(4,te.content.length),X+=g.l,_.push(g)),g=It(46),g.write_shift(4,33639248),g.write_shift(2,0),g.write_shift(2,20),g.write_shift(2,H),g.write_shift(2,F),g.write_shift(4,0),g.write_shift(-4,ve[V]),g.write_shift(4,Qe.length),g.write_shift(4,te.content.length),g.write_shift(2,Ne.length),g.write_shift(2,0),g.write_shift(2,0),g.write_shift(2,0),g.write_shift(2,0),g.write_shift(4,0),g.write_shift(4,Ge),Te+=g.l,p.push(g),Te+=Ne.length,p.push(Ne),++V}return g=It(22),g.write_shift(4,101010256),g.write_shift(2,0),g.write_shift(2,0),g.write_shift(2,V),g.write_shift(2,V),g.write_shift(4,Te),g.write_shift(4,X),g.write_shift(2,0),Yr([Yr(_),Yr(p),g])}var zt={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function fn(s,c){if(s.ctype)return s.ctype;var d=s.name||"",_=d.match(/\.([^\.]+)$/);return _&&zt[_[1]]||c&&(_=(d=c).match(/[\.\\]([^\.\\])+$/),_&&zt[_[1]])?zt[_[1]]:"application/octet-stream"}function hn(s){for(var c=Bo(s),d=[],_=0;_<c.length;_+=76)d.push(c.slice(_,_+76));return d.join(`\r
`)+`\r
`}function _i(s){var c=s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(T){var P=T.charCodeAt(0).toString(16).toUpperCase();return"="+(P.length==1?"0"+P:P)});c=c.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),c.charAt(0)==`
`&&(c="=0D"+c.slice(1)),c=c.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var d=[],_=c.split(`\r
`),p=0;p<_.length;++p){var g=_[p];if(g.length==0){d.push("");continue}for(var F=0;F<g.length;){var H=76,S=g.slice(F,F+H);S.charAt(H-1)=="="?H--:S.charAt(H-2)=="="?H-=2:S.charAt(H-3)=="="&&(H-=3),S=g.slice(F,F+H),F+=H,F<g.length&&(S+="="),d.push(S)}}return d.join(`\r
`)}function on(s){for(var c=[],d=0;d<s.length;++d){for(var _=s[d];d<=s.length&&_.charAt(_.length-1)=="=";)_=_.slice(0,_.length-1)+s[++d];c.push(_)}for(var p=0;p<c.length;++p)c[p]=c[p].replace(/[=][0-9A-Fa-f]{2}/g,function(g){return String.fromCharCode(parseInt(g.slice(1),16))});return Kr(c.join(`\r
`))}function na(s,c,d){for(var _="",p="",g="",F,H=0;H<10;++H){var S=c[H];if(!S||S.match(/^\s*$/))break;var T=S.match(/^(.*?):\s*([^\s].*)$/);if(T)switch(T[1].toLowerCase()){case"content-location":_=T[2].trim();break;case"content-type":g=T[2].trim();break;case"content-transfer-encoding":p=T[2].trim();break}}switch(++H,p.toLowerCase()){case"base64":F=Kr(Ho(c.slice(H).join("")));break;case"quoted-printable":F=on(c.slice(H));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+p)}var P=it(s,_.slice(d.length),F,{unsafe:!0});g&&(P.ctype=g)}function fa(s,c){if(pe(s.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var d=c&&c.root||"",_=(ct&&Buffer.isBuffer(s)?s.toString("binary"):pe(s)).split(`\r
`),p=0,g="";for(p=0;p<_.length;++p)if(g=_[p],!!/^Content-Location:/i.test(g)&&(g=g.slice(g.indexOf("file")),d||(d=g.slice(0,g.lastIndexOf("/")+1)),g.slice(0,d.length)!=d))for(;d.length>0&&(d=d.slice(0,d.length-1),d=d.slice(0,d.lastIndexOf("/")+1),g.slice(0,d.length)!=d););var F=(_[1]||"").match(/boundary="(.*?)"/);if(!F)throw new Error("MAD cannot find boundary");var H="--"+(F[1]||""),S=[],T=[],P={FileIndex:S,FullPaths:T};C(P);var X,V=0;for(p=0;p<_.length;++p){var oe=_[p];oe!==H&&oe!==H+"--"||(V++&&na(P,_.slice(X,p),d),X=p)}return P}function Lr(s,c){var d=c||{},_=d.boundary||"SheetJS";_="------="+_;for(var p=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+_.slice(2)+'"',"","",""],g=s.FullPaths[0],F=g,H=s.FileIndex[0],S=1;S<s.FullPaths.length;++S)if(F=s.FullPaths[S].slice(g.length),H=s.FileIndex[S],!(!H.size||!H.content||F=="Sh33tJ5")){F=F.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(ve){return"_x"+ve.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(ve){return"_u"+ve.charCodeAt(0).toString(16)+"_"});for(var T=H.content,P=ct&&Buffer.isBuffer(T)?T.toString("binary"):pe(T),X=0,V=Math.min(1024,P.length),oe=0,J=0;J<=V;++J)(oe=P.charCodeAt(J))>=32&&oe<128&&++X;var te=X>=V*4/5;p.push(_),p.push("Content-Location: "+(d.root||"file:///C:/SheetJS/")+F),p.push("Content-Transfer-Encoding: "+(te?"quoted-printable":"base64")),p.push("Content-Type: "+fn(H,F)),p.push(""),p.push(te?_i(P):hn(P))}return p.push(_+`--\r
`),p.join(`\r
`)}function ci(s){var c={};return C(c,s),c}function it(s,c,d,_){var p=_&&_.unsafe;p||C(s);var g=!p&&Vr.find(s,c);if(!g){var F=s.FullPaths[0];c.slice(0,F.length)==F?F=c:(F.slice(-1)!="/"&&(F+="/"),F=(F+c).replace("//","/")),g={name:a(c),type:2},s.FileIndex.push(g),s.FullPaths.push(F),p||Vr.utils.cfb_gc(s)}return g.content=d,g.size=d?d.length:0,_&&(_.CLSID&&(g.clsid=_.CLSID),_.mt&&(g.mt=_.mt),_.ct&&(g.ct=_.ct)),g}function ha(s,c){C(s);var d=Vr.find(s,c);if(d){for(var _=0;_<s.FileIndex.length;++_)if(s.FileIndex[_]==d)return s.FileIndex.splice(_,1),s.FullPaths.splice(_,1),!0}return!1}function zr(s,c,d){C(s);var _=Vr.find(s,c);if(_){for(var p=0;p<s.FileIndex.length;++p)if(s.FileIndex[p]==_)return s.FileIndex[p].name=a(d),s.FullPaths[p]=d,!0}return!1}function vi(s){O(s,!0)}return i.find=z,i.read=ie,i.parse=l,i.write=ye,i.writeFile=Y,i.utils={cfb_new:ci,cfb_add:it,cfb_del:ha,cfb_mov:zr,cfb_gc:vi,ReadShift:Go,CheckField:Zo,prep_blob:ir,bconcat:Yr,use_zlib:Xe,_deflateRaw:Qi,_inflateRaw:ia,consts:G},i}();typeof If<"u"&&typeof Yn<"u"&&typeof DO_NOT_EXPORT_CFB>"u"&&(Yn.exports=Vr)});var jt=je(et=>{"use strict";var Kd=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function Yd(e,i){return Object.prototype.hasOwnProperty.call(e,i)}et.assign=function(e){for(var i=Array.prototype.slice.call(arguments,1);i.length;){var t=i.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(var r in t)Yd(t,r)&&(e[r]=t[r])}}return e};et.shrinkBuf=function(e,i){return e.length===i?e:e.subarray?e.subarray(0,i):(e.length=i,e)};var Xd={arraySet:function(e,i,t,r,a){if(i.subarray&&e.subarray){e.set(i.subarray(t,t+r),a);return}for(var n=0;n<r;n++)e[a+n]=i[t+n]},flattenChunks:function(e){var i,t,r,a,n,f;for(r=0,i=0,t=e.length;i<t;i++)r+=e[i].length;for(f=new Uint8Array(r),a=0,i=0,t=e.length;i<t;i++)n=e[i],f.set(n,a),a+=n.length;return f}},Vd={arraySet:function(e,i,t,r,a){for(var n=0;n<r;n++)e[a+n]=i[t+n]},flattenChunks:function(e){return[].concat.apply([],e)}};et.setTyped=function(e){e?(et.Buf8=Uint8Array,et.Buf16=Uint16Array,et.Buf32=Int32Array,et.assign(et,Xd)):(et.Buf8=Array,et.Buf16=Array,et.Buf32=Array,et.assign(et,Vd))};et.setTyped(Kd)});var dl=je(Qr=>{"use strict";var qd=jt(),Jd=4,Wo=0,jo=1,Qd=2;function Jr(e){for(var i=e.length;--i>=0;)e[i]=0}var e_=0,qo=1,t_=2,r_=3,i_=258,af=29,Mi=256,Oi=Mi+1+af,qr=30,nf=19,Jo=2*Oi+1,Sr=15,qn=16,a_=7,ff=256,Qo=16,el=17,tl=18,tf=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Oa=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],n_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],rl=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],f_=512,$t=new Array((Oi+2)*2);Jr($t);var Ni=new Array(qr*2);Jr(Ni);var Li=new Array(f_);Jr(Li);var zi=new Array(i_-r_+1);Jr(zi);var hf=new Array(af);Jr(hf);var La=new Array(qr);Jr(La);function Jn(e,i,t,r,a){this.static_tree=e,this.extra_bits=i,this.extra_base=t,this.elems=r,this.max_length=a,this.has_stree=e&&e.length}var il,al,nl;function Qn(e,i){this.dyn_tree=e,this.max_code=0,this.stat_desc=i}function fl(e){return e<256?Li[e]:Li[256+(e>>>7)]}function Ui(e,i){e.pending_buf[e.pending++]=i&255,e.pending_buf[e.pending++]=i>>>8&255}function ft(e,i,t){e.bi_valid>qn-t?(e.bi_buf|=i<<e.bi_valid&65535,Ui(e,e.bi_buf),e.bi_buf=i>>qn-e.bi_valid,e.bi_valid+=t-qn):(e.bi_buf|=i<<e.bi_valid&65535,e.bi_valid+=t)}function Bt(e,i,t){ft(e,t[i*2],t[i*2+1])}function hl(e,i){var t=0;do t|=e&1,e>>>=1,t<<=1;while(--i>0);return t>>>1}function h_(e){e.bi_valid===16?(Ui(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)}function o_(e,i){var t=i.dyn_tree,r=i.max_code,a=i.stat_desc.static_tree,n=i.stat_desc.has_stree,f=i.stat_desc.extra_bits,h=i.stat_desc.extra_base,y=i.stat_desc.max_length,o,l,L,A,m,j,D=0;for(A=0;A<=Sr;A++)e.bl_count[A]=0;for(t[e.heap[e.heap_max]*2+1]=0,o=e.heap_max+1;o<Jo;o++)l=e.heap[o],A=t[t[l*2+1]*2+1]+1,A>y&&(A=y,D++),t[l*2+1]=A,!(l>r)&&(e.bl_count[A]++,m=0,l>=h&&(m=f[l-h]),j=t[l*2],e.opt_len+=j*(A+m),n&&(e.static_len+=j*(a[l*2+1]+m)));if(D!==0){do{for(A=y-1;e.bl_count[A]===0;)A--;e.bl_count[A]--,e.bl_count[A+1]+=2,e.bl_count[y]--,D-=2}while(D>0);for(A=y;A!==0;A--)for(l=e.bl_count[A];l!==0;)L=e.heap[--o],!(L>r)&&(t[L*2+1]!==A&&(e.opt_len+=(A-t[L*2+1])*t[L*2],t[L*2+1]=A),l--)}}function ol(e,i,t){var r=new Array(Sr+1),a=0,n,f;for(n=1;n<=Sr;n++)r[n]=a=a+t[n-1]<<1;for(f=0;f<=i;f++){var h=e[f*2+1];h!==0&&(e[f*2]=hl(r[h]++,h))}}function l_(){var e,i,t,r,a,n=new Array(Sr+1);for(t=0,r=0;r<af-1;r++)for(hf[r]=t,e=0;e<1<<tf[r];e++)zi[t++]=r;for(zi[t-1]=r,a=0,r=0;r<16;r++)for(La[r]=a,e=0;e<1<<Oa[r];e++)Li[a++]=r;for(a>>=7;r<qr;r++)for(La[r]=a<<7,e=0;e<1<<Oa[r]-7;e++)Li[256+a++]=r;for(i=0;i<=Sr;i++)n[i]=0;for(e=0;e<=143;)$t[e*2+1]=8,e++,n[8]++;for(;e<=255;)$t[e*2+1]=9,e++,n[9]++;for(;e<=279;)$t[e*2+1]=7,e++,n[7]++;for(;e<=287;)$t[e*2+1]=8,e++,n[8]++;for(ol($t,Oi+1,n),e=0;e<qr;e++)Ni[e*2+1]=5,Ni[e*2]=hl(e,5);il=new Jn($t,tf,Mi+1,Oi,Sr),al=new Jn(Ni,Oa,0,qr,Sr),nl=new Jn(new Array(0),n_,0,nf,a_)}function ll(e){var i;for(i=0;i<Oi;i++)e.dyn_ltree[i*2]=0;for(i=0;i<qr;i++)e.dyn_dtree[i*2]=0;for(i=0;i<nf;i++)e.bl_tree[i*2]=0;e.dyn_ltree[ff*2]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function sl(e){e.bi_valid>8?Ui(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function s_(e,i,t,r){sl(e),r&&(Ui(e,t),Ui(e,~t)),qd.arraySet(e.pending_buf,e.window,i,t,e.pending),e.pending+=t}function $o(e,i,t,r){var a=i*2,n=t*2;return e[a]<e[n]||e[a]===e[n]&&r[i]<=r[t]}function ef(e,i,t){for(var r=e.heap[t],a=t<<1;a<=e.heap_len&&(a<e.heap_len&&$o(i,e.heap[a+1],e.heap[a],e.depth)&&a++,!$o(i,r,e.heap[a],e.depth));)e.heap[t]=e.heap[a],t=a,a<<=1;e.heap[t]=r}function Ko(e,i,t){var r,a,n=0,f,h;if(e.last_lit!==0)do r=e.pending_buf[e.d_buf+n*2]<<8|e.pending_buf[e.d_buf+n*2+1],a=e.pending_buf[e.l_buf+n],n++,r===0?Bt(e,a,i):(f=zi[a],Bt(e,f+Mi+1,i),h=tf[f],h!==0&&(a-=hf[f],ft(e,a,h)),r--,f=fl(r),Bt(e,f,t),h=Oa[f],h!==0&&(r-=La[f],ft(e,r,h)));while(n<e.last_lit);Bt(e,ff,i)}function rf(e,i){var t=i.dyn_tree,r=i.stat_desc.static_tree,a=i.stat_desc.has_stree,n=i.stat_desc.elems,f,h,y=-1,o;for(e.heap_len=0,e.heap_max=Jo,f=0;f<n;f++)t[f*2]!==0?(e.heap[++e.heap_len]=y=f,e.depth[f]=0):t[f*2+1]=0;for(;e.heap_len<2;)o=e.heap[++e.heap_len]=y<2?++y:0,t[o*2]=1,e.depth[o]=0,e.opt_len--,a&&(e.static_len-=r[o*2+1]);for(i.max_code=y,f=e.heap_len>>1;f>=1;f--)ef(e,t,f);o=n;do f=e.heap[1],e.heap[1]=e.heap[e.heap_len--],ef(e,t,1),h=e.heap[1],e.heap[--e.heap_max]=f,e.heap[--e.heap_max]=h,t[o*2]=t[f*2]+t[h*2],e.depth[o]=(e.depth[f]>=e.depth[h]?e.depth[f]:e.depth[h])+1,t[f*2+1]=t[h*2+1]=o,e.heap[1]=o++,ef(e,t,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],o_(e,i),ol(t,y,e.bl_count)}function Yo(e,i,t){var r,a=-1,n,f=i[0*2+1],h=0,y=7,o=4;for(f===0&&(y=138,o=3),i[(t+1)*2+1]=65535,r=0;r<=t;r++)n=f,f=i[(r+1)*2+1],!(++h<y&&n===f)&&(h<o?e.bl_tree[n*2]+=h:n!==0?(n!==a&&e.bl_tree[n*2]++,e.bl_tree[Qo*2]++):h<=10?e.bl_tree[el*2]++:e.bl_tree[tl*2]++,h=0,a=n,f===0?(y=138,o=3):n===f?(y=6,o=3):(y=7,o=4))}function Xo(e,i,t){var r,a=-1,n,f=i[0*2+1],h=0,y=7,o=4;for(f===0&&(y=138,o=3),r=0;r<=t;r++)if(n=f,f=i[(r+1)*2+1],!(++h<y&&n===f)){if(h<o)do Bt(e,n,e.bl_tree);while(--h!==0);else n!==0?(n!==a&&(Bt(e,n,e.bl_tree),h--),Bt(e,Qo,e.bl_tree),ft(e,h-3,2)):h<=10?(Bt(e,el,e.bl_tree),ft(e,h-3,3)):(Bt(e,tl,e.bl_tree),ft(e,h-11,7));h=0,a=n,f===0?(y=138,o=3):n===f?(y=6,o=3):(y=7,o=4)}}function u_(e){var i;for(Yo(e,e.dyn_ltree,e.l_desc.max_code),Yo(e,e.dyn_dtree,e.d_desc.max_code),rf(e,e.bl_desc),i=nf-1;i>=3&&e.bl_tree[rl[i]*2+1]===0;i--);return e.opt_len+=3*(i+1)+5+5+4,i}function d_(e,i,t,r){var a;for(ft(e,i-257,5),ft(e,t-1,5),ft(e,r-4,4),a=0;a<r;a++)ft(e,e.bl_tree[rl[a]*2+1],3);Xo(e,e.dyn_ltree,i-1),Xo(e,e.dyn_dtree,t-1)}function __(e){var i=4093624447,t;for(t=0;t<=31;t++,i>>>=1)if(i&1&&e.dyn_ltree[t*2]!==0)return Wo;if(e.dyn_ltree[9*2]!==0||e.dyn_ltree[10*2]!==0||e.dyn_ltree[13*2]!==0)return jo;for(t=32;t<Mi;t++)if(e.dyn_ltree[t*2]!==0)return jo;return Wo}var Vo=!1;function c_(e){Vo||(l_(),Vo=!0),e.l_desc=new Qn(e.dyn_ltree,il),e.d_desc=new Qn(e.dyn_dtree,al),e.bl_desc=new Qn(e.bl_tree,nl),e.bi_buf=0,e.bi_valid=0,ll(e)}function ul(e,i,t,r){ft(e,(e_<<1)+(r?1:0),3),s_(e,i,t,!0)}function v_(e){ft(e,qo<<1,3),Bt(e,ff,$t),h_(e)}function w_(e,i,t,r){var a,n,f=0;e.level>0?(e.strm.data_type===Qd&&(e.strm.data_type=__(e)),rf(e,e.l_desc),rf(e,e.d_desc),f=u_(e),a=e.opt_len+3+7>>>3,n=e.static_len+3+7>>>3,n<=a&&(a=n)):a=n=t+5,t+4<=a&&i!==-1?ul(e,i,t,r):e.strategy===Jd||n===a?(ft(e,(qo<<1)+(r?1:0),3),Ko(e,$t,Ni)):(ft(e,(t_<<1)+(r?1:0),3),d_(e,e.l_desc.max_code+1,e.d_desc.max_code+1,f+1),Ko(e,e.dyn_ltree,e.dyn_dtree)),ll(e),r&&sl(e)}function p_(e,i,t){return e.pending_buf[e.d_buf+e.last_lit*2]=i>>>8&255,e.pending_buf[e.d_buf+e.last_lit*2+1]=i&255,e.pending_buf[e.l_buf+e.last_lit]=t&255,e.last_lit++,i===0?e.dyn_ltree[t*2]++:(e.matches++,i--,e.dyn_ltree[(zi[t]+Mi+1)*2]++,e.dyn_dtree[fl(i)*2]++),e.last_lit===e.lit_bufsize-1}Qr._tr_init=c_;Qr._tr_stored_block=ul;Qr._tr_flush_block=w_;Qr._tr_tally=p_;Qr._tr_align=v_});var of=je((Yc,_l)=>{"use strict";function g_(e,i,t,r){for(var a=e&65535|0,n=e>>>16&65535|0,f=0;t!==0;){f=t>2e3?2e3:t,t-=f;do a=a+i[r++]|0,n=n+a|0;while(--f);a%=65521,n%=65521}return a|n<<16|0}_l.exports=g_});var lf=je((Xc,cl)=>{"use strict";function x_(){for(var e,i=[],t=0;t<256;t++){e=t;for(var r=0;r<8;r++)e=e&1?3988292384^e>>>1:e>>>1;i[t]=e}return i}var y_=x_();function k_(e,i,t,r){var a=y_,n=r+t;e^=-1;for(var f=r;f<n;f++)e=e>>>8^a[(e^i[f])&255];return e^-1}cl.exports=k_});var za=je((Vc,vl)=>{"use strict";vl.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}});var Al=je(Ot=>{"use strict";var tt=jt(),vt=dl(),xl=of(),nr=lf(),E_=za(),Rr=0,m_=1,A_=3,sr=4,wl=5,Nt=0,pl=1,wt=-2,b_=-3,sf=-5,S_=-1,F_=1,Ua=2,T_=3,P_=4,R_=0,C_=2,Da=8,I_=9,B_=15,H_=8,N_=29,O_=256,df=O_+1+N_,L_=30,z_=19,U_=2*df+1,M_=15,Ee=3,or=258,At=or+Ee+1,G_=32,Wa=42,_f=69,Ma=73,Ga=91,Za=103,Fr=113,Zi=666,De=1,Di=2,Tr=3,ri=4,Z_=3;function lr(e,i){return e.msg=E_[i],i}function gl(e){return(e<<1)-(e>4?9:0)}function hr(e){for(var i=e.length;--i>=0;)e[i]=0}function fr(e){var i=e.state,t=i.pending;t>e.avail_out&&(t=e.avail_out),t!==0&&(tt.arraySet(e.output,i.pending_buf,i.pending_out,t,e.next_out),e.next_out+=t,i.pending_out+=t,e.total_out+=t,e.avail_out-=t,i.pending-=t,i.pending===0&&(i.pending_out=0))}function Ke(e,i){vt._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,i),e.block_start=e.strstart,fr(e.strm)}function Se(e,i){e.pending_buf[e.pending++]=i}function Gi(e,i){e.pending_buf[e.pending++]=i>>>8&255,e.pending_buf[e.pending++]=i&255}function D_(e,i,t,r){var a=e.avail_in;return a>r&&(a=r),a===0?0:(e.avail_in-=a,tt.arraySet(i,e.input,e.next_in,a,t),e.state.wrap===1?e.adler=xl(e.adler,i,a,t):e.state.wrap===2&&(e.adler=nr(e.adler,i,a,t)),e.next_in+=a,e.total_in+=a,a)}function yl(e,i){var t=e.max_chain_length,r=e.strstart,a,n,f=e.prev_length,h=e.nice_match,y=e.strstart>e.w_size-At?e.strstart-(e.w_size-At):0,o=e.window,l=e.w_mask,L=e.prev,A=e.strstart+or,m=o[r+f-1],j=o[r+f];e.prev_length>=e.good_match&&(t>>=2),h>e.lookahead&&(h=e.lookahead);do if(a=i,!(o[a+f]!==j||o[a+f-1]!==m||o[a]!==o[r]||o[++a]!==o[r+1])){r+=2,a++;do;while(o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&r<A);if(n=or-(A-r),r=A-or,n>f){if(e.match_start=i,f=n,n>=h)break;m=o[r+f-1],j=o[r+f]}}while((i=L[i&l])>y&&--t!==0);return f<=e.lookahead?f:e.lookahead}function Pr(e){var i=e.w_size,t,r,a,n,f;do{if(n=e.window_size-e.lookahead-e.strstart,e.strstart>=i+(i-At)){tt.arraySet(e.window,e.window,i,i,0),e.match_start-=i,e.strstart-=i,e.block_start-=i,r=e.hash_size,t=r;do a=e.head[--t],e.head[t]=a>=i?a-i:0;while(--r);r=i,t=r;do a=e.prev[--t],e.prev[t]=a>=i?a-i:0;while(--r);n+=i}if(e.strm.avail_in===0)break;if(r=D_(e.strm,e.window,e.strstart+e.lookahead,n),e.lookahead+=r,e.lookahead+e.insert>=Ee)for(f=e.strstart-e.insert,e.ins_h=e.window[f],e.ins_h=(e.ins_h<<e.hash_shift^e.window[f+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[f+Ee-1])&e.hash_mask,e.prev[f&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=f,f++,e.insert--,!(e.lookahead+e.insert<Ee)););}while(e.lookahead<At&&e.strm.avail_in!==0)}function W_(e,i){var t=65535;for(t>e.pending_buf_size-5&&(t=e.pending_buf_size-5);;){if(e.lookahead<=1){if(Pr(e),e.lookahead===0&&i===Rr)return De;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+t;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,Ke(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-At&&(Ke(e,!1),e.strm.avail_out===0))return De}return e.insert=0,i===sr?(Ke(e,!0),e.strm.avail_out===0?Tr:ri):(e.strstart>e.block_start&&(Ke(e,!1),e.strm.avail_out===0),De)}function uf(e,i){for(var t,r;;){if(e.lookahead<At){if(Pr(e),e.lookahead<At&&i===Rr)return De;if(e.lookahead===0)break}if(t=0,e.lookahead>=Ee&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ee-1])&e.hash_mask,t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),t!==0&&e.strstart-t<=e.w_size-At&&(e.match_length=yl(e,t)),e.match_length>=Ee)if(r=vt._tr_tally(e,e.strstart-e.match_start,e.match_length-Ee),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=Ee){e.match_length--;do e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ee-1])&e.hash_mask,t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=vt._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(Ke(e,!1),e.strm.avail_out===0))return De}return e.insert=e.strstart<Ee-1?e.strstart:Ee-1,i===sr?(Ke(e,!0),e.strm.avail_out===0?Tr:ri):e.last_lit&&(Ke(e,!1),e.strm.avail_out===0)?De:Di}function ei(e,i){for(var t,r,a;;){if(e.lookahead<At){if(Pr(e),e.lookahead<At&&i===Rr)return De;if(e.lookahead===0)break}if(t=0,e.lookahead>=Ee&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ee-1])&e.hash_mask,t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=Ee-1,t!==0&&e.prev_length<e.max_lazy_match&&e.strstart-t<=e.w_size-At&&(e.match_length=yl(e,t),e.match_length<=5&&(e.strategy===F_||e.match_length===Ee&&e.strstart-e.match_start>4096)&&(e.match_length=Ee-1)),e.prev_length>=Ee&&e.match_length<=e.prev_length){a=e.strstart+e.lookahead-Ee,r=vt._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-Ee),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=a&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ee-1])&e.hash_mask,t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(--e.prev_length!==0);if(e.match_available=0,e.match_length=Ee-1,e.strstart++,r&&(Ke(e,!1),e.strm.avail_out===0))return De}else if(e.match_available){if(r=vt._tr_tally(e,0,e.window[e.strstart-1]),r&&Ke(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return De}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=vt._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<Ee-1?e.strstart:Ee-1,i===sr?(Ke(e,!0),e.strm.avail_out===0?Tr:ri):e.last_lit&&(Ke(e,!1),e.strm.avail_out===0)?De:Di}function j_(e,i){for(var t,r,a,n,f=e.window;;){if(e.lookahead<=or){if(Pr(e),e.lookahead<=or&&i===Rr)return De;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=Ee&&e.strstart>0&&(a=e.strstart-1,r=f[a],r===f[++a]&&r===f[++a]&&r===f[++a])){n=e.strstart+or;do;while(r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&a<n);e.match_length=or-(n-a),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=Ee?(t=vt._tr_tally(e,1,e.match_length-Ee),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(t=vt._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),t&&(Ke(e,!1),e.strm.avail_out===0))return De}return e.insert=0,i===sr?(Ke(e,!0),e.strm.avail_out===0?Tr:ri):e.last_lit&&(Ke(e,!1),e.strm.avail_out===0)?De:Di}function $_(e,i){for(var t;;){if(e.lookahead===0&&(Pr(e),e.lookahead===0)){if(i===Rr)return De;break}if(e.match_length=0,t=vt._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,t&&(Ke(e,!1),e.strm.avail_out===0))return De}return e.insert=0,i===sr?(Ke(e,!0),e.strm.avail_out===0?Tr:ri):e.last_lit&&(Ke(e,!1),e.strm.avail_out===0)?De:Di}function Ht(e,i,t,r,a){this.good_length=e,this.max_lazy=i,this.nice_length=t,this.max_chain=r,this.func=a}var ti;ti=[new Ht(0,0,0,0,W_),new Ht(4,4,8,4,uf),new Ht(4,5,16,8,uf),new Ht(4,6,32,32,uf),new Ht(4,4,16,16,ei),new Ht(8,16,32,32,ei),new Ht(8,16,128,128,ei),new Ht(8,32,128,256,ei),new Ht(32,128,258,1024,ei),new Ht(32,258,258,4096,ei)];function K_(e){e.window_size=2*e.w_size,hr(e.head),e.max_lazy_match=ti[e.level].max_lazy,e.good_match=ti[e.level].good_length,e.nice_match=ti[e.level].nice_length,e.max_chain_length=ti[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=Ee-1,e.match_available=0,e.ins_h=0}function Y_(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Da,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new tt.Buf16(U_*2),this.dyn_dtree=new tt.Buf16((2*L_+1)*2),this.bl_tree=new tt.Buf16((2*z_+1)*2),hr(this.dyn_ltree),hr(this.dyn_dtree),hr(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new tt.Buf16(M_+1),this.heap=new tt.Buf16(2*df+1),hr(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new tt.Buf16(2*df+1),hr(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function kl(e){var i;return!e||!e.state?lr(e,wt):(e.total_in=e.total_out=0,e.data_type=C_,i=e.state,i.pending=0,i.pending_out=0,i.wrap<0&&(i.wrap=-i.wrap),i.status=i.wrap?Wa:Fr,e.adler=i.wrap===2?0:1,i.last_flush=Rr,vt._tr_init(i),Nt)}function El(e){var i=kl(e);return i===Nt&&K_(e.state),i}function X_(e,i){return!e||!e.state||e.state.wrap!==2?wt:(e.state.gzhead=i,Nt)}function ml(e,i,t,r,a,n){if(!e)return wt;var f=1;if(i===S_&&(i=6),r<0?(f=0,r=-r):r>15&&(f=2,r-=16),a<1||a>I_||t!==Da||r<8||r>15||i<0||i>9||n<0||n>P_)return lr(e,wt);r===8&&(r=9);var h=new Y_;return e.state=h,h.strm=e,h.wrap=f,h.gzhead=null,h.w_bits=r,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=a+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+Ee-1)/Ee),h.window=new tt.Buf8(h.w_size*2),h.head=new tt.Buf16(h.hash_size),h.prev=new tt.Buf16(h.w_size),h.lit_bufsize=1<<a+6,h.pending_buf_size=h.lit_bufsize*4,h.pending_buf=new tt.Buf8(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=i,h.strategy=n,h.method=t,El(e)}function V_(e,i){return ml(e,i,Da,B_,H_,R_)}function q_(e,i){var t,r,a,n;if(!e||!e.state||i>wl||i<0)return e?lr(e,wt):wt;if(r=e.state,!e.output||!e.input&&e.avail_in!==0||r.status===Zi&&i!==sr)return lr(e,e.avail_out===0?sf:wt);if(r.strm=e,t=r.last_flush,r.last_flush=i,r.status===Wa)if(r.wrap===2)e.adler=0,Se(r,31),Se(r,139),Se(r,8),r.gzhead?(Se(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Se(r,r.gzhead.time&255),Se(r,r.gzhead.time>>8&255),Se(r,r.gzhead.time>>16&255),Se(r,r.gzhead.time>>24&255),Se(r,r.level===9?2:r.strategy>=Ua||r.level<2?4:0),Se(r,r.gzhead.os&255),r.gzhead.extra&&r.gzhead.extra.length&&(Se(r,r.gzhead.extra.length&255),Se(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(e.adler=nr(e.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=_f):(Se(r,0),Se(r,0),Se(r,0),Se(r,0),Se(r,0),Se(r,r.level===9?2:r.strategy>=Ua||r.level<2?4:0),Se(r,Z_),r.status=Fr);else{var f=Da+(r.w_bits-8<<4)<<8,h=-1;r.strategy>=Ua||r.level<2?h=0:r.level<6?h=1:r.level===6?h=2:h=3,f|=h<<6,r.strstart!==0&&(f|=G_),f+=31-f%31,r.status=Fr,Gi(r,f),r.strstart!==0&&(Gi(r,e.adler>>>16),Gi(r,e.adler&65535)),e.adler=1}if(r.status===_f)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(r.gzhead.extra.length&65535)&&!(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(e.adler=nr(e.adler,r.pending_buf,r.pending-a,a)),fr(e),a=r.pending,r.pending===r.pending_buf_size));)Se(r,r.gzhead.extra[r.gzindex]&255),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(e.adler=nr(e.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=Ma)}else r.status=Ma;if(r.status===Ma)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(e.adler=nr(e.adler,r.pending_buf,r.pending-a,a)),fr(e),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}r.gzindex<r.gzhead.name.length?n=r.gzhead.name.charCodeAt(r.gzindex++)&255:n=0,Se(r,n)}while(n!==0);r.gzhead.hcrc&&r.pending>a&&(e.adler=nr(e.adler,r.pending_buf,r.pending-a,a)),n===0&&(r.gzindex=0,r.status=Ga)}else r.status=Ga;if(r.status===Ga)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(e.adler=nr(e.adler,r.pending_buf,r.pending-a,a)),fr(e),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}r.gzindex<r.gzhead.comment.length?n=r.gzhead.comment.charCodeAt(r.gzindex++)&255:n=0,Se(r,n)}while(n!==0);r.gzhead.hcrc&&r.pending>a&&(e.adler=nr(e.adler,r.pending_buf,r.pending-a,a)),n===0&&(r.status=Za)}else r.status=Za;if(r.status===Za&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&fr(e),r.pending+2<=r.pending_buf_size&&(Se(r,e.adler&255),Se(r,e.adler>>8&255),e.adler=0,r.status=Fr)):r.status=Fr),r.pending!==0){if(fr(e),e.avail_out===0)return r.last_flush=-1,Nt}else if(e.avail_in===0&&gl(i)<=gl(t)&&i!==sr)return lr(e,sf);if(r.status===Zi&&e.avail_in!==0)return lr(e,sf);if(e.avail_in!==0||r.lookahead!==0||i!==Rr&&r.status!==Zi){var y=r.strategy===Ua?$_(r,i):r.strategy===T_?j_(r,i):ti[r.level].func(r,i);if((y===Tr||y===ri)&&(r.status=Zi),y===De||y===Tr)return e.avail_out===0&&(r.last_flush=-1),Nt;if(y===Di&&(i===m_?vt._tr_align(r):i!==wl&&(vt._tr_stored_block(r,0,0,!1),i===A_&&(hr(r.head),r.lookahead===0&&(r.strstart=0,r.block_start=0,r.insert=0))),fr(e),e.avail_out===0))return r.last_flush=-1,Nt}return i!==sr?Nt:r.wrap<=0?pl:(r.wrap===2?(Se(r,e.adler&255),Se(r,e.adler>>8&255),Se(r,e.adler>>16&255),Se(r,e.adler>>24&255),Se(r,e.total_in&255),Se(r,e.total_in>>8&255),Se(r,e.total_in>>16&255),Se(r,e.total_in>>24&255)):(Gi(r,e.adler>>>16),Gi(r,e.adler&65535)),fr(e),r.wrap>0&&(r.wrap=-r.wrap),r.pending!==0?Nt:pl)}function J_(e){var i;return!e||!e.state?wt:(i=e.state.status,i!==Wa&&i!==_f&&i!==Ma&&i!==Ga&&i!==Za&&i!==Fr&&i!==Zi?lr(e,wt):(e.state=null,i===Fr?lr(e,b_):Nt))}function Q_(e,i){var t=i.length,r,a,n,f,h,y,o,l;if(!e||!e.state||(r=e.state,f=r.wrap,f===2||f===1&&r.status!==Wa||r.lookahead))return wt;for(f===1&&(e.adler=xl(e.adler,i,t,0)),r.wrap=0,t>=r.w_size&&(f===0&&(hr(r.head),r.strstart=0,r.block_start=0,r.insert=0),l=new tt.Buf8(r.w_size),tt.arraySet(l,i,t-r.w_size,r.w_size,0),i=l,t=r.w_size),h=e.avail_in,y=e.next_in,o=e.input,e.avail_in=t,e.next_in=0,e.input=i,Pr(r);r.lookahead>=Ee;){a=r.strstart,n=r.lookahead-(Ee-1);do r.ins_h=(r.ins_h<<r.hash_shift^r.window[a+Ee-1])&r.hash_mask,r.prev[a&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=a,a++;while(--n);r.strstart=a,r.lookahead=Ee-1,Pr(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=Ee-1,r.match_available=0,e.next_in=y,e.input=o,e.avail_in=h,r.wrap=f,Nt}Ot.deflateInit=V_;Ot.deflateInit2=ml;Ot.deflateReset=El;Ot.deflateResetKeep=kl;Ot.deflateSetHeader=X_;Ot.deflate=q_;Ot.deflateEnd=J_;Ot.deflateSetDictionary=Q_;Ot.deflateInfo="pako deflate (from Nodeca project)"});var cf=je(ii=>{"use strict";var ja=jt(),bl=!0,Sl=!0;try{String.fromCharCode.apply(null,[0])}catch{bl=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Sl=!1}var Wi=new ja.Buf8(256);for(Kt=0;Kt<256;Kt++)Wi[Kt]=Kt>=252?6:Kt>=248?5:Kt>=240?4:Kt>=224?3:Kt>=192?2:1;var Kt;Wi[254]=Wi[254]=1;ii.string2buf=function(e){var i,t,r,a,n,f=e.length,h=0;for(a=0;a<f;a++)t=e.charCodeAt(a),(t&64512)===55296&&a+1<f&&(r=e.charCodeAt(a+1),(r&64512)===56320&&(t=65536+(t-55296<<10)+(r-56320),a++)),h+=t<128?1:t<2048?2:t<65536?3:4;for(i=new ja.Buf8(h),n=0,a=0;n<h;a++)t=e.charCodeAt(a),(t&64512)===55296&&a+1<f&&(r=e.charCodeAt(a+1),(r&64512)===56320&&(t=65536+(t-55296<<10)+(r-56320),a++)),t<128?i[n++]=t:t<2048?(i[n++]=192|t>>>6,i[n++]=128|t&63):t<65536?(i[n++]=224|t>>>12,i[n++]=128|t>>>6&63,i[n++]=128|t&63):(i[n++]=240|t>>>18,i[n++]=128|t>>>12&63,i[n++]=128|t>>>6&63,i[n++]=128|t&63);return i};function Fl(e,i){if(i<65534&&(e.subarray&&Sl||!e.subarray&&bl))return String.fromCharCode.apply(null,ja.shrinkBuf(e,i));for(var t="",r=0;r<i;r++)t+=String.fromCharCode(e[r]);return t}ii.buf2binstring=function(e){return Fl(e,e.length)};ii.binstring2buf=function(e){for(var i=new ja.Buf8(e.length),t=0,r=i.length;t<r;t++)i[t]=e.charCodeAt(t);return i};ii.buf2string=function(e,i){var t,r,a,n,f=i||e.length,h=new Array(f*2);for(r=0,t=0;t<f;){if(a=e[t++],a<128){h[r++]=a;continue}if(n=Wi[a],n>4){h[r++]=65533,t+=n-1;continue}for(a&=n===2?31:n===3?15:7;n>1&&t<f;)a=a<<6|e[t++]&63,n--;if(n>1){h[r++]=65533;continue}a<65536?h[r++]=a:(a-=65536,h[r++]=55296|a>>10&1023,h[r++]=56320|a&1023)}return Fl(h,r)};ii.utf8border=function(e,i){var t;for(i=i||e.length,i>e.length&&(i=e.length),t=i-1;t>=0&&(e[t]&192)===128;)t--;return t<0||t===0?i:t+Wi[e[t]]>i?t:i}});var vf=je((Qc,Tl)=>{"use strict";function ec(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}Tl.exports=ec});var Il=je(Ki=>{"use strict";var ji=Al(),$i=jt(),pf=cf(),gf=za(),tc=vf(),Cl=Object.prototype.toString,rc=0,wf=4,ai=0,Pl=1,Rl=2,ic=-1,ac=0,nc=8;function Cr(e){if(!(this instanceof Cr))return new Cr(e);this.options=$i.assign({level:ic,method:nc,chunkSize:16384,windowBits:15,memLevel:8,strategy:ac,to:""},e||{});var i=this.options;i.raw&&i.windowBits>0?i.windowBits=-i.windowBits:i.gzip&&i.windowBits>0&&i.windowBits<16&&(i.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new tc,this.strm.avail_out=0;var t=ji.deflateInit2(this.strm,i.level,i.method,i.windowBits,i.memLevel,i.strategy);if(t!==ai)throw new Error(gf[t]);if(i.header&&ji.deflateSetHeader(this.strm,i.header),i.dictionary){var r;if(typeof i.dictionary=="string"?r=pf.string2buf(i.dictionary):Cl.call(i.dictionary)==="[object ArrayBuffer]"?r=new Uint8Array(i.dictionary):r=i.dictionary,t=ji.deflateSetDictionary(this.strm,r),t!==ai)throw new Error(gf[t]);this._dict_set=!0}}Cr.prototype.push=function(e,i){var t=this.strm,r=this.options.chunkSize,a,n;if(this.ended)return!1;n=i===~~i?i:i===!0?wf:rc,typeof e=="string"?t.input=pf.string2buf(e):Cl.call(e)==="[object ArrayBuffer]"?t.input=new Uint8Array(e):t.input=e,t.next_in=0,t.avail_in=t.input.length;do{if(t.avail_out===0&&(t.output=new $i.Buf8(r),t.next_out=0,t.avail_out=r),a=ji.deflate(t,n),a!==Pl&&a!==ai)return this.onEnd(a),this.ended=!0,!1;(t.avail_out===0||t.avail_in===0&&(n===wf||n===Rl))&&(this.options.to==="string"?this.onData(pf.buf2binstring($i.shrinkBuf(t.output,t.next_out))):this.onData($i.shrinkBuf(t.output,t.next_out)))}while((t.avail_in>0||t.avail_out===0)&&a!==Pl);return n===wf?(a=ji.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===ai):(n===Rl&&(this.onEnd(ai),t.avail_out=0),!0)};Cr.prototype.onData=function(e){this.chunks.push(e)};Cr.prototype.onEnd=function(e){e===ai&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=$i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function xf(e,i){var t=new Cr(i);if(t.push(e,!0),t.err)throw t.msg||gf[t.err];return t.result}function fc(e,i){return i=i||{},i.raw=!0,xf(e,i)}function hc(e,i){return i=i||{},i.gzip=!0,xf(e,i)}Ki.Deflate=Cr;Ki.deflate=xf;Ki.deflateRaw=fc;Ki.gzip=hc});var Hl=je((tv,Bl)=>{"use strict";var $a=30,oc=12;Bl.exports=function(i,t){var r,a,n,f,h,y,o,l,L,A,m,j,D,q,M,fe,ee,Q,B,ie,C,$,O,re,z;r=i.state,a=i.next_in,re=i.input,n=a+(i.avail_in-5),f=i.next_out,z=i.output,h=f-(t-i.avail_out),y=f+(i.avail_out-257),o=r.dmax,l=r.wsize,L=r.whave,A=r.wnext,m=r.window,j=r.hold,D=r.bits,q=r.lencode,M=r.distcode,fe=(1<<r.lenbits)-1,ee=(1<<r.distbits)-1;e:do{D<15&&(j+=re[a++]<<D,D+=8,j+=re[a++]<<D,D+=8),Q=q[j&fe];t:for(;;){if(B=Q>>>24,j>>>=B,D-=B,B=Q>>>16&255,B===0)z[f++]=Q&65535;else if(B&16){ie=Q&65535,B&=15,B&&(D<B&&(j+=re[a++]<<D,D+=8),ie+=j&(1<<B)-1,j>>>=B,D-=B),D<15&&(j+=re[a++]<<D,D+=8,j+=re[a++]<<D,D+=8),Q=M[j&ee];r:for(;;){if(B=Q>>>24,j>>>=B,D-=B,B=Q>>>16&255,B&16){if(C=Q&65535,B&=15,D<B&&(j+=re[a++]<<D,D+=8,D<B&&(j+=re[a++]<<D,D+=8)),C+=j&(1<<B)-1,C>o){i.msg="invalid distance too far back",r.mode=$a;break e}if(j>>>=B,D-=B,B=f-h,C>B){if(B=C-B,B>L&&r.sane){i.msg="invalid distance too far back",r.mode=$a;break e}if($=0,O=m,A===0){if($+=l-B,B<ie){ie-=B;do z[f++]=m[$++];while(--B);$=f-C,O=z}}else if(A<B){if($+=l+A-B,B-=A,B<ie){ie-=B;do z[f++]=m[$++];while(--B);if($=0,A<ie){B=A,ie-=B;do z[f++]=m[$++];while(--B);$=f-C,O=z}}}else if($+=A-B,B<ie){ie-=B;do z[f++]=m[$++];while(--B);$=f-C,O=z}for(;ie>2;)z[f++]=O[$++],z[f++]=O[$++],z[f++]=O[$++],ie-=3;ie&&(z[f++]=O[$++],ie>1&&(z[f++]=O[$++]))}else{$=f-C;do z[f++]=z[$++],z[f++]=z[$++],z[f++]=z[$++],ie-=3;while(ie>2);ie&&(z[f++]=z[$++],ie>1&&(z[f++]=z[$++]))}}else if(B&64){i.msg="invalid distance code",r.mode=$a;break e}else{Q=M[(Q&65535)+(j&(1<<B)-1)];continue r}break}}else if(B&64)if(B&32){r.mode=oc;break e}else{i.msg="invalid literal/length code",r.mode=$a;break e}else{Q=q[(Q&65535)+(j&(1<<B)-1)];continue t}break}}while(a<n&&f<y);ie=D>>3,a-=ie,D-=ie<<3,j&=(1<<D)-1,i.next_in=a,i.next_out=f,i.avail_in=a<n?5+(n-a):5-(a-n),i.avail_out=f<y?257+(y-f):257-(f-y),r.hold=j,r.bits=D}});var Gl=je((rv,Ml)=>{"use strict";var Nl=jt(),ni=15,Ol=852,Ll=592,zl=0,yf=1,Ul=2,lc=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],sc=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],uc=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],dc=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];Ml.exports=function(i,t,r,a,n,f,h,y){var o=y.bits,l=0,L=0,A=0,m=0,j=0,D=0,q=0,M=0,fe=0,ee=0,Q,B,ie,C,$,O=null,re=0,z,_e=new Nl.Buf16(ni+1),xe=new Nl.Buf16(ni+1),Ye=null,rt=0,U,G,Y;for(l=0;l<=ni;l++)_e[l]=0;for(L=0;L<a;L++)_e[t[r+L]]++;for(j=o,m=ni;m>=1&&_e[m]===0;m--);if(j>m&&(j=m),m===0)return n[f++]=1<<24|64<<16|0,n[f++]=1<<24|64<<16|0,y.bits=1,0;for(A=1;A<m&&_e[A]===0;A++);for(j<A&&(j=A),M=1,l=1;l<=ni;l++)if(M<<=1,M-=_e[l],M<0)return-1;if(M>0&&(i===zl||m!==1))return-1;for(xe[1]=0,l=1;l<ni;l++)xe[l+1]=xe[l]+_e[l];for(L=0;L<a;L++)t[r+L]!==0&&(h[xe[t[r+L]]++]=L);if(i===zl?(O=Ye=h,z=19):i===yf?(O=lc,re-=257,Ye=sc,rt-=257,z=256):(O=uc,Ye=dc,z=-1),ee=0,L=0,l=A,$=f,D=j,q=0,ie=-1,fe=1<<j,C=fe-1,i===yf&&fe>Ol||i===Ul&&fe>Ll)return 1;for(;;){U=l-q,h[L]<z?(G=0,Y=h[L]):h[L]>z?(G=Ye[rt+h[L]],Y=O[re+h[L]]):(G=96,Y=0),Q=1<<l-q,B=1<<D,A=B;do B-=Q,n[$+(ee>>q)+B]=U<<24|G<<16|Y|0;while(B!==0);for(Q=1<<l-1;ee&Q;)Q>>=1;if(Q!==0?(ee&=Q-1,ee+=Q):ee=0,L++,--_e[l]===0){if(l===m)break;l=t[r+h[L]]}if(l>j&&(ee&C)!==ie){for(q===0&&(q=j),$+=A,D=l-q,M=1<<D;D+q<m&&(M-=_e[D+q],!(M<=0));)D++,M<<=1;if(fe+=1<<D,i===yf&&fe>Ol||i===Ul&&fe>Ll)return 1;ie=ee&C,n[ie]=j<<24|D<<16|$-f|0}}return ee!==0&&(n[$+ee]=l-q<<24|64<<16|0),y.bits=j,0}});var Es=je(bt=>{"use strict";var lt=jt(),Sf=of(),Lt=lf(),_c=Hl(),Yi=Gl(),cc=0,_s=1,cs=2,Zl=4,vc=5,Ka=6,Ir=0,wc=1,pc=2,pt=-2,vs=-3,Ff=-4,gc=-5,Dl=8,ws=1,Wl=2,jl=3,$l=4,Kl=5,Yl=6,Xl=7,Vl=8,ql=9,Jl=10,Va=11,Yt=12,kf=13,Ql=14,Ef=15,es=16,ts=17,rs=18,is=19,Ya=20,Xa=21,as=22,ns=23,fs=24,hs=25,os=26,mf=27,ls=28,ss=29,Ie=30,Tf=31,xc=32,yc=852,kc=592,Ec=15,mc=Ec;function us(e){return(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24)}function Ac(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new lt.Buf16(320),this.work=new lt.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function ps(e){var i;return!e||!e.state?pt:(i=e.state,e.total_in=e.total_out=i.total=0,e.msg="",i.wrap&&(e.adler=i.wrap&1),i.mode=ws,i.last=0,i.havedict=0,i.dmax=32768,i.head=null,i.hold=0,i.bits=0,i.lencode=i.lendyn=new lt.Buf32(yc),i.distcode=i.distdyn=new lt.Buf32(kc),i.sane=1,i.back=-1,Ir)}function gs(e){var i;return!e||!e.state?pt:(i=e.state,i.wsize=0,i.whave=0,i.wnext=0,ps(e))}function xs(e,i){var t,r;return!e||!e.state||(r=e.state,i<0?(t=0,i=-i):(t=(i>>4)+1,i<48&&(i&=15)),i&&(i<8||i>15))?pt:(r.window!==null&&r.wbits!==i&&(r.window=null),r.wrap=t,r.wbits=i,gs(e))}function ys(e,i){var t,r;return e?(r=new Ac,e.state=r,r.window=null,t=xs(e,i),t!==Ir&&(e.state=null),t):pt}function bc(e){return ys(e,mc)}var ds=!0,Af,bf;function Sc(e){if(ds){var i;for(Af=new lt.Buf32(512),bf=new lt.Buf32(32),i=0;i<144;)e.lens[i++]=8;for(;i<256;)e.lens[i++]=9;for(;i<280;)e.lens[i++]=7;for(;i<288;)e.lens[i++]=8;for(Yi(_s,e.lens,0,288,Af,0,e.work,{bits:9}),i=0;i<32;)e.lens[i++]=5;Yi(cs,e.lens,0,32,bf,0,e.work,{bits:5}),ds=!1}e.lencode=Af,e.lenbits=9,e.distcode=bf,e.distbits=5}function ks(e,i,t,r){var a,n=e.state;return n.window===null&&(n.wsize=1<<n.wbits,n.wnext=0,n.whave=0,n.window=new lt.Buf8(n.wsize)),r>=n.wsize?(lt.arraySet(n.window,i,t-n.wsize,n.wsize,0),n.wnext=0,n.whave=n.wsize):(a=n.wsize-n.wnext,a>r&&(a=r),lt.arraySet(n.window,i,t-r,a,n.wnext),r-=a,r?(lt.arraySet(n.window,i,t-r,r,0),n.wnext=r,n.whave=n.wsize):(n.wnext+=a,n.wnext===n.wsize&&(n.wnext=0),n.whave<n.wsize&&(n.whave+=a))),0}function Fc(e,i){var t,r,a,n,f,h,y,o,l,L,A,m,j,D,q=0,M,fe,ee,Q,B,ie,C,$,O=new lt.Buf8(4),re,z,_e=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return pt;t=e.state,t.mode===Yt&&(t.mode=kf),f=e.next_out,a=e.output,y=e.avail_out,n=e.next_in,r=e.input,h=e.avail_in,o=t.hold,l=t.bits,L=h,A=y,$=Ir;e:for(;;)switch(t.mode){case ws:if(t.wrap===0){t.mode=kf;break}for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(t.wrap&2&&o===35615){t.check=0,O[0]=o&255,O[1]=o>>>8&255,t.check=Lt(t.check,O,2,0),o=0,l=0,t.mode=Wl;break}if(t.flags=0,t.head&&(t.head.done=!1),!(t.wrap&1)||(((o&255)<<8)+(o>>8))%31){e.msg="incorrect header check",t.mode=Ie;break}if((o&15)!==Dl){e.msg="unknown compression method",t.mode=Ie;break}if(o>>>=4,l-=4,C=(o&15)+8,t.wbits===0)t.wbits=C;else if(C>t.wbits){e.msg="invalid window size",t.mode=Ie;break}t.dmax=1<<C,e.adler=t.check=1,t.mode=o&512?Jl:Yt,o=0,l=0;break;case Wl:for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(t.flags=o,(t.flags&255)!==Dl){e.msg="unknown compression method",t.mode=Ie;break}if(t.flags&57344){e.msg="unknown header flags set",t.mode=Ie;break}t.head&&(t.head.text=o>>8&1),t.flags&512&&(O[0]=o&255,O[1]=o>>>8&255,t.check=Lt(t.check,O,2,0)),o=0,l=0,t.mode=jl;case jl:for(;l<32;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.head&&(t.head.time=o),t.flags&512&&(O[0]=o&255,O[1]=o>>>8&255,O[2]=o>>>16&255,O[3]=o>>>24&255,t.check=Lt(t.check,O,4,0)),o=0,l=0,t.mode=$l;case $l:for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.head&&(t.head.xflags=o&255,t.head.os=o>>8),t.flags&512&&(O[0]=o&255,O[1]=o>>>8&255,t.check=Lt(t.check,O,2,0)),o=0,l=0,t.mode=Kl;case Kl:if(t.flags&1024){for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.length=o,t.head&&(t.head.extra_len=o),t.flags&512&&(O[0]=o&255,O[1]=o>>>8&255,t.check=Lt(t.check,O,2,0)),o=0,l=0}else t.head&&(t.head.extra=null);t.mode=Yl;case Yl:if(t.flags&1024&&(m=t.length,m>h&&(m=h),m&&(t.head&&(C=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Array(t.head.extra_len)),lt.arraySet(t.head.extra,r,n,m,C)),t.flags&512&&(t.check=Lt(t.check,r,m,n)),h-=m,n+=m,t.length-=m),t.length))break e;t.length=0,t.mode=Xl;case Xl:if(t.flags&2048){if(h===0)break e;m=0;do C=r[n+m++],t.head&&C&&t.length<65536&&(t.head.name+=String.fromCharCode(C));while(C&&m<h);if(t.flags&512&&(t.check=Lt(t.check,r,m,n)),h-=m,n+=m,C)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Vl;case Vl:if(t.flags&4096){if(h===0)break e;m=0;do C=r[n+m++],t.head&&C&&t.length<65536&&(t.head.comment+=String.fromCharCode(C));while(C&&m<h);if(t.flags&512&&(t.check=Lt(t.check,r,m,n)),h-=m,n+=m,C)break e}else t.head&&(t.head.comment=null);t.mode=ql;case ql:if(t.flags&512){for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(o!==(t.check&65535)){e.msg="header crc mismatch",t.mode=Ie;break}o=0,l=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),e.adler=t.check=0,t.mode=Yt;break;case Jl:for(;l<32;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}e.adler=t.check=us(o),o=0,l=0,t.mode=Va;case Va:if(t.havedict===0)return e.next_out=f,e.avail_out=y,e.next_in=n,e.avail_in=h,t.hold=o,t.bits=l,pc;e.adler=t.check=1,t.mode=Yt;case Yt:if(i===vc||i===Ka)break e;case kf:if(t.last){o>>>=l&7,l-=l&7,t.mode=mf;break}for(;l<3;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}switch(t.last=o&1,o>>>=1,l-=1,o&3){case 0:t.mode=Ql;break;case 1:if(Sc(t),t.mode=Ya,i===Ka){o>>>=2,l-=2;break e}break;case 2:t.mode=ts;break;case 3:e.msg="invalid block type",t.mode=Ie}o>>>=2,l-=2;break;case Ql:for(o>>>=l&7,l-=l&7;l<32;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if((o&65535)!==(o>>>16^65535)){e.msg="invalid stored block lengths",t.mode=Ie;break}if(t.length=o&65535,o=0,l=0,t.mode=Ef,i===Ka)break e;case Ef:t.mode=es;case es:if(m=t.length,m){if(m>h&&(m=h),m>y&&(m=y),m===0)break e;lt.arraySet(a,r,n,m,f),h-=m,n+=m,y-=m,f+=m,t.length-=m;break}t.mode=Yt;break;case ts:for(;l<14;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(t.nlen=(o&31)+257,o>>>=5,l-=5,t.ndist=(o&31)+1,o>>>=5,l-=5,t.ncode=(o&15)+4,o>>>=4,l-=4,t.nlen>286||t.ndist>30){e.msg="too many length or distance symbols",t.mode=Ie;break}t.have=0,t.mode=rs;case rs:for(;t.have<t.ncode;){for(;l<3;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.lens[_e[t.have++]]=o&7,o>>>=3,l-=3}for(;t.have<19;)t.lens[_e[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,re={bits:t.lenbits},$=Yi(cc,t.lens,0,19,t.lencode,0,t.work,re),t.lenbits=re.bits,$){e.msg="invalid code lengths set",t.mode=Ie;break}t.have=0,t.mode=is;case is:for(;t.have<t.nlen+t.ndist;){for(;q=t.lencode[o&(1<<t.lenbits)-1],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(ee<16)o>>>=M,l-=M,t.lens[t.have++]=ee;else{if(ee===16){for(z=M+2;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(o>>>=M,l-=M,t.have===0){e.msg="invalid bit length repeat",t.mode=Ie;break}C=t.lens[t.have-1],m=3+(o&3),o>>>=2,l-=2}else if(ee===17){for(z=M+3;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}o>>>=M,l-=M,C=0,m=3+(o&7),o>>>=3,l-=3}else{for(z=M+7;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}o>>>=M,l-=M,C=0,m=11+(o&127),o>>>=7,l-=7}if(t.have+m>t.nlen+t.ndist){e.msg="invalid bit length repeat",t.mode=Ie;break}for(;m--;)t.lens[t.have++]=C}}if(t.mode===Ie)break;if(t.lens[256]===0){e.msg="invalid code -- missing end-of-block",t.mode=Ie;break}if(t.lenbits=9,re={bits:t.lenbits},$=Yi(_s,t.lens,0,t.nlen,t.lencode,0,t.work,re),t.lenbits=re.bits,$){e.msg="invalid literal/lengths set",t.mode=Ie;break}if(t.distbits=6,t.distcode=t.distdyn,re={bits:t.distbits},$=Yi(cs,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,re),t.distbits=re.bits,$){e.msg="invalid distances set",t.mode=Ie;break}if(t.mode=Ya,i===Ka)break e;case Ya:t.mode=Xa;case Xa:if(h>=6&&y>=258){e.next_out=f,e.avail_out=y,e.next_in=n,e.avail_in=h,t.hold=o,t.bits=l,_c(e,A),f=e.next_out,a=e.output,y=e.avail_out,n=e.next_in,r=e.input,h=e.avail_in,o=t.hold,l=t.bits,t.mode===Yt&&(t.back=-1);break}for(t.back=0;q=t.lencode[o&(1<<t.lenbits)-1],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(fe&&!(fe&240)){for(Q=M,B=fe,ie=ee;q=t.lencode[ie+((o&(1<<Q+B)-1)>>Q)],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(Q+M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}o>>>=Q,l-=Q,t.back+=Q}if(o>>>=M,l-=M,t.back+=M,t.length=ee,fe===0){t.mode=os;break}if(fe&32){t.back=-1,t.mode=Yt;break}if(fe&64){e.msg="invalid literal/length code",t.mode=Ie;break}t.extra=fe&15,t.mode=as;case as:if(t.extra){for(z=t.extra;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.length+=o&(1<<t.extra)-1,o>>>=t.extra,l-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=ns;case ns:for(;q=t.distcode[o&(1<<t.distbits)-1],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(!(fe&240)){for(Q=M,B=fe,ie=ee;q=t.distcode[ie+((o&(1<<Q+B)-1)>>Q)],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(Q+M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}o>>>=Q,l-=Q,t.back+=Q}if(o>>>=M,l-=M,t.back+=M,fe&64){e.msg="invalid distance code",t.mode=Ie;break}t.offset=ee,t.extra=fe&15,t.mode=fs;case fs:if(t.extra){for(z=t.extra;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.offset+=o&(1<<t.extra)-1,o>>>=t.extra,l-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){e.msg="invalid distance too far back",t.mode=Ie;break}t.mode=hs;case hs:if(y===0)break e;if(m=A-y,t.offset>m){if(m=t.offset-m,m>t.whave&&t.sane){e.msg="invalid distance too far back",t.mode=Ie;break}m>t.wnext?(m-=t.wnext,j=t.wsize-m):j=t.wnext-m,m>t.length&&(m=t.length),D=t.window}else D=a,j=f-t.offset,m=t.length;m>y&&(m=y),y-=m,t.length-=m;do a[f++]=D[j++];while(--m);t.length===0&&(t.mode=Xa);break;case os:if(y===0)break e;a[f++]=t.length,y--,t.mode=Xa;break;case mf:if(t.wrap){for(;l<32;){if(h===0)break e;h--,o|=r[n++]<<l,l+=8}if(A-=y,e.total_out+=A,t.total+=A,A&&(e.adler=t.check=t.flags?Lt(t.check,a,A,f-A):Sf(t.check,a,A,f-A)),A=y,(t.flags?o:us(o))!==t.check){e.msg="incorrect data check",t.mode=Ie;break}o=0,l=0}t.mode=ls;case ls:if(t.wrap&&t.flags){for(;l<32;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(o!==(t.total&4294967295)){e.msg="incorrect length check",t.mode=Ie;break}o=0,l=0}t.mode=ss;case ss:$=wc;break e;case Ie:$=vs;break e;case Tf:return Ff;case xc:default:return pt}return e.next_out=f,e.avail_out=y,e.next_in=n,e.avail_in=h,t.hold=o,t.bits=l,(t.wsize||A!==e.avail_out&&t.mode<Ie&&(t.mode<mf||i!==Zl))&&ks(e,e.output,e.next_out,A-e.avail_out)?(t.mode=Tf,Ff):(L-=e.avail_in,A-=e.avail_out,e.total_in+=L,e.total_out+=A,t.total+=A,t.wrap&&A&&(e.adler=t.check=t.flags?Lt(t.check,a,A,e.next_out-A):Sf(t.check,a,A,e.next_out-A)),e.data_type=t.bits+(t.last?64:0)+(t.mode===Yt?128:0)+(t.mode===Ya||t.mode===Ef?256:0),(L===0&&A===0||i===Zl)&&$===Ir&&($=gc),$)}function Tc(e){if(!e||!e.state)return pt;var i=e.state;return i.window&&(i.window=null),e.state=null,Ir}function Pc(e,i){var t;return!e||!e.state||(t=e.state,!(t.wrap&2))?pt:(t.head=i,i.done=!1,Ir)}function Rc(e,i){var t=i.length,r,a,n;return!e||!e.state||(r=e.state,r.wrap!==0&&r.mode!==Va)?pt:r.mode===Va&&(a=1,a=Sf(a,i,t,0),a!==r.check)?vs:(n=ks(e,i,t,t),n?(r.mode=Tf,Ff):(r.havedict=1,Ir))}bt.inflateReset=gs;bt.inflateReset2=xs;bt.inflateResetKeep=ps;bt.inflateInit=bc;bt.inflateInit2=ys;bt.inflate=Fc;bt.inflateEnd=Tc;bt.inflateGetHeader=Pc;bt.inflateSetDictionary=Rc;bt.inflateInfo="pako inflate (from Nodeca project)"});var Pf=je((av,ms)=>{"use strict";ms.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}});var bs=je((nv,As)=>{"use strict";function Cc(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}As.exports=Cc});var Fs=je(Vi=>{"use strict";var fi=Es(),Xi=jt(),qa=cf(),ze=Pf(),Rf=za(),Ic=vf(),Bc=bs(),Ss=Object.prototype.toString;function Br(e){if(!(this instanceof Br))return new Br(e);this.options=Xi.assign({chunkSize:16384,windowBits:0,to:""},e||{});var i=this.options;i.raw&&i.windowBits>=0&&i.windowBits<16&&(i.windowBits=-i.windowBits,i.windowBits===0&&(i.windowBits=-15)),i.windowBits>=0&&i.windowBits<16&&!(e&&e.windowBits)&&(i.windowBits+=32),i.windowBits>15&&i.windowBits<48&&(i.windowBits&15||(i.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ic,this.strm.avail_out=0;var t=fi.inflateInit2(this.strm,i.windowBits);if(t!==ze.Z_OK)throw new Error(Rf[t]);if(this.header=new Bc,fi.inflateGetHeader(this.strm,this.header),i.dictionary&&(typeof i.dictionary=="string"?i.dictionary=qa.string2buf(i.dictionary):Ss.call(i.dictionary)==="[object ArrayBuffer]"&&(i.dictionary=new Uint8Array(i.dictionary)),i.raw&&(t=fi.inflateSetDictionary(this.strm,i.dictionary),t!==ze.Z_OK)))throw new Error(Rf[t])}Br.prototype.push=function(e,i){var t=this.strm,r=this.options.chunkSize,a=this.options.dictionary,n,f,h,y,o,l=!1;if(this.ended)return!1;f=i===~~i?i:i===!0?ze.Z_FINISH:ze.Z_NO_FLUSH,typeof e=="string"?t.input=qa.binstring2buf(e):Ss.call(e)==="[object ArrayBuffer]"?t.input=new Uint8Array(e):t.input=e,t.next_in=0,t.avail_in=t.input.length;do{if(t.avail_out===0&&(t.output=new Xi.Buf8(r),t.next_out=0,t.avail_out=r),n=fi.inflate(t,ze.Z_NO_FLUSH),n===ze.Z_NEED_DICT&&a&&(n=fi.inflateSetDictionary(this.strm,a)),n===ze.Z_BUF_ERROR&&l===!0&&(n=ze.Z_OK,l=!1),n!==ze.Z_STREAM_END&&n!==ze.Z_OK)return this.onEnd(n),this.ended=!0,!1;t.next_out&&(t.avail_out===0||n===ze.Z_STREAM_END||t.avail_in===0&&(f===ze.Z_FINISH||f===ze.Z_SYNC_FLUSH))&&(this.options.to==="string"?(h=qa.utf8border(t.output,t.next_out),y=t.next_out-h,o=qa.buf2string(t.output,h),t.next_out=y,t.avail_out=r-y,y&&Xi.arraySet(t.output,t.output,h,y,0),this.onData(o)):this.onData(Xi.shrinkBuf(t.output,t.next_out))),t.avail_in===0&&t.avail_out===0&&(l=!0)}while((t.avail_in>0||t.avail_out===0)&&n!==ze.Z_STREAM_END);return n===ze.Z_STREAM_END&&(f=ze.Z_FINISH),f===ze.Z_FINISH?(n=fi.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===ze.Z_OK):(f===ze.Z_SYNC_FLUSH&&(this.onEnd(ze.Z_OK),t.avail_out=0),!0)};Br.prototype.onData=function(e){this.chunks.push(e)};Br.prototype.onEnd=function(e){e===ze.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Xi.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function Cf(e,i){var t=new Br(i);if(t.push(e,!0),t.err)throw t.msg||Rf[t.err];return t.result}function Hc(e,i){return i=i||{},i.raw=!0,Cf(e,i)}Vi.Inflate=Br;Vi.inflate=Cf;Vi.inflateRaw=Hc;Vi.ungzip=Cf});var Rs=je((hv,Ps)=>{"use strict";var Nc=jt().assign,Oc=Il(),Lc=Fs(),zc=Pf(),Ts={};Nc(Ts,Oc,Lc,zc);Ps.exports=Ts});var Mc={};Bf(Mc,{Viewer:()=>Io,parse:()=>Kn,rawText:()=>Uc});un();function Fe(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function zf(e,i){for(var t=0;t<i.length;t++){var r=i[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nt(e,i,t){return i&&zf(e.prototype,i),t&&zf(e,t),e}function b(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function Uf(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Mf(e){for(var i=1;i<arguments.length;i++){var t=arguments[i]!=null?arguments[i]:{};i%2?Uf(Object(t),!0).forEach(function(r){b(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Uf(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Nh(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&bn(e,i)}function Fa(e){return Fa=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Fa(e)}function bn(e,i){return bn=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},bn(e,i)}function zs(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Dt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Us(e,i){return i&&(typeof i=="object"||typeof i=="function")?i:Dt(e)}function Oh(e){var i=zs();return function(){var r=Fa(e),a;if(i){var n=Fa(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Us(this,a)}}function Ln(e,i){return Gs(e)||Ds(e,i)||Lh(e,i)||js()}function Ta(e){return Ms(e)||Zs(e)||Lh(e)||Ws()}function Ms(e){if(Array.isArray(e))return Sn(e)}function Gs(e){if(Array.isArray(e))return e}function Zs(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function Ds(e,i){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,a=!1,n=void 0;try{for(var f=e[Symbol.iterator](),h;!(r=(h=f.next()).done)&&(t.push(h.value),!(i&&t.length===i));r=!0);}catch(y){a=!0,n=y}finally{try{!r&&f.return!=null&&f.return()}finally{if(a)throw n}}return t}}function Lh(e,i){if(e){if(typeof e=="string")return Sn(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Sn(e,i)}}function Sn(e,i){(i==null||i>e.length)&&(i=e.length);for(var t=0,r=new Array(i);t<i;t++)r[t]=e[t];return r}function Ws(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function js(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zh(e,i,t){return t={path:i,exports:{},require:function(r,a){return Uh(r,a??t.path)}},e(t,t.exports),t.exports}function Uh(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Ci=zh(function(e){var i=function(){var G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{encode:function(Y){for(var pe="",ye=0,Ue=0,Xe=0,ae=0,Pe=0,W=0,Ae=0,ge=0;ge<Y.length;)ye=Y.charCodeAt(ge++),ae=ye>>2,Ue=Y.charCodeAt(ge++),Pe=(ye&3)<<4|Ue>>4,Xe=Y.charCodeAt(ge++),W=(Ue&15)<<2|Xe>>6,Ae=Xe&63,isNaN(Ue)?W=Ae=64:isNaN(Xe)&&(Ae=64),pe+=G.charAt(ae)+G.charAt(Pe)+G.charAt(W)+G.charAt(Ae);return pe},decode:function(pe){var ye="",Ue=0,Xe=0,ae=0,Pe=0,W=0,Ae=0,ge=0;pe=pe.replace(/[^\w\+\/\=]/g,"");for(var Re=0;Re<pe.length;)Pe=G.indexOf(pe.charAt(Re++)),W=G.indexOf(pe.charAt(Re++)),Ue=Pe<<2|W>>4,ye+=String.fromCharCode(Ue),Ae=G.indexOf(pe.charAt(Re++)),Xe=(W&15)<<4|Ae>>2,Ae!==64&&(ye+=String.fromCharCode(Xe)),ge=G.indexOf(pe.charAt(Re++)),ae=(Ae&3)<<6|ge,ge!==64&&(ye+=String.fromCharCode(ae));return ye}}}(),t=typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&process.versions.node,r=function(){};if(typeof Buffer<"u"){var a=!Buffer.from;if(!a)try{Buffer.from("foo","utf8")}catch{a=!0}r=a?function(U,G){return G?new Buffer(U,G):new Buffer(U)}:Buffer.from.bind(Buffer),Buffer.alloc||(Buffer.alloc=function(U){return new Buffer(U)}),Buffer.allocUnsafe||(Buffer.allocUnsafe=function(U){return new Buffer(U)})}function n(U){return t?Buffer.alloc(U):new Array(U)}function f(U){return t?Buffer.allocUnsafe(U):new Array(U)}var h=function(G){return t?r(G,"binary"):G.split("").map(function(Y){return Y.charCodeAt(0)&255})},y=/\u0000/g,o=/[\u0001-\u0006]/g,l=function(U){for(var G=[],Y=0;Y<U[0].length;++Y)G.push.apply(G,U[0][Y]);return G},L=l,A=function(U,G,Y){for(var pe=[],ye=G;ye<Y;ye+=2)pe.push(String.fromCharCode(ee(U,ye)));return pe.join("").replace(y,"")},m=A,j=function(U,G,Y){for(var pe=[],ye=G;ye<G+Y;++ye)pe.push(("0"+U[ye].toString(16)).slice(-2));return pe.join("")},D=j,q=function(U){if(Array.isArray(U[0]))return[].concat.apply([],U);var G=0,Y=0;for(Y=0;Y<U.length;++Y)G+=U[Y].length;var pe=new Uint8Array(G);for(Y=0,G=0;Y<U.length;G+=U[Y].length,++Y)pe.set(U[Y],G);return pe},M=q;t&&(A=function(U,G,Y){return Buffer.isBuffer(U)?U.toString("utf16le",G,Y).replace(y,""):m(U,G,Y)},j=function(U,G,Y){return Buffer.isBuffer(U)?U.toString("hex",G,G+Y):D(U,G,Y)},l=function(U){return U[0].length>0&&Buffer.isBuffer(U[0][0])?Buffer.concat(U[0]):L(U)},h=function(U){return r(U,"binary")},M=function(U){return Buffer.isBuffer(U[0])?Buffer.concat(U):q(U)});var fe=function(U,G){return U[G]},ee=function(U,G){return U[G+1]*256+U[G]},Q=function(U,G){var Y=U[G+1]*256+U[G];return Y<32768?Y:(65535-Y+1)*-1},B=function(U,G){return U[G+3]*(1<<24)+(U[G+2]<<16)+(U[G+1]<<8)+U[G]},ie=function(U,G){return(U[G+3]<<24)+(U[G+2]<<16)+(U[G+1]<<8)+U[G]};function C(U,G){var Y,pe,ye=0;switch(U){case 1:Y=fe(this,this.l);break;case 2:Y=(G!=="i"?ee:Q)(this,this.l);break;case 4:Y=ie(this,this.l);break;case 16:ye=2,pe=j(this,this.l,U)}return this.l+=U,ye===0?Y:pe}var $=function(U,G,Y){U[Y]=G&255,U[Y+1]=G>>>8&255,U[Y+2]=G>>>16&255,U[Y+3]=G>>>24&255},O=function(U,G,Y){U[Y]=G&255,U[Y+1]=G>>8&255,U[Y+2]=G>>16&255,U[Y+3]=G>>24&255};function re(U,G,Y){var pe=0,ye=0;switch(Y){case"hex":for(;ye<U;++ye)this[this.l++]=parseInt(G.slice(2*ye,2*ye+2),16)||0;return this;case"utf16le":var Ue=this.l+U;for(ye=0;ye<Math.min(G.length,U);++ye){var Xe=G.charCodeAt(ye);this[this.l++]=Xe&255,this[this.l++]=Xe>>8}for(;this.l<Ue;)this[this.l++]=0;return this}switch(U){case 1:pe=1,this[this.l]=G&255;break;case 2:pe=2,this[this.l]=G&255,G>>>=8,this[this.l+1]=G&255;break;case 4:pe=4,$(this,G,this.l);break;case-4:pe=4,O(this,G,this.l);break}return this.l+=pe,this}function z(U,G){var Y=j(this,this.l,U.length>>1);if(Y!==U)throw new Error(G+"Expected "+U+" saw "+Y);this.l+=U.length>>1}function _e(U,G){U.l=G,U.read_shift=C,U.chk=z,U.write_shift=re}function xe(U){var G=n(U);return _e(G,0),G}var Ye;(function(U){U(Ye={})})(function(U){U.version="1.2.0";function G(){for(var ae=0,Pe=new Array(256),W=0;W!=256;++W)ae=W,ae=ae&1?-306674912^ae>>>1:ae>>>1,ae=ae&1?-306674912^ae>>>1:ae>>>1,ae=ae&1?-306674912^ae>>>1:ae>>>1,ae=ae&1?-306674912^ae>>>1:ae>>>1,ae=ae&1?-306674912^ae>>>1:ae>>>1,ae=ae&1?-306674912^ae>>>1:ae>>>1,ae=ae&1?-306674912^ae>>>1:ae>>>1,ae=ae&1?-306674912^ae>>>1:ae>>>1,Pe[W]=ae;return typeof Int32Array<"u"?new Int32Array(Pe):Pe}var Y=G();function pe(ae,Pe){for(var W=Pe^-1,Ae=ae.length-1,ge=0;ge<Ae;)W=W>>>8^Y[(W^ae.charCodeAt(ge++))&255],W=W>>>8^Y[(W^ae.charCodeAt(ge++))&255];return ge===Ae&&(W=W>>>8^Y[(W^ae.charCodeAt(ge))&255]),W^-1}function ye(ae,Pe){if(ae.length>1e4)return Ue(ae,Pe);for(var W=Pe^-1,Ae=ae.length-3,ge=0;ge<Ae;)W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255];for(;ge<Ae+3;)W=W>>>8^Y[(W^ae[ge++])&255];return W^-1}function Ue(ae,Pe){for(var W=Pe^-1,Ae=ae.length-7,ge=0;ge<Ae;)W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255],W=W>>>8^Y[(W^ae[ge++])&255];for(;ge<Ae+7;)W=W>>>8^Y[(W^ae[ge++])&255];return W^-1}function Xe(ae,Pe){for(var W=Pe^-1,Ae=0,ge=ae.length,Re,He;Ae<ge;)Re=ae.charCodeAt(Ae++),Re<128?W=W>>>8^Y[(W^Re)&255]:Re<2048?(W=W>>>8^Y[(W^(192|Re>>6&31))&255],W=W>>>8^Y[(W^(128|Re&63))&255]):Re>=55296&&Re<57344?(Re=(Re&1023)+64,He=ae.charCodeAt(Ae++)&1023,W=W>>>8^Y[(W^(240|Re>>8&7))&255],W=W>>>8^Y[(W^(128|Re>>2&63))&255],W=W>>>8^Y[(W^(128|He>>6&15|(Re&3)<<4))&255],W=W>>>8^Y[(W^(128|He&63))&255]):(W=W>>>8^Y[(W^(224|Re>>12&15))&255],W=W>>>8^Y[(W^(128|Re>>6&63))&255],W=W>>>8^Y[(W^(128|Re&63))&255]);return W^-1}U.table=Y,U.bstr=pe,U.buf=ye,U.str=Xe});var rt=function(){var G={};G.version="1.2.0";function Y(u,k){for(var v=u.split("/"),w=k.split("/"),E=0,x=0,R=Math.min(v.length,w.length);E<R;++E){if(x=v[E].length-w[E].length)return x;if(v[E]!=w[E])return v[E]<w[E]?-1:1}return v.length-w.length}function pe(u){if(u.charAt(u.length-1)=="/")return u.slice(0,-1).indexOf("/")===-1?u:pe(u.slice(0,-1));var k=u.lastIndexOf("/");return k===-1?u:u.slice(0,k+1)}function ye(u){if(u.charAt(u.length-1)=="/")return ye(u.slice(0,-1));var k=u.lastIndexOf("/");return k===-1?u:u.slice(k+1)}function Ue(u,k){typeof k=="string"&&(k=new Date(k));var v=k.getHours();v=v<<6|k.getMinutes(),v=v<<5|k.getSeconds()>>>1,u.write_shift(2,v);var w=k.getFullYear()-1980;w=w<<4|k.getMonth()+1,w=w<<5|k.getDate(),u.write_shift(2,w)}function Xe(u){var k=u.read_shift(2)&65535,v=u.read_shift(2)&65535,w=new Date,E=v&31;v>>>=5;var x=v&15;v>>>=4,w.setMilliseconds(0),w.setFullYear(v+1980),w.setMonth(x-1),w.setDate(E);var R=k&31;k>>>=5;var Z=k&63;return k>>>=6,w.setHours(k),w.setMinutes(Z),w.setSeconds(R<<1),w}function ae(u){_e(u,0);for(var k={},v=0;u.l<=u.length-4;){var w=u.read_shift(2),E=u.read_shift(2),x=u.l+E,R={};switch(w){case 21589:v=u.read_shift(1),v&1&&(R.mtime=u.read_shift(4)),E>5&&(v&2&&(R.atime=u.read_shift(4)),v&4&&(R.ctime=u.read_shift(4))),R.mtime&&(R.mt=new Date(R.mtime*1e3));break}u.l=x,k[w]=R}return k}var Pe;function W(){return Pe||(Pe=sn)}function Ae(u,k){if(u[0]==80&&u[1]==75)return X(u,k);if((u[0]|32)==109&&(u[1]|32)==105)return Qe(u,k);if(u.length<512)throw new Error("CFB file size "+u.length+" < 512");var v=3,w=512,E=0,x=0,R=0,Z=0,I=0,K=[],N=u.slice(0,512);_e(N,0);var ne=ge(N);switch(v=ne[0],v){case 3:w=512;break;case 4:w=4096;break;case 0:if(ne[1]==0)return X(u,k);default:throw new Error("Major Version: Expected 3 or 4 saw "+v)}w!==512&&(N=u.slice(0,w),_e(N,28));var le=u.slice(0,w);Re(N,v);var de=N.read_shift(4,"i");if(v===3&&de!==0)throw new Error("# Directory Sectors: Expected 0 saw "+de);N.l+=4,R=N.read_shift(4,"i"),N.l+=4,N.chk("00100000","Mini Stream Cutoff Size: "),Z=N.read_shift(4,"i"),E=N.read_shift(4,"i"),I=N.read_shift(4,"i"),x=N.read_shift(4,"i");for(var he=-1,se=0;se<109&&(he=N.read_shift(4,"i"),!(he<0));++se)K[se]=he;var me=He(u,w);qi(I,x,me,w,K);var Le=hi(me,R,K,w);Le[R].name="!Directory",E>0&&Z!==Me&&(Le[Z].name="!MiniFAT"),Le[K[0]].name="!FAT",Le.fat_addrs=K,Le.ssz=w;var Be={},ht=[],pi=[],gi=[];tn(R,Le,me,ht,E,Be,pi,Z),gt(pi,gi,ht),ht.shift();var xi={FileIndex:pi,FullPaths:gi};return k&&k.raw&&(xi.raw={header:le,sectors:me}),xi}function ge(u){if(u[u.l]==80&&u[u.l+1]==75)return[0,0];u.chk(Or,"Header Signature: "),u.l+=16;var k=u.read_shift(2,"u");return[u.read_shift(2,"u"),k]}function Re(u,k){var v=9;switch(u.l+=2,v=u.read_shift(2)){case 9:if(k!=3)throw new Error("Sector Shift: Expected 9 saw "+v);break;case 12:if(k!=4)throw new Error("Sector Shift: Expected 12 saw "+v);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+v)}u.chk("0600","Mini Sector Shift: "),u.chk("000000000000","Reserved: ")}function He(u,k){for(var v=Math.ceil(u.length/k)-1,w=[],E=1;E<v;++E)w[E-1]=u.slice(E*k,(E+1)*k);return w[v-1]=u.slice(v*k),w}function gt(u,k,v){for(var w=0,E=0,x=0,R=0,Z=0,I=v.length,K=[],N=[];w<I;++w)K[w]=N[w]=w,k[w]=v[w];for(;Z<N.length;++Z)w=N[Z],E=u[w].L,x=u[w].R,R=u[w].C,K[w]===w&&(E!==-1&&K[E]!==E&&(K[w]=K[E]),x!==-1&&K[x]!==x&&(K[w]=K[x])),R!==-1&&(K[R]=w),E!==-1&&w!=K[w]&&(K[E]=K[w],N.lastIndexOf(E)<Z&&N.push(E)),x!==-1&&w!=K[w]&&(K[x]=K[w],N.lastIndexOf(x)<Z&&N.push(x));for(w=1;w<I;++w)K[w]===w&&(x!==-1&&K[x]!==x?K[w]=K[x]:E!==-1&&K[E]!==E&&(K[w]=K[E]));for(w=1;w<I;++w)if(u[w].type!==0){if(Z=w,Z!=K[Z])do Z=K[Z],k[w]=k[Z]+"/"+k[w];while(Z!==0&&K[Z]!==-1&&Z!=K[Z]);K[w]=-1}for(k[0]+="/",w=1;w<I;++w)u[w].type!==2&&(k[w]+="/")}function Hr(u,k,v){for(var w=u.start,E=u.size,x=[],R=w;v&&E>0&&R>=0;)x.push(k.slice(R*qe,R*qe+qe)),E-=qe,R=ie(v,R*4);return x.length===0?xe(0):M(x).slice(0,u.size)}function qi(u,k,v,w,E){var x=Me;if(u===Me){if(k!==0)throw new Error("DIFAT chain shorter than expected")}else if(u!==-1){var R=v[u],Z=(w>>>2)-1;if(!R)return;for(var I=0;I<Z&&(x=ie(R,I*4))!==Me;++I)E.push(x);qi(ie(R,w-4),k-1,v,w,E)}}function en(u,k,v,w,E){var x=[],R=[];E||(E=[]);var Z=w-1,I=0,K=0;for(I=k;I>=0;){E[I]=!0,x[x.length]=I,R.push(u[I]);var N=v[Math.floor(I*4/w)];if(K=I*4&Z,w<4+K)throw new Error("FAT boundary crossed: "+I+" 4 "+w);if(!u[N])break;I=ie(u[N],K)}return{nodes:x,data:l([R])}}function hi(u,k,v,w){var E=u.length,x=[],R=[],Z=[],I=[],K=w-1,N=0,ne=0,le=0,de=0;for(N=0;N<E;++N)if(Z=[],le=N+k,le>=E&&(le-=E),!R[le]){I=[];var he=[];for(ne=le;ne>=0;){he[ne]=!0,R[ne]=!0,Z[Z.length]=ne,I.push(u[ne]);var se=v[Math.floor(ne*4/w)];if(de=ne*4&K,w<4+de)throw new Error("FAT boundary crossed: "+ne+" 4 "+w);if(!u[se]||(ne=ie(u[se],de),he[ne]))break}x[le]={nodes:Z,data:l([I])}}return x}function tn(u,k,v,w,E,x,R,Z){for(var I=0,K=w.length?2:0,N=k[u].data,ne=0,le=0,de;ne<N.length;ne+=128){var he=N.slice(ne,ne+128);_e(he,64),le=he.read_shift(2),de=A(he,0,le-K),w.push(de);var se={name:de,type:he.read_shift(1),color:he.read_shift(1),L:he.read_shift(4,"i"),R:he.read_shift(4,"i"),C:he.read_shift(4,"i"),clsid:he.read_shift(16),state:he.read_shift(4,"i"),start:0,size:0},me=he.read_shift(2)+he.read_shift(2)+he.read_shift(2)+he.read_shift(2);me!==0&&(se.ct=oi(he,he.l-8));var Le=he.read_shift(2)+he.read_shift(2)+he.read_shift(2)+he.read_shift(2);Le!==0&&(se.mt=oi(he,he.l-8)),se.start=he.read_shift(4,"i"),se.size=he.read_shift(4,"i"),se.size<0&&se.start<0&&(se.size=se.type=0,se.start=Me,se.name=""),se.type===5?(I=se.start,E>0&&I!==Me&&(k[I].name="!StreamData")):se.size>=4096?(se.storage="fat",k[se.start]===void 0&&(k[se.start]=en(v,se.start,k.fat_addrs,k.ssz)),k[se.start].name=se.name,se.content=k[se.start].data.slice(0,se.size)):(se.storage="minifat",se.size<0?se.size=0:I!==Me&&se.start!==Me&&k[I]&&(se.content=Hr(se,k[I].data,(k[Z]||{}).data))),se.content&&_e(se.content,0),x[de]=se,R.push(se)}}function oi(u,k){return new Date((B(u,k+4)/1e7*Math.pow(2,32)+B(u,k)/1e7-11644473600)*1e3)}function Ji(u,k){return W(),Ae(Pe.readFileSync(u),k)}function Nr(u,k){switch(k&&k.type||"base64"){case"file":return Ji(u,k);case"base64":return Ae(h(i.decode(u)),k);case"binary":return Ae(h(u),k)}return Ae(u,k)}function St(u,k){var v=k||{},w=v.root||"Root Entry";if(u.FullPaths||(u.FullPaths=[]),u.FileIndex||(u.FileIndex=[]),u.FullPaths.length!==u.FileIndex.length)throw new Error("inconsistent CFB structure");u.FullPaths.length===0&&(u.FullPaths[0]=w+"/",u.FileIndex[0]={name:w,type:5}),v.CLSID&&(u.FileIndex[0].clsid=v.CLSID),rn(u)}function rn(u){var k="Sh33tJ5";if(!rt.find(u,"/"+k)){var v=xe(4);v[0]=55,v[1]=v[3]=50,v[2]=54,u.FileIndex.push({name:k,type:2,content:v,size:4,L:69,R:69,C:69}),u.FullPaths.push(u.FullPaths[0]+k),Ft(u)}}function Ft(u,k){St(u);for(var v=!1,w=!1,E=u.FullPaths.length-1;E>=0;--E){var x=u.FileIndex[E];switch(x.type){case 0:w?v=!0:(u.FileIndex.pop(),u.FullPaths.pop());break;case 1:case 2:case 5:w=!0,isNaN(x.R*x.L*x.C)&&(v=!0),x.R>-1&&x.L>-1&&x.R==x.L&&(v=!0);break;default:v=!0;break}}if(!(!v&&!k)){var R=new Date(1987,1,19),Z=0,I=[];for(E=0;E<u.FullPaths.length;++E)u.FileIndex[E].type!==0&&I.push([u.FullPaths[E],u.FileIndex[E]]);for(E=0;E<I.length;++E){var K=pe(I[E][0]);for(w=!1,Z=0;Z<I.length;++Z)I[Z][0]===K&&(w=!0);w||I.push([K,{name:ye(K).replace("/",""),type:1,clsid:xt,ct:R,mt:R,content:null}])}for(I.sort(function(le,de){return Y(le[0],de[0])}),u.FullPaths=[],u.FileIndex=[],E=0;E<I.length;++E)u.FullPaths[E]=I[E][0],u.FileIndex[E]=I[E][1];for(E=0;E<I.length;++E){var N=u.FileIndex[E],ne=u.FullPaths[E];if(N.name=ye(ne).replace("/",""),N.L=N.R=N.C=-(N.color=1),N.size=N.content?N.content.length:0,N.start=0,N.clsid=N.clsid||xt,E===0)N.C=I.length>1?1:-1,N.size=0,N.type=5;else if(ne.slice(-1)=="/"){for(Z=E+1;Z<I.length&&pe(u.FullPaths[Z])!=ne;++Z);for(N.C=Z>=I.length?-1:Z,Z=E+1;Z<I.length&&pe(u.FullPaths[Z])!=pe(ne);++Z);N.R=Z>=I.length?-1:Z,N.type=1}else pe(u.FullPaths[E+1]||"")==pe(ne)&&(N.R=E+1),N.type=2}}}function li(u,k){var v=k||{};if(v.fileType=="mad")return _r(u,v);switch(Ft(u),v.fileType){case"zip":return oe(u,v)}var w=function(de){for(var he=0,se=0,me=0;me<de.FileIndex.length;++me){var Le=de.FileIndex[me];if(Le.content){var Be=Le.content.length;Be>0&&(Be<4096?he+=Be+63>>6:se+=Be+511>>9)}}for(var ht=de.FullPaths.length+3>>2,pi=he+7>>3,gi=he+127>>7,xi=pi+se+ht+gi,vr=xi+127>>7,ln=vr<=109?0:Math.ceil((vr-109)/127);xi+vr+ln+127>>7>vr;)ln=++vr<=109?0:Math.ceil((vr-109)/127);var Ut=[1,ln,vr,gi,ht,se,he,0];return de.FileIndex[0].size=he<<6,Ut[7]=(de.FileIndex[0].start=Ut[0]+Ut[1]+Ut[2]+Ut[3]+Ut[4]+Ut[5])+(Ut[6]+7>>3),Ut}(u),E=xe(w[7]<<9),x=0,R=0;{for(x=0;x<8;++x)E.write_shift(1,ui[x]);for(x=0;x<8;++x)E.write_shift(2,0);for(E.write_shift(2,62),E.write_shift(2,3),E.write_shift(2,65534),E.write_shift(2,9),E.write_shift(2,6),x=0;x<3;++x)E.write_shift(2,0);for(E.write_shift(4,0),E.write_shift(4,w[2]),E.write_shift(4,w[0]+w[1]+w[2]+w[3]-1),E.write_shift(4,0),E.write_shift(4,4096),E.write_shift(4,w[3]?w[0]+w[1]+w[2]-1:Me),E.write_shift(4,w[3]),E.write_shift(-4,w[1]?w[0]-1:Me),E.write_shift(4,w[1]),x=0;x<109;++x)E.write_shift(-4,x<w[2]?w[1]+x:-1)}if(w[1])for(R=0;R<w[1];++R){for(;x<236+R*127;++x)E.write_shift(-4,x<w[2]?w[1]+x:-1);E.write_shift(-4,R===w[1]-1?Me:R+1)}var Z=function(de){for(R+=de;x<R-1;++x)E.write_shift(-4,x+1);de&&(++x,E.write_shift(-4,Me))};for(R=x=0,R+=w[1];x<R;++x)E.write_shift(-4,ur.DIFSECT);for(R+=w[2];x<R;++x)E.write_shift(-4,ur.FATSECT);Z(w[3]),Z(w[4]);for(var I=0,K=0,N=u.FileIndex[0];I<u.FileIndex.length;++I)N=u.FileIndex[I],N.content&&(K=N.content.length,!(K<4096)&&(N.start=R,Z(K+511>>9)));for(Z(w[6]+7>>3);E.l&511;)E.write_shift(-4,ur.ENDOFCHAIN);for(R=x=0,I=0;I<u.FileIndex.length;++I)N=u.FileIndex[I],N.content&&(K=N.content.length,!(!K||K>=4096)&&(N.start=R,Z(K+63>>6)));for(;E.l&511;)E.write_shift(-4,ur.ENDOFCHAIN);for(x=0;x<w[4]<<2;++x){var ne=u.FullPaths[x];if(!ne||ne.length===0){for(I=0;I<17;++I)E.write_shift(4,0);for(I=0;I<3;++I)E.write_shift(4,-1);for(I=0;I<12;++I)E.write_shift(4,0);continue}N=u.FileIndex[x],x===0&&(N.start=N.size?N.start-1:Me);var le=x===0&&v.root||N.name;if(K=2*(le.length+1),E.write_shift(64,le,"utf16le"),E.write_shift(2,K),E.write_shift(1,N.type),E.write_shift(1,N.color),E.write_shift(-4,N.L),E.write_shift(-4,N.R),E.write_shift(-4,N.C),N.clsid)E.write_shift(16,N.clsid,"hex");else for(I=0;I<4;++I)E.write_shift(4,0);E.write_shift(4,N.state||0),E.write_shift(4,0),E.write_shift(4,0),E.write_shift(4,0),E.write_shift(4,0),E.write_shift(4,N.start),E.write_shift(4,N.size),E.write_shift(4,0)}for(x=1;x<u.FileIndex.length;++x)if(N=u.FileIndex[x],N.size>=4096){for(E.l=N.start+1<<9,I=0;I<N.size;++I)E.write_shift(1,N.content[I]);for(;I&511;++I)E.write_shift(1,0)}for(x=1;x<u.FileIndex.length;++x)if(N=u.FileIndex[x],N.size>0&&N.size<4096){for(I=0;I<N.size;++I)E.write_shift(1,N.content[I]);for(;I&63;++I)E.write_shift(1,0)}for(;E.l<E.length;)E.write_shift(1,0);return E}function si(u,k){var v=u.FullPaths.map(function(I){return I.toUpperCase()}),w=v.map(function(I){var K=I.split("/");return K[K.length-(I.slice(-1)=="/"?2:1)]}),E=!1;k.charCodeAt(0)===47?(E=!0,k=v[0].slice(0,-1)+k):E=k.indexOf("/")!==-1;var x=k.toUpperCase(),R=E===!0?v.indexOf(x):w.indexOf(x);if(R!==-1)return u.FileIndex[R];var Z=!x.match(o);for(x=x.replace(y,""),Z&&(x=x.replace(o,"!")),R=0;R<v.length;++R)if((Z?v[R].replace(o,"!"):v[R]).replace(y,"")==x||(Z?w[R].replace(o,"!"):w[R]).replace(y,"")==x)return u.FileIndex[R];return null}var qe=64,Me=-2,Or="d0cf11e0a1b11ae1",ui=[208,207,17,224,161,177,26,225],xt="00000000000000000000000000000000",ur={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:Me,FREESECT:-1,HEADER_SIGNATURE:Or,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:xt,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function Qi(u,k,v){W();var w=li(u,v);Pe.writeFileSync(k,w)}function Xt(u){for(var k=new Array(u.length),v=0;v<u.length;++v)k[v]=String.fromCharCode(u[v]);return k.join("")}function ea(u,k){var v=li(u,k);switch(k&&k.type||"buffer"){case"file":return W(),Pe.writeFileSync(k.filename,v),v;case"binary":return typeof v=="string"?v:Xt(v);case"base64":return i.encode(typeof v=="string"?v:Xt(v));case"buffer":if(t)return Buffer.isBuffer(v)?v:r(v);case"array":return typeof v=="string"?h(v):v}return v}var Vt;function ta(u){try{var k=u.InflateRaw,v=new k;if(v._processChunk(new Uint8Array([3,0]),v._finishFlushFlag),v.bytesRead)Vt=u;else throw new Error("zlib does not expose bytesRead")}catch(w){console.error("cannot use native zlib: "+(w.message||w))}}function ra(u,k){if(!Vt)return T(u,k);var v=Vt.InflateRaw,w=new v,E=w._processChunk(u.slice(u.l),w._finishFlushFlag);return u.l+=w.bytesRead,E}function an(u){return Vt?Vt.deflateRawSync(u):ha(u)}var nn=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ia=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],di=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function aa(u){var k=(u<<1|u<<11)&139536|(u<<5|u<<15)&558144;return(k>>16|k>>8|k)&255}for(var Je=typeof Uint8Array<"u",dr=Je?new Uint8Array(256):[],zt=0;zt<256;++zt)dr[zt]=aa(zt);function fn(u,k){var v=dr[u&255];return k<=8?v>>>8-k:(v=v<<8|dr[u>>8&255],k<=16?v>>>16-k:(v=v<<8|dr[u>>16&255],v>>>24-k))}function hn(u,k){var v=k&7,w=k>>>3;return(u[w]|(v<=6?0:u[w+1]<<8))>>>v&3}function _i(u,k){var v=k&7,w=k>>>3;return(u[w]|(v<=5?0:u[w+1]<<8))>>>v&7}function on(u,k){var v=k&7,w=k>>>3;return(u[w]|(v<=4?0:u[w+1]<<8))>>>v&15}function na(u,k){var v=k&7,w=k>>>3;return(u[w]|(v<=3?0:u[w+1]<<8))>>>v&31}function fa(u,k){var v=k&7,w=k>>>3;return(u[w]|(v<=1?0:u[w+1]<<8))>>>v&127}function Lr(u,k,v){var w=k&7,E=k>>>3,x=(1<<v)-1,R=u[E]>>>w;return v<8-w||(R|=u[E+1]<<8-w,v<16-w)||(R|=u[E+2]<<16-w,v<24-w)||(R|=u[E+3]<<24-w),R&x}function ci(u,k){var v=u.length,w=2*v>k?2*v:k+5,E=0;if(v>=k)return u;if(t){var x=f(w);if(u.copy)u.copy(x);else for(;E<u.length;++E)x[E]=u[E];return x}else if(Je){var R=new Uint8Array(w);if(R.set)R.set(u);else for(;E<u.length;++E)R[E]=u[E];return R}return u.length=w,u}function it(u){for(var k=new Array(u),v=0;v<u;++v)k[v]=0;return k}var ha=function(){var u=function(){return function(v,w){for(var E=0;E<v.length;){var x=Math.min(65535,v.length-E),R=E+x==v.length;for(w.write_shift(1,+R),w.write_shift(2,x),w.write_shift(2,~x&65535);x-- >0;)w[w.l++]=v[E++]}return w.l}}();return function(k){var v=xe(50+Math.floor(k.length*1.1)),w=u(k,v);return v.slice(0,w)}}();function zr(u,k,v){var w=1,E=0,x=0,R=0,Z=0,I=u.length,K=Je?new Uint16Array(32):it(32);for(x=0;x<32;++x)K[x]=0;for(x=I;x<v;++x)u[x]=0;I=u.length;var N=Je?new Uint16Array(I):it(I);for(x=0;x<I;++x)K[E=u[x]]++,w<E&&(w=E),N[x]=0;for(K[0]=0,x=1;x<=w;++x)K[x+16]=Z=Z+K[x-1]<<1;for(x=0;x<I;++x)Z=u[x],Z!=0&&(N[x]=K[Z+16]++);var ne=0;for(x=0;x<I;++x)if(ne=u[x],ne!=0)for(Z=fn(N[x],w)>>w-ne,R=(1<<w+4-ne)-1;R>=0;--R)k[Z|R<<ne]=ne&15|x<<4;return w}var vi=Je?new Uint16Array(512):it(512),s=Je?new Uint16Array(32):it(32);if(!Je){for(var c=0;c<512;++c)vi[c]=0;for(c=0;c<32;++c)s[c]=0}(function(){for(var u=[],k=0;k<32;k++)u.push(5);zr(u,s,32);var v=[];for(k=0;k<=143;k++)v.push(8);for(;k<=255;k++)v.push(9);for(;k<=279;k++)v.push(7);for(;k<=287;k++)v.push(8);zr(v,vi,288)})();var d=Je?new Uint16Array(32768):it(32768),_=Je?new Uint16Array(32768):it(32768),p=Je?new Uint16Array(128):it(128),g=1,F=1;function H(u,k){var v=na(u,k)+257;k+=5;var w=na(u,k)+1;k+=5;var E=on(u,k)+4;k+=4;for(var x=0,R=Je?new Uint8Array(19):it(19),Z=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],I=1,K=Je?new Uint8Array(8):it(8),N=Je?new Uint8Array(8):it(8),ne=R.length,le=0;le<E;++le)R[nn[le]]=x=_i(u,k),I<x&&(I=x),K[x]++,k+=3;var de=0;for(K[0]=0,le=1;le<=I;++le)N[le]=de=de+K[le-1]<<1;for(le=0;le<ne;++le)(de=R[le])!=0&&(Z[le]=N[de]++);var he=0;for(le=0;le<ne;++le)if(he=R[le],he!=0){de=dr[Z[le]]>>8-he;for(var se=(1<<7-he)-1;se>=0;--se)p[de|se<<he]=he&7|le<<3}var me=[];for(I=1;me.length<v+w;)switch(de=p[fa(u,k)],k+=de&7,de>>>=3){case 16:for(x=3+hn(u,k),k+=2,de=me[me.length-1];x-- >0;)me.push(de);break;case 17:for(x=3+_i(u,k),k+=3;x-- >0;)me.push(0);break;case 18:for(x=11+fa(u,k),k+=7;x-- >0;)me.push(0);break;default:me.push(de),I<de&&(I=de);break}var Le=me.slice(0,v),Be=me.slice(v);for(le=v;le<286;++le)Le[le]=0;for(le=w;le<30;++le)Be[le]=0;return g=zr(Le,d,286),F=zr(Be,_,30),k}function S(u,k){if(u[0]==3&&!(u[1]&3))return[n(k),2];for(var v=0,w=0,E=f(k||1<<18),x=0,R=E.length>>>0,Z=0,I=0;!(w&1);){if(w=_i(u,v),v+=3,w>>>1)w>>>1==1?(Z=9,I=5):(v=H(u,v),Z=g,I=F);else{v&7&&(v+=8-(v&7));var K=u[v>>>3]|u[(v>>>3)+1]<<8;if(v+=32,!k&&R<x+K&&(E=ci(E,x+K),R=E.length),typeof u.copy=="function")u.copy(E,x,v>>>3,(v>>>3)+K),x+=K,v+=8*K;else for(;K-- >0;)E[x++]=u[v>>>3],v+=8;continue}for(!k&&R<x+32767&&(E=ci(E,x+32767),R=E.length);;){var N=Lr(u,v,Z),ne=w>>>1==1?vi[N]:d[N];if(v+=ne&15,ne>>>=4,!(ne>>>8&255))E[x++]=ne;else{if(ne==256)break;ne-=257;var le=ne<8?0:ne-4>>2;le>5&&(le=0);var de=x+ia[ne];le>0&&(de+=Lr(u,v,le),v+=le),N=Lr(u,v,I),ne=w>>>1==1?s[N]:_[N],v+=ne&15,ne>>>=4;var he=ne<4?0:ne-2>>1,se=di[ne];for(he>0&&(se+=Lr(u,v,he),v+=he),!k&&R<de&&(E=ci(E,de),R=E.length);x<de;)E[x]=E[x-se],++x}}}return[k?E:E.slice(0,x),v+7>>>3]}function T(u,k){var v=u.slice(u.l||0),w=S(v,k);return u.l+=w[1],w[0]}function P(u,k){if(u)typeof console<"u"&&console.error(k);else throw new Error(k)}function X(u,k){var v=u;_e(v,0);var w=[],E=[],x={FileIndex:w,FullPaths:E};St(x,{root:k.root});for(var R=v.length-4;(v[R]!=80||v[R+1]!=75||v[R+2]!=5||v[R+3]!=6)&&R>=0;)--R;v.l=R+4,v.l+=4;var Z=v.read_shift(2);v.l+=6;var I=v.read_shift(4);for(v.l=I,R=0;R<Z;++R){v.l+=20;var K=v.read_shift(4),N=v.read_shift(4),ne=v.read_shift(2),le=v.read_shift(2),de=v.read_shift(2);v.l+=8;var he=v.read_shift(4),se=ae(v.slice(v.l+ne,v.l+ne+le));v.l+=ne+le+de;var me=v.l;v.l=he+4,V(v,K,N,x,se),v.l=me}return x}function V(u,k,v,w,E){u.l+=2;var x=u.read_shift(2),R=u.read_shift(2),Z=Xe(u);if(x&8257)throw new Error("Unsupported ZIP encryption");for(var I=u.read_shift(4),K=u.read_shift(4),N=u.read_shift(4),ne=u.read_shift(2),le=u.read_shift(2),de="",he=0;he<ne;++he)de+=String.fromCharCode(u[u.l++]);if(le){var se=ae(u.slice(u.l,u.l+le));(se[21589]||{}).mt&&(Z=se[21589].mt),((E||{})[21589]||{}).mt&&(Z=E[21589].mt)}u.l+=le;var me=u.slice(u.l,u.l+K);switch(R){case 8:me=ra(u,N);break;case 0:break;default:throw new Error("Unsupported ZIP Compression method "+R)}var Le=!1;x&8&&(I=u.read_shift(4),I==134695760&&(I=u.read_shift(4),Le=!0),K=u.read_shift(4),N=u.read_shift(4)),K!=k&&P(Le,"Bad compressed size: "+k+" != "+K),N!=v&&P(Le,"Bad uncompressed size: "+v+" != "+N);var Be=Ye.buf(me,0);I>>0!=Be>>0&&P(Le,"Bad CRC32 checksum: "+I+" != "+Be),yt(w,de,me,{unsafe:!0,mt:Z})}function oe(u,k){var v=k||{},w=[],E=[],x=xe(1),R=v.compression?8:0,Z=0,I=0,K=0,N=0,ne=0,le=u.FullPaths[0],de=le,he=u.FileIndex[0],se=[],me=0;for(I=1;I<u.FullPaths.length;++I)if(de=u.FullPaths[I].slice(le.length),he=u.FileIndex[I],!(!he.size||!he.content||de=="Sh33tJ5")){var Le=N,Be=xe(de.length);for(K=0;K<de.length;++K)Be.write_shift(1,de.charCodeAt(K)&127);Be=Be.slice(0,Be.l),se[ne]=Ye.buf(he.content,0);var ht=he.content;R==8&&(ht=an(ht)),x=xe(30),x.write_shift(4,67324752),x.write_shift(2,20),x.write_shift(2,Z),x.write_shift(2,R),he.mt?Ue(x,he.mt):x.write_shift(4,0),x.write_shift(-4,se[ne]),x.write_shift(4,ht.length),x.write_shift(4,he.content.length),x.write_shift(2,Be.length),x.write_shift(2,0),N+=x.length,w.push(x),N+=Be.length,w.push(Be),N+=ht.length,w.push(ht),x=xe(46),x.write_shift(4,33639248),x.write_shift(2,0),x.write_shift(2,20),x.write_shift(2,Z),x.write_shift(2,R),x.write_shift(4,0),x.write_shift(-4,se[ne]),x.write_shift(4,ht.length),x.write_shift(4,he.content.length),x.write_shift(2,Be.length),x.write_shift(2,0),x.write_shift(2,0),x.write_shift(2,0),x.write_shift(2,0),x.write_shift(4,0),x.write_shift(4,Le),me+=x.l,E.push(x),me+=Be.length,E.push(Be),++ne}return x=xe(22),x.write_shift(4,101010256),x.write_shift(2,0),x.write_shift(2,0),x.write_shift(2,ne),x.write_shift(2,ne),x.write_shift(4,me),x.write_shift(4,N),x.write_shift(2,0),M([M(w),M(E),x])}var J={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function te(u,k){if(u.ctype)return u.ctype;var v=u.name||"",w=v.match(/\.([^\.]+)$/);return w&&J[w[1]]||k&&(w=(v=k).match(/[\.\\]([^\.\\])+$/),w&&J[w[1]])?J[w[1]]:"application/octet-stream"}function ve(u){for(var k=i.encode(u),v=[],w=0;w<k.length;w+=76)v.push(k.slice(w,w+76));return v.join(`\r
`)+`\r
`}function Te(u){var k=u.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(K){var N=K.charCodeAt(0).toString(16).toUpperCase();return"="+(N.length==1?"0"+N:N)});k=k.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),k.charAt(0)==`
`&&(k="=0D"+k.slice(1)),k=k.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var v=[],w=k.split(`\r
`),E=0;E<w.length;++E){var x=w[E];if(x.length==0){v.push("");continue}for(var R=0;R<x.length;){var Z=76,I=x.slice(R,R+Z);I.charAt(Z-1)=="="?Z--:I.charAt(Z-2)=="="?Z-=2:I.charAt(Z-3)=="="&&(Z-=3),I=x.slice(R,R+Z),R+=Z,R<x.length&&(I+="="),v.push(I)}}return v.join(`\r
`)}function Ge(u){for(var k=[],v=0;v<u.length;++v){for(var w=u[v];v<=u.length&&w.charAt(w.length-1)=="=";)w=w.slice(0,w.length-1)+u[++v];k.push(w)}for(var E=0;E<k.length;++E)k[E]=k[E].replace(/=[0-9A-Fa-f]{2}/g,function(x){return String.fromCharCode(parseInt(x.slice(1),16))});return h(k.join(`\r
`))}function Ne(u,k,v){for(var w="",E="",x="",R,Z=0;Z<10;++Z){var I=k[Z];if(!I||I.match(/^\s*$/))break;var K=I.match(/^(.*?):\s*([^\s].*)$/);if(K)switch(K[1].toLowerCase()){case"content-location":w=K[2].trim();break;case"content-type":x=K[2].trim();break;case"content-transfer-encoding":E=K[2].trim();break}}switch(++Z,E.toLowerCase()){case"base64":R=h(i.decode(k.slice(Z).join("")));break;case"quoted-printable":R=Ge(k.slice(Z));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+E)}var N=yt(u,w.slice(v.length),R,{unsafe:!0});x&&(N.ctype=x)}function Qe(u,k){if(Xt(u.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var v=k&&k.root||"",w=(t&&Buffer.isBuffer(u)?u.toString("binary"):Xt(u)).split(`\r
`),E=0,x="";for(E=0;E<w.length;++E)if(x=w[E],!!/^Content-Location:/i.test(x)&&(x=x.slice(x.indexOf("file")),v||(v=x.slice(0,x.lastIndexOf("/")+1)),x.slice(0,v.length)!=v))for(;v.length>0&&(v=v.slice(0,v.length-1),v=v.slice(0,v.lastIndexOf("/")+1),x.slice(0,v.length)!=v););var R=(w[1]||"").match(/boundary="(.*?)"/);if(!R)throw new Error("MAD cannot find boundary");var Z="--"+(R[1]||""),I=[],K=[],N={FileIndex:I,FullPaths:K};St(N);var ne,le=0;for(E=0;E<w.length;++E){var de=w[E];de!==Z&&de!==Z+"--"||(le++&&Ne(N,w.slice(ne,E),v),ne=E)}return N}function _r(u,k){var v=k||{},w=v.boundary||"SheetJS";w="------="+w;for(var E=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+w.slice(2)+'"',"","",""],x=u.FullPaths[0],R=x,Z=u.FileIndex[0],I=1;I<u.FullPaths.length;++I)if(R=u.FullPaths[I].slice(x.length),Z=u.FileIndex[I],!(!Z.size||!Z.content||R=="Sh33tJ5")){R=R.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(me){return"_x"+me.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(me){return"_u"+me.charCodeAt(0).toString(16)+"_"});for(var K=Z.content,N=t&&Buffer.isBuffer(K)?K.toString("binary"):Xt(K),ne=0,le=Math.min(1024,N.length),de=0,he=0;he<=le;++he)(de=N.charCodeAt(he))>=32&&de<128&&++ne;var se=ne>=le*4/5;E.push(w),E.push("Content-Location: "+(v.root||"file:///C:/SheetJS/")+R),E.push("Content-Transfer-Encoding: "+(se?"quoted-printable":"base64")),E.push("Content-Type: "+te(Z,R)),E.push(""),E.push(se?Te(N):ve(N))}return E.push(w+`--\r
`),E.join(`\r
`)}function cr(u){var k={};return St(k,u),k}function yt(u,k,v,w){var E=w&&w.unsafe;E||St(u);var x=!E&&rt.find(u,k);if(!x){var R=u.FullPaths[0];k.slice(0,R.length)==R?R=k:(R.slice(-1)!="/"&&(R+="/"),R=(R+k).replace("//","/")),x={name:ye(k),type:2},u.FileIndex.push(x),u.FullPaths.push(R),E||rt.utils.cfb_gc(u)}return x.content=v,x.size=v?v.length:0,w&&(w.CLSID&&(x.clsid=w.CLSID),w.mt&&(x.mt=w.mt),w.ct&&(x.ct=w.ct)),x}function wi(u,k){St(u);var v=rt.find(u,k);if(v){for(var w=0;w<u.FileIndex.length;++w)if(u.FileIndex[w]==v)return u.FileIndex.splice(w,1),u.FullPaths.splice(w,1),!0}return!1}function kt(u,k,v){St(u);var w=rt.find(u,k);if(w){for(var E=0;E<u.FileIndex.length;++E)if(u.FileIndex[E]==w)return u.FileIndex[E].name=ye(v),u.FullPaths[E]=v,!0}return!1}function Cs(u){Ft(u,!0)}return G.find=si,G.read=Nr,G.parse=Ae,G.write=ea,G.writeFile=Qi,G.utils={cfb_new:cr,cfb_add:yt,cfb_del:wi,cfb_mov:kt,cfb_gc:Cs,ReadShift:C,CheckField:z,prep_blob:_e,bconcat:M,use_zlib:ta,_deflateRaw:ha,_inflateRaw:T,consts:ur},G}();typeof Uh<"u"&&typeof DO_NOT_EXPORT_CFB>"u"&&(e.exports=rt)}),we=zh(function(e,i){var t=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function r(f,h){return Object.prototype.hasOwnProperty.call(f,h)}i.assign=function(f){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var y=h.shift();if(y){if(typeof y!="object")throw new TypeError(y+"must be non-object");for(var o in y)r(y,o)&&(f[o]=y[o])}}return f},i.shrinkBuf=function(f,h){return f.length===h?f:f.subarray?f.subarray(0,h):(f.length=h,f)};var a={arraySet:function(f,h,y,o,l){if(h.subarray&&f.subarray){f.set(h.subarray(y,y+o),l);return}for(var L=0;L<o;L++)f[l+L]=h[y+L]},flattenChunks:function(f){var h,y,o,l,L,A;for(o=0,h=0,y=f.length;h<y;h++)o+=f[h].length;for(A=new Uint8Array(o),l=0,h=0,y=f.length;h<y;h++)L=f[h],A.set(L,l),l+=L.length;return A}},n={arraySet:function(f,h,y,o,l){for(var L=0;L<o;L++)f[l+L]=h[y+L]},flattenChunks:function(f){return[].concat.apply([],f)}};i.setTyped=function(f){f?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,n))},i.setTyped(t)}),$s=4,Gf=0,Zf=1,Ks=2;function jr(e){for(var i=e.length;--i>=0;)e[i]=0}var Ys=0,Mh=1,Xs=2,Vs=3,qs=258,zn=29,Ii=256,bi=Ii+1+zn,Zr=30,Un=19,Gh=2*bi+1,wr=15,dn=16,Js=7,Mn=256,Zh=16,Dh=17,Wh=18,Fn=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ka=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Qs=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],jh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],e0=512,Zt=new Array((bi+2)*2);jr(Zt);var Ei=new Array(Zr*2);jr(Ei);var Si=new Array(e0);jr(Si);var Fi=new Array(qs-Vs+1);jr(Fi);var Gn=new Array(zn);jr(Gn);var Pa=new Array(Zr);jr(Pa);function _n(e,i,t,r,a){this.static_tree=e,this.extra_bits=i,this.extra_base=t,this.elems=r,this.max_length=a,this.has_stree=e&&e.length}var $h,Kh,Yh;function cn(e,i){this.dyn_tree=e,this.max_code=0,this.stat_desc=i}function Xh(e){return e<256?Si[e]:Si[256+(e>>>7)]}function Ti(e,i){e.pending_buf[e.pending++]=i&255,e.pending_buf[e.pending++]=i>>>8&255}function at(e,i,t){e.bi_valid>dn-t?(e.bi_buf|=i<<e.bi_valid&65535,Ti(e,e.bi_buf),e.bi_buf=i>>dn-e.bi_valid,e.bi_valid+=t-dn):(e.bi_buf|=i<<e.bi_valid&65535,e.bi_valid+=t)}function Pt(e,i,t){at(e,t[i*2],t[i*2+1])}function Vh(e,i){var t=0;do t|=e&1,e>>>=1,t<<=1;while(--i>0);return t>>>1}function t0(e){e.bi_valid===16?(Ti(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)}function r0(e,i){var t=i.dyn_tree,r=i.max_code,a=i.stat_desc.static_tree,n=i.stat_desc.has_stree,f=i.stat_desc.extra_bits,h=i.stat_desc.extra_base,y=i.stat_desc.max_length,o,l,L,A,m,j,D=0;for(A=0;A<=wr;A++)e.bl_count[A]=0;for(t[e.heap[e.heap_max]*2+1]=0,o=e.heap_max+1;o<Gh;o++)l=e.heap[o],A=t[t[l*2+1]*2+1]+1,A>y&&(A=y,D++),t[l*2+1]=A,!(l>r)&&(e.bl_count[A]++,m=0,l>=h&&(m=f[l-h]),j=t[l*2],e.opt_len+=j*(A+m),n&&(e.static_len+=j*(a[l*2+1]+m)));if(D!==0){do{for(A=y-1;e.bl_count[A]===0;)A--;e.bl_count[A]--,e.bl_count[A+1]+=2,e.bl_count[y]--,D-=2}while(D>0);for(A=y;A!==0;A--)for(l=e.bl_count[A];l!==0;)L=e.heap[--o],!(L>r)&&(t[L*2+1]!==A&&(e.opt_len+=(A-t[L*2+1])*t[L*2],t[L*2+1]=A),l--)}}function qh(e,i,t){var r=new Array(wr+1),a=0,n,f;for(n=1;n<=wr;n++)r[n]=a=a+t[n-1]<<1;for(f=0;f<=i;f++){var h=e[f*2+1];h!==0&&(e[f*2]=Vh(r[h]++,h))}}function i0(){var e,i,t,r,a,n=new Array(wr+1);for(t=0,r=0;r<zn-1;r++)for(Gn[r]=t,e=0;e<1<<Fn[r];e++)Fi[t++]=r;for(Fi[t-1]=r,a=0,r=0;r<16;r++)for(Pa[r]=a,e=0;e<1<<ka[r];e++)Si[a++]=r;for(a>>=7;r<Zr;r++)for(Pa[r]=a<<7,e=0;e<1<<ka[r]-7;e++)Si[256+a++]=r;for(i=0;i<=wr;i++)n[i]=0;for(e=0;e<=143;)Zt[e*2+1]=8,e++,n[8]++;for(;e<=255;)Zt[e*2+1]=9,e++,n[9]++;for(;e<=279;)Zt[e*2+1]=7,e++,n[7]++;for(;e<=287;)Zt[e*2+1]=8,e++,n[8]++;for(qh(Zt,bi+1,n),e=0;e<Zr;e++)Ei[e*2+1]=5,Ei[e*2]=Vh(e,5);$h=new _n(Zt,Fn,Ii+1,bi,wr),Kh=new _n(Ei,ka,0,Zr,wr),Yh=new _n(new Array(0),Qs,0,Un,Js)}function Jh(e){var i;for(i=0;i<bi;i++)e.dyn_ltree[i*2]=0;for(i=0;i<Zr;i++)e.dyn_dtree[i*2]=0;for(i=0;i<Un;i++)e.bl_tree[i*2]=0;e.dyn_ltree[Mn*2]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function Qh(e){e.bi_valid>8?Ti(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function a0(e,i,t,r){Qh(e),r&&(Ti(e,t),Ti(e,~t)),we.arraySet(e.pending_buf,e.window,i,t,e.pending),e.pending+=t}function Df(e,i,t,r){var a=i*2,n=t*2;return e[a]<e[n]||e[a]===e[n]&&r[i]<=r[t]}function vn(e,i,t){for(var r=e.heap[t],a=t<<1;a<=e.heap_len&&(a<e.heap_len&&Df(i,e.heap[a+1],e.heap[a],e.depth)&&a++,!Df(i,r,e.heap[a],e.depth));)e.heap[t]=e.heap[a],t=a,a<<=1;e.heap[t]=r}function Wf(e,i,t){var r,a,n=0,f,h;if(e.last_lit!==0)do r=e.pending_buf[e.d_buf+n*2]<<8|e.pending_buf[e.d_buf+n*2+1],a=e.pending_buf[e.l_buf+n],n++,r===0?Pt(e,a,i):(f=Fi[a],Pt(e,f+Ii+1,i),h=Fn[f],h!==0&&(a-=Gn[f],at(e,a,h)),r--,f=Xh(r),Pt(e,f,t),h=ka[f],h!==0&&(r-=Pa[f],at(e,r,h)));while(n<e.last_lit);Pt(e,Mn,i)}function Tn(e,i){var t=i.dyn_tree,r=i.stat_desc.static_tree,a=i.stat_desc.has_stree,n=i.stat_desc.elems,f,h,y=-1,o;for(e.heap_len=0,e.heap_max=Gh,f=0;f<n;f++)t[f*2]!==0?(e.heap[++e.heap_len]=y=f,e.depth[f]=0):t[f*2+1]=0;for(;e.heap_len<2;)o=e.heap[++e.heap_len]=y<2?++y:0,t[o*2]=1,e.depth[o]=0,e.opt_len--,a&&(e.static_len-=r[o*2+1]);for(i.max_code=y,f=e.heap_len>>1;f>=1;f--)vn(e,t,f);o=n;do f=e.heap[1],e.heap[1]=e.heap[e.heap_len--],vn(e,t,1),h=e.heap[1],e.heap[--e.heap_max]=f,e.heap[--e.heap_max]=h,t[o*2]=t[f*2]+t[h*2],e.depth[o]=(e.depth[f]>=e.depth[h]?e.depth[f]:e.depth[h])+1,t[f*2+1]=t[h*2+1]=o,e.heap[1]=o++,vn(e,t,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],r0(e,i),qh(t,y,e.bl_count)}function jf(e,i,t){var r,a=-1,n,f=i[0*2+1],h=0,y=7,o=4;for(f===0&&(y=138,o=3),i[(t+1)*2+1]=65535,r=0;r<=t;r++)n=f,f=i[(r+1)*2+1],!(++h<y&&n===f)&&(h<o?e.bl_tree[n*2]+=h:n!==0?(n!==a&&e.bl_tree[n*2]++,e.bl_tree[Zh*2]++):h<=10?e.bl_tree[Dh*2]++:e.bl_tree[Wh*2]++,h=0,a=n,f===0?(y=138,o=3):n===f?(y=6,o=3):(y=7,o=4))}function $f(e,i,t){var r,a=-1,n,f=i[0*2+1],h=0,y=7,o=4;for(f===0&&(y=138,o=3),r=0;r<=t;r++)if(n=f,f=i[(r+1)*2+1],!(++h<y&&n===f)){if(h<o)do Pt(e,n,e.bl_tree);while(--h!==0);else n!==0?(n!==a&&(Pt(e,n,e.bl_tree),h--),Pt(e,Zh,e.bl_tree),at(e,h-3,2)):h<=10?(Pt(e,Dh,e.bl_tree),at(e,h-3,3)):(Pt(e,Wh,e.bl_tree),at(e,h-11,7));h=0,a=n,f===0?(y=138,o=3):n===f?(y=6,o=3):(y=7,o=4)}}function n0(e){var i;for(jf(e,e.dyn_ltree,e.l_desc.max_code),jf(e,e.dyn_dtree,e.d_desc.max_code),Tn(e,e.bl_desc),i=Un-1;i>=3&&e.bl_tree[jh[i]*2+1]===0;i--);return e.opt_len+=3*(i+1)+5+5+4,i}function f0(e,i,t,r){var a;for(at(e,i-257,5),at(e,t-1,5),at(e,r-4,4),a=0;a<r;a++)at(e,e.bl_tree[jh[a]*2+1],3);$f(e,e.dyn_ltree,i-1),$f(e,e.dyn_dtree,t-1)}function h0(e){var i=4093624447,t;for(t=0;t<=31;t++,i>>>=1)if(i&1&&e.dyn_ltree[t*2]!==0)return Gf;if(e.dyn_ltree[9*2]!==0||e.dyn_ltree[10*2]!==0||e.dyn_ltree[13*2]!==0)return Zf;for(t=32;t<Ii;t++)if(e.dyn_ltree[t*2]!==0)return Zf;return Gf}var Kf=!1;function o0(e){Kf||(i0(),Kf=!0),e.l_desc=new cn(e.dyn_ltree,$h),e.d_desc=new cn(e.dyn_dtree,Kh),e.bl_desc=new cn(e.bl_tree,Yh),e.bi_buf=0,e.bi_valid=0,Jh(e)}function eo(e,i,t,r){at(e,(Ys<<1)+(r?1:0),3),a0(e,i,t,!0)}function l0(e){at(e,Mh<<1,3),Pt(e,Mn,Zt),t0(e)}function s0(e,i,t,r){var a,n,f=0;e.level>0?(e.strm.data_type===Ks&&(e.strm.data_type=h0(e)),Tn(e,e.l_desc),Tn(e,e.d_desc),f=n0(e),a=e.opt_len+3+7>>>3,n=e.static_len+3+7>>>3,n<=a&&(a=n)):a=n=t+5,t+4<=a&&i!==-1?eo(e,i,t,r):e.strategy===$s||n===a?(at(e,(Mh<<1)+(r?1:0),3),Wf(e,Zt,Ei)):(at(e,(Xs<<1)+(r?1:0),3),f0(e,e.l_desc.max_code+1,e.d_desc.max_code+1,f+1),Wf(e,e.dyn_ltree,e.dyn_dtree)),Jh(e),r&&Qh(e)}function u0(e,i,t){return e.pending_buf[e.d_buf+e.last_lit*2]=i>>>8&255,e.pending_buf[e.d_buf+e.last_lit*2+1]=i&255,e.pending_buf[e.l_buf+e.last_lit]=t&255,e.last_lit++,i===0?e.dyn_ltree[t*2]++:(e.matches++,i--,e.dyn_ltree[(Fi[t]+Ii+1)*2]++,e.dyn_dtree[Xh(i)*2]++),e.last_lit===e.lit_bufsize-1}var d0=o0,_0=eo,c0=s0,v0=u0,w0=l0,ut={_tr_init:d0,_tr_stored_block:_0,_tr_flush_block:c0,_tr_tally:v0,_tr_align:w0};function p0(e,i,t,r){for(var a=e&65535|0,n=e>>>16&65535|0,f=0;t!==0;){f=t>2e3?2e3:t,t-=f;do a=a+i[r++]|0,n=n+a|0;while(--f);a%=65521,n%=65521}return a|n<<16|0}var Pi=p0;function g0(){for(var e,i=[],t=0;t<256;t++){e=t;for(var r=0;r<8;r++)e=e&1?3988292384^e>>>1:e>>>1;i[t]=e}return i}var x0=g0();function y0(e,i,t,r){var a=x0,n=r+t;e^=-1;for(var f=r;f<n;f++)e=e>>>8^a[(e^i[f])&255];return e^-1}var We=y0,xr={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},br=0,k0=1,E0=3,rr=4,Yf=5,Rt=0,Xf=1,dt=-2,m0=-3,wn=-5,A0=-1,b0=1,la=2,S0=3,F0=4,T0=0,P0=2,Ca=8,R0=9,C0=15,I0=8,B0=29,H0=256,Pn=H0+1+B0,N0=30,O0=19,L0=2*Pn+1,z0=15,ke=3,er=258,mt=er+ke+1,U0=32,Ia=42,Rn=69,Ea=73,ma=91,Aa=103,pr=113,ki=666,Ze=1,Bi=2,yr=3,$r=4,M0=3;function tr(e,i){return e.msg=xr[i],i}function Vf(e){return(e<<1)-(e>4?9:0)}function Qt(e){for(var i=e.length;--i>=0;)e[i]=0}function qt(e){var i=e.state,t=i.pending;t>e.avail_out&&(t=e.avail_out),t!==0&&(we.arraySet(e.output,i.pending_buf,i.pending_out,t,e.next_out),e.next_out+=t,i.pending_out+=t,e.total_out+=t,e.avail_out-=t,i.pending-=t,i.pending===0&&(i.pending_out=0))}function $e(e,i){ut._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,i),e.block_start=e.strstart,qt(e.strm)}function be(e,i){e.pending_buf[e.pending++]=i}function yi(e,i){e.pending_buf[e.pending++]=i>>>8&255,e.pending_buf[e.pending++]=i&255}function G0(e,i,t,r){var a=e.avail_in;return a>r&&(a=r),a===0?0:(e.avail_in-=a,we.arraySet(i,e.input,e.next_in,a,t),e.state.wrap===1?e.adler=Pi(e.adler,i,a,t):e.state.wrap===2&&(e.adler=We(e.adler,i,a,t)),e.next_in+=a,e.total_in+=a,a)}function to(e,i){var t=e.max_chain_length,r=e.strstart,a,n,f=e.prev_length,h=e.nice_match,y=e.strstart>e.w_size-mt?e.strstart-(e.w_size-mt):0,o=e.window,l=e.w_mask,L=e.prev,A=e.strstart+er,m=o[r+f-1],j=o[r+f];e.prev_length>=e.good_match&&(t>>=2),h>e.lookahead&&(h=e.lookahead);do if(a=i,!(o[a+f]!==j||o[a+f-1]!==m||o[a]!==o[r]||o[++a]!==o[r+1])){r+=2,a++;do;while(o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&o[++r]===o[++a]&&r<A);if(n=er-(A-r),r=A-er,n>f){if(e.match_start=i,f=n,n>=h)break;m=o[r+f-1],j=o[r+f]}}while((i=L[i&l])>y&&--t!==0);return f<=e.lookahead?f:e.lookahead}function kr(e){var i=e.w_size,t,r,a,n,f;do{if(n=e.window_size-e.lookahead-e.strstart,e.strstart>=i+(i-mt)){we.arraySet(e.window,e.window,i,i,0),e.match_start-=i,e.strstart-=i,e.block_start-=i,r=e.hash_size,t=r;do a=e.head[--t],e.head[t]=a>=i?a-i:0;while(--r);r=i,t=r;do a=e.prev[--t],e.prev[t]=a>=i?a-i:0;while(--r);n+=i}if(e.strm.avail_in===0)break;if(r=G0(e.strm,e.window,e.strstart+e.lookahead,n),e.lookahead+=r,e.lookahead+e.insert>=ke)for(f=e.strstart-e.insert,e.ins_h=e.window[f],e.ins_h=(e.ins_h<<e.hash_shift^e.window[f+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[f+ke-1])&e.hash_mask,e.prev[f&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=f,f++,e.insert--,!(e.lookahead+e.insert<ke)););}while(e.lookahead<mt&&e.strm.avail_in!==0)}function Z0(e,i){var t=65535;for(t>e.pending_buf_size-5&&(t=e.pending_buf_size-5);;){if(e.lookahead<=1){if(kr(e),e.lookahead===0&&i===br)return Ze;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+t;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,$e(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-mt&&($e(e,!1),e.strm.avail_out===0))return Ze}return e.insert=0,i===rr?($e(e,!0),e.strm.avail_out===0?yr:$r):(e.strstart>e.block_start&&($e(e,!1),e.strm.avail_out===0),Ze)}function pn(e,i){for(var t,r;;){if(e.lookahead<mt){if(kr(e),e.lookahead<mt&&i===br)return Ze;if(e.lookahead===0)break}if(t=0,e.lookahead>=ke&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ke-1])&e.hash_mask,t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),t!==0&&e.strstart-t<=e.w_size-mt&&(e.match_length=to(e,t)),e.match_length>=ke)if(r=ut._tr_tally(e,e.strstart-e.match_start,e.match_length-ke),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=ke){e.match_length--;do e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ke-1])&e.hash_mask,t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=ut._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&($e(e,!1),e.strm.avail_out===0))return Ze}return e.insert=e.strstart<ke-1?e.strstart:ke-1,i===rr?($e(e,!0),e.strm.avail_out===0?yr:$r):e.last_lit&&($e(e,!1),e.strm.avail_out===0)?Ze:Bi}function Ur(e,i){for(var t,r,a;;){if(e.lookahead<mt){if(kr(e),e.lookahead<mt&&i===br)return Ze;if(e.lookahead===0)break}if(t=0,e.lookahead>=ke&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ke-1])&e.hash_mask,t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=ke-1,t!==0&&e.prev_length<e.max_lazy_match&&e.strstart-t<=e.w_size-mt&&(e.match_length=to(e,t),e.match_length<=5&&(e.strategy===b0||e.match_length===ke&&e.strstart-e.match_start>4096)&&(e.match_length=ke-1)),e.prev_length>=ke&&e.match_length<=e.prev_length){a=e.strstart+e.lookahead-ke,r=ut._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-ke),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=a&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ke-1])&e.hash_mask,t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(--e.prev_length!==0);if(e.match_available=0,e.match_length=ke-1,e.strstart++,r&&($e(e,!1),e.strm.avail_out===0))return Ze}else if(e.match_available){if(r=ut._tr_tally(e,0,e.window[e.strstart-1]),r&&$e(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return Ze}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=ut._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<ke-1?e.strstart:ke-1,i===rr?($e(e,!0),e.strm.avail_out===0?yr:$r):e.last_lit&&($e(e,!1),e.strm.avail_out===0)?Ze:Bi}function D0(e,i){for(var t,r,a,n,f=e.window;;){if(e.lookahead<=er){if(kr(e),e.lookahead<=er&&i===br)return Ze;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=ke&&e.strstart>0&&(a=e.strstart-1,r=f[a],r===f[++a]&&r===f[++a]&&r===f[++a])){n=e.strstart+er;do;while(r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&r===f[++a]&&a<n);e.match_length=er-(n-a),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=ke?(t=ut._tr_tally(e,1,e.match_length-ke),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(t=ut._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),t&&($e(e,!1),e.strm.avail_out===0))return Ze}return e.insert=0,i===rr?($e(e,!0),e.strm.avail_out===0?yr:$r):e.last_lit&&($e(e,!1),e.strm.avail_out===0)?Ze:Bi}function W0(e,i){for(var t;;){if(e.lookahead===0&&(kr(e),e.lookahead===0)){if(i===br)return Ze;break}if(e.match_length=0,t=ut._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,t&&($e(e,!1),e.strm.avail_out===0))return Ze}return e.insert=0,i===rr?($e(e,!0),e.strm.avail_out===0?yr:$r):e.last_lit&&($e(e,!1),e.strm.avail_out===0)?Ze:Bi}function Tt(e,i,t,r,a){this.good_length=e,this.max_lazy=i,this.nice_length=t,this.max_chain=r,this.func=a}var Gr;Gr=[new Tt(0,0,0,0,Z0),new Tt(4,4,8,4,pn),new Tt(4,5,16,8,pn),new Tt(4,6,32,32,pn),new Tt(4,4,16,16,Ur),new Tt(8,16,32,32,Ur),new Tt(8,16,128,128,Ur),new Tt(8,32,128,256,Ur),new Tt(32,128,258,1024,Ur),new Tt(32,258,258,4096,Ur)];function j0(e){e.window_size=2*e.w_size,Qt(e.head),e.max_lazy_match=Gr[e.level].max_lazy,e.good_match=Gr[e.level].good_length,e.nice_match=Gr[e.level].nice_length,e.max_chain_length=Gr[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=ke-1,e.match_available=0,e.ins_h=0}function $0(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Ca,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new we.Buf16(L0*2),this.dyn_dtree=new we.Buf16((2*N0+1)*2),this.bl_tree=new we.Buf16((2*O0+1)*2),Qt(this.dyn_ltree),Qt(this.dyn_dtree),Qt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new we.Buf16(z0+1),this.heap=new we.Buf16(2*Pn+1),Qt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new we.Buf16(2*Pn+1),Qt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ro(e){var i;return!e||!e.state?tr(e,dt):(e.total_in=e.total_out=0,e.data_type=P0,i=e.state,i.pending=0,i.pending_out=0,i.wrap<0&&(i.wrap=-i.wrap),i.status=i.wrap?Ia:pr,e.adler=i.wrap===2?0:1,i.last_flush=br,ut._tr_init(i),Rt)}function io(e){var i=ro(e);return i===Rt&&j0(e.state),i}function K0(e,i){return!e||!e.state||e.state.wrap!==2?dt:(e.state.gzhead=i,Rt)}function ao(e,i,t,r,a,n){if(!e)return dt;var f=1;if(i===A0&&(i=6),r<0?(f=0,r=-r):r>15&&(f=2,r-=16),a<1||a>R0||t!==Ca||r<8||r>15||i<0||i>9||n<0||n>F0)return tr(e,dt);r===8&&(r=9);var h=new $0;return e.state=h,h.strm=e,h.wrap=f,h.gzhead=null,h.w_bits=r,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=a+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+ke-1)/ke),h.window=new we.Buf8(h.w_size*2),h.head=new we.Buf16(h.hash_size),h.prev=new we.Buf16(h.w_size),h.lit_bufsize=1<<a+6,h.pending_buf_size=h.lit_bufsize*4,h.pending_buf=new we.Buf8(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=i,h.strategy=n,h.method=t,io(e)}function Y0(e,i){return ao(e,i,Ca,C0,I0,T0)}function X0(e,i){var t,r,a,n;if(!e||!e.state||i>Yf||i<0)return e?tr(e,dt):dt;if(r=e.state,!e.output||!e.input&&e.avail_in!==0||r.status===ki&&i!==rr)return tr(e,e.avail_out===0?wn:dt);if(r.strm=e,t=r.last_flush,r.last_flush=i,r.status===Ia)if(r.wrap===2)e.adler=0,be(r,31),be(r,139),be(r,8),r.gzhead?(be(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),be(r,r.gzhead.time&255),be(r,r.gzhead.time>>8&255),be(r,r.gzhead.time>>16&255),be(r,r.gzhead.time>>24&255),be(r,r.level===9?2:r.strategy>=la||r.level<2?4:0),be(r,r.gzhead.os&255),r.gzhead.extra&&r.gzhead.extra.length&&(be(r,r.gzhead.extra.length&255),be(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(e.adler=We(e.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=Rn):(be(r,0),be(r,0),be(r,0),be(r,0),be(r,0),be(r,r.level===9?2:r.strategy>=la||r.level<2?4:0),be(r,M0),r.status=pr);else{var f=Ca+(r.w_bits-8<<4)<<8,h=-1;r.strategy>=la||r.level<2?h=0:r.level<6?h=1:r.level===6?h=2:h=3,f|=h<<6,r.strstart!==0&&(f|=U0),f+=31-f%31,r.status=pr,yi(r,f),r.strstart!==0&&(yi(r,e.adler>>>16),yi(r,e.adler&65535)),e.adler=1}if(r.status===Rn)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(r.gzhead.extra.length&65535)&&!(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(e.adler=We(e.adler,r.pending_buf,r.pending-a,a)),qt(e),a=r.pending,r.pending===r.pending_buf_size));)be(r,r.gzhead.extra[r.gzindex]&255),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(e.adler=We(e.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=Ea)}else r.status=Ea;if(r.status===Ea)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(e.adler=We(e.adler,r.pending_buf,r.pending-a,a)),qt(e),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}r.gzindex<r.gzhead.name.length?n=r.gzhead.name.charCodeAt(r.gzindex++)&255:n=0,be(r,n)}while(n!==0);r.gzhead.hcrc&&r.pending>a&&(e.adler=We(e.adler,r.pending_buf,r.pending-a,a)),n===0&&(r.gzindex=0,r.status=ma)}else r.status=ma;if(r.status===ma)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(e.adler=We(e.adler,r.pending_buf,r.pending-a,a)),qt(e),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}r.gzindex<r.gzhead.comment.length?n=r.gzhead.comment.charCodeAt(r.gzindex++)&255:n=0,be(r,n)}while(n!==0);r.gzhead.hcrc&&r.pending>a&&(e.adler=We(e.adler,r.pending_buf,r.pending-a,a)),n===0&&(r.status=Aa)}else r.status=Aa;if(r.status===Aa&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&qt(e),r.pending+2<=r.pending_buf_size&&(be(r,e.adler&255),be(r,e.adler>>8&255),e.adler=0,r.status=pr)):r.status=pr),r.pending!==0){if(qt(e),e.avail_out===0)return r.last_flush=-1,Rt}else if(e.avail_in===0&&Vf(i)<=Vf(t)&&i!==rr)return tr(e,wn);if(r.status===ki&&e.avail_in!==0)return tr(e,wn);if(e.avail_in!==0||r.lookahead!==0||i!==br&&r.status!==ki){var y=r.strategy===la?W0(r,i):r.strategy===S0?D0(r,i):Gr[r.level].func(r,i);if((y===yr||y===$r)&&(r.status=ki),y===Ze||y===yr)return e.avail_out===0&&(r.last_flush=-1),Rt;if(y===Bi&&(i===k0?ut._tr_align(r):i!==Yf&&(ut._tr_stored_block(r,0,0,!1),i===E0&&(Qt(r.head),r.lookahead===0&&(r.strstart=0,r.block_start=0,r.insert=0))),qt(e),e.avail_out===0))return r.last_flush=-1,Rt}return i!==rr?Rt:r.wrap<=0?Xf:(r.wrap===2?(be(r,e.adler&255),be(r,e.adler>>8&255),be(r,e.adler>>16&255),be(r,e.adler>>24&255),be(r,e.total_in&255),be(r,e.total_in>>8&255),be(r,e.total_in>>16&255),be(r,e.total_in>>24&255)):(yi(r,e.adler>>>16),yi(r,e.adler&65535)),qt(e),r.wrap>0&&(r.wrap=-r.wrap),r.pending!==0?Rt:Xf)}function V0(e){var i;return!e||!e.state?dt:(i=e.state.status,i!==Ia&&i!==Rn&&i!==Ea&&i!==ma&&i!==Aa&&i!==pr&&i!==ki?tr(e,dt):(e.state=null,i===pr?tr(e,m0):Rt))}function q0(e,i){var t=i.length,r,a,n,f,h,y,o,l;if(!e||!e.state||(r=e.state,f=r.wrap,f===2||f===1&&r.status!==Ia||r.lookahead))return dt;for(f===1&&(e.adler=Pi(e.adler,i,t,0)),r.wrap=0,t>=r.w_size&&(f===0&&(Qt(r.head),r.strstart=0,r.block_start=0,r.insert=0),l=new we.Buf8(r.w_size),we.arraySet(l,i,t-r.w_size,r.w_size,0),i=l,t=r.w_size),h=e.avail_in,y=e.next_in,o=e.input,e.avail_in=t,e.next_in=0,e.input=i,kr(r);r.lookahead>=ke;){a=r.strstart,n=r.lookahead-(ke-1);do r.ins_h=(r.ins_h<<r.hash_shift^r.window[a+ke-1])&r.hash_mask,r.prev[a&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=a,a++;while(--n);r.strstart=a,r.lookahead=ke-1,kr(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=ke-1,r.match_available=0,e.next_in=y,e.input=o,e.avail_in=h,r.wrap=f,Rt}var J0=Y0,Q0=ao,eu=io,tu=ro,ru=K0,iu=X0,au=V0,nu=q0,fu="pako deflate (from Nodeca project)",mi={deflateInit:J0,deflateInit2:Q0,deflateReset:eu,deflateResetKeep:tu,deflateSetHeader:ru,deflate:iu,deflateEnd:au,deflateSetDictionary:nu,deflateInfo:fu},no=!0,fo=!0;try{String.fromCharCode.apply(null,[0])}catch{no=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{fo=!1}var Ri=new we.Buf8(256);for(Mt=0;Mt<256;Mt++)Ri[Mt]=Mt>=252?6:Mt>=248?5:Mt>=240?4:Mt>=224?3:Mt>=192?2:1;var Mt;Ri[254]=Ri[254]=1;var hu=function(e){var i,t,r,a,n,f=e.length,h=0;for(a=0;a<f;a++)t=e.charCodeAt(a),(t&64512)===55296&&a+1<f&&(r=e.charCodeAt(a+1),(r&64512)===56320&&(t=65536+(t-55296<<10)+(r-56320),a++)),h+=t<128?1:t<2048?2:t<65536?3:4;for(i=new we.Buf8(h),n=0,a=0;n<h;a++)t=e.charCodeAt(a),(t&64512)===55296&&a+1<f&&(r=e.charCodeAt(a+1),(r&64512)===56320&&(t=65536+(t-55296<<10)+(r-56320),a++)),t<128?i[n++]=t:t<2048?(i[n++]=192|t>>>6,i[n++]=128|t&63):t<65536?(i[n++]=224|t>>>12,i[n++]=128|t>>>6&63,i[n++]=128|t&63):(i[n++]=240|t>>>18,i[n++]=128|t>>>12&63,i[n++]=128|t>>>6&63,i[n++]=128|t&63);return i};function ho(e,i){if(i<65534&&(e.subarray&&fo||!e.subarray&&no))return String.fromCharCode.apply(null,we.shrinkBuf(e,i));for(var t="",r=0;r<i;r++)t+=String.fromCharCode(e[r]);return t}var ou=function(e){return ho(e,e.length)},lu=function(e){for(var i=new we.Buf8(e.length),t=0,r=i.length;t<r;t++)i[t]=e.charCodeAt(t);return i},su=function(e,i){var t,r,a,n,f=i||e.length,h=new Array(f*2);for(r=0,t=0;t<f;){if(a=e[t++],a<128){h[r++]=a;continue}if(n=Ri[a],n>4){h[r++]=65533,t+=n-1;continue}for(a&=n===2?31:n===3?15:7;n>1&&t<f;)a=a<<6|e[t++]&63,n--;if(n>1){h[r++]=65533;continue}a<65536?h[r++]=a:(a-=65536,h[r++]=55296|a>>10&1023,h[r++]=56320|a&1023)}return ho(h,r)},uu=function(e,i){var t;for(i=i||e.length,i>e.length&&(i=e.length),t=i-1;t>=0&&(e[t]&192)===128;)t--;return t<0||t===0?i:t+Ri[e[t]]>i?t:i},gr={string2buf:hu,buf2binstring:ou,binstring2buf:lu,buf2string:su,utf8border:uu};function du(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var oo=du,lo=Object.prototype.toString,_u=0,gn=4,Dr=0,qf=1,Jf=2,cu=-1,vu=0,wu=8;function Er(e){if(!(this instanceof Er))return new Er(e);this.options=we.assign({level:cu,method:wu,chunkSize:16384,windowBits:15,memLevel:8,strategy:vu,to:""},e||{});var i=this.options;i.raw&&i.windowBits>0?i.windowBits=-i.windowBits:i.gzip&&i.windowBits>0&&i.windowBits<16&&(i.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new oo,this.strm.avail_out=0;var t=mi.deflateInit2(this.strm,i.level,i.method,i.windowBits,i.memLevel,i.strategy);if(t!==Dr)throw new Error(xr[t]);if(i.header&&mi.deflateSetHeader(this.strm,i.header),i.dictionary){var r;if(typeof i.dictionary=="string"?r=gr.string2buf(i.dictionary):lo.call(i.dictionary)==="[object ArrayBuffer]"?r=new Uint8Array(i.dictionary):r=i.dictionary,t=mi.deflateSetDictionary(this.strm,r),t!==Dr)throw new Error(xr[t]);this._dict_set=!0}}Er.prototype.push=function(e,i){var t=this.strm,r=this.options.chunkSize,a,n;if(this.ended)return!1;n=i===~~i?i:i===!0?gn:_u,typeof e=="string"?t.input=gr.string2buf(e):lo.call(e)==="[object ArrayBuffer]"?t.input=new Uint8Array(e):t.input=e,t.next_in=0,t.avail_in=t.input.length;do{if(t.avail_out===0&&(t.output=new we.Buf8(r),t.next_out=0,t.avail_out=r),a=mi.deflate(t,n),a!==qf&&a!==Dr)return this.onEnd(a),this.ended=!0,!1;(t.avail_out===0||t.avail_in===0&&(n===gn||n===Jf))&&(this.options.to==="string"?this.onData(gr.buf2binstring(we.shrinkBuf(t.output,t.next_out))):this.onData(we.shrinkBuf(t.output,t.next_out)))}while((t.avail_in>0||t.avail_out===0)&&a!==qf);return n===gn?(a=mi.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===Dr):(n===Jf&&(this.onEnd(Dr),t.avail_out=0),!0)};Er.prototype.onData=function(e){this.chunks.push(e)};Er.prototype.onEnd=function(e){e===Dr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=we.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function Zn(e,i){var t=new Er(i);if(t.push(e,!0),t.err)throw t.msg||xr[t.err];return t.result}function pu(e,i){return i=i||{},i.raw=!0,Zn(e,i)}function gu(e,i){return i=i||{},i.gzip=!0,Zn(e,i)}var xu=Er,yu=Zn,ku=pu,Eu=gu,mu={Deflate:xu,deflate:yu,deflateRaw:ku,gzip:Eu},sa=30,Au=12,bu=function(i,t){var r,a,n,f,h,y,o,l,L,A,m,j,D,q,M,fe,ee,Q,B,ie,C,$,O,re,z;r=i.state,a=i.next_in,re=i.input,n=a+(i.avail_in-5),f=i.next_out,z=i.output,h=f-(t-i.avail_out),y=f+(i.avail_out-257),o=r.dmax,l=r.wsize,L=r.whave,A=r.wnext,m=r.window,j=r.hold,D=r.bits,q=r.lencode,M=r.distcode,fe=(1<<r.lenbits)-1,ee=(1<<r.distbits)-1;e:do{D<15&&(j+=re[a++]<<D,D+=8,j+=re[a++]<<D,D+=8),Q=q[j&fe];t:for(;;){if(B=Q>>>24,j>>>=B,D-=B,B=Q>>>16&255,B===0)z[f++]=Q&65535;else if(B&16){ie=Q&65535,B&=15,B&&(D<B&&(j+=re[a++]<<D,D+=8),ie+=j&(1<<B)-1,j>>>=B,D-=B),D<15&&(j+=re[a++]<<D,D+=8,j+=re[a++]<<D,D+=8),Q=M[j&ee];r:for(;;){if(B=Q>>>24,j>>>=B,D-=B,B=Q>>>16&255,B&16){if(C=Q&65535,B&=15,D<B&&(j+=re[a++]<<D,D+=8,D<B&&(j+=re[a++]<<D,D+=8)),C+=j&(1<<B)-1,C>o){i.msg="invalid distance too far back",r.mode=sa;break e}if(j>>>=B,D-=B,B=f-h,C>B){if(B=C-B,B>L&&r.sane){i.msg="invalid distance too far back",r.mode=sa;break e}if($=0,O=m,A===0){if($+=l-B,B<ie){ie-=B;do z[f++]=m[$++];while(--B);$=f-C,O=z}}else if(A<B){if($+=l+A-B,B-=A,B<ie){ie-=B;do z[f++]=m[$++];while(--B);if($=0,A<ie){B=A,ie-=B;do z[f++]=m[$++];while(--B);$=f-C,O=z}}}else if($+=A-B,B<ie){ie-=B;do z[f++]=m[$++];while(--B);$=f-C,O=z}for(;ie>2;)z[f++]=O[$++],z[f++]=O[$++],z[f++]=O[$++],ie-=3;ie&&(z[f++]=O[$++],ie>1&&(z[f++]=O[$++]))}else{$=f-C;do z[f++]=z[$++],z[f++]=z[$++],z[f++]=z[$++],ie-=3;while(ie>2);ie&&(z[f++]=z[$++],ie>1&&(z[f++]=z[$++]))}}else if(B&64){i.msg="invalid distance code",r.mode=sa;break e}else{Q=M[(Q&65535)+(j&(1<<B)-1)];continue r}break}}else if(B&64)if(B&32){r.mode=Au;break e}else{i.msg="invalid literal/length code",r.mode=sa;break e}else{Q=q[(Q&65535)+(j&(1<<B)-1)];continue t}break}}while(a<n&&f<y);ie=D>>3,a-=ie,D-=ie<<3,j&=(1<<D)-1,i.next_in=a,i.next_out=f,i.avail_in=a<n?5+(n-a):5-(a-n),i.avail_out=f<y?257+(y-f):257-(f-y),r.hold=j,r.bits=D},Mr=15,Qf=852,eh=592,th=0,xn=1,rh=2,Su=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Fu=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Tu=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Pu=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],Ai=function(i,t,r,a,n,f,h,y){var o=y.bits,l=0,L=0,A=0,m=0,j=0,D=0,q=0,M=0,fe=0,ee=0,Q,B,ie,C,$,O=null,re=0,z,_e=new we.Buf16(Mr+1),xe=new we.Buf16(Mr+1),Ye=null,rt=0,U,G,Y;for(l=0;l<=Mr;l++)_e[l]=0;for(L=0;L<a;L++)_e[t[r+L]]++;for(j=o,m=Mr;m>=1&&_e[m]===0;m--);if(j>m&&(j=m),m===0)return n[f++]=1<<24|64<<16|0,n[f++]=1<<24|64<<16|0,y.bits=1,0;for(A=1;A<m&&_e[A]===0;A++);for(j<A&&(j=A),M=1,l=1;l<=Mr;l++)if(M<<=1,M-=_e[l],M<0)return-1;if(M>0&&(i===th||m!==1))return-1;for(xe[1]=0,l=1;l<Mr;l++)xe[l+1]=xe[l]+_e[l];for(L=0;L<a;L++)t[r+L]!==0&&(h[xe[t[r+L]]++]=L);if(i===th?(O=Ye=h,z=19):i===xn?(O=Su,re-=257,Ye=Fu,rt-=257,z=256):(O=Tu,Ye=Pu,z=-1),ee=0,L=0,l=A,$=f,D=j,q=0,ie=-1,fe=1<<j,C=fe-1,i===xn&&fe>Qf||i===rh&&fe>eh)return 1;for(;;){U=l-q,h[L]<z?(G=0,Y=h[L]):h[L]>z?(G=Ye[rt+h[L]],Y=O[re+h[L]]):(G=96,Y=0),Q=1<<l-q,B=1<<D,A=B;do B-=Q,n[$+(ee>>q)+B]=U<<24|G<<16|Y|0;while(B!==0);for(Q=1<<l-1;ee&Q;)Q>>=1;if(Q!==0?(ee&=Q-1,ee+=Q):ee=0,L++,--_e[l]===0){if(l===m)break;l=t[r+h[L]]}if(l>j&&(ee&C)!==ie){for(q===0&&(q=j),$+=A,D=l-q,M=1<<D;D+q<m&&(M-=_e[D+q],!(M<=0));)D++,M<<=1;if(fe+=1<<D,i===xn&&fe>Qf||i===rh&&fe>eh)return 1;ie=ee&C,n[ie]=j<<24|D<<16|$-f|0}}return ee!==0&&(n[$+ee]=l-q<<24|64<<16|0),y.bits=j,0},Ru=0,so=1,uo=2,ih=4,Cu=5,ua=6,mr=0,Iu=1,Bu=2,_t=-2,_o=-3,co=-4,Hu=-5,ah=8,vo=1,nh=2,fh=3,hh=4,oh=5,lh=6,sh=7,uh=8,dh=9,_h=10,Ra=11,Gt=12,yn=13,ch=14,kn=15,vh=16,wh=17,ph=18,gh=19,da=20,_a=21,xh=22,yh=23,kh=24,Eh=25,mh=26,En=27,Ah=28,bh=29,Ce=30,wo=31,Nu=32,Ou=852,Lu=592,zu=15,Uu=zu;function Sh(e){return(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24)}function Mu(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new we.Buf16(320),this.work=new we.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function po(e){var i;return!e||!e.state?_t:(i=e.state,e.total_in=e.total_out=i.total=0,e.msg="",i.wrap&&(e.adler=i.wrap&1),i.mode=vo,i.last=0,i.havedict=0,i.dmax=32768,i.head=null,i.hold=0,i.bits=0,i.lencode=i.lendyn=new we.Buf32(Ou),i.distcode=i.distdyn=new we.Buf32(Lu),i.sane=1,i.back=-1,mr)}function go(e){var i;return!e||!e.state?_t:(i=e.state,i.wsize=0,i.whave=0,i.wnext=0,po(e))}function xo(e,i){var t,r;return!e||!e.state||(r=e.state,i<0?(t=0,i=-i):(t=(i>>4)+1,i<48&&(i&=15)),i&&(i<8||i>15))?_t:(r.window!==null&&r.wbits!==i&&(r.window=null),r.wrap=t,r.wbits=i,go(e))}function yo(e,i){var t,r;return e?(r=new Mu,e.state=r,r.window=null,t=xo(e,i),t!==mr&&(e.state=null),t):_t}function Gu(e){return yo(e,Uu)}var Fh=!0,mn,An;function Zu(e){if(Fh){var i;for(mn=new we.Buf32(512),An=new we.Buf32(32),i=0;i<144;)e.lens[i++]=8;for(;i<256;)e.lens[i++]=9;for(;i<280;)e.lens[i++]=7;for(;i<288;)e.lens[i++]=8;for(Ai(so,e.lens,0,288,mn,0,e.work,{bits:9}),i=0;i<32;)e.lens[i++]=5;Ai(uo,e.lens,0,32,An,0,e.work,{bits:5}),Fh=!1}e.lencode=mn,e.lenbits=9,e.distcode=An,e.distbits=5}function ko(e,i,t,r){var a,n=e.state;return n.window===null&&(n.wsize=1<<n.wbits,n.wnext=0,n.whave=0,n.window=new we.Buf8(n.wsize)),r>=n.wsize?(we.arraySet(n.window,i,t-n.wsize,n.wsize,0),n.wnext=0,n.whave=n.wsize):(a=n.wsize-n.wnext,a>r&&(a=r),we.arraySet(n.window,i,t-r,a,n.wnext),r-=a,r?(we.arraySet(n.window,i,t-r,r,0),n.wnext=r,n.whave=n.wsize):(n.wnext+=a,n.wnext===n.wsize&&(n.wnext=0),n.whave<n.wsize&&(n.whave+=a))),0}function Du(e,i){var t,r,a,n,f,h,y,o,l,L,A,m,j,D,q=0,M,fe,ee,Q,B,ie,C,$,O=new we.Buf8(4),re,z,_e=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return _t;t=e.state,t.mode===Gt&&(t.mode=yn),f=e.next_out,a=e.output,y=e.avail_out,n=e.next_in,r=e.input,h=e.avail_in,o=t.hold,l=t.bits,L=h,A=y,$=mr;e:for(;;)switch(t.mode){case vo:if(t.wrap===0){t.mode=yn;break}for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(t.wrap&2&&o===35615){t.check=0,O[0]=o&255,O[1]=o>>>8&255,t.check=We(t.check,O,2,0),o=0,l=0,t.mode=nh;break}if(t.flags=0,t.head&&(t.head.done=!1),!(t.wrap&1)||(((o&255)<<8)+(o>>8))%31){e.msg="incorrect header check",t.mode=Ce;break}if((o&15)!==ah){e.msg="unknown compression method",t.mode=Ce;break}if(o>>>=4,l-=4,C=(o&15)+8,t.wbits===0)t.wbits=C;else if(C>t.wbits){e.msg="invalid window size",t.mode=Ce;break}t.dmax=1<<C,e.adler=t.check=1,t.mode=o&512?_h:Gt,o=0,l=0;break;case nh:for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(t.flags=o,(t.flags&255)!==ah){e.msg="unknown compression method",t.mode=Ce;break}if(t.flags&57344){e.msg="unknown header flags set",t.mode=Ce;break}t.head&&(t.head.text=o>>8&1),t.flags&512&&(O[0]=o&255,O[1]=o>>>8&255,t.check=We(t.check,O,2,0)),o=0,l=0,t.mode=fh;case fh:for(;l<32;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.head&&(t.head.time=o),t.flags&512&&(O[0]=o&255,O[1]=o>>>8&255,O[2]=o>>>16&255,O[3]=o>>>24&255,t.check=We(t.check,O,4,0)),o=0,l=0,t.mode=hh;case hh:for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.head&&(t.head.xflags=o&255,t.head.os=o>>8),t.flags&512&&(O[0]=o&255,O[1]=o>>>8&255,t.check=We(t.check,O,2,0)),o=0,l=0,t.mode=oh;case oh:if(t.flags&1024){for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.length=o,t.head&&(t.head.extra_len=o),t.flags&512&&(O[0]=o&255,O[1]=o>>>8&255,t.check=We(t.check,O,2,0)),o=0,l=0}else t.head&&(t.head.extra=null);t.mode=lh;case lh:if(t.flags&1024&&(m=t.length,m>h&&(m=h),m&&(t.head&&(C=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Array(t.head.extra_len)),we.arraySet(t.head.extra,r,n,m,C)),t.flags&512&&(t.check=We(t.check,r,m,n)),h-=m,n+=m,t.length-=m),t.length))break e;t.length=0,t.mode=sh;case sh:if(t.flags&2048){if(h===0)break e;m=0;do C=r[n+m++],t.head&&C&&t.length<65536&&(t.head.name+=String.fromCharCode(C));while(C&&m<h);if(t.flags&512&&(t.check=We(t.check,r,m,n)),h-=m,n+=m,C)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=uh;case uh:if(t.flags&4096){if(h===0)break e;m=0;do C=r[n+m++],t.head&&C&&t.length<65536&&(t.head.comment+=String.fromCharCode(C));while(C&&m<h);if(t.flags&512&&(t.check=We(t.check,r,m,n)),h-=m,n+=m,C)break e}else t.head&&(t.head.comment=null);t.mode=dh;case dh:if(t.flags&512){for(;l<16;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(o!==(t.check&65535)){e.msg="header crc mismatch",t.mode=Ce;break}o=0,l=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),e.adler=t.check=0,t.mode=Gt;break;case _h:for(;l<32;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}e.adler=t.check=Sh(o),o=0,l=0,t.mode=Ra;case Ra:if(t.havedict===0)return e.next_out=f,e.avail_out=y,e.next_in=n,e.avail_in=h,t.hold=o,t.bits=l,Bu;e.adler=t.check=1,t.mode=Gt;case Gt:if(i===Cu||i===ua)break e;case yn:if(t.last){o>>>=l&7,l-=l&7,t.mode=En;break}for(;l<3;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}switch(t.last=o&1,o>>>=1,l-=1,o&3){case 0:t.mode=ch;break;case 1:if(Zu(t),t.mode=da,i===ua){o>>>=2,l-=2;break e}break;case 2:t.mode=wh;break;case 3:e.msg="invalid block type",t.mode=Ce}o>>>=2,l-=2;break;case ch:for(o>>>=l&7,l-=l&7;l<32;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if((o&65535)!==(o>>>16^65535)){e.msg="invalid stored block lengths",t.mode=Ce;break}if(t.length=o&65535,o=0,l=0,t.mode=kn,i===ua)break e;case kn:t.mode=vh;case vh:if(m=t.length,m){if(m>h&&(m=h),m>y&&(m=y),m===0)break e;we.arraySet(a,r,n,m,f),h-=m,n+=m,y-=m,f+=m,t.length-=m;break}t.mode=Gt;break;case wh:for(;l<14;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(t.nlen=(o&31)+257,o>>>=5,l-=5,t.ndist=(o&31)+1,o>>>=5,l-=5,t.ncode=(o&15)+4,o>>>=4,l-=4,t.nlen>286||t.ndist>30){e.msg="too many length or distance symbols",t.mode=Ce;break}t.have=0,t.mode=ph;case ph:for(;t.have<t.ncode;){for(;l<3;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.lens[_e[t.have++]]=o&7,o>>>=3,l-=3}for(;t.have<19;)t.lens[_e[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,re={bits:t.lenbits},$=Ai(Ru,t.lens,0,19,t.lencode,0,t.work,re),t.lenbits=re.bits,$){e.msg="invalid code lengths set",t.mode=Ce;break}t.have=0,t.mode=gh;case gh:for(;t.have<t.nlen+t.ndist;){for(;q=t.lencode[o&(1<<t.lenbits)-1],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(ee<16)o>>>=M,l-=M,t.lens[t.have++]=ee;else{if(ee===16){for(z=M+2;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(o>>>=M,l-=M,t.have===0){e.msg="invalid bit length repeat",t.mode=Ce;break}C=t.lens[t.have-1],m=3+(o&3),o>>>=2,l-=2}else if(ee===17){for(z=M+3;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}o>>>=M,l-=M,C=0,m=3+(o&7),o>>>=3,l-=3}else{for(z=M+7;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}o>>>=M,l-=M,C=0,m=11+(o&127),o>>>=7,l-=7}if(t.have+m>t.nlen+t.ndist){e.msg="invalid bit length repeat",t.mode=Ce;break}for(;m--;)t.lens[t.have++]=C}}if(t.mode===Ce)break;if(t.lens[256]===0){e.msg="invalid code -- missing end-of-block",t.mode=Ce;break}if(t.lenbits=9,re={bits:t.lenbits},$=Ai(so,t.lens,0,t.nlen,t.lencode,0,t.work,re),t.lenbits=re.bits,$){e.msg="invalid literal/lengths set",t.mode=Ce;break}if(t.distbits=6,t.distcode=t.distdyn,re={bits:t.distbits},$=Ai(uo,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,re),t.distbits=re.bits,$){e.msg="invalid distances set",t.mode=Ce;break}if(t.mode=da,i===ua)break e;case da:t.mode=_a;case _a:if(h>=6&&y>=258){e.next_out=f,e.avail_out=y,e.next_in=n,e.avail_in=h,t.hold=o,t.bits=l,bu(e,A),f=e.next_out,a=e.output,y=e.avail_out,n=e.next_in,r=e.input,h=e.avail_in,o=t.hold,l=t.bits,t.mode===Gt&&(t.back=-1);break}for(t.back=0;q=t.lencode[o&(1<<t.lenbits)-1],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(fe&&!(fe&240)){for(Q=M,B=fe,ie=ee;q=t.lencode[ie+((o&(1<<Q+B)-1)>>Q)],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(Q+M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}o>>>=Q,l-=Q,t.back+=Q}if(o>>>=M,l-=M,t.back+=M,t.length=ee,fe===0){t.mode=mh;break}if(fe&32){t.back=-1,t.mode=Gt;break}if(fe&64){e.msg="invalid literal/length code",t.mode=Ce;break}t.extra=fe&15,t.mode=xh;case xh:if(t.extra){for(z=t.extra;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.length+=o&(1<<t.extra)-1,o>>>=t.extra,l-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=yh;case yh:for(;q=t.distcode[o&(1<<t.distbits)-1],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(!(fe&240)){for(Q=M,B=fe,ie=ee;q=t.distcode[ie+((o&(1<<Q+B)-1)>>Q)],M=q>>>24,fe=q>>>16&255,ee=q&65535,!(Q+M<=l);){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}o>>>=Q,l-=Q,t.back+=Q}if(o>>>=M,l-=M,t.back+=M,fe&64){e.msg="invalid distance code",t.mode=Ce;break}t.offset=ee,t.extra=fe&15,t.mode=kh;case kh:if(t.extra){for(z=t.extra;l<z;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}t.offset+=o&(1<<t.extra)-1,o>>>=t.extra,l-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){e.msg="invalid distance too far back",t.mode=Ce;break}t.mode=Eh;case Eh:if(y===0)break e;if(m=A-y,t.offset>m){if(m=t.offset-m,m>t.whave&&t.sane){e.msg="invalid distance too far back",t.mode=Ce;break}m>t.wnext?(m-=t.wnext,j=t.wsize-m):j=t.wnext-m,m>t.length&&(m=t.length),D=t.window}else D=a,j=f-t.offset,m=t.length;m>y&&(m=y),y-=m,t.length-=m;do a[f++]=D[j++];while(--m);t.length===0&&(t.mode=_a);break;case mh:if(y===0)break e;a[f++]=t.length,y--,t.mode=_a;break;case En:if(t.wrap){for(;l<32;){if(h===0)break e;h--,o|=r[n++]<<l,l+=8}if(A-=y,e.total_out+=A,t.total+=A,A&&(e.adler=t.check=t.flags?We(t.check,a,A,f-A):Pi(t.check,a,A,f-A)),A=y,(t.flags?o:Sh(o))!==t.check){e.msg="incorrect data check",t.mode=Ce;break}o=0,l=0}t.mode=Ah;case Ah:if(t.wrap&&t.flags){for(;l<32;){if(h===0)break e;h--,o+=r[n++]<<l,l+=8}if(o!==(t.total&4294967295)){e.msg="incorrect length check",t.mode=Ce;break}o=0,l=0}t.mode=bh;case bh:$=Iu;break e;case Ce:$=_o;break e;case wo:return co;case Nu:default:return _t}return e.next_out=f,e.avail_out=y,e.next_in=n,e.avail_in=h,t.hold=o,t.bits=l,(t.wsize||A!==e.avail_out&&t.mode<Ce&&(t.mode<En||i!==ih))&&ko(e,e.output,e.next_out,A-e.avail_out),L-=e.avail_in,A-=e.avail_out,e.total_in+=L,e.total_out+=A,t.total+=A,t.wrap&&A&&(e.adler=t.check=t.flags?We(t.check,a,A,e.next_out-A):Pi(t.check,a,A,e.next_out-A)),e.data_type=t.bits+(t.last?64:0)+(t.mode===Gt?128:0)+(t.mode===da||t.mode===kn?256:0),(L===0&&A===0||i===ih)&&$===mr&&($=Hu),$}function Wu(e){if(!e||!e.state)return _t;var i=e.state;return i.window&&(i.window=null),e.state=null,mr}function ju(e,i){var t;return!e||!e.state||(t=e.state,!(t.wrap&2))?_t:(t.head=i,i.done=!1,mr)}function $u(e,i){var t=i.length,r,a,n;return!e||!e.state||(r=e.state,r.wrap!==0&&r.mode!==Ra)?_t:r.mode===Ra&&(a=1,a=Pi(a,i,t,0),a!==r.check)?_o:(n=ko(e,i,t,t),n?(r.mode=wo,co):(r.havedict=1,mr))}var Ku=go,Yu=xo,Xu=po,Vu=Gu,qu=yo,Ju=Du,Qu=Wu,ed=ju,td=$u,rd="pako inflate (from Nodeca project)",Wr={inflateReset:Ku,inflateReset2:Yu,inflateResetKeep:Xu,inflateInit:Vu,inflateInit2:qu,inflate:Ju,inflateEnd:Qu,inflateGetHeader:ed,inflateSetDictionary:td,inflateInfo:rd},Oe={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};function id(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var ad=id,Eo=Object.prototype.toString;function Ar(e){if(!(this instanceof Ar))return new Ar(e);this.options=we.assign({chunkSize:16384,windowBits:0,to:""},e||{});var i=this.options;i.raw&&i.windowBits>=0&&i.windowBits<16&&(i.windowBits=-i.windowBits,i.windowBits===0&&(i.windowBits=-15)),i.windowBits>=0&&i.windowBits<16&&!(e&&e.windowBits)&&(i.windowBits+=32),i.windowBits>15&&i.windowBits<48&&(i.windowBits&15||(i.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new oo,this.strm.avail_out=0;var t=Wr.inflateInit2(this.strm,i.windowBits);if(t!==Oe.Z_OK)throw new Error(xr[t]);if(this.header=new ad,Wr.inflateGetHeader(this.strm,this.header),i.dictionary&&(typeof i.dictionary=="string"?i.dictionary=gr.string2buf(i.dictionary):Eo.call(i.dictionary)==="[object ArrayBuffer]"&&(i.dictionary=new Uint8Array(i.dictionary)),i.raw&&(t=Wr.inflateSetDictionary(this.strm,i.dictionary),t!==Oe.Z_OK)))throw new Error(xr[t])}Ar.prototype.push=function(e,i){var t=this.strm,r=this.options.chunkSize,a=this.options.dictionary,n,f,h,y,o,l=!1;if(this.ended)return!1;f=i===~~i?i:i===!0?Oe.Z_FINISH:Oe.Z_NO_FLUSH,typeof e=="string"?t.input=gr.binstring2buf(e):Eo.call(e)==="[object ArrayBuffer]"?t.input=new Uint8Array(e):t.input=e,t.next_in=0,t.avail_in=t.input.length;do{if(t.avail_out===0&&(t.output=new we.Buf8(r),t.next_out=0,t.avail_out=r),n=Wr.inflate(t,Oe.Z_NO_FLUSH),n===Oe.Z_NEED_DICT&&a&&(n=Wr.inflateSetDictionary(this.strm,a)),n===Oe.Z_BUF_ERROR&&l===!0&&(n=Oe.Z_OK,l=!1),n!==Oe.Z_STREAM_END&&n!==Oe.Z_OK)return this.onEnd(n),this.ended=!0,!1;t.next_out&&(t.avail_out===0||n===Oe.Z_STREAM_END||t.avail_in===0&&(f===Oe.Z_FINISH||f===Oe.Z_SYNC_FLUSH))&&(this.options.to==="string"?(h=gr.utf8border(t.output,t.next_out),y=t.next_out-h,o=gr.buf2string(t.output,h),t.next_out=y,t.avail_out=r-y,y&&we.arraySet(t.output,t.output,h,y,0),this.onData(o)):this.onData(we.shrinkBuf(t.output,t.next_out))),t.avail_in===0&&t.avail_out===0&&(l=!0)}while((t.avail_in>0||t.avail_out===0)&&n!==Oe.Z_STREAM_END);return n===Oe.Z_STREAM_END&&(f=Oe.Z_FINISH),f===Oe.Z_FINISH?(n=Wr.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Oe.Z_OK):(f===Oe.Z_SYNC_FLUSH&&(this.onEnd(Oe.Z_OK),t.avail_out=0),!0)};Ar.prototype.onData=function(e){this.chunks.push(e)};Ar.prototype.onEnd=function(e){e===Oe.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=we.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function Dn(e,i){var t=new Ar(i);if(t.push(e,!0),t.err)throw t.msg||xr[t.err];return t.result}function nd(e,i){return i=i||{},i.raw=!0,Dn(e,i)}var fd=Ar,hd=Dn,od=nd,ld=Dn,sd={Inflate:fd,inflate:hd,inflateRaw:od,ungzip:ld},ud=we.assign,mo={};ud(mo,mu,sd,Oe);var Wn=mo,Ao=function e(i,t,r){Fe(this,e),b(this,"header",void 0),b(this,"info",void 0),b(this,"sections",void 0),this.header=i,this.info=t,this.sections=r},bo=function e(i,t){Fe(this,e),b(this,"version",void 0),b(this,"signature",void 0),this.version=i,this.signature=t},jn=function(){function e(i,t,r,a){Fe(this,e),b(this,"major",void 0),b(this,"minor",void 0),b(this,"build",void 0),b(this,"revision",void 0),this.major=i,this.minor=t,this.build=r,this.revision=a}return nt(e,[{key:"isCompatible",value:function(t){return this.major===t.major&&this.minor<=t.minor}},{key:"gte",value:function(t){return this.major>t.major?!0:this.major<t.major?!1:this.minor>t.minor?!0:this.minor<t.minor?!1:this.build>t.build?!0:this.build<t.build?!1:this.revision>=t.revision}},{key:"toString",value:function(){return"".concat(this.major,".").concat(this.minor,".").concat(this.build,".").concat(this.revision)}},{key:"toJSON",value:function(){return this.toString()}}]),e}(),Cn;(function(e){e[e.None=0]="None",e[e.Single=1]="Single",e[e.Image=2]="Image",e[e.Gradation=4]="Gradation"})(Cn||(Cn={}));var dd=Cn,ce=16,Jt;(function(e){e[e.HWPTAG_DOCUMENT_PROPERTIES=ce]="HWPTAG_DOCUMENT_PROPERTIES",e[e.HWPTAG_ID_MAPPINGS=ce+1]="HWPTAG_ID_MAPPINGS",e[e.HWPTAG_BIN_DATA=ce+2]="HWPTAG_BIN_DATA",e[e.HWPTAG_FACE_NAME=ce+3]="HWPTAG_FACE_NAME",e[e.HWPTAG_BORDER_FILL=ce+4]="HWPTAG_BORDER_FILL",e[e.HWPTAG_CHAR_SHAPE=ce+5]="HWPTAG_CHAR_SHAPE",e[e.HWPTAG_TAB_DEF=ce+6]="HWPTAG_TAB_DEF",e[e.HWPTAG_NUMBERING=ce+7]="HWPTAG_NUMBERING",e[e.HWPTAG_BULLET=ce+8]="HWPTAG_BULLET",e[e.HWPTAG_PARA_SHAPE=ce+9]="HWPTAG_PARA_SHAPE",e[e.HWPTAG_STYLE=ce+10]="HWPTAG_STYLE",e[e.HWPTAG_DOC_DATA=ce+11]="HWPTAG_DOC_DATA",e[e.HWPTAG_DISTRIBUTE_DOC_DATA=ce+12]="HWPTAG_DISTRIBUTE_DOC_DATA",e[e.RESERVED=ce+13]="RESERVED",e[e.HWPTAG_COMPATIBLE_DOCUMENT=ce+14]="HWPTAG_COMPATIBLE_DOCUMENT",e[e.HWPTAG_LAYOUT_COMPATIBILITY=ce+15]="HWPTAG_LAYOUT_COMPATIBILITY",e[e.HWPTAG_TRACKCHANGE=ce+16]="HWPTAG_TRACKCHANGE",e[e.HWPTAG_MEMO_SHAPE=ce+76]="HWPTAG_MEMO_SHAPE",e[e.HWPTAG_FORBIDDEN_CHAR=ce+78]="HWPTAG_FORBIDDEN_CHAR",e[e.HWPTAG_TRACK_CHANGE=ce+80]="HWPTAG_TRACK_CHANGE",e[e.HWPTAG_TRACK_CHANGE_AUTHOR=ce+81]="HWPTAG_TRACK_CHANGE_AUTHOR"})(Jt||(Jt={}));var ot;(function(e){e[e.HWPTAG_PARA_HEADER=ce+50]="HWPTAG_PARA_HEADER",e[e.HWPTAG_PARA_TEXT=ce+51]="HWPTAG_PARA_TEXT",e[e.HWPTAG_PARA_CHAR_SHAPE=ce+52]="HWPTAG_PARA_CHAR_SHAPE",e[e.HWPTAG_PARA_LINE_SEG=ce+53]="HWPTAG_PARA_LINE_SEG",e[e.HWPTAG_PARA_RANGE_TAG=ce+54]="HWPTAG_PARA_RANGE_TAG",e[e.HWPTAG_CTRL_HEADER=ce+55]="HWPTAG_CTRL_HEADER",e[e.HWPTAG_LIST_HEADER=ce+56]="HWPTAG_LIST_HEADER",e[e.HWPTAG_PAGE_DEF=ce+57]="HWPTAG_PAGE_DEF",e[e.HWPTAG_FOOTNOTE_SHAPE=ce+58]="HWPTAG_FOOTNOTE_SHAPE",e[e.HWPTAG_PAGE_BORDER_FILL=ce+59]="HWPTAG_PAGE_BORDER_FILL",e[e.HWPTAG_SHAPE_COMPONENT=ce+60]="HWPTAG_SHAPE_COMPONENT",e[e.HWPTAG_TABLE=ce+61]="HWPTAG_TABLE",e[e.HWPTAG_SHAPE_COMPONENT_LINE=ce+62]="HWPTAG_SHAPE_COMPONENT_LINE",e[e.HWPTAG_SHAPE_COMPONENT_RECTANGLE=ce+63]="HWPTAG_SHAPE_COMPONENT_RECTANGLE",e[e.HWPTAG_SHAPE_COMPONENT_ELLIPSE=ce+64]="HWPTAG_SHAPE_COMPONENT_ELLIPSE",e[e.HWPTAG_SHAPE_COMPONENT_ARC=ce+65]="HWPTAG_SHAPE_COMPONENT_ARC",e[e.HWPTAG_SHAPE_COMPONENT_POLYGON=ce+66]="HWPTAG_SHAPE_COMPONENT_POLYGON",e[e.HWPTAG_SHAPE_COMPONENT_CURVE=ce+67]="HWPTAG_SHAPE_COMPONENT_CURVE",e[e.HWPTAG_SHAPE_COMPONENT_OLE=ce+68]="HWPTAG_SHAPE_COMPONENT_OLE",e[e.HWPTAG_SHAPE_COMPONENT_PICTURE=ce+69]="HWPTAG_SHAPE_COMPONENT_PICTURE",e[e.HWPTAG_SHAPE_COMPONENT_CONTAINER=ce+70]="HWPTAG_SHAPE_COMPONENT_CONTAINER",e[e.HWPTAG_CTRL_DATA=ce+71]="HWPTAG_CTRL_DATA",e[e.HWPTAG_EQEDIT=ce+72]="HWPTAG_EQEDIT",e[e.RESERVED=ce+73]="RESERVED",e[e.HWPTAG_SHAPE_COMPONENT_TEXTART=ce+74]="HWPTAG_SHAPE_COMPONENT_TEXTART",e[e.HWPTAG_FORM_OBJECT=ce+75]="HWPTAG_FORM_OBJECT",e[e.HWPTAG_MEMO_SHAPE=ce+76]="HWPTAG_MEMO_SHAPE",e[e.HWPTAG_MEMO_LIST=ce+77]="HWPTAG_MEMO_LIST",e[e.HWPTAG_CHART_DATA=ce+79]="HWPTAG_CHART_DATA",e[e.HWPTAG_VIDEO_DATA=ce+82]="HWPTAG_VIDEO_DATA",e[e.HWPTAG_SHAPE_COMPONENT_UNKNOWN=ce+99]="HWPTAG_SHAPE_COMPONENT_UNKNOWN"})(ot||(ot={}));var _d=function e(i,t){Fe(this,e),b(this,"extension",void 0),b(this,"payload",void 0),this.extension=i,this.payload=t},Ve=function(){function e(i){Fe(this,e),b(this,"view",void 0),b(this,"offsetByte",0),this.view=new DataView(i)}return nt(e,[{key:"readUInt32",value:function(){var t=this.view.getUint32(this.offsetByte,!0);return this.offsetByte+=4,t}},{key:"readInt32",value:function(){var t=this.view.getInt32(this.offsetByte,!0);return this.offsetByte+=4,t}},{key:"readInt16",value:function(){var t=this.view.getUint16(this.offsetByte,!0);return this.offsetByte+=2,t}},{key:"readUInt16",value:function(){var t=this.view.getUint16(this.offsetByte,!0);return this.offsetByte+=2,t}},{key:"readInt8",value:function(){var t=this.view.getInt8(this.offsetByte);return this.offsetByte+=1,t}},{key:"readUInt8",value:function(){var t=this.view.getUint8(this.offsetByte);return this.offsetByte+=1,t}},{key:"readRecord",value:function(){var t=this.readUInt32(),r=t&1023,a=t>>10&1023,n=t>>20&4095;return n===4095?[r,a,this.readUInt32()]:[r,a,n]}},{key:"read",value:function(t){var r=this.view.buffer.slice(this.offsetByte,this.offsetByte+t);return this.offsetByte+=t,r}},{key:"readString",value:function(){for(var t=this.readUInt16(),r=[],a=0;a<t;a+=1)r.push(String.fromCharCode(this.readUInt16()));return r.join("")}},{key:"remainByte",value:function(){return this.view.byteLength-this.offsetByte}},{key:"skipByte",value:function(t){this.offsetByte+=t}},{key:"isEOF",value:function(){return this.view.byteLength<=this.offsetByte}}]),e}();function Ct(e,i,t){for(var r=e>>i,a=0,n=0;n<=t-i;n+=1)a<<=1,a+=1;return r&a}function st(e){return[Ct(e,0,7),Ct(e,8,15),Ct(e,16,23)]}function ba(e,i){var t=1<<i;return(e&t)===t}var cd=function e(i,t,r,a,n,f,h,y,o,l,L,A,m){Fe(this,e),b(this,"fontId",void 0),b(this,"fontScale",void 0),b(this,"fontSpacing",void 0),b(this,"fontRatio",void 0),b(this,"fontLocation",void 0),b(this,"fontBaseSize",void 0),b(this,"attr",void 0),b(this,"shadow",void 0),b(this,"shadow2",void 0),b(this,"color",void 0),b(this,"underLineColor",void 0),b(this,"shadeColor",void 0),b(this,"shadowColor",void 0),b(this,"fontBackgroundId",null),b(this,"strikeColor",null),this.fontId=i,this.fontScale=t,this.fontSpacing=r,this.fontRatio=a,this.fontLocation=n,this.fontBaseSize=f/100,this.attr=h,this.shadow=st(y),this.shadow2=st(o),this.color=st(l),this.underLineColor=st(L),this.shadeColor=st(A),this.shadowColor=st(m)},vd=function e(){Fe(this,e),b(this,"page",0),b(this,"footnote",0),b(this,"endnote",0),b(this,"picture",0),b(this,"table",0),b(this,"equation",0)},wd=function e(){Fe(this,e),b(this,"listId",0),b(this,"paragraphId",0),b(this,"charIndex",0)},So=function(){function e(){Fe(this,e),b(this,"sectionSize",0),b(this,"charShapes",[]),b(this,"fontFaces",[]),b(this,"binData",[]),b(this,"borderFills",[]),b(this,"paragraphShapes",[]),b(this,"startingIndex",new vd),b(this,"caratLocation",new wd)}return nt(e,[{key:"getCharShpe",value:function(t){return this.charShapes[t]}}]),e}(),pd=function(){function e(){Fe(this,e),b(this,"name",""),b(this,"alternative",""),b(this,"default",""),b(this,"panose",null)}return nt(e,[{key:"getFontFamily",value:function(){var t=["".concat(this.name)];if(this.alternative&&t.push('"'.concat(this.alternative,'"')),this.default&&t.push('"'.concat(this.default,'"')),this.panose){var r=this.panose.getFontFamily();t.push(r)}return t.join(",")}}]),e}(),gd=function e(){Fe(this,e),b(this,"align",0)},xd=function e(i,t){Fe(this,e),b(this,"attribute",void 0),b(this,"style",void 0),b(this,"backgroundColor",null),this.attribute=i,this.style=t},yd=function(){function e(){Fe(this,e),b(this,"family",0),b(this,"serifStyle",0),b(this,"weight",0),b(this,"proportion",0),b(this,"contrast",0),b(this,"strokeVariation",0),b(this,"armStyle",0),b(this,"letterForm",0),b(this,"midline",0),b(this,"xHeight",0)}return nt(e,[{key:"getFontFamily",value:function(){if(this.family===3)return"cursive";if(this.family===2){if(this.serifStyle>1&&this.serifStyle<11)return"sans";if(this.serifStyle>10&&this.serifStyle<14)return"sans-serf"}return""}}]),e}(),kd=new ArrayBuffer(0),Th=function e(i,t,r){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:kd;Fe(this,e),b(this,"children",[]),b(this,"payload",void 0),b(this,"tagID",void 0),b(this,"size",void 0),b(this,"parentTagID",void 0),this.tagID=i,this.size=t,this.parentTagID=r,this.payload=a};function Fo(e){for(var i=new Ve(e.buffer),t=new Th(0,0,0);!i.isEOF();){for(var r=i.readRecord(),a=Ln(r,3),n=a[0],f=a[1],h=a[2],y=t,o=i.read(h),l=0;l<f;l+=1)y=y.children.slice(-1).pop();y.children.push(new Th(n,h,y.tagID,o))}return t}var Ed=function(){function e(i,t){var r=this;Fe(this,e),b(this,"record",void 0),b(this,"result",new So),b(this,"container",void 0),b(this,"visit",function(a){switch(a.tagID){case Jt.HWPTAG_DOCUMENT_PROPERTIES:{r.visitDocumentPropertes(a);break}case Jt.HWPTAG_CHAR_SHAPE:{r.visitCharShape(a);break}case Jt.HWPTAG_FACE_NAME:{r.visitFaceName(a);break}case Jt.HWPTAG_BIN_DATA:{r.visitBinData(a);break}case Jt.HWPTAG_BORDER_FILL:{r.visitBorderFill(a);break}case Jt.HWPTAG_PARA_SHAPE:{r.visitParagraphShape(a);break}}a.children.forEach(r.visit)}),this.record=Fo(i),this.container=t}return nt(e,[{key:"visitDocumentPropertes",value:function(t){var r=new Ve(t.payload);this.result.sectionSize=r.readUInt16(),this.result.startingIndex.page=r.readUInt16(),this.result.startingIndex.footnote=r.readUInt16(),this.result.startingIndex.endnote=r.readUInt16(),this.result.startingIndex.picture=r.readUInt16(),this.result.startingIndex.table=r.readUInt16(),this.result.startingIndex.equation=r.readUInt16(),this.result.caratLocation.listId=r.readUInt32(),this.result.caratLocation.paragraphId=r.readUInt32(),this.result.caratLocation.charIndex=r.readUInt32()}},{key:"visitCharShape",value:function(t){var r=new Ve(t.payload),a=new cd([r.readUInt16(),r.readUInt16(),r.readUInt16(),r.readUInt16(),r.readUInt16(),r.readUInt16(),r.readUInt16()],[r.readUInt8(),r.readUInt8(),r.readUInt8(),r.readUInt8(),r.readUInt8(),r.readUInt8(),r.readUInt8()],[r.readInt8(),r.readInt8(),r.readInt8(),r.readInt8(),r.readInt8(),r.readInt8(),r.readInt8()],[r.readUInt8(),r.readUInt8(),r.readUInt8(),r.readUInt8(),r.readUInt8(),r.readUInt8(),r.readUInt8()],[r.readInt8(),r.readInt8(),r.readInt8(),r.readInt8(),r.readInt8(),r.readInt8(),r.readInt8()],r.readInt32(),r.readUInt32(),r.readUInt8(),r.readUInt8(),r.readUInt32(),r.readUInt32(),r.readUInt32(),r.readUInt32());t.size>68&&(a.fontBackgroundId=r.readUInt16()),t.size>70&&(a.underLineColor=st(r.readInt32())),this.result.charShapes.push(a)}},{key:"visitFaceName",value:function(t){var r=new Ve(t.payload),a=r.readUInt8(),n=ba(a,7),f=ba(a,6),h=ba(a,5),y=new pd;if(y.name=r.readString(),n&&(r.skipByte(1),y.alternative=r.readString()),f){var o=new yd;o.family=r.readInt8(),o.serifStyle=r.readInt8(),o.weight=r.readInt8(),o.proportion=r.readInt8(),o.contrast=r.readInt8(),o.strokeVariation=r.readInt8(),o.armStyle=r.readInt8(),o.letterForm=r.readInt8(),o.midline=r.readInt8(),o.xHeight=r.readInt8(),y.panose=o}h&&(y.default=r.readString()),this.result.fontFaces.push(y)}},{key:"visitBinData",value:function(t){var r=new Ve(t.payload);r.readUInt16();var a=r.readUInt16(),n=r.readString(),f="Root Entry/BinData/BIN".concat("".concat(a.toString(16).toUpperCase()).padStart(4,"0"),".").concat(n),h=Ci.find(this.container,f).content;this.result.binData.push(new _d(n,Wn.inflate(h,{windowBits:-15})))}},{key:"visitBorderFill",value:function(t){var r=new Ve(t.payload),a=new xd(r.readUInt16(),{left:{type:r.readUInt8(),width:r.readUInt8(),color:st(r.readUInt32())},right:{type:r.readUInt8(),width:r.readUInt8(),color:st(r.readUInt32())},top:{type:r.readUInt8(),width:r.readUInt8(),color:st(r.readUInt32())},bottom:{type:r.readUInt8(),width:r.readUInt8(),color:st(r.readUInt32())}});r.skipByte(6),r.readUInt32()===dd.Single&&(a.backgroundColor=st(r.readUInt32())),this.result.borderFills.push(a)}},{key:"visitParagraphShape",value:function(t){var r=new Ve(t.payload),a=r.readUInt32(),n=new gd;n.align=Ct(a,2,4),this.result.paragraphShapes.push(n)}},{key:"parse",value:function(){return this.record.children.forEach(this.visit),this.result}}]),e}();function ue(e,i,t,r){var a=e.charCodeAt(0),n=i.charCodeAt(0),f=t.charCodeAt(0),h=r.charCodeAt(0);return a<<24|n<<16|f<<8|h}var Et;(function(e){e[e.Table=ue("t","b","l"," ")]="Table",e[e.Line=ue("$","l","i","n")]="Line",e[e.Rectangle=ue("$","r","e","c")]="Rectangle",e[e.Ellipse=ue("$","e","l","l")]="Ellipse",e[e.Arc=ue("$","a","r","c")]="Arc",e[e.Polygon=ue("$","p","o","l")]="Polygon",e[e.Curve=ue("$","c","u","r")]="Curve",e[e.Equation=ue("e","q","e","d")]="Equation",e[e.Picture=ue("$","p","i","c")]="Picture",e[e.OLE=ue("$","o","l","e")]="OLE",e[e.Connected=ue("$","c","o","n")]="Connected",e[e.GenShapeObject=ue("g","s","o"," ")]="GenShapeObject"})(Et||(Et={}));var In;(function(e){e[e.Section=ue("s","e","c","d")]="Section",e[e.Column=ue("c","o","l","d")]="Column",e[e.Header=ue("h","e","a","d")]="Header",e[e.Footer=ue("f","o","o","t")]="Footer",e[e.Footnote=ue("f","n"," "," ")]="Footnote",e[e.Endnote=ue("e","n"," "," ")]="Endnote",e[e.AutoNumber=ue("a","t","n","o")]="AutoNumber",e[e.NewNumber=ue("n","w","n","o")]="NewNumber",e[e.PageHide=ue("p","g","h","d")]="PageHide",e[e.PageCT=ue("p","g","c","t")]="PageCT",e[e.PageNumberPosition=ue("p","g","n","p")]="PageNumberPosition",e[e.Indexmark=ue("i","d","x","m")]="Indexmark",e[e.Bookmark=ue("b","o","k","m")]="Bookmark",e[e.Overlapping=ue("t","c","p","s")]="Overlapping",e[e.Comment=ue("t","d","u","t")]="Comment",e[e.HiddenComment=ue("t","c","m","t")]="HiddenComment"})(In||(In={}));var Ph;(function(e){e[e.Unknown=ue("%","u","n","k")]="Unknown",e[e.Date=ue("$","d","t","e")]="Date",e[e.DocDate=ue("%","d","d","t")]="DocDate",e[e.Path=ue("%","p","a","t")]="Path",e[e.Bookmark=ue("%","b","m","k")]="Bookmark",e[e.MailMerge=ue("%","m","m","g")]="MailMerge",e[e.CrossRef=ue("%","x","r","f")]="CrossRef",e[e.Formula=ue("%","f","m","u")]="Formula",e[e.ClickHere=ue("%","c","l","k")]="ClickHere",e[e.Summary=ue("$","s","m","r")]="Summary",e[e.UserInfo=ue("%","u","s","r")]="UserInfo",e[e.HyperLink=ue("%","h","l","k")]="HyperLink",e[e.RevisionSign=ue("%","s","i","g")]="RevisionSign",e[e.RevisionDelete=ue("%","%","*","d")]="RevisionDelete",e[e.RevisionAttach=ue("%","%","*","a")]="RevisionAttach",e[e.RevisionClipping=ue("%","%","*","C")]="RevisionClipping",e[e.RevisionSawtooth=ue("%","%","*","S")]="RevisionSawtooth",e[e.RevisionThinking=ue("%","%","*","T")]="RevisionThinking",e[e.RevisionPraise=ue("%","%","*","P")]="RevisionPraise",e[e.RevisionLine=ue("%","%","*","L")]="RevisionLine",e[e.RevisionSimpleChange=ue("%","%","*","c")]="RevisionSimpleChange",e[e.RevisionHyperLink=ue("%","%","*","h")]="RevisionHyperLink",e[e.RevisionLineAttach=ue("%","%","*","A")]="RevisionLineAttach",e[e.RevisionLineLink=ue("%","%","*","i")]="RevisionLineLink",e[e.RevisionLineRansfer=ue("%","%","*","t")]="RevisionLineRansfer",e[e.RevisionRightMove=ue("%","%","*","r")]="RevisionRightMove",e[e.RevisionLeftMove=ue("%","%","*","l")]="RevisionLeftMove",e[e.RevisionTransfer=ue("%","%","*","n")]="RevisionTransfer",e[e.RevisionSimpleInsert=ue("%","%","*","e")]="RevisionSimpleInsert",e[e.RevisionSplit=ue("%","s","p","l")]="RevisionSplit",e[e.RevisionChange=ue("%","%","m","r")]="RevisionChange",e[e.Memo=ue("%","%","m","e")]="Memo",e[e.PrivateInfoSecurity=ue("%","c","p","r")]="PrivateInfoSecurity",e[e.TableOfContents=ue("%","t","o","c")]="TableOfContents"})(Ph||(Ph={}));var md=function e(){Fe(this,e),b(this,"vertRelTo",0)},To=function(){function e(){Fe(this,e),b(this,"id",0),b(this,"attribute",new md),b(this,"verticalOffset",0),b(this,"horizontalOffset",0),b(this,"width",0),b(this,"height",0),b(this,"zIndex",0),b(this,"margin",[0,0,0,0]),b(this,"uid",0),b(this,"split",0)}return nt(e,[{key:"setAttribute",value:function(t){this.attribute.vertRelTo=Ct(t,3,4)}}]),e}(),Ad=function(e){Nh(t,e);var i=Oh(t);function t(){var r;Fe(this,t);for(var a=arguments.length,n=new Array(a),f=0;f<a;f++)n[f]=arguments[f];return r=i.call.apply(i,[this].concat(n)),b(Dt(r),"type",0),b(Dt(r),"info",null),b(Dt(r),"content",[]),r}return t}(To),Po=function(e){Nh(t,e);var i=Oh(t);function t(){var r;Fe(this,t);for(var a=arguments.length,n=new Array(a),f=0;f<a;f++)n[f]=arguments[f];return r=i.call.apply(i,[this].concat(n)),b(Dt(r),"tableAttribute",0),b(Dt(r),"rowCount",0),b(Dt(r),"columnCount",0),b(Dt(r),"borderFillID",0),b(Dt(r),"content",[]),r}return nt(t,[{key:"addRow",value:function(a,n){this.content[a]||(this.content[a]=[]),this.content[a].push(n)}}]),t}(To),Ro=function e(){Fe(this,e),b(this,"width",0),b(this,"height",0),b(this,"paddingLeft",0),b(this,"paddingRight",0),b(this,"paddingTop",0),b(this,"paddingBottom",0),b(this,"headerPadding",0),b(this,"footerPadding",0),b(this,"content",[]),b(this,"orientation",0),b(this,"bookBindingMethod",0)},Sa=function(){function e(){Fe(this,e),b(this,"content",[]),b(this,"shapeBuffer",[]),b(this,"controls",[]),b(this,"lineSegments",[]),b(this,"shapeIndex",0),b(this,"aligns",0),b(this,"textSize",0)}return nt(e,[{key:"getShapeEndPos",value:function(t){return t===this.shapeBuffer.length-1?this.content.length-1:this.shapeBuffer[t+1].pos-1}},{key:"getNextSize",value:function(t){var r=this.lineSegments[t+1];return r?r.start:this.textSize}}]),e}(),Bn=function e(i,t){Fe(this,e),b(this,"attribute",void 0),b(this,"items",[]),this.attribute=i,this.items=t},Wt;(function(e){e[e.Char=0]="Char",e[e.Inline=1]="Inline",e[e.Extened=2]="Extened"})(Wt||(Wt={}));var ca=function e(i,t){Fe(this,e),b(this,"type",void 0),b(this,"value",void 0),this.type=i,this.value=t},bd=function e(i,t){Fe(this,e),b(this,"pos",0),b(this,"shapeIndex",0),this.pos=i,this.shapeIndex=t},Sd=function e(){Fe(this,e),b(this,"start",0),b(this,"y",0),b(this,"height",0),b(this,"textHeight",0),b(this,"baseLineGap",0),b(this,"lineSpacing",0),b(this,"startByte",0),b(this,"width",0)},va=function(){function e(i){Fe(this,e),b(this,"cursor",void 0),b(this,"records",void 0),this.records=i,this.cursor=0}return nt(e,[{key:"hasNext",value:function(){return this.cursor<this.records.length}},{key:"current",value:function(){return this.records[this.cursor]}},{key:"read",value:function(){var t=this.records[this.cursor];return this.cursor+=1,t}}]),e}();function $n(e){return e.id===Et.Table}function Hn(e){return e.id===Et.GenShapeObject}function Fd(e){return e.type===Et.Picture}var Nn;(function(e){e[e.Normal=0]="Normal",e[e.Parallel=1]="Parallel",e[e.Justify=2]="Justify"})(Nn||(Nn={}));var On;(function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Justify=2]="Justify"})(On||(On={}));var Td=function e(){Fe(this,e),b(this,"id",0),b(this,"type",Nn.Normal),b(this,"count",0),b(this,"direction",On.Left),b(this,"isSameWidth",!0),b(this,"gap",0),b(this,"widths",[]),b(this,"borderStyle",0),b(this,"borderWidth",0),b(this,"borderColor",0)},Pd=function(){function e(i){Fe(this,e),b(this,"record",void 0),b(this,"result",void 0),b(this,"content",[]),this.record=Fo(i),this.result=new Ro}return nt(e,[{key:"visitPageDef",value:function(t){var r=new Ve(t.payload);this.result.width=r.readUInt32(),this.result.height=r.readUInt32(),this.result.paddingLeft=r.readUInt32(),this.result.paddingRight=r.readUInt32(),this.result.paddingTop=r.readUInt32(),this.result.paddingBottom=r.readUInt32(),this.result.headerPadding=r.readUInt32(),this.result.footerPadding=r.readUInt32();var a=r.readUInt32();this.result.orientation=Ct(a,0,0),this.result.bookBindingMethod=Ct(a,1,2)}},{key:"visitParaText",value:function(t,r){for(var a=new Ve(t.payload),n=0;n<t.size;){var f=a.readUInt16();switch(f){case 0:case 10:case 13:{r.content.push(new ca(Wt.Char,f)),r.textSize+=1,n+=2;break}case 4:case 5:case 6:case 7:case 8:case 9:case 19:case 20:{r.content.push(new ca(Wt.Inline,f)),r.textSize+=8,a.skipByte(14),n+=16;break}case 1:case 2:case 3:case 11:case 12:case 14:case 15:case 16:case 17:case 18:case 21:case 22:case 23:{r.content.push(new ca(Wt.Extened,f)),a.skipByte(14),r.textSize+=8,n+=16;break}default:r.content.push(new ca(Wt.Char,String.fromCharCode(f))),r.textSize+=1,n+=2}}}},{key:"visitCharShape",value:function(t,r){var a=new Ve(t.payload),n=new bd(a.readUInt32(),a.readUInt32());r.shapeBuffer.push(n)}},{key:"visitCommonControl",value:function(t,r){r.setAttribute(t.readUInt32()),r.verticalOffset=t.readUInt32(),r.horizontalOffset=t.readUInt32(),r.width=t.readUInt32(),r.height=t.readUInt32(),r.zIndex=t.readUInt32(),r.margin=[t.readInt16(),t.readInt16(),t.readInt16(),t.readInt16()],r.uid=t.readUInt32(),r.split=t.readInt32()}},{key:"visitTableControl",value:function(t){var r=new Po;return r.id=Et.Table,this.visitCommonControl(t,r),r}},{key:"getControl",value:function(t){var r=t.readUInt32();if(r===Et.Table)return this.visitTableControl(t);if(r===Et.GenShapeObject){var a=new Ad;return a.id=r,this.visitCommonControl(t,a),a}if(r===In.Column){var n=new Td,f=t.readUInt16();if(n.type=Ct(f,0,1),n.count=Ct(f,2,9),n.direction=Ct(f,10,11),n.isSameWidth=ba(f,12),n.id=r,n.gap=t.readUInt16(),!n.isSameWidth){for(var h=[],y=0;y<n.count;y+=1)h.push(t.readUInt16());n.widths=h}return t.readUInt16(),n.borderStyle=t.readUInt8(),n.borderWidth=t.readUInt8(),n.borderColor=t.readUInt32(),n}return{id:r}}},{key:"visitControlHeader",value:function(t,r){for(var a=new Ve(t.payload),n=this.getControl(a),f=new va(t.children);f.hasNext();)this.visit(f,r,n);r.controls.push(n)}},{key:"visitCellListHeader",value:function(t){var r={column:t.readUInt16(),row:t.readUInt16(),colSpan:t.readUInt16(),rowSpan:t.readUInt16(),width:t.readUInt32(),height:t.readUInt32(),padding:[t.readUInt16(),t.readUInt16(),t.readUInt16(),t.readUInt16()]};return t.isEOF()||(r.borderFillID=t.readUInt16()-1),r}},{key:"visitListHeader",value:function(t,r,a){a||(a={id:0,content:[]});var n=new Ve(t.payload),f=t.size===30?n.readInt16():n.readInt32();n.readUInt32();for(var h=[],y=0;y<f;y+=1){var o=r.read();this.visitParagraphHeader(o,h,a)}if(t.parentTagID===ot.HWPTAG_CTRL_HEADER&&$n(a)){var l=this.visitCellListHeader(n),L=new Bn(l,h);a.addRow(l.row,L)}t.parentTagID===ot.HWPTAG_SHAPE_COMPONENT&&Hn(a)&&a.content.push(new Bn(null,h))}},{key:"visitTable",value:function(t,r){var a=new Ve(t.payload);!r||r.id!==Et.Table||(r.tableAttribute=a.readUInt32(),r.rowCount=a.readUInt16(),r.columnCount=a.readUInt16(),a.skipByte(10+2*r.rowCount),r.borderFillID=a.readUInt16())}},{key:"visitShapeComponent",value:function(t,r,a){for(var n=new va(t.children);n.hasNext();)this.visit(n,r,a)}},{key:"visitPicture",value:function(t,r){if(Hn(r)){var a=new Ve(t.payload);a.skipByte(4*17+3),r.type=Et.Picture,r.info={binID:a.readUInt16()-1}}}},{key:"visitLineSegment",value:function(t,r){for(var a=new Ve(t.payload);!a.isEOF();){var n=new Sd;n.start=a.readUInt32(),n.y=a.readInt32(),n.height=a.readInt32(),n.textHeight=a.readInt32(),n.baseLineGap=a.readInt32(),n.lineSpacing=a.readInt32(),n.startByte=a.readInt32(),n.width=a.readInt32(),a.readUInt32(),r.lineSegments.push(n)}}},{key:"visit",value:function(t,r,a){var n=t.read();try{switch(n.tagID){case ot.HWPTAG_LIST_HEADER:{this.visitListHeader(n,t,a);break}case ot.HWPTAG_PAGE_DEF:{this.visitPageDef(n);break}case ot.HWPTAG_PARA_TEXT:{this.visitParaText(n,r);break}case ot.HWPTAG_PARA_CHAR_SHAPE:{this.visitCharShape(n,r);break}case ot.HWPTAG_CTRL_HEADER:{this.visitControlHeader(n,r);break}case ot.HWPTAG_TABLE:{this.visitTable(n,a);break}case ot.HWPTAG_SHAPE_COMPONENT:{this.visitShapeComponent(n,r,a);break}case ot.HWPTAG_SHAPE_COMPONENT_PICTURE:{this.visitPicture(n,a);break}case ot.HWPTAG_PARA_LINE_SEG:{this.visitLineSegment(n,r);break}}}catch(f){typeof console<"u"&&console.warn("hwp.js skip record",n&&n.tagID,f&&f.message)}}},{key:"visitParagraphHeader",value:function(t,r,a){var n=new Sa,f=new Ve(t.payload);f.skipByte(8),n.shapeIndex=f.readUInt16();for(var h=new va(t.children);h.hasNext();)this.visit(h,n,a);r.push(n)}},{key:"traverse",value:function(t){for(var r=new va(t.children);r.hasNext();)this.visitParagraphHeader(r.read(),this.content)}},{key:"parse",value:function(){return this.traverse(this.record),this.result.content=this.content,this.result}}]),e}(),Rh=256,Ch=new jn(5,1,0,0),Ih="HWP Document File";function Rd(e){var i=Ci.find(e,"FileHeader");if(!i)throw new Error("Cannot find FileHeader");var t=i.content;if(t.length!==Rh)throw new Error("FileHeader must be ".concat(Rh," bytes, Received: ").concat(t.length));var r=String.fromCharCode.apply(String,Ta(Array.from(t.slice(0,17))));if(Ih!==r)throw new Error("hwp file's signature should be ".concat(Ih,". Received version: ").concat(r));var a=Array.from(t.slice(32,36)).reverse(),n=Ln(a,4),f=n[0],h=n[1],y=n[2],o=n[3],l=new jn(f,h,y,o);if(!l.isCompatible(Ch))throw new Error("hwp.js only support ".concat(Ch," format. Received version: ").concat(l));return new bo(l,r)}function Cd(e){var i=Ci.find(e,"DocInfo");if(!i)throw new Error("DocInfo not exist");var t=i.content,r=Wn.inflate(t,{windowBits:-15});return new Ed(r,e).parse()}function Id(e,i){var t=Ci.find(e,"Root Entry/BodyText/Section".concat(i));if(!t)throw new Error("Section not exist");var r=t.content,a=Wn.inflate(r,{windowBits:-15});return new Pd(a).parse()}function Kn(e,i){for(var t=Ci.read(e,i),r=Rd(t),a=Cd(t),n=[],f=0;f<a.sectionSize;f+=1)n.push(Id(t,f));return new Ao(r,a,n)}function Co(e,i,t,r){for(var a=t,n=0,f=-1,h=i,y=[],o=[],l=0;l<e.length;l+=1){var L=e[l],A=Math.min.apply(Math,Ta(L.map(function(M){return M.attribute.height})));if(o.push(A),n+=A,a>=n)y.push(L);else{f=l;break}}for(var m=0;m<h.length;m+=1){var j=y[0],D=h[m];D&&j.splice(D.attribute.column,0,D)}if(h=[],y.forEach(function(M,fe){M.forEach(function(ee){if(ee.attribute.height>a){var Q=ee.attribute.height,B=ee.attribute.rowSpan,ie=B-(f-fe-2);ee.attribute.height=a,ee.attribute.rowSpan=ie,h[ee.attribute.column]=new Bn(Mf(Mf({},ee.attribute),{},{row:0,height:Q-a,rowSpan:B-ie}),[])}}),a-=o[fe]}),f<0)return[y];var q=Co(e.slice(f),h,r,r);return[y].concat(Ta(q))}var Bd=function(){function e(i){var t=this;Fe(this,e),b(this,"section",void 0),b(this,"currentSection",void 0),b(this,"currentParagraph",new Sa),b(this,"readIndex",0),b(this,"contentHeight",0),b(this,"currentHeight",0),b(this,"controlIndex",0),b(this,"startChatIndex",0),b(this,"endCharIndex",0),b(this,"shapeBufferIndex",0),b(this,"latestY",0),b(this,"result",[]),b(this,"visitParagraph",function(r){t.readIndex=0,t.controlIndex=0,t.startChatIndex=0,t.endCharIndex=0,t.shapeBufferIndex=0,t.currentParagraph=new Sa,r.lineSegments.forEach(function(a,n){t.visitLine(a,n,r)}),t.exitParagraph(r)}),this.section=i,this.currentSection=this.createSection(),this.contentHeight=i.height-i.headerPadding-i.footerPadding-i.paddingTop-i.paddingBottom}return nt(e,[{key:"createSection",value:function(){var t=new Ro;return t.width=this.section.width,t.height=this.section.height,t.paddingTop=this.section.paddingTop,t.paddingRight=this.section.paddingRight,t.paddingBottom=this.section.paddingBottom,t.paddingLeft=this.section.paddingLeft,t.headerPadding=this.section.headerPadding,t.footerPadding=this.section.footerPadding,t}},{key:"getLine",value:function(t,r,a){for(var n=t.start,f=a.getNextSize(r),h=[],y=n;y<f;){var o=a.content[this.readIndex];o.type===Wt.Char?y+=1:y+=8,h.push(o),this.readIndex+=1}return h}},{key:"checkoutShpeBuffer",value:function(t){for(var r=t.getShapeEndPos(this.shapeBufferIndex),a=0;this.endCharIndex<=r&&this.shapeBufferIndex<t.shapeBuffer.length-1;){r=t.getShapeEndPos(this.shapeBufferIndex);var n=t.shapeBuffer[this.shapeBufferIndex];this.currentParagraph.shapeBuffer.push({shapeIndex:n.shapeIndex,pos:a}),a+=r-this.startChatIndex-a,this.shapeBufferIndex+=1}var f=t.shapeBuffer[this.shapeBufferIndex];this.currentParagraph.shapeBuffer.push({shapeIndex:f.shapeIndex,pos:a})}},{key:"exitParagraph",value:function(t){this.checkoutShpeBuffer(t),this.currentSection.content.push(this.currentParagraph)}},{key:"exitPage",value:function(t){this.exitParagraph(t),this.result.push(this.currentSection),this.currentSection=this.createSection(),this.currentParagraph=new Sa,this.currentParagraph.shapeIndex=t.shapeIndex,this.currentHeight=0}},{key:"createTable",value:function(t,r){var a=t.reduce(function(f,h){var y=Math.min.apply(Math,Ta(h.map(function(o){return o.attribute.height})));return f+y},0),n=new Po;return n.id=Et.Table,n.width=r,n.height=a,n.content=t,n.rowCount=t.length,n}},{key:"visitLine",value:function(t,r,a){var n=this,f=this.getLine(t,r,a);(t.y===0||t.y<this.latestY)&&(this.exitPage(a),this.startChatIndex=this.endCharIndex,this.currentHeight=0),this.latestY=t.y,this.currentHeight+=t.height+t.lineSpacing,f.forEach(function(h){if(h.type!==Wt.Extened){n.currentParagraph.content.push(h),n.endCharIndex+=1;return}var y=a.controls[n.controlIndex];if(n.controlIndex+=1,!$n(y)){n.currentParagraph.content.push(h),n.currentParagraph.controls.push(y),n.endCharIndex+=1;return}n.currentHeight-=t.height+t.lineSpacing;var o=Co(y.content,[],n.contentHeight-n.currentHeight,n.contentHeight).map(function(l){return n.createTable(l,y.width)});o.forEach(function(l,L){n.currentParagraph.content.push(h),n.currentParagraph.controls.push(l),o.length>1&&L!==o.length-1&&(n.exitPage(a),n.startChatIndex=n.endCharIndex)}),n.currentHeight+=o[o.length-1].height,n.endCharIndex+=1})}},{key:"build",value:function(){return this.section.content.forEach(this.visitParagraph),this.result.shift(),this.result.push(this.currentSection),this.result}}]),e}();function Hd(e){var i=[];return e.sections.forEach(function(t){i=i.concat(new Bd(t).build())}),e.sections=i,e}var wa="hwpjs-pe-no-print",pa="hwpjs-pe-preserve-print",ga="hwpjs-pe-preserve-ancestor",Nd="BODY";function Bh(e,i){var t=e;for(i(t,!0),t=t.parentElement;t&&t.nodeName!==Nd;)i(t,!1),t=t.parentElement}function Hh(e,i){for(var t=e.previousElementSibling;t;)i(t,!1),t=t.previousElementSibling;for(t=e.nextElementSibling;t;)i(t,!1),t=t.nextElementSibling}function Od(e){var i=`
    @page {
      margin: 0;
    }

    @media print {
      html, body {
        width: 100%;
        height: 100%;
        background-color: #FFF;
      }

      .`.concat(wa,` {
        display: none !important;
      }

      .`).concat(ga,` {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        box-shadow: none !important;
        overflow: visible !important;
      }

      .`).concat(ga,` > *  {
        box-shadow: none !important;
        overflow: visible !important;
      }

      .`).concat(pa,` {
        box-shadow: none !important;
        height: 100% !important;
        margin: 0 !important;
      }

      * {
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
    }
  `),t=document.createElement("style");t.type="text/css",t.innerText=i,document.head.appendChild(t);var r=function(h){h.classList.contains(pa)||h.classList.add(wa)},a=function(h,y){h.classList.remove(wa),h.classList.add(pa),y||h.classList.add(ga)},n=function(h){h.classList.remove(wa),h.classList.remove(pa),h.classList.remove(ga)};e.forEach(function(f){Bh(f,function(h,y){a(h,y),Hh(h,r)})}),window.print(),e.forEach(function(f){Bh(f,function(h){n(h),Hh(h,n)})}),t.remove()}var Ld=function(){function e(i,t,r){var a=this;if(Fe(this,e),b(this,"pages",void 0),b(this,"observer",void 0),b(this,"container",void 0),b(this,"content",void 0),b(this,"modal",null),b(this,"pageNumber",null),b(this,"infoButton",null),b(this,"printButton",null),b(this,"handleModalClick",function(h){h.currentTarget===h.target&&a.modal&&(a.modal.style.display="none")}),b(this,"handleInfoButtionClick",function(){a.modal&&(a.modal.style.display="flex")}),b(this,"handlePrintButtionClick",function(){Od(a.pages)}),this.content=t,this.pages=r,this.container=this.drawContainer(i),this.modal=this.drawModal(i),this.observer=new IntersectionObserver(function(h){h.forEach(function(y){if(y.isIntersecting&&y.isIntersecting&&y.target.parentElement){var o=y.target.getAttribute("data-page-number"),l=Number(o)+1;a.updatePageNumber(l)}})},{root:this.content,rootMargin:"0px"}),this.pages.forEach(function(h){a.observer.observe(h.querySelector(".hwpjs-observer"))}),this.draw(),!document.getElementById("hwpjs-header-css")){var n=`
      .hwpjs-header-control {
        transition: background .2s;
      }
      .hwpjs-header-control:hover {
        background: #DDD;
      }
      .hwpjs-header-control:active {
        background: #AAA;
      }
      `,f=document.createElement("style");f.type="text/css",f.id="hwpjs-header-css",f.innerText=n,document.head.appendChild(f)}}return nt(e,[{key:"updatePageNumber",value:function(t){this.pageNumber&&(this.pageNumber.textContent=t.toString())}},{key:"distory",value:function(){var t=this,r,a,n;this.pages.forEach(function(f){t.observer.unobserve(f)}),(r=this.modal)===null||r===void 0||r.removeEventListener("click",this.handleModalClick),this.modal=null,(a=this.infoButton)===null||a===void 0||a.removeEventListener("click",this.handleInfoButtionClick),this.infoButton=null,(n=this.printButton)===null||n===void 0||n.removeEventListener("click",this.handleInfoButtionClick),this.printButton=null,this.pageNumber=null}},{key:"drawContainer",value:function(t){var r=document.createElement("div");r.style.position="absolute",r.style.zIndex="1",r.style.top="0",r.style.right="0",r.style.left="0",r.style.boxShadow="0 1px 3px rgba(204, 204, 204, 1)",r.style.backgroundColor="rgb(249, 249, 250)",r.style.height="32px";var a=document.createElement("div");return a.style.display="flex",a.style.alignItems="center",a.style.height="100%",a.style.margin="0 auto",a.style.maxWidth="1000px",a.style.width="100%",a.style.padding="0 24px",r.appendChild(a),t.appendChild(r),a}},{key:"drawModal",value:function(t){var r=document.createElement("div");r.style.position="absolute",r.style.zIndex="2",r.style.top="0",r.style.right="0",r.style.bottom="0",r.style.left="0",r.style.background="rgba(0, 0, 0, 0.7)",r.style.display="none",r.style.justifyContent="center",r.style.alignItems="center",r.style.cursor="pointer";var a=document.createElement("div");a.style.background="#FFF",a.style.borderRadius="5px",a.style.padding="0 24px",a.style.cursor="initial",a.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";var n=document.createElement("h1"),f=document.createElement("a");f.href="https://github.com/hahnlee/hwp.js",f.textContent="hwp.js",f.target="_blink",f.rel="noopener noreferrer",n.appendChild(f);var h=document.createElement("p");h.textContent="\uBCF8 \uC81C\uD488\uC740 \uD55C\uAE00\uACFC\uCEF4\uD4E8\uD130\uC758 \uD55C/\uAE00 \uBB38\uC11C \uD30C\uC77C(.hwp) \uACF5\uAC1C \uBB38\uC11C\uB97C \uCC38\uACE0\uD558\uC5EC \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.";var y=document.createElement("p");return y.textContent="Copyright 2020 Han Lee <hanlee.dev@gmail.com> and other contributors.",a.appendChild(n),a.appendChild(h),a.appendChild(y),r.appendChild(a),t.appendChild(r),r.addEventListener("click",this.handleModalClick),r}},{key:"drawPageNumber",value:function(){this.pageNumber=document.createElement("span"),this.pageNumber.textContent="1";var t=document.createElement("span");t.textContent="/".concat(this.pages.length,"\uCABD"),this.container.appendChild(this.pageNumber),this.container.appendChild(t)}},{key:"drawInfoIcon",value:function(){var t=document.createElement("div");t.style.marginLeft="10px",t.style.cursor="pointer",t.style.height="100%",t.style.padding="5px",t.classList.add("hwpjs-header-control"),t.innerHTML='<svg width="393" height="394" viewBox="0 0 393 394" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden" style="height: 100%;width: auto;"><defs><clipPath id="hwpjs-header-info"><rect x="463" y="144" width="393" height="394"/></clipPath></defs><g clip-path="url(#--hwpjs-header-info)" transform="translate(-463 -144)"><path d="M640.245 292.076 640.245 471.79 678.755 471.79 678.755 292.076ZM640.245 209.21 640.245 247.602 678.755 247.602 678.755 209.21ZM463 144 856 144 856 537 463 537Z" fill-rule="evenodd"/></g></svg>',t.addEventListener("click",this.handleInfoButtionClick),this.container.appendChild(t),this.infoButton=t}},{key:"drawPrintIcon",value:function(){var t=document.createElement("div");t.style.cursor="pointer",t.style.height="100%",t.style.padding="5px",t.classList.add("hwpjs-header-control"),t.innerHTML='<svg width="284" height="253" viewBox="0 0 284 253" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden" style="height: 100%;width: auto;"><defs><clipPath id="hwpjs-header-print"><rect x="498" y="82" width="284" height="253"/></clipPath></defs><g clip-path="url(#--hwpjs-header-print)" transform="translate(-498 -82)"><rect x="559" y="93" width="162" height="231" stroke="#000000" stroke-width="20" stroke-miterlimit="8" fill="none"/><path d="M756.613 155.95C751.961 155.95 748.189 159.719 748.189 164.368 748.189 169.018 751.961 172.787 756.613 172.787 761.266 172.787 765.038 169.018 765.038 164.368 765.038 159.719 761.266 155.95 756.613 155.95ZM499 140 781 140 781 228.612 781 275 720.698 275 720.698 228.612 559.302 228.612 559.302 275 499 275 499 228.612Z" fill-rule="evenodd"/><path d="M588 286 647.556 286" stroke="#000000" stroke-width="20" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M588 254 670.667 254" stroke="#000000" stroke-width="20" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/></g></svg>',t.style.marginLeft="auto",t.addEventListener("click",this.handlePrintButtionClick),this.container.appendChild(t),this.printButton=t}},{key:"draw",value:function(){this.drawPageNumber(),this.drawPrintIcon(),this.drawInfoIcon()}}]),e}(),xa=["0.1mm","0.12mm","0.15mm","0.2mm","0.25mm","0.3mm","0.4mm","0.5mm","0.6mm","0.7mm","1.0mm","1.5mm","2.0mm","3.0mm","4.0mm","5.0mm"],ya={0:"none",1:"solid",2:"dashed",3:"dotted",8:"double"},zd={0:"justify",1:"left",2:"right",3:"center"},Io=function(){function e(i,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{type:"binary"};Fe(this,e),b(this,"hwpDocument",new Ao(new bo(new jn(5,0,0,0),"HWP Document File"),new So,[])),b(this,"container",void 0),b(this,"viewer",window.document.createElement("div")),b(this,"pages",[]),b(this,"header",null),this.container=i,this.hwpDocument=Hd(Kn(t,r)),this.draw()}return nt(e,[{key:"distory",value:function(){var t,r;this.pages=[],(t=this.header)===null||t===void 0||t.distory(),(r=this.viewer.parentElement)===null||r===void 0||r.removeChild(this.viewer)}},{key:"createPage",value:function(t,r){var a=document.createElement("div");a.style.boxShadow="0 1px 3px 1px rgba(60,64,67,.15)",a.style.backgroundColor="#FFF",a.style.margin="0 auto",a.style.position="relative",a.style.pageBreakAfter="always",a.style.width="".concat(t.width/7200,"in"),a.style.height="".concat(t.height/7200,"in"),a.style.paddingTop="".concat((t.paddingTop+t.headerPadding)/7200,"in"),a.style.paddingRight="".concat(t.paddingRight/7200,"in"),a.style.paddingBottom="".concat(t.paddingBottom/7200,"in"),a.style.paddingLeft="".concat(t.paddingLeft/7200,"in"),a.setAttribute("data-page-number",r.toString());var n=document.createElement("div");return n.style.height="2px",n.style.position="absolute",n.style.width="100%",n.style.top="50%",n.style.left="0",n.classList.add("hwpjs-observer"),n.setAttribute("data-page-number",r.toString()),a.appendChild(n),this.pages.push(a),a}},{key:"getRGBStyle",value:function(t){var r=Ln(t,3),a=r[0],n=r[1],f=r[2];return"rgb(".concat(a,", ").concat(n,", ").concat(f,")")}},{key:"drawViewer",value:function(){this.viewer.style.backgroundColor="#E8EAED",this.viewer.style.position="relative",this.viewer.style.overflow="hidden",this.viewer.style.width="100%",this.viewer.style.height="100%"}},{key:"drawBorderFill",value:function(t,r){if(r!==void 0){var a=this.hwpDocument.info.borderFills[r];t.style.borderTopColor=this.getRGBStyle(a.style.top.color),t.style.borderRightColor=this.getRGBStyle(a.style.right.color),t.style.borderBottomColor=this.getRGBStyle(a.style.bottom.color),t.style.borderLeftColor=this.getRGBStyle(a.style.left.color),t.style.borderTopWidth=xa[a.style.top.width],t.style.borderRightWidth=xa[a.style.right.width],t.style.borderBottomWidth=xa[a.style.bottom.width],t.style.borderLeftWidth=xa[a.style.left.width],t.style.borderTopStyle=ya[a.style.top.type],t.style.borderRightStyle=ya[a.style.right.type],t.style.borderBottomStyle=ya[a.style.bottom.type],t.style.borderLeftStyle=ya[a.style.left.type],a.backgroundColor&&(t.style.backgroundColor=this.getRGBStyle(a.backgroundColor))}}},{key:"drawColumn",value:function(t,r){var a=this,n=document.createElement("td"),f=r.attribute,h=f.width,y=f.height,o=f.colSpan,l=f.rowSpan,L=f.borderFillID;n.style.width="".concat(h/100,"pt"),n.style.height="".concat(y/100,"pt"),n.colSpan=o,n.rowSpan=l,this.drawBorderFill(n,L),r.items.forEach(function(A){a.drawParagraph(n,A)}),t.appendChild(n)}},{key:"drawTable",value:function(t,r){var a=this,n=document.createElement("table");n.style.display="inline-table",n.style.borderCollapse="collapse",n.style.width="".concat(r.width/100,"pt"),n.style.height="".concat(r.height/100,"pt");for(var f=document.createElement("tbody"),h=function(l){var L=document.createElement("tr");r.content[l].forEach(function(A){a.drawColumn(L,A)}),f.appendChild(L)},y=0;y<r.rowCount;y+=1)h(y);n.appendChild(f),t.appendChild(n)}},{key:"drawShape",value:function(t,r){var a=this,n=document.createElement("div");if(n.style.width="".concat(r.width/100,"pt"),n.style.height="".concat(r.height/100,"pt"),r.attribute.vertRelTo===0?(n.style.position="absolute",n.style.top="".concat(r.verticalOffset/100,"pt"),n.style.left="".concat(r.horizontalOffset/100,"pt")):(n.style.marginTop="".concat(r.verticalOffset/100,"pt"),n.style.marginLeft="".concat(r.horizontalOffset/100,"pt")),n.style.zIndex="".concat(r.zIndex),n.style.verticalAlign="middle",n.style.display="inline-block",Fd(r)){var f=this.hwpDocument.info.binData[r.info.binID],h=new Blob([f.payload],{type:"images/".concat(f.extension)}),y=window.URL.createObjectURL(h);n.style.backgroundImage='url("'.concat(y,'")'),n.style.backgroundRepeat="no-repeat",n.style.backgroundPosition="center",n.style.backgroundSize="contain"}r.content.forEach(function(o){o.items.forEach(function(l){a.drawParagraph(n,l)})}),t.appendChild(n)}},{key:"drawControl",value:function(t,r){if($n(r)){this.drawTable(t,r);return}Hn(r)&&this.drawShape(t,r)}},{key:"drawText",value:function(t,r,a,n){var f=this,h=r.content.slice(a.pos,n+1),y=[],o=0;h.forEach(function(ee){if(typeof ee.value=="string"){y.push(ee.value);return}if(ee.type===Wt.Extened){var Q=r.controls[o];o+=1,f.drawControl(t,Q)}ee.value===13&&y.push(`
`)});var l=y.join(""),L=document.createElement("div");L.textContent=l;var A=this.hwpDocument.info.getCharShpe(a.shapeIndex);if(A){var m=A.fontBaseSize,j=A.fontRatio,D=A.color,q=A.fontId,M=m*(j[0]/100);L.style.fontSize="".concat(M,"pt"),L.style.lineBreak="anywhere",L.style.whiteSpace="pre-wrap",L.style.color=this.getRGBStyle(D);var fe=this.hwpDocument.info.fontFaces[q[0]];L.style.fontFamily=fe.getFontFamily()}t.appendChild(L)}},{key:"drawParagraph",value:function(t,r){var a=this,n=document.createElement("div");n.style.margin="0";var f=this.hwpDocument.info.paragraphShapes[r.shapeIndex];n.style.textAlign=zd[f.align],r.shapeBuffer.forEach(function(h,y){var o=r.getShapeEndPos(y);a.drawText(n,r,h,o)}),t.append(n)}},{key:"drawSection",value:function(t,r,a){var n=this,f=this.createPage(r,a);f.style.marginBottom="20px",r.content.forEach(function(h){n.drawParagraph(f,h)}),t.appendChild(f)}},{key:"draw",value:function(){var t=this;this.drawViewer();var r=document.createElement("div");r.style.height="100%",r.style.padding="52px 24px 24px 24px",r.style.overflow="auto",r.style.position="relative",r.style.zIndex="0",this.hwpDocument.sections.forEach(function(a,n){t.drawSection(r,a,n)}),this.header=new Ld(this.viewer,this.container,this.pages),this.viewer.appendChild(r),this.container.appendChild(this.viewer)}}]),e}();var Ja=Nf(Do()),Qa=Nf(Rs());function Uc(e){let i=Ja.read(e instanceof Uint8Array?e:new Uint8Array(e),{type:"array"}),t=l=>{let L=Ja.find(i,l);return L?new Uint8Array(L.content):null},r=t("/FileHeader")||t("FileHeader");if(!r)throw new Error("\uD55C\uAE00 \uD30C\uC77C \uBA38\uB9AC \uC815\uBCF4\uAC00 \uC5C6\uC74C");let n=new DataView(r.buffer,r.byteOffset,r.byteLength).getUint32(36,!0),f=!!(n&1),h=!!(n&2),y=!!(n&4);if(h)throw new Error("\uC554\uD638\uAC00 \uAC78\uB9B0 \uBB38\uC11C");if(y)throw new Error("\uBC30\uD3EC\uC6A9 \uBB38\uC11C");let o=[];for(let l=0;l<200;l++){let L=t(`/BodyText/Section${l}`)||t(`BodyText/Section${l}`);if(!L)break;if(f)try{L=(0,Qa.inflateRaw)(L)}catch{L=(0,Qa.inflate)(L)}let A=new DataView(L.buffer,L.byteOffset,L.byteLength),m=0;for(;m+4<=L.length;){let j=A.getUint32(m,!0);m+=4;let D=j&1023,q=j>>>20&4095;if(q===4095&&(q=A.getUint32(m,!0),m+=4),D===67){let M="";for(let fe=0;fe+1<q;){let ee=A.getUint16(m+fe,!0);if(ee<32){if([1,2,3,4,5,6,7,8,9,11,12,14,15,16,17,18,19,20,21,22,23].includes(ee)){ee===9&&(M+=" "),fe+=16;continue}ee===10&&(M+=`
`),fe+=2;continue}M+=String.fromCharCode(ee),fe+=2}M=M.replace(/[\uE000-\uF8FF]/g,"").trim(),M&&o.push(M)}m+=q}}return o.join(`
`)}return Of(Mc);})();
window.HWPjs = HWPjs;
/* ===== HWP 미리보기 (내장) 끝 ===== */
/* ===== HWPX 미리보기 (내장) 시작 ===== */
/*! HWPX viewer v6 for 개인연구 사이트 | fflate (c) Arjun Barrett, MIT */
var HWPXjs=(()=>{var ot=Object.defineProperty;var It=Object.getOwnPropertyDescriptor;var Ut=Object.getOwnPropertyNames;var Nt=Object.prototype.hasOwnProperty;var Dt=(t,e)=>{for(var n in e)ot(t,n,{get:e[n],enumerable:!0})},Ft=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Ut(e))!Nt.call(t,a)&&a!==n&&ot(t,a,{get:()=>e[a],enumerable:!(r=It(e,a))||r.enumerable});return t};var Bt=t=>Ft(ot({},"__esModule",{value:!0}),t);var _t={};Dt(_t,{extractText:()=>Qt,render:()=>Jt});var k=Uint8Array,Q=Uint16Array,Lt=Int32Array,xt=new k([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yt=new k([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ot=new k([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wt=function(t,e){for(var n=new Q(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var a=new Lt(n[30]),r=1;r<30;++r)for(var v=n[r];v<n[r+1];++v)a[v]=v-n[r]<<5|r;return{b:n,r:a}},dt=wt(xt,2),bt=dt.b,Pt=dt.r;bt[28]=258,Pt[258]=28;var zt=wt(yt,0),kt=zt.b,ee=zt.r,ht=new Q(32768);for(m=0;m<32768;++m)X=(m&43690)>>1|(m&21845)<<1,X=(X&52428)>>2|(X&13107)<<2,X=(X&61680)>>4|(X&3855)<<4,ht[m]=((X&65280)>>8|(X&255)<<8)>>1;var X,m,et=function(t,e,n){for(var r=t.length,a=0,v=new Q(e);a<r;++a)t[a]&&++v[t[a]-1];var E=new Q(e);for(a=1;a<e;++a)E[a]=E[a-1]+v[a-1]<<1;var d;if(n){d=new Q(1<<e);var M=15-e;for(a=0;a<r;++a)if(t[a])for(var F=a<<4|t[a],u=e-t[a],i=E[t[a]-1]++<<u,h=i|(1<<u)-1;i<=h;++i)d[ht[i]>>M]=F}else for(d=new Q(r),a=0;a<r;++a)t[a]&&(d[a]=ht[E[t[a]-1]++]>>15-t[a]);return d},rt=new k(288);for(m=0;m<144;++m)rt[m]=8;var m;for(m=144;m<256;++m)rt[m]=9;var m;for(m=256;m<280;++m)rt[m]=7;var m;for(m=280;m<288;++m)rt[m]=8;var m,At=new k(32);for(m=0;m<32;++m)At[m]=5;var m;var jt=et(rt,9,1);var Rt=et(At,5,1),st=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},q=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},lt=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},Zt=function(t){return(t+7)/8|0},ct=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new k(t.subarray(e,n))};var $t=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],$=function(t,e,n){var r=new Error(e||$t[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,$),!n)throw r;return r},qt=function(t,e,n,r){var a=t.length,v=r?r.length:0;if(!a||e.f&&!e.l)return n||new k(0);var E=!n,d=E||e.i!=2,M=e.i;E&&(n=new k(a*3));var F=function(vt){var gt=n.length;if(vt>gt){var mt=new k(Math.max(gt*2,vt));mt.set(n),n=mt}},u=e.f||0,i=e.p||0,h=e.b||0,z=e.l,N=e.d,O=e.m,P=e.n,y=a*8;do{if(!z){u=q(t,i,1);var _=q(t,i+1,3);if(i+=3,_)if(_==1)z=jt,N=Rt,O=9,P=5;else if(_==2){var Y=q(t,i,31)+257,J=q(t,i+10,15)+4,at=Y+q(t,i+5,31)+1;i+=14;for(var K=new k(at),H=new k(19),B=0;B<J;++B)H[Ot[B]]=q(t,i+B*3,7);i+=J*3;for(var o=st(H),s=(1<<o)-1,l=et(H,o,1),B=0;B<at;){var D=l[q(t,i,s)];i+=D&15;var j=D>>4;if(j<16)K[B++]=j;else{var x=0,S=0;for(j==16?(S=3+q(t,i,3),i+=2,x=K[B-1]):j==17?(S=3+q(t,i,7),i+=3):j==18&&(S=11+q(t,i,127),i+=7);S--;)K[B++]=x}}var b=K.subarray(0,Y),p=K.subarray(Y);O=st(b),P=st(p),z=et(b,O,1),N=et(p,P,1)}else $(1);else{var j=Zt(i)+4,V=t[j-4]|t[j-3]<<8,tt=j+V;if(tt>a){M&&$(0);break}d&&F(h+V),n.set(t.subarray(j,tt),h),e.b=h+=V,e.p=i=tt*8,e.f=u;continue}if(i>y){M&&$(0);break}}d&&F(h+131072);for(var w=(1<<O)-1,I=(1<<P)-1,g=i;;g=i){var x=z[lt(t,i)&w],f=x>>4;if(i+=x&15,i>y){M&&$(0);break}if(x||$(2),f<256)n[h++]=f;else if(f==256){g=i,z=null;break}else{var c=f-254;if(f>264){var B=f-257,A=xt[B];c=q(t,i,(1<<A)-1)+bt[B],i+=A}var T=N[lt(t,i)&I],R=T>>4;T||$(3),i+=T&15;var p=kt[R];if(R>3){var A=yt[R];p+=lt(t,i)&(1<<A)-1,i+=A}if(i>y){M&&$(0);break}d&&F(h+131072);var U=h+c;if(h<p){var Z=v-p,Tt=Math.min(p,U);for(Z+h<0&&$(3);h<Tt;++h)n[h]=r[Z+h]}for(;h<U;++h)n[h]=n[h-p]}}e.l=z,e.p=g,e.b=h,e.f=u,z&&(u=1,e.m=O,e.d=N,e.n=P)}while(!u);return h!=n.length&&E?ct(n,0,h):n.subarray(0,h)};var Wt=new k(0);var G=function(t,e){return t[e]|t[e+1]<<8},W=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},ft=function(t,e){return W(t,e)+W(t,e+4)*4294967296};function Gt(t,e){return qt(t,{i:2},e&&e.out,e&&e.dictionary)}var ut=typeof TextDecoder<"u"&&new TextDecoder,Ht=0;try{ut.decode(Wt,{stream:!0}),Ht=1}catch{}var Xt=function(t){for(var e="",n=0;;){var r=t[n++],a=(r>127)+(r>223)+(r>239);if(n+a>t.length)return{s:e,r:ct(t,n-1)};a?a==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):a&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}};function nt(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(ut)return ut.decode(t);var a=Xt(t),v=a.s,n=a.r;return n.length&&$(8),v}}var Yt=function(t,e){return e+30+G(t,e+26)+G(t,e+28)},Kt=function(t,e,n){var r=G(t,e+28),a=nt(t.subarray(e+46,e+46+r),!(G(t,e+8)&2048)),v=e+46+r,E=W(t,e+20),d=n&&E==4294967295?Vt(t,v):[E,W(t,e+24),W(t,e+42)],M=d[0],F=d[1],u=d[2];return[G(t,e+10),M,F,a,v+G(t,e+30)+G(t,e+32),u]},Vt=function(t,e){for(;G(t,e)!=1;e+=4+G(t,e+2));return[ft(t,e+12),ft(t,e+4),ft(t,e+20)]};function Ct(t,e){for(var n={},r=t.length-22;W(t,r)!=101010256;--r)(!r||t.length-r>65558)&&$(13);var a=G(t,r+8);if(!a)return{};var v=W(t,r+16),E=v==4294967295||a==65535;if(E){var d=W(t,r-12);E=W(t,d)==101075792,E&&(a=W(t,d+32),v=W(t,d+48))}for(var M=e&&e.filter,F=0;F<a;++F){var u=Kt(t,v,E),i=u[0],h=u[1],z=u[2],N=u[3],O=u[4],P=u[5],y=Yt(t,P);v=O,(!M||M({name:N,size:h,originalSize:z,compression:i}))&&(i?i==8?n[N]=Gt(t.subarray(y,y+h),{out:new k(z)}):$(14,"unknown compression type "+i):n[N]=ct(t,y,y+h))}return n}var C=(t,e)=>Array.from(t?t.children:[]).filter(n=>!e||n.localName===e),it=(t,e)=>Array.from(t.getElementsByTagNameNS("*",e)),L=(t,e)=>it(t,e)[0]||null;function pt(t,e){if(!e||t[e])return e;if(t["Contents/"+e])return"Contents/"+e;let n=e.toLowerCase().replace(/^\.?\//,""),r=n.split("/").pop();return Object.keys(t).find(a=>a.toLowerCase()===n||a.toLowerCase()==="contents/"+n)||Object.keys(t).find(a=>a.toLowerCase().endsWith("/"+r)||a.toLowerCase()===r)||e}function Mt(t){return Object.keys(t).filter(e=>/(^|\/)section\d*\.xml$/i.test(e)).sort((e,n)=>parseInt((e.match(/(\d+)\.xml$/i)||[0,0])[1],10)-parseInt((n.match(/(\d+)\.xml$/i)||[0,0])[1],10))}function Et(t){let e=t instanceof Uint8Array?t:new Uint8Array(t);if(!(e[0]===80&&e[1]===75)){let n=e[0]===208&&e[1]===207&&e[2]===17&&e[3]===224,r=new Error(n?"실제로는 .hwp 형식 파일":"HWPX(zip) 형식이 아님");throw r.code=n?"HWP":"NOTZIP",r}return Ct(e)}var St=(t,e)=>{let n=t(e);if(n.getElementsByTagName("parsererror").length){let r=t(e.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,""));if(!r.getElementsByTagName("parsererror").length)return r}return n};function Jt(t,e,n={}){let r=Et(e),a=o=>r[o]?nt(r[o]):null,v=o=>new DOMParser().parseFromString(o,"application/xml"),E=[],d={},M=[],F=pt(r,"Contents/content.hpf"),u=r[F]?nt(r[F]):null;if(u){let o=v(u);it(o,"item").forEach(s=>{d[s.getAttribute("id")]={href:s.getAttribute("href")||"",type:s.getAttribute("media-type")||""}}),M=it(o,"itemref").map(s=>(d[s.getAttribute("idref")]||{}).href).filter(s=>s&&/section\d*\.xml$/i.test(s))}if(M.length||(M=Object.keys(r).filter(o=>/^Contents\/section\d+\.xml$/i.test(o)).sort((o,s)=>parseInt(o.match(/\d+/))-parseInt(s.match(/\d+/)))),M=M.map(o=>pt(r,o)),M.some(o=>r[o])||(M=Mt(r)),!M.length)throw new Error("본문(section) 파일을 찾지 못함: "+Object.keys(r).slice(0,8).join(", "));let i={},h={},z=a(pt(r,"Contents/header.xml"));if(z){let o=v(z);it(o,"charPr").forEach(s=>{let l=L(s,"underline");i[s.getAttribute("id")]={size:parseInt(s.getAttribute("height")||"1000",10)/100,color:s.getAttribute("textColor"),bold:!!L(s,"bold"),italic:!!L(s,"italic"),underline:!!(l&&l.getAttribute("type")&&l.getAttribute("type")!=="NONE")}}),it(o,"paraPr").forEach(s=>{let l=L(s,"align");h[s.getAttribute("id")]={align:l?(l.getAttribute("horizontal")||"").toUpperCase():""}})}let N=o=>{let s=d[o],l=s&&(r[s.href]?s.href:r["Contents/"+s.href]?"Contents/"+s.href:null);if(l||(l=Object.keys(r).find(b=>b.startsWith("BinData/")&&b.split("/").pop().split(".")[0]===o)),!l)return null;let D=l.split(".").pop().toLowerCase(),x=s&&s.type||{png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",webp:"image/webp"}[D]||"application/octet-stream";if(!/^image\//.test(x))return null;let S=URL.createObjectURL(new Blob([r[l]],{type:x}));return E.push(S),S},O=96/7200,P=t.ownerDocument,y=(o,s)=>{let l=P.createElement(o);return s&&(l.className=s),l},_=(o,s)=>{let l=i[s];l&&(l.size&&Math.abs(l.size-10)>.01&&(o.style.fontSize=(l.size*4/3).toFixed(1)+"px"),l.bold&&(o.style.fontWeight="700"),l.italic&&(o.style.fontStyle="italic"),l.underline&&(o.style.textDecoration="underline"),l.color&&/^#[0-9a-f]{6}$/i.test(l.color)&&l.color.toLowerCase()!=="#000000"&&(o.style.color=l.color))},j=(o,s)=>{o.childNodes.forEach(l=>{l.nodeType===3?s.appendChild(P.createTextNode(l.nodeValue)):l.nodeType===1&&(l.localName==="lineBreak"?s.appendChild(y("br")):l.localName==="tab"?s.appendChild(P.createTextNode(" ")):l.localName==="nbSpace"||l.localName==="fwSpace"?s.appendChild(P.createTextNode(" ")):l.textContent&&s.appendChild(P.createTextNode(l.textContent)))})},V=(o,s)=>{C(o,"p").forEach(l=>tt(l,s))},tt=(o,s)=>{let l=h[o.getAttribute("paraPrIDRef")]||{},D={CENTER:"center",RIGHT:"right",JUSTIFY:"justify",DISTRIBUTE:"justify"}[l.align]||"",x=null,S=()=>(x||(x=y("p","hx-p"),D&&(x.style.textAlign=D),s.appendChild(x)),x);if(C(o,"run").forEach(b=>{let p=b.getAttribute("charPrIDRef");C(b).forEach(w=>{let I=w.localName;if(I==="t"){let g=y("span");_(g,p),j(w,g),S().appendChild(g)}else if(I==="tbl")x=null,s.appendChild(at(w));else if(I==="pic"){let g=L(w,"img"),f=g&&N(g.getAttribute("binaryItemIDRef"));if(f){let c=y("img","hx-img");c.src=f,c.alt="";let A=L(w,"curSz")||L(w,"sz"),T=A&&parseInt(A.getAttribute("width"),10);T&&(c.style.width=Math.round(T*O)+"px"),S().appendChild(c)}}else if(I==="equation"){let g=L(w,"script"),f=y("span","hx-eq");f.textContent=g?g.textContent:"[수식]",S().appendChild(f)}else if(["rect","ellipse","polygon","container","textart"].includes(I)){let g=L(w,"drawText")||w,f=L(g,"subList");if(f){x=null;let c=y("div","hx-box");V(f,c),s.appendChild(c)}}})}),!x&&!C(o,"run").some(b=>C(b).some(p=>["tbl","rect","ellipse","polygon","container","textart"].includes(p.localName)))){let b=y("p","hx-p");b.innerHTML="&nbsp;",s.appendChild(b)}},Y=642,J=0,at=o=>{let s=J>0,l=y("div","hx-tblwrap"),D=y("table","hx-tbl"),x=C(o,"sz")[0],S=x?parseInt(x.getAttribute("width"),10)*O:0,b=[];C(o,"tr").forEach(g=>C(g,"tc").forEach(f=>{let c=C(f,"cellAddr")[0],A=C(f,"cellSpan")[0],T=C(f,"cellSz")[0];b.push({col:c?parseInt(c.getAttribute("colAddr")||"0",10):-1,span:A?Math.max(1,parseInt(A.getAttribute("colSpan")||"1",10)):1,w:T?parseInt(T.getAttribute("width")||"0",10):0})}));let p=null;if(b.length&&b.every(g=>g.col>=0)){let g=Math.max(...b.map(f=>f.col+f.span));p=new Array(g).fill(0),b.filter(f=>f.span===1&&f.w).forEach(f=>{p[f.col]=Math.max(p[f.col],f.w)});for(let f=0;f<3;f++)b.filter(c=>c.span>1&&c.w).forEach(c=>{let A=Array.from({length:c.span},(U,Z)=>c.col+Z),T=A.filter(U=>p[U]).reduce((U,Z)=>U+p[Z],0),R=A.filter(U=>!p[U]);R.length&&c.w>T&&R.forEach(U=>{p[U]=(c.w-T)/R.length})});if(p.some(f=>!f)){let f=p.reduce((c,A)=>c+A,0)/Math.max(1,p.filter(Boolean).length)||1;p=p.map(c=>c||f)}}let w=p?p.reduce((g,f)=>g+f,0):0,I=Math.min(S||w*O||Y,Y);if(D.style.width=s?"100%":Math.round(I)+"px",D.style.tableLayout="fixed",p&&w){let g=y("colgroup");p.forEach(f=>{let c=y("col");c.style.width=(f/w*100).toFixed(3)+"%",g.appendChild(c)}),D.appendChild(g)}return C(o,"tr").forEach(g=>{let f=y("tr");C(g,"tc").forEach(c=>{let A=y("td"),T=C(c,"cellSpan")[0];if(T){let U=parseInt(T.getAttribute("colSpan")||"1",10),Z=parseInt(T.getAttribute("rowSpan")||"1",10);U>1&&(A.colSpan=U),Z>1&&(A.rowSpan=Z)}if(!p){let U=C(c,"cellSz")[0],Z=U&&parseInt(U.getAttribute("width"),10);Z&&S&&(A.style.width=Math.min(100,Z*O/S*100).toFixed(2)+"%")}let R=C(c,"subList")[0];if(R){J++;try{V(R,A)}finally{J--}}f.appendChild(A)}),D.appendChild(f)}),l.appendChild(D),l},K=y("style");K.textContent=`
    .hx-scroll{height:100%;overflow:auto;background:#e8eaed;padding:20px 12px;box-sizing:border-box}
    .hx-page{overflow:visible;background:#fff;color:#111;width:794px;max-width:none;margin:0 auto 20px;padding:72px 76px;box-sizing:border-box;box-shadow:0 1px 4px rgba(0,0,0,.18);font-family:"함초롬바탕","HCR Batang","Batang","바탕","Malgun Gothic","IBM Plex Sans KR",serif;font-size:13.3px;line-height:1.6;word-break:keep-all;overflow-wrap:anywhere}
    .hx-p{margin:0;min-height:1.2em;white-space:pre-wrap}
    .hx-tblwrap{margin:6px 0;max-width:100%}
    .hx-tbl{border-collapse:collapse;margin:0 auto;max-width:100%;min-width:0 !important;display:table !important}
    .hx-tbl tr{display:table-row !important;cursor:auto;background:none}
    .hx-tbl td{display:table-cell !important;background:none !important}
    .hx-tbl td{border:1px solid #555;padding:3px 6px;vertical-align:middle;box-sizing:border-box;word-break:keep-all;overflow-wrap:anywhere}
    .hx-tbl td .hx-p{white-space:pre-wrap}
    .hx-tbl td .hx-img{max-width:100%}
    .hx-tbl td .hx-tblwrap{margin:2px 0}
    .hx-tbl .hx-tbl{max-width:100%;width:100%}
    .hx-tbl td{overflow:hidden}
    .hx-tbl td > .hx-tblwrap{width:100%}
    .hx-img{max-width:100%;height:auto;vertical-align:middle}
    .hx-box{border:1px dashed #bbb;padding:6px 10px;margin:6px 0}
    .hx-eq{font-family:serif;font-style:italic;background:#f3f3f3;padding:0 4px;border-radius:3px}
    .hx-note{font:13px system-ui,sans-serif;color:#555;text-align:center;margin:0 0 12px}`;let H=y("div","hx-scroll");if(H.appendChild(K),n.note!==!1){let o=y("p","hx-note");o.textContent="HWPX 미리보기 v6 · 글, 표, 그림 위주로 보여 줍니다. 쪽 나눔과 세부 서식은 원본과 다를 수 있어요.",H.appendChild(o)}let B=0;if(M.filter(o=>r[o]).forEach((o,s)=>{let l=St(v,a(o));if(l.getElementsByTagName("parsererror").length)return;B++;let D=l.documentElement,x=y("div","hx-page");x.setAttribute("data-page-number",String(s+1));let S=L(D,"pagePr");if(S){let b=parseInt(S.getAttribute("width")||"0",10),p=parseInt(S.getAttribute("height")||"0",10);(S.getAttribute("landscape")||"").toUpperCase()==="NARROWLY"&&b<p&&([b,p]=[p,b]);let w=L(S,"margin"),I=R=>Math.round(parseInt(R||"0",10)*O),g=I(b)||794,f=w?I(w.getAttribute("left")):76,c=w?I(w.getAttribute("right")):76,A=w?I(w.getAttribute("top"))+I(w.getAttribute("header")):72,T=w?I(w.getAttribute("bottom"))+I(w.getAttribute("footer")):72;x.style.width=g+"px",x.style.padding=`${Math.max(24,Math.min(A,160))}px ${c}px ${Math.max(24,Math.min(T,160))}px ${f}px`,Y=Math.max(200,g-f-c)}else Y=642;V(D,x),H.appendChild(x)}),!B)throw new Error("본문 XML을 읽지 못함");return t.innerHTML="",t.appendChild(H),Array.from(H.querySelectorAll(".hx-page")).forEach(o=>{let s=o.scrollWidth-o.clientWidth;s>1&&(o.style.width=o.offsetWidth+s+4+"px")}),()=>E.forEach(o=>URL.revokeObjectURL(o))}function Qt(t){let e=Et(t),n=u=>e[u]?nt(e[u]):null,r=u=>new DOMParser().parseFromString(u,"application/xml"),a=Mt(e),v=[],E=u=>Array.from(u.childNodes).map(i=>i.nodeType===3?i.nodeValue:i.localName==="lineBreak"?`
`:i.localName==="tab"?" ":i.textContent||"").join(""),d=u=>{let i="";C(u,"run").forEach(h=>C(h).forEach(z=>{if(z.localName==="t")i+=E(z);else if(z.localName==="tbl")i.trim()&&v.push(i.trim()),i="",F(z);else if(z.localName==="pic")i+=" [그림] ";else if(z.localName==="equation"){let N=L(z,"script");i+=N?` [수식: ${N.textContent}] `:" [수식] "}else if(["rect","ellipse","polygon","container","textart"].includes(z.localName)){let N=L(z,"subList");N&&(i.trim()&&v.push(i.trim()),i="",C(N,"p").forEach(d))}})),i.trim()&&v.push(i.trim())},M=u=>{let i=v.length,h=C(u,"subList")[0];return h&&C(h,"p").forEach(d),v.splice(i).join(" ").replace(/\s+/g," ").trim()},F=u=>{v.push("[표]"),C(u,"tr").forEach(i=>{let h=C(i,"tc").map(M).filter(Boolean);h.length&&v.push("| "+h.join(" | ")+" |")}),v.push("[/표]")};return a.forEach(u=>{let i=St(r,n(u));i.getElementsByTagName("parsererror").length||C(i.documentElement,"p").forEach(d)}),v.join(`
`)}return Bt(_t);})();
window.HWPXjs = HWPXjs;
/* ===== HWPX 미리보기 (내장) 끝 ===== */

/* =========================================================
   공통
   ========================================================= */
const CFG = window.APP_CONFIG || {};
const app = document.getElementById('app');
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clone = o => JSON.parse(JSON.stringify(o));

/* 사이트 파일을 바꿀 때마다 올리면 브라우저가 예전 파일 대신 새 파일을 받습니다 */
const APP_VERSION = '2026-11-10f';
const BUCKET = 'submissions';
const MAX_MB = 25;
const ACCEPT = '.pdf,.hwp,.hwpx,.doc,.docx,.ppt,.pptx,.xlsx,.zip,.png,.jpg,.jpeg';
const ACCEPT_OUTPUT = ACCEPT + ',.gif,.webp,.mp4,.mov,.m4a,.mp3,.txt,.csv';
const acceptFor = g => g.key === 'output' ? ACCEPT_OUTPUT : ACCEPT;
const STAGES = [
  { key: 'plan', label: '계획서', full: '연구계획서', due: 'plan_due', group: 'plan' },
  { key: 'intro', label: '서론', full: '최종보고서 1. 서론', desc: '연구 주제 선정 이유, 연구 주제와 관련된 연구 동향 분석', due: 'intro_due', group: 'report' },
  { key: 'body', label: '본론', full: '최종보고서 2. 본론', desc: '연구 내용 설명', due: 'body_due', group: 'report' },
  { key: 'conclusion', label: '결론', full: '최종보고서 3. 결론', desc: '보고서 결론', due: 'conclusion_due', group: 'report' },
  { key: 'extra', label: '개인연구', full: '개인연구보고서', desc: '실험 대상 학생 추가 제출', due: 'extra_due', group: 'extra' },
  { key: 'output', label: '산출물', full: '산출물', desc: '연구 과정에서 만든 결과물 (사진, 발표자료, 모형·작품 사진, 영상 등)', due: 'output_due', group: 'output' }
];
const OUTPUT = STAGES.find(g => g.key === 'output');
const PLAN = STAGES.find(g => g.key === 'plan');
/* 양식을 보여 줄 위치 */
const TPL_PLACES = [
  ['all', '모든 학생 공통 (학생 화면 맨 위)'], ['plan', '연구계획서'], ['report', '최종보고서'],
  ['extra', '개인연구보고서 (대상 학생만)'], ['output', '산출물']
];
const tplPlace = k => (TPL_PLACES.find(x => x[0] === k) || [k, ({ intro: '서론', body: '본론', conclusion: '결론' })[k] + ' (이전 위치, 학생에게 안 보임)'])[1];
async function downloadTemplate(t) {
  try { saveBlob(await downloadBlob(t.file_path), t.file_name); }
  catch (e) { toast(e && e.demo ? e.message : '양식을 내려받지 못했습니다.'); }
}
/* 개인연구보고서는 '제출 대상'으로 표시된 학생에게만 해당 */
const applies = (s, g) => g.group !== 'extra' || !!(s && s.extra_required);
const stagesFor = s => STAGES.filter(g => applies(s, g));
const EXTRA = STAGES.find(g => g.key === 'extra');
const PARTS = STAGES.filter(g => g.group === 'report');
const stageMap = () => Object.fromEntries(STAGES.map(g => [g.key, '']));
const evMap = () => Object.fromEntries(STAGES.map(g => [g.key, []]));
const DUES = [{ key: 'plan_due', label: '계획서' }, { key: 'intro_due', label: '서론' }, { key: 'body_due', label: '본론' }, { key: 'conclusion_due', label: '결론' }, { key: 'extra_due', label: '개인연구보고서', extra: true }, { key: 'output_due', label: '산출물' }];
/* 마감일: 부분별 마감일이 없으면 예전 '최종보고서 마감일'을 씁니다. */
const dueFrom = (settings, key) => (settings && (settings[key] || (['intro_due', 'body_due', 'conclusion_due'].includes(key) ? settings.report_due : null))) || null;
const ST = {
  none: { label: '미제출', color: 'var(--none)' },
  waiting: { label: '피드백 대기', color: 'var(--blue)' },
  revise: { label: '보완 요청', color: 'var(--amber)' },
  done: { label: '확인 완료', color: 'var(--stamp)' }
};
const ORDER = ['waiting', 'revise', 'done', 'none'];
/* 동의서 내용을 바꾸면 이 값을 올리세요. 학생 전원이 다시 동의하게 됩니다. */
const CONSENT_VERSION = '2026-1';
const hasConsent = s => !!(s && s.consent_at && s.consent_version === CONSENT_VERSION);

const todayStr = () => new Date().toLocaleDateString('sv-SE');
const dateOf = ts => ts ? new Date(ts).toLocaleDateString('sv-SE') : '';
function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso.length === 10 ? iso + 'T00:00:00' : iso);
  return isNaN(d) ? '' : (d.getMonth() + 1) + '월 ' + d.getDate() + '일';
}
function fmtDT(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return '';
  return fmtDate(iso) + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}
function rel(iso) {
  if (!iso) return '—';
  const diff = Math.floor((new Date(todayStr() + 'T00:00:00') - new Date(dateOf(iso) + 'T00:00:00')) / 86400000);
  if (diff <= 0) return '오늘';
  if (diff === 1) return '어제';
  if (diff < 7) return diff + '일 전';
  return fmtDate(iso);
}
function dday(due) {
  if (!due) return null;
  return Math.round((new Date(due + 'T00:00:00') - new Date(todayStr() + 'T00:00:00')) / 86400000);
}
const isPast = due => { const d = dday(due); return d !== null && d < 0; };
function ddayTag(due) {
  const d = dday(due);
  if (d === null) return '';
  const cls = d < 0 ? 'past' : d <= 3 ? 'soon' : '';
  return `<span class="dday ${cls}">${d === 0 ? 'D-day' : d > 0 ? 'D-' + d : '마감'}</span>`;
}
function toast(t) {
  const el = $('toast');
  el.textContent = t;
  el.classList.add('on');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove('on'), 2800);
}
const clsFromSid = sid => /^\d{5}$/.test(String(sid || '').trim()) ? String(parseInt(String(sid).trim().slice(1, 3), 10)) : '';
function dbMsg(error) {
  if (!error) return '';
  if (error.code === '23505') return '같은 학번이나 이메일을 쓰는 학생이 이미 있습니다. 다른 선생님 담당일 수 있으니 관리자에게 확인하세요.';
  if (error.code === '42501') return '권한이 없습니다. 다시 로그인해 주세요.';
  return error.message || '요청을 처리하지 못했습니다.';
}
function topBar(email) {
  return `<div class="bar-top"><span>${esc(email)}</span><button class="linkbtn" id="logout">로그아웃</button></div>`;
}
function bindLogout() {
  const b = $('logout');
  if (b) b.onclick = async () => { await sb.auth.signOut(); };
}

/* 서명된 주소로 파일 열기 (팝업 차단을 피하려고 창을 먼저 연다) */
async function openFile(path) {
  const w = window.open('', '_blank');
  const { data, error } = await sb.storage.from(BUCKET).createSignedUrl(path, 120);
  if (error || !data) { if (w) w.close(); toast('파일을 열 수 없습니다.'); return; }
  if (w) w.location = data.signedUrl; else location.href = data.signedUrl;
}

/* ----- 제출 파일을 화면 안에서 보기 ----- */
const extOf = name => (String(name || '').split('.').pop() || '').toLowerCase();
let hwpLibPromise = null;
function loadHwpLib() {
  if (window.HWPjs) return Promise.resolve(window.HWPjs);
  if (!hwpLibPromise) {
    hwpLibPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'vendor/hwp-viewer.min.js?v=' + APP_VERSION;
      s.onload = () => window.HWPjs ? resolve(window.HWPjs) : reject(new Error('viewer'));
      s.onerror = () => { hwpLibPromise = null; reject(new Error('viewer')); };
      document.head.appendChild(s);
    });
  }
  return hwpLibPromise;
}
let hwpxLibPromise = null;
function loadHwpxLib() {
  if (window.HWPXjs) return Promise.resolve(window.HWPXjs);
  if (!hwpxLibPromise) {
    hwpxLibPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'vendor/hwpx-viewer.min.js?v=' + APP_VERSION;
      s.onload = () => window.HWPXjs ? resolve(window.HWPXjs) : reject(new Error('viewer'));
      s.onerror = () => { hwpxLibPromise = null; reject(new Error('viewer')); };
      document.head.appendChild(s);
    });
  }
  return hwpxLibPromise;
}
let zipLibPromise = null;
function loadZipLib() {
  if (window.ZIPjs) return Promise.resolve(window.ZIPjs);
  if (!zipLibPromise) {
    zipLibPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'vendor/zip.min.js?v=' + APP_VERSION;
      s.onload = () => window.ZIPjs ? resolve(window.ZIPjs) : reject(new Error('zip'));
      s.onerror = () => { zipLibPromise = null; reject(new Error('zip')); };
      document.head.appendChild(s);
    });
  }
  return zipLibPromise;
}
const safeName = s => String(s || '').replace(/[\\/:*?"<>|\u0000-\u001f]/g, '_').replace(/\s+/g, ' ').trim().slice(0, 120) || '파일';
/* ----- AI 요약용 내용 뽑기 ----- */
function hwpDocText(doc) {
  const lines = [];
  const pText = p => {
    let t = '';
    for (const c of p.content || []) {
      if (c.type === 0) { if (typeof c.value === 'string') t += c.value; else if (c.value === 10) t += '\n'; else if (c.value === 9) t += ' '; }
    }
    return t;
  };
  const walk = (paras, sink) => {
    for (const p of paras || []) {
      const t = pText(p).trim();
      if (t) sink.push(t);
      for (const ctl of p.controls || []) {
        if (Array.isArray(ctl.content) && ctl.content.length && ctl.content[0] && 'items' in ctl.content[0]) {
          const cells = ctl.content.map(cell => { const sub = []; walk(cell.items, sub); return sub.join(' ').replace(/\s+/g, ' ').trim(); }).filter(Boolean);
          if (cells.length) sink.push('[표] ' + cells.join(' | ') + ' [/표]');
        }
      }
    }
  };
  (doc.sections || []).forEach(sec => walk(sec.content, lines));
  return lines.join('\n');
}
/* 확장자 대신 파일 앞부분으로 실제 형식을 판단합니다 */
const sniff = u8 => (u8[0] === 0x50 && u8[1] === 0x4b) ? 'zip'
  : (u8[0] === 0xd0 && u8[1] === 0xcf && u8[2] === 0x11 && u8[3] === 0xe0) ? 'ole'
  : (u8[0] === 0x25 && u8[1] === 0x50 && u8[2] === 0x44 && u8[3] === 0x46) ? 'pdf' : '';
const blobToBase64 = blob => new Promise((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(String(r.result).split(',')[1] || '');
  r.onerror = () => rej(new Error('read'));
  r.readAsDataURL(blob);
});
/* 파일 하나를 AI에 보낼 형태로 바꿉니다: {text} 또는 {media_type, data} 또는 {skip} */
async function extractForAI(path, name) {
  let ext = extOf(name);
  const blob = await downloadBlob(path);
  if (ext === 'hwp' || ext === 'hwpx') {
    const head = sniff(new Uint8Array(await blob.slice(0, 8).arrayBuffer()));
    ext = head === 'ole' ? 'hwp' : head === 'zip' ? 'hwpx' : head === 'pdf' ? 'pdf' : ext;
  }
  if (ext === 'hwpx') return { text: window.HWPXjs.extractText(new Uint8Array(await blob.arrayBuffer())) };
  if (ext === 'hwp') {
    const lib = await loadHwpLib();
    const buf = new Uint8Array(await blob.arrayBuffer());
    let text = '';
    try { text = hwpDocText(lib.parse(buf, { type: 'array' })); } catch (e) { text = ''; }
    if (!text.trim()) text = lib.rawText(buf);
    return { text };
  }
  if (['txt', 'csv', 'md'].includes(ext)) return { text: await blob.text() };
  if (ext === 'pdf') { if (blob.size > 8 * 1048576) return { skip: 'PDF가 8MB보다 큼' }; return { media_type: 'application/pdf', data: await blobToBase64(blob) }; }
  const img = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp' }[ext];
  if (img) { if (blob.size > 3.5 * 1048576) return { skip: '사진이 3.5MB보다 큼' }; return { media_type: img, data: await blobToBase64(blob) }; }
  return { skip: `.${ext} 형식은 읽을 수 없음` };
}
const neisBytes = t => [...String(t || '')].reduce((a, ch) => a + (ch === '\n' ? 2 : ch.charCodeAt(0) > 127 ? 3 : 1), 0);

async function downloadBlob(path) {
  const { data, error } = await sb.storage.from(BUCKET).download(path);
  if (error || !data) throw error || new Error('download');
  return data;
}
function saveBlob(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name || 'submission';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
/* el 안에 문서를 그린다. 정리 함수를 돌려준다. */
async function renderDoc(el, path, name) {
  const urls = [];
  const fallback = (msg) => {
    el.innerHTML = `<div class="rv-msg"><p>${msg}</p><button class="btn" data-dl>내려받아 열기</button></div>`;
    el.querySelector('[data-dl]').onclick = async () => {
      try { saveBlob(await downloadBlob(path), name); } catch (e) { toast('파일을 내려받지 못했습니다.'); }
    };
  };
  el.innerHTML = '<div class="rv-msg"><p>파일을 불러오는 중입니다.</p></div>';
  let blob;
  try { blob = await downloadBlob(path); }
  catch (e) {
    if (e && e.demo) { el.innerHTML = `<div class="rv-msg"><p>${esc(e.message)}</p></div>`; return () => {}; }
    fallback('파일을 불러오지 못했습니다. 잠시 후 다시 열어 보세요.');
    return () => {};
  }
  let ext = extOf(name);
  let why = '';
  try {
    /* 한글 파일은 확장자가 틀리게 붙어 오는 경우가 있어 실제 형식을 확인합니다 */
    if (ext === 'hwp' || ext === 'hwpx') {
      const head = sniff(new Uint8Array(await blob.slice(0, 8).arrayBuffer()));
      if (head === 'ole') ext = 'hwp';
      else if (head === 'zip') ext = 'hwpx';
      else if (head === 'pdf') ext = 'pdf';
      else { why = '한글 파일 형식이 아님'; throw new Error(why); }
    }
    if (ext === 'hwp') {
      const lib = await loadHwpLib();
      const buf = new Uint8Array(await blob.arrayBuffer());
      el.innerHTML = '';
      const host = document.createElement('div');
      host.className = 'hwp-host';
      el.appendChild(host);
      let ok = false;
      try { new lib.Viewer(host, buf, { type: 'array' }); ok = host.querySelectorAll('[data-page-number]').length > 0; }
      catch (err) { console.warn('hwp viewer', err); }
      if (!ok) {
        /* 예비: 글만 보여 주는 간단 보기 */
        const text = lib.rawText(buf);
        if (!text.trim()) throw new Error('본문 글자를 찾지 못함');
        host.innerHTML = `<div class="hx-scroll"><p class="hx-note">한글 간단 보기 · 이 문서는 서식 미리보기가 어려워 글만 보여 줍니다. 표와 그림은 내려받아 한글에서 확인하세요.</p>
          <div class="hx-page simple" data-page-number="1">${text.split('\n').map(l => `<p class="hx-p">${esc(l) || '&nbsp;'}</p>`).join('')}</div></div>`;
      }
    } else if (ext === 'hwpx') {
      const lib = await loadHwpxLib();
      const buf = new Uint8Array(await blob.arrayBuffer());
      const host = document.createElement('div');
      host.className = 'hwp-host';
      el.innerHTML = '';
      el.appendChild(host);
      const done = lib.render(host, buf);
      return () => { done(); urls.forEach(u => URL.revokeObjectURL(u)); };
    } else if (ext === 'pdf') {
      const u = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      urls.push(u);
      el.innerHTML = `<iframe class="rv-frame" src="${u}" title="${esc(name)}"></iframe>`;
    } else if (['mp4', 'mov', 'webm'].includes(ext)) {
      const u = URL.createObjectURL(blob);
      urls.push(u);
      el.innerHTML = `<div class="rv-img"><video src="${u}" controls playsinline style="max-width:100%;max-height:100%"></video></div>`;
    } else if (['mp3', 'm4a'].includes(ext)) {
      const u = URL.createObjectURL(blob);
      urls.push(u);
      el.innerHTML = `<div class="rv-msg"><audio src="${u}" controls></audio></div>`;
    } else if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) {
      const u = URL.createObjectURL(blob);
      urls.push(u);
      el.innerHTML = `<div class="rv-img"><img src="${u}" alt="${esc(name)}"></div>`;
    } else {
      fallback(`.${esc(ext)} 파일은 화면에서 바로 볼 수 없습니다. 내려받아 프로그램에서 열어 보세요. 한글(.hwp, .hwpx), PDF, 사진은 여기서 바로 보입니다.`);
    }
  } catch (e) {
    const reason = why || (e && e.message) || '';
    fallback((ext === 'hwpx' ? '이 HWPX 파일은 화면에서 열지 못했습니다.' : '이 한글 파일은 화면에서 열지 못했습니다.') +
      ' 배포용·암호 문서이거나 손상된 파일일 수 있어요. 내려받아 한글에서 열어 보세요.' +
      (reason ? `<br><small class="rv-why">원인: ${esc(String(reason).slice(0, 160))}</small>` : ''));
  }
  return () => urls.forEach(u => URL.revokeObjectURL(u));
}

/* =========================================================
   시작과 로그인
   ========================================================= */
if (!CFG.SUPABASE_URL || CFG.SUPABASE_URL.startsWith('YOUR') || !CFG.SUPABASE_ANON_KEY || CFG.SUPABASE_ANON_KEY.startsWith('YOUR')) {
  app.innerHTML = `<div class="login"><h1>설정이 필요합니다</h1><p>config.js 파일에 Supabase 주소와 키를 넣은 뒤 다시 올려 주세요.</p></div>`;
  throw new Error('config.js not set');
}

const sb = createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, {
  auth: { persistSession: true, detectSessionInUrl: true, flowType: 'pkce' }
});

let currentUid = undefined;

async function route(session) {
  const uid = session?.user?.id || null;
  if (uid === currentUid) return;
  currentUid = uid;
  if (!session) { renderLogin(); return; }

  app.innerHTML = '<p class="loading">계정을 확인하는 중입니다.</p>';
  const email = (session.user.email || '').toLowerCase();

  const { data: isTeacher, error } = await sb.rpc('is_teacher');
  if (error) { renderMessage(email, '서버에 연결하지 못했습니다.', '잠시 후 새로고침해 주세요. 계속 안 되면 Supabase 프로젝트가 일시 정지되지 않았는지 확인하세요.'); return; }
  if (isTeacher) { await Teacher.start(email, session); return; }

  const { data: me } = await sb.from('students').select('*').maybeSingle();
  if (me) { await Student.start(email, me); return; }

  const dom = CFG.SCHOOL_DOMAIN;
  if (dom && !email.endsWith('@' + dom.toLowerCase())) {
    renderMessage(email, '학교 계정으로 로그인해 주세요.', `@${esc(dom)} 계정으로 다시 로그인하면 됩니다.`);
  } else {
    renderMessage(email, '등록되지 않은 계정입니다.', '선생님께 이 이메일 주소를 알려 드리고 명단에 등록해 달라고 요청하세요.');
  }
}

function renderLogin() {
  app.innerHTML = `<div class="login">
    <h1>개인연구 제출·피드백</h1>
    <p>학교 구글 계정으로 로그인하면 연구계획서와 최종보고서를 제출하고 선생님의 피드백을 확인할 수 있습니다.</p>
    <button class="gbtn" id="glogin">
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
      학교 구글 계정으로 로그인
    </button>
    ${CFG.SCHOOL_DOMAIN ? `<p class="fine">@${esc(CFG.SCHOOL_DOMAIN)} 계정을 사용하세요.</p>` : ''}
  </div>`;
  $('glogin').onclick = async () => {
    const queryParams = { prompt: 'select_account' };
    if (CFG.SCHOOL_DOMAIN) queryParams.hd = CFG.SCHOOL_DOMAIN;
    const { error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: location.origin + location.pathname, queryParams }
    });
    if (error) toast('로그인을 시작하지 못했습니다.');
  };
}

function renderMessage(email, title, body) {
  app.innerHTML = `${topBar(email)}<div class="login"><h1>${esc(title)}</h1><p>${body}</p>
    <button class="btn" id="relogin">다른 계정으로 로그인</button></div>`;
  bindLogout();
  $('relogin').onclick = async () => { await sb.auth.signOut(); };
}

sb.auth.getSession().then(({ data }) => route(data.session));
sb.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') setTimeout(() => route(session), 0);
});

/* =========================================================
   선생님 화면
   ========================================================= */
const Teacher = {
  email: '', settings: {}, students: new Map(),
  openId: null, isNew: false, draft: null, orig: null, fb: stageMap(), delEvents: new Set(), dirty: false, justStamped: null,

  blank() { return { status: 'none', submitted_at: null, link: '', file_path: null, file_name: null }; },

  teachers: [], isAdmin: false,
  tName(email) {
    if (!email) return '';
    const t = this.teachers.find(x => x.email === email);
    return (t && t.name) || email.split('@')[0];
  },

  async start(email, session) {
    this.email = email;
    app.innerHTML = '<p class="loading">명단을 불러오는 중입니다.</p>';
    try { await this.load(); }
    catch (e) { renderMessage(email, '명단을 불러오지 못했습니다.', esc(dbMsg(e))); return; }
    /* 이름이 비어 있으면 구글 계정의 이름으로 채웁니다 (선생님 계정에서 언제든 고칠 수 있음) */
    const meT = this.teachers.find(t => t.email === email);
    const gName = session && session.user && session.user.user_metadata && (session.user.user_metadata.full_name || session.user.user_metadata.name);
    if (meT && !meT.name && gName) {
      const { error } = await sb.rpc('claim_my_teacher_name', { p_name: gName });
      if (!error) meT.name = String(gName).trim().slice(0, 40);
    }
    this.shell();
    this.renderAll();
  },

  async load() {
    const tr = await sb.from('teachers').select('*').order('email');
    if (tr.error) throw tr.error;
    this.teachers = tr.data || [];
    const meT = this.teachers.find(t => t.email === this.email);
    /* is_admin 칸이 아직 없으면(업데이트 전) 모든 선생님을 관리자로 봅니다 */
    this.isAdmin = !meT || meT.is_admin === undefined ? true : !!meT.is_admin;
    const res = await Promise.all([
      sb.from('students').select('*'),
      sb.from('submissions').select('*'),
      sb.from('events').select('*').order('created_at', { ascending: false }),
      sb.from('teacher_notes').select('*'),
      sb.from('settings').select('*').eq('id', 1).maybeSingle(),
      sb.from('templates').select('*').order('created_at', { ascending: true })
    ]);
    const bad = res.slice(0, -1).find(r => r.error);
    if (bad) throw bad.error;
    const [st, sub, ev, notes, set, tpls] = res.map(r => r.data);
    this.settings = set || {};
    this.templates = tpls || [];
    const mm = await sb.from('doc_memos').select('*').order('created_at', { ascending: true });
    this.memoOK = !mm.error;
    this.memos = mm.error ? [] : (mm.data || []);
    const m = new Map();
    for (const s of st) m.set(s.id, { ...s, field: s.field || '', topic: s.topic || '', email: s.email || '', sid: s.sid || '', cls: s.cls || '', memo: '', ...Object.fromEntries(STAGES.map(g => [g.key, this.blank()])), ev: evMap() });
    for (const n of notes) if (m.has(n.student_id)) m.get(n.student_id).memo = n.memo || '';
    for (const x of sub) if (m.has(x.student_id) && STAGES.some(g => g.key === x.stage)) m.get(x.student_id)[x.stage] = { ...this.blank(), ...x, link: x.link || '' };
    for (const e of ev) if (m.has(e.student_id) && m.get(e.student_id).ev[e.stage]) m.get(e.student_id).ev[e.stage].push(e);
    this.students = m;
  },

  lastActivity(s) {
    let t = s.updated_at || '';
    for (const g of STAGES) for (const e of s.ev[g.key]) if (e.created_at > t) t = e.created_at;
    return t;
  },

  shell() {
    app.innerHTML = `${topBar(this.email)}
    <header class="top">
      <div><h1 id="title"></h1><p class="sub" id="roleLine"></p></div>
      <div class="dues" id="dues"></div>
    </header>
    <section class="summary" id="summary" aria-label="제출 현황"></section>
    <div class="tools">
      <input class="search" id="q" type="search" placeholder="이름, 학번, 연구 주제로 찾기" aria-label="검색">
      <select class="f" id="fcls" aria-label="반"></select>
      <select class="f" id="fteacher" aria-label="담당 교사" hidden></select>
      <select class="f" id="fstatus" aria-label="상태">
        <option value="">전체 상태</option>
        <option value="wait">피드백 대기</option>
        <option value="revise">보완 요청 중</option>
        <option value="plan-none">계획서 미제출</option>
        <option value="report-none">보고서 미제출 부분 있음</option>
        <option value="output-none">산출물 미제출</option>
        <option value="late">마감 지남 미제출</option>
        <option value="alldone">모두 확인 완료</option>
        <option value="nomail">이메일 미등록</option>
        <option value="noconsent">개인정보 동의 전</option>
        <option value="extra">개인연구보고서 대상</option>
      </select>
      <select class="f" id="fsort" aria-label="정렬">
        <option value="sid">학번순</option><option value="name">이름순</option><option value="recent">최근 활동순</option>
      </select>
      <span class="spacer"></span>
      <button class="btn" id="bReload">새로고침</button>
      <button class="btn" id="bAnn">공지사항</button>
      <button class="btn admin-only" id="bAssign">담당 배정</button>
      <button class="btn admin-only" id="bTpl">양식 관리</button>
      <button class="btn" id="bBulk">명단 붙여넣기</button>
      <button class="btn" id="bCsv">CSV 내보내기</button>
      <button class="btn" id="bZip">전체 내려받기</button>
      <button class="btn primary" id="bAdd">학생 추가</button>
    </div>
    <p class="count" id="count"></p>
    <div class="tablebox">
      <table><thead><tr><th>학번·이름</th><th>연구 주제</th><th>제출 현황</th><th>최근 활동</th></tr></thead><tbody id="rows"></tbody></table>
      <div id="empty"></div>
    </div>

    <div class="scrim" id="scrim"></div>
    <aside class="drawer" id="drawer" aria-label="학생 상세" aria-hidden="true">
      <div class="dhead"><h2 id="dTitle"></h2><button class="x" id="dClose" aria-label="닫기">×</button></div>
      <div class="guard" id="guard"><span style="flex:1">저장하지 않은 변경이 있습니다.</span>
        <button class="btn" id="gKeep">계속 편집</button><button class="btn danger armed" id="gDrop">버리고 닫기</button></div>
      <div class="dbody" id="dBody"></div>
      <div class="dfoot"><button class="btn danger" id="dDel">학생 삭제</button><button class="btn sm" id="dZip">이 학생 파일 받기</button><span class="msg" id="dMsg"></span><button class="btn primary" id="dSave">저장</button></div>
    </aside>

    <div class="modal" id="mBulk" role="dialog" aria-modal="true" aria-labelledby="mBulkT"><div class="mbox">
      <h2 id="mBulkT">명단 붙여넣기</h2>
      <p>한 줄에 한 명씩 학번, 이름, 학교 구글 이메일, 연구 주제 순서로 넣으세요. 엑셀에서 칸을 복사해 붙여넣어도 됩니다. 이미 있는 학번이면 새로 만들지 않고 이메일이나 주제처럼 적은 칸만 채웁니다.</p>
      <code class="ex">10109	김지호	jiho@school.example	과도한 일반화의 오류
10206	김서율	seoyul@school.example
10222	jinhyuk@school.example</code>
      <p class="hint">세 번째 줄처럼 학번과 이메일만 적으면 이미 등록된 학생에게 이메일만 연결됩니다.</p>
      <p class="hint" id="bulkNote" style="color:var(--blue)"></p>
      <textarea class="in" id="bulkText" rows="9" aria-label="명단"></textarea>
      <div class="mfoot"><span class="msg" id="bulkMsg"></span><button class="btn" data-close="mBulk">취소</button><button class="btn primary" id="bulkGo">반영</button></div>
    </div></div>

    <div class="modal" id="mSet" role="dialog" aria-modal="true" aria-labelledby="mSetT"><div class="mbox">
      <h2 id="mSetT">프로그램 설정</h2>
      <div class="field"><label class="l" for="sName">프로그램 이름</label><input class="in" id="sName"></div>
      <div class="row2 eq">
        <div class="field"><label class="l" for="sPlan">연구계획서 마감일</label><input class="in" id="sPlan" type="date"></div>
      </div>
      <p class="hint" style="margin:4px 0 10px">최종보고서</p>
      <div class="row3">
        <div class="field"><label class="l" for="sIntro">1. 서론 마감일</label><input class="in" id="sIntro" type="date"></div>
        <div class="field"><label class="l" for="sBody">2. 본론 마감일</label><input class="in" id="sBody" type="date"></div>
        <div class="field"><label class="l" for="sConclusion">3. 결론 마감일</label><input class="in" id="sConclusion" type="date"></div>
      </div>
      <div class="row2 eq">
        <div class="field"><label class="l" for="sExtra">개인연구보고서 마감일</label><input class="in" id="sExtra" type="date"></div>
        <div class="field"><label class="l" for="sOutput">산출물 마감일</label><input class="in" id="sOutput" type="date"></div>
      </div>
      <div class="mfoot"><button class="btn" data-close="mSet">취소</button><button class="btn primary" id="setGo">설정 저장</button></div>
    </div></div>

    <div class="modal" id="mTpl" role="dialog" aria-modal="true" aria-labelledby="mTplT"><div class="mbox">
      <h2 id="mTplT">양식 관리</h2>
      <p>여기에 올린 양식은 학생 화면의 해당 칸에 ‘양식 내려받기’로 나타납니다. 같은 칸에 여러 개를 올릴 수 있어요.</p>
      <div class="tpl-form">
        <div class="row2 eq">
          <div class="field"><label class="l" for="tStage">어느 칸에 보일까요</label>
            <select class="in" id="tStage">${TPL_PLACES.map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select></div>
          <div class="field"><label class="l" for="tTitle">양식 이름 (선택)</label><input class="in" id="tTitle" placeholder="비우면 파일 이름이 쓰입니다"></div>
        </div>
        <div class="tpl-pick">
          <label class="btn" for="tFile">파일 고르기</label><input type="file" id="tFile" hidden>
          <span class="hint" id="tPicked"></span>
          <span class="spacer"></span>
          <button class="btn primary" id="tGo">양식 올리기</button>
        </div>
      </div>
      <h3 class="rv-h" style="margin-top:18px">올린 양식</h3>
      <ul class="tpl-list" id="tList"></ul>
      <div class="mfoot"><button class="btn" data-close="mTpl">닫기</button></div>
    </div></div>

    <div class="modal" id="mTeach" role="dialog" aria-modal="true" aria-labelledby="mTeachT"><div class="mbox">
      <h2 id="mTeachT">선생님 계정</h2>
      <p><b>관리자</b>는 모든 학생과 설정을 관리하고, <b>담당 교사</b>는 배정받은 학생만 보고 피드백할 수 있습니다. 추가한 뒤 ‘담당 배정’에서 학생을 나눠 주세요.</p>
      <div class="tpl-pick">
        <input class="in" id="teachName" placeholder="이름 (예: 김민수)" autocomplete="off" style="flex:0 1 150px">
        <input class="in" id="teachEmail" type="email" placeholder="선생님 학교 구글 이메일" autocomplete="off" style="flex:1;min-width:200px">
        <button class="btn primary" id="teachAdd">추가</button>
      </div>
      <ul class="tpl-list" id="teachList"></ul>
      <p class="hint">본인 계정은 여기서 지우거나 관리자 해제할 수 없습니다. 선생님을 지우면 그 선생님의 담당 학생은 ‘미배정’이 됩니다.</p>
      <div class="mfoot"><button class="btn" data-close="mTeach">닫기</button></div>
    </div></div>

    <div class="modal" id="mAssign" role="dialog" aria-modal="true" aria-labelledby="mAssignT"><div class="mbox">
      <h2 id="mAssignT">담당 배정</h2>
      <p>선생님을 고르고 담당할 학생을 체크한 뒤 저장하세요. 다른 선생님 담당인 학생을 체크하면 이 선생님으로 옮겨집니다.</p>
      <div class="tpl-pick"><select class="in" id="asTeacher" style="flex:1"></select><button class="btn sm" id="asUn">미배정 학생만 체크</button></div>
      <ul class="assign-list" id="asList"></ul>
      <div class="mfoot"><span class="msg" id="asMsg"></span><button class="btn" data-close="mAssign">취소</button><button class="btn primary" id="asGo">저장</button></div>
    </div></div>

    <div class="modal" id="mZip" role="dialog" aria-modal="true" aria-labelledby="mZipT"><div class="mbox">
      <h2 id="mZipT">전체 내려받기</h2>
      <p>학생들이 낸 파일을 zip 하나로 받습니다. 명단·제출 현황과 피드백 기록도 엑셀로 열 수 있는 CSV로 함께 들어갑니다. 서버 장애에 대비해 마감일마다 받아서 학교 드라이브나 컴퓨터에 보관해 두세요.</p>
      <div class="field"><label class="l">받을 학생</label>
        <div class="tpl-pick"><label class="agree small" style="margin:0"><input type="radio" name="zScope" value="all" checked> <span id="zAllLabel">전체</span></label>
        <label class="agree small" style="margin:0"><input type="radio" name="zScope" value="shown"> <span id="zShownLabel">지금 목록에 보이는 학생</span></label></div></div>
      <div class="field"><label class="l">받을 항목</label><div class="zip-stages" id="zStages"></div></div>
      <div class="field"><label class="l">폴더 정리</label>
        <div class="tpl-pick"><label class="agree small" style="margin:0"><input type="radio" name="zLayout" value="student" checked> <span>학생별 폴더</span></label>
        <label class="agree small" style="margin:0"><input type="radio" name="zLayout" value="stage"> <span>항목별 폴더 (서론끼리, 본론끼리)</span></label></div></div>
      <label class="agree small"><input type="checkbox" id="zOld"> <span>보완 전에 냈던 이전 파일도 함께 받기</span></label>
      <div class="zip-progress" id="zProg" hidden><div class="bar"><span id="zBar" style="width:0;background:var(--blue)"></span></div><span class="hint" id="zMsg"></span></div>
      <div class="mfoot"><span class="msg" id="zCount"></span><button class="btn" data-close="mZip">닫기</button><button class="btn primary" id="zGo">내려받기</button></div>
    </div></div>

    <div class="modal" id="mAnn" role="dialog" aria-modal="true" aria-labelledby="mAnnT"><div class="mbox wide">
      <h2 id="mAnnT">공지사항</h2>
      <p id="annIntro"></p>
      <div class="ann-form">
        <div class="field"><label class="l" for="annTitle">제목</label><input class="in" id="annTitle" maxlength="200" placeholder="예: 서론 제출 마감 안내"></div>
        <div class="field"><label class="l" for="annBody">내용</label><textarea class="in" id="annBody" rows="5" maxlength="5000" placeholder="학생들에게 전할 내용을 적으세요."></textarea></div>
        <div class="tpl-pick">
          <select class="in" id="annAud" style="flex:0 1 200px"><option value="mine">내 담당 학생에게</option><option value="all">전체 학생에게</option></select>
          <label class="agree small" style="margin:0"><input type="checkbox" id="annPin"> <span>맨 위에 고정</span></label>
          <span class="spacer"></span>
          <button class="btn" id="annCancel" hidden>수정 취소</button>
          <button class="btn primary" id="annGo">게시</button>
        </div>
      </div>
      <h3 class="rv-h" style="margin-top:18px" id="annListT">게시한 공지</h3>
      <ul class="ann-list" id="annList"></ul>
      <div class="mfoot"><button class="btn" data-close="mAnn">닫기</button></div>
    </div></div>

    <div class="review" id="review" role="dialog" aria-modal="true" aria-label="제출물 보면서 피드백 쓰기" aria-hidden="true">
      <div class="rv-head">
        <div class="rv-title"><b id="rvName"></b><span id="rvMeta"></span></div>
        <span class="rv-pos" id="rvPos"></span>
        <button class="btn sm" id="rvPrev">이전</button>
        <button class="btn sm" id="rvNext">다음</button>
        <button class="x" id="rvClose" aria-label="검토 닫기">×</button>
      </div>
      <div class="rv-body">
        <div class="rv-doc">
          <div class="rv-tools">
            <span class="fn" id="rvFile"></span>
            <button class="btn sm" data-zoom="-1" aria-label="축소">−</button>
            <button class="btn sm" data-zoom="0">폭 맞춤</button>
            <button class="btn sm" data-zoom="1" aria-label="확대">+</button>
            <button class="btn sm" id="rvDl">내려받기</button>
          </div>
          <div class="rv-view" id="rvView"></div>
        </div>
        <div class="rv-side" id="rvSide"></div>
      </div>
    </div>`;

    bindLogout();
    ['q', 'fcls', 'fstatus', 'fsort'].forEach(id => $(id).addEventListener('input', () => this.renderRows()));
    $('bAdd').onclick = () => this.openDrawer(null);
    $('bBulk').onclick = () => this.openModal('mBulk');
    $('bTpl').onclick = () => { this.renderTemplates(); this.openModal('mTpl'); };
    $('tFile').onchange = () => { const f = $('tFile').files[0]; $('tPicked').textContent = f ? f.name : ''; };
    $('tGo').onclick = () => this.uploadTemplate();
    $('teachAdd').onclick = () => this.addTeacher();
    $('bAssign').onclick = () => this.openAssign();
    $('bAnn').onclick = () => this.openAnn();
    $('annGo').onclick = () => this.saveAnn();
    $('annCancel').onclick = () => this.resetAnnForm();
    $('bBulk').addEventListener('click', () => {
      const note = $('bulkNote');
      if (note) note.textContent = this.isAdmin ? '' : '여기서 등록한 학생은 자동으로 선생님 담당 학생이 됩니다.';
    });
    $('asTeacher').onchange = () => this.renderAssign();
    $('asUn').onclick = () => {
      $('asList').querySelectorAll('input[data-st]').forEach(c => { if (!c.dataset.cur) c.checked = true; });
      $('asMsg').textContent = `${$('asList').querySelectorAll('input:checked').length}명 선택`;
    };
    $('asGo').onclick = () => this.saveAssign();
    $('fteacher').addEventListener('input', () => this.renderRows());
    $('teachEmail').onkeydown = e => { if (e.key === 'Enter') this.addTeacher(); };
    $('bCsv').onclick = () => this.exportCsv();
    $('bZip').onclick = () => this.openZip();
    $('zGo').onclick = () => this.runZip();
    $('dZip').onclick = () => {
      if (this.isNew || !this.openId) return;
      this.runZip({ ids: [this.openId], stages: STAGES.map(g => g.key), layout: 'student', old: true });
    };
    $('bReload').onclick = async () => { try { await this.load(); this.renderAll(); toast('새로 불러왔습니다.'); } catch (e) { toast(dbMsg(e)); } };
    $('dClose').onclick = () => this.closeDrawer();
    $('scrim').onclick = () => this.closeDrawer();
    $('dSave').onclick = () => this.save();
    $('dDel').onclick = () => this.remove();
    $('gKeep').onclick = () => $('guard').classList.remove('on');
    $('gDrop').onclick = () => this.closeDrawer(true);
    $('bulkText').oninput = () => { const n = this.parseBulk($('bulkText').value).length; $('bulkMsg').textContent = n ? `${n}줄 인식됨` : ''; };
    $('bulkGo').onclick = () => this.applyBulk();
    $('setGo').onclick = () => this.saveSettings();
    app.querySelectorAll('[data-close]').forEach(b => b.onclick = () => this.closeModal(b.dataset.close));
    app.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m) this.closeModal(m.id); }));
    $('rvClose').onclick = () => this.closeReview();
    const rvView = $('rvView');
    const onSel = () => setTimeout(() => this.memoSelection(), 10);
    rvView.addEventListener('mouseup', onSel);
    rvView.addEventListener('keyup', onSel);
    rvView.addEventListener('touchend', onSel);
    rvView.addEventListener('scroll', () => this.hideMemoUI(true), true);
    rvView.addEventListener('click', e => {
      const m = e.target.closest && e.target.closest('mark.memo-hl');
      if (m) this.focusMemo(m.dataset.memo, 'side');
    });
    $('rvPrev').onclick = () => this.reviewGo(-1);
    $('rvNext').onclick = () => this.reviewGo(1);
    $('rvDl').onclick = async () => {
      const it = this.rvItem();
      if (!it) return;
      try { saveBlob(await downloadBlob(it.path), it.name); } catch (e) { toast(e && e.demo ? e.message : '파일을 내려받지 못했습니다.'); }
    };
    app.querySelectorAll('[data-zoom]').forEach(b => b.onclick = () => this.zoom(+b.dataset.zoom));
    document.onkeydown = e => {
      if (e.key === 'Escape' && $('review').classList.contains('on')) { this.closeReview(); return; }
      if (e.key === 'Escape') {
        const m = app.querySelector('.modal.on');
        if (m) { this.closeModal(m.id); return; }
        if ($('drawer').classList.contains('on')) this.closeDrawer();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's' && $('drawer').classList.contains('on')) {
        e.preventDefault();
        if (this.dirty) this.save();
      }
    };
  },

  renderAll() { this.renderHeader(); this.renderSummary(); this.renderClassFilter(); this.renderRows(); },

  renderHeader() {
    const c = this.settings;
    $('title').textContent = c.program_name || '개인연구 제출·피드백 관리';
    document.title = $('title').textContent;
    const anyExtra = [...this.students.values()].some(s => s.extra_required);
    $('roleLine').innerHTML = this.isAdmin
      ? `고등학교 1학년 개인연구 프로그램 · <b>관리자</b> (전체 학생 ${this.students.size}명)`
      : `고등학교 1학년 개인연구 프로그램 · <b>${esc(this.tName(this.email))}</b> 선생님 담당 학생 ${this.students.size}명`;
    $('dues').innerHTML = DUES.filter(g => !g.extra || anyExtra).map(g => { const v = dueFrom(c, g.key); return v
      ? `<span>${g.label} <b>${fmtDate(v)}</b>${ddayTag(v)}</span>`
      : `<span>${g.label} <b>미정</b></span>`; }).join('') + (this.isAdmin ? '<button class="linkbtn" id="bSet">마감일 설정</button><button class="linkbtn" id="bTeachers">선생님 계정</button>' : '');
    if (this.isAdmin) {
      $('bSet').onclick = () => this.openSettings();
      $('bTeachers').onclick = () => this.openTeachers();
    }
    app.querySelectorAll('.admin-only').forEach(b => b.hidden = !this.isAdmin);
    $('bAdd').hidden = false;
    const ft = $('fteacher');
    ft.hidden = !this.isAdmin;
    if (this.isAdmin) {
      const cur = ft.value;
      ft.innerHTML = '<option value="">전체 담당 교사</option><option value="__none">미배정</option>' +
        this.teachers.map(t => `<option value="${esc(t.email)}">${esc(this.tName(t.email))} 선생님</option>`).join('');
      ft.value = [...ft.options].some(o => o.value === cur) ? cur : '';
    }
  },

  renderSummary() {
    const list = [...this.students.values()];
    const n = list.length;
    const count = key => { const c = { none: 0, waiting: 0, revise: 0, done: 0 }; list.forEach(s => c[s[key].status || 'none']++); return c; };
    const bar = (cnt, thin) => `<div class="bar${thin ? ' thin' : ''}">${ORDER.filter(k => k !== 'none').map(k => n && cnt[k] ? `<span style="width:${cnt[k] / n * 100}%;background:${ST[k].color}" title="${ST[k].label} ${cnt[k]}명"></span>` : '').join('')}</div>`;
    const legend = cnt => `<div class="legend">${ORDER.map(k => `<span><i style="background:${ST[k].color}"></i>${ST[k].label} ${cnt[k]}</span>`).join('')}</div>`;
    let html = '';
    const allIn = list.filter(s => PARTS.every(g => s[g.key].status !== 'none')).length;
    const pc = count('plan');
    html += `<div class="sum"><h2>제출 현황</h2><div class="big">${allIn}<small>/ ${n}명 최종보고서 세 부분 모두 제출</small></div>
      <div class="parts"><div class="part-row plan-row"><span class="pl">계획서</span>${bar(pc, true)}<span class="pn">${n - pc.none}/${n}</span></div>${PARTS.map(g => { const c = count(g.key); return `<div class="part-row"><span class="pl">${g.label}</span>${bar(c, true)}<span class="pn">${n - c.none}/${n}</span></div>`; }).join('')}</div>
      ${(() => { const ex = list.filter(s => s.extra_required); if (!ex.length) return ''; const c = { none: 0, waiting: 0, revise: 0, done: 0 }; ex.forEach(s => c[s.extra.status || 'none']++); const m = ex.length;
        return `<div class="part-row extra-row"><span class="pl">개인연구보고서</span><div class="bar thin">${ORDER.filter(k => k !== 'none').map(k => c[k] ? `<span style="width:${c[k] / m * 100}%;background:${ST[k].color}"></span>` : '').join('')}</div><span class="pn">${m - c.none}/${m}</span></div>`; })()}
      ${(() => { const c = count('output'); return `<div class="part-row extra-row"><span class="pl">산출물</span>${bar(c, true)}<span class="pn">${n - c.none}/${n}</span></div>`; })()}
      <div class="legend">${ORDER.filter(k => k !== 'none').map(k => `<span><i style="background:${ST[k].color}"></i>${ST[k].label}</span>`).join('')}</div></div>`;
    const wait = list.reduce((a, s) => a + stagesFor(s).filter(g => s[g.key].status === 'waiting').length, 0);
    const rev = list.reduce((a, s) => a + stagesFor(s).filter(g => s[g.key].status === 'revise').length, 0);
    const late = list.filter(s => stagesFor(s).some(g => s[g.key].status === 'none' && isPast(dueFrom(this.settings, g.due)))).length;
    const nomail = list.filter(s => !s.email).length;
    const noconsent = list.filter(s => s.email && !hasConsent(s)).length;
    html += `<div class="sum"><h2>지금 할 일</h2><div class="todo-list">
      <button class="todo wait" data-f="wait"><span>피드백을 기다리는 제출물</span><span class="n">${wait}</span></button>
      <button class="todo rev" data-f="revise"><span>보완 요청 후 재제출 대기</span><span class="n">${rev}</span></button>
      <button class="todo late" data-f="late"><span>마감 지나고 미제출한 학생</span><span class="n">${late}</span></button>
      ${nomail ? `<button class="todo mail" data-f="nomail"><span>이메일 미등록 (로그인 불가)</span><span class="n">${nomail}</span></button>` : ''}
      ${this.isAdmin && this.teachers.some(t => !t.name) ? `<button class="todo mail" data-open-teachers="1"><span>이름이 없는 선생님 계정</span><span class="n">${this.teachers.filter(t => !t.name).length}</span></button>` : ''}
      ${this.isAdmin && list.some(s => !s.teacher_email) ? `<button class="todo mail" data-tf="__none"><span>담당 교사 미배정</span><span class="n">${list.filter(s => !s.teacher_email).length}</span></button>` : ''}
      ${noconsent ? `<button class="todo mail" data-f="noconsent"><span>개인정보 동의 전</span><span class="n">${noconsent}</span></button>` : ''}
      ${wait ? `<button class="btn primary" id="rvStart">대기 중인 제출물 차례로 검토하기</button>` : ''}
    </div></div>`;
    $('summary').innerHTML = html;
    $('summary').querySelectorAll('.todo').forEach(b => b.onclick = () => {
      if (b.dataset.openTeachers) { this.openTeachers(); return; }
      if (b.dataset.tf) { $('fteacher').value = b.dataset.tf; $('fstatus').value = ''; }
      else $('fstatus').value = b.dataset.f;
      this.renderRows();
    });
    const rs = $('rvStart');
    if (rs) rs.onclick = () => this.openReview(this.waitingQueue(), 0);
  },

  renderClassFilter() {
    const sel = $('fcls');
    const cur = sel.value;
    const classes = [...new Set([...this.students.values()].map(s => s.cls).filter(Boolean))]
      .sort((a, b) => (+a || 0) - (+b || 0) || String(a).localeCompare(b));
    sel.innerHTML = '<option value="">전체 반</option>' + classes.map(c => `<option value="${esc(c)}">${esc(c)}반</option>`).join('');
    if (classes.includes(cur)) sel.value = cur;
  },

  matches(s) {
    const q = $('q').value.trim().toLowerCase();
    if (q && !(s.name + ' ' + s.sid + ' ' + s.topic + ' ' + s.field + ' ' + s.email).toLowerCase().includes(q)) return false;
    const c = $('fcls').value;
    if (c && String(s.cls) !== c) return false;
    const ft = this.isAdmin ? $('fteacher').value : '';
    if (ft === '__none' && s.teacher_email) return false;
    if (ft && ft !== '__none' && s.teacher_email !== ft) return false;
    const f = $('fstatus').value;
    if (f === 'wait') return stagesFor(s).some(g => s[g.key].status === 'waiting');
    if (f === 'revise') return stagesFor(s).some(g => s[g.key].status === 'revise');
    if (f === 'extra') return !!s.extra_required;
    if (f === 'output-none') return s.output.status === 'none';
    if (f === 'plan-none') return s.plan.status === 'none';
    if (f === 'report-none') return PARTS.some(g => s[g.key].status === 'none');
    if (f === 'late') return stagesFor(s).some(g => s[g.key].status === 'none' && isPast(dueFrom(this.settings, g.due)));
    if (f === 'alldone') return stagesFor(s).every(g => s[g.key].status === 'done');
    if (f === 'nomail') return !s.email;
    if (f === 'noconsent') return !!s.email && !hasConsent(s);
    return true;
  },

  partsCell(s) {
    const pk = s.plan.status || 'none';
    const planChip = `<span class="chip ${pk} plan${this.justStamped === s.id + 'plan' ? ' pressed' : ''}" title="연구계획서: ${ST[pk].label}">${pk === 'done' ? '✓ ' : ''}계획서</span>`;
    const chips = PARTS.map(g => {
      const k = s[g.key].status || 'none';
      return `<span class="chip ${k}${this.justStamped === s.id + g.key ? ' pressed' : ''}" title="${g.full}: ${ST[k].label}">${k === 'done' ? '✓ ' : ''}${g.label}</span>`;
    }).join('');
    const ek = s.extra_required ? (s.extra.status || 'none') : null;
    const extraChip = ek ? `<span class="chip ${ek} extra${this.justStamped === s.id + 'extra' ? ' pressed' : ''}" title="개인연구보고서: ${ST[ek].label}">${ek === 'done' ? '✓ ' : ''}개인연구</span>` : '';
    const missing = PARTS.filter(g => s[g.key].status === 'none').length;
    const overdue = [PLAN, ...PARTS, ...(s.extra_required ? [EXTRA] : []), OUTPUT].some(g => s[g.key].status === 'none' && isPast(dueFrom(this.settings, g.due)));
    const meta = overdue ? '<div class="meta warn">마감 지난 미제출 있음</div>'
      : [PLAN, ...PARTS, ...(s.extra_required ? [EXTRA] : []), OUTPUT].some(g => s[g.key].status === 'waiting') ? '<div class="meta">피드백 대기 있음</div>' : '';
    const ok = s.output.status || 'none';
    const outChip = `<span class="chip ${ok} out${this.justStamped === s.id + 'output' ? ' pressed' : ''}" title="산출물: ${ST[ok].label}">${ok === 'done' ? '✓ ' : ''}산출물</span>`;
    return `<div class="chips">${planChip}${chips}${extraChip}${outChip}</div>${meta}`;
  },

  stageCell(s, g) {
    const st = s[g.key];
    const k = st.status || 'none';
    const due = dueFrom(this.settings, g.due);
    let meta = '';
    if (k === 'none') { if (isPast(due)) meta = '<div class="meta warn">마감 지남</div>'; }
    else if (st.submitted_at) {
      const late = due && dateOf(st.submitted_at) > due;
      meta = `<div class="meta${late ? ' warn' : ''}">${fmtDate(st.submitted_at)} 제출${late ? ' (지각)' : ''}</div>`;
    }
    const stamp = k === 'done' ? `<span class="stamp${this.justStamped === s.id + g.key ? ' pressed' : ''}" aria-hidden="true">확인</span>` : '';
    return `<div class="cell">${stamp}<div><span class="pill ${k}">${ST[k].label}</span>${meta}</div></div>`;
  },

  renderRows() {
    const sort = $('fsort').value;
    const list = [...this.students.values()].filter(s => this.matches(s));
    list.sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name, 'ko');
      if (sort === 'recent') return this.lastActivity(b).localeCompare(this.lastActivity(a));
      return (a.sid || '~').localeCompare(b.sid || '~', undefined, { numeric: true }) || a.name.localeCompare(b.name, 'ko');
    });
    $('rows').innerHTML = list.map(s => `<tr data-id="${esc(s.id)}" tabindex="0">
      <td class="c-who"><span class="sid">${esc(s.sid) || '—'}</span> <span class="nm">${esc(s.name)}</span>${this.isAdmin ? (s.teacher_email ? `<span class="tch">${esc(this.tName(s.teacher_email))}</span>` : '<span class="tch none">미배정</span>') : ''}${!s.email ? '<span class="nomail">이메일 없음</span>' : hasConsent(s) ? '' : '<span class="nomail">동의 전</span>'}</td>
      <td class="c-topic"><div class="topic${s.topic ? '' : ' empty'}" title="${esc(s.topic)}">${s.topic_updated_at && (Date.now() - new Date(s.topic_updated_at)) < 7 * 86400000 ? '<span class="tnew">학생 수정</span>' : ''}${esc(s.topic) || '주제 미정'}</div></td>
      <td class="c-report">${this.partsCell(s)}</td>
      <td class="c-recent"><span class="recent">${rel(this.lastActivity(s))}</span></td></tr>`).join('');
    this.justStamped = null;
    $('rows').querySelectorAll('tr').forEach(tr => {
      tr.onclick = () => this.openDrawer(tr.dataset.id);
      tr.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.openDrawer(tr.dataset.id); } };
    });
    const total = this.students.size;
    $('count').textContent = total ? (list.length === total ? `학생 ${total}명` : `학생 ${total}명 중 ${list.length}명 표시`) : '';
    let empty = '';
    if (!total) empty = this.isAdmin
      ? '<div class="empty-state"><p>아직 등록된 학생이 없습니다. 반 명단을 붙여넣으면 한 번에 등록됩니다.</p><button class="btn primary" id="emptyBulk">명단 붙여넣기</button></div>'
      : '<div class="empty-state"><p>아직 담당 학생이 없습니다. 담당 학생 명단을 붙여넣어 직접 등록하거나, 관리자 선생님께 담당 배정을 요청하세요.</p><button class="btn primary" id="emptyBulk">명단 붙여넣기</button></div>';
    else if (!list.length) empty = '<div class="empty-state"><p>조건에 맞는 학생이 없습니다. 검색어나 필터를 바꿔 보세요.</p></div>';
    $('empty').innerHTML = empty;
    const eb = $('emptyBulk');
    if (eb) eb.onclick = () => this.openModal('mBulk');
  },

  /* ----- 상세 창 ----- */
  openDrawer(id) {
    const src = id ? this.students.get(id) : null;
    if (id && !src) return;
    this.isNew = !id;
    this.openId = id || null;
    const base = src ? clone(src) : { id: null, sid: '', name: '', cls: '', email: '', field: '', topic: '', memo: '', teacher_email: this.isAdmin ? (['', '__none'].includes($('fteacher').value) ? '' : $('fteacher').value) : this.email, ...Object.fromEntries(STAGES.map(g => [g.key, this.blank()])), ev: evMap() };
    for (const g of STAGES) base[g.key].date = dateOf(base[g.key].submitted_at);
    this.draft = base;
    this.orig = clone(base);
    this.fb = stageMap();
    this.delEvents = new Set();
    this.dirty = false;
    this.ai = { sid: id, row: null, busy: false, msg: '', loaded: false, pack: null };
    this.renderDrawer();
    if (id) this.loadAI(id);
    $('drawer').classList.add('on');
    $('scrim').classList.add('on');
    $('drawer').setAttribute('aria-hidden', 'false');
    $('guard').classList.remove('on');
    setTimeout(() => { const f = this.isNew ? $('f-sid') : $('dClose'); if (f) f.focus(); }, 60);
  },

  closeDrawer(force) {
    if (this.dirty && !force) { $('guard').classList.add('on'); $('gKeep').focus(); return; }
    $('drawer').classList.remove('on');
    $('scrim').classList.remove('on');
    $('drawer').setAttribute('aria-hidden', 'true');
    $('guard').classList.remove('on');
    const prev = this.openId;
    this.openId = null; this.draft = null; this.dirty = false; this.isNew = false;
    if (prev) { const tr = $('rows').querySelector(`tr[data-id="${CSS.escape(prev)}"]`); if (tr) tr.focus(); }
  },

  setDirty() { this.dirty = true; this.updateFoot(); },
  updateFoot() {
    const m = $('dMsg');
    if (this.dirty) { m.textContent = '저장하지 않은 변경 있음'; m.className = 'msg dirty'; }
    else { m.textContent = this.draft?.updated_at ? '마지막 저장 ' + fmtDT(this.draft.updated_at) : ''; m.className = 'msg'; }
    $('dSave').disabled = !this.dirty;
    $('dDel').hidden = this.isNew || !this.isAdmin;
    $('dZip').hidden = this.isNew;
    $('dDel').classList.remove('armed');
    $('dDel').textContent = '학생 삭제';
  },
  keepFb() { $('dBody').querySelectorAll('[data-fb]').forEach(t => this.fb[t.dataset.fb] = t.value); },

  stageHTML(g) {
    const st = this.draft[g.key];
    const k = st.status;
    const evs = this.draft.ev[g.key].filter(e => !this.delEvents.has(e.id));
    const evHTML = evs.map(e => {
      let body = '';
      if (e.kind === 'submit') body = `<div class="note">학생이 파일을 제출했습니다: ${e.file_path ? `<button class="linkbtn" data-open="${esc(e.file_path)}">${esc(e.file_name || '파일')}</button>` : esc(e.file_name || '')}</div>`;
      else if (e.kind === 'cancel') body = `<div class="note cancel-note">학생이 제출을 취소했습니다: ${e.file_path ? `<button class="linkbtn" data-open="${esc(e.file_path)}">${esc(e.file_name || '파일')}</button>` : esc(e.file_name || '')}</div>`;
      else if (e.note) body = `<div class="note">${esc(e.note)}</div>`;
      const who = e.kind === 'submit' ? '학생 제출' : e.kind === 'cancel' ? '학생 제출 취소' : e.kind === 'feedback' ? '피드백' : '상태 변경';
      const seen = e.kind === 'feedback' ? (e.seen_at ? `<span class="seen">학생 읽음 ${fmtDT(e.seen_at)}</span>` : '<span class="unseen">학생 아직 안 읽음</span>') : '';
      return `<li class="k-${e.kind}"><div class="hmeta"><span>${fmtDT(e.created_at)}</span><span>${who}</span>${e.status ? `<span class="pill ${e.status}">${ST[e.status].label}</span>` : ''}${seen}
        ${e.kind !== 'submit' && e.kind !== 'cancel' ? `<button class="del" data-del="${esc(e.id)}" aria-label="이 기록 삭제">삭제</button>` : ''}</div>${body}</li>`;
    }).join('');
    return `<section class="stage" data-stage="${g.key}">
      ${g.key === 'plan' ? '<h3 class="group-h">연구계획서</h3>' : ''}${g.key === PARTS[0].key ? '<h3 class="group-h">최종보고서</h3>' : ''}${g.key === 'extra' ? '<h3 class="group-h">개인연구보고서</h3>' : ''}${g.key === 'output' ? '<h3 class="group-h">산출물</h3>' : ''}
      <div class="stage-h"><h3>${g.group === 'report' ? g.full.replace('최종보고서 ', '') : g.group === 'extra' || g.group === 'output' || g.group === 'plan' ? '제출물' : g.label}${g.desc ? `<small class="desc">${g.desc}</small>` : ''}</h3>${k === 'done' ? '<span class="stamp lg" aria-hidden="true">확인</span>' : ''}</div>
      ${st.file_path ? `<div class="filebox"><span class="fn">📄 ${esc(st.file_name || '제출 파일')}</span><button class="btn sm primary" data-review="${g.key}">보면서 피드백 쓰기</button></div>` : ''}
      <div class="seg" role="radiogroup" aria-label="${g.label} 상태">
        ${['none', 'waiting', 'revise', 'done'].map(s => `<label class="${k === s ? 'sel-' + s : ''}"><input type="radio" name="st-${g.key}" value="${s}" ${k === s ? 'checked' : ''}><span>${ST[s].label}</span></label>`).join('')}
      </div>
      <div class="row2">
        <div class="field"><label class="l">제출일</label><input class="in" type="date" data-sk="date" value="${esc(st.date)}"></div>
        <div class="field"><label class="l">추가 링크 (선택)</label><input class="in" type="url" data-sk="link" placeholder="구글 문서 등 외부 링크" value="${esc(st.link)}">
          ${/^https?:\/\//.test(st.link || '') ? `<a class="hint" href="${esc(st.link)}" target="_blank" rel="noopener noreferrer">링크 열기</a>` : ''}</div>
      </div>
      <div class="field"><label class="l">새 피드백</label><textarea class="in" data-fb="${g.key}" placeholder="학생에게 보일 피드백을 적으세요. 저장하면 학생 화면에 바로 나타납니다.">${esc(this.fb[g.key])}</textarea>
        <p class="hint">상태를 바꾸고 피드백을 함께 저장하면 그 상태와 함께 기록됩니다.</p></div>
      ${evHTML ? `<ul class="hist">${evHTML}</ul>` : '<p class="hint">아직 기록이 없습니다.</p>'}
    </section>`;
  },

  renderDrawer() {
    const d = this.draft;
    $('dTitle').textContent = this.isNew ? '새 학생' : ((d.sid ? d.sid + ' ' : '') + (d.name || ''));
    $('dBody').innerHTML = `
      <div class="grid2">
        <div class="field"><label class="l" for="f-sid">학번</label><input class="in" id="f-sid" data-k="sid" inputmode="numeric" value="${esc(d.sid)}"></div>
        <div class="field"><label class="l" for="f-name">이름</label><input class="in" id="f-name" data-k="name" value="${esc(d.name)}"></div>
        <div class="field"><label class="l" for="f-cls">반</label><input class="in" id="f-cls" data-k="cls" placeholder="학번에서 자동" value="${esc(d.cls)}"></div>
        <div class="field"><label class="l" for="f-field">연구 분야</label><input class="in" id="f-field" data-k="field" placeholder="예: 건축, 수학" value="${esc(d.field)}"></div>
      </div>
      ${this.isAdmin
        ? `<div class="field"><label class="l" for="f-teacher">담당 교사</label><select class="in" id="f-teacher" data-k="teacher_email"><option value="">미배정</option>${this.teachers.map(t => `<option value="${esc(t.email)}" ${d.teacher_email === t.email ? 'selected' : ''}>${esc(this.tName(t.email))} (${esc(t.email)})</option>`).join('')}</select></div>`
        : ''}
      <div class="field"><label class="l" for="f-email">학교 구글 이메일 (학생 로그인용)</label><input class="in" id="f-email" data-k="email" type="email" autocomplete="off" value="${esc(d.email)}"></div>
      <div class="field"><label class="l" for="f-topic">연구 주제</label><input class="in" id="f-topic" data-k="topic" value="${esc(d.topic)}">
        ${d.topic_updated_at ? `<p class="hint">학생이 ${fmtDT(d.topic_updated_at)}에 수정함${d.topic_prev ? ` · 이전 주제: ${esc(d.topic_prev)}` : ''}</p>` : ''}</div>
      <label class="agree small"><input type="checkbox" id="f-extra" ${d.extra_required ? 'checked' : ''}> <span>실험 대상 학생 (개인연구보고서 추가 제출)</span></label>
      ${this.isNew ? '' : `<p class="hint" style="margin:-4px 0 12px">개인정보 수집·이용 동의: ${hasConsent(d) ? fmtDT(d.consent_at) + ' 동의함' + (/^data:image\/png;base64,/.test(d.consent_signature || '') ? `<br><img class="sig" src="${d.consent_signature}" alt="${esc(d.name)} 학생 서명">` : '') : '<span class="warn">아직 동의하지 않음</span> (학생이 처음 로그인할 때 동의 화면이 나옵니다)'}</p>`}
      <div class="field"><label class="l" for="f-memo">지도 메모 (학생에게 보이지 않음)</label><textarea class="in" id="f-memo" data-k="memo" rows="3">${esc(d.memo)}</textarea></div>
      ${stagesFor(d).map(g => this.stageHTML(g)).join('')}
      ${this.isNew ? '' : this.aiHTML()}`;
    this.bindDrawer();
    $('f-extra').onchange = () => { this.keepFb(); this.draft.extra_required = $('f-extra').checked; this.setDirty(); this.renderDrawer(); };
    if (!this.isNew) this.bindAI();
    this.updateFoot();
  },

  bindDrawer() {
    const body = $('dBody');
    body.querySelectorAll('[data-k]').forEach(el => el.oninput = () => {
      this.draft[el.dataset.k] = el.value;
      if (el.dataset.k === 'sid') {
        const c = clsFromSid(el.value);
        if (c && (!this.draft.cls || this.draft.cls === clsFromSid(this.orig.sid) || $('f-cls').dataset.auto)) {
          this.draft.cls = c; $('f-cls').value = c; $('f-cls').dataset.auto = '1';
        }
      }
      if (el.dataset.k === 'cls') delete el.dataset.auto;
      this.setDirty();
    });
    body.querySelectorAll('[data-open]').forEach(b => b.onclick = () => openFile(b.dataset.open));
    body.querySelectorAll('[data-review]').forEach(b => b.onclick = () => {
      if (this.dirty) { toast('먼저 저장하거나 변경을 취소하세요.'); return; }
      const id = this.openId;
      this.closeDrawer(true);
      this.openReview([{ id, stage: b.dataset.review }], 0);
    });
    body.querySelectorAll('.stage').forEach(sec => {
      const key = sec.dataset.stage;
      sec.querySelectorAll('input[type=radio]').forEach(r => r.onchange = () => {
        this.draft[key].status = r.value;
        if (r.value !== 'none' && !this.draft[key].date) this.draft[key].date = todayStr();
        this.keepFb(); this.setDirty(); this.renderDrawer();
        const again = $('dBody').querySelector(`input[name="st-${key}"][value="${r.value}"]`);
        if (again) again.focus();
      });
      sec.querySelectorAll('[data-sk]').forEach(el => el.oninput = () => { this.draft[key][el.dataset.sk] = el.value; this.setDirty(); });
      const fb = sec.querySelector('[data-fb]');
      if (fb) fb.oninput = () => { this.fb[key] = fb.value; this.setDirty(); };
    });
    body.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
      if (b.dataset.armed) { this.delEvents.add(b.dataset.del); this.keepFb(); this.setDirty(); this.renderDrawer(); }
      else { b.dataset.armed = '1'; b.textContent = '한 번 더 눌러 삭제'; setTimeout(() => { if (b.isConnected) { delete b.dataset.armed; b.textContent = '삭제'; } }, 3000); }
    });
  },

  async save() {
    this.keepFb();
    const d = this.draft, o = this.orig;
    const row = {
      sid: d.sid.trim() || null,
      name: d.name.trim(),
      cls: String(d.cls || '').trim().replace(/반$/, '') || null,
      email: d.email.trim().toLowerCase() || null,
      field: d.field.trim(),
      topic: d.topic.trim(),
      extra_required: !!d.extra_required
    };
    if (this.isAdmin) row.teacher_email = d.teacher_email || null;
    else if (this.isNew) row.teacher_email = this.email;
    if (!row.name) { toast('이름을 입력하세요.'); $('f-name').focus(); return; }
    if (row.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) { toast('이메일 형식을 확인하세요.'); $('f-email').focus(); return; }

    $('dSave').disabled = true;
    $('dMsg').textContent = '저장 중입니다.';
    const now = new Date().toISOString();
    let stamped = null;
    try {
      let id = this.openId;
      if (this.isNew) {
        const { data, error } = await sb.from('students').insert({ ...row, updated_at: now }).select().single();
        if (error) throw error;
        id = data.id;
      } else {
        const changed = ['sid', 'name', 'cls', 'email', 'field', 'topic'].some(k => (row[k] || '') !== (o[k] || '')) || row.extra_required !== !!o.extra_required || (this.isAdmin && (row.teacher_email || '') !== (o.teacher_email || ''));
        if (changed) {
          const { error } = await sb.from('students').update({ ...row, updated_at: now }).eq('id', id);
          if (error) throw error;
        }
      }
      if ((d.memo || '') !== (o.memo || '')) {
        const { error } = await sb.from('teacher_notes').upsert({ student_id: id, memo: d.memo, updated_at: now });
        if (error) throw error;
      }
      for (const g of STAGES) {
        const a = d[g.key], b = o[g.key];
        const statusChanged = a.status !== b.status;
        if (statusChanged || a.date !== b.date || (a.link || '') !== (b.link || '')) {
          const payload = { student_id: id, stage: g.key, status: a.status, link: (a.link || '').trim() || null, updated_at: now };
          if (a.date !== b.date) payload.submitted_at = a.date ? new Date(a.date + 'T12:00:00').toISOString() : null;
          const { error } = await sb.from('submissions').upsert(payload, { onConflict: 'student_id,stage' });
          if (error) throw error;
        }
        const note = (this.fb[g.key] || '').trim();
        if (note || statusChanged) {
          const { error } = await sb.from('events').insert({ student_id: id, stage: g.key, kind: note ? 'feedback' : 'status', status: a.status, note });
          if (error) throw error;
        }
        if (statusChanged && a.status === 'done') stamped = id + g.key;
      }
      if (this.delEvents.size) {
        const { error } = await sb.from('events').delete().in('id', [...this.delEvents]);
        if (error) throw error;
      }
      await this.load();
      this.justStamped = stamped;
      this.renderAll();
      this.dirty = false;
      this.openDrawer(id);
      toast('저장했습니다.');
    } catch (e) {
      toast(dbMsg(e));
      $('dSave').disabled = false;
      this.updateFoot();
    }
  },

  async remove() {
    const b = $('dDel');
    if (!b.classList.contains('armed')) {
      b.classList.add('armed'); b.textContent = '정말 삭제';
      setTimeout(() => { b.classList.remove('armed'); b.textContent = '학생 삭제'; }, 3500);
      return;
    }
    const { error } = await sb.from('students').delete().eq('id', this.openId);
    if (error) { toast(dbMsg(error)); return; }
    this.students.delete(this.openId);
    this.dirty = false;
    this.closeDrawer(true);
    this.renderAll();
    toast('학생을 삭제했습니다.');
  },

  /* ----- 보면서 피드백 쓰기 ----- */
  rv: null,

  waitingQueue() {
    const q = [];
    for (const s of this.students.values()) {
      for (const g of STAGES) {
        if (s[g.key].status === 'waiting' && s[g.key].file_path) q.push({ id: s.id, stage: g.key, at: s[g.key].submitted_at || '' });
      }
    }
    return q.sort((a, b) => a.at.localeCompare(b.at));
  },

  rvItem() {
    if (!this.rv) return null;
    const q = this.rv.queue[this.rv.idx];
    const s = q && this.students.get(q.id);
    if (!s) return null;
    const st = s[q.stage];
    return { s, stage: q.stage, g: STAGES.find(x => x.key === q.stage), st, path: st.file_path, name: st.file_name || '제출 파일' };
  },

  openReview(queue, idx) {
    if (!queue.length) { toast('검토할 제출물이 없습니다.'); return; }
    this.rv = { queue, idx, status: null, fb: '', dirty: false, cleanup: null, token: 0, zoom: 1, armed: false };
    $('review').classList.add('on');
    $('review').setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    this.renderReview(true);
  },

  confirmLeave(msg) {
    const rv = this.rv;
    if (!rv.dirty || rv.armed) return true;
    rv.armed = true;
    toast(msg);
    setTimeout(() => { if (this.rv) this.rv.armed = false; }, 3000);
    return false;
  },

  closeReview(force) {
    if (!this.rv) return;
    if (!force && !this.confirmLeave('저장하지 않은 피드백이 있습니다. 한 번 더 누르면 버리고 닫습니다.')) return;
    if (this.rv.cleanup) this.rv.cleanup();
    this.hideMemoUI();
    $('rvView').innerHTML = '';
    $('review').classList.remove('on');
    $('review').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.rv = null;
    this.renderAll();
  },

  reviewGo(step, force) {
    const rv = this.rv;
    if (!rv) return;
    const n = rv.idx + step;
    if (n < 0 || n >= rv.queue.length) return;
    if (!force && !this.confirmLeave('저장하지 않은 피드백이 있습니다. 한 번 더 누르면 버리고 이동합니다.')) return;
    rv.idx = n;
    rv.armed = false;
    this.renderReview(true);
  },

  async renderReview(loadDoc) {
    const rv = this.rv;
    const it = this.rvItem();
    if (!it) { this.closeReview(true); return; }
    if (loadDoc) { rv.status = it.st.status; rv.fb = ''; rv.dirty = false; }
    $('rvName').textContent = `${it.s.sid ? it.s.sid + ' ' : ''}${it.s.name}`;
    $('rvMeta').textContent = ` ${it.g.full}${it.st.submitted_at ? ' · ' + fmtDT(it.st.submitted_at) + ' 제출' : ''}`;
    $('rvPos').textContent = rv.queue.length > 1 ? `${rv.idx + 1} / ${rv.queue.length}` : '';
    $('rvPrev').hidden = $('rvNext').hidden = rv.queue.length < 2;
    $('rvPrev').disabled = rv.idx === 0;
    $('rvNext').disabled = rv.idx >= rv.queue.length - 1;
    $('rvFile').textContent = '📄 ' + it.name;
    this.renderReviewSide();
    if (!loadDoc) return;
    if (rv.cleanup) rv.cleanup();
    rv.cleanup = null;
    const token = ++rv.token;
    const box = document.createElement('div');
    box.className = 'rv-box';
    $('rvView').replaceChildren(box);
    const cleanup = await renderDoc(box, it.path, it.name);
    if (!this.rv || this.rv.token !== token) { cleanup(); return; }
    rv.cleanup = cleanup;
    rv.zoom = 1;
    requestAnimationFrame(() => requestAnimationFrame(() => this.zoom(0)));
    this.applyMemos();
    if (this.memosFor(it.s.id, it.stage).length) this.renderReviewSide();
    if (!this.rvResize && window.ResizeObserver) {
      let t = null;
      this.rvResize = new ResizeObserver(() => {
        clearTimeout(t);
        t = setTimeout(() => { if (this.rv && this.rv.autoFit !== false) this.zoom(0); }, 120);
      });
      this.rvResize.observe($('rvView'));
    }
  },

  /* ===== 본문 메모 ===== */
  memos: [], memoOK: true,

  memosFor(sid, stage) { return this.memos.filter(m => m.student_id === sid && m.stage === stage); },

  /* 문서 글자 목록: 글자 위치로 문장을 찾고 표시하는 데 씁니다 */
  docRoot() {
    const v = $('rvView');
    return v.querySelector('.hx-scroll') || v.querySelector('.hwp-host') || null;
  },
  textIndex(root) {
    const nodes = [];
    let full = '';
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => {
        const p = n.parentElement;
        if (!p || p.closest('style,script,.hx-note,.memo-ui')) return NodeFilter.FILTER_REJECT;
        return n.nodeValue ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    for (let n = w.nextNode(); n; n = w.nextNode()) { nodes.push({ node: n, start: full.length, end: full.length + n.nodeValue.length }); full += n.nodeValue; }
    return { nodes, full };
  },
  offsetOf(idx, node, offset) {
    if (node.nodeType === 3) { const e = idx.nodes.find(x => x.node === node); return e ? e.start + offset : -1; }
    /* 요소 안의 위치: 그 앞까지의 글자 수 */
    const child = node.childNodes[offset] || null;
    for (const e of idx.nodes) {
      if (child ? (child === e.node || child.contains(e.node) || (child.compareDocumentPosition(e.node) & Node.DOCUMENT_POSITION_FOLLOWING)) : false) return e.start;
    }
    return idx.full.length;
  },

  memoSelection() {
    if (!this.rv) return;
    const root = this.docRoot();
    const sel = window.getSelection();
    if (!root || !sel || sel.isCollapsed || !sel.rangeCount) { this.hideMemoUI(); return; }
    const range = sel.getRangeAt(0);
    if (!root.contains(range.commonAncestorContainer)) { this.hideMemoUI(); return; }
    const text = sel.toString().replace(/\s+/g, ' ').trim();
    if (text.length < 2) { this.hideMemoUI(); return; }
    const idx = this.textIndex(root);
    const a = this.offsetOf(idx, range.startContainer, range.startOffset);
    const b = this.offsetOf(idx, range.endContainer, range.endOffset);
    if (a < 0 || b <= a) { this.hideMemoUI(); return; }
    const quote = idx.full.slice(a, b);
    this.pendingMemo = { quote: quote.slice(0, 1000), prefix: idx.full.slice(Math.max(0, a - 40), a), suffix: idx.full.slice(b, b + 40) };
    const r = range.getBoundingClientRect();
    this.showMemoButton(r);
  },

  memoHost() {
    let ui = document.getElementById('memoUI');
    if (!ui) { ui = document.createElement('div'); ui.id = 'memoUI'; ui.className = 'memo-ui'; document.body.appendChild(ui); }
    return ui;
  },
  hideMemoUI(onlyButton) {
    const ui = document.getElementById('memoUI');
    if (!ui) return;
    if (onlyButton && ui.dataset.mode === 'form') return;
    ui.hidden = true; ui.dataset.mode = '';
  },
  placeUI(ui, rect) {
    const top = Math.min(window.innerHeight - 20, rect.bottom + 8), left = Math.min(window.innerWidth - 330, Math.max(8, rect.left));
    ui.style.top = top + 'px'; ui.style.left = left + 'px';
  },
  showMemoButton(rect) {
    const ui = this.memoHost();
    ui.dataset.mode = 'button';
    ui.innerHTML = '<button class="btn sm primary" id="memoAdd">💬 메모 달기</button>';
    ui.hidden = false;
    this.placeUI(ui, rect);
    $('memoAdd').onmousedown = e => e.preventDefault();
    $('memoAdd').onclick = () => this.showMemoForm(rect);
  },
  showMemoForm(rect) {
    const ui = this.memoHost();
    const q = this.pendingMemo.quote;
    ui.dataset.mode = 'form';
    ui.innerHTML = `<div class="memo-form">
      <div class="memo-q">“${esc(q.length > 80 ? q.slice(0, 80) + '…' : q)}”</div>
      <textarea class="in" id="memoText" rows="3" maxlength="3000" placeholder="이 부분에 대한 메모를 쓰세요. 학생에게 보입니다."></textarea>
      <div class="memo-btns"><button class="btn sm" id="memoCancel">취소</button><button class="btn sm primary" id="memoSave">메모 저장</button></div>
    </div>`;
    ui.hidden = false;
    this.placeUI(ui, rect);
    const ta = $('memoText');
    ta.focus();
    $('memoCancel').onclick = () => { this.hideMemoUI(); window.getSelection().removeAllRanges(); };
    $('memoSave').onclick = () => this.saveMemo();
    ta.onkeydown = e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) this.saveMemo(); if (e.key === 'Escape') { e.stopPropagation(); this.hideMemoUI(); } };
  },
  async saveMemo() {
    const it = this.rvItem();
    const note = ($('memoText').value || '').trim();
    if (!note) { toast('메모 내용을 쓰세요.'); return; }
    if (!this.memoOK) { toast('본문 메모를 쓰려면 Supabase에서 update-memos.sql 을 먼저 실행하세요.'); return; }
    $('memoSave').disabled = true;
    const row = { student_id: it.s.id, stage: it.stage, file_path: it.path, ...this.pendingMemo, note, author_email: this.email, author_name: this.tName(this.email) };
    const { data, error } = await sb.from('doc_memos').insert(row).select().single();
    if (error) { toast(dbMsg(error)); $('memoSave').disabled = false; return; }
    this.memos.push(data || { ...row, id: 'tmp' + Date.now(), created_at: new Date().toISOString() });
    this.hideMemoUI();
    window.getSelection().removeAllRanges();
    this.applyMemos();
    this.renderReviewSide();
    toast('메모를 달았습니다. 학생 화면에도 보입니다.');
  },
  async deleteMemo(id) {
    const { error } = await sb.from('doc_memos').delete().eq('id', id);
    if (error) { toast(dbMsg(error)); return; }
    this.memos = this.memos.filter(m => m.id !== id);
    this.applyMemos();
    this.renderReviewSide();
  },

  /* 저장된 메모를 문서에서 찾아 노란색으로 표시합니다 */
  applyMemos() {
    const it = this.rvItem();
    const root = this.docRoot();
    if (!it || !root) return;
    root.querySelectorAll('mark.memo-hl').forEach(m => { const p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); p.removeChild(m); p.normalize(); });
    const list = this.memosFor(it.s.id, it.stage);
    if (!list.length) return;
    const idx = this.textIndex(root);
    const spans = [];
    list.forEach(m => {
      if (!m.quote) return;
      let best = -1, bestScore = -1;
      for (let at = idx.full.indexOf(m.quote); at >= 0; at = idx.full.indexOf(m.quote, at + 1)) {
        const pre = idx.full.slice(Math.max(0, at - m.prefix.length), at), suf = idx.full.slice(at + m.quote.length, at + m.quote.length + m.suffix.length);
        let sc = 0;
        for (let k = 1; k <= Math.min(pre.length, m.prefix.length) && pre[pre.length - k] === m.prefix[m.prefix.length - k]; k++) sc++;
        for (let k = 0; k < Math.min(suf.length, m.suffix.length) && suf[k] === m.suffix[k]; k++) sc++;
        if (sc > bestScore) { bestScore = sc; best = at; }
      }
      m._found = best >= 0;
      if (best >= 0 && !spans.some(x => best < x.b && best + m.quote.length > x.a)) spans.push({ a: best, b: best + m.quote.length, id: m.id });
    });
    /* 뒤에서부터 감싸야 앞쪽 위치가 바뀌지 않습니다 */
    const segs = [];
    spans.forEach(sp => idx.nodes.forEach(e => {
      const a = Math.max(sp.a, e.start), b = Math.min(sp.b, e.end);
      if (a < b && e.node.nodeValue.slice(a - e.start, b - e.start).trim()) segs.push({ node: e.node, a: a - e.start, b: b - e.start, id: sp.id, abs: a });
    }));
    segs.sort((x, y) => y.abs - x.abs).forEach(sg => {
      let n = sg.node;
      if (sg.b < n.nodeValue.length) n.splitText(sg.b);
      if (sg.a > 0) n = n.splitText(sg.a);
      const mk = document.createElement('mark');
      mk.className = 'memo-hl';
      mk.dataset.memo = sg.id;
      n.parentNode.insertBefore(mk, n);
      mk.appendChild(n);
    });
  },

  focusMemo(id, where) {
    if (where === 'side') {
      const li = document.querySelector(`#rvSide [data-memoli="${CSS.escape(id)}"]`);
      if (li) { li.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); li.classList.add('flash'); setTimeout(() => li.classList.remove('flash'), 1200); }
    } else {
      const mk = document.querySelector(`#rvView mark.memo-hl[data-memo="${CSS.escape(id)}"]`);
      if (mk) { mk.scrollIntoView({ behavior: 'smooth', block: 'center' }); document.querySelectorAll('#rvView mark.memo-hl[data-memo="' + CSS.escape(id) + '"]').forEach(x => { x.classList.add('on'); setTimeout(() => x.classList.remove('on'), 1400); }); }
      else toast('지금 파일에서 이 문장을 찾지 못했어요. 학생이 수정본을 냈을 수 있어요.');
    }
  },

  memoSideHTML(it) {
    const list = this.memosFor(it.s.id, it.stage);
    const cur = list.filter(m => !m.file_path || m.file_path === it.path), old = list.filter(m => m.file_path && m.file_path !== it.path);
    const li = m => `<li data-memoli="${esc(m.id)}" class="memo-li${m._found === false ? ' lost' : ''}">
      <button class="memo-quote" data-memogo="${esc(m.id)}">“${esc(m.quote.length > 70 ? m.quote.slice(0, 70) + '…' : m.quote)}”</button>
      <div class="memo-note">${esc(m.note)}</div>
      <div class="hmeta"><span>${fmtDT(m.created_at)}</span>${m.author_email && m.author_email !== this.email ? `<span>${esc(m.author_name || '')}</span>` : ''}${m.seen_at ? '<span class="seen">학생 읽음</span>' : '<span class="unseen">학생 안 읽음</span>'}
        <button class="del" data-memodel="${esc(m.id)}">삭제</button></div></li>`;
    return `<h3 class="rv-h memo-h">본문 메모 ${list.length ? list.length + '개' : ''}</h3>
      <p class="hint">${it.path && ['hwp', 'hwpx'].includes(extOf(it.name)) || this.docRoot() ? '왼쪽 문서에서 글을 드래그하면 그 부분에 메모를 달 수 있어요.' : 'PDF와 사진은 글을 선택할 수 없어요. 위 피드백 칸을 써 주세요.'}</p>
      ${cur.length ? `<ul class="memo-list">${cur.map(li).join('')}</ul>` : ''}
      ${old.length ? `<p class="hint">이전 제출본에 단 메모</p><ul class="memo-list old">${old.map(li).join('')}</ul>` : ''}`;
  },
  bindMemoSide() {
    const side = $('rvSide');
    side.querySelectorAll('[data-memogo]').forEach(b => b.onclick = () => this.focusMemo(b.dataset.memogo, 'doc'));
    side.querySelectorAll('[data-memodel]').forEach(b => b.onclick = () => {
      if (b.dataset.armed) this.deleteMemo(b.dataset.memodel);
      else { b.dataset.armed = '1'; b.textContent = '한 번 더 눌러 삭제'; setTimeout(() => { if (b.isConnected) { delete b.dataset.armed; b.textContent = '삭제'; } }, 3000); }
    });
  },

  zoom(step) {
    const rv = this.rv;
    if (!rv) return;
    const view = $('rvView');
    const pages = [...view.querySelectorAll('div[data-page-number]:not(.hwpjs-observer)')];
    if (!pages.length) return;
    /* 가로로 넘치는지 볼 스크롤 영역: HWPX는 .hx-scroll, HWP는 페이지들의 부모 */
    const sc = view.querySelector('.hx-scroll') || pages[0].parentElement || view;
    const apply = () => pages.forEach(p => p.style.zoom = rv.zoom);
    if (step === 0) {
      rv.autoFit = true;
      pages.forEach(p => p.style.zoom = 1);
      const w = pages[0].offsetWidth;
      const cs = getComputedStyle(sc);
      const avail = sc.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0) - 4;
      rv.zoom = w ? Math.min(1.4, Math.max(0.4, avail / w)) : 1;
      apply();
      /* 그래도 가로로 넘치면 넘치지 않을 때까지 조금씩 줄입니다 */
      for (let k = 0; k < 12 && sc.scrollWidth > sc.clientWidth + 1 && rv.zoom > 0.4; k++) { rv.zoom = Math.max(0.4, rv.zoom - 0.04); apply(); }
      sc.scrollLeft = 0;
    } else {
      rv.autoFit = false;
      rv.zoom = Math.min(2, Math.max(0.4, rv.zoom + step * 0.15));
      apply();
    }
  },

  renderReviewSide() {
    const rv = this.rv;
    const it = this.rvItem();
    const fbs = it.s.ev[it.stage].filter(e => e.kind === 'feedback');
    const hist = fbs.map(e => `<li class="k-feedback"><div class="hmeta"><span>${fmtDT(e.created_at)}</span>${e.status ? `<span class="pill ${e.status}">${ST[e.status].label}</span>` : ''}${e.seen_at ? '<span class="seen">학생 읽음</span>' : '<span class="unseen">학생 안 읽음</span>'}</div><div class="note">${esc(e.note)}</div></li>`).join('');
    const last = rv.idx >= rv.queue.length - 1;
    $('rvSide').innerHTML = `
      <p class="rv-topic">${it.s.topic ? esc(it.s.topic) : '연구 주제 미정'}</p>
      ${it.s.memo ? `<p class="rv-memo">지도 메모: ${esc(it.s.memo)}</p>` : ''}
      <label class="l">상태</label>
      <div class="seg" role="radiogroup" aria-label="상태">
        ${['none', 'waiting', 'revise', 'done'].map(s => `<label class="${rv.status === s ? 'sel-' + s : ''}"><input type="radio" name="rv-st" value="${s}" ${rv.status === s ? 'checked' : ''}><span>${ST[s].label}</span></label>`).join('')}
      </div>
      <label class="l" for="rvFb">학생에게 보낼 피드백</label>
      <textarea class="in rv-fb" id="rvFb" placeholder="문서를 보면서 바로 적으세요. 저장하면 이 학생의 화면에만 나타납니다.">${esc(rv.fb)}</textarea>
      <div class="rv-actions">
        <span class="hint" id="rvState">${rv.dirty ? '저장하지 않은 변경 있음' : ''}</span>
        <button class="btn" id="rvSave">저장</button>
        <button class="btn primary" id="rvSaveGo">${last ? '저장하고 닫기' : '저장하고 다음'}</button>
      </div>
      ${this.memoSideHTML(it)}
      ${hist ? `<h3 class="rv-h">이 단계에서 보낸 피드백</h3><ul class="hist">${hist}</ul>` : ''}`;
    const side = $('rvSide');
    this.bindMemoSide(it);
    side.querySelectorAll('input[name="rv-st"]').forEach(r => r.onchange = () => {
      rv.status = r.value;
      rv.dirty = true;
      this.renderReviewSide();
      const again = side.querySelector(`input[name="rv-st"][value="${r.value}"]`);
      if (again) again.focus();
    });
    const ta = $('rvFb');
    ta.oninput = () => { rv.fb = ta.value; rv.dirty = true; $('rvState').textContent = '저장하지 않은 변경 있음'; };
    $('rvSave').onclick = async () => { if (await this.saveReview()) this.renderReviewSide(); };
    $('rvSaveGo').onclick = async () => {
      if (!(await this.saveReview())) return;
      if (last) this.closeReview(true); else this.reviewGo(1, true);
    };
  },

  async saveReview() {
    const rv = this.rv;
    const it = this.rvItem();
    const note = rv.fb.trim();
    const statusChanged = rv.status !== it.st.status;
    if (!note && !statusChanged) return true;
    ['rvSave', 'rvSaveGo'].forEach(id => $(id).disabled = true);
    try {
      if (statusChanged) {
        const { error } = await sb.from('submissions').upsert({ student_id: it.s.id, stage: it.stage, status: rv.status, updated_at: new Date().toISOString() }, { onConflict: 'student_id,stage' });
        if (error) throw error;
      }
      const { error } = await sb.from('events').insert({ student_id: it.s.id, stage: it.stage, kind: note ? 'feedback' : 'status', status: rv.status, note });
      if (error) throw error;
      if (statusChanged && rv.status === 'done') this.justStamped = it.s.id + it.stage;
      await this.load();
      rv.dirty = false;
      rv.fb = '';
      rv.status = this.students.get(it.s.id)[it.stage].status;
      toast(note ? '저장했습니다. 학생 화면에 바로 나타납니다.' : '상태를 바꿨습니다.');
      return true;
    } catch (e) {
      toast(dbMsg(e));
      ['rvSave', 'rvSaveGo'].forEach(id => { if ($(id)) $(id).disabled = false; });
      return false;
    }
  },

  /* ----- 선생님 계정 ----- */
  async openTeachers() {
    this.openModal('mTeach');
    await this.loadTeachers();
  },

  async loadTeachers() {
    const list = $('teachList');
    try { await this.load(); this.renderAll(); } catch (e) { list.innerHTML = `<li class="hint">목록을 불러오지 못했습니다. ${esc(dbMsg(e))}</li>`; return; }
    const cnt = e => [...this.students.values()].filter(s => s.teacher_email === e).length;
    list.innerHTML = this.teachers.map(t => `<li>
      <span class="tpl-name" data-namebox="${esc(t.email)}">${t.name ? esc(t.name) : `<span class="warn">이름 없음</span>`}${t.is_admin ? ' <span class="tpl-place">관리자</span>' : ''}${t.email === this.email ? ' <span class="tpl-place me">나</span>' : ''}<small>${esc(t.email)} · 담당 ${cnt(t.email)}명</small></span>
      <button class="btn sm" data-tchname="${esc(t.email)}">이름 ${t.name ? '수정' : '넣기'}</button>
      ${t.email === this.email ? '' : `<button class="btn sm" data-tchadm="${esc(t.email)}">${t.is_admin ? '관리자 해제' : '관리자로 지정'}</button><button class="btn sm danger" data-tchdel="${esc(t.email)}">삭제</button>`}
    </li>`).join('');
    list.querySelectorAll('[data-tchname]').forEach(b => b.onclick = () => {
      const t = this.teachers.find(x => x.email === b.dataset.tchname);
      const box = list.querySelector(`[data-namebox="${CSS.escape(t.email)}"]`);
      box.innerHTML = `<input class="in" maxlength="40" value="${esc(t.name || '')}" placeholder="학생에게 보일 이름 (예: 김민수)"><small>${esc(t.email)}</small>`;
      const inp = box.querySelector('input');
      inp.focus();
      b.textContent = '저장';
      const save = async () => {
        const v = inp.value.trim();
        if (!v) { toast('이름을 입력하세요.'); inp.focus(); return; }
        const { error } = await sb.from('teachers').update({ name: v }).eq('email', t.email);
        if (error) { toast(dbMsg(error)); return; }
        toast('이름을 저장했습니다. 학생 화면에도 이 이름으로 보입니다.');
        this.loadTeachers();
      };
      b.onclick = save;
      inp.onkeydown = e => { if (e.key === 'Enter') save(); };
    });
    list.querySelectorAll('[data-tchadm]').forEach(b => b.onclick = async () => {
      const t = this.teachers.find(x => x.email === b.dataset.tchadm);
      const { error } = await sb.from('teachers').update({ is_admin: !t.is_admin }).eq('email', t.email);
      if (error) { toast(dbMsg(error)); return; }
      toast(t.is_admin ? '관리자에서 해제했습니다.' : '관리자로 지정했습니다.');
      this.loadTeachers();
    });
    list.querySelectorAll('[data-tchdel]').forEach(b => b.onclick = async () => {
      if (!b.classList.contains('armed')) { b.classList.add('armed'); b.textContent = '정말 삭제'; setTimeout(() => { if (b.isConnected) { b.classList.remove('armed'); b.textContent = '삭제'; } }, 3000); return; }
      const { error: e2 } = await sb.from('teachers').delete().eq('email', b.dataset.tchdel);
      if (e2) { toast(dbMsg(e2)); return; }
      toast('선생님 계정을 삭제했습니다. 담당 학생은 미배정이 됐습니다.');
      this.loadTeachers();
    });
  },

  async addTeacher() {
    const email = $('teachEmail').value.trim().toLowerCase();
    const name = $('teachName').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { toast('이메일 형식을 확인하세요.'); $('teachEmail').focus(); return; }
    if ([...this.students.values()].some(s => s.email === email)) { toast('학생으로 등록된 이메일입니다. 학생 명단에서 먼저 빼 주세요.'); return; }
    const { error } = await sb.from('teachers').insert({ email, name: name || null });
    if (error) { toast(error.code === '23505' ? '이미 추가된 선생님입니다.' : dbMsg(error)); return; }
    $('teachEmail').value = ''; $('teachName').value = '';
    toast(`${name || email} 선생님을 추가했습니다. ‘담당 배정’에서 학생을 나눠 주세요.`);
    this.loadTeachers();
  },

  /* ----- 생기부 초안 (AI) ----- */
  ai: null,

  aiReady(s) {
    const need = [...PARTS, OUTPUT];
    const missing = need.filter(g => !s[g.key].file_path).map(g => g.full.replace('최종보고서 ', ''));
    return { ok: !missing.length, missing };
  },

  async loadAI(id) {
    const { data, error } = await sb.from('record_drafts').select('*').eq('student_id', id).maybeSingle();
    if (!this.ai || this.ai.sid !== id) return;
    this.ai.loaded = true;
    this.ai.missingTable = !!error;
    this.ai.row = data || null;
    const box = $('aiBox');
    if (box) { box.outerHTML = this.aiHTML(); this.bindAI(); }
  },

  aiHTML() {
    const s = this.students.get(this.openId);
    if (!s || !this.ai) return '';
    const r = this.ai.row || {};
    const ready = this.aiReady(s);
    const areas = ['과목 세부능력 및 특기사항', '자율·자치활동', '진로활동', '동아리활동'];
    const area = r.area || areas[0];
    const len = r.length_limit || 500;
    const pack = this.ai.pack;
    return `<section class="stage ai-box" id="aiBox">
      <h3 class="group-h">생기부 요약 자료</h3>
      ${this.ai.missingTable ? '<p class="notice">초안을 저장하려면 Supabase에서 update-record-drafts.sql 을 먼저 실행하세요.</p>' : ''}
      <p class="hint">${ready.ok ? '최종보고서 세 부분과 산출물이 모두 제출되어 요약 자료를 만들 수 있어요.' : `아직 안 낸 항목: <b>${ready.missing.join(', ')}</b>. 지금 있는 자료로 먼저 만들 수도 있어요.`}</p>
      <div class="row3">
        <div class="field"><label class="l" for="aiArea">영역</label><select class="in" id="aiArea">${areas.map(a => `<option ${a === area ? 'selected' : ''}>${a}</option>`).join('')}</select></div>
        <div class="field"><label class="l" for="aiSubject">과목명 (세특일 때)</label><input class="in" id="aiSubject" value="${esc(r.subject || '')}" placeholder="예: 수학"></div>
        <div class="field"><label class="l" for="aiLen">분량</label><select class="in" id="aiLen">${[300, 500, 700, 1000].map(n => `<option value="${n}" ${n === len ? 'selected' : ''}>${n}자 이내</option>`).join('')}</select></div>
      </div>
      <div class="ai-opts">
        <label class="agree small"><input type="checkbox" id="aiMask" checked> <span>학생 이름 가리기</span></label>
        <label class="agree small"><input type="checkbox" id="aiPrompt" checked> <span>AI 작성 지시문 넣기</span></label>
        <label class="agree small"><input type="checkbox" id="aiFb" checked> <span>선생님 피드백 포함</span></label>
      </div>
      <div class="ai-actions"><button class="btn primary" id="aiGo" ${this.ai.busy ? 'disabled' : ''}>${pack ? '요약 자료 다시 만들기' : '요약 자료 만들기'}</button><span class="hint" id="aiMsg">${esc(this.ai.msg || '')}</span></div>
      ${pack ? `
        <label class="l" for="aiPack">요약 자료 · 복사해서 AI 채팅(예: Claude)에 붙여넣으세요</label>
        <textarea class="in ai-pack" id="aiPack" rows="10">${esc(pack.text)}</textarea>
        <div class="ai-count">${[...pack.text].length.toLocaleString()}자${[...pack.text].length > 60000 ? ' · <span class="warn">길어요. AI 채팅에 다 안 들어가면 본론을 나눠 붙여넣으세요.</span>' : ''}</div>
        <div class="ai-actions">
          <button class="btn primary" id="aiCopyPack">자료 복사</button>
          <a class="btn" href="https://claude.ai/new" target="_blank" rel="noopener noreferrer">Claude 열기 ↗</a>
          <button class="btn" id="aiTxt">텍스트 파일로 받기</button>
        </div>
        ${pack.files.length ? `<div class="ai-files"><b>글로 옮기지 못한 제출물</b> · PDF와 사진은 AI 채팅에 파일로 직접 첨부하세요.
          <ul>${pack.files.map((f, i) => `<li>${esc(f.label)}: ${esc(f.name)} ${f.path ? `<button class="btn sm" data-aifile="${i}">받기</button>` : `<span class="hint">(${esc(f.why)})</span>`}</li>`).join('')}</ul></div>` : ''}` : ''}
      <div class="ai-final">
        <label class="l" for="aiDraft">생기부 초안 · AI가 써 준 글을 붙여넣고 고쳐서 저장하세요</label>
        <textarea class="in ai-draft" id="aiDraft" rows="8" placeholder="AI 채팅에서 받은 초안을 여기에 붙여넣으세요.">${esc(r.draft || '')}</textarea>
        <div class="ai-count" id="aiCount"></div>
        <div class="ai-actions"><button class="btn" id="aiCopy">복사</button><button class="btn primary" id="aiSave">초안 저장</button>
          <span class="hint">${r.updated_at ? `${fmtDT(r.updated_at)} 저장${r.updated_by ? ' · ' + esc(this.tName(r.updated_by)) : ''}` : ''}</span></div>
      </div>
      <p class="hint ai-warn">AI가 쓴 초안은 참고용이에요. 학생의 실제 활동과 맞는지 확인하고 학교생활기록부 기재요령에 맞게 직접 고쳐 쓰세요. 외부 AI에 붙여넣기 전에 개인정보(이름, 학번 등)가 가려졌는지 한 번 더 확인하세요.</p>
    </section>`;
  },

  bindAI() {
    const go = $('aiGo');
    if (!go) return;
    go.onclick = () => this.buildPack();
    const ta = $('aiDraft');
    const lim = () => parseInt($('aiLen').value, 10);
    const upd = () => {
      const n = [...ta.value].length, b = neisBytes(ta.value);
      $('aiCount').innerHTML = ta.value ? `<span class="${n > lim() ? 'warn' : ''}">${n}자 (공백 포함) / ${lim()}자</span> · NEIS ${b.toLocaleString()}바이트 (한글 3, 영문·숫자 1)` : '';
    };
    ta.oninput = upd;
    $('aiLen').onchange = upd;
    upd();
    $('aiCopy').onclick = () => this.copyText(ta.value, '초안을 복사했습니다.', ta);
    $('aiSave').onclick = () => this.saveAI({ draft: ta.value });
    const cp = $('aiCopyPack');
    if (cp) {
      cp.onclick = () => this.copyText($('aiPack').value, '요약 자료를 복사했습니다. AI 채팅에 붙여넣으세요.', $('aiPack'));
      $('aiTxt').onclick = () => {
        const s = this.students.get(this.openId);
        saveBlob(new Blob(['\uFEFF' + $('aiPack').value], { type: 'text/plain;charset=utf-8' }), `${safeName((s.sid || '') + '_요약자료')}.txt`);
      };
      $('aiBox').querySelectorAll('[data-aifile]').forEach(b => b.onclick = async () => {
        const f = this.ai.pack.files[+b.dataset.aifile];
        try { saveBlob(await downloadBlob(f.path), f.name); } catch (e) { toast(e && e.demo ? e.message : '파일을 받지 못했습니다.'); }
      });
    }
  },

  async copyText(text, msg, el) {
    try { await navigator.clipboard.writeText(text); toast(msg); }
    catch (e) { if (el) { el.focus(); el.select(); } toast('복사가 막혔습니다. 선택된 글을 Ctrl+C로 복사하세요.'); }
  },

  async saveAI(patch, silent) {
    const id = this.openId;
    const row = {
      student_id: id,
      area: $('aiArea') ? $('aiArea').value : '',
      subject: $('aiSubject') ? $('aiSubject').value.trim() : '',
      length_limit: $('aiLen') ? parseInt($('aiLen').value, 10) : 500,
      ...patch,
      updated_at: new Date().toISOString(),
      updated_by: this.email
    };
    const { data, error } = await sb.from('record_drafts').upsert(row, { onConflict: 'student_id' }).select().single();
    if (error) { toast(dbMsg(error)); return false; }
    if (this.ai && this.ai.sid === id) this.ai.row = data || row;
    if (!silent) toast('초안을 저장했습니다.');
    const box = $('aiBox');
    if (box && this.openId === id) { box.outerHTML = this.aiHTML(); this.bindAI(); }
    return true;
  },

  async buildPack() {
    const id = this.openId;
    const s = this.students.get(id);
    if (!s || this.ai.busy) return;
    const setMsg = m => { this.ai.msg = m; const el = $('aiMsg'); if (el) el.textContent = m; };
    const keepDraft = $('aiDraft') ? $('aiDraft').value : '';
    const area = $('aiArea').value, subject = $('aiSubject').value.trim(), length = parseInt($('aiLen').value, 10);
    const mask = $('aiMask').checked, withPrompt = $('aiPrompt').checked, withFb = $('aiFb').checked;
    this.ai.busy = true;
    $('aiGo').disabled = true;
    try {
      const sections = [], files = [];
      const stages = stagesFor(s).filter(g => s[g.key].file_path);
      let i = 0;
      for (const g of stages) {
        i++;
        setMsg(`제출물 읽는 중 ${i} / ${stages.length}`);
        const sub = s[g.key];
        try {
          const r = await extractForAI(sub.file_path, sub.file_name);
          if (r.text && r.text.trim()) sections.push({ label: g.full, text: r.text.trim().slice(0, 20000) });
          else if (r.data) files.push({ label: g.full, name: sub.file_name, path: sub.file_path });
          else files.push({ label: g.full, name: sub.file_name, why: r.skip || '내용 없음' });
        } catch (e) { files.push({ label: g.full, name: sub.file_name, why: '읽기 실패' }); }
      }
      const notSubmitted = stagesFor(s).filter(g => !s[g.key].file_path).map(g => g.full);
      /* 이름 가리기: 이름(성 포함)과 이름만(성 뺀 두 글자) 모두 '학생'으로 */
      const hide = t => {
        if (!mask || !t) return t;
        let out = t;
        const nm = (s.name || '').trim();
        const keys = [nm, nm.length >= 3 ? nm.slice(1) : ''].filter(k => k.length >= 2);
        keys.forEach(k => { out = out.split(k).join('○○'); });
        if (s.sid) out = out.split(s.sid).join('(학번)');
        if (s.email) out = out.split(s.email).join('(이메일)');
        return out;
      };
      const fbText = withFb ? stagesFor(s).flatMap(g => s.ev[g.key].filter(e => e.kind === 'feedback' && e.note).map(e => `- ${g.full} (${fmtDate(e.created_at)}): ${e.note}`)).join('\n') : '';
      const prompt = `아래는 고등학생의 개인연구 제출물입니다. 이 자료만 근거로 학교생활기록부 '${area}'${subject ? `(${subject})` : ''}에 쓸 초안을 공백 포함 ${length}자 이내로 써 주세요.

지켜 주세요:
1. 제출물에 실제로 드러난 내용만 근거로 쓰고, 없는 활동·결과·성과를 지어내거나 부풀리지 마세요.
2. 학생 이름 없이 주어를 생략하고, '~함', '~임', '~보임'처럼 교사의 관찰 문체로 끝맺어 주세요.
3. 탐구 동기 → 탐구 과정(자료, 방법, 분석) → 결과와 결론 → 드러난 역량과 성장 순서로 써 주세요. 구체적인 개념·방법·수치가 있으면 살려 주세요.
4. 학교생활기록부 기재요령의 금지 사항(교외 수상, 논문·학회지 투고나 등재, 도서 출간, 특허 등 지식재산권, 공인어학시험, 교외 인증, 부모의 사회경제적 지위, 대학명·기관명·상호명, 사교육 관련 내용)은 쓰지 마세요.
5. 답은 ① 생기부 초안 ② 초안의 근거가 된 제출물 내용(항목별 한 줄) ③ 교사가 확인하면 좋을 점 순서로 주세요.

`;
      const body = [
        `[연구 주제] ${hide(s.topic || '(없음)')}${s.field ? `\n[연구 분야] ${s.field}` : ''}`,
        ...sections.map(x => `\n===== ${x.label} =====\n${hide(x.text)}`),
        fbText ? `\n===== 선생님 피드백 기록 =====\n${hide(fbText)}` : '',
        files.length ? `\n(글로 옮기지 못한 제출물: ${files.map(f => `${f.label} - ${f.name}`).join(', ')} → 파일을 따로 첨부함)` : '',
        notSubmitted.length ? `\n(아직 제출하지 않은 항목: ${notSubmitted.join(', ')})` : ''
      ].filter(Boolean).join('\n');
      const text = (withPrompt ? prompt : '') + body;
      if (!this.ai || this.ai.sid !== id) return;
      this.ai.pack = { text, files };
      this.ai.busy = false;
      this.ai.msg = sections.length ? `완료. 제출물 ${sections.length}개를 글로 정리했어요.` : '글로 옮길 수 있는 제출물이 없어요. 아래 파일을 AI 채팅에 직접 첨부하세요.';
      if (!this.ai.row) this.ai.row = { area, subject, length_limit: length, draft: keepDraft };
      else Object.assign(this.ai.row, { area, subject, length_limit: length, draft: keepDraft });
      const box = $('aiBox');
      if (box) { box.outerHTML = this.aiHTML(); this.bindAI(); }
      ['aiMask', 'aiPrompt', 'aiFb'].forEach((k, j) => { const el = $(k); if (el) el.checked = [mask, withPrompt, withFb][j]; });
      toast('요약 자료를 만들었습니다.');
    } catch (e) {
      if (this.ai && this.ai.sid === id) { this.ai.busy = false; setMsg(''); const b = $('aiGo'); if (b) b.disabled = false; }
      toast(e.message || '요약 자료를 만들지 못했습니다.');
    }
  },

  /* ----- 공지사항 ----- */
  anns: [], annEdit: null,

  async openAnn() {
    $('annIntro').textContent = this.isAdmin
      ? '‘내 담당 학생에게’ 공지는 선생님 담당 학생에게만, ‘전체 학생에게’ 공지는 모든 학생 화면 맨 위에 보입니다.'
      : '여기에 쓴 공지는 선생님 담당 학생들의 화면 맨 위에 보입니다.';
    $('annAud').hidden = !this.isAdmin;
    $('annListT').textContent = this.isAdmin ? '게시된 공지 (모든 선생님)' : '내가 게시한 공지';
    this.resetAnnForm();
    this.openModal('mAnn');
    await this.loadAnns();
  },

  resetAnnForm() {
    this.annEdit = null;
    $('annTitle').value = ''; $('annBody').value = ''; $('annPin').checked = false; $('annAud').value = 'mine';
    $('annGo').textContent = '게시';
    $('annCancel').hidden = true;
  },

  async loadAnns() {
    const list = $('annList');
    const { data, error } = await sb.from('announcements').select('*').order('created_at', { ascending: false });
    if (error) { list.innerHTML = `<li class="hint">공지를 불러오지 못했습니다. ${esc(dbMsg(error))}</li>`; return; }
    this.anns = data || [];
    if (!this.anns.length) { list.innerHTML = '<li class="hint">아직 게시한 공지가 없습니다.</li>'; return; }
    const sorted = [...this.anns].sort((a, b) => (b.pinned - a.pinned) || b.created_at.localeCompare(a.created_at));
    list.innerHTML = sorted.map(a => `<li>
      <div class="ann-meta">
        <span class="tpl-place">${a.audience === 'all' ? '전체 학생' : esc(a.teacher_email === this.email ? '내 담당 학생' : (a.author_name || this.tName(a.teacher_email)) + ' 선생님 담당')}</span>
        ${a.pinned ? '<span class="tpl-place pin">고정</span>' : ''}
        <span class="hint">${fmtDT(a.created_at)}${a.updated_at && a.updated_at > a.created_at ? ' (수정됨)' : ''}${a.teacher_email !== this.email ? ` · ${esc(a.author_name || this.tName(a.teacher_email))}` : ''}</span>
        <span class="spacer"></span>
        <button class="btn sm" data-annedit="${esc(a.id)}">수정</button>
        <button class="btn sm danger" data-anndel="${esc(a.id)}">삭제</button>
      </div>
      <b class="ann-title">${esc(a.title)}</b>
      ${a.body ? `<div class="ann-body">${esc(a.body)}</div>` : ''}
    </li>`).join('');
    list.querySelectorAll('[data-annedit]').forEach(b => b.onclick = () => {
      const a = this.anns.find(x => x.id === b.dataset.annedit);
      this.annEdit = a.id;
      $('annTitle').value = a.title; $('annBody').value = a.body || ''; $('annPin').checked = !!a.pinned; $('annAud').value = a.audience;
      $('annGo').textContent = '수정 저장';
      $('annCancel').hidden = false;
      $('annTitle').focus();
    });
    list.querySelectorAll('[data-anndel]').forEach(b => b.onclick = async () => {
      if (!b.classList.contains('armed')) { b.classList.add('armed'); b.textContent = '정말 삭제'; setTimeout(() => { if (b.isConnected) { b.classList.remove('armed'); b.textContent = '삭제'; } }, 3000); return; }
      const { error: e2 } = await sb.from('announcements').delete().eq('id', b.dataset.anndel);
      if (e2) { toast(dbMsg(e2)); return; }
      if (this.annEdit === b.dataset.anndel) this.resetAnnForm();
      toast('공지를 삭제했습니다.');
      this.loadAnns();
    });
  },

  async saveAnn() {
    const title = $('annTitle').value.trim();
    const body = $('annBody').value.trim();
    if (!title) { toast('제목을 입력하세요.'); $('annTitle').focus(); return; }
    const audience = this.isAdmin ? $('annAud').value : 'mine';
    const row = { title, body, pinned: $('annPin').checked, audience, updated_at: new Date().toISOString() };
    $('annGo').disabled = true;
    let error;
    if (this.annEdit) ({ error } = await sb.from('announcements').update(row).eq('id', this.annEdit));
    else ({ error } = await sb.from('announcements').insert({ ...row, teacher_email: this.email, author_name: this.tName(this.email) }));
    $('annGo').disabled = false;
    if (error) { toast(dbMsg(error)); return; }
    toast(this.annEdit ? '공지를 수정했습니다.' : (audience === 'all' ? '전체 학생에게 공지를 게시했습니다.' : '담당 학생들에게 공지를 게시했습니다.'));
    this.resetAnnForm();
    this.loadAnns();
  },

  /* ----- 담당 배정 ----- */
  openAssign() {
    const sel = $('asTeacher');
    sel.innerHTML = this.teachers.map(t => `<option value="${esc(t.email)}">${esc(this.tName(t.email))} 선생님 (${esc(t.email)})</option>`).join('');
    const ft = $('fteacher').value;
    if (ft && ft !== '__none') sel.value = ft;
    $('asMsg').textContent = '';
    this.renderAssign();
    this.openModal('mAssign');
  },

  renderAssign() {
    const te = $('asTeacher').value;
    const list = [...this.students.values()].sort((a, b) => (a.sid || '~').localeCompare(b.sid || '~', undefined, { numeric: true }));
    $('asList').innerHTML = list.map(s => `<li><label>
      <input type="checkbox" data-st="${esc(s.id)}" ${s.teacher_email ? `data-cur="${esc(s.teacher_email)}"` : ''} ${s.teacher_email === te ? 'checked' : ''}>
      <span class="sid">${esc(s.sid || '')}</span> <span class="nm">${esc(s.name)}</span>
      <span class="tch${s.teacher_email ? '' : ' none'}">${s.teacher_email ? (s.teacher_email === te ? '이 선생님' : esc(this.tName(s.teacher_email))) : '미배정'}</span>
    </label></li>`).join('');
    const upd = () => { $('asMsg').textContent = `${$('asList').querySelectorAll('input:checked').length}명 선택`; };
    $('asList').querySelectorAll('input').forEach(c => c.onchange = upd);
    upd();
  },

  async saveAssign() {
    const te = $('asTeacher').value;
    if (!te) return;
    const boxes = [...$('asList').querySelectorAll('input[data-st]')];
    const add = boxes.filter(c => c.checked && c.dataset.cur !== te).map(c => c.dataset.st);
    const remove = boxes.filter(c => !c.checked && c.dataset.cur === te).map(c => c.dataset.st);
    if (!add.length && !remove.length) { this.closeModal('mAssign'); return; }
    $('asGo').disabled = true;
    try {
      if (add.length) { const { error } = await sb.from('students').update({ teacher_email: te }).in('id', add); if (error) throw error; }
      if (remove.length) { const { error } = await sb.from('students').update({ teacher_email: null }).in('id', remove); if (error) throw error; }
      await this.load();
      this.renderAll();
      this.closeModal('mAssign');
      toast(`${this.tName(te)} 선생님 담당: ${add.length}명 추가${remove.length ? `, ${remove.length}명 해제` : ''}`);
    } catch (e) { toast(dbMsg(e)); }
    finally { $('asGo').disabled = false; }
  },

  /* ----- 양식 관리 ----- */
  templates: [],

  renderTemplates() {
    const list = $('tList');
    if (!this.templates.length) { list.innerHTML = '<li class="hint">아직 올린 양식이 없습니다.</li>'; return; }
    const order = Object.fromEntries(TPL_PLACES.map(([k], i) => [k, i]));
    const items = [...this.templates].sort((a, b) => (order[a.stage] ?? 99) - (order[b.stage] ?? 99) || a.created_at.localeCompare(b.created_at));
    list.innerHTML = items.map(t => `<li>
      <span class="tpl-place">${esc(tplPlace(t.stage))}</span>
      <span class="tpl-name">${esc(t.title || t.file_name)}${t.title && t.title !== t.file_name ? `<small>${esc(t.file_name)}</small>` : ''}</span>
      <button class="btn sm" data-tdl="${esc(t.id)}">내려받기</button>
      <button class="btn sm danger" data-tdel="${esc(t.id)}">삭제</button></li>`).join('');
    list.querySelectorAll('[data-tdl]').forEach(b => b.onclick = () => downloadTemplate(this.templates.find(t => t.id === b.dataset.tdl)));
    list.querySelectorAll('[data-tdel]').forEach(b => b.onclick = async () => {
      if (!b.classList.contains('armed')) { b.classList.add('armed'); b.textContent = '정말 삭제'; setTimeout(() => { if (b.isConnected) { b.classList.remove('armed'); b.textContent = '삭제'; } }, 3000); return; }
      const t = this.templates.find(x => x.id === b.dataset.tdel);
      const { error } = await sb.from('templates').delete().eq('id', t.id);
      if (error) { toast(dbMsg(error)); return; }
      await sb.storage.from(BUCKET).remove([t.file_path]);
      this.templates = this.templates.filter(x => x.id !== t.id);
      this.renderTemplates();
      toast('양식을 삭제했습니다.');
    });
  },

  async uploadTemplate() {
    const file = $('tFile').files[0];
    if (!file) { toast('먼저 파일을 고르세요.'); return; }
    if (file.size > MAX_MB * 1024 * 1024) { toast(`파일이 ${MAX_MB}MB보다 큽니다.`); return; }
    const ext = (file.name.includes('.') ? file.name.split('.').pop() : 'bin').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8) || 'bin';
    const path = `templates/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const btn = $('tGo');
    btn.disabled = true; btn.textContent = '올리는 중입니다';
    try {
      const { error: upErr } = await sb.storage.from(BUCKET).upload(path, file, { upsert: false, contentType: file.type || 'application/octet-stream' });
      if (upErr) throw upErr;
      const row = { stage: $('tStage').value, title: $('tTitle').value.trim() || file.name, file_path: path, file_name: file.name };
      const { data, error } = await sb.from('templates').insert(row).select().single();
      if (error) throw error;
      this.templates.push(data);
      $('tFile').value = ''; $('tTitle').value = ''; $('tPicked').textContent = '';
      this.renderTemplates();
      toast(`‘${tplPlace(row.stage)}’ 칸에 양식을 올렸습니다.`);
    } catch (e) {
      toast(e && e.message ? '양식을 올리지 못했습니다: ' + e.message : '양식을 올리지 못했습니다.');
    } finally {
      btn.disabled = false; btn.textContent = '양식 올리기';
    }
  },

  /* ----- 명단 붙여넣기 ----- */
  parseBulk(text) {
    const out = [];
    for (let line of text.split(/\r?\n/)) {
      line = line.trim();
      if (!line) continue;
      const cells = line.includes('\t') ? line.split('\t').map(s => s.trim()).filter(Boolean) : line.split(/\s+/);
      let sid = '', email = '';
      const rest = [];
      for (const c of cells) {
        if (!sid && !rest.length && /^\d{3,10}$/.test(c)) sid = c;
        else if (!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)) email = c.toLowerCase();
        else rest.push(c);
      }
      const name = rest.shift() || '';
      const topic = rest.join(' ').trim();
      if (sid || name) out.push({ sid, name, email, topic });
    }
    return out;
  },

  async applyBulk() {
    const rows = this.parseBulk($('bulkText').value);
    if (!rows.length) { toast('붙여넣은 명단이 없습니다.'); return; }
    const bySid = new Map([...this.students.values()].filter(s => s.sid).map(s => [s.sid, s]));
    const inserts = [], updates = [], problems = [];
    for (const r of rows) {
      const ex = r.sid && bySid.get(r.sid);
      if (ex) {
        const patch = {};
        if (r.email && r.email !== ex.email) patch.email = r.email;
        if (r.name && r.name !== ex.name) patch.name = r.name;
        if (r.topic && r.topic !== ex.topic) patch.topic = r.topic;
        if (Object.keys(patch).length) updates.push({ id: ex.id, patch, label: r.sid });
      } else if (r.name) {
        inserts.push({ sid: r.sid || null, name: r.name, email: r.email || null, topic: r.topic, cls: clsFromSid(r.sid) || null, ...(this.isAdmin ? {} : { teacher_email: this.email }) });
      } else problems.push(r.sid);
    }
    const btn = $('bulkGo');
    btn.disabled = true;
    let ok = 0;
    const now = new Date().toISOString();
    /* 한 명씩 넣어서, 다른 선생님 담당 학생과 겹치는 줄만 건너뜁니다 */
    for (const x of inserts) {
      const { error } = await sb.from('students').insert({ ...x, updated_at: now });
      if (error) problems.push(x.sid || x.name); else ok++;
      $('bulkMsg').textContent = `${ok}명 반영 중`;
    }
    for (const u of updates) {
      const { error } = await sb.from('students').update({ ...u.patch, updated_at: now }).eq('id', u.id);
      if (error) problems.push(u.label); else ok++;
      $('bulkMsg').textContent = `${ok}명 반영 중`;
    }
    btn.disabled = false;
    await this.load();
    this.renderAll();
    if (problems.length) {
      $('bulkMsg').textContent = `반영하지 못한 줄: ${problems.filter(Boolean).join(', ') || '이름 없는 줄'} (이미 다른 선생님 담당이거나 같은 이메일이 있을 수 있어요)`;
      toast(`${ok}명 반영, ${problems.length}줄은 확인이 필요합니다.`);
    } else {
      this.closeModal('mBulk');
      $('bulkText').value = '';
      $('bulkMsg').textContent = '';
      toast(`${ok}명 반영했습니다.`);
    }
  },

  /* ----- 설정, 모달, CSV ----- */
  openModal(id) { $(id).classList.add('on'); const f = $(id).querySelector('textarea,input'); if (f) setTimeout(() => f.focus(), 30); },
  closeModal(id) { $(id).classList.remove('on'); },
  openSettings() {
    $('sName').value = this.settings.program_name || '';
 $('sPlan').value = this.settings.plan_due || '';
    $('sIntro').value = dueFrom(this.settings, 'intro_due') || '';
    $('sBody').value = dueFrom(this.settings, 'body_due') || '';
    $('sConclusion').value = dueFrom(this.settings, 'conclusion_due') || '';
    $('sExtra').value = this.settings.extra_due || '';
    $('sOutput').value = this.settings.output_due || '';
    this.openModal('mSet');
  },
  async saveSettings() {
    const c = { program_name: $('sName').value.trim() || null, plan_due: $('sPlan').value || null, intro_due: $('sIntro').value || null, body_due: $('sBody').value || null, conclusion_due: $('sConclusion').value || null, report_due: null, extra_due: $('sExtra').value || null, output_due: $('sOutput').value || null };
    const { error } = await sb.from('settings').update(c).eq('id', 1);
    if (error) { toast(dbMsg(error)); return; }
    this.settings = { ...this.settings, ...c };
    this.closeModal('mSet');
    this.renderAll();
    toast('설정을 저장했습니다.');
  },
  csvRoster(list) {
    const q = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
    const lastNote = arr => (arr.find(e => e.kind === 'feedback' && e.note) || {}).note || '';
    const head = ['학번', '이름', '반', '담당 교사', '이메일', '연구 분야', '연구 주제', ...STAGES.flatMap(g => [g.full + ' 상태', g.full + ' 제출일', g.full + ' 최근 피드백']), '개인정보 동의일', '지도 메모'];
    const lines = [head.map(q).join(',')].concat(list.map(s => [
      s.sid, s.name, s.cls, this.tName(s.teacher_email), s.email, s.field, s.topic,
      ...STAGES.flatMap(g => applies(s, g) ? [ST[s[g.key].status].label, dateOf(s[g.key].submitted_at), lastNote(s.ev[g.key])] : ['해당 없음', '', '']), hasConsent(s) ? dateOf(s.consent_at) : '', s.memo
    ].map(q).join(',')));
    return '\uFEFF' + lines.join('\r\n');
  },

  csvFeedback(list) {
    const q = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
    const kind = { submit: '학생 제출', cancel: '학생 제출 취소', feedback: '피드백', status: '상태 변경' };
    const rows = [['학번', '이름', '항목', '시각', '종류', '상태', '내용·파일', '학생 읽음'].map(q).join(',')];
    list.forEach(s => stagesFor(s).forEach(g => [...s.ev[g.key]].sort((a, b) => a.created_at.localeCompare(b.created_at)).forEach(e => rows.push([
      s.sid, s.name, g.full, fmtDT(e.created_at), kind[e.kind] || e.kind, e.status ? ST[e.status].label : '',
      e.kind === 'submit' || e.kind === 'cancel' ? (e.file_name || '') : (e.note || ''), e.kind === 'feedback' ? (e.seen_at ? fmtDT(e.seen_at) : '안 읽음') : ''
    ].map(q).join(',')))));
    (this.memos || []).filter(m => list.some(s => s.id === m.student_id)).forEach(m => {
      const s = list.find(x => x.id === m.student_id), g = STAGES.find(x => x.key === m.stage);
      rows.push([s.sid, s.name, g ? g.full : m.stage, fmtDT(m.created_at), '본문 메모', '', `“${m.quote}” → ${m.note}`, m.seen_at ? fmtDT(m.seen_at) : '안 읽음'].map(q).join(','));
    });
    return '\uFEFF' + rows.join('\r\n');
  },

  sortedStudents(list) {
    return [...list].sort((a, b) => (a.sid || '~').localeCompare(b.sid || '~', undefined, { numeric: true }));
  },

  openZip() {
    const shown = [...this.students.values()].filter(s => this.matches(s)).length;
    $('zAllLabel').textContent = `${this.isAdmin ? '전체' : '내 담당 전체'} ${this.students.size}명`;
    $('zShownLabel').textContent = `지금 목록에 보이는 학생 ${shown}명`;
    $('zStages').innerHTML = STAGES.map(g => `<label class="agree small" style="margin:0"><input type="checkbox" value="${g.key}" checked> <span>${g.full}</span></label>`).join('');
    $('zProg').hidden = true;
    $('zGo').disabled = false;
    const count = () => {
      const o = this.zipOptions();
      const n = this.zipPlan(o).files.length;
      $('zCount').textContent = `파일 ${n}개`;
    };
    $('mZip').querySelectorAll('input').forEach(i => i.onchange = count);
    count();
    this.openModal('mZip');
  },

  zipOptions() {
    const scope = (app.querySelector('input[name="zScope"]:checked') || {}).value || 'all';
    const list = scope === 'shown' ? [...this.students.values()].filter(s => this.matches(s)) : [...this.students.values()];
    return {
      ids: list.map(s => s.id),
      stages: [...$('zStages').querySelectorAll('input:checked')].map(i => i.value),
      layout: (app.querySelector('input[name="zLayout"]:checked') || {}).value || 'student',
      old: $('zOld').checked
    };
  },

  zipPlan(o) {
    const files = [];
    const list = this.sortedStudents(o.ids.map(id => this.students.get(id)).filter(Boolean));
    const order = Object.fromEntries(STAGES.map((g, i) => [g.key, i + 1]));
    list.forEach(s => {
      const who = safeName(`${s.sid || ''}_${s.name}`.replace(/^_/, ''));
      stagesFor(s).filter(g => o.stages.includes(g.key)).forEach(g => {
        const cur = s[g.key];
        const stageLabel = `${order[g.key]}_${g.full.replace('최종보고서 ', '').replace(/^\d+\.\s*/, '')}`;
        const dir = o.layout === 'stage' ? safeName(stageLabel) : who;
        const base = o.layout === 'stage' ? who : safeName(stageLabel);
        if (cur.file_path) files.push({ path: cur.file_path, name: `${dir}/${base}_${safeName(cur.file_name || 'file')}` });
        if (o.old) {
          s.ev[g.key].filter(e => e.kind === 'submit' && e.file_path && e.file_path !== cur.file_path)
            .forEach(e => files.push({ path: e.file_path, name: `${dir}/이전 제출/${base}_${dateOf(e.created_at)}_${safeName(e.file_name || 'file')}` }));
        }
      });
    });
    return { list, files };
  },

  async runZip(opts) {
    const o = opts || this.zipOptions();
    const { list, files } = this.zipPlan(o);
    if (!list.length) { toast('받을 학생이 없습니다.'); return; }
    const single = o.ids.length === 1;
    const go = $('zGo');
    if (!single) { go.disabled = true; $('zProg').hidden = false; }
    const prog = (i, n, msg) => {
      if (single) { $('dMsg').textContent = msg; return; }
      $('zBar').style.width = (n ? i / n * 100 : 100) + '%';
      $('zMsg').textContent = msg;
    };
    try {
      const Z = await loadZipLib();
      const root = single ? safeName(`${list[0].sid || ''}_${list[0].name}_제출물_${todayStr()}`) : `개인연구_제출물_${todayStr()}`;
      const entries = {};
      const used = new Set();
      const missing = [];
      let done = 0;
      const queue = [...files];
      const worker = async () => {
        while (queue.length) {
          const f = queue.shift();
          try {
            const blob = await downloadBlob(f.path);
            let name = `${root}/${f.name}`;
            for (let k = 2; used.has(name); k++) name = `${root}/${f.name.replace(/(\.[^./]+)?$/, ` (${k})$1`)}`;
            used.add(name);
            entries[name] = [new Uint8Array(await blob.arrayBuffer()), { level: 0 }];
          } catch (e) { missing.push(f.name); }
          done++;
          prog(done, files.length, `파일 받는 중 ${done} / ${files.length}`);
        }
      };
      prog(0, files.length, files.length ? `파일 받는 중 0 / ${files.length}` : '파일 정리 중');
      await Promise.all([worker(), worker(), worker()]);
      entries[`${root}/명단_제출현황.csv`] = Z.strToU8(this.csvRoster(list));
      entries[`${root}/피드백_기록.csv`] = Z.strToU8(this.csvFeedback(list));
      if (missing.length) entries[`${root}/받지 못한 파일.txt`] = Z.strToU8('아래 파일은 받지 못했습니다 (삭제되었거나 권한이 없음).\r\n\r\n' + missing.join('\r\n'));
      prog(files.length, files.length, '압축하는 중');
      const zipped = Z.zipSync(entries);
      saveBlob(new Blob([zipped], { type: 'application/zip' }), `${root}.zip`);
      const mb = (zipped.length / 1048576).toFixed(1);
      prog(files.length, files.length, `완료: 파일 ${files.length - missing.length}개, ${mb}MB${missing.length ? ` (받지 못한 파일 ${missing.length}개)` : ''}`);
      toast(`zip 파일을 저장했습니다 (${mb}MB).`);
    } catch (e) {
      toast('내려받기를 준비하지 못했습니다. 잠시 후 다시 시도하세요.');
      prog(0, 0, '');
    } finally {
      go.disabled = false;
    }
  },

  exportCsv() {
    const list = this.sortedStudents(this.students.values());
    const blob = new Blob([this.csvRoster(list)], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `개인연구_제출현황_${todayStr()}.csv`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
};

/* =========================================================
   학생 화면
   ========================================================= */
const Student = {
  email: '', me: null, settings: {}, subs: {}, events: [], busy: false,

  async start(email, me) {
    this.email = email;
    this.me = me;
    try { await this.load(); }
    catch (e) { renderMessage(email, '정보를 불러오지 못했습니다.', esc(dbMsg(e))); return; }
    if (!hasConsent(this.me)) { this.renderConsent(); return; }
    if (!this.me.teacher_email && await this.renderPickTeacher()) return;
    this.render();
    this.markSeen();
  },

  /* 처음 한 번 담당 선생님 고르기. 화면을 그렸으면 true */
  async renderPickTeacher() {
    const { data, error } = await sb.rpc('teacher_choices');
    if (error || !data || !data.length) return false;
    const me = this.me;
    app.innerHTML = `${topBar(this.email)}
      <div class="consent pick">
        <h1>담당 선생님 선택</h1>
        <p class="sub">${esc(me.name)} 학생, 개인연구를 지도받을 담당 선생님을 골라 주세요. 선생님이 제출물을 확인하고 피드백을 남겨 줍니다.</p>
        <div class="pick-list" role="radiogroup" aria-label="담당 선생님">
          ${data.map(t => `<label class="pick-item"><input type="radio" name="pickT" value="${esc(t.email)}"><span>${esc(t.name)} 선생님</span></label>`).join('')}
        </div>
        <p class="hint">한 번 고르면 직접 바꿀 수 없어요. 잘못 골랐다면 선생님께 말씀드리면 바꿔 주십니다.</p>
        <div class="consent-actions"><button class="btn primary" id="pickGo" disabled>이 선생님으로 정하기</button></div>
      </div>`;
    bindLogout();
    app.querySelectorAll('input[name="pickT"]').forEach(r => r.onchange = () => {
      $('pickGo').disabled = false;
      app.querySelectorAll('.pick-item').forEach(l => l.classList.toggle('on', l.querySelector('input').checked));
    });
    $('pickGo').onclick = async () => {
      const sel = app.querySelector('input[name="pickT"]:checked');
      if (!sel) return;
      $('pickGo').disabled = true;
      const { error: e2 } = await sb.rpc('choose_my_teacher', { p_email: sel.value });
      if (e2) { toast(e2.message || '저장하지 못했습니다. 다시 눌러 주세요.'); $('pickGo').disabled = false; return; }
      try { await this.load(); } catch (e) { this.me.teacher_email = sel.value; }
      this.render();
      this.markSeen();
      toast('담당 선생님을 정했습니다. 이제 제출할 수 있습니다.');
    };
    return true;
  },

  /* 손글씨 서명란: 흰 종이 위 검은 펜 */
  signaturePad(canvas, onChange) {
    const ctx = canvas.getContext('2d');
    let drawing = false, last = null, ink = 0;
    const size = () => {
      const r = window.devicePixelRatio || 1;
      canvas.width = Math.round(canvas.clientWidth * r);
      canvas.height = Math.round(canvas.clientHeight * r);
      ctx.setTransform(r, 0, 0, r, 0, 0);
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.lineWidth = 2.4; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#111';
      ink = 0;
    };
    size();
    const pt = e => { const b = canvas.getBoundingClientRect(); return { x: e.clientX - b.left, y: e.clientY - b.top }; };
    canvas.addEventListener('pointerdown', e => { e.preventDefault(); canvas.setPointerCapture(e.pointerId); drawing = true; last = pt(e); ctx.beginPath(); ctx.arc(last.x, last.y, 1.1, 0, Math.PI * 2); ctx.fillStyle = '#111'; ctx.fill(); });
    canvas.addEventListener('pointermove', e => {
      if (!drawing) return;
      const p = pt(e);
      ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      ink += Math.hypot(p.x - last.x, p.y - last.y);
      last = p;
    });
    const end = () => { if (drawing) { drawing = false; onChange(); } };
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);
    return {
      signed: () => ink > 40,
      clear: () => size(),
      toDataURL: () => {
        /* 저장 용량을 줄이려고 가로 600px 이하로 줄여서 저장 */
        const w = Math.min(600, canvas.clientWidth), h = Math.round(w * canvas.clientHeight / canvas.clientWidth);
        const out = document.createElement('canvas'); out.width = w; out.height = h;
        out.getContext('2d').drawImage(canvas, 0, 0, w, h);
        return out.toDataURL('image/png');
      }
    };
  },

  renderConsent() {
    const me = this.me;
    const prog = esc(this.settings.program_name || '개인연구 프로그램');
    app.innerHTML = `${topBar(this.email)}
      <div class="consent">
        <h1>개인정보 수집·이용 동의</h1>
        <p class="sub">${esc(me.name)} 학생, ${prog} 제출 사이트를 처음 사용하기 전에 아래 내용을 읽고 동의해 주세요.</p>
        <div class="consent-box">
          <table class="ctable">
            <tr><th scope="row">수집 목적</th><td>개인연구 계획서·최종보고서 제출 확인, 담당 교사의 피드백 전달, 제출 현황 관리</td></tr>
            <tr><th scope="row">수집 항목 (필수)</th><td>학번, 이름, 반, 학교 구글 계정 이메일, 연구 주제, 제출한 파일과 제출 일시, 피드백 기록과 확인 일시</td></tr>
            <tr><th scope="row">보유 기간</th><td>해당 학년도 프로그램이 끝날 때까지 보관하고, 학년도 종료 후 담당 교사가 삭제합니다. 요청하면 그 전에도 삭제합니다.</td></tr>
            <tr><th scope="row">열람 범위</th><td>학생 본인은 자기 자료만, 전체 자료는 담당 교사만 볼 수 있습니다. 다른 학생에게 공개되지 않습니다.</td></tr>
            <tr><th scope="row">처리 위탁</th><td>Supabase(자료 보관, 대한민국 서울 데이터센터), Google(로그인 인증). 그 밖의 제3자에게 제공하지 않습니다.</td></tr>
            <tr><th scope="row">동의 거부 권리</th><td>동의하지 않을 수 있습니다. 동의하지 않아도 불이익은 없으며, 이 경우 담당 교사와 상의해 다른 방법(이메일, 출력물 등)으로 제출할 수 있습니다.</td></tr>
          </table>
          <p class="hint">자세한 내용은 <a href="privacy.html" target="_blank" rel="noopener">개인정보처리방침</a>에서 볼 수 있습니다. 동의를 철회하거나 삭제를 원하면 담당 교사에게 말씀해 주세요.</p>
        </div>
        <label class="agree"><input type="checkbox" id="cAgree"> <span>위 내용을 읽었으며, 개인정보 수집·이용에 동의합니다. (필수)</span></label>
        <div class="sign">
          <div class="sign-h"><span>서명 (필수)</span><span class="hint">${esc(me.name)} 학생 본인이 마우스나 손가락으로 서명해 주세요.</span><button class="linkbtn" id="sClear" type="button">지우기</button></div>
          <canvas class="sign-pad" id="sPad" role="img" aria-label="서명란"></canvas>
          <div class="sign-foot"><span>${todayStr().replace(/-/g, '. ')}.</span><span>성명 ${esc(me.name)} (서명)</span></div>
        </div>
        <div class="consent-actions">
          <button class="btn" id="cNo">동의하지 않음</button>
          <button class="btn primary" id="cYes" disabled>동의하고 시작하기</button>
        </div>
      </div>`;
    bindLogout();
    const pad = this.signaturePad($('sPad'), () => update());
    const update = () => { $('cYes').disabled = !($('cAgree').checked && pad.signed()); };
    $('cAgree').onchange = update;
    $('sClear').onclick = () => { pad.clear(); update(); };
    $('cNo').onclick = () => {
      app.querySelector('.consent').innerHTML = `<h1>동의하지 않았습니다</h1>
        <p class="sub">동의하지 않으면 이 사이트를 사용할 수 없지만, 불이익은 없습니다. 담당 선생님께 말씀드리고 다른 방법으로 제출하세요.</p>
        <p class="sub">마음이 바뀌면 이 페이지를 새로고침해서 다시 동의할 수 있습니다.</p>
        <button class="btn" id="cBack">동의서 다시 보기</button>`;
      $('cBack').onclick = () => this.renderConsent();
    };
    $('cYes').onclick = async () => {
      $('cYes').disabled = true;
      $('cYes').textContent = '저장 중입니다';
      const { error } = await sb.rpc('give_consent', { p_version: CONSENT_VERSION, p_signature: pad.toDataURL() });
      if (error) { toast('동의를 저장하지 못했습니다. 다시 눌러 주세요.'); $('cYes').disabled = false; $('cYes').textContent = '동의하고 시작하기'; return; }
      try { await this.load(); } catch (e) { /* 아래에서 화면만 다시 그림 */ }
      this.me.consent_at = this.me.consent_at || new Date().toISOString();
      this.me.consent_version = CONSENT_VERSION;
      if (!this.me.teacher_email && await this.renderPickTeacher()) { toast('동의했습니다. 담당 선생님을 골라 주세요.'); return; }
      this.render();
      this.markSeen();
      toast('동의했습니다. 이제 제출할 수 있습니다.');
    };
  },

  async load() {
    const res = await Promise.all([
      sb.from('students').select('*').eq('id', this.me.id).maybeSingle(),
      sb.from('submissions').select('*').eq('student_id', this.me.id),
      sb.from('events').select('*').eq('student_id', this.me.id).order('created_at', { ascending: false }),
      sb.from('settings').select('*').eq('id', 1).maybeSingle(),
      sb.from('templates').select('*').order('created_at', { ascending: true })
    ]);
    const bad = res.slice(0, -1).find(r => r.error);
    if (bad) throw bad.error;
    const [me, subs, events, set, tpls] = res.map(r => r.data);
    this.templates = tpls || [];
    const mm = await sb.from('doc_memos').select('*').eq('student_id', this.me.id).order('created_at', { ascending: true });
    this.memos = mm.error ? [] : (mm.data || []);
    const an = await sb.from('announcements').select('*').order('created_at', { ascending: false });
    this.anns = an.error ? [] : (an.data || []);
    const tn = await sb.rpc('my_teacher_name');
    this.teacherName = tn.error ? '' : (tn.data || '');
    if (me) this.me = me;
    this.subs = {};
    for (const s of subs) this.subs[s.stage] = s;
    this.events = events;
    this.settings = set || {};
    this.unseen = new Set(events.filter(e => e.kind === 'feedback' && !e.seen_at).map(e => e.id));
    (this.memos || []).filter(m => !m.seen_at).forEach(m => this.unseen.add(m.id));
  },

  markSeen() {
    if (!this.unseen || !this.unseen.size) return;
    sb.rpc('mark_feedback_seen').then(({ error }) => { if (error) console.warn(error); });
  },

  annHTML() {
    const list = [...(this.anns || [])].sort((a, b) => (b.pinned - a.pinned) || b.created_at.localeCompare(a.created_at));
    if (!list.length) return '';
    const isNew = a => Date.now() - new Date(a.updated_at || a.created_at) < 3 * 86400000;
    const item = (a, i) => `<details class="ann" ${i === 0 || a.pinned ? 'open' : ''}>
      <summary>${a.pinned ? '<span class="ann-pin">📌</span>' : ''}<span class="ann-t">${esc(a.title)}</span>${isNew(a) ? '<span class="newb">새 공지</span>' : ''}
        <span class="ann-by">${a.audience === 'all' ? '전체 공지' : esc(a.author_name || '담당') + ' 선생님'} · ${fmtDate(a.created_at)}</span></summary>
      ${a.body ? `<div class="ann-body">${esc(a.body)}</div>` : ''}
    </details>`;
    const shown = list.slice(0, 3), more = list.slice(3);
    return `<section class="ann-board" aria-label="공지사항">
      <h2>공지사항</h2>
      ${shown.map(item).join('')}
      ${more.length ? `<div class="ann-more" hidden>${more.map((a, i) => item(a, i + 3)).join('')}</div><button class="linkbtn" id="annMore">이전 공지 ${more.length}개 더 보기</button>` : ''}
    </section>`;
  },

  progressHTML() {
    const items = stagesFor(this.me);
    const rows = items.map(g => {
      const sub = this.subs[g.key] || {};
      const k = sub.status || 'none';
      const due = dueFrom(this.settings, g.due);
      const dd = dday(due);
      const unread = this.events.filter(e => e.stage === g.key && this.unseen.has(e.id)).length + (this.memos || []).filter(m => m.stage === g.key && this.unseen.has(m.id)).length;
      return { g, k, due, dd, unread };
    });
    const done = rows.filter(r => r.k === 'done').length;
    const submitted = rows.filter(r => r.k !== 'none').length;
    const label = g => g.group === 'report' ? g.label : g.full;

    /* 다음에 할 일: 보완 요청 → 안 읽은 피드백 → 마감 지난 미제출 → 마감 가까운 미제출 */
    const todo = [];
    rows.filter(r => r.k === 'revise').forEach(r => todo.push({ g: r.g, cls: 'rev', text: `<b>${label(r.g)}</b> 보완 요청을 받았어요. 피드백을 보고 수정본을 다시 제출하세요.` }));
    rows.filter(r => r.unread && r.k !== 'revise').forEach(r => todo.push({ g: r.g, cls: 'new', text: `<b>${label(r.g)}</b>에 새 피드백이 있어요.` }));
    rows.filter(r => r.k === 'none' && r.dd !== null && r.dd < 0).forEach(r => todo.push({ g: r.g, cls: 'late', text: `<b>${label(r.g)}</b> 마감(${fmtDate(r.due)})이 지났어요. 지금이라도 제출하고 선생님께 말씀드리세요.` }));
    rows.filter(r => r.k === 'none' && !(r.dd !== null && r.dd < 0)).sort((a, b) => (a.dd ?? 9999) - (b.dd ?? 9999)).slice(0, 2)
      .forEach(r => todo.push({ g: r.g, cls: '', text: `<b>${label(r.g)}</b> 제출하기${r.due ? ` · 마감 ${fmtDate(r.due)} ${r.dd === 0 ? '(오늘)' : `(D-${r.dd})`}` : ''}` }));
    const waiting = rows.filter(r => r.k === 'waiting').map(r => label(r.g));

    const seg = rows.map(r => `<span class="pg-seg ${r.k}" title="${label(r.g)}: ${ST[r.k].label}"></span>`).join('');
    const tiles = rows.map(r => `<button class="pg-tile ${r.k}" data-goto="${r.g.key}">
        <span class="pg-name">${label(r.g)}${r.unread ? '<i class="pg-dot" aria-label="새 피드백"></i>' : ''}</span>
        <span class="pill ${r.k}">${ST[r.k].label}</span>
        <span class="pg-due">${r.due ? `${fmtDate(r.due)} ${r.k === 'none' ? ddayTag(r.due) : ''}` : '마감 미정'}</span>
      </button>`).join('');
    const msg = done === rows.length ? '모든 제출물이 확인 완료됐어요. 수고했어요!'
      : todo.length ? '' : waiting.length ? `${waiting.join(', ')}은(는) 선생님이 확인하고 있어요. 피드백이 오면 여기에 표시돼요.` : '';
    return `<section class="progress" aria-label="나의 진행 상황">
      <div class="pg-head">
        <h2>나의 진행 상황</h2>
        <div class="pg-num"><b>${done}</b> / ${rows.length} 확인 완료 <span>· 제출 ${submitted}개</span></div>
      </div>
      <div class="pg-bar">${seg}</div>
      <div class="pg-tiles">${tiles}</div>
      ${todo.length ? `<div class="pg-todo"><h3>다음에 할 일</h3><ul>${todo.map(t => `<li class="${t.cls}"><button class="linkbtn plain" data-goto="${t.g.key}">${t.text}</button></li>`).join('')}</ul></div>` : ''}
      ${msg ? `<p class="pg-msg">${msg}</p>` : ''}
    </section>`;
  },

  topicView() {
    const t = this.me.topic;
    return t
      ? `<span>연구 주제: <b>${esc(t)}</b></span> <button class="linkbtn" id="tEdit">수정</button>`
      : `<span>연구 주제가 아직 등록되지 않았습니다.</span> <button class="linkbtn" id="tEdit">연구 주제 입력</button>`;
  },

  bindTopic() {
    const box = $('topicBox');
    const edit = $('tEdit');
    if (!edit) return;
    edit.onclick = () => {
      box.innerHTML = `<label class="l" for="tInput">연구 주제</label>
        <textarea class="in" id="tInput" rows="2" maxlength="300">${esc(this.me.topic || '')}</textarea>
        <div class="topic-actions"><span class="hint" id="tCount"></span><button class="btn" id="tCancel">취소</button><button class="btn primary" id="tSave">저장</button></div>`;
      const ta = $('tInput');
      const count = () => { $('tCount').textContent = `${ta.value.trim().length} / 300자`; };
      count();
      ta.oninput = count;
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
      $('tCancel').onclick = () => { box.innerHTML = this.topicView(); this.bindTopic(); };
      $('tSave').onclick = async () => {
        const v = ta.value.trim();
        if (!v) { toast('연구 주제를 입력하세요.'); ta.focus(); return; }
        if (v === (this.me.topic || '')) { box.innerHTML = this.topicView(); this.bindTopic(); return; }
        $('tSave').disabled = true;
        const { error } = await sb.rpc('update_my_topic', { p_topic: v });
        if (error) { toast(error.message || '연구 주제를 저장하지 못했습니다.'); $('tSave').disabled = false; return; }
        this.me.topic = v;
        box.innerHTML = this.topicView();
        this.bindTopic();
        toast('연구 주제를 수정했습니다. 선생님 화면에도 바로 반영됩니다.');
      };
    };
  },

  tplLinks(stage, big) {
    const ts = (this.templates || []).filter(t => t.stage === stage);
    if (!ts.length) return '';
    return `<div class="tpls${big ? ' big' : ''}"><span class="tpls-l">📎 양식 내려받기</span>${ts.map(t => `<button class="tpl" data-tpl="${esc(t.id)}">${esc(t.title || t.file_name)}</button>`).join('')}</div>`;
  },

  card(g) {
    const sub = this.subs[g.key] || { status: 'none' };
    const k = sub.status || 'none';
    const due = dueFrom(this.settings, g.due);
    const evs = this.events.filter(e => e.stage === g.key);
    const canSubmit = k !== 'done';
    const guide = {
      none: '아직 제출하지 않았습니다.',
      waiting: '제출했습니다. 선생님이 확인하고 있어요.',
      revise: '보완할 점이 있습니다. 아래 피드백을 보고 수정해서 다시 제출하세요.',
      done: '선생님이 확인을 마쳤습니다.'
    }[k];
    const timeline = evs.map(e => {
      if (e.kind === 'cancel') return `<li class="k-cancel"><div class="hmeta"><span>${fmtDT(e.created_at)}</span><span>제출 취소</span></div>
        <div class="note cancel-note">${esc(e.file_name || '제출 파일')}</div></li>`;
      if (e.kind === 'submit') return `<li class="k-submit"><div class="hmeta"><span>${fmtDT(e.created_at)}</span><span>내가 제출</span></div>
        <div class="note">${e.file_path ? `<button class="linkbtn" data-open="${esc(e.file_path)}">${esc(e.file_name || '제출 파일')}</button>` : esc(e.file_name || '')}</div></li>`;
      if (e.kind === 'feedback') return `<li class="k-feedback"><div class="hmeta"><span>${fmtDT(e.created_at)}</span><span>선생님 피드백</span>${e.status ? `<span class="pill ${e.status}">${ST[e.status].label}</span>` : ''}${this.unseen.has(e.id) ? '<span class="newb">새 피드백</span>' : ''}</div>
        <div class="fbnote">${esc(e.note)}</div></li>`;
      return `<li class="k-status"><div class="hmeta"><span>${fmtDT(e.created_at)}</span><span>상태가 바뀌었습니다</span>${e.status ? `<span class="pill ${e.status}">${ST[e.status].label}</span>` : ''}</div></li>`;
    }).join('');
    return `<section class="card" data-stage="${g.key}">
      <div class="card-h"><h2>${g.group === 'report' ? g.full.replace('최종보고서 ', '') : g.full}</h2>${k === 'done' ? '<span class="stamp lg" aria-hidden="true">확인</span>' : ''}</div>
      <p class="due">${g.desc && (g.group === 'report' || g.group === 'output') ? `<b>${g.desc}</b><br>` : ''}${due ? `마감 ${fmtDate(due)}${ddayTag(due)}` : '마감일 미정'}</p>
      ${this.tplLinks(g.key)}
      <div class="status-line"><span class="pill ${k}">${ST[k].label}</span>${sub.submitted_at ? `<span class="hint">${fmtDT(sub.submitted_at)} 제출</span>` : ''}</div>
      <p class="hint" style="margin-bottom:12px">${guide}</p>
      ${sub.file_path ? `<div class="filebox"><span class="fn">📄 ${esc(sub.file_name || '제출 파일')}</span><button class="btn sm" data-open="${esc(sub.file_path)}">열기</button>${k === 'waiting' ? `<button class="btn sm danger" data-cancel="${g.key}">제출 취소</button>` : ''}</div>
        ${k === 'waiting' ? '<p class="hint cancel-hint">잘못 올렸다면 선생님이 확인하기 전까지 제출을 취소할 수 있어요.</p>' : ''}` : ''}
      ${canSubmit ? `<div class="upload" data-drop="${g.key}">
          <button class="btn primary" data-pick="${g.key}">${sub.file_path ? '수정본 제출하기' : '파일 선택해서 제출하기'}</button>
          <input type="file" accept="${acceptFor(g)}" data-file="${g.key}">
          <p>${g.key === 'output' ? '사진, PDF, 한글, 발표자료(PPT), 영상(mp4) 모두 올릴 수 있어요. 여러 파일은 zip으로 묶어 주세요.' : '한글(.hwp, .hwpx) 또는 PDF로 내면 선생님이 화면에서 바로 읽고 피드백을 줄 수 있어요.'} 최대 ${MAX_MB}MB, 파일을 여기로 끌어다 놓아도 됩니다.</p>
        </div>` : ''}
      ${(() => {
        const ms = (this.memos || []).filter(m => m.stage === g.key);
        if (!ms.length) return '';
        const cur = ms.filter(m => !m.file_path || m.file_path === sub.file_path), old = ms.filter(m => m.file_path && m.file_path !== sub.file_path);
        const li = m => `<li><div class="memo-quote static">“${esc(m.quote)}”</div><div class="memo-note">${esc(m.note)}</div>
          <div class="hmeta"><span>${fmtDT(m.created_at)}</span>${m.author_name ? `<span>${esc(m.author_name)} 선생님</span>` : ''}${this.unseen.has(m.id) ? '<span class="newb">새 메모</span>' : ''}</div></li>`;
        return `<div class="memo-box"><h3>본문 메모 ${ms.length}개 <span class="hint">선생님이 내 글의 특정 부분에 남긴 메모예요</span></h3>
          ${cur.length ? `<ul class="memo-list">${cur.map(li).join('')}</ul>` : ''}
          ${old.length ? `<p class="hint">이전에 낸 파일에 달린 메모</p><ul class="memo-list old">${old.map(li).join('')}</ul>` : ''}</div>`;
      })()}
      ${timeline ? `<ul class="hist">${timeline}</ul>` : ''}
    </section>`;
  },

  render() {
    const me = this.me;
    app.innerHTML = `${topBar(this.email)}
      <header class="top"><div>
        <h1>${esc(me.name)}</h1>
        <p class="sub">${esc(me.sid || '')}${me.cls ? ` · ${esc(me.cls)}반` : ''} · ${esc(this.settings.program_name || '개인연구')}${this.teacherName ? ` · 담당 <b>${esc(this.teacherName)}</b> 선생님` : ''}</p>
        <div class="me-topic" id="topicBox">${this.topicView()}</div>
      </div></header>
      ${this.annHTML()}
      ${this.progressHTML()}
      ${this.tplLinks('all', true)}
      <h2 class="group-title">연구계획서 <span>연구 주제, 연구 목적, 연구 방법과 일정을 담은 계획서를 한글 파일로 올리세요.</span></h2>
      <div class="cards one">${this.card(PLAN)}</div>
      <h2 class="group-title">최종보고서 <span>세 부분을 각각 한글 파일로 올리세요. 부분마다 마감일이 다를 수 있어요.</span></h2>
      ${this.tplLinks('report', true)}
      <div class="cards three">${PARTS.map(g => this.card(g)).join('')}</div>
      ${me.extra_required ? `<h2 class="group-title">개인연구보고서 <span>실험 대상 학생은 개인연구보고서도 한글 파일로 제출하세요</span></h2>
      <div class="cards one">${this.card(EXTRA)}</div>` : ''}
      <h2 class="group-title">산출물 <span>연구 과정에서 만든 결과물을 올리세요. 여러 파일이면 zip으로 묶어서 올리면 됩니다.</span></h2>
      <div class="cards one">${this.card(OUTPUT)}</div>`;
    bindLogout();
    app.querySelectorAll('[data-open]').forEach(b => b.onclick = () => openFile(b.dataset.open));
    this.bindTopic();
    const am = $('annMore');
    if (am) am.onclick = () => { app.querySelector('.ann-more').hidden = false; am.remove(); };
    app.querySelectorAll('[data-goto]').forEach(b => b.onclick = () => {
      const card = app.querySelector(`.card[data-stage="${b.dataset.goto}"]`);
      if (!card) return;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      card.classList.add('flash');
      setTimeout(() => card.classList.remove('flash'), 1200);
    });
    app.querySelectorAll('[data-cancel]').forEach(b => b.onclick = async () => {
      if (!b.classList.contains('armed')) {
        b.classList.add('armed'); b.textContent = '정말 취소할까요?';
        setTimeout(() => { if (b.isConnected) { b.classList.remove('armed'); b.textContent = '제출 취소'; } }, 4000);
        return;
      }
      b.disabled = true;
      const { data, error } = await sb.rpc('cancel_submission', { p_stage: b.dataset.cancel });
      if (error) { toast(error.message || '제출을 취소하지 못했습니다.'); b.disabled = false; return; }
      try { await this.load(); } catch (e) { /* 화면만 다시 */ }
      this.render();
      toast(data === 'none' ? '제출을 취소했습니다. 다시 올려 주세요.' : '제출을 취소하고 이전에 낸 파일로 되돌렸습니다.');
    });
    app.querySelectorAll('[data-tpl]').forEach(b => b.onclick = () => downloadTemplate(this.templates.find(t => t.id === b.dataset.tpl)));
    app.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => app.querySelector(`[data-file="${b.dataset.pick}"]`).click());
    app.querySelectorAll('[data-file]').forEach(inp => inp.onchange = () => { if (inp.files[0]) this.upload(inp.dataset.file, inp.files[0]); });
    app.querySelectorAll('[data-drop]').forEach(z => {
      z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('drag'); });
      z.addEventListener('dragleave', () => z.classList.remove('drag'));
      z.addEventListener('drop', e => { e.preventDefault(); z.classList.remove('drag'); const f = e.dataTransfer.files[0]; if (f) this.upload(z.dataset.drop, f); });
    });
  },

  async upload(stage, file) {
    if (this.busy) return;
    if (file.size > MAX_MB * 1024 * 1024) { toast(`파일이 ${MAX_MB}MB보다 큽니다. 용량을 줄여서 다시 올려 주세요.`); return; }
    const ext = (file.name.includes('.') ? file.name.split('.').pop() : 'bin').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8) || 'bin';
    const allowed = acceptFor({ key: stage }).split(',').map(x => x.slice(1));
    if (!allowed.includes(ext)) { toast(stage === 'output' ? '올릴 수 없는 파일 형식입니다. 여러 파일은 zip으로 묶어서 올려 주세요.' : '올릴 수 없는 파일 형식입니다. 한글, PDF, 워드, 파워포인트로 올려 주세요.'); return; }
    this.busy = true;
    const btn = app.querySelector(`[data-pick="${stage}"]`);
    if (btn) { btn.disabled = true; btn.textContent = '올리는 중입니다'; }
    const path = `${this.me.id}/${stage}/${Date.now()}.${ext}`;
    try {
      const { error: upErr } = await sb.storage.from(BUCKET).upload(path, file, { upsert: false, contentType: file.type || 'application/octet-stream' });
      if (upErr) throw upErr;
      const { error } = await sb.rpc('submit_work', { p_stage: stage, p_file_path: path, p_file_name: file.name });
      if (error) throw error;
      await this.load();
      this.render();
      this.markSeen();
 toast(stage === 'output' || ['hwp', 'hwpx', 'pdf'].includes(ext) ? '제출했습니다. 선생님 피드백은 이 화면에 표시됩니다.' : '제출했습니다. 다만 이 형식은 선생님 화면에서 바로 열리지 않을 수 있어요. 가능하면 한글이나 PDF로 다시 내 주세요.');
    } catch (e) {
      toast(e.message || '제출하지 못했습니다. 잠시 후 다시 시도하세요.');
      if (btn) { btn.disabled = false; btn.textContent = '파일 선택해서 제출하기'; }
    } finally {
      this.busy = false;
    }
  }
};
