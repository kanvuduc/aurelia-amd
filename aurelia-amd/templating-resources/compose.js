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

    var Compose = (function () {
        function Compose(container, compositionEngine, viewSlot, viewResources) {
            _classCallCheck(this, _Compose);

            this.container = container;
            this.compositionEngine = compositionEngine;
            this.viewSlot = viewSlot;
            this.viewResources = viewResources;
        }

        _createClass(Compose, [{
            key: 'bind',
            value: function bind(executionContext) {
                this.executionContext = executionContext;
                processInstruction(this, {view: this.view, viewModel: this.viewModel, model: this.model});
            }
        }, {
            key: 'modelChanged',
            value: function modelChanged(newValue, oldValue) {
                var vm = this.currentViewModel;

                if (vm && typeof vm.activate === 'function') {
                    vm.activate(newValue);
                }
            }
        }, {
            key: 'viewChanged',
            value: function viewChanged(newValue, oldValue) {
                processInstruction(this, {
                    view: newValue,
                    viewModel: this.currentViewModel || this.viewModel,
                    model: this.model
                });
            }
        }, {
            key: 'viewModelChanged',
            value: function viewModelChanged(newValue, oldValue) {
                processInstruction(this, {viewModel: newValue, view: this.view, model: this.model});
            }
        }]);

        var _Compose = Compose;
        Compose = _aureliaTemplating.customElement('compose')(Compose) || Compose;
        Compose = _aureliaTemplating.bindable('model')(Compose) || Compose;
        Compose = _aureliaTemplating.bindable('view')(Compose) || Compose;
        Compose = _aureliaTemplating.bindable('viewModel')(Compose) || Compose;
        Compose = _aureliaTemplating.noView(Compose) || Compose;
        Compose = _aureliaDependencyInjection.inject(_aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources)(Compose) || Compose;
        return Compose;
    })();

    exports.Compose = Compose;

    function processInstruction(composer, instruction) {
        composer.compositionEngine.compose(Object.assign(instruction, {
            executionContext: composer.executionContext,
            container: composer.container,
            viewSlot: composer.viewSlot,
            viewResources: composer.viewResources,
            currentBehavior: composer.currentBehavior
        })).then(function (next) {
            composer.currentBehavior = next;
            composer.currentViewModel = next ? next.executionContext : null;
        });
    }
});