// ==UserScript==
// @name         恢复蓝奏云失效链接
// @namespace    https://coycs.com/
// @version      0.1.1
// @description  恢复因换域名而导致失效的蓝奏云链接
// @author       coycs
// @match       *.lanzous.com/*
// @match       *.lanzoux.com/*
// @match       *.lanzouw.com/*
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
    'use strict';

    // 获取链接
    var href = window.location.href;
    // 获取顶级域名
    var domin = document.domain.split('.').slice(-2).join('.');
    // 定义正确的域名
    var dominR = "lanzoui.com";
    // 实现跳转
    location.href = href.replace(domin, dominR);
})();
