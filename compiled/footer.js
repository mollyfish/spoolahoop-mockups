'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            "home"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            "about"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            "advertising"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            "help"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            "tools"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            "merch"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "" },
            "legal stuff"
          )
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var domContainer = document.querySelector('footer');
ReactDOM.render(React.createElement(Footer, null), domContainer);