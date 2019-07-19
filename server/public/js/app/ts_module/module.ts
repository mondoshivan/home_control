// Either use path from your base path:
//import dependency = module("tsmodule/tsmoduleDependency");
// OR relative path from currnet file
import dependency = require("./module_dependency");

export function tsmoduleFunction(what: string) {
    console.log("tsmoduleFunction called");
    dependency.sayIt(what);
}