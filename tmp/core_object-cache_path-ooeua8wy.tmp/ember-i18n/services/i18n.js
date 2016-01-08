define('ember-i18n/services/i18n', ['exports', 'ember', 'ember-i18n/stream', 'ember-i18n/utils/locale', 'ember-i18n/utils/add-translations', 'ember-i18n/utils/get-locales'], function (exports, Ember, Stream, Locale, _addTranslations, getLocales) {

  'use strict';

  var assert = Ember['default'].assert;
  var computed = Ember['default'].computed;
  var get = Ember['default'].get;
  var Evented = Ember['default'].Evented;
  var makeArray = Ember['default'].makeArray;
  var observer = Ember['default'].observer;
  var on = Ember['default'].on;
  var typeOf = Ember['default'].typeOf;
  var warn = Ember['default'].warn;

  var Parent = Ember['default'].Service || Ember['default'].Object;

  // @public
  exports['default'] = Parent.extend(Evented, {

    // @public
    // The user's locale.
    locale: null,

    // @public
    // A list of found locales.
    locales: computed(getLocales['default']),

    // @public
    //
    // Returns the translation `key` interpolated with `data`
    // in the current `locale`.
    t: function t(key) {
      var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var locale = this.get('_locale');
      assert("I18n: Cannot translate when locale is null", locale);
      var count = get(data, 'count');

      var defaults = makeArray(get(data, 'default'));

      defaults.unshift(key);
      var template = locale.getCompiledTemplate(defaults, count);

      if (template._isMissing) {
        this.trigger('missing', this.get('locale'), key, data);
      }

      return template(data);
    },

    // @public
    exists: function exists(key) {
      var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var locale = this.get('_locale');
      assert("I18n: Cannot check existance when locale is null", locale);
      var count = get(data, 'count');

      var translation = locale.findTranslation(makeArray(key), count);
      return typeOf(translation.result) !== 'undefined';
    },

    // @public
    addTranslations: function addTranslations(locale, translations) {
      _addTranslations['default'](locale, translations, this.container);
      this._addLocale(locale);

      if (this.get('locale').indexOf(locale) === 0) {
        this.get('_locale').rebuild();
      }
    },

    // @private
    _initDefaults: on('init', function () {
      var ENV = this.container.lookupFactory('config:environment');

      if (this.get('locale') == null) {
        var defaultLocale = (ENV.i18n || {}).defaultLocale;
        if (defaultLocale == null) {
          warn('ember-i18n did not find a default locale; falling back to "en".');
          defaultLocale = 'en';
        }
        this.set('locale', defaultLocale);
      }
    }),

    // @private
    //
    // adds a runtime locale to the array of locales on disk
    _addLocale: function _addLocale(locale) {
      this.get('locales').addObject(locale);
    },

    _locale: computed('locale', function () {
      var locale = this.get('locale');
      return locale ? new Locale['default'](this.get('locale'), this.container) : null;
    }),

    _buildLocaleStream: on('init', function () {
      var _this = this;

      this.localeStream = new Stream['default'](function () {
        return _this.get('locale');
      });
    }),

    _notifyLocaleStream: observer('locale', function () {
      this.localeStream.value(); // force the stream to be dirty
      this.localeStream.notify();
    })

  });

});