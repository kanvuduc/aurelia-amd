//import {inject} from 'aurelia-framework';
//import {Router} from 'aurelia-router';
//import 'bootstrap';
//import 'bootstrap/css/bootstrap.css!';
define(["require", "exports", 'aurelia-router'], function (require, exports, _aureliaRouter) {
    var App = (function () {
        function App(router) {
            this.router = router;
            this.router.configure(function (config) {
                config.title = 'Aurelia';
                config.map([
                    { route: ['', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' },
                    { route: 'flickr', moduleId: './flickr', nav: true }
                ]);
            });
        }
        App.inject = function () {
            return [_aureliaRouter.Router];
        };
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=app.js.map