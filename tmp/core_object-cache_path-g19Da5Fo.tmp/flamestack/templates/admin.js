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