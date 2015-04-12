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

    var With = (function () {
        function With(viewFactory, viewSlot) {
            _classCallCheck(this, _With);

            this.viewFactory = viewFactory;
            this.viewSlot = viewSlot;
        }

        _createClass(With, [{
            key: 'valueChanged',
            value: function valueChanged(newValue) {
                if (!this.view) {
                    this.view = this.viewFactory.create(newValue);
                    this.viewSlot.add(this.view);
                } else {
                    this.view.bind(newValue);
                }
            }
        }]);

        var _With = With;
        With = _aureliaTemplating.customAttribute('with')(With) || With;
        With = _aureliaTemplating.templateController(With) || With;
        With = _aureliaDependencyInjection.inject(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot)(With) || With;
        return With;
    })();

    exports.With = With;
});