define(["require", "exports", "./module_dependency"], function (require, exports, dependency) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function tsmoduleFunction(what) {
        console.log("tsmoduleFunction called");
        dependency.sayIt(what);
    }
    exports.tsmoduleFunction = tsmoduleFunction;
});
