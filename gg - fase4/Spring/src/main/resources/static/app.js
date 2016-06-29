System.register(['angular2/platform/browser', './app/cabecera.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, cabecera_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (cabecera_component_1_1) {
                cabecera_component_1 = cabecera_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(cabecera_component_1.CabeceraComponent, []);
        }
    }
});
//# sourceMappingURL=app.js.map