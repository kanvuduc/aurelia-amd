define(['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
    'use strict';

    var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    };

    var _createClass = (function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    })();

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    function addStyleString(str) {
        var node = document.createElement('style');
        node.innerHTML = str;
        node.type = 'text/css';
        document.head.appendChild(node);
    }

    addStyleString('.aurelia-hide { display:none !important; }');

    var Show = (function () {
        function Show(element) {
            _classCallCheck(this, _Show);

            this.element = element;
        }

        _createClass(Show, [{
            key: 'valueChanged',
            value: function valueChanged(newValue) {
                if (newValue) {
                    this.element.classList.remove('aurelia-hide');
                } else {
                    this.element.classList.add('aurelia-hide');
                }
            }
        }]);

        var _Show = Show;
        Show = _aureliaTemplating.customAttribute('show')(Show) || Show;
        Show = _aureliaDependencyInjection.inject(Element)(Show) || Show;
        return Show;
    })();

    exports.Show = Show;
});