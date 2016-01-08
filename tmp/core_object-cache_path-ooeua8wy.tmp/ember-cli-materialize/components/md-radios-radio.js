define('ember-cli-materialize/components/md-radios-radio', ['exports', 'ember-cli-materialize/components/md-radio', 'ember-cli-materialize/mixins/group-selectable-item'], function (exports, RadioComponent, GroupSelectableItemMixin) {

	'use strict';

	exports['default'] = RadioComponent['default'].extend(GroupSelectableItemMixin['default'], {});

});