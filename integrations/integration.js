!function(){"use strict";function u(e,n){this.r=new RegExp(e,n.split("u").join(""))}function c(){}function e(){for(var e,n,t=this,i=c.substr(window.location.search,1,null),o=Object.create(null),l=0,r=new u("[&;]","g").split(i);l<r.length;){var a,s=r[l],s=(++l,s.split("="));s.length<2||(a=s.shift(),a=decodeURIComponent(a.split("+").join(" ")),s=s.join("="),s=decodeURIComponent(s.split("+").join(" ")),o[a]=s)}if(null==(i=o.aggrid))e=null;else switch(i){case"everymatrix":e="everymatrix/everymatrix-integration";break;case"gosh":e="gosh/gosh-integration";break;case"mgs":e="microgaming/microgaming-integration";break;case"pariplay":e="pariplay/pariplay-integration";break;case"relax":e="relax/relax-integration";break;case"sg":e="scientific-games/sg-integration";break;default:e=null}"relax_643"!=o.partner&&"relax_644"!=o.partner||(e="relaxppbf/relax-ppbf-integration"),null!=(e=-1!=["mgs_MAL_1941","mgs_MAL_1946","mgs_MAL_2005","mgs_MAL_2258","mgs_MAL_2335","mgs_MAL_2337","mgs_MAL_28298","mgs_MAL_28299","mgs_MAL_3563","mgs_MAL_3565","mgs_MAL_3646","mgs_MAL_3647","mgs_MAL_3568","mgs_MAL_3569","mgs_MAL_3603","mgs_MAL_3604","mgs_MAL_3511"].indexOf(o.partner)?"microgaming-bridge/mgsbridge-integration":e)&&((n=window.document.createElement("script")).src="../../integrations/"+e+".js",window.document.head.appendChild(n)),null!=(i=null!=(l=o.customlaunchdata)&&"beyondplay"==l?"beyondplay/beyondplay-integration":null)&&((n=window.document.createElement("script")).src="../../integrations/"+i+".js",window.document.head.appendChild(n)),this._uiChannel=hacksawCasino.PubSub.getChannel("ui"),g.delay(function(){t.subscribe(o.partner)},1)}u.prototype={split:function(e){var n="#__delim__#";return e.replace(this.r,n).split(n)}},c.substr=function(e,n,t){if(null==t)t=e.length;else if(t<0){if(0!=n)return"";t=e.length+t}return e.substr(n,t)},c.now=function(){return Date.now()};e.main=function(){new e},e.prototype={subscribe:function(a){var e=this;null!=this._uiChannel?this._uiChannel.subscribe("setupUi",function(e){var e=null!=e&&null!=e.maxFeatureCost?e.maxFeatureCost:null,e=null!=e&&(0==(n=0|+e.high)&&(n=s.ucompare(e.low,0)),(e.high<0?-1:n)<0),e=(e&&null!=(n=window.document.getElementById("FeatureBuyToggle"))&&n.remove(),window.document.getElementById("ColjuegosItems")),n=null!=e?e.children:null,e=(null!=n&&(e=n.item(1),n=n.item(2),null!=e&&e.remove(),null!=n)&&n.remove(),null!=window.location.ancestorOrigins?window.location.ancestorOrigins[0]:""),n=null!=e?e:"";if(-1!=window.location.host.indexOf("static-stg")&&-1==n.indexOf("client-stg")&&-1==n.indexOf("client-demo")&&-1==n.indexOf("client-amgamedemo")&&(null!=(e=window.document.getElementById("OverlayToggle"))&&e.remove(),null!=(n=window.document.getElementById("OutcomeOverlay")))&&n.remove(),"relax_605"==a||"relax_604"==a){for(var e=window.document.getElementById("TurboToggle"),t=(null!=e&&e.remove(),window.document.getElementsByClassName("AutoplayValue")),i=[],o=0;o<t.length;){var l=t[o],r=(++o,l);100<(0|r.getAttribute("data-value"))&&i.push(r)}for(o=0;o<i.length;){l=i[o];++o,l.remove()}}}):(this._uiChannel=hacksawCasino.PubSub.getChannel("ui"),g.delay(function(){e.subscribe(a)},1))}};var s={},g=(s.ucompare=function(e,n){return e<0?n<0?~n-~e|0:1:n<0?-1:e-n|0},function(e){var n=this;this.id=setInterval(function(){n.run()},e)});g.delay=function(e,n){var t=new g(n);return t.run=function(){t.stop(),e()},t},g.prototype={stop:function(){null!=this.id&&(clearInterval(this.id),this.id=null)},run:function(){}};"undefined"!=typeof performance&&"function"==typeof performance.now&&(c.now=performance.now.bind(performance)),e.main()}();