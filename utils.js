(function() {

var utils = {};

utils.selectText = function(delta) {
    var sel = window.getSelection();
    var range = sel.getRangeAt(0).cloneRange();
    (delta >= 0) && range.setEnd(range.endContainer, range.endOffset + delta);
    (delta < 0) && range.setStart(range.startContainer, range.startOffset + delta);
    sel.removeAllRanges();
    sel.addRange(range);
};

utils.replaceSelectedText = function(nodes) {
    var sel = window.getSelection();
    range = sel.getRangeAt(0);
    range.deleteContents();
    for (var i = 0; i < nodes.length; i++) {
        range.insertNode(nodes[i]);

        range = document.createRange();
        range.setStartAfter(nodes[i]);
        sel.removeAllRanges();
        sel.addRange(range);
    }
};

utils.moveCursor = function(node) {
    var sel = window.getSelection();
    var range = document.createRange();
    range.setStartAfter(node);
    sel.removeAllRanges();
    sel.addRange(range);
};

utils.nbsp = function() {
    return document.createTextNode('\u00A0');
};

// Export
window.utils = utils;

}());
