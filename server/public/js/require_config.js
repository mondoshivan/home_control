

require.config({
    baseUrl: "js",
    paths: {
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min',
            'lib/jquery-1.8.2'
        ],
        jqueryui: [
            'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
            'lib/jquery-ui-1.12.1'
        ],
        legacyJs: 'app/legacy_js/legacy_lib', // Relative to baseUrl
        legacyJsDependency: './app/legacy_js/legacy_lib_dependency' // Relative to this file
    },
    shim: {
        jqueryui: {
            deps: ['jquery']
        },
        'legacyJs': {
            // For dependencies.
            deps: ['legacyJsDependency'],
            // For more than one global export you need to use an init function :
            init: function () {
                // Inside this function this will refer to the global scope of the file
                return {
                    'legacyJsFunction': this.legacyJsFunction,
                    'legacyJsFunction2': this.legacyJsFunction2
                };
            }
        },
        'legacyJsDependency': {
            // For simple single exports Just use exports variable
            exports: 'sayIt'
        }
    }
});

// Start the app:
require(['app'], function (app) {
    app.start();
});