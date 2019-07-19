/// <amd-dependency path="legacyJs"/>
/// <amd-dependency path="app/js_module/module"/>

import tsmodule = require("app/ts_module/module");

export function start() {
    // Use a legacy js module:
    let legacyJs = require("legacyJs");
    legacyJs.legacyJsFunction("what legacyjs");
    legacyJs.legacyJsFunction2("what legacyjs Function2");

    // Use a js module:
    let moduleJs = require('app/js_module/module');
    moduleJs.newJsFunction("what newjs");

    // Use a typescript module: tsc makes this effortless
    tsmodule.tsmoduleFunction("what ts");
}