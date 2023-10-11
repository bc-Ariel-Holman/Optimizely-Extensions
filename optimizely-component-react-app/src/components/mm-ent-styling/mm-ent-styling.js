var utils = optimizely.get('utils');

utils.waitForElement('body')
  .then(function(elem) {
    // Prepend the extension html to the body
    elem.insertAdjacentHTML('afterbegin', extension.$html);
	  functionality();
  });


function functionality() {
	var type = document.querySelector("#typeId").value;
	var popup = document.querySelector(".popup-opt-"+type);
  var background = document.querySelector(".background-opt");
  popup.style.display= "block";
  background.parentNode.appendChild(background);
	///Addcloseeventtoclose popup
	document.querySelector(".close-btn-opt-" + type).addEventListener("click",function() {
		popup.style.display = "none";
    background.parentNode.removeChild(background);
	});
}

function setCookieWithExpires(cookie, days) {
    var hours = days * 24;
    var minutes = hours * 60;
    var seconds = minutes * 60;
    var date = new Date();
    date = new Date(date.getTime() + 1000 * seconds);
    document.cookie = cookie + "=true; expires=" + date.toGMTString() + "; path=/";
}

setCookieWithExpires("opt_trial_modal_shown", 30);

