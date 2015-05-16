/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", 'aurelia-framework', 'jquery'], function (require, exports, _aureliaFramework, $) {
    var JResize = (function () {
        function JResize(element) {
            this.element = element;
            $(element).on('click', function () {
                console.log('click', arguments);
            });
            $(element).on('resize', function () {
                console.log('resize', arguments);
            });
        }
        JResize.decorators = function () {
            return _aureliaFramework.Decorators.customAttribute('j-resize').inject(Element);
        };
        return JResize;
    })();
    exports.JResize = JResize;
});
//# sourceMappingURL=jresize.js.map