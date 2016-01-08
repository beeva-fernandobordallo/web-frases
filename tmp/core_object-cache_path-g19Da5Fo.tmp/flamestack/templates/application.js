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