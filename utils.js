(function() {

var utils = {};

utils.selectElementContents = function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
};

// Export
window.utils = utils;

}());
