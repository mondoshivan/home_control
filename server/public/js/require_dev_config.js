

require.config({
    baseUrl: "js",
    paths: {
        jquery: [
            'lib/jquery-1.8.2'
        ],
        jqueryui: [
            'lib/jquery-ui-1.12.1'
        ],
        angular: [
            'lib/angular-1.7.8'
        ]
    },
    shim: {
        jqueryui: {
            deps: ['jquery']
        },
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        }
    }
});

// Start the app:
require(['app'], function (app) {
    app.start();
});