!function(){function t(e){return this.elements=document.querySelectorAll(e),this}t.prototype.each=function(e){return this.elements.forEach(e),this},t.prototype.addClass=function(t){return this.each(function(e){e.classList.add(t)})},t.prototype.removeClass=function(t){return this.each(function(e){t?e.classList.add(t):e.className=""})},t.prototype.click=function(t){return this.each(function(e){e.addEventListener("click",t)})},t.prototype.val=function(t){return this.each(function(e){e.value=t})},window.gs=function(e){return new t(e)},gs.ready=function(e){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,1):document.addEventListener("DOMContentLoaded",e)},gs.getParameterByName=function(e,t){t=t||window.location.href,e=e.replace(/[\[\]]/g,"\\$&");var s=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return s?s[2]?decodeURIComponent(s[2].replace(/\+/g," ")):"":null},gs.addClass=function(e,t){document.querySelectorAll(e).forEach(function(e){e.classList.add(t)})}}(),gs.ready(function(){var e=gs.getParameterByName("action"),t=gs.getParameterByName("success");"subscribe"!==e||null!==t&&"true"!==t||gs("body").addClass("subscribe-success"),"subscribe"===e&&"false"===t&&gs("body").addClass("subscribe-failure"),gs(".subscribe-notification .subscribe-close-button").click(function(){gs(".subscribe-notification").addClass("close")}),gs(".subscribe-button").click(function(){gs(".subscribe-overlay form").removeClass(),gs(".subscribe-email").val("")})});