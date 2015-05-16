define(['exports', './validation/validation-config', './validation/validation', './validation/utilities', './validation/validation-locale', './validation/validation-result', './validation/validation-rules', './validation/validate-custom-attribute', './validation/validate-custom-attribute-view-strategy', './validation/decorators'], function (exports, _validationValidationConfig, _validationValidation, _validationUtilities, _validationValidationLocale, _validationValidationResult, _validationValidationRules, _validationValidateCustomAttribute, _validationValidateCustomAttributeViewStrategy, _validationDecorators) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

  //function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
  var _defaults = function (obj, defaults) {
    for(var key in defaults){
      obj[key] = defaults[key];
    }
  };

  exports.Utilities = _validationUtilities.Utilities;
  exports.ValidationConfig = _validationValidationConfig.ValidationConfig;
  exports.ValidationLocale = _validationValidationLocale.ValidationLocale;

  _defaults(exports, _interopRequireWildcard(_validationValidationResult));

  _defaults(exports, _interopRequireWildcard(_validationValidationRules));

  exports.Validation = _validationValidation.Validation;
  exports.ValidateCustomAttribute = _validationValidateCustomAttribute.ValidateCustomAttribute;
  exports.ValidateCustomAttributeViewStrategy = _validationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategy;
  exports.ValidateCustomAttributeViewStrategyBase = _validationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategyBase;
  exports.ensure = _validationDecorators.ensure;

  function configure(aurelia, configCallback) {

    aurelia.globalizeResources('./validation/validate-custom-attribute');
    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(_validationValidation.Validation.defaults);
    }
    aurelia.withSingleton(_validationValidationConfig.ValidationConfig, _validationValidation.Validation.defaults);
    return _validationValidation.Validation.defaults.locale();
  }
});