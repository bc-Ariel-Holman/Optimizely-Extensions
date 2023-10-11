var utils = optimizely.get('utils');
var cookie = "RAD_middle_cookie";

utils.waitForElement('body').then(function (elem) {
    // If the browser has cookie then don't show the extension
    if (hasCookie(cookie)) {
        return;
    }

    // Prepend the extension html to the body
    elem.insertAdjacentHTML('afterbegin', extension.$html);
    init();
 background.parentNode.removeChild(background);
});


function init() {
    var closeButton = document.querySelector(".close-btn");
    closeButton.addEventListener("click", close);
 		
}

function close() {
    var overlay = document.querySelector("#overlay");
    var container = document.querySelector("#container-opt");
		var background = document.querySelector(".background-opt");
    overlay.style.display = "none";
    container.style.display = "none";
 		background.parentNode.removeChild(background);
    setCookie(cookie);
  	
}

function hasCookie(cookie) {
    var regexText = "(?:(?:^|.*;\\s*)" + cookie + "\\s*\\=\\s*([^;]*).*$)|^.*$";
    var regex = new RegExp(regexText, "g");
    var cookieValue = document.cookie.replace(regex, "$1");
    return cookieValue != "";
}

function setCookie(cookie) {
    document.cookie = cookie + "=true; path=/";
}
