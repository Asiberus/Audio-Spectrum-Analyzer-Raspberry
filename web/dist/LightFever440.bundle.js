window.LightFever440=function(){"use strict";var t={872:function(t,n){n.default=function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),document.getElementById("btn-on").addEventListener("click",(function(){AJAX.post("action",{action:"ON"}).then((function(t){console.log("Strip led successfuly started")})).catch((function(t){console.warn("Something went wrong",status)}))})),document.getElementById("btn-off").addEventListener("click",(function(){AJAX.post("action",{action:"OFF"}).then((function(t){console.log("Strip led successfuly stoped")})).catch((function(t){console.warn("Something went wrong",status)}))}))}}},n={};return function o(e){if(n[e])return n[e].exports;var c=n[e]={exports:{}};return t[e](c,c.exports,o),c.exports}(872)}().default;