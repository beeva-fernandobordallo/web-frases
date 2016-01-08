var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

import Ember from "ember";

// @private
//
// This class is the work-horse of localization look-up.

var Locale = (function () {

  // On Construction:
  //  1. look for translations in the locale (e.g. pt-BR) and all parent
  //     locales (e.g. pt), flatten any nested keys, and then merge them.
  //  2. walk through the configs from most specific to least specific
  //     and use the first value for `rtl` and `pluralForm`
  //  3. Default `rtl` to `false`
  //  4. Ensure `pluralForm` is defined

  function Locale(id, container) {
    _classCallCheck(this, Locale);

    this.id = id;
    this.container = container;
    this.rebuild();
  }

  _createClass(Locale, [{
    key: 'rebuild',
    value: function rebuild() {
      this.translations = getFlattenedTranslations(this.id, this.container);
      this._setConfig();
    }
  }, {
    key: '_setConfig',
    value: function _setConfig() {
      var _this = this;

      walkConfigs(this.id, this.container, function (config) {
        if (_this.rtl === undefined) {
          _this.rtl = config.rtl;
        }
        if (_this.pluralForm === undefined) {
          _this.pluralForm = config.pluralForm;
        }
      });

      var defaultConfig = this.container.lookupFactory('ember-i18n@config:zh');

      if (this.rtl === undefined) {
        Ember.warn('ember-i18n: No RTL configuration found for ' + this.id + '.');
        this.rtl = defaultConfig.rtl;
      }

      if (this.pluralForm === undefined) {
        Ember.warn('ember-i18n: No pluralForm configuration found for ' + this.id + '.');
        this.pluralForm = defaultConfig.pluralForm;
      }
    }
  }, {
    key: 'getCompiledTemplate',
    value: function getCompiledTemplate(fallbackChain, count) {
      var translation = this.findTranslation(fallbackChain, count);
      var result = translation.result;

      if (Ember.typeOf(result) === 'string') {
        result = this._compileTemplate(translation.key, result);
      }

      if (result == null) {
        result = this._defineMissingTranslationTemplate(fallbackChain[0]);
      }

      Ember.assert('Template for ' + translation.key + ' in ' + this.id + ' is not a function', Ember.typeOf(result) === 'function');

      return result;
    }
  }, {
    key: 'findTranslation',
    value: function findTranslation(fallbackChain, count) {
      if (this.translations === undefined) {
        this._init();
      }

      var result = undefined;
      var i = undefined;
      for (i = 0; i < fallbackChain.length; i++) {
        var key = fallbackChain[i];
        if (count != null) {
          var inflection = this.pluralForm(count);
          result = this.translations[key + '.' + inflection];
        }

        if (result == null) {
          result = this.translations[key];
        }

        if (result) {
          break;
        }
      }

      return {
        key: fallbackChain[i],
        result: result
      };
    }
  }, {
    key: '_defineMissingTranslationTemplate',
    value: function _defineMissingTranslationTemplate(key) {
      var missingMessage = this.container.lookupFactory('util:i18n/missing-message');
      var locale = this.id;

      function missingTranslation(data) {
        return missingMessage(locale, key, data);
      }

      missingTranslation._isMissing = true;
      this.translations[key] = missingTranslation;
      return missingTranslation;
    }
  }, {
    key: '_compileTemplate',
    value: function _compileTemplate(key, string) {
      var compile = this.container.lookupFactory('util:i18n/compile-template');
      var template = compile(string, this.rtl);
      this.translations[key] = template;
      return template;
    }
  }]);

  return Locale;
})();

export default Locale;

function getFlattenedTranslations(id, container) {
  var result = {};

  var parentId = parentLocale(id);
  if (parentId) {
    Ember.merge(result, getFlattenedTranslations(parentId, container));
  }

  var translations = container.lookupFactory('locale:' + id + '/translations') || {};
  Ember.merge(result, withFlattenedKeys(translations));

  return result;
}

// Walk up confiugration objects from most specific to least.
function walkConfigs(id, container, fn) {
  var appConfig = container.lookupFactory('locale:' + id + '/config');
  if (appConfig) {
    fn(appConfig);
  }

  var addonConfig = container.lookupFactory('ember-i18n@config:' + id);
  if (addonConfig) {
    fn(addonConfig);
  }

  var parentId = parentLocale(id);
  if (parentId) {
    walkConfigs(parentId, container, fn);
  }
}

function parentLocale(id) {
  var lastDash = id.lastIndexOf('-');
  return lastDash > 0 ? id.substr(0, lastDash) : null;
}

function withFlattenedKeys(object) {
  var result = {};

  Object.keys(object).forEach(function (key) {
    var value = object[key];

    if (Ember.typeOf(value) === 'object') {
      value = withFlattenedKeys(value);

      Object.keys(value).forEach(function (suffix) {
        result[key + '.' + suffix] = value[suffix];
      });
    } else {
      result[key] = value;
    }
  });

  return result;
}