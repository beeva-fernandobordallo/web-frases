define('ember-cli-materialize/components/md-switches-switch', ['exports', 'ember-cli-materialize/mixins/group-selectable-item', 'ember-cli-materialize/components/md-switch'], function (exports, GroupSelectableItemMixin, SwitchComponent) {

	'use strict';

	exports['default'] = SwitchComponent['default'].extend(GroupSelectableItemMixin['default'], {});

});