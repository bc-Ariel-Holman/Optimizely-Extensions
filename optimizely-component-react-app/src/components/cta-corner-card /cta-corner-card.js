
var utils = optimizely.get("utils");
var cookie = "Corner_Card_CTA";

function createCard() { 
  utils.waitForElement("body").then(function(elem) {
    
   
    
    // Prepend the extension html to the body
    console.debug("Starting extension");

    // If the browser has cookie then don't show the extension
    if (hasCookie(cookie)) {
        return;
    }

    // Avoid that the extension fire 2 times
    var popup = document.querySelector(".popup-opt");
    if (popup) {
        return;
    }

    elem.insertAdjacentHTML("afterbegin", extension.$html);
    
     //CSS Selectors
    var COLOR = document.querySelector("#colorOptId").value;
    var container = document.querySelector(".popup-opt"); // Main container
    container.classList.add(COLOR);
    
    var closeBtn = document.querySelector(".close-btn-opt");
    closeBtn.addEventListener("click", closePopup, false);

    var button = document.querySelector(".button-opt");
    button.addEventListener("click", function() {
        setCookieWithExpires(cookie, 1);
    });
});
};

window.onload = setTimeout(createCard,15000);


function closePopup() {
    // Add cookie and expiration date of 1 days
    setCookieWithExpires(cookie, 1);
    var popup = document.querySelector(".popup-opt");
    var background = document.querySelector(".background-opt");
    popup.parentNode.removeChild(popup);
    background.parentNode.removeChild(background);
}

function setCookieWithExpires(cookie, days) {
    var hours = days * 24;
    var minutes = hours * 60;
    var seconds = minutes * 60;
    var date = new Date();
    date = new Date(date.getTime() + 1000 * seconds);
    document.cookie = cookie + "=true; expires=" + date.toGMTString() + "; path=/";
}

function hasCookie(cookie) {
    var regexText = "(?:(?:^|.*;\\s*)" + cookie + "\\s*\\=\\s*([^;]*).*$)|^.*$";
    var regex = new RegExp(regexText, "g");
    var cookieValue = document.cookie.replace(regex, "$1");
    return cookieValue != "";
}