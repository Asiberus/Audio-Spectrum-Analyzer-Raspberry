window.LightFever440=function(){"use strict";var t={872:function(t,e){function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var o=[],s=!0,n=!1,i=void 0;try{for(var a,d=t[Symbol.iterator]();!(s=(a=d.next()).done)&&(o.push(a.value),!e||o.length!==e);s=!0);}catch(t){n=!0,i=t}finally{try{s||null==d.return||d.return()}finally{if(n)throw i}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?s(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,s=new Array(e);o<e;o++)s[o]=t[o];return s}function n(t,e){for(var o=0;o<e.length;o++){var s=e[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._dom={title:document.getElementById("title"),version:document.getElementById("version"),toggle:document.getElementById("toggle-light-fever"),manual:document.getElementById("manual-mode"),analyzer:document.getElementById("analyzer-mode"),selection:document.getElementById("selection-border"),manualContainer:document.getElementById("manual-container"),autoContainer:document.getElementById("auto-container"),themeSwitch:document.getElementById("theme-switch"),status:document.getElementById("status-text"),manualButtons:{UNIFORM:document.getElementById("manual-uniform"),CHASE:document.getElementById("manual-chase"),RAINBOW:document.getElementById("manual-rainbow"),CHASE_RAINBOW:document.getElementById("manual-chase-rainbow")},manualOptions:{UNIFORM:document.getElementById("manual-uniform-options"),CHASE:document.getElementById("manual-chase-options"),RAINBOW:document.getElementById("manual-rainbow-options"),CHASE_RAINBOW:document.getElementById("manual-chase-rainbow-options")},autoButtons:{UNIFORM:document.getElementById("auto-uniform"),PROGRESSIVE:document.getElementById("auto-progressive"),PROGRESSIVE_MIRROR:document.getElementById("auto-progressive-mirror"),PULSE:document.getElementById("auto-pulse")},autoOptions:{UNIFORM:document.getElementById("auto-uniform-options"),PROGRESSIVE:document.getElementById("auto-progressive-options"),PROGRESSIVE_MIRROR:document.getElementById("auto-progressive-mirror-options"),PULSE:document.getElementById("auto-pulse-options")},globalButtons:{STROBOSCOPE:document.getElementById("global-stroboscope"),strobOpts:document.getElementById("strob-opts")},modal:{overlay:document.getElementById("modal-overlay"),stroboscope:{container:document.getElementById("stroboscope-modal"),delay:document.getElementById("strob-delay"),delayText:document.getElementById("strob-delay-value"),color:document.getElementById("strob-color")}}},this._isActive=!1,this._isDark=!0,this._previousEffect=null,this._version="0.0.1",this._state="OFF",this._mode="MANUAL",this._effect=null,this._options=null,this._initEvents(),this._initState()}var e,s;return e=t,(s=[{key:"_initEvents",value:function(){this._dom.toggle.addEventListener("click",this._toggleLightFever.bind(this)),this._dom.manual.addEventListener("click",this._switchMode.bind(this)),this._dom.analyzer.addEventListener("click",this._switchMode.bind(this)),this._dom.themeSwitch.addEventListener("click",this._switchTheme.bind(this)),this._dom.manualButtons.UNIFORM.addEventListener("click",this._updateEffect.bind(this)),this._dom.manualButtons.CHASE.addEventListener("click",this._updateEffect.bind(this)),this._dom.manualButtons.RAINBOW.addEventListener("click",this._updateEffect.bind(this)),this._dom.manualButtons.CHASE_RAINBOW.addEventListener("click",this._updateEffect.bind(this)),this._dom.autoButtons.UNIFORM.addEventListener("click",this._updateEffect.bind(this)),this._dom.autoButtons.PROGRESSIVE.addEventListener("click",this._updateEffect.bind(this)),this._dom.autoButtons.PROGRESSIVE_MIRROR.addEventListener("click",this._updateEffect.bind(this)),this._dom.autoButtons.PULSE.addEventListener("click",this._updateEffect.bind(this)),this._dom.globalButtons.STROBOSCOPE.addEventListener("touchstart",this._startStroboscope.bind(this)),this._dom.globalButtons.STROBOSCOPE.addEventListener("touchend",this._stopStroboscope.bind(this)),this._dom.globalButtons.strobOpts.addEventListener("click",this._strobOptionsModal.bind(this))}},{key:"_initState",value:function(){var t=this;"light"===window.localStorage.getItem("theme")&&(this._isDark=!1,document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),this._dom.themeSwitch.checked=!0,this._dom.status.innerHTML="Switched to light theme"),this._dom.version.innerHTML=this._version,this._getState().then((function(e){if(t._dom.status.innerHTML="Set Light Fever 440 state","ON"===e.state&&(t._isActive=!0,t._dom.toggle.innerHTML="ON",t._dom.toggle.classList.remove("light-fever-off"),t._dom.toggle.classList.add("light-fever-on")),"AUDIO_ANALYSE"===e.mode&&(t._dom.manual.classList.remove("selected"),t._dom.analyzer.classList.add("selected"),t._dom.selection.style.left="50%",t._dom.manualContainer.style.left="-100%",t._dom.autoContainer.style.left="0",t._mode="AUDIO_ANALYSE"),"UNIFORM"!==e.effect){var s={},n={};"MANUAL"===t._mode?(s=t._dom.manualButtons,n=t._dom.manualOptions):(s=t._dom.autoButtons,n=t._dom.autoOptions);for(var i=0,a=Object.entries(s);i<a.length;i++){var d=o(a[i],2),l=d[0];d[1],s[l].classList.remove("selected"),n[l].style.display="none"}s[e.effect].classList.add("selected"),n[e.effect].style.display="block"}t._effect=e.effect})).catch((function(e){t._dom.status.innerHTML="Unable to load state"}))}},{key:"_toggleLightFever",value:function(){!1===this._isActive?(this._isActive=!0,this._dom.toggle.innerHTML="ON",this._dom.toggle.classList.remove("light-fever-off"),this._dom.toggle.classList.add("light-fever-on"),this._startLightFever()):(this._isActive=!1,this._dom.toggle.innerHTML="OFF",this._dom.toggle.classList.remove("light-fever-on"),this._dom.toggle.classList.add("light-fever-off"),this._stopLightFever())}},{key:"_startLightFever",value:function(){var t=this;this._dom.title.classList.add("activated"),this._dom.version.classList.add("activated"),this._state="ON",this._sendAction().then((function(){t._dom.status.innerHTML="Light Fever 440 started"})).catch((function(){t._dom.status.innerHTML="Unable to start Light Fever 440"}))}},{key:"_stopLightFever",value:function(){var t=this;this._dom.title.classList.remove("activated"),this._dom.version.classList.remove("activated"),this._state="OFF",this._sendAction().then((function(){t._dom.status.innerHTML="Light Fever 440 stopped"})).catch((function(){t._dom.status.innerHTML="Unable to stop Light Fever 440"}))}},{key:"_switchMode",value:function(t){var e=this;if("false"===t.target.dataset.manual){this._dom.manual.classList.remove("selected"),this._dom.analyzer.classList.add("selected"),this._dom.selection.style.left="50%",this._dom.manualContainer.style.left="-100%",this._dom.autoContainer.style.left="0",this._mode="AUDIO_ANALYSE",this._dom.status.innerHTML="Audio analyzer activated";for(var s=0,n=Object.entries(this._dom.autoButtons);s<n.length;s++){var i=o(n[s],2),a=i[0];if(i[1],this._dom.autoButtons[a].classList.contains("selected")){this._effect=this._dom.autoButtons[a].dataset.effect,this._dom.autoOptions[a].style.display="block";break}}}else{this._dom.analyzer.classList.remove("selected"),this._dom.manual.classList.add("selected"),this._dom.selection.style.left="0",this._dom.manualContainer.style.left="0",this._dom.autoContainer.style.left="100%",this._mode="MANUAL",this._dom.status.innerHTML="Manual control activated";for(var d=0,l=Object.entries(this._dom.manualButtons);d<l.length;d++){var c=o(l[d],2),r=c[0];if(c[1],this._dom.manualButtons[r].classList.contains("selected")){this._effect=this._dom.manualButtons[r].dataset.effect,this._dom.manualOptions[r].style.display="block";break}}}this._sendAction().then((function(){e._dom.status.innerHTML="Switched to mode ".concat(e._mode)})).catch((function(){e._dom.status.innerHTML="Unable to switch mode"}))}},{key:"_updateEffect",value:function(t){var e=this,s={},n={};"MANUAL"===this._mode?(s=this._dom.manualButtons,n=this._dom.manualOptions):(s=this._dom.autoButtons,n=this._dom.autoOptions);for(var i=0,a=Object.entries(s);i<a.length;i++){var d=o(a[i],2),l=d[0];d[1],s[l].classList.remove("selected"),n[l].style.display="none"}t.target.classList.add("selected"),this._effect=t.target.dataset.effect,n[this._effect].style.display="block",this._sendAction().then((function(){e._dom.status.innerHTML="Effect ".concat(e._effect," activated")})).catch((function(){e._dom.status.innerHTML="Unable to set effect ".concat(e._effect)}))}},{key:"_startStroboscope",value:function(t){var e=this;"global-stroboscope"===t.target.id&&(t.preventDefault(),this._previousEffect=this._effect,this._dom.globalButtons.STROBOSCOPE.classList.add("selected"),this._effect="STROBOSCOPE",this._sendAction().then((function(){e._dom.status.innerHTML="Stroboscope activated"})).catch((function(){e._dom.status.innerHTML="Unable to start stroboscope"})))}},{key:"_stopStroboscope",value:function(){var t=this;this._effect=this._previousEffect,this._previousEffect=null,this._dom.globalButtons.STROBOSCOPE.classList.remove("selected"),this._sendAction().then((function(){t._dom.status.innerHTML="Stroboscope deactivated"})).catch((function(){t._dom.status.innerHTML="Unable to stop stroboscope"}))}},{key:"_setOptionsForEffect",value:function(){"UNIFORM"===this._effect?this._options={color:[255,255,255]}:"CHASE"===this._effect?this._options={color:[255,255,255],delay:50}:"STROBOSCOPE"===this._effect&&(this._options={color:this._hexToRgb(this._dom.modal.stroboscope.color.value),delay:parseInt(this._dom.modal.stroboscope.delay.value)||50})}},{key:"_switchTheme",value:function(t){!0===t.target.checked?(this._isDark=!1,document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),this._dom.status.innerHTML="Switched to light theme",window.localStorage.setItem("theme","light")):(this._isDark=!0,document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),this._dom.status.innerHTML="Switched to dark theme",window.localStorage.setItem("theme","dark"))}},{key:"_strobOptionsModal",value:function(){var t=this;this._dom.modal.overlay.classList.add("visible"),this._dom.modal.stroboscope.container.classList.add("visible");var e=function(e){t._dom.modal.stroboscope.delayText.innerHTML=e.target.value,window.localStorage.setItem("strob-delay",e.target.value)},o=function(e){t._dom.modal.stroboscope.color.value=e.target.value,window.localStorage.setItem("strob-color",e.target.value)},s=function(n){"strob-modal-close"!==n.target.id&&"modal-overlay"!==n.target.id||(t._dom.modal.overlay.classList.remove("visible"),t._dom.modal.stroboscope.container.classList.remove("visible"),t._dom.modal.stroboscope.delay.removeEventListener("click",e),t._dom.modal.stroboscope.color.removeEventListener("input",o),t._dom.modal.overlay.removeEventListener("click",s),document.getElementById("strob-modal-close").removeEventListener("click",s))};e=e.bind(this),o=o.bind(this),s=s.bind(this),this._dom.modal.stroboscope.color.value=window.localStorage.getItem("strob-color")||"#FFFFFF",rangesliderJs.create(this._dom.modal.stroboscope.delay,{value:window.localStorage.getItem("strob-delay")||"50"}),this._dom.modal.stroboscope.delay.addEventListener("input",e),this._dom.modal.stroboscope.color.addEventListener("input",o),this._dom.modal.overlay.addEventListener("click",s),document.getElementById("strob-modal-close").addEventListener("click",s)}},{key:"_getState",value:function(){var t=this;return new Promise((function(e,o){t._ajax("state").then(e).catch(o)}))}},{key:"_sendAction",value:function(){var t=this;return new Promise((function(e,o){t._setOptionsForEffect(),t._ajax("action",{state:t._state,mode:t._mode,effect:t._effect,options:t._options}).then(e).catch(o).finally((function(){t._options=null}))}))}},{key:"_ajax",value:function(t,e){return new Promise((function(o,s){var n={method:e?"POST":"GET",headers:new Headers([["Content-Type","application/json; charset=UTF-8"],["Accept","application/json"]]),body:JSON.stringify(e)};fetch(t,n).then((function(t){t?t.ok?o(t.json()):s("ERROR_".concat(t.status)):s("ERROR_MISSING_ARGUMENT")})).catch(s)}))}},{key:"_hexToRgb",value:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[255,255,255]}}])&&n(e.prototype,s),t}();window.LF440=new i,e.default=i}},e={};return function o(s){if(e[s])return e[s].exports;var n=e[s]={exports:{}};return t[s](n,n.exports,o),n.exports}(872)}().default;