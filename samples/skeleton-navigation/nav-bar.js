/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", 'aurelia-framework'], function (require, exports, _aureliaFramework) {
    var NavBar = (function () {
        function NavBar() {
        }
        NavBar.decorators = function () {
            debugger;
            return _aureliaFramework.Decorators.customElement('nav-bar').bindable('router');
        };
        return NavBar;
    })();
    exports.NavBar = NavBar;
});
//# sourceMappingURL=nav-bar.js.map