define(["exports"], function (exports) {
  "use strict";

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  exports.__esModule = true;

  var NavModel = (function () {
    function NavModel(router, relativeHref) {
      _classCallCheck(this, NavModel);

      this.router = router;
      this.relativeHref = relativeHref;

      this.isActive = false;

      this.title = null;

      this.href = null;

      this.settings = {};

      this.config = null;
    }

    NavModel.prototype.setTitle = function setTitle(title) {
      this.title = title;

      if (this.isActive) {
        this.router.updateTitle();
      }
    };

    return NavModel;
  })();

  exports.NavModel = NavModel;
});