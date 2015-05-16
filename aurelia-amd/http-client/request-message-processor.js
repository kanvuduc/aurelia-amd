define(['exports', 'core-js', './http-response-message', 'aurelia-path'], function (exports, _coreJs, _httpResponseMessage, _aureliaPath) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  exports.__esModule = true;

  var _core = _interopRequire(_coreJs);

  function buildFullUrl(message) {
    var url = _aureliaPath.join(message.baseUrl, message.url),
        qs;

    if (message.params) {
      qs = _aureliaPath.buildQueryString(message.params);
      url = qs ? '' + url + '?' + qs : url;
    }

    message.fullUrl = url;
  }

  var RequestMessageProcessor = (function () {
    function RequestMessageProcessor(xhrType, transformers) {
      _classCallCheck(this, RequestMessageProcessor);

      this.XHRType = xhrType;
      this.transformers = transformers;
    }

    RequestMessageProcessor.prototype.abort = function abort() {
      if (this.xhr) {
        this.xhr.abort();
      }
    };

    RequestMessageProcessor.prototype.process = function process(client, message) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var xhr = _this.xhr = new _this.XHRType(),
            transformers = _this.transformers,
            i,
            ii;

        buildFullUrl(message);
        xhr.open(message.method, message.fullUrl, true);

        for (i = 0, ii = transformers.length; i < ii; ++i) {
          transformers[i](client, _this, message, xhr);
        }

        xhr.onload = function (e) {
          var response = new _httpResponseMessage.HttpResponseMessage(message, xhr, message.responseType, message.reviver);
          if (response.isSuccess) {
            resolve(response);
          } else {
            reject(response);
          }
        };

        xhr.ontimeout = function (e) {
          reject(new _httpResponseMessage.HttpResponseMessage(message, {
            response: e,
            status: xhr.status,
            statusText: xhr.statusText
          }, 'timeout'));
        };

        xhr.onerror = function (e) {
          reject(new _httpResponseMessage.HttpResponseMessage(message, {
            response: e,
            status: xhr.status,
            statusText: xhr.statusText
          }, 'error'));
        };

        xhr.onabort = function (e) {
          reject(new _httpResponseMessage.HttpResponseMessage(message, {
            response: e,
            status: xhr.status,
            statusText: xhr.statusText
          }, 'abort'));
        };

        xhr.send(message.content);
      });
    };

    return RequestMessageProcessor;
  })();

  exports.RequestMessageProcessor = RequestMessageProcessor;
});