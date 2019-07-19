/// <amd-dependency path="legacyJs"/>
/// <amd-dependency path="app/js_module/module"/>
define(["require", "exports", "app/ts_module/module", "jquery", "legacyJs", "app/js_module/module", "jqueryui"], function (require, exports, tsModule, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function start() {
        // Use a legacy js module:
        let legacyJs = require("legacyJs");
        legacyJs.legacyJsFunction("what legacyjs");
        legacyJs.legacyJsFunction2("what legacyjs Function2");
        // Use a js module:
        let moduleJs = require('app/js_module/module');
        moduleJs.newJsFunction("what newjs");
        // Use a typescript module: tsc makes this effortless
        tsModule.tsmoduleFunction("what ts");
        // JQuery UI
        $(".widget input[type=submit], .widget a, .widget button").button();
        $("button, input, a").click(function (event) {
            alert('asdf');
            event.preventDefault();
        });
    }
    exports.start = start;
});
