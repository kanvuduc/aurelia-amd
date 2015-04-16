/**
 * This file is the sample of RequireJS configuration for using Aurelia with RequireJS.
 * It declares all Aurelia packages so that it could be consumed by RequireJS later on.
 * Currently, it assumes that all Aurelia packages are located inside aurelia-packages folder
 * which could be changed if we use bower/jsmp.
 *
 * @author Vu Duc Tuyen (kanvuduc)
 * */

require.config({
    baseUrl: '',
    paths: {},
    packages: [
        {
            "name": "aurelia-animator-css",
            "location": "aurelia-amd/animator-css",
            "main": "index"
        },
        {
            "name": "aurelia-binding",
            "location": "aurelia-amd/binding",
            "main": "index"
        },
        {
            "name": "aurelia-bootstrapper",
            "location": "aurelia-amd/bootstrapper",
            "main": "index"
        },
        {
            "name": "aurelia-dependency-injection",
            "location": "aurelia-amd/dependency-injection",
            "main": "index"
        },
        {
            "name": "aurelia-event-aggregator",
            "location": "aurelia-amd/event-aggregator",
            "main": "index"
        },
        {
            "name": "aurelia-framework",
            "location": "aurelia-amd/framework",
            "main": "index"
        },
        {
            "name": "aurelia-history",
            "location": "aurelia-amd/history",
            "main": "index"
        },
        {
            "name": "aurelia-history-browser",
            "location": "aurelia-amd/history-browser",
            "main": "index"
        },
        {
            "name": "aurelia-html-template-element",
            "location": "aurelia-amd/html-template-element",
            "main": "HTMLTemplateElement"
        },
        {
            "name": "aurelia-http-client",
            "location": "aurelia-amd/http-client",
            "main": "index"
        },
        {
            "name": "aurelia-loader",
            "location": "aurelia-amd/loader",
            "main": "index"
        },
        {
            "name": "aurelia-loader-default",
            "location": "aurelia-amd/loader-default",
            "main": "index"
        },
        {
            "name": "aurelia-logging",
            "location": "aurelia-amd/logging",
            "main": "index"
        },
        {
            "name": "aurelia-logging-console",
            "location": "aurelia-amd/logging-console",
            "main": "index"
        },
        {
            "name": "aurelia-metadata",
            "location": "aurelia-amd/metadata",
            "main": "index"
        },
        {
            "name": "aurelia-path",
            "location": "aurelia-amd/path",
            "main": "index"
        },
        {
            "name": "aurelia-route-recognizer",
            "location": "aurelia-amd/route-recognizer",
            "main": "index"
        },
        {
            "name": "aurelia-router",
            "location": "aurelia-amd/router",
            "main": "index"
        },
        {
            "name": "aurelia-task-queue",
            "location": "aurelia-amd/task-queue",
            "main": "index"
        },
        {
            "name": "aurelia-templating",
            "location": "aurelia-amd/templating",
            "main": "index"
        },
        {
            "name": "aurelia-templating-binding",
            "location": "aurelia-amd/templating-binding",
            "main": "index"
        },
        {
            "name": "aurelia-templating-resources",
            "location": "aurelia-amd/templating-resources",
            "main": "index"
        },
        {
            "name": "aurelia-templating-router",
            "location": "aurelia-amd/templating-router",
            "main": "index"
        }
    ]
});

require(['aurelia-bootstrapper'], function(){});