'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        null,
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement("a", { className: "icon-spoolahoop_logo", href: "#index.html" })
          ),
          React.createElement(
            "li",
            { className: "left-nav" },
            React.createElement(
              "a",
              { href: "" },
              "patterns"
            )
          ),
          React.createElement(
            "li",
            { className: "left-nav" },
            React.createElement(
              "a",
              { href: "" },
              "fabrics"
            )
          ),
          React.createElement(
            "li",
            { className: "left-nav" },
            React.createElement(
              "a",
              { href: "" },
              "people"
            )
          ),
          React.createElement(
            "li",
            { className: "left-nav" },
            React.createElement(
              "a",
              { href: "" },
              "circles"
            )
          ),
          React.createElement(
            "li",
            { className: "left-nav" },
            React.createElement(
              "a",
              { href: "" },
              "help"
            )
          ),
          React.createElement(
            "li",
            { className: "left-nav" },
            React.createElement(
              "a",
              { href: "" },
              "search"
            )
          ),
          React.createElement(
            "li",
            { className: "right-nav thumb" },
            React.createElement(
              "a",
              { className: "thumb-link", href: "" },
              React.createElement("img", { src: "http://via.placeholder.com/50x50" })
            )
          ),
          React.createElement(
            "li",
            { className: "right-nav" },
            React.createElement(
              "a",
              { href: "" },
              "msgs"
            )
          ),
          React.createElement(
            "li",
            { className: "right-nav" },
            React.createElement(
              "a",
              { href: "" },
              "tools"
            )
          ),
          React.createElement(
            "li",
            { className: "right-nav" },
            React.createElement(
              "a",
              { href: "" },
              "my notebook"
            )
          ),
          React.createElement(
            "li",
            { className: "right-nav" },
            React.createElement(
              "a",
              { href: "" },
              "forums"
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(React.Component);

var domContainer = document.querySelector('header');
ReactDOM.render(React.createElement(NavBar, null), domContainer);