define('ember-modal-dialog/components/positioned-container', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var computed = Ember['default'].computed;
  var observer = Ember['default'].observer;
  var on = Ember['default'].on;

  exports['default'] = Ember['default'].Component.extend({

    alignmentTarget: null, // element selector, element, or Ember View passed in
    alignment: null, // passed in; valid values are:
    // left, right, top, bottom (relative to alignmentTarget)
    // center (relative to container)
    isPositioned: computed('alignment', 'alignmentTarget', function () {
      if (this.get('alignmentTarget') && this.get('alignment')) {
        return true;
      }
      return this.get('alignment') === 'center';
    }),

    didGetPositioned: observer('isPositioned', on('didInsertElement', function () {
      if (this._state !== 'inDOM') {
        return;
      }

      if (this.get('isPositioned')) {
        this.updateAlignment();
      } else {
        this.$().css('left', '').css('top', '');
      }
    })),

    getWrappedAlignmentElement: function getWrappedAlignmentElement() {
      var alignmentTarget = this.get('alignmentTarget');
      if (!alignmentTarget) {
        return null;
      }

      if (Ember['default'].typeOf(alignmentTarget) === 'string') {
        var alignmentTargetSelector = alignmentTarget;
        var wrappedElement = Ember['default'].$(alignmentTargetSelector).eq(0);
        Ember['default'].assert('No element found for modal-dialog\'s alignmentTarget selector \'' + alignmentTargetSelector + '\'.', wrappedElement); // '
        return wrappedElement;
      }

      // passed an ember view or component
      if (alignmentTarget.element) {
        return Ember['default'].$(alignmentTarget.element);
      }

      // passed an element directly
      return Ember['default'].$(alignmentTarget);
    },

    //TODO: Add resize and scroll handlers
    updateAlignment: function updateAlignment() {
      var alignment = this.get('alignment');
      var alignmentMethod = 'align' + Ember['default'].String.capitalize(alignment);
      var alignmentElement = this.getWrappedAlignmentElement();

      this[alignmentMethod](alignmentElement);
    },

    alignCenter: function alignCenter() {
      var elementWidth = this.$().outerWidth();
      var elementHeight = this.$().outerHeight();

      this.$().css('left', '50%').css('top', '50%').css('margin-left', elementWidth * -0.5).css('margin-top', elementHeight * -0.5);
    },

    alignLeft: function alignLeft(alignmentElement) {
      Ember['default'].assert('Left alignment requires a target', alignmentElement.length > 0);

      var elementWidth = this.$().outerWidth();
      var originOffset = alignmentElement.offset();
      var originOffsetTop = originOffset.top - Ember['default'].$(window).scrollTop();

      this.$().css('left', originOffset.left - elementWidth).css('top', originOffsetTop);
    },

    alignRight: function alignRight(alignmentElement) {
      Ember['default'].assert('Right alignment requires a target', alignmentElement.length > 0);

      var targetWidth = alignmentElement.outerWidth();
      var originOffset = alignmentElement.offset();
      var originOffsetTop = originOffset.top - Ember['default'].$(window).scrollTop();

      this.$().css('left', originOffset.left + targetWidth).css('top', originOffsetTop);
    },

    alignTop: function alignTop(alignmentElement) {
      Ember['default'].assert('Top alignment requires a target', alignmentElement.length > 0);

      var elementWidth = this.$().outerWidth();
      var elementHeight = this.$().outerHeight();
      var originOffset = alignmentElement.offset();
      var originOffsetTop = originOffset.top - Ember['default'].$(window).scrollTop();
      var targetWidth = alignmentElement.outerWidth();

      this.$().css('left', originOffset.left + targetWidth / 2 - elementWidth / 2).css('top', originOffsetTop - elementHeight);
    },

    alignBottom: function alignBottom(alignmentElement) {
      Ember['default'].assert('Bottom alignment requires a target', alignmentElement.length > 0);

      var elementWidth = this.$().outerWidth();
      var originOffset = alignmentElement.offset();
      var originOffsetTop = originOffset.top - Ember['default'].$(window).scrollTop();
      var targetWidth = alignmentElement.outerWidth();
      var targetHeight = alignmentElement.outerHeight();

      this.$().css('left', originOffset.left + targetWidth / 2 - elementWidth / 2).css('top', originOffsetTop + targetHeight);
    }
  });

});