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
          "line": 4,
          "column": 0
        }
      },
      "moduleName": "modules/ember-cli-materialize/templates/components/md-tab.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("a");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(2);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createMorphAt(element0,1,1);
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",[["subexpr","if",[["get","active",["loc",[null,[1,15],[1,21]]]],"active"],[],["loc",[null,[1,10],[1,32]]]]]]],
      ["content","title",["loc",[null,[2,2],[2,11]]]]
    ],
    locals: [],
    templates: []
  };
}()));