define(['exports', 'aurelia-path'], function (exports, _aureliaPath) {
    'use strict';

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

    var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    };

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var TemplateDependency = function TemplateDependency(src, name) {
        _classCallCheck(this, TemplateDependency);

        this.src = src;
        this.name = name;
    };

    exports.TemplateDependency = TemplateDependency;

    var TemplateRegistryEntry = (function () {
        function TemplateRegistryEntry(id) {
            _classCallCheck(this, TemplateRegistryEntry);

            this.id = id;
            this.template = null;
            this.dependencies = null;
            this.resources = null;
            this.factory = null;
        }

        _createClass(TemplateRegistryEntry, [{
            key: 'templateIsLoaded',
            get: function () {
                return this.template !== null;
            }
        }, {
            key: 'isReady',
            get: function () {
                return this.factory !== null;
            }
        }, {
            key: 'setTemplate',
            value: function setTemplate(template) {
                var id = this.id,
                    useResources,
                    i,
                    ii,
                    current,
                    src;

                this.template = template;
                useResources = template.content.querySelectorAll('require');
                this.dependencies = new Array(useResources.length);

                if (useResources.length === 0) {
                    return;
                }

                for (i = 0, ii = useResources.length; i < ii; ++i) {
                    current = useResources[i];
                    src = current.getAttribute('from');

                    if (!src) {
                        throw new Error('<require> element in ' + this.id + ' has no "from" attribute.');
                    }

                    this.dependencies[i] = new TemplateDependency(_aureliaPath.relativeToFile(src, id), current.getAttribute('as'));

                    if (current.parentNode) {
                        current.parentNode.removeChild(current);
                    }
                }
            }
        }, {
            key: 'setResources',
            value: function setResources(resources) {
                this.resources = resources;
            }
        }, {
            key: 'setFactory',
            value: function setFactory(factory) {
                this.factory = factory;
            }
        }]);

        return TemplateRegistryEntry;
    })();

    exports.TemplateRegistryEntry = TemplateRegistryEntry;
});