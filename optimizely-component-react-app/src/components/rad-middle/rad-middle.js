var utils = optimizely.get('utils');
var cookie = 'RAD_middle_cookie';
var bodyWrapper = document.querySelector('.bodyWrapper');

utils.waitForElement('body')
    .then(function (elem) {
        // Prepend the extension html to the body
        if (!hasCookie(cookie)) {
            elem.insertAdjacentHTML('afterbegin', extension.$html);
          	bodyWrapper.classList.add("bodyWrapper-fade");
            closeBtn();
            // Set cookie
            document.cookie = cookie + "=true; path=/";
        }
    });

function closeBtn() {
    document.querySelector('.close-btn').addEventListener('click', function () {
        document.querySelector('.popup').style.display = 'none';
      	bodyWrapper.classList.remove("bodyWrapper-fade");
    });
}

function hasCookie(cookie) {
    var regexText = "(?:(?:^|.*;\\s*)" + cookie + "\\s*\\=\\s*([^;]*).*$)|^.*$";
    var regex = new RegExp(regexText, "g");
    var cookieValue = document.cookie.replace(regex, "$1");
    return !(cookieValue == '');
}