const utils = optimizely.get('utils');

const showExpandedView = () => {
    var expandedView = document.querySelector(".modal-version");
  var barText = document.querySelector(".bar-cta-text");

//show text for modal view
  expandedView.classList.toggle("show");

//hide text for bar view
  barText.classList.toggle("hide");
};

utils.waitForElement('body')
.then(function(elem) {
// Prepend the extension html to the body
  elem.insertAdjacentHTML('afterbegin', extension.$html);

//CSS Selectors
var COLOR = document.querySelector("#colorOptId").value;
var button = document.querySelector("#fixed-toggle-btn");
var collapsedBanner = document.querySelector("#bar-version");
var container = document.querySelector(".fixed-bottom-cta"); // Main container
container.classList.add(COLOR);

button.addEventListener("click", function() {
      //rotate arrow up and down on click
    button.classList.toggle("rotate");
      
      //show text for bar view
      collapsedBanner.classList.toggle("show");
      
      showExpandedView();
      
});
});

const hideDrift = () => {
drift.api.widget.hide();
}; 

window.onload = hideDrift;