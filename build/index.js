'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".test-component {\n  background-color: var(--background);\n  color: var(--font-color);\n  border: 1px solid var(--harvey-black);\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n}\n\n.test-component .heading {\n  font-size: var(--heading-font-size);\n}";
styleInject(css_248z);

var Welcome = function (_a) {
    _a.heading; var content = _a.content;
    return (React__default["default"].createElement("div", { "data-testid": "test-component", className: "test-component" },
        React__default["default"].createElement("h1", { "data-testid": "test-component__heading", className: "heading" },
            React__default["default"].createElement("div", { style: { color: "green" } }, "Welcome to Chance UI! Enjoy")),
        React__default["default"].createElement("div", { "data-testid": "test-component__content" }, content)));
};

exports.Welcome = Welcome;
//# sourceMappingURL=index.js.map
