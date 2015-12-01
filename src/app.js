const jQuery = require("jquery");

;(function (factory) {

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(require("jquery"), window, document);
  } else {
    factory(jQuery, window, document);
  }

} (($, window, document, undefined) => {

  class Fontsizer {

    constructor(element, options) {
      this.element = element;
      this.$element = $(element);
      this.config = {};
      this.options = options;
      this.defaults = {}
    }

    init() {
      this.config = $.extend({}, this.defaults, this.options);
      return this;
    }

  }

  $.extend($.fn, {

    cbFontsizer: (options) => {
      return this.each(() => {
        new Fontsizer(this, options).init();
      });
    }

  });

}));
