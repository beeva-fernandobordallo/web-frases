define('ember-cli-materialize/components/md-collection', ['exports', 'ember', 'ember-cli-materialize/views/default-collection-header', 'ember-cli-materialize/templates/components/md-collection'], function (exports, Ember, DefaultCollectionHeaderView, layout) {

  'use strict';

  var Component = Ember['default'].Component;
  var bool = Ember['default'].computed.bool;

  exports['default'] = Component.extend({
    layout: layout['default'],
    classNames: ['collection'],
    classNameBindings: ['_hasHeader:with-header'],
    headerView: DefaultCollectionHeaderView['default'],
    header: null,
    _hasHeader: bool('header')
  });

});