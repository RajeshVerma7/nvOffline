'use strict';
var csstext = require('./css.js');

function offline(obj) {
    var _posn;
    var _elem;
    var _default = {
        pos:'bottom_left'
    }
    if (typeof obj === 'object') {
        _posn = obj.position;
        _elem = obj.id;
        if (!_posn && !_elem) {
            throw new Error("missing parameters...");
        } else {
            init();
        }
    }

    function onlineMsg() {
        var element = document.getElementById(_elem);
        element.querySelector('.__nvJs--msgBlock-selector').innerText = 'You Are online';
        // element.setAttribute('class', 'offline-ui offline-ui-up offline-ui-up-5s');
        // if(_posn === 'top'){
        //     element.setAttribute('class', 'offline-ui offline-ui-up offline-ui-up-5s');
        // }else if(_posn === 'bottom'){
        //     element.setAttribute('class', 'offline-ui offline-ui-up offline-ui-down');
        // }
    }
    function offlineMsg() {
        var element = document.getElementById(_elem);
        element.querySelector('.__nvJs--msgBlock-selector').innerText = 'You Are offline';
        // element.removeAttribute('class');
        // element.setAttribute('class', 'offline-ui offline-ui-down');
        // if(_posn === 'top'){
        //     element.setAttribute('class', 'offline-ui offline-ui-down');
        // }else if(_posn === 'bottom'){
        //      element.setAttribute('class', 'offline-ui offline-ui-up offline-ui-up-5s');
        // }
    }
    function createElement() {
        var containerDiv = document.createElement('div');
        containerDiv.id = _elem;
        containerDiv.classList.add('__nv--msgContainer');
        containerDiv.classList.add('__nvJs--msgContainer-selector');
        containerDiv.classList.add('__nvPostion-top');
        // containerDiv.style = _posn + ": 0px;";
        var innerDiv = document.createElement('div');
        innerDiv.classList.add('__nv-msgBlock');
        innerDiv.classList.add('__nvJs--msgBlock-selector');
        containerDiv.appendChild(innerDiv);
        document.body.appendChild(containerDiv);
    }
    function appendStyle() {
        var style = document.createElement('style');
        // style.innerText = '.offline-ui{display:none;position:fixed;z-index:2000;margin:auto;left:0;right:0;-webkit-border-radius:0 0 4px 4px;-moz-border-radius:0 0 4px 4px;-ms-border-radius:0 0 4px 4px;-o-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;font-family:"Helvetica Neue",sans-serif;font-weight:300;padding:1em;width:38em;max-width:100%;background:#000;color:#ccc;overflow:hidden}.offline-ui.offline-ui-down,.offline-ui.offline-ui-up.offline-ui-up-5s{display:block}@-webkit-keyframes offline-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-moz-keyframes offline-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-ms-keyframes offline-dropin{0%,1%{opacity:0}100%,2%{opacity:1}0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}1%,2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-o-keyframes offline-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@keyframes offline-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-webkit-keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-moz-keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-ms-keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-o-keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@media (max-width:38em){.offline-ui{-webkit-border-radius:0;-moz-border-radius:0;-ms-border-radius:0;-o-border-radius:0;border-radius:0}}.offline-ui .offline-ui-content{padding-left:2em}.offline-ui .offline-ui-content:before{line-height:1.25em}.offline-ui .offline-ui-content:after{-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;border-radius:50%;content:" ";display:block;position:absolute;top:0;bottom:0;left:1em;margin:auto;height:1em;width:1em}.offline-ui.offline-ui-up .offline-ui-content:after{background:#80d580}.offline-ui.offline-ui-up{-webkit-animation:offline-dropout forwards .5s 2s;-moz-animation:offline-dropout forwards .5s 2s;-ms-animation:offline-dropout forwards .5s 2s;-o-animation:offline-dropout forwards .5s 2s;animation:offline-dropout forwards .5s 2s;-webkit-backface-visibility:hidden}.offline-ui.offline-ui-down{-webkit-animation:offline-dropin .5s;-moz-animation:offline-dropin .5s;-ms-animation:offline-dropin .5s;-o-animation:offline-dropin .5s;animation:offline-dropin .5s;-webkit-backface-visibility:hidden}.offline-ui.offline-ui-down .offline-ui-content:after{background:#e24949}';
        style.innerHTML = csstext;
        document.body.appendChild(style);
    }
    function init() {
        appendStyle();
        createElement();
        navigator.onLine ? '' : offlineMsg();

        window.addEventListener('online', function () {
            onlineMsg();
        });
        window.addEventListener('offline', function () {
            offlineMsg();
        });
    }
}
var offlineObj;
var getInstance = function (obj) {
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

