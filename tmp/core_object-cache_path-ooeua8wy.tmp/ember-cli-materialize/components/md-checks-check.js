define('ember-cli-materialize/components/md-checks-check', ['exports', 'ember-cli-materialize/components/md-check', 'ember-cli-materialize/mixins/group-selectable-item'], function (exports, CheckboxComponent, GroupSelectableItemMixin) {

	'use strict';

	exports['default'] = CheckboxComponent['default'].extend(GroupSelectableItemMixin['default'], {});

});