export default Ember.HTMLBars.template((function() {
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
          "line": 1,
          "column": 19
        }
      },
      "moduleName": "modules/ember-cli-materialize/templates/default-collection-header.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h4");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      return morphs;
    },
    statements: [
      ["content","header",["loc",[null,[1,4],[1,14]]]]
    ],
    locals: [],
    templates: []
  };
}()));