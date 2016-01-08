"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('flamestack/adapters/application', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, Ember, FirebaseAdapter) {

  'use strict';

  var inject = Ember['default'].inject;

  exports['default'] = FirebaseAdapter['default'].extend({
    firebase: inject.service()
  });

});
define('flamestack/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'flamestack/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('flamestack/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'flamestack/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('flamestack/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('flamestack/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, ember_wormhole) {

	'use strict';



	exports['default'] = ember_wormhole['default'];

});
define('flamestack/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, LabeledRadioButton) {

	'use strict';

	exports['default'] = LabeledRadioButton['default'];

});
define('flamestack/components/materialize-badge', ['exports', 'ember', 'flamestack/components/md-badge'], function (exports, Ember, MaterializeBadge) {

  'use strict';

  exports['default'] = MaterializeBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-button-submit', ['exports', 'ember', 'flamestack/components/md-btn-submit'], function (exports, Ember, MaterializeButtonSubmit) {

  'use strict';

  exports['default'] = MaterializeButtonSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-button', ['exports', 'ember', 'flamestack/components/md-btn'], function (exports, Ember, MaterializeButton) {

  'use strict';

  exports['default'] = MaterializeButton['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-card-action', ['exports', 'ember', 'flamestack/components/md-card-action'], function (exports, Ember, MaterializeCardAction) {

  'use strict';

  exports['default'] = MaterializeCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-card-content', ['exports', 'ember', 'flamestack/components/md-card-content'], function (exports, Ember, MaterializeCardContent) {

  'use strict';

  exports['default'] = MaterializeCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-card-panel', ['exports', 'ember', 'flamestack/components/md-card-panel'], function (exports, Ember, MaterializeCardPanel) {

  'use strict';

  exports['default'] = MaterializeCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-card-reveal', ['exports', 'ember', 'flamestack/components/md-card-reveal'], function (exports, Ember, MaterializeCardReveal) {

  'use strict';

  exports['default'] = MaterializeCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-card', ['exports', 'ember', 'flamestack/components/md-card'], function (exports, Ember, MaterializeCard) {

  'use strict';

  exports['default'] = MaterializeCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-checkbox', ['exports', 'ember', 'flamestack/components/md-check'], function (exports, Ember, materializeCheckbox) {

  'use strict';

  exports['default'] = materializeCheckbox['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-checkboxes', ['exports', 'ember', 'flamestack/components/md-checks'], function (exports, Ember, materializeCheckboxes) {

  'use strict';

  exports['default'] = materializeCheckboxes['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-collapsible-card', ['exports', 'ember', 'flamestack/components/md-card-collapsible'], function (exports, Ember, MaterializeCollapsibleCard) {

  'use strict';

  exports['default'] = MaterializeCollapsibleCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-collapsible', ['exports', 'ember', 'flamestack/components/md-collapsible'], function (exports, Ember, MaterializeCollapsible) {

  'use strict';

  exports['default'] = MaterializeCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-copyright', ['exports', 'ember', 'flamestack/components/md-copyright'], function (exports, Ember, materializeCopyright) {

  'use strict';

  exports['default'] = materializeCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-date-input', ['exports', 'ember', 'flamestack/components/md-input-date'], function (exports, Ember, materializeDateInput) {

  'use strict';

  exports['default'] = materializeDateInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-input-field', ['exports', 'ember', 'flamestack/components/md-input-field'], function (exports, Ember, materializeInputField) {

  'use strict';

  exports['default'] = materializeInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-input', ['exports', 'ember', 'flamestack/components/md-input'], function (exports, Ember, materializeInput) {

  'use strict';

  exports['default'] = materializeInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-loader', ['exports', 'ember', 'flamestack/components/md-loader'], function (exports, Ember, materializeLoader) {

  'use strict';

  exports['default'] = materializeLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-modal', ['exports', 'ember', 'flamestack/components/md-modal'], function (exports, Ember, MaterializeModal) {

  'use strict';

  exports['default'] = MaterializeModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-navbar', ['exports', 'ember', 'flamestack/components/md-navbar'], function (exports, Ember, MaterializeNavBar) {

  'use strict';

  exports['default'] = MaterializeNavBar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-pagination', ['exports', 'ember', 'flamestack/components/md-pagination'], function (exports, Ember, materializePagination) {

  'use strict';

  exports['default'] = materializePagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-parallax', ['exports', 'ember', 'flamestack/components/md-parallax'], function (exports, Ember, materializeParallax) {

  'use strict';

  exports['default'] = materializeParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-radio', ['exports', 'ember', 'flamestack/components/md-radio'], function (exports, Ember, materializeRadio) {

  'use strict';

  exports['default'] = materializeRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-radios', ['exports', 'ember', 'flamestack/components/md-radios'], function (exports, Ember, materializeRadios) {

  'use strict';

  exports['default'] = materializeRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-range', ['exports', 'ember', 'flamestack/components/md-range'], function (exports, Ember, materializeRange) {

  'use strict';

  exports['default'] = materializeRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-select', ['exports', 'ember', 'flamestack/components/md-select'], function (exports, Ember, materializeSelect) {

  'use strict';

  exports['default'] = materializeSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-switch', ['exports', 'ember', 'flamestack/components/md-switch'], function (exports, Ember, materializeSwitch) {

  'use strict';

  exports['default'] = materializeSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-switches', ['exports', 'ember', 'flamestack/components/md-switches'], function (exports, Ember, materializeSwitches) {

  'use strict';

  exports['default'] = materializeSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-tabs-tab', ['exports', 'ember', 'flamestack/components/md-tab'], function (exports, Ember, materializeTabsTab) {

  'use strict';

  exports['default'] = materializeTabsTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-tabs', ['exports', 'ember', 'flamestack/components/md-tabs'], function (exports, Ember, materializeTabs) {

  'use strict';

  exports['default'] = materializeTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/materialize-textarea', ['exports', 'ember', 'flamestack/components/md-textarea'], function (exports, Ember, materializeTextarea) {

  'use strict';

  exports['default'] = materializeTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});
define('flamestack/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, materializeBadge) {

	'use strict';

	exports['default'] = materializeBadge['default'];

});
define('flamestack/components/md-btn-dropdown', ['exports', 'ember-cli-materialize/components/md-btn-dropdown'], function (exports, MaterializeButtonDropdown) {

	'use strict';

	exports['default'] = MaterializeButtonDropdown['default'];

});
define('flamestack/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, MaterializeButtonSubmit) {

	'use strict';

	exports['default'] = MaterializeButtonSubmit['default'];

});
define('flamestack/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, MaterializeButton) {

	'use strict';

	exports['default'] = MaterializeButton['default'];

});
define('flamestack/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, MaterializeCardAction) {

	'use strict';

	exports['default'] = MaterializeCardAction['default'];

});
define('flamestack/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, MaterializeCollapsibleCard) {

	'use strict';

	exports['default'] = MaterializeCollapsibleCard['default'];

});
define('flamestack/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, MaterializeCardContent) {

	'use strict';

	exports['default'] = MaterializeCardContent['default'];

});
define('flamestack/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, MaterializeCardPanel) {

	'use strict';

	exports['default'] = MaterializeCardPanel['default'];

});
define('flamestack/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, MaterializeCardReveal) {

	'use strict';

	exports['default'] = MaterializeCardReveal['default'];

});
define('flamestack/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, MaterializeCard) {

	'use strict';

	exports['default'] = MaterializeCard['default'];

});
define('flamestack/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, materializeCheckbox) {

	'use strict';

	exports['default'] = materializeCheckbox['default'];

});
define('flamestack/components/md-checks-check', ['exports', 'ember-cli-materialize/components/md-checks-check'], function (exports, md_checks_check) {

	'use strict';



	exports['default'] = md_checks_check['default'];

});
define('flamestack/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, materializeCheckboxes) {

	'use strict';

	exports['default'] = materializeCheckboxes['default'];

});
define('flamestack/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, MaterializeCollapsible) {

	'use strict';

	exports['default'] = MaterializeCollapsible['default'];

});
define('flamestack/components/md-collection', ['exports', 'ember-cli-materialize/components/md-collection'], function (exports, md_collection) {

	'use strict';



	exports['default'] = md_collection['default'];

});
define('flamestack/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, materializeCopyright) {

	'use strict';

	exports['default'] = materializeCopyright['default'];

});
define('flamestack/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/md-fixed-btn'], function (exports, md_fixed_btn) {

	'use strict';



	exports['default'] = md_fixed_btn['default'];

});
define('flamestack/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/md-fixed-btns'], function (exports, md_fixed_btns) {

	'use strict';



	exports['default'] = md_fixed_btns['default'];

});
define('flamestack/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, materializeDateInput) {

	'use strict';

	exports['default'] = materializeDateInput['default'];

});
define('flamestack/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, materializeInputField) {

	'use strict';

	exports['default'] = materializeInputField['default'];

});
define('flamestack/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, materializeInput) {

	'use strict';

	exports['default'] = materializeInput['default'];

});
define('flamestack/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, materializeLoader) {

	'use strict';

	exports['default'] = materializeLoader['default'];

});
define('flamestack/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, mdModalContainer) {

	'use strict';

	exports['default'] = mdModalContainer['default'];

});
define('flamestack/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, materializeModal) {

	'use strict';

	exports['default'] = materializeModal['default'];

});
define('flamestack/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, MaterializeNavBar) {

	'use strict';

	exports['default'] = MaterializeNavBar['default'];

});
define('flamestack/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, materializePagination) {

	'use strict';

	exports['default'] = materializePagination['default'];

});
define('flamestack/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, materializeParallax) {

	'use strict';

	exports['default'] = materializeParallax['default'];

});
define('flamestack/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, materializeRadio) {

	'use strict';

	exports['default'] = materializeRadio['default'];

});
define('flamestack/components/md-radios-radio', ['exports', 'ember-cli-materialize/components/md-radios-radio'], function (exports, md_radios_radio) {

	'use strict';



	exports['default'] = md_radios_radio['default'];

});
define('flamestack/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, materializeRadios) {

	'use strict';

	exports['default'] = materializeRadios['default'];

});
define('flamestack/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, materializeRange) {

	'use strict';

	exports['default'] = materializeRange['default'];

});
define('flamestack/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, materializeSelect) {

	'use strict';

	exports['default'] = materializeSelect['default'];

});
define('flamestack/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, materializeSwitch) {

	'use strict';

	exports['default'] = materializeSwitch['default'];

});
define('flamestack/components/md-switches-switch', ['exports', 'ember-cli-materialize/components/md-switches-switch'], function (exports, md_switches_switch) {

	'use strict';



	exports['default'] = md_switches_switch['default'];

});
define('flamestack/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, materializeSwitches) {

	'use strict';

	exports['default'] = materializeSwitches['default'];

});
define('flamestack/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, materializeTabsTab) {

	'use strict';

	exports['default'] = materializeTabsTab['default'];

});
define('flamestack/components/md-table-col', ['exports', 'ember-cli-materialize/components/md-table-col'], function (exports, md_table_col) {

	'use strict';



	exports['default'] = md_table_col['default'];

});
define('flamestack/components/md-table', ['exports', 'ember-cli-materialize/components/md-table'], function (exports, md_table) {

	'use strict';



	exports['default'] = md_table['default'];

});
define('flamestack/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, materializeTabs) {

	'use strict';

	exports['default'] = materializeTabs['default'];

});
define('flamestack/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, materializeTextarea) {

	'use strict';

	exports['default'] = materializeTextarea['default'];

});
define('flamestack/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('flamestack/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, RadioButtonInput) {

	'use strict';

	exports['default'] = RadioButtonInput['default'];

});
define('flamestack/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, RadioButton) {

	'use strict';

	exports['default'] = RadioButton['default'];

});
define('flamestack/controllers/admin', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({

    onlineUsers: [],
    existingUsers: '',
    tempUser: '',
    modalAnswer: '',

    setup: function setup() {

      var loadedUsers = this.Data.get('existingUsers');
      this.set('existingUsers', loadedUsers);

      this.Data.get('baseRef').child('presence').on('child_added', (function (newData, previousDataId) {
        //Add/process new data

        var arrData = [];
        var values = newData.val();
        var keys = Object.keys(values);
        if (typeof keys[0] == 'object') {
          arrData = this.Data.objectToArray(values);
        } else {
          values.key = newData.key();
          arrData.push(values);
        }
        if (previousDataId === null) {
          this.set('onlineUsers', []);
        }
        for (var i = 0; i < arrData.length; i++) {
          if (this.get('onlineUsers')) {
            this.get('onlineUsers').addObject(arrData[i]);
          } else {
            this.set('onlineUsers', arrData[i]);
          }
        }

        this.Toast.addToast('New data recevied', 2000);
      }).bind(this), (function (error) {
        //Display error
      }).bind(this));

      this.Data.get('baseRef').child('presence').on('child_removed', (function (deletedData) {
        //Remove/process old data

        var arrData = [];
        var values = deletedData.val();
        var keys = Object.keys(values);
        if (typeof keys[0] == 'object') {
          arrData = this.Data.objectToArray(values);
        } else {
          values.key = deletedData.key();
          arrData.addObject(values);
        }
        var tempusers = this.get('onlineUsers');
        for (var j = 0; j < arrData.length; j++) {
          for (var i = 0; i < tempusers.length; i++) {
            if (tempusers[i].key === arrData[j].key) {
              tempusers.removeAt(i);
            }
          }
        }
        this.Toast.addToast('Data deleted recevied', 2000);
      }).bind(this), (function (error) {
        //Display error
      }).bind(this));
    },

    observeModal: Ember['default'].observer('modalAnswer', function () {
      var modalData = this.get('modalAnswer');
      if (modalData && modalData.action) {
        if (modalData.action === 'deleteRecord' && modalData.message === 'yes' && modalData.data.key) {
          this.Data.deleteData(null, ['users', modalData.data.key]).then((function (data) {
            // Server data deleted. Now remove local copy
            console.log(data);
            var tempusers = this.get('existingUsers');
            for (var i = 0; i < tempusers.length; i++) {
              if (tempusers[i].key === modalData.data.key) {
                tempusers.removeAt(i);
              }
            }
            this.send('toggleEdit', modalData.data);
          }).bind(this), function (err) {
            console.log(err);
          });
        } else {
          this.send('toggleEdit', modalData.data);
        }
      }
    }),

    actions: {
      updateDisplayName: function updateDisplayName(user) {
        this.Data.setData(null, ['users', user.key, 'profile'], user.profile);
        this.Data.setData(null, ['roles', user.key, 'level'], user.roleLevel);
        this.set('tempUser', user);
        this.set('tempUser.editting', false);
        this.Toast.addToast(this.get('i18n').t('label.dataSaved'), 2000);
      },

      toggleEdit: function toggleEdit(user) {
        this.set('tempUser', user);
        if (!user.editting) {
          this.set('tempUser.editting', true);
        } else {
          this.set('tempUser.editting', false);
        }
        // Setup modal triggers
        setTimeout(function () {
          $('.modal-trigger').leanModal();
        }, 200);
      },

      setDeleteAction: function setDeleteAction(user) {
        this.Data.set('modalAction', 'deleteRecord');
        this.Data.set('modalData', user);
        return false;
      }
    }
  });

});
define('flamestack/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('flamestack/controllers/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('flamestack/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('flamestack/helpers/role-level', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.roleLevel = roleLevel;

  function roleLevel(params /*, hash*/) {
    var level = params[0];
    if (level == 3) {
      return 'Admin';
    } else if (level == 2) {
      return 'Moderator';
    } else if (level == 1) {
      return 'Member';
    } else if (level == 0) {
      return 'User';
    } else if (level === null) {
      return 'Undefined';
    }
  }

  exports['default'] = Ember['default'].Helper.helper(roleLevel);

});
define('flamestack/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, helper) {

	'use strict';



	exports['default'] = helper['default'];

});
define('flamestack/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, initialize) {

  'use strict';

  exports['default'] = {
    name: 'add-modals-container',
    initialize: initialize['default']
  };

});
define('flamestack/initializers/animate', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'Animate', 'service:animate');
    application.inject('controller', 'Animate', 'service:animate');
    application.inject('service:datapoint', 'Animate', 'service:animate');
  }

  exports['default'] = {
    name: 'animate',
    initialize: initialize
  };

});
define('flamestack/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'flamestack/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('flamestack/initializers/datapoint', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'Data', 'service:datapoint');
    application.inject('controller', 'Data', 'service:datapoint');
    application.inject('model', 'Data', 'service:datapoint');
  }

  exports['default'] = {
    name: 'datapoint',
    after: ['toast', 'i18n'],
    initialize: initialize
  };

});
define('flamestack/initializers/ember-i18n', ['exports', 'flamestack/instance-initializers/ember-i18n'], function (exports, instanceInitializer) {

  'use strict';

  exports['default'] = {
    name: instanceInitializer['default'].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      instanceInitializer['default'].initialize(application);
    }
  };

});
define('flamestack/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, EmberFireInitializer) {

	'use strict';

	exports['default'] = EmberFireInitializer['default'];

});
define('flamestack/initializers/export-application-global', ['exports', 'ember', 'flamestack/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('flamestack/initializers/i18n', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize() /* container, application */{
    // application.inject('route', 'foo', 'service:foo');
  }

  exports['default'] = {
    name: 'i18n',

    after: 'ember-i18n',

    initialize: function initialize(_, app) {
      app.inject('model', 'i18n', 'service:i18n');
      app.inject('route', 'i18n', 'service:i18n');
      app.inject('controller', 'i18n', 'service:i18n');
    }
  };

});
define('flamestack/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, RedirectHandler) {

  'use strict';

  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      RedirectHandler['default'].handle(window)['catch'](function () {
        application.advanceReadiness();
      });
    }
  };

});
define('flamestack/initializers/initialize-torii-session', ['exports', 'torii/configuration', 'torii/bootstrap/session'], function (exports, configuration, bootstrapSession) {

  'use strict';

  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      if (configuration['default'].sessionServiceName) {
        bootstrapSession['default'](application, configuration['default'].sessionServiceName);

        var sessionFactoryName = 'service:' + configuration['default'].sessionServiceName;
        application.inject('adapter', configuration['default'].sessionServiceName, sessionFactoryName);
      }
    }
  };

});
define('flamestack/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration'], function (exports, bootstrapTorii, configuration) {

  'use strict';

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      bootstrapTorii['default'](application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  if (window.DS) {
    initializer.after = 'store';
  }

  exports['default'] = initializer;

});
define('flamestack/initializers/key-responder', ['exports', 'ember', 'flamestack/instance-initializers/key-responder'], function (exports, Ember, keyResponderInstanceInitializer) {

  'use strict';

  var EMBER_VERSION_REGEX = /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:(?:\-(alpha|beta)\.([0-9]+)(?:\.([0-9]+))?)?)?(?:\+(canary))?(?:\.([0-9abcdef]+))?(?:\-([A-Za-z0-9\.\-]+))?(?:\+([A-Za-z0-9\.\-]+))?$/;

  /**
   * VERSION_INFO[i] is as follows:
   *
   * 0  complete version string
   * 1  major version
   * 2  minor version
   * 3  trivial version
   * 4  pre-release type (optional: "alpha" or "beta" or undefined for stable releases)
   * 5  pre-release version (optional)
   * 6  pre-release sub-version (optional)
   * 7  canary (optional: "canary", or undefined for stable releases)
   * 8  SHA (optional)
   */
  var VERSION_INFO = EMBER_VERSION_REGEX.exec(Ember['default'].VERSION);

  exports['default'] = {
    name: 'ember-key-responder',

    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      var registry = !!arguments[1] ? arguments[0] : application.registry;
      var isPre1dot12 = parseInt(VERSION_INFO[1], 10) < 2 && parseInt(VERSION_INFO[2], 10) < 12;
      var container = application.__container__;

      application.inject('view', 'keyResponder', 'key-responder:main');
      application.inject('component', 'keyResponder', 'key-responder:main');

      // Set up a handler on the document for keyboard events that are not
      // handled by Ember's event dispatcher.
      Ember['default'].$(document).on('keyup.outside_ember_event_delegation', null, function (event) {

        if (Ember['default'].$(event.target).closest('.ember-view').length === 0) {
          var keyResponder = container.lookup('key-responder:main');
          var currentKeyResponder = keyResponder.get('current');
          if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
            return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
          }
        }

        return true;
      });

      if (isPre1dot12) {
        // For versions before 1.12.0, we have to call the instanceInitializer
        keyResponderInstanceInitializer['default'].initialize(registry, application);
      }
    }
  };

});
define('flamestack/initializers/md-settings', ['exports', 'flamestack/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, config, MaterializeSettings) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var materializeDefaults = config['default'].materializeDefaults;

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', MaterializeSettings['default']);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports['default'] = {
    name: 'md-settings',
    initialize: initialize
  };

});
define('flamestack/initializers/toast', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'Toast', 'service:toast');
    application.inject('controller', 'Toast', 'service:toast');
    application.inject('service:datapoint', 'Toast', 'service:toast');
  }

  exports['default'] = {
    name: 'toast',
    initialize: initialize
  };

});
define('flamestack/instance-initializers/ember-i18n', ['exports', 'ember', 'ember-i18n/legacy-helper', 'flamestack/config/environment'], function (exports, Ember, legacyHelper, ENV) {

  'use strict';

  exports['default'] = {
    name: 'ember-i18n',

    initialize: function initialize(instance) {
      if (legacyHelper['default'] != null) {
        Ember['default'].HTMLBars._registerHelper('t', legacyHelper['default']);
      }
    }
  };

});
define('flamestack/instance-initializers/key-responder', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var Mixin = Ember['default'].Mixin;
  var on = Ember['default'].on;

  var ApplicationViewMixin = Mixin.create({
    delegateToKeyResponder: on('keyUp', function (event) {
      var currentKeyResponder = this.get('keyResponder.current');
      if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
        // check to see if the event target is the keyResponder or the
        // keyResponders parents.  if so, no need to dispatch as it has
        // already had a chance to handle this event.
        var id = '#' + currentKeyResponder.get('elementId');
        if (Ember['default'].$(event.target).closest(id).length === 1) {
          return true;
        }
        return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
      }
      return true;
    })
  });

  exports['default'] = {
    name: 'ember-key-responder-instance',

    initialize: function initialize() {
      // Handle 1.12.x case, where signature is
      //  initialize(instance) {...}
      var instance = arguments[1] || arguments[0];
      var container = !!arguments[1] ? arguments[0] : instance.container;

      // Set up a handler on the ApplicationView for keyboard events that were
      // not handled by the current KeyResponder yet
      var ApplicationView = container.lookupFactory ? container.lookupFactory('view:application') : instance.resolveRegistration('view:application');

      ApplicationView = ApplicationView.extend(ApplicationViewMixin);

      //TextField/TextArea are currently uninjectable, so we're going to hack our
      //way in
      Ember['default'].TextSupport.reopen({
        keyResponder: Ember['default'].computed(function () {
          return container.lookup('key-responder:main');
        }).readOnly()
      });
    }
  };

});
define('flamestack/instance-initializers/setup-routes', ['exports', 'torii/configuration', 'torii/bootstrap/routing', 'torii/router-dsl-ext'], function (exports, configuration, bootstrapRouting) {

  'use strict';

  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      if (configuration['default'].sessionServiceName) {
        var router = applicationInstance.get('router');
        var setupRoutes = function setupRoutes() {
          var authenticatedRoutes = router.router.authenticatedRoutes;
          var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
          if (hasAuthenticatedRoutes) {
            bootstrapRouting['default'](applicationInstance, authenticatedRoutes);
          }
          router.off('willTransition', setupRoutes);
        };
        router.on('willTransition', setupRoutes);
      }
    }
  };

});
define('flamestack/instance-initializers/walk-providers', ['exports', 'torii/configuration', 'torii/lib/container-utils'], function (exports, configuration, container_utils) {

  'use strict';

  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration['default'].providers) {
        if (configuration['default'].providers.hasOwnProperty(key)) {
          container_utils.lookup(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };

});
define('flamestack/key-responder', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var get = Ember['default'].get;
  var computed = Ember['default'].computed;
  var isNone = Ember['default'].isNone;

  /*
    Holds a stack of key responder views. With this we can neatly handle
    restoring the previous key responder when some modal UI element is closed.
    There are a few simple rules that governs the usage of the stack:
     - mouse click does .replace (this should also be used for programmatically taking focus when not a modal element)
     - opening a modal UI element does .push
     - closing a modal element does .pop

    Also noteworthy is that a view will be signaled that it loses the key focus
    only when it's popped off the stack, not when something is pushed on top. The
    idea is that when a modal UI element is opened, we know that the previously
    focused view will re-gain the focus as soon as the modal element is closed.
    So if the previously focused view was e.g. in the middle of some edit
    operation, it shouldn't cancel that operation.
  */
  var KeyResponder = Ember['default'].Object.extend({
    init: function init() {
      this.set('isActive', true);
      this.set('stack', Ember['default'].A());
      this._super.apply(this, arguments);
    },

    current: computed.readOnly('stack.lastObject'),
    pushView: function pushView(view, wasTriggeredByFocus) {
      if (!isNone(view)) {
        view.trigger('willBecomeKeyResponder', wasTriggeredByFocus);
        var stack = get(this, 'stack');
        stack.pushObject(view);
        view.trigger('didBecomeKeyResponder', wasTriggeredByFocus);
      }
      return view;
    },

    resume: function resume() {
      this.set('isActive', true);
    },

    pause: function pause() {
      this.set('isActive', false);
    },

    popView: function popView(wasTriggeredByFocus) {
      var stack = get(this, 'stack');
      if (get(this, 'stack.length') > 0) {
        var view = get(this, 'current');
        if (view) {
          view.trigger('willLoseKeyResponder', wasTriggeredByFocus);
        }
        view = stack.popObject();
        if (view) {
          view.trigger('didLoseKeyResponder', wasTriggeredByFocus);
        }
        return view;
      } else {
        return undefined;
      }
    },

    replaceView: function replaceView(view, wasTriggeredByFocus) {
      if (get(this, 'current') !== view) {
        this.popView(wasTriggeredByFocus);
        return this.pushView(view, wasTriggeredByFocus);
      }
    }
  });

  exports['default'] = KeyResponder;

  var KEY_EVENTS = {
    8: 'deleteBackward',
    9: 'insertTab',
    13: 'insertNewline',
    27: 'cancel',
    32: 'insertSpace',
    37: 'moveLeft',
    38: 'moveUp',
    39: 'moveRight',
    40: 'moveDown',
    46: 'deleteForward'
  };

  var MODIFIED_KEY_EVENTS = {
    8: 'deleteForward',
    9: 'insertBacktab',
    37: 'moveLeftAndModifySelection',
    38: 'moveUpAndModifySelection',
    39: 'moveRightAndModifySelection',
    40: 'moveDownAndModifySelection'
  };

  var KeyResponderSupportViewMixin = Ember['default'].Mixin.create({
    // Set to true in your view if you want to accept key responder status (which
    // is needed for handling key events)
    acceptsKeyResponder: false,
    canBecomeKeyResponder: computed('acceptsKeyResponder', 'disabled', 'isVisible', function () {
      return get(this, 'acceptsKeyResponder') && !get(this, 'disabled') && get(this, 'isVisible');
    }).readOnly(),

    becomeKeyResponderViaMouseDown: Ember['default'].on('mouseDown', function (evt) {
      var responder = this.get('keyResponder');
      if (responder === undefined) {
        return;
      }

      Ember['default'].run.later(function () {
        responder._inEventBubblingPhase = undefined;
      }, 0);

      if (responder._inEventBubblingPhase === undefined) {
        responder._inEventBubblingPhase = true;
        this.becomeKeyResponder(false);
      }
    }),

    /*
      Sets this view as the target of key events. Call this if you need to make
      this happen programmatically.  This gets also called on mouseDown if the
      view handles that, returns true and doesn't have property
      'acceptsKeyResponder'
      set to false. If mouseDown returned true but 'acceptsKeyResponder' is
      false, this call is propagated to the parent view.
       If called with no parameters or with replace = true, the current key
      responder is first popped off the stack and this view is then pushed. See
      comments for Ember.KeyResponderStack above for more insight.
    */
    becomeKeyResponder: function becomeKeyResponder(replace, wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      if (get(keyResponder, 'current') === this) {
        return;
      }

      if (get(this, 'canBecomeKeyResponder')) {
        if (replace === undefined || replace === true) {
          return keyResponder.replaceView(this, wasTriggeredByFocus);
        } else {
          return keyResponder.pushView(this, wasTriggeredByFocus);
        }
      } else {
        var parent = get(this, 'parentView');

        if (parent && parent.becomeKeyResponder) {
          return parent.becomeKeyResponder(replace, wasTriggeredByFocus);
        }
      }
    },

    becomeKeyResponderViaFocus: function becomeKeyResponderViaFocus() {
      return this.becomeKeyResponder(true, true);
    },

    /*
      Resign key responder status by popping the head off the stack. The head
      might or might not be this view, depending on whether user clicked anything
      since this view became the key responder. The new key responder
      will be the next view in the stack, if any.
    */
    resignKeyResponder: function resignKeyResponder(wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      keyResponder.popView(wasTriggeredByFocus);
    },

    resignKeyResponderViaFocus: function resignKeyResponderViaFocus() {
      return this.resignKeyResponder(true);
    },

    respondToKeyEvent: function respondToKeyEvent(event) {
      Ember['default'].run(this, function () {
        if (get(this, 'keyResponder.isActive')) {
          if (get(this, 'keyResponder.current.canBecomeKeyResponder')) {
            get(this, 'keyResponder.current').interpretKeyEvents(event);
          }
        }
      });
    },

    interpretKeyEvents: function interpretKeyEvents(event) {
      var mapping = event.shiftKey ? MODIFIED_KEY_EVENTS : KEY_EVENTS;
      var eventName = mapping[event.keyCode];

      if (eventName && this.has(eventName)) {
        return this.trigger(eventName, event);
      }

      return false;
    }
  });

  Ember['default'].View.reopen(KeyResponderSupportViewMixin);
  Ember['default'].Component.reopen(KeyResponderSupportViewMixin);

  var KeyResponderInputSupport = Ember['default'].Mixin.create({
    acceptsKeyResponder: true,
    init: function init() {
      this._super.apply(this, arguments);
      this.on('focusIn', this, this.becomeKeyResponderViaFocus);
      this.on('focusOut', this, this.resignKeyResponderViaBlur);
    },

    didBecomeKeyResponder: function didBecomeKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().focus();
      }
    },

    didLoseKeyResponder: function didLoseKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().blur();
      }
    }
  });

  Ember['default'].TextSupport.reopen(KeyResponderInputSupport);
  Ember['default'].Checkbox.reopen(KeyResponderInputSupport);
  Ember['default'].Select.reopen(KeyResponderInputSupport);

  exports.KEY_EVENTS = KEY_EVENTS;
  exports.MODIFIED_KEY_EVENTS = MODIFIED_KEY_EVENTS;
  exports.KeyResponderInputSupport = KeyResponderInputSupport;

});
define('flamestack/locales/en/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('flamestack/locales/en/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    // "some.translation.key": "Text for some.translation.key",
    //
    // "a": {
    //   "nested": {
    //     "key": "Text for a.nested.key"
    //   }
    // },
    //
    // "key.with.interpolation": "Text with {{anInterpolation}}"

    "error": {
      "notLogged": "User not logged in."
    },
    "success": {
      "logged": "User correctly logged in.",
      "loggedOut": "Sign out successful."
    },
    "login": {
      "required": "You have to login first"
    },
    "label": {
      "dataSaved": "Data saved correctly",
      "save": "Save",
      "saveSecurity": "Save Role",
      "securityLevel": "Security Level",
      "languageChange": "The language has been successfully changed to English",
      "edit": "Edit",
      "signIn": "Sign in"
    },
    "lang": {
      "english": "English",
      "spanish": "Spanish"
    },
    "admin": {
      "zone": "Admin Zone",
      "userRequests": "User Requests",
      "roles": "Roles",
      "users": "Users",
      "displayName": "Display Name",
      "userName": "Username",
      "onlineUsers": "Users Online"
    },
    "security": {
      "notAllowed": "This user doesn't have permission to access this page"
    }
  };

});
define('flamestack/locales/es/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('flamestack/locales/es/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    // "some.translation.key": "Text for some.translation.key",
    //
    // "a": {
    //   "nested": {
    //     "key": "Text for a.nested.key"
    //   }
    // },
    //
    // "key.with.interpolation": "Text with {{anInterpolation}}"

    "error": {
      "notLogged": "Usuario no registrado."
    },
    "success": {
      "logged": "Usuario registrado correctamente.",
      "loggedOut": "Cerrado de session correcto."
    },
    "login": {
      "required": "Tienes que registrarte primero"
    },
    "label": {
      "dataSaved": "Datos guardados correctamente",
      "save": "Guardar",
      "saveSecurity": "Guardar Role",
      "securityLevel": "Nivel de Acceso",
      "languageChange": "El idioma ha sido cambiado a Español correctamente",
      "edit": "Editar",
      "signIn": "Acceder"
    },
    "lang": {
      "english": "Inglés",
      "spanish": "Español"
    },
    "admin": {
      "zone": "Zona Admin",
      "userRequests": "Peticiones de Usuario",
      "roles": "Roles",
      "users": "Usuarios",
      "displayName": "Nombre a mostrar",
      "userName": "Nombre de usuario",
      "onlineUsers": "Usuarios Online"
    },
    "security": {
      "notAllowed": "Tu usuario no tiene permisos para acceder a esta página"
    }
  };

});
define('flamestack/router', ['exports', 'ember', 'flamestack/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('unknown', { path: "*path" });
    this.route('login');
    this.route('admin');
  });

  exports['default'] = Router;

});
define('flamestack/routes/admin', ['exports', 'flamestack/routes/base'], function (exports, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({

    auth: true,
    securityLevel: 3,

    model: function model() {
      var promise = new Promise((function (resolve, reject) {
        // Grab data. If found in datapoint.key (existingUsers in this case) else from server.
        this.Data.grabData(null, ['users'], 'existingUsers').then((function (data) {
          // Users retrieved, saved to a Datapoint property
          // and aliased to our controller property for use.

          if (!data[0].roleLevel) {
            // Get user roles
            this.Data.grabData(null, ['roles'], 'roles').then((function (data) {
              if (data !== null) {
                var users = this.Data.get('existingUsers');
                for (var i = 0; i < users.length; i++) {
                  var found = false;
                  for (var j = 0; j < data.length; j++) {
                    if (users[i].key === data[j].key) {
                      users[i].roleLevel = data[j].level;
                      found = true;
                    }
                  }
                  if (!found) {
                    users[i].roleLevel = null;
                  }
                }
                this.Data.set('existingUsers', users);
                resolve();
              }
            }).bind(this), (function () {
              reject();
            }).bind(this));
          } else {
            resolve();
          }
        }).bind(this), (function (errorObj) {
          console.log('FLAME_ERROR_LOG: Failed on grabData method call. You might have lost your internet conexion.');
          reject();
        }).bind(this));
      }).bind(this));

      return promise;
    },

    setupController: function setupController(controller, model) {
      controller.setup();
    },

    actions: {
      willTransition: function willTransition(transition) {
        this.Data.turnFireOff(null, ['presence']);
        this._super(transition);
      }
    }

  });

});
define('flamestack/routes/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    beforeModel: function beforeModel(transition) {

      this.set('i18n.locale', 'es');

      // Initialize the datapoint
      return this.Data.initialize(transition).then(function () {
        console.log('Your are ready to rock & roll!');
        console.log('-------------------------------');
        console.log('-------------------------------');
        console.log('"self" is defined but never used xD');
        console.log('-------------------------------');
        console.log('-------------------------------');
      }, function () {
        // Abstract: catch error on datapoint intialization
      });
    },

    model: function model() {
      return {
        frase: '',
        author: ''
      };
    },

    actions: {

      signIn: function signIn(provider) {
        this.Data.signIn(provider);
      },

      signOut: function signOut() {
        this.Data.signOut();
      },

      redirectHome: function redirectHome() {
        this.transitionTo('index');
        // Hide sideNav
        $('.button-collapse').sideNav('hide');
      },

      setLocale: function setLocale(locale) {
        this.set('i18n.locale', locale);
        this.Toast.addToast(this.get('i18n').t('label.languageChange'), 2000);
      },

      focus: function focus(id, animation, speed) {
        id = '#' + id;
        this.Animate.go(id, animation, speed);
      },

      focusHoverIn: function focusHoverIn(id) {
        id = '#' + id;
        $(id).addClass('block-focus-border');
      },

      focusHoverOut: function focusHoverOut(id) {
        id = '#' + id;
        $(id).removeClass('block-focus-border');
      },

      yesToModal: function yesToModal() {
        $('.modal-action').click();
        var data = {
          message: 'yes',
          action: this.Data.get('modalAction'),
          data: this.Data.get('modalData')
        };
        var currPath = this.router.currentRouteName;
        Flamestack.__container__.lookup('controller:' + currPath).set('modalAnswer', data);
      },

      noToModal: function noToModal() {
        $('.modal-action').click();
        var data = {
          message: 'no',
          action: this.Data.get('modalAction'),
          data: this.Data.get('modalData')
        };
        var currPath = this.router.currentRouteName;
        Flamestack.__container__.lookup('controller:' + currPath).set('modalAnswer', data);
      },

      /* FRASES - WEB SPECIFIC ACTIONS */

      closeNewEntryModal: function closeNewEntryModal() {
        var clearModel = {
          frase: '',
          author: ''
        };
        this.controllerFor('application').set('model', clearModel);
        $('#modalNuevaEntrada').closeModal();
      },

      sendNewEntry: function sendNewEntry() {
        var dateNow = new Date();
        dateNow = dateNow.getTime();
        var dataObj = {
          userName: this.get('session.currentUser.displayName'),
          userImg: this.get('session.currentUser.profileImageURL'),
          frase: this.controllerFor('application').get('model.frase'),
          author: this.controllerFor('application').get('model.author'),
          date: dateNow,
          votos: 0
        };
        this.Data.pushData('publicRef', ['frases'], dataObj).then((function (data) {
          if (this.Data.get('frasesData') !== null) {
            this.Data.get('frasesData').push(dataObj);
          } else {
            this.Data.set('frasesData', [dataObj]);
          }

          var clearModel = {
            frase: '',
            author: ''
          };
          this.controllerFor('application').set('model', clearModel);

          $('#modalNuevaEntrada').closeModal();
          this.Toast.addToast('Lección de vida compartida', 2000);
        }).bind(this));
      }
    }
  });

});
define('flamestack/routes/base', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    // BASE ROUTE PROPERTIES: Define the public configuration variables

    auth: false,
    securityLevel: null,

    beforeModel: function beforeModel(transition) {

      var promise = new Promise((function (resolve, reject) {

        // Check authetication toggle
        if (this.get('auth') === false) {
          resolve('Public access');
          return true;
        }

        // Call Data service checkUser method. True or false, depending on if user found.
        this.Data.checkUser(transition).then((function () {
          var level = this.get('securityLevel');
          // If no security level is placed, the user will only be required to be logged in.
          if (level === null) {
            resolve('Security cleared');
            return true;
          }
          // Call the security check dataNode in Firebase and provide clearance te enter.
          this.Data.checkSecurityLevel(level, transition).then(function () {
            console.log('SecurityLevel Cleared');
            resolve('Security cleared');
            return true;
          }, (function () {
            console.log('User does not have clearance permission');
            resolve('Permission denied');
            this.transitionTo('login');
            return true;
          }).bind(this));
        }).bind(this), (function () {
          this.Toast.addToast(this.get('i18n').t('error.notLogged'), 3000);
          this.transitionTo('login');
        }).bind(this));
      }).bind(this));

      return promise;
    },

    actions: {
      didTransition: function didTransition() {
        this.Animate.entryPage('.page', 'fadeInRightBig');
      },

      willTransition: function willTransition(transition) {
        this.Animate.exitPage('.page', 'fadeOutRightBig', transition, 'fast');
      }
    }

  });

});
define('flamestack/routes/index', ['exports', 'flamestack/routes/base'], function (exports, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({

    auth: false,

    model: function model() {
      var filtersObj = {
        orderChild: 'votos'
      };
      return this.Data.grabData('publicRef', ['frases'], 'frasesData', filtersObj).then((function () {
        return this.Data.get('frasesData');
      }).bind(this));
    },

    actions: {

      focus: function focus(id, animation, speed) {
        id = '#' + id;
        this.Animate.go(id, animation, speed);
      }

    }

  });

});
define('flamestack/routes/login', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    existingUsers: '',

    actions: {

      didTransition: function didTransition() {
        $('#login-page').removeClass('hide');
        this.Animate.entryPage('.page', 'fadeInDownBig', 'normal');
      },

      willTransition: function willTransition(transition) {
        this.Animate.exitPage('.page', 'flipOutX', transition);
      }
    }

  });

});
define('flamestack/routes/unknown', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('flamestack/services/animate', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Service.extend({

    go: function go(node, animation, speed) {
      $(node).removeClass('anim-normal anim-slow anim-fast');
      if (speed) {
        var animspeed = 'anim-' + speed;
        $(node).addClass(animspeed);
      } else {
        $(node).addClass('anim-normal');
      }
      var promise = new Promise(function (resolve) {
        var animString = 'animated ' + animation;
        $(node).addClass(animString).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $(node).removeClass(animString);
          resolve('end');
        });
      });
      return promise;
    },

    goAndHide: function goAndHide(node, animation, speed) {
      $(node).removeClass('anim-normal anim-slow anim-fast');
      if (speed) {
        var animspeed = 'anim-' + speed;
        $(node).addClass(animspeed);
      } else {
        $(node).addClass('anim-normal');
      }
      var promise = new Promise(function (resolve) {
        var animString = 'animated ' + animation;
        $(node).addClass(animString).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $(node).addClass('hide').removeClass(animString);
          resolve('end');
        });
      });
      return promise;
    },

    entryPage: function entryPage(node, animation, speed) {
      $(node).removeClass('anim-normal anim-slow anim-fast');
      var promise = new Promise(function (resolve) {
        Ember['default'].run.scheduleOnce('afterRender', this, function () {
          var animString = 'animated ' + animation;
          if (speed) {
            var animspeed = 'anim-' + speed;
            $(node).addClass(animspeed);
          } else {
            $(node).addClass('anim-normal');
          }
          $(node).addClass(animString).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(node).removeClass(animString);
            resolve('end');
          });
        });
      });
      return promise;
    },

    pageTransitionComplete: false,

    exitPage: function exitPage(node, animation, transition, speed) {
      $(node).removeClass('anim-normal anim-slow anim-fast');
      var promise = new Promise((function (resolve) {
        if (!this.get('pageTransitionComplete')) {
          if (speed) {
            var animspeed = 'anim-' + speed;
            $(node).addClass(animspeed);
          } else {
            $(node).addClass('anim-normal');
          }
          transition.abort();
          this.goAndHide(node, animation).then((function () {
            this.set('pageTransitionComplete', true);
            transition.retry().then(function () {
              resolve('end');
            });
          }).bind(this));
        } else {
          this.set('pageTransitionComplete', false);
          resolve('secondRun');
        }
      }).bind(this));
      return promise;
    }

  });

});
define('flamestack/services/datapoint', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Service.extend({

    session: Ember['default'].inject.service(),
    i18n: Ember['default'].inject.service(),
    routing: Ember['default'].inject.service('-routing'),

    // DATA PROPERTIES ARE DEFINED HERE AS EMPTY STRINGS: ''

    userData: {
      profile: '',
      securityLevel: '',
      config: ''
    },

    appData: {
      // DEFINE APP DATA HERE FOLLOWING THE SAME STRUCTURE FOUND IN USER DATA.

    },

    // Datapoint variables
    firebase: 'https://dichos-familiares.firebaseio.com',
    baseRef: '',
    userRef: '',
    publicRef: '',
    communityRef: '',
    presenceRef: '',
    presentUsersRef: '',
    onlineRef: '',
    onlineUsers: '',
    userId: null,
    entryTransition: '',

    initialize: function initialize(transition) {
      var userUrl = '',
          self = this;

      // Set baseRef
      this.set('baseRef', new Firebase(this.get('firebase')));
      this.set('communityRef', new Firebase(this.get('firebase') + '/community'));
      this.set('publicRef', new Firebase(this.get('firebase') + '/public'));
      this.set('presentUsersRef', new Firebase(this.get('firebase') + '/presence'));

      var promise = new Promise(function (resolve, reject) {

        self.get('session').fetch().then(function () {
          console.log('User session preserved.');

          var tempProvider = self.get('session.provider');

          if (self.get('session.isAuthenticated')) {
            self.set('userId', self.get('session.currentUser.id'));
            self.set('userData.profile', self.get('session.currentUser'));
            self.set('userData.profile.provider', tempProvider);
          } else {
            self.set('userId', null);
          }

          userUrl = self.get('firebase') + '/users/' + tempProvider + ':' + self.get('userId');

          self.set('userRef', new Firebase(userUrl));
          self.minProfileSave();
          self.Toast.addToast(self.get('i18n').t('success.logged'), 2000);
          if (transition.params['login']) {
            self.get('routing').transitionTo('index');
          }
          resolve({ message: 'Datapoint service correctly initialized.' });
        }, function () {
          if (!transition.params['login']) {
            self.set('entryTransition', transition);
          }
          reject({ message: 'No user logged in' });
        });
      });

      return promise;
    },

    /*    SIGN IN AND OUT LOGIC*/

    signIn: function signIn(provider) {

      return this.get('session').open('firebase', { provider: provider }).then((function () {
        this.Toast.addToast(this.get('i18n').t('success.logged'), 2000);
        this.minProfileSave();
        if (this.get('entryTransition')) {
          this.get('entryTransition').retry();
        } else {
          this.get('routing').transitionTo('index');
        }
      }).bind(this));
    },

    signOut: function signOut() {
      // Clear all data
      this.set('userData', {});
      this.set('appData', {});
      this.set('userRef', '');
      this.set('userId', null);
      this.set('entryTransition', null);
      this.get('presenceRef').set(null);
      this.get('session').close().then((function () {
        this.Toast.addToast(this.get('i18n').t('success.loggedOut'), 2000);

        // optional - Redirect to Login on Logout
        this.get('routing').transitionTo('index');
      }).bind(this), null);
    },

    /*    MINIMUM PROFILE FUNCTION. Checks if the user data stored in firebase is null */
    minProfileSave: function minProfileSave() {
      var self = this;

      function checkProfile() {
        var tempProvider = self.get('session.provider');
        self.set('userData.profile', self.get('session.currentUser'));
        self.set('userData.profile.provider', tempProvider);
        self.set('userData.securityLevel', '');
        self.grabData('userRef', ['profile'], null).then(function (data) {
          if (data === null) {
            var tempUserData = self.get('session.currentUser');
            tempUserData.provider = self.get('session.provider');
            self.setData('userRef', ['profile'], tempUserData);
          }
          checkUserConfig();
        });
      }

      function checkUserConfig() {
        self.grabData('userRef', ['config'], 'userData.config').then(function (data) {
          if (data === null) {
            var tempConfigData = {
              'notify': false,
              'avatar': 'avatar-1'
            };
            self.setData('userRef', ['config'], tempConfigData);
          }
        });
      }

      if (this.get('userRef') !== '') {
        checkProfile();
        this.setupPresence();
      } else {
        var tempProvider = self.get("session.provider");

        if (self.get('session.isAuthenticated')) {
          self.set('userId', self.get('session.currentUser.id'));
        } else {
          self.set('userId', null);
        }

        var userUrl = self.get('firebase') + '/users/' + tempProvider + ':' + self.get('userId');

        self.set('userRef', new Firebase(userUrl));
        checkProfile();
        self.setupPresence();
      }
    },

    setupPresence: function setupPresence() {
      var self = this;
      this.set('onlineRef', new Firebase(this.get('firebase') + '/.info/connected'));
      this.set('presenceRef', new Firebase(this.get('firebase') + '/presence/' + this.get('session.provider') + ':' + this.get('userId')));
      this.get('onlineRef').on('value', function (snapshot) {
        if (snapshot.val()) {
          var tempUser = self.get('session.currentUser');
          self.get('presenceRef').onDisconnect().remove();
          self.get('presenceRef').set({
            'name': tempUser.displayName,
            'img': tempUser.profileImageURL
          });
        }
      });
    },

    checkUser: function checkUser(transition) {
      var promise = new Promise((function (resolve, reject) {
        var status = this.get('session.isAuthenticated');
        if (status) {
          resolve(true);
          return;
        }

        reject(false);
      }).bind(this));

      return promise;
    },

    checkSecurityLevel: function checkSecurityLevel(level, transition) {
      var promise = new Promise((function (resolve, reject) {
        if (this.get('userData') && this.get('userData.securityLevel') >= level) {
          resolve('Access given');
        } else if (this.get('userData') && this.get('userData.securityLevel') === 'No Access') {
          this.Toast.addToast(this.get('i18n').t('security.notAllowed'), 2000);
          reject('Security not cleared');
        } else {
          this.grabData(null, ['security', 'level' + level], null).then((function (data) {
            this.set('userData.securityLevel', level);
            resolve('Access given');
          }).bind(this), (function (err) {
            // code to handle read error
            this.set('entryTransition', transition);
            this.set('userData.securityLevel', 'No Access');
            console.log('Security level not high enough.');

            this.Toast.addToast(this.get('i18n').t('security.notAllowed'), 2000);
            reject('Security not cleared');
          }).bind(this));
        }
      }).bind(this));
      return promise;
    },

    objectToArray: function objectToArray(obj) {
      var keys = Object.keys(obj);
      var items = [];
      for (var j = 0; j < keys.length; j++) {
        items[j] = obj[keys[j]];
        items[j].key = keys[j];
      }
      return items;
    },

    _grabDataHelper: function _grabDataHelper(data, key) {
      if (data === null) {
        var arrData = null;
      } else {
        var keys = Object.keys(data);
        var type = typeof data[keys[0]];
        if (data !== null && type == 'object') {
          var arrData = this.objectToArray(data);
        } else {
          var arrData = data;
        }
      }

      if (key) {
        this.set(key, arrData);
        return { message: 'Data downloaded and saved to Datapoint property: ' + key, data: arrData };
      } else {
        return { message: 'Data downloaded. Not saved.', data: arrData };
      }
    },

    // If reference null, defaults to baseRef.
    grabData: function grabData(reference, childrenArray, dataKey, filtersObj) {

      var promise = new Promise((function (resolve, reject) {

        //Check data function
        function checkData(self, dataKey) {
          if (self.get(dataKey)) {
            return true;
          }
          return false;
        }

        //Get data switch FUNCTION
        function getData(self, ref, childArray, key) {
          var promise = new Promise(function (resolve, reject) {

            var instruction = '';

            if (ref === null) {
              ref = 'baseRef';
            }

            instruction = self.get(ref);

            for (var i = 0; i < childArray.length; i++) {
              instruction = instruction.child(childArray[i]);
            }

            if (filtersObj) {
              if (filtersObj.orderChild) {
                instruction = instruction.orderByChild(filtersObj.orderChild);
              }
              if (filtersObj.equalTo) {
                instruction = instruction.equalTo(filtersObj.equalTo);
              }
              if (filtersObj.startAt) {
                instruction = instruction.startAt(filtersObj.startAt);
              }
              if (filtersObj.endAt) {
                instruction = instruction.endAt(filtersObj.endAt);
              }
              if (filtersObj.limitToFirst) {
                instruction = instruction.limitToFirst(filtersObj.limitToFirst);
              }
              if (filtersObj.limitToLast) {
                instruction = instruction.limitToLast(filtersObj.limitToLast);
              }
            }

            instruction.once('value', (function (snap) {
              var values = snap.val();
              var data = self._grabDataHelper(values, key);
              resolve(data);
            }).bind(self), (function (errorObj) {
              reject({ error: errorObj });
            }).bind(self));
          });
          return promise;
        }

        // Check if the dataKey has data
        if (dataKey && checkData(this, dataKey)) {
          resolve(this.get(dataKey));
        } else {

          getData(this, reference, childrenArray, dataKey).then((function (dataGetResult) {
            resolve(dataGetResult.data);
          }).bind(this), (function (dataGetResult) {
            reject(dataGetResult.error);
          }).bind(this));
        }
      }).bind(this));
      return promise;
    },

    // If reference null, defaults to baseRef.
    deleteData: function deleteData(reference, childrenArray) {

      var promise = new Promise((function (resolve, reject) {

        //Get data switch FUNCTION
        function deleteFunction(self, ref, childArray) {
          var promise = new Promise(function (resolve, reject) {
            var instruction = '';
            if (ref === null) {
              ref = 'baseRef';
            }
            instruction = self.get(ref);

            for (var i = 0; i < childArray.length; i++) {
              instruction = instruction.child(childArray[i]);
            }

            instruction.remove(function () {
              resolve({ message: 'Data erased' });
            });
          });
          return promise;
        }

        deleteFunction(this, reference, childrenArray).then((function (dataGetResult) {
          resolve(dataGetResult.message);
        }).bind(this), (function (dataGetResult) {
          reject(dataGetResult);
        }).bind(this));
      }).bind(this));
      return promise;
    },

    // If reference null, defaults to baseRef.
    setData: function setData(reference, childrenArray, data) {

      var promise = new Promise((function (resolve, reject) {

        //Get data switch FUNCTION
        function setFunction(self, ref, childArray, data) {
          var promise = new Promise(function (resolve, reject) {
            var instruction = '';
            if (ref === null) {
              ref = 'baseRef';
            }
            instruction = self.get(ref);

            for (var i = 0; i < childArray.length; i++) {
              instruction = instruction.child(childArray[i]);
            }

            instruction.set(data, function () {
              resolve({ message: 'Data Saved' });
            });
          });
          return promise;
        };

        setFunction(this, reference, childrenArray, data).then((function (dataGetResult) {
          resolve(dataGetResult.message);
        }).bind(this), (function (dataGetResult) {
          reject(dataGetResult);
        }).bind(this));
      }).bind(this));
      return promise;
    },

    pushData: function pushData(reference, childrenArray, data) {
      var promise = new Promise((function (resolve, reject) {

        //Get data switch FUNCTION
        function pushFunction(self, ref, childArray, data) {
          var promise = new Promise(function (resolve, reject) {
            var instruction = '';
            if (ref === null) {
              ref = 'baseRef';
            }
            instruction = self.get(ref);

            for (var i = 0; i < childArray.length; i++) {
              instruction = instruction.child(childArray[i]);
            }

            instruction.push(data, function () {
              resolve({ message: 'Data Pushed' });
            });
          });
          return promise;
        };

        pushFunction(this, reference, childrenArray, data).then((function (dataGetResult) {
          resolve(dataGetResult.message);
        }).bind(this), (function (dataGetResult) {
          reject(dataGetResult);
        }).bind(this));
      }).bind(this));
      return promise;
    },

    turnFireOff: function turnFireOff(reference, childrenArray) {
      var promise = new Promise((function (resolve, reject) {

        //Get data switch FUNCTION
        function turnOff(self, ref, childArray) {
          var promise = new Promise(function (resolve, reject) {
            var instruction = '';
            if (ref === null) {
              ref = 'baseRef';
            }
            instruction = self.get(ref);

            for (var i = 0; i < childArray.length; i++) {
              instruction = instruction.child(childArray[i]);
            }

            instruction.off();
            resolve();
          });
          return promise;
        };

        turnOff(this, reference, childrenArray).then((function () {
          resolve('Socket turned off.');
        }).bind(this));
      }).bind(this));
      return promise;
    }
  });

  /*

  PROMISE BASE
  ------------

  var promise = new Promise(function(resolve, reject){

  });
  return promise;
  */

});
define('flamestack/services/firebase', ['exports', 'emberfire/services/firebase', 'flamestack/config/environment'], function (exports, Firebase, config) {

	'use strict';

	Firebase['default'].config = config['default'];

	exports['default'] = Firebase['default'];

});
define('flamestack/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, i18n) {

	'use strict';



	exports['default'] = i18n['default'];

});
define('flamestack/services/md-settings', ['exports', 'ember-cli-materialize/services/md-settings'], function (exports, md_settings) {

	'use strict';



	exports['default'] = md_settings['default'];

});
define('flamestack/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, Service) {

	'use strict';

	exports['default'] = Service['default'];

});
define('flamestack/services/toast', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Service.extend({

    // Materialize.toast(message, displayLength, className, completeCallback);
    addToast: function addToast(a, b, c, d) {
      a = a ? a : '';
      b = b ? b : 2000;
      c = c ? c : '';
      d = d ? d : null;

      Materialize.toast(a, b, c, d);
    }

  });

});
define('flamestack/templates/admin', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.0.0",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 20
              },
              "end": {
                "line": 50,
                "column": 20
              }
            },
            "moduleName": "flamestack/templates/admin.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("form");
            var el2 = dom.createTextNode("\n                          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(": ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(": ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","row");
            var el3 = dom.createTextNode("\n                            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","col s3");
            var el4 = dom.createTextNode("\n                              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(":");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("br");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("b");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","col s9 m6");
            var el4 = dom.createTextNode("\n                                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("p");
            dom.setAttribute(el4,"class","range-field");
            var el5 = dom.createTextNode("\n                                  ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                                ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"class","waves-effect waves-light btn green lighten-1");
            dom.setAttribute(el2,"type","submit");
            var el3 = dom.createTextNode("\n                            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("i");
            dom.setAttribute(el3,"class","material-icons right");
            var el4 = dom.createTextNode("done");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2,"class","waves-effect waves-light btn modal-trigger waves-black red white-text");
            dom.setAttribute(el2,"href","#yesNoModal");
            var el3 = dom.createTextNode("\n                            Delete X\n                          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var element4 = dom.childAt(element3, [10]);
            var element5 = dom.childAt(element4, [1]);
            var element6 = dom.childAt(element3, [14]);
            var morphs = new Array(10);
            morphs[0] = dom.createElementMorph(element3);
            morphs[1] = dom.createMorphAt(element3,1,1);
            morphs[2] = dom.createMorphAt(element3,3,3);
            morphs[3] = dom.createMorphAt(element3,6,6);
            morphs[4] = dom.createMorphAt(element3,8,8);
            morphs[5] = dom.createMorphAt(element5,1,1);
            morphs[6] = dom.createMorphAt(dom.childAt(element5, [5]),0,0);
            morphs[7] = dom.createMorphAt(dom.childAt(element4, [3, 1]),1,1);
            morphs[8] = dom.createMorphAt(dom.childAt(element3, [12]),3,3);
            morphs[9] = dom.createElementMorph(element6);
            return morphs;
          },
          statements: [
            ["element","action",["updateDisplayName",["get","user",["loc",[null,[28,57],[28,61]]]]],["on","submit"],["loc",[null,[28,28],[28,75]]]],
            ["inline","t",["admin.displayName"],[],["loc",[null,[29,26],[29,51]]]],
            ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","user.profile.displayName",["loc",[null,[29,79],[29,103]]]]],[],[]],"autofocus","true"],["loc",[null,[29,53],[29,122]]]],
            ["inline","t",["admin.userName"],[],["loc",[null,[30,26],[30,48]]]],
            ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","user.profile.username",["loc",[null,[30,76],[30,97]]]]],[],[]]],["loc",[null,[30,50],[30,99]]]],
            ["inline","t",["label.securityLevel"],[],["loc",[null,[33,30],[33,57]]]],
            ["inline","role-level",[["get","user.roleLevel",["loc",[null,[34,46],[34,60]]]]],[],["loc",[null,[34,33],[34,62]]]],
            ["inline","input",[],["type","range","min","0","max","3","value",["subexpr","@mut",[["get","user.roleLevel",["loc",[null,[38,77],[38,91]]]]],[],[]]],["loc",[null,[38,34],[38,93]]]],
            ["inline","t",["label.save"],[],["loc",[null,[44,28],[44,46]]]],
            ["element","action",["setDeleteAction",["get","user",["loc",[null,[46,153],[46,157]]]]],[],["loc",[null,[46,126],[46,159]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@2.0.0",
            "loc": {
              "source": null,
              "start": {
                "line": 50,
                "column": 20
              },
              "end": {
                "line": 60,
                "column": 20
              }
            },
            "moduleName": "flamestack/templates/admin.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","title");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(":\n                      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("b");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                         ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","secondary-content pointer");
            var el2 = dom.createTextNode("\n                           ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","valign-wrapper");
            var el3 = dom.createTextNode("\n                             ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("i");
            dom.setAttribute(el3,"class","material-icons");
            var el4 = dom.createTextNode("code");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                           ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                         ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [9]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            morphs[1] = dom.createMorphAt(fragment,5,5,contextualElement);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7]),0,0);
            morphs[3] = dom.createElementMorph(element2);
            morphs[4] = dom.createMorphAt(dom.childAt(element2, [1]),1,1);
            return morphs;
          },
          statements: [
            ["content","user.profile.displayName",["loc",[null,[51,42],[51,70]]]],
            ["inline","t",["label.securityLevel"],[],["loc",[null,[53,22],[53,49]]]],
            ["inline","role-level",[["get","user.roleLevel",["loc",[null,[54,38],[54,52]]]]],[],["loc",[null,[54,25],[54,54]]]],
            ["element","action",["toggleEdit",["get","user",["loc",[null,[55,84],[55,88]]]]],[],["loc",[null,[55,62],[55,90]]]],
            ["inline","t",["label.edit"],[],["loc",[null,[57,29],[57,47]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 16
            },
            "end": {
              "line": 62,
              "column": 16
            }
          },
          "moduleName": "flamestack/templates/admin.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","collection-item avatar");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"class","circle");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [1]);
          var element8 = dom.childAt(element7, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element8, 'src');
          morphs[1] = dom.createAttrMorph(element8, 'alt');
          morphs[2] = dom.createMorphAt(element7,3,3);
          return morphs;
        },
        statements: [
          ["attribute","src",["concat",[["get","user.profile.profileImageURL",["loc",[null,[26,32],[26,60]]]]]]],
          ["attribute","alt",["concat",[["get","user.profile.displayName",["loc",[null,[26,71],[26,95]]]]]]],
          ["block","if",[["get","user.editting",["loc",[null,[27,26],[27,39]]]]],[],0,1,["loc",[null,[27,20],[60,27]]]]
        ],
        locals: ["user"],
        templates: [child0, child1]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 70,
              "column": 14
            },
            "end": {
              "line": 75,
              "column": 14
            }
          },
          "moduleName": "flamestack/templates/admin.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("No users logged");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n                  Be the first one to set foot inside!\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 75,
              "column": 14
            },
            "end": {
              "line": 79,
              "column": 14
            }
          },
          "moduleName": "flamestack/templates/admin.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("Users online");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","divider");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 80,
              "column": 16
            },
            "end": {
              "line": 85,
              "column": 16
            }
          },
          "moduleName": "flamestack/templates/admin.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","chip white-text blue darken-3 bottom-pad bottom-marg");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element1, 'src');
          morphs[1] = dom.createAttrMorph(element1, 'alt');
          morphs[2] = dom.createMorphAt(element0,3,3);
          return morphs;
        },
        statements: [
          ["attribute","src",["concat",[["get","user.img",["loc",[null,[82,32],[82,40]]]]]]],
          ["attribute","alt",["concat",[["get","user.name",["loc",[null,[82,51],[82,60]]]]]]],
          ["content","user.name",["loc",[null,[83,18],[83,31]]]]
        ],
        locals: ["user"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.0.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 127,
            "column": 0
          }
        },
        "moduleName": "flamestack/templates/admin.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        dom.setAttribute(el4,"class","center-align");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","collapsible");
        dom.setAttribute(el4,"data-collapsible","accordion");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapsible-header grey lighten-5");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","material-icons");
        var el8 = dom.createTextNode("filter_drama");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapsible-body");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("User Request Table!!!");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapsible-header grey lighten-5");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","material-icons");
        var el8 = dom.createTextNode("vpn_key");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapsible-body");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7,"class","flow-text");
        var el8 = dom.createTextNode("Roles have been thought of as security level passes. We defined 4 levels of user authentication and a fifth level for public access.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapsible-header grey lighten-5");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","material-icons");
        var el8 = dom.createTextNode("contacts");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapsible-body");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7,"class","collection");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("              ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapsible-header grey lighten-5");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","material-icons");
        var el8 = dom.createTextNode("swap_calls");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapsible-body");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","container");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        dom.setAttribute(el1,"type","text/javascript");
        var el2 = dom.createTextNode("\n$(document).ready(function(){\n    $('.collapsible').collapsible({\n      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style\n    });\n\n    $('.dropdown-button').dropdown({\n        inDuration: 300,\n        outDuration: 225,\n        constrain_width: false, // Does not change width of dropdown to that of the activator\n        hover: false, // Activate on hover\n        gutter: 0, // Spacing from edge\n        belowOrigin: true, // Displays dropdown below the button\n        alignment: 'left' // Displays dropdown with edge aligned to the left of button\n      }\n    );\n\n    // Modal config\n    $('.modal-trigger').leanModal({\n      dismissible: false, // Modal can be dismissed by clicking outside of the modal\n      opacity: .5, // Opacity of modal background\n      in_duration: 400, // Transition in duration\n      out_duration: 250, // Transition out duration\n\n      //ready: function() { alert('Ready'); }, // Callback for Modal open\n      complete: function() {\n        $('.lean-overlay').remove();\n      } // Callback for Modal close\n    });\n\n  });\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element9 = dom.childAt(fragment, [0, 1]);
        var element10 = dom.childAt(element9, [3, 1]);
        var element11 = dom.childAt(element10, [5]);
        var element12 = dom.childAt(element10, [7]);
        var element13 = dom.childAt(element12, [3, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(element9, [1, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element10, [1, 1]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element10, [3, 1]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element11, [1]),1,1);
        morphs[4] = dom.createMorphAt(dom.childAt(element11, [3, 1]),1,1);
        morphs[5] = dom.createMorphAt(dom.childAt(element12, [1]),1,1);
        morphs[6] = dom.createMorphAt(element13,1,1);
        morphs[7] = dom.createMorphAt(element13,2,2);
        return morphs;
      },
      statements: [
        ["inline","t",["admin.zone"],[],["loc",[null,[4,31],[4,49]]]],
        ["inline","t",["admin.userRequests"],[],["loc",[null,[9,99],[9,125]]]],
        ["inline","t",["admin.roles"],[],["loc",[null,[15,94],[15,113]]]],
        ["inline","t",["admin.users"],[],["loc",[null,[21,95],[21,114]]]],
        ["block","each",[["get","existingUsers",["loc",[null,[24,24],[24,37]]]]],[],0,null,["loc",[null,[24,16],[62,25]]]],
        ["inline","t",["admin.onlineUsers"],[],["loc",[null,[67,97],[67,122]]]],
        ["block","unless",[["get","onlineUsers",["loc",[null,[70,24],[70,35]]]]],[],1,2,["loc",[null,[70,14],[79,25]]]],
        ["block","each",[["get","onlineUsers",["loc",[null,[80,24],[80,35]]]]],[],3,null,["loc",[null,[80,16],[85,25]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('flamestack/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 6
            },
            "end": {
              "line": 23,
              "column": 6
            }
          },
          "moduleName": "flamestack/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"href","#modalNuevaEntrada");
          dom.setAttribute(el2,"class","valign-wrapper black-text modal-trigger");
          var el3 = dom.createTextNode("Nueva ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3,"class","right material-icons");
          var el4 = dom.createTextNode("add");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 8
            },
            "end": {
              "line": 27,
              "column": 8
            }
          },
          "moduleName": "flamestack/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("Sign out");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [
          ["element","action",["signOut"],[],["loc",[null,[26,13],[26,33]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.0.0",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 10
              },
              "end": {
                "line": 30,
                "column": 10
              }
            },
            "moduleName": "flamestack/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","t",["label.signIn"],[],["loc",[null,[29,12],[29,32]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 8
            },
            "end": {
              "line": 31,
              "column": 8
            }
          },
          "moduleName": "flamestack/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","link-to",["login"],[],0,null,["loc",[null,[28,10],[30,22]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 8
            },
            "end": {
              "line": 40,
              "column": 8
            }
          },
          "moduleName": "flamestack/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"href",".modalNuevaEntrada");
          dom.setAttribute(el2,"class","valign-wrapper black-text modal-trigger");
          var el3 = dom.createTextNode("Nueva ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3,"class","right material-icons");
          var el4 = dom.createTextNode("add");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 45,
              "column": 10
            },
            "end": {
              "line": 47,
              "column": 10
            }
          },
          "moduleName": "flamestack/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("Sign out");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["signOut"],[],["loc",[null,[46,15],[46,35]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.0.0",
            "loc": {
              "source": null,
              "start": {
                "line": 48,
                "column": 12
              },
              "end": {
                "line": 50,
                "column": 12
              }
            },
            "moduleName": "flamestack/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","t",["label.signIn"],[],["loc",[null,[49,14],[49,34]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 47,
              "column": 10
            },
            "end": {
              "line": 51,
              "column": 10
            }
          },
          "moduleName": "flamestack/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","link-to",["login"],[],0,null,["loc",[null,[48,12],[50,24]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.0.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 172,
            "column": 0
          }
        },
        "moduleName": "flamestack/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","navbar-fixed");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        dom.setAttribute(el2,"class","teal darken-2");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","brand-logo thin");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","valign-wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","logo-image");
        dom.setAttribute(el5,"src","/assets/img/book-logo.png");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","hide-on-small-only");
        var el6 = dom.createTextNode("Dichos Familiares");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","hide-on-med-and-up");
        var el6 = dom.createTextNode("Dichos Familiares");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Dropdown Structure ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"id","dropdown1");
        dom.setAttribute(el3,"class","dropdown-content");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","teal-text text-darken-4");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","divider");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","teal-text text-darken-4");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","right hide-on-med-and-down");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"id","slide-out");
        dom.setAttribute(el3,"class","side-nav");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","divider");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","divider");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","center-align");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6,"class","sidenav-img");
        dom.setAttribute(el6,"src","/assets/img/book-logo.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        dom.setAttribute(el3,"data-activates","slide-out");
        dom.setAttribute(el3,"class","button-collapse right");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","left mdi-navigation-menu");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal Trigger ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal Structure ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","modalNuevaEntrada");
        dom.setAttribute(el1,"class","modal modalNuevaEntrada");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","material-icons");
        var el5 = dom.createTextNode("add");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Compartir ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","input-field col s6");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6,"for","dicho");
        var el7 = dom.createTextNode("Dicho familiar");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","input-field col s4");
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-footer");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"class","waves-effect waves-green btn-flat green lighten-2 hoverable");
        var el4 = dom.createTextNode("¡Enviar!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"class","waves-effect waves-red btn-flat");
        var el4 = dom.createTextNode("Salir");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("\n  General use Yes/No modal\n\n  Button:\n  <a class=\"waves-effect waves-light btn modal-trigger\" href=\"#yesNoModal\">Modal</a>\n\n  Initialization:\n  // Modal config\n  $('.modal-trigger').leanModal();\n  $('.modal-trigger').leanModal({\n    dismissible: false, // Modal can be dismissed by clicking outside of the modal\n    opacity: .5, // Opacity of modal background\n    in_duration: 400, // Transition in duration\n    out_duration: 250, // Transition out duration\n\n    //ready: function() { alert('Ready'); }, // Callback for Modal open\n    complete: function() {\n      $('.lean-overlay').remove();\n    } // Callback for Modal close\n  });\n\n<div id=\"yesNoModal\" class=\"modal\">\n  <div class=\"modal-content\">\n    <h4>Are you sure?</h4>\n    <p>Please confirm your action</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a class=\"waves-effect waves-green btn-flat\" {{action 'yesToModal'}}>Yes</a>\n    <a class=\"waves-effect waves-red btn-flat\" {{action 'noToModal'}}>No</a>\n    <a class=\"hide modal-action modal-close waves-effect waves-red btn-flat\">No</a>\n  </div>\n</div>\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        dom.setAttribute(el1,"type","text/javascript");
        var el2 = dom.createTextNode("\n  $(document).ready(function(){\n\n    //Side nav config\n    $(\".button-collapse\").sideNav({\n      menuWidth: 220, // Default is 240\n      edge: 'right', // Choose the horizontal origin\n      closeOnClick: true // Closes side-nav on link clicks, useful for Angular/Meteor\n    });\n\n    //Language dropdown config\n    $('.dropdown-button').dropdown({\n        inDuration: 300,\n        outDuration: 225,\n        constrain_width: false, // Does not change width of dropdown to that of the activator\n        hover: false, // Activate on hover\n        gutter: 0, // Spacing from edge\n        belowOrigin: true, // Displays dropdown below the button\n        alignment: 'left' // Displays dropdown with edge aligned to the left of button\n      }\n    );\n\n    // the \"href\" attribute of .modal-trigger must specify the modal ID that wants to be triggered\n    $('.modal-trigger').leanModal();\n\n    // Modal config\n    // $('.modal-trigger').leanModal();\n    // $('.modal-trigger').leanModal({\n    //   dismissible: false, // Modal can be dismissed by clicking outside of the modal\n    //   opacity: .5, // Opacity of modal background\n    //   in_duration: 400, // Transition in duration\n    //   out_duration: 250, // Transition out duration\n\n      //ready: function() { alert('Ready'); }, // Callback for Modal open\n    //   complete: function() {\n    //     $('.lean-overlay').remove();\n    //   } // Callback for Modal close\n    // }\n  // );\n  });\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0, 1]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element2, [6]);
        var element5 = dom.childAt(element4, [1, 0]);
        var element6 = dom.childAt(element4, [5, 0]);
        var element7 = dom.childAt(element2, [8]);
        var element8 = dom.childAt(element2, [10]);
        var element9 = dom.childAt(element8, [1]);
        var element10 = dom.childAt(element8, [3, 3, 1]);
        var element11 = dom.childAt(fragment, [8]);
        var element12 = dom.childAt(element11, [1, 5, 1, 1]);
        var element13 = dom.childAt(element11, [3]);
        var element14 = dom.childAt(element13, [1]);
        var element15 = dom.childAt(element13, [3]);
        var morphs = new Array(15);
        morphs[0] = dom.createElementMorph(element3);
        morphs[1] = dom.createElementMorph(element5);
        morphs[2] = dom.createMorphAt(element5,0,0);
        morphs[3] = dom.createElementMorph(element6);
        morphs[4] = dom.createMorphAt(element6,0,0);
        morphs[5] = dom.createMorphAt(element7,1,1);
        morphs[6] = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
        morphs[7] = dom.createMorphAt(element9,1,1);
        morphs[8] = dom.createMorphAt(dom.childAt(element9, [5]),1,1);
        morphs[9] = dom.createElementMorph(element10);
        morphs[10] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[11] = dom.createMorphAt(element12,1,1);
        morphs[12] = dom.createMorphAt(dom.childAt(element12, [5]),1,1);
        morphs[13] = dom.createElementMorph(element14);
        morphs[14] = dom.createElementMorph(element15);
        return morphs;
      },
      statements: [
        ["element","action",["redirectHome"],[],["loc",[null,[4,34],[4,59]]]],
        ["element","action",["setLocale","en"],[],["loc",[null,[14,47],[14,74]]]],
        ["inline","t",["lang.english"],[],["loc",[null,[14,75],[14,95]]]],
        ["element","action",["setLocale","es"],[],["loc",[null,[16,47],[16,74]]]],
        ["inline","t",["lang.spanish"],[],["loc",[null,[16,75],[16,95]]]],
        ["block","if",[["get","session.isAuthenticated",["loc",[null,[19,12],[19,35]]]]],[],0,null,["loc",[null,[19,6],[23,13]]]],
        ["block","if",[["get","session.isAuthenticated",["loc",[null,[25,14],[25,37]]]]],[],1,2,["loc",[null,[25,8],[31,15]]]],
        ["block","if",[["get","session.isAuthenticated",["loc",[null,[36,14],[36,37]]]]],[],3,null,["loc",[null,[36,8],[40,15]]]],
        ["block","if",[["get","session.isAuthenticated",["loc",[null,[45,16],[45,39]]]]],[],4,5,["loc",[null,[45,10],[51,17]]]],
        ["element","action",["redirectHome"],[],["loc",[null,[58,67],[58,92]]]],
        ["content","outlet",["loc",[null,[67,2],[67,12]]]],
        ["inline","input",[],["placeholder","Escribe aquí tu frase","id","dicho","type","text","class","validate","autofocus","true","value",["subexpr","@mut",[["get","model.frase",["loc",[null,[80,117],[80,128]]]]],[],[]]],["loc",[null,[80,10],[80,130]]]],
        ["inline","input",[],["placeholder","Autor","id","autor","type","text","class","validate","value",["subexpr","@mut",[["get","model.author",["loc",[null,[84,84],[84,96]]]]],[],[]]],["loc",[null,[84,10],[84,98]]]],
        ["element","action",["sendNewEntry"],[],["loc",[null,[91,77],[91,102]]]],
        ["element","action",["closeNewEntryModal"],[],["loc",[null,[92,49],[92,80]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  }()));

});
define('flamestack/templates/components/labeled-radio-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "flamestack/templates/components/labeled-radio-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","radio-button",[],["radioClass",["subexpr","@mut",[["get","radioClass",["loc",[null,[2,15],[2,25]]]]],[],[]],"radioId",["subexpr","@mut",[["get","radioId",["loc",[null,[3,12],[3,19]]]]],[],[]],"changed","innerRadioChanged","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[5,13],[5,21]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[6,15],[6,25]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,9],[7,13]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[8,13],[8,21]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[9,10],[9,15]]]]],[],[]]],["loc",[null,[1,0],[9,17]]]],
        ["content","yield",["loc",[null,[11,0],[11,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('flamestack/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, template) {

	'use strict';

	exports['default'] = template['default'];

});
define('flamestack/templates/components/radio-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "flamestack/templates/components/radio-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,1,1);
          morphs[3] = dom.createMorphAt(element0,3,3);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["ember-radio-button ",["subexpr","if",[["get","checked",["loc",[null,[2,40],[2,47]]]],"checked"],[],["loc",[null,[2,35],[2,59]]]]," ",["get","joinedClassNames",["loc",[null,[2,62],[2,78]]]]]]],
          ["attribute","for",["get","radioId",["loc",[null,[2,88],[2,95]]]]],
          ["inline","radio-button-input",[],["class",["subexpr","@mut",[["get","radioClass",["loc",[null,[4,14],[4,24]]]]],[],[]],"id",["subexpr","@mut",[["get","radioId",["loc",[null,[5,11],[5,18]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[6,17],[6,25]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,13],[7,17]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[8,17],[8,25]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[9,19],[9,29]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[10,14],[10,19]]]]],[],[]],"changed","changed"],["loc",[null,[3,4],[11,27]]]],
          ["content","yield",["loc",[null,[13,4],[13,13]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "flamestack/templates/components/radio-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","radio-button-input",[],["class",["subexpr","@mut",[["get","radioClass",["loc",[null,[17,12],[17,22]]]]],[],[]],"id",["subexpr","@mut",[["get","radioId",["loc",[null,[18,9],[18,16]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[19,15],[19,23]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[20,11],[20,15]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[21,15],[21,23]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[22,17],[22,27]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[23,12],[23,17]]]]],[],[]],"changed","changed"],["loc",[null,[16,2],[24,25]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.0.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "flamestack/templates/components/radio-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasBlock",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[25,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('flamestack/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 14
            },
            "end": {
              "line": 36,
              "column": 14
            }
          },
          "moduleName": "flamestack/templates/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","collection-item");
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          dom.setAttribute(el2,"class","thin");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("small");
          var el3 = dom.createElement("i");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","right");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3,"class","material-icons");
          var el4 = dom.createTextNode("thumb_up");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 0]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
          return morphs;
        },
        statements: [
          ["content","item.frase",["loc",[null,[30,35],[30,49]]]],
          ["content","item.author",["loc",[null,[31,28],[31,43]]]],
          ["content","item.votos",["loc",[null,[33,20],[33,34]]]]
        ],
        locals: ["item"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.0.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 105,
            "column": 0
          }
        },
        "moduleName": "flamestack/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","index-page");
        dom.setAttribute(el1,"class","page");
        var el2 = dom.createTextNode("\n\n  \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","section no-pad-bot");
        dom.setAttribute(el2,"id","index-banner");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"id","jumpTitle");
        dom.setAttribute(el4,"class","header center red-text text-darken-3");
        var el5 = dom.createTextNode("Golden Rule Feed");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"id","jumpRow");
        dom.setAttribute(el4,"class","row center");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h5");
        dom.setAttribute(el5,"class","header col s12 light");
        var el6 = dom.createTextNode("Recopilamos lo aprendido y compartimos la reflexión");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","section");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("   Icon Section   ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col s12 m4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","icon-block");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h2");
        dom.setAttribute(el7,"class","center red-text");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"id","pulseClick1");
        dom.setAttribute(el8,"class","material-icons large");
        var el9 = dom.createTextNode("flash_on");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h5");
        dom.setAttribute(el7,"class","center");
        var el8 = dom.createTextNode("Top 5");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7,"class","light");
        var el8 = dom.createTextNode("\n                          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7,"class","collection");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col s12 m4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","icon-block");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h2");
        dom.setAttribute(el7,"class","center green-text");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"id","pulseClick2");
        dom.setAttribute(el8,"class","material-icons large");
        var el9 = dom.createTextNode("group");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h5");
        dom.setAttribute(el7,"class","center");
        var el8 = dom.createTextNode("Últimos 5");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7,"class","light");
        var el8 = dom.createTextNode("By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col s12 m4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","icon-block");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h2");
        dom.setAttribute(el7,"class","center orange-text");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"id","pulseClick3");
        dom.setAttribute(el8,"class","material-icons large");
        var el9 = dom.createTextNode("settings");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h5");
        dom.setAttribute(el7,"class","center");
        var el8 = dom.createTextNode("Tus Frases");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7,"class","light");
        var el8 = dom.createTextNode("We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","section");
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("footer");
        dom.setAttribute(el2,"class","page-footer teal");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col l6 s12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h5");
        dom.setAttribute(el6,"class","white-text");
        var el7 = dom.createTextNode("Compartiendo lo aprendido");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","grey-text text-lighten-4");
        var el7 = dom.createTextNode(" - A la cama siempre te irás sabiendo un par de cosas más. - ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col l3 s12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h5");
        dom.setAttribute(el6,"class","white-text");
        var el7 = dom.createTextNode("Top 5");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","white-text");
        dom.setAttribute(el8,"href","#!");
        var el9 = dom.createTextNode("Link 1");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","white-text");
        dom.setAttribute(el8,"href","#!");
        var el9 = dom.createTextNode("Link 2");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","white-text");
        dom.setAttribute(el8,"href","#!");
        var el9 = dom.createTextNode("Link 3");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","white-text");
        dom.setAttribute(el8,"href","#!");
        var el9 = dom.createTextNode("Link 4");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col l3 s12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h5");
        dom.setAttribute(el6,"class","white-text");
        var el7 = dom.createTextNode("Links Interesantes");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","white-text");
        dom.setAttribute(el8,"href","#!");
        var el9 = dom.createTextNode("Link 1");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","white-text");
        dom.setAttribute(el8,"href","#!");
        var el9 = dom.createTextNode("Link 2");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","white-text");
        dom.setAttribute(el8,"href","#!");
        var el9 = dom.createTextNode("Link 3");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8,"class","white-text");
        dom.setAttribute(el8,"href","#!");
        var el9 = dom.createTextNode("Link 4");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","footer-copyright");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","container");
        var el5 = dom.createTextNode("\n      Make it easy. ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("small");
        var el6 = dom.createTextNode("Bee happy");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1, 1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element2, [3]);
        var element5 = dom.childAt(element1, [3, 1, 3]);
        var element6 = dom.childAt(element5, [1, 1]);
        var element7 = dom.childAt(element6, [1, 0]);
        var element8 = dom.childAt(element5, [3, 1, 1, 0]);
        var element9 = dom.childAt(element5, [5, 1, 1, 0]);
        var morphs = new Array(6);
        morphs[0] = dom.createElementMorph(element3);
        morphs[1] = dom.createElementMorph(element4);
        morphs[2] = dom.createElementMorph(element7);
        morphs[3] = dom.createMorphAt(dom.childAt(element6, [7]),1,1);
        morphs[4] = dom.createElementMorph(element8);
        morphs[5] = dom.createElementMorph(element9);
        return morphs;
      },
      statements: [
        ["element","action",["focus","jumpTitle","bounce","slow"],[],["loc",[null,[6,70],[6,116]]]],
        ["element","action",["focus","jumpRow","swing","slow"],[],["loc",[null,[7,43],[7,86]]]],
        ["element","action",["focus","pulseClick1","flash"],[],["loc",[null,[22,89],[22,129]]]],
        ["block","each",[["get","model",["loc",[null,[28,22],[28,27]]]]],[],0,null,["loc",[null,[28,14],[36,23]]]],
        ["element","action",["focus","pulseClick2","jello","slow"],[],["loc",[null,[43,91],[43,138]]]],
        ["element","action",["focus","pulseClick3","bounce"],[],["loc",[null,[52,92],[52,133]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('flamestack/templates/loading', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "flamestack/templates/loading.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col s4 offset-s4 center-align");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","/assets/loaders/382.GIF");
        dom.setAttribute(el4,"height","80");
        dom.setAttribute(el4,"width","80");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h5");
        dom.setAttribute(el4,"class","thin");
        var el5 = dom.createElement("i");
        var el6 = dom.createTextNode("...Cargando...");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('flamestack/templates/login', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 45,
            "column": 0
          }
        },
        "moduleName": "flamestack/templates/login.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","login-page");
        dom.setAttribute(el1,"class","container page");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col s12 m6 center-align");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(":");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","waves-effect waves-light btn-large valign-wrapper full-width green lighten-1");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","assets/img/social/git.png");
        dom.setAttribute(el5,"alt","github");
        dom.setAttribute(el5,"height","50px");
        dom.setAttribute(el5,"class","left");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        var el6 = dom.createTextNode("Github");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","waves-effect waves-light btn-large valign-wrapper full-width blue lighten-1");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","assets/img/social/face.png");
        dom.setAttribute(el5,"alt","github");
        dom.setAttribute(el5,"height","50px");
        dom.setAttribute(el5,"class","left");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        var el6 = dom.createTextNode("Facebook");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","waves-effect waves-light btn-large valign-wrapper full-width light-blue lighten-1");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","assets/img/social/twit.png");
        dom.setAttribute(el5,"alt","github");
        dom.setAttribute(el5,"height","50px");
        dom.setAttribute(el5,"class","left");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        var el6 = dom.createTextNode("Twitter");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","waves-effect waves-light btn-large valign-wrapper full-width red lighten-1");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"src","assets/img/social/goo.png");
        dom.setAttribute(el5,"alt","github");
        dom.setAttribute(el5,"height","50px");
        dom.setAttribute(el5,"class","left");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        var el6 = dom.createTextNode("Google");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col s12 m6 center-align");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.setAttribute(el4,"class","hide-on-med-and-up");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("Login Info");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","flow-text");
        var el5 = dom.createTextNode("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 5, 1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [9]);
        var element3 = dom.childAt(element0, [15]);
        var element4 = dom.childAt(element0, [21]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createElementMorph(element2);
        morphs[3] = dom.createElementMorph(element3);
        morphs[4] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [
        ["inline","t",["login.required"],[],["loc",[null,[9,10],[9,32]]]],
        ["element","action",["signIn","github"],[],["loc",[null,[10,96],[10,124]]]],
        ["element","action",["signIn","facebook"],[],["loc",[null,[16,95],[16,125]]]],
        ["element","action",["signIn","twitter"],[],["loc",[null,[22,101],[22,130]]]],
        ["element","action",["signIn","google"],[],["loc",[null,[28,94],[28,122]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('flamestack/templates/unknown', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "flamestack/templates/unknown.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","no-page-found center-align");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","no-page-label");
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","assets/img/404/woody-404.png");
        dom.setAttribute(el2,"alt","Page not found!");
        dom.setAttribute(el2,"class","responsive-img");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","veil");
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('flamestack/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nadapters/application.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nadapters/application.js: line 4, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nadapters/application.js: line 4, col 1, \'destructuring expression\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nadapters/application.js: line 6, col 1, \'export\' is only available in ES6 (use esnext option).\n\n5 errors'); 
  });

});
define('flamestack/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 4, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use esnext option).\n\n5 errors'); 
  });

});
define('flamestack/tests/controllers/admin.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/admin.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'controllers/admin.js should pass jshint.\ncontrollers/admin.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncontrollers/admin.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\ncontrollers/admin.js: line 87, col 11, Missing semicolon.\n\n3 errors'); 
  });

});
define('flamestack/tests/controllers/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/index.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncontrollers/index.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/helpers/ember-i18n/test-helpers', ['ember'], function (Ember) {

  'use strict';

  Ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();

});
define('flamestack/tests/helpers/resolver', ['exports', 'ember/resolver', 'flamestack/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('flamestack/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('flamestack/tests/helpers/role-level.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/role-level.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'helpers/role-level.js should pass jshint.\nhelpers/role-level.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nhelpers/role-level.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nhelpers/role-level.js: line 11, col 20, Use \'===\' to compare with \'0\'.\nhelpers/role-level.js: line 18, col 1, \'export\' is only available in ES6 (use esnext option).\n\n4 errors'); 
  });

});
define('flamestack/tests/helpers/start-app', ['exports', 'ember', 'flamestack/app', 'flamestack/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('flamestack/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('flamestack/tests/helpers/torii', ['exports'], function (exports) {

  'use strict';

  exports.stubValidSession = stubValidSession;

  function stubValidSession(application, sessionData) {
    var session = application.__container__.lookup('service:session');
    var sm = session.get('stateMachine');
    Ember.run(function () {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }

});
define('flamestack/tests/initializers/animate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/animate.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'initializers/animate.js should pass jshint.\ninitializers/animate.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/animate.js: line 6, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/initializers/datapoint.jshint', function () {

  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/datapoint.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'initializers/datapoint.js should pass jshint.\ninitializers/datapoint.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/datapoint.js: line 7, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/initializers/i18n.jshint', function () {

  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/i18n.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'initializers/i18n.js should pass jshint.\ninitializers/i18n.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/i18n.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/initializers/toast.jshint', function () {

  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/toast.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'initializers/toast.js should pass jshint.\ninitializers/toast.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/toast.js: line 7, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/locales/en/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/en');
  QUnit.test('locales/en/config.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'locales/en/config.js should pass jshint.\nlocales/en/config.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\n\n1 error'); 
  });

});
define('flamestack/tests/locales/en/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/en');
  QUnit.test('locales/en/translations.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'locales/en/translations.js should pass jshint.\nlocales/en/translations.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\n\n1 error'); 
  });

});
define('flamestack/tests/locales/es/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/es');
  QUnit.test('locales/es/config.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'locales/es/config.js should pass jshint.\nlocales/es/config.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\n\n1 error'); 
  });

});
define('flamestack/tests/locales/es/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/es');
  QUnit.test('locales/es/translations.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'locales/es/translations.js should pass jshint.\nlocales/es/translations.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\n\n1 error'); 
  });

});
define('flamestack/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 14, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
  });

});
define('flamestack/tests/routes/admin.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/admin.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'routes/admin.js should pass jshint.\nroutes/admin.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/admin.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/admin.js: line 46, col 118, Missing semicolon.\n\n3 errors'); 
  });

});
define('flamestack/tests/routes/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/application.js: line 4, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/application.js: line 29, col 6, Missing semicolon.\nroutes/application.js: line 113, col 8, Missing semicolon.\n\n4 errors'); 
  });

});
define('flamestack/tests/routes/base.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/base.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'routes/base.js should pass jshint.\nroutes/base.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/base.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/routes/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/index.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/routes/login.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/login.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass jshint.\nroutes/login.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/login.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/routes/unknown.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/unknown.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'routes/unknown.js should pass jshint.\nroutes/unknown.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/unknown.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/services/animate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/animate.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'services/animate.js should pass jshint.\nservices/animate.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nservices/animate.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/services/datapoint.jshint', function () {

  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/datapoint.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'services/datapoint.js should pass jshint.\nservices/datapoint.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nservices/datapoint.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nservices/datapoint.js: line 69, col 31, [\'login\'] is better written in dot notation.\nservices/datapoint.js: line 74, col 32, [\'login\'] is better written in dot notation.\nservices/datapoint.js: line 244, col 21, \'arrData\' is already defined.\nservices/datapoint.js: line 246, col 21, \'arrData\' is already defined.\nservices/datapoint.js: line 251, col 21, \'arrData\' used out of scope.\nservices/datapoint.js: line 252, col 90, \'arrData\' used out of scope.\nservices/datapoint.js: line 254, col 61, \'arrData\' used out of scope.\nservices/datapoint.js: line 397, col 8, Unnecessary semicolon.\nservices/datapoint.js: line 431, col 8, Unnecessary semicolon.\nservices/datapoint.js: line 463, col 8, Unnecessary semicolon.\n\n12 errors'); 
  });

});
define('flamestack/tests/services/toast.jshint', function () {

  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/toast.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'services/toast.js should pass jshint.\nservices/toast.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nservices/toast.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('flamestack/tests/test-helper', ['flamestack/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('flamestack/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('flamestack/tests/torii-adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - torii-adapters');
  QUnit.test('torii-adapters/application.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'torii-adapters/application.js should pass jshint.\ntorii-adapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ntorii-adapters/application.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\ntorii-adapters/application.js: line 6, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
  });

});
define('flamestack/tests/unit/helpers/role-level-test', ['flamestack/helpers/role-level', 'qunit'], function (role_level, qunit) {

  'use strict';

  qunit.module('Unit | Helper | role level');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = role_level.roleLevel(42);
    assert.ok(result);
  });

});
define('flamestack/tests/unit/helpers/role-level-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/role-level-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/helpers/role-level-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/initializers/animate-test', ['ember', 'flamestack/initializers/animate', 'qunit'], function (Ember, animate, qunit) {

  'use strict';

  var registry, application;

  qunit.module('Unit | Initializer | animate', {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        registry = application.registry;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    animate.initialize(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('flamestack/tests/unit/initializers/animate-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/animate-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/initializers/animate-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/initializers/datapoint-test', ['ember', 'flamestack/initializers/datapoint', 'qunit'], function (Ember, datapoint, qunit) {

  'use strict';

  var registry, application;

  qunit.module('Unit | Initializer | datapoint', {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        registry = application.registry;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    datapoint.initialize(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('flamestack/tests/unit/initializers/datapoint-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/datapoint-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/initializers/datapoint-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/initializers/i18n-test', ['ember', 'flamestack/initializers/i18n', 'qunit'], function (Ember, i18n, qunit) {

  'use strict';

  var registry, application;

  qunit.module('Unit | Initializer | i18n', {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        registry = application.registry;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    i18n.initialize(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('flamestack/tests/unit/initializers/i18n-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/i18n-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/initializers/i18n-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/initializers/toast-test', ['ember', 'flamestack/initializers/toast', 'qunit'], function (Ember, toast, qunit) {

  'use strict';

  var registry, application;

  qunit.module('Unit | Initializer | toast', {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        registry = application.registry;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    toast.initialize(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('flamestack/tests/unit/initializers/toast-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/toast-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/initializers/toast-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/routes/admin-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:admin', 'Unit | Route | admin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('flamestack/tests/unit/routes/admin-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/admin-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/routes/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('flamestack/tests/unit/routes/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/routes/base-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:base', 'Unit | Route | base', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('flamestack/tests/unit/routes/base-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/base-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/routes/base-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('flamestack/tests/unit/routes/index-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/index-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/routes/login-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('flamestack/tests/unit/routes/login-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/login-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/routes/unknown-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:unknown', 'Unit | Route | unknown', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('flamestack/tests/unit/routes/unknown-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/unknown-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/routes/unknown-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/services/animate-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('service:animate', 'Unit | Service | animate', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

});
define('flamestack/tests/unit/services/animate-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/animate-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/services/animate-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/services/datapoint-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('service:datapoint', 'Unit | Service | datapoint', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

});
define('flamestack/tests/unit/services/datapoint-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/datapoint-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/services/datapoint-test.js should pass jshint.'); 
  });

});
define('flamestack/tests/unit/services/toast-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('service:toast', 'Unit | Service | toast', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

});
define('flamestack/tests/unit/services/toast-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/toast-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/services/toast-test.js should pass jshint.'); 
  });

});
define('flamestack/torii-adapters/application', ['exports', 'ember', 'emberfire/torii-adapters/firebase'], function (exports, Ember, ToriiFirebaseAdapter) {

  'use strict';

  exports['default'] = ToriiFirebaseAdapter['default'].extend({
    firebase: Ember['default'].inject.service()
  });

});
define('flamestack/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, FirebaseProvider) {

	'use strict';

	exports['default'] = FirebaseProvider['default'];

});
define('flamestack/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, compile_template) {

	'use strict';



	exports['default'] = compile_template['default'];

});
define('flamestack/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, missing_message) {

	'use strict';



	exports['default'] = missing_message['default'];

});
define('flamestack/views/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].View.extend({});

});
define('flamestack/views/default-collection-header', ['exports', 'ember-cli-materialize/views/default-collection-header'], function (exports, default_collection_header) {

	'use strict';



	exports['default'] = default_collection_header['default'];

});
define('flamestack/views/default-column-header', ['exports', 'ember-cli-materialize/views/default-column-header'], function (exports, default_column_header) {

	'use strict';



	exports['default'] = default_column_header['default'];

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('flamestack/config/environment', ['ember'], function(Ember) {
  var prefix = 'flamestack';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("flamestack/tests/test-helper");
} else {
  require("flamestack/app")["default"].create({"name":"flamestack","version":"0.0.0+71e40513"});
}

/* jshint ignore:end */
//# sourceMappingURL=flamestack.map