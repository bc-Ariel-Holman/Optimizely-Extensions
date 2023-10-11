/*
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

const utils = optimizely.get('utils');

utils.waitForElement('body')
.then(function(elem) {
  // Prepend the extension html to the body
  elem.insertAdjacentHTML('afterbegin', extension.$html);
});
