
const utils = optimizely.get('utils');
utils.waitForElement('body').then(function(elem) {

  // Prepend the extension html to the body
  elem.insertAdjacentHTML('afterbegin', extension.$html);

  functionality();

  // Trigger modal on button clicks with [href="multi-start-modal"]
  var button = document.querySelector('.button[href="#multi-start-modal"]');
  button.onclick = function() {
    console.log('Multi-CTA Button Clicked');
    var container = document.querySelector('.basic-popup-cta');
    container.classList.add('show');
    container.classList.remove('hide');
  };
});


const functionality = () => {
  //Variables
  var container = document.querySelector('.basic-popup-cta');
  var popup = document.querySelector(".popup-opt");
  var background = document.querySelector(".background-opt");
  var recBox = document.querySelector("#recBoxId").value;
  var selectedBox = document.querySelector("#recBox-"+recBox);
  var recBoxBorder = selectedBox.querySelector('.box');
  var recBoxTag = selectedBox.querySelector('.rec-box');
  var closeBtn = document.querySelector(".close-btn-opt");

  // add styles to selected reccommended box
  recBoxBorder.classList.add("rec-border");
  recBoxTag.style.display = "inline-block";
  
  // Add background
  background.parentNode.appendChild(background);
  
	// Add close event to close popup
	closeBtn.addEventListener("click",function() {
		closeModal();
	});
  
  background.addEventListener("click",function() {
		closeModal();
	});
  
  function closeModal() {
    container.classList.remove('show');
    container.classList.add('hide');
  }
  
  // Use these to show the popup
  // container.classList.add('show');
  // container.classList.remove('hide');
};




