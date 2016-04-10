System.register(['angular2/platform/browser', './app/gg'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, gg_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (gg_1_1) {
                gg_1 = gg_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(gg_1.GgApp, []);
        }
    }
});
//# sourceMappingURL=app.js.map