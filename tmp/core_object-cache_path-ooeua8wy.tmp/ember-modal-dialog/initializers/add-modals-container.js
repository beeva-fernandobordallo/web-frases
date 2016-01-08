define('ember-modal-dialog/initializers/add-modals-container', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  /*globals document */
  var hasDOM = typeof document !== 'undefined';

  function appendContainerElement(rootElementId, id) {
    if (!hasDOM) {
      return;
    }

    var rootEl = document.querySelector(rootElementId);
    var modalContainerEl = document.createElement('div');
    modalContainerEl.id = id;
    rootEl.appendChild(modalContainerEl);
  }

  exports['default'] = function (container, application) {
    var emberModalDialog = application.emberModalDialog || {};
    var modalContainerElId = emberModalDialog.modalRootElementId || 'modal-overlays';

    application.register('config:modals-container-id', modalContainerElId, { instantiate: false });

    application.inject('service:modal-dialog', 'destinationElementId', 'config:modals-container-id');

    var useEmberTether = application.MODAL_DIALOG_USE_TETHER;
    if (useEmberTether === undefined) {
      useEmberTether = Ember['default'].isPresent(container.resolve('component:ember-tether'));
    }
    application.register('config:use-ember-tether', useEmberTether, { instantiate: false });

    application.inject('service:modal-dialog', 'useEmberTether', 'config:use-ember-tether');

    appendContainerElement(application.rootElement, modalContainerElId);
  }

});