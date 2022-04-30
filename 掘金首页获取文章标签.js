// ==UserScript==
// @name         掘金首页获取文章标签
// @namespace    https://coycs.com/
// @version      0.1.0
// @description  从掘金首页的文章列表获取指定数目的不同的标签并保存成文件下载
// @author       coycs
// @match        *://juejin.cn/
// @require      https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
    'use strict';

    // 自定义目标标签数量
    var counts = 100;
    // 自定义标签的连接符号
    var counts_combine = ",";
    // 自定义输出文件的名字
    var fileName = "掘金首页文章列表标签"
    // 自定义每次滚动距离
    var scrollLength = 500;
    // 自定义每隔多长时间滚动一次
    var scrollInterval = 200;


    // 定义函数作用开始的位置
    var startNumber = 0;
    // 定义标签数组
    var tags = [];
    // 定义输出文件的判断条件（只下载一次文件）
    var stopFlag = 0;
    // 获取滚动容器
    var del = document.documentElement;
    // 定义主函数
    function getTags(start) {
        // 获取文章列表的每一个子项
        var items = document.querySelectorAll('[data-growing-title="entryList"]');
        // 获取标签并保存到数组（如果存在则不保存）
        for (var i = start; i < items.length; i++) {
            var item_tags = items[i].getElementsByClassName("tag");
            for (var j = 0; j < item_tags.length; j++) {
                var item_tag = item_tags[j].innerHTML.trim();
                if (tags.indexOf(item_tag) == -1 && tags.length < counts) {
                    tags.push(item_tag);
                }
            };
        }
        // 更新函数作用开始的位置
        startNumber = items.length;
    }


    // 浏览器打开时就调用主函数
    getTags(startNumber);
    // 每隔一段时间就向下滚动一段距离
    var scroll = setInterval(function () {
        del.scrollTop += scrollLength;
    }, scrollInterval);
    // 页面滚动时调用主函数
    window.onscroll = function () {
        getTags(startNumber);
        if (tags.length == counts && stopFlag == 0) {
            // 停止滚动
            window.clearInterval(scroll);
            var tagsString = "";
            // 标签数组每项用换行符连接成字符串
            for (var i = 0; i < tags.length; i++) {
                if (i == tags.length - 1) {
                    tagsString += tags[i];
                } else {
                    tagsString += tags[i] + counts_combine;
                }
            }
            // 下载文件
            var file = new File([tagsString], fileName + ".txt", { type: "text/plain;charset=utf-8" });
            saveAs(file);
            stopFlag += 1;
        }
    };
})();

