let util = {};

util.addClass = function (element, className) {
    element.classlist.add(className);
}

util.removeClass = function (element, className) {
    element.classlist.remove(className);
}

util.createElement = function (elemToCreate) {
    return document.createElement(elemToCreate);
}

module.exports = util;