'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost = function (_React$Component) {
  _inherits(BlogPost, _React$Component);

  function BlogPost(props) {
    _classCallCheck(this, BlogPost);

    return _possibleConstructorReturn(this, (BlogPost.__proto__ || Object.getPrototypeOf(BlogPost)).call(this, props));
  }

  _createClass(BlogPost, [{
    key: "render",
    value: function render() {
      return [React.createElement(
        "section",
        { className: "blog-post", key: "post" },
        React.createElement(
          "div",
          { className: "post-info" },
          React.createElement(
            "h3",
            { className: "post-title" },
            "Blog Post Title"
          ),
          React.createElement("img", { className: "post-author-pic", src: "http://via.placeholder.com/50x50" }),
          React.createElement(
            "ul",
            { className: "post-author" },
            React.createElement(
              "li",
              { className: "posted-by" },
              "Author McBlogger"
            ),
            React.createElement(
              "li",
              { className: "posted-date" },
              "June 1st, 2018"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "post-body" },
          React.createElement(
            "div",
            { className: "post-featured" },
            React.createElement("img", { src: "http://via.placeholder.com/550x500" }),
            React.createElement(
              "p",
              { className: "post-featured-caption" },
              "One amazing ",
              React.createElement(
                "a",
                { href: "" },
                "creation"
              ),
              " by ",
              React.createElement(
                "a",
                { href: "" },
                "Maker Makesalot"
              )
            )
          ),
          React.createElement(
            "p",
            { className: "post-text" },
            "Maecenas fermentum ipsum purus, et scelerisque est dignissim eget. Morbi fermentum sem ut euismod ornare. Nam sem quam, dapibus vitae neque ac, blandit dictum enim. Vestibulum tellus leo, condimentum non velit eu, ornare imperdiet erat. Fusce fermentum libero id ligula commodo, at bibendum felis bibendum. Duis eu tristique mauris. Maecenas vel orci mi. Nullam mollis in risus eget mattis."
          ),
          React.createElement(
            "ul",
            { className: "post-gallery" },
            React.createElement(
              "li",
              null,
              React.createElement("img", { src: "http://via.placeholder.com/200x200" }),
              React.createElement(
                "p",
                { className: "post-gallery-caption" },
                "Nam sem quam, ",
                React.createElement(
                  "a",
                  { href: "" },
                  "dapibus vitae"
                ),
                " neque ac,",
                React.createElement(
                  "a",
                  { href: "" },
                  "blandit dictum"
                ),
                " enim."
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement("img", { src: "http://via.placeholder.com/200x200" }),
              React.createElement(
                "p",
                { className: "post-gallery-caption" },
                "Nam sem quam, ",
                React.createElement(
                  "a",
                  { href: "" },
                  "dapibus vitae"
                ),
                " neque ac,",
                React.createElement(
                  "a",
                  { href: "" },
                  "blandit dictum"
                ),
                " enim."
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement("img", { src: "http://via.placeholder.com/200x200" }),
              React.createElement(
                "p",
                { className: "post-gallery-caption" },
                "Nam sem quam, ",
                React.createElement(
                  "a",
                  { href: "" },
                  "dapibus vitae"
                ),
                " neque ac,",
                React.createElement(
                  "a",
                  { href: "" },
                  "blandit dictum"
                ),
                " enim."
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement("img", { src: "http://via.placeholder.com/200x200" }),
              React.createElement(
                "p",
                { className: "post-gallery-caption" },
                "Nam sem quam, ",
                React.createElement(
                  "a",
                  { href: "" },
                  "dapibus vitae"
                ),
                " neque ac,",
                React.createElement(
                  "a",
                  { href: "" },
                  "blandit dictum"
                ),
                " enim."
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement("img", { src: "http://via.placeholder.com/200x200" }),
              React.createElement(
                "p",
                { className: "post-gallery-caption" },
                "Nam sem quam, ",
                React.createElement(
                  "a",
                  { href: "" },
                  "dapibus vitae"
                ),
                " neque ac,",
                React.createElement(
                  "a",
                  { href: "" },
                  "blandit dictum"
                ),
                " enim."
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement("img", { src: "http://via.placeholder.com/200x200" }),
              React.createElement(
                "p",
                { className: "post-gallery-caption" },
                "Nam sem quam, ",
                React.createElement(
                  "a",
                  { href: "" },
                  "dapibus vitae"
                ),
                " neque ac,",
                React.createElement(
                  "a",
                  { href: "" },
                  "blandit dictum"
                ),
                " enim."
              )
            )
          )
        )
      ), React.createElement(
        "h4",
        { className: "blog-pagination", key: "pagination" },
        React.createElement(
          "a",
          { href: "" },
          "More blog posts..."
        )
      )];
    }
  }]);

  return BlogPost;
}(React.Component);

var domContainer = document.querySelector('#blog');
ReactDOM.render(React.createElement(BlogPost, null), domContainer);