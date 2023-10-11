
const functionality = () => {
    var container = document.querySelector('.basic-popup-cta');
    var type = document.querySelector("#typeId").value;
      var popup = document.querySelector(".popup-opt");
    var background = document.querySelector(".background-opt");
    
    container.classList.add('show');
    container.classList.remove('hide');
    
     popup.classList.add(type);
    background.parentNode.appendChild(background);
      //Add close event to close popup
      document.querySelector(".close-btn-opt").addEventListener("click",function() {
          popup.style.display = "none";
      background.parentNode.removeChild(background);
      });
  };
  
  const utils = optimizely.get('utils');
    utils.waitForElement('body').then(function(elem) {
      
      // Prepend the extension html to the body
      elem.insertAdjacentHTML('afterbegin', extension.$html);
      
      const popupDelay = document.querySelector(".popup-opt").dataset.popupdelay;
      
      setTimeout(function() {
       functionality();
      },popupDelay);
    });
  
  