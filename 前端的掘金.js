// ==UserScript==
// @name         前端的掘金
// @namespace    https://coycs.com/
// @version      0.1.0
// @description  掘金首页的文章列表中只显示与前端有关的文章
// @author       coycs
// @match        *://juejin.cn/
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
    'use strict';

    // 定义函数作用开始的位置
    var startNumber = 0;
    // 定义主函数
    function onlyFronted(start) {
        // 前端要素数组
        var frontend_tags = ["Markdown", "前端", "Vue.js", "JavaScript", "LeetCode", "React.js", "PostCSS", "Vite", "Webpack", "Docker", "Flutter", "Taro", "开源", "Redux", "three.js", "前端框架", "HTTPS", "Canvas", "微信小程序", "Electron", "动效", "Node.js", "ECMAScript 6", "网络协议", "TCP/IP", "TypeScript", "Element", "API", "云原生", "HTML", "Promise", "uni-app", "Babel", "Angular.js", "Dart", "CI/CD", "ECharts", "全栈", "RPC", "Chrome", "DNS", "Charles", "Puppeteer", "SCSS", "Ajax", "OKHttp", "React Native", "SVG", "axios", "SVN", "NPM", "ESLint", "Yarn", "WebGL", "WebView", "V8", "WebSocket", "DOM", "Bootstrap", "iTerm", "正则表达式", "NestJS", "Ant Design", "MobX", "vue-router", "小程序·云开发", "GraphQL", "RxJS", "Immutable.js", "WebStorm", "Nuxt.js", "Serverless", "Kibana", "Hexo", "OpenGL", "d3.js", "SwiftUI", "PWA", "APK", "jQuery", "Express", "Postman", "Jest", "响应式设计", "Vuex", "容器", "deno", "Swagger", "protobuf", "flexbox", "ECMAScript 8", "UI Kit", "Web Components", "JSON", "RequireJS", "Glide", "SaaS", "Selenium", "Grunt", "Fastjson", "WebVR", "XSS", "Cocos Creator", "交互设计", "FFmpeg", "TensorFlow", "CDN", "HBase", "Egg.js", "koa", "Underscore.js", "RSS", "视觉设计"];
        // 后端要素数组
        // var backend_tags = ["后端", "Java", "MySQL", "Android", "深度学习", "人工智能", "Xcode", "iOS", "gradle", "Kafka", "Netty", "MyBatis", "Spring Boot", "Swift", "Spring Cloud", "C++", "Go", "数据库", "Jenkins", "Python", "分布式", "RocketMQ", "Apache", "DevOps", "运维", "Linux", "Kotlin", "JVM", "Rust", "Elasticsearch", "Redis", "Kubernetes", "C语言", "PyTorch", "RabbitMQ", "自动化运维", "消息队列", "边缘计算", "Django", "maven", "机器学习", "Apache Log4j", "Oracle", "OpenCV", "PHP", "Dubbo", "Flask", "Hadoop", "领域驱动设计", "Spark", "NLP", "Nginx", "敏捷开发", "Android Jetpack", "Laravel", "Ubuntu", "Shell", "MongoDB", "Objective-C", "gRPC", "SQL Server", "EventBus", "Flink", "RxJava", "Grafana", "Scala", "状态机", "PhpStorm", "SQLite", "Java EE", "Istio", "Service Mesh", "Cordova", "ZooKeeper", "Tomcat", "汇编语言", "Gin", "ORM", "pandas", "Apache Hive", "LeakCanary", "Gson", "Qt", "PostgreSQL", "greenplum", "UML", "OpenStack"];
        // 获取文章列表的每一个子项
        var items = document.querySelectorAll('[data-growing-title="entryList"]');
        // 找出标签中不含有前端要素数组中任意一项的文章并隐藏
        for (var i = start; i < items.length; i++) {
            var flag = 0;
            var item_tags = items[i].getElementsByClassName("tag");
            for (var j = 0; j < item_tags.length; j++) {
                if (frontend_tags.indexOf(item_tags[j].innerHTML.trim()) != -1) {
                    flag = 1;
                    break;
                }
            };
            if (flag == 0) {
                items[i].style.display = "none";
            }
        }
        // 更新函数作用开始的位置
        startNumber = items.length;

        if (mflag == 1) {
            observer.disconnect();
            mflag++;
        }
    }
    // 文章列表加载完就调用主函数
    var container = document.getElementsByClassName("entry-list-wrap")[0];
    var mflag = 1;
    var config = { childList: true };
    var observer = new MutationObserver(function () { onlyFronted(startNumber); });
    observer.observe(container, config);

    setTimeout(function () { onlyFronted(startNumber); }, 5000);

    // 页面滚动时调用主函数
    window.onscroll = function () {
        onlyFronted(startNumber);
    };
})();
