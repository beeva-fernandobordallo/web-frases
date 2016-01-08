define('ember-i18n/utils/add-translations', ['exports', 'ember'], function (exports, Ember) {

  'use strict';



  exports['default'] = addTranslations;
  function addTranslations(locale, newTranslations, container) {
    var key = "locale:" + locale + "/translations";
    var existingTranslations = container.lookupFactory(key);

    if (existingTranslations == null) {
      existingTranslations = {};
      // CRUFT: there's no public API for registering factories at runtime.
      // See http://discuss.emberjs.com/t/whats-the-correct-way-to-register-new-factories-at-runtime/8018
      var registry = container.registry || container._registry;
      registry.register(key, existingTranslations);
    }

    Ember['default'].merge(existingTranslations, newTranslations);
  }

});