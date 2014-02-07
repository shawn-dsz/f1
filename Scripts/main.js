// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    //By default load any module IDs from js/lib
    // baseUrl: 'js/lib',

    paths: {
        domReady: 'lib/../domReady',
        jquery: 'lib/jquery-1.7.1',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        text: 'lib/text',
        templates: 'templates'
    },

    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(
    [
    'app/app',
    'text!../Content/todos.css'
    ],
     function (AppView) {
         //var App = new AppView;
     });