'use strict';
var csstext = require('./css.js');

function offline(obj) {
    var _options, _allposn = ['topLeft', 'topRight', 'topMiddle', 'bottomLeft', 'bottomRight', 'bottomMiddle'];
    var _default = {
        position: 'topMiddle',
        id: 'NetworkStaus',
        delay: 1000,
        onlineMsg: 'You Are online',
        offlineMsg: 'You Are offline'
    }

    function validateObj(obj) {
        if (!_allposn.includes(obj.position)) {
            obj.position = _default.position;
        }
        if (!obj.id || !obj.id.trim()) {
            obj.id = _default.id;
        }
        if (!obj.delay) {
            obj.delay = _default.delay;
        }
        if (!obj.onlineMsg) {
            obj.onlineMsg = _default.onlineMsg;
        }
        if (!obj.offlineMsg) {
            obj.offlineMsg = _default.offlineMsg;
        }
        return obj;
    }
    if (typeof obj === 'object') {
        _options = validateObj(obj);
        if (!_options && typeof _options === 'object' && !_options.id && !_options.position && _allposn.includes(_options.position)) {
            throw new Error("missing parameters...");
        } else {
            init();
        }
    }

    function removeStyle() {
        document.getElementById(_options.id).removeAttribute('style');
    }

    function onlineMsg() {
        var element = document.getElementById(_options.id);
        element.querySelector('.__nvJs--msgBlock-selector').innerText = _options.onlineMsg;
        element.querySelector('.__nvJs--msgBlock-selector').classList.add('green');
        window.setTimeout(removeStyle, _options.delay);
    }

    function offlineMsg() {
        var element = document.getElementById(_options.id);
        element.querySelector('.__nvJs--msgBlock-selector').innerText = _options.offlineMsg;
        element.querySelector('.__nvJs--msgBlock-selector').classList.remove('green');
        element.style = 'transform:none; !important';
    }

    function createElement() {
        var containerDiv = document.createElement('div');
        containerDiv.id = _options.id;
        containerDiv.classList.add('__nv--msgContainer');
        containerDiv.classList.add('__nvJs--msgContainer-selector');
        if (_allposn.includes(_options.position)) {
            containerDiv.classList.add('__nvPostion-' + _options.position);
        }
        var innerDiv = document.createElement('div');
        innerDiv.classList.add('__nv-msgBlock');
        innerDiv.classList.add('__nvJs--msgBlock-selector');
        containerDiv.appendChild(innerDiv);
        document.body.appendChild(containerDiv);
    }

    function appendStyle() {
        var style = document.createElement('style');
        style.innerHTML = csstext;
        document.body.appendChild(style);
    }

    function init() {
        appendStyle();
        createElement();
        navigator.onLine ? '' : offlineMsg();

        window.addEventListener('online', function() {
            onlineMsg();
        });
        window.addEventListener('offline', function() {
            offlineMsg();
        });
    }
}
var offlineObj;
var getInstance = function(obj) {
    if (!offlineObj) {
        offlineObj = new offline(obj);
    } else {
        throw new Error("You can only initalize once");
    }
    return offlineObj;
}

module.exports = {
    init: getInstance
};