define('ember-cli-materialize/components/md-modal-container', ['exports', 'ember', 'ember-cli-materialize/mixins/uses-settings', 'ember-cli-materialize/templates/components/md-modal-container'], function (exports, Ember, UsesSettings, layout) {

  'use strict';

  var Component = Ember['default'].Component;
  var oneWay = Ember['default'].computed.oneWay;

  exports['default'] = Component.extend(UsesSettings['default'], {
    layout: layout['default'],
    modalContainerId: oneWay('_mdSettings.modalContainerId')
  });

});