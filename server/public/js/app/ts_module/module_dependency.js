define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function sayIt(what) {
        console.log("tsmoduleDependency : sayIt called.");
        console.log("Someone said: " + what);
    }
    exports.sayIt = sayIt;
});
