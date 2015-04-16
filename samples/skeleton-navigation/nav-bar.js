/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", 'aurelia-framework'], function (require, exports, _aureliaFramework) {
    var NavBar = (function () {
        function NavBar() {
        }
        NavBar.metadata = function () {
            return _aureliaFramework.Behavior.customElement('nav-bar').withProperty('router');
        };
        return NavBar;
    })();
    exports.NavBar = NavBar;
});
//# sourceMappingURL=nav-bar.js.map