'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuickSearch = function (_React$Component) {
  _inherits(QuickSearch, _React$Component);

  function QuickSearch(props) {
    _classCallCheck(this, QuickSearch);

    return _possibleConstructorReturn(this, (QuickSearch.__proto__ || Object.getPrototypeOf(QuickSearch)).call(this, props));
  }

  _createClass(QuickSearch, [{
    key: "render",
    value: function render() {
      return [React.createElement(
        "h5",
        { key: "heading" },
        "quick search"
      ), React.createElement("input", { key: "input", name: "quicksearch", type: "text" }), React.createElement(
        "select",
        { key: "select" },
        React.createElement(
          "option",
          { value: "patterns" },
          "patterns"
        ),
        React.createElement(
          "option",
          { value: "fabrics" },
          "fabrics"
        ),
        React.createElement(
          "option",
          { value: "people" },
          "people"
        ),
        React.createElement(
          "option",
          { value: "circles" },
          "circles"
        ),
        React.createElement(
          "option",
          { value: "forums" },
          "forums"
        ),
        React.createElement(
          "option",
          { value: "designers" },
          "designers"
        ),
        React.createElement(
          "option",
          { value: "projects" },
          "projects"
        ),
        React.createElement(
          "option",
          { value: "stashes" },
          "stashes"
        )
      ), React.createElement(
        "button",
        { key: "button", id: "index-quick-search" },
        "Search"
      )];
    }
  }]);

  return QuickSearch;
}(React.Component);

var domContainer = document.querySelector('#search');
ReactDOM.render(React.createElement(QuickSearch, null), domContainer);