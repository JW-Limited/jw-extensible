/*
   ------------------------------------------------------------------------------
   Copyright (c) 2024 JW Limited. All rights reserved.

   Project: jw eXtensible (based on html)
   Module: compiler
   File: manager.js
   Company: JW Limited (licensed)
   Author: Joe Valentino Lengefeld (CEO)

   This software is proprietary to JW Limited and constitutes valuable 
   intellectual property. It is entrusted solely to employees named above
   and may not be disclosed, copied, reproduced, transmitted, or used in 
   any manner outside of the scope of its license without prior written
   authorization from JW Limited.

   ------------------------------------------------------------------------------
*/

"use strict";

function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    _extends.apply(null, arguments)
  );
}
function _createForOfIteratorHelperLoose(r, e) {
  var t =
    ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (
    Array.isArray(r) ||
    (t = _unsupportedIterableToArray(r)) ||
    (e && r && "number" == typeof r.length)
  ) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] };
    };
  }
  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      "Object" === t && r.constructor && (t = r.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(r)
        : "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _regeneratorRuntime() {
  "use strict";
   _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }),
      t[e]
    );
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: "normal", arg: t.call(e, r) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await")
          ? e.resolve(h.__await).then(
              function (t) {
                invoke("next", t, i, a);
              },
              function (t) {
                invoke("throw", t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke("throw", t, i, a);
              }
            );
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ("throw" === n &&
          e.iterator["return"] &&
          ((r.method = "return"),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          "throw" === r.method)) ||
          ("return" !== n &&
            ((r.method = "throw"),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method"
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type)
      return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }),
    o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction"
    )),
    (e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          "GeneratorFunction" === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, "Generator"),
    define(g, a, function () {
      return this;
    }),
    define(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = "throw"),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          "next" === this.method && (this.arg = t),
          y
        );
      }
    }),
    e
  );
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
var ComponentManager = /*#__PURE__*/ (function () {
  function ComponentManager() {
    var _this = this;
    this.components = {};
    this.globalState = {};
    this.helpers = {
      if: function _if(condition, trueValue, falseValue) {
        return condition ? trueValue : falseValue;
      },
      forEach: function forEach(array, template) {
        return array
          .map(function (item) {
            return _this.evaluateExpression(template, item);
          })
          .join("");
      },
      toUpperCase: function toUpperCase(str) {
        return str.toUpperCase();
      },
      toLowerCase: function toLowerCase(str) {
        return str.toLowerCase();
      },
      formatDate: function formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
      range: function range(start, end) {
        return Array.from(
          {
            length: end - start + 1
          },
          function (_, i) {
            return start + i;
          }
        );
      },
      sum: function sum(array) {
        return array.reduce(function (a, b) {
          return a + b;
        }, 0);
      },
      avg: function avg(array) {
        return (
          array.reduce(function (a, b) {
            return a + b;
          }, 0) / array.length
        );
      },
      stringFormat: function stringFormat(str) {
        for (
          var _len = arguments.length,
            args = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }
        return str.replace(/{(\d+)}/g, function (match, number) {
          return args[number] !== undefined ? args[number] : match;
        });
      },
      debounce: function debounce(func, delay) {
        var timeoutId;
        return function () {
          for (
            var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2] = arguments[_key2];
          }
          clearTimeout(timeoutId);
          timeoutId = setTimeout(function () {
            return func.apply(void 0, args);
          }, delay);
        };
      }
    };
  }
  var _proto = ComponentManager.prototype;
  _proto.loadComponent = /*#__PURE__*/ (function () {
    var _loadComponent = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(name) {
        var response, html, parsedComponent;
        return _regeneratorRuntime().wrap(
          function _callee$(_context) {
            while (1)
              switch ((_context.prev = _context.next)) {
                case 0:
                  if (!this.components[name]) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return", this.components[name]);
                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return fetch("/components/" + name + ".jwx");
                case 5:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 8;
                    break;
                  }
                  throw new Error("Failed to load component: " + name);
                case 8:
                  _context.next = 10;
                  return response.text();
                case 10:
                  html = _context.sent;
                  parsedComponent = this.parseComponent(html);
                  this.components[name] = parsedComponent;
                  return _context.abrupt("return", parsedComponent);
                case 16:
                  _context.prev = 16;
                  _context.t0 = _context["catch"](2);
                  console.error(
                    "Error loading component " + name + ":",
                    _context.t0
                  );
                  return _context.abrupt("return", null);
                case 20:
                case "end":
                  return _context.stop();
              }
          },
          _callee,
          this,
          [[2, 16]]
        );
      })
    );
    function loadComponent(_x) {
      return _loadComponent.apply(this, arguments);
    }
    return loadComponent;
  })();
  _proto.parseComponent = function parseComponent(html) {
    var _this2 = this;
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    var componentElement = doc.body.firstElementChild;
    if (!componentElement || !componentElement.hasAttribute("component")) {
      throw new Error("Invalid component structure");
    }
    var componentName = componentElement.getAttribute("component");
    var props = this.extractProps(componentElement);
    var content = componentElement.innerHTML;
    var scripts = this.extractScripts(componentElement);
    var styles = this.extractStyles(componentElement);
    var subcomponents = this.extractSubcomponents(componentElement);
    return {
      name: componentName,
      props: props,
      content: content,
      scripts: scripts,
      styles: styles,
      subcomponents: subcomponents,
      render: function render(data, parentContext) {
        return _this2.renderComponent(
          componentName,
          content,
          props,
          data,
          scripts,
          styles,
          subcomponents,
          parentContext
        );
      }
    };
  };
  _proto.extractProps = function extractProps(element) {
    var props = {};
    for (
      var _iterator = _createForOfIteratorHelperLoose(element.attributes, true),
        _step;
      !(_step = _iterator()).done;

    ) {
      var attr = _step.value;
      if (attr.name.startsWith("prop-")) {
        var propName = attr.name.slice(5);
        var _attr$value$split = attr.value.split(":"),
          defaultValue = _attr$value$split[0],
          type = _attr$value$split[1],
          validations = _attr$value$split[2];
        props[propName] = {
          default: defaultValue,
          required: defaultValue.startsWith("!"),
          type: type || "string",
          validations: validations ? validations.split("|") : []
        };
      }
    }
    return props;
  };
  _proto.extractScripts = function extractScripts(element) {
    var scripts = {
      init: [],
      render: [],
      methods: {},
      computed: {},
      watch: {}
    };
    element.querySelectorAll("script").forEach(function (script) {
      var type = script.getAttribute("component-script");
      if (type === "init" || type === "render") {
        scripts[type].push(script.textContent);
      } else if (
        type === "methods" ||
        type === "computed" ||
        type === "watch"
      ) {
        scripts[type] = _extends(
          {},
          scripts[type],
          JSON.parse(script.textContent)
        );
      }
      script.remove();
    });
    return scripts;
  };
  _proto.extractStyles = function extractStyles(element) {
    var styles = [];
    element.querySelectorAll("style").forEach(function (style) {
      styles.push(style.textContent);
      style.remove();
    });
    return styles;
  };
  _proto.extractSubcomponents = function extractSubcomponents(element) {
    var subcomponents = {};
    element.querySelectorAll("[subcomponent]").forEach(function (subcomponent) {
      var name = subcomponent.getAttribute("subcomponent");
      subcomponents[name] = subcomponent.outerHTML;
      subcomponent.remove();
    });
    return subcomponents;
  };
  _proto.renderComponent = /*#__PURE__*/ (function () {
    var _renderComponent = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(
        name,
        content,
        props,
        data,
        scripts,
        styles,
        subcomponents,
        parentContext
      ) {
        var context,
          _iterator2,
          _step2,
          script,
          renderedContent,
          _i,
          _Object$entries,
          _Object$entries$_i,
          subName,
          subContent,
          subRendered,
          _i2,
          _Object$entries2,
          _Object$entries2$_i,
          key,
          value,
          propValue,
          _iterator3,
          _step3,
          _script,
          styleElement;
        return _regeneratorRuntime().wrap(
          function _callee2$(_context2) {
            while (1)
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  if (parentContext === void 0) {
                    parentContext = {};
                  }
                  context = this.createContext(props, data, parentContext); // Execute init scripts
                  _iterator2 = _createForOfIteratorHelperLoose(
                    scripts.init,
                    true
                  );
                case 3:
                  if ((_step2 = _iterator2()).done) {
                    _context2.next = 9;
                    break;
                  }
                  script = _step2.value;
                  _context2.next = 7;
                  return this.executeScript(script, context);
                case 7:
                  _context2.next = 3;
                  break;
                case 9:
                  renderedContent = content; // Render subcomponents
                  (_i = 0), (_Object$entries = Object.entries(subcomponents));
                case 11:
                  if (!(_i < _Object$entries.length)) {
                    _context2.next = 20;
                    break;
                  }
                  (_Object$entries$_i = _Object$entries[_i]),
                    (subName = _Object$entries$_i[0]),
                    (subContent = _Object$entries$_i[1]);
                  _context2.next = 15;
                  return this.renderComponent(
                    name + "_" + subName,
                    subContent,
                    {},
                    context,
                    {
                      init: [],
                      render: [],
                      methods: {},
                      computed: {},
                      watch: {}
                    },
                    [],
                    {},
                    context
                  );
                case 15:
                  subRendered = _context2.sent;
                  renderedContent = renderedContent.replace(
                    new RegExp(
                      '<\\s*subcomponent\\s+name="' +
                        subName +
                        '"[^>]*>.*?<\\s*/\\s*subcomponent\\s*>',
                      "gs"
                    ),
                    subRendered
                  );
                case 17:
                  _i++;
                  _context2.next = 11;
                  break;
                case 20:
                  (_i2 = 0), (_Object$entries2 = Object.entries(props));
                case 21:
                  if (!(_i2 < _Object$entries2.length)) {
                    _context2.next = 31;
                    break;
                  }
                  (_Object$entries2$_i = _Object$entries2[_i2]),
                    (key = _Object$entries2$_i[0]),
                    (value = _Object$entries2$_i[1]);
                  if (!(value.required && !(key in context))) {
                    _context2.next = 25;
                    break;
                  }
                  throw new Error(
                    'Required prop "' +
                      key +
                      '" is missing in component "' +
                      name +
                      '"'
                  );
                case 25:
                  propValue =
                    context[key] !== undefined
                      ? context[key]
                      : value["default"];
                  this.validateProp(key, propValue, value, name);
                  renderedContent = this.replaceExpressions(
                    renderedContent,
                    key,
                    propValue
                  );
                case 28:
                  _i2++;
                  _context2.next = 21;
                  break;
                case 31:
                  // Evaluate control structures and expressions
                  renderedContent = this.evaluateControlStructures(
                    renderedContent,
                    context
                  );
                  renderedContent = this.evaluateExpressions(
                    renderedContent,
                    context
                  );

                  // Execute render scripts
                  _iterator3 = _createForOfIteratorHelperLoose(
                    scripts.render,
                    true
                  );
                case 34:
                  if ((_step3 = _iterator3()).done) {
                    _context2.next = 40;
                    break;
                  }
                  _script = _step3.value;
                  _context2.next = 38;
                  return this.executeScript(_script, context);
                case 38:
                  _context2.next = 34;
                  break;
                case 40:
                  // Apply styles
                  styleElement = document.createElement("style");
                  styleElement.textContent = styles
                    .join("\n")
                    .replace(/:component/g, '[data-component="' + name + '"]');
                  renderedContent =
                    "" + styleElement.outerHTML + renderedContent;

                  // Wrap the rendered content with a component identifier
                  renderedContent =
                    '<div data-component="' +
                    name +
                    '">' +
                    renderedContent +
                    "</div>";
                  return _context2.abrupt("return", renderedContent);
                case 45:
                case "end":
                  return _context2.stop();
              }
          },
          _callee2,
          this
        );
      })
    );
    function renderComponent(_x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
      return _renderComponent.apply(this, arguments);
    }
    return renderComponent;
  })();
  _proto.createContext = function createContext(props, data, parentContext) {
    var context = _extends({}, parentContext, data, {
      $global: this.globalState
    });

    // Add methods
    Object.entries(props.methods || {}).forEach(function (_ref) {
      var name = _ref[0],
        method = _ref[1];
      context[name] = function () {
        for (
          var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          args[_key3] = arguments[_key3];
        }
        return method.apply(context, args);
      };
    });

    // Add computed properties
    Object.entries(props.computed || {}).forEach(function (_ref2) {
      var name = _ref2[0],
        compute = _ref2[1];
      Object.defineProperty(context, name, {
        get: function get() {
          return compute.apply(context);
        },
        enumerable: true
      });
    });

    // Add watchers
    Object.entries(props.watch || {}).forEach(function (_ref3) {
      var prop = _ref3[0],
        handler = _ref3[1];
      var value = context[prop];
      Object.defineProperty(context, prop, {
        get: function get() {
          return value;
        },
        set: function set(newValue) {
          var oldValue = value;
          value = newValue;
          handler.call(context, newValue, oldValue);
        },
        enumerable: true
      });
    });
    return context;
  };
  _proto.validateProp = function validateProp(
    key,
    value,
    propDef,
    componentName
  ) {
    // Type checking
    if (propDef.type && typeof value !== propDef.type) {
      throw new Error(
        'Invalid type for prop "' +
          key +
          '" in component "' +
          componentName +
          '". Expected ' +
          propDef.type +
          ", got " +
          typeof value
      );
    }

    // Custom validations
    for (
      var _iterator4 = _createForOfIteratorHelperLoose(
          propDef.validations,
          true
        ),
        _step4;
      !(_step4 = _iterator4()).done;

    ) {
      var validation = _step4.value;
      if (validation.startsWith("min:")) {
        var min = parseFloat(validation.split(":")[1]);
        if (value < min)
          throw new Error(
            'Prop "' +
              key +
              '" in component "' +
              componentName +
              '" must be at least ' +
              min
          );
      } else if (validation.startsWith("max:")) {
        var max = parseFloat(validation.split(":")[1]);
        if (value > max)
          throw new Error(
            'Prop "' +
              key +
              '" in component "' +
              componentName +
              '" must be at most ' +
              max
          );
      } else if (validation === "email") {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          throw new Error(
            'Prop "' +
              key +
              '" in component "' +
              componentName +
              '" must be a valid email'
          );
      }
      // Add more custom validations as needed
    }
  };
  _proto.replaceExpressions = function replaceExpressions(content, key, value) {
    var _this3 = this;
    var regex = new RegExp(
      "{{\\s*" + key + "(\\s*\\|\\s*[a-zA-Z]+)?\\s*}}",
      "g"
    );
    return content.replace(regex, function (match, filter) {
      if (filter) {
        var filterName = filter.trim().slice(1);
        return _this3.helpers[filterName]
          ? _this3.helpers[filterName](value)
          : value;
      }
      return value;
    });
  };
  _proto.evaluateControlStructures = function evaluateControlStructures(
    content,
    context
  ) {
    var _this4 = this;
    // Evaluate if-else statements
    content = content.replace(
      /@if\(([\s\S]*?)\)([\s\S]*?)(@else([\s\S]*?))?@endif/g,
      function (match, condition, ifContent, _, elseContent) {
        return _this4.evaluateExpression(condition, context)
          ? ifContent
          : elseContent || "";
      }
    );

    // Evaluate switch-case statements
    content = content.replace(
      /@switch\(([\s\S]*?)\)([\s\S]*?)@endswitch/g,
      function (match, expression, caseContent) {
        var value = _this4.evaluateExpression(expression, context);
        var cases =
          caseContent.match(/@case\(([\s\S]*?)\)([\s\S]*?)(?=@case|$)/g) || [];
        for (
          var _iterator5 = _createForOfIteratorHelperLoose(cases, true), _step5;
          !(_step5 = _iterator5()).done;

        ) {
          var caseMatch = _step5.value;
          var _caseMatch$match = caseMatch.match(
              /@case\(([\s\S]*?)\)([\s\S]*)$/
            ),
            caseValue = _caseMatch$match[1],
            _caseContent = _caseMatch$match[2];
          if (_this4.evaluateExpression(caseValue, context) == value) {
            return _caseContent.trim();
          }
        }
        var defaultCase = caseContent.match(/@default([\s\S]*)$/);
        return defaultCase ? defaultCase[1].trim() : "";
      }
    );

    // Evaluate for loops
    content = content.replace(
      /@for\(([\s\S]*?)\s+in\s+([\s\S]*?)\)([\s\S]*?)@endfor/g,
      function (match, item, array, loopContent) {
        var items = _this4.evaluateExpression(array, context);
        return items
          .map(function (itemData) {
            var _extends2;
            return _this4.evaluateExpressions(
              loopContent,
              _extends(
                {},
                context,
                ((_extends2 = {}), (_extends2[item] = itemData), _extends2)
              )
            );
          })
          .join("");
      }
    );

    // Evaluate while loops
    content = content.replace(
      /@while\(([\s\S]*?)\)([\s\S]*?)@endwhile/g,
      function (match, condition, loopContent) {
        var result = "";
        while (_this4.evaluateExpression(condition, context)) {
          result += _this4.evaluateExpressions(loopContent, context);
        }
        return result;
      }
    );
    return content;
  };
  _proto.evaluateExpressions = function evaluateExpressions(content, context) {
    var _this5 = this;
    return content.replace(/{{(.*?)}}/g, function (match, expression) {
      return _this5.evaluateExpression(expression.trim(), context);
    });
  };
  _proto.evaluateExpression = function evaluateExpression(expression, context) {
    var func = new Function(
      "context",
      "helpers",
      "with(context) { with(helpers) { return " + expression + "; } }"
    );
    try {
      return func(context, this.helpers);
    } catch (error) {
      console.error("Error evaluating expression: " + expression, error);
      return "";
    }
  };
  _proto.executeScript = /*#__PURE__*/ (function () {
    var _executeScript = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(
        script,
        context
      ) {
        var func;
        return _regeneratorRuntime().wrap(
          function _callee3$(_context3) {
            while (1)
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  func = new Function(
                    "context",
                    "helpers",
                    "with(context) { with(helpers) { " + script + " } }"
                  );
                  _context3.prev = 1;
                  _context3.next = 4;
                  return func(context, this.helpers);
                case 4:
                  _context3.next = 9;
                  break;
                case 6:
                  _context3.prev = 6;
                  _context3.t0 = _context3["catch"](1);
                  console.error(
                    "Error executing script: " + script,
                    _context3.t0
                  );
                case 9:
                case "end":
                  return _context3.stop();
              }
          },
          _callee3,
          this,
          [[1, 6]]
        );
      })
    );
    function executeScript(_x10, _x11) {
      return _executeScript.apply(this, arguments);
    }
    return executeScript;
  })();
  _proto.insertComponent = /*#__PURE__*/ (function () {
    var _insertComponent = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(
        name,
        target,
        data
      ) {
        var component, targetElement, renderedContent;
        return _regeneratorRuntime().wrap(
          function _callee4$(_context4) {
            while (1)
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  if (data === void 0) {
                    data = {};
                  }
                  _context4.next = 3;
                  return this.loadComponent(name);
                case 3:
                  component = _context4.sent;
                  if (component) {
                    _context4.next = 7;
                    break;
                  }
                  console.error("Component " + name + " not found");
                  return _context4.abrupt("return");
                case 7:
                  targetElement =
                    typeof target === "string"
                      ? document.querySelector(target)
                      : target;
                  if (targetElement) {
                    _context4.next = 11;
                    break;
                  }
                  console.error("Target element not found");
                  return _context4.abrupt("return");
                case 11:
                  _context4.next = 13;
                  return component.render(data);
                case 13:
                  renderedContent = _context4.sent;
                  targetElement.innerHTML = renderedContent;

                  // Execute any necessary client-side scripts
                  this.executeClientScripts(
                    targetElement,
                    component.scripts,
                    data
                  );
                case 16:
                case "end":
                  return _context4.stop();
              }
          },
          _callee4,
          this
        );
      })
    );
    function insertComponent(_x12, _x13, _x14) {
      return _insertComponent.apply(this, arguments);
    }
    return insertComponent;
  })();
  _proto.executeClientScripts = function executeClientScripts(
    element,
    scripts,
    data
  ) {
    var context = this.createContext({}, data);
    Object.entries(scripts.methods).forEach(function (_ref4) {
      var name = _ref4[0],
        method = _ref4[1];
      element
        .querySelectorAll('[data-method="' + name + '"]')
        .forEach(function (el) {
          el.addEventListener("click", function (event) {
            return method.call(context, event);
          });
        });
    });
  };
  return ComponentManager;
})();
