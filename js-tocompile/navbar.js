'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
      <ul>
        <li>
          <a className="icon-spoolahoop_logo" href="#index.html" >
          </a>
        </li>
        <li className="left-nav">
          <a href="">patterns</a>
        </li>
        <li className="left-nav">
          <a href="">fabrics</a>
        </li>
        <li className="left-nav">
          <a href="">people</a>
        </li>
        <li className="left-nav">
          <a href="">circles</a>
        </li>
        <li className="left-nav">
          <a href="">help</a>
        </li>
        <li className="left-nav">
          <a href="">search</a>
        </li>
        <li className="right-nav thumb">
          <a className="thumb-link" href="">
            <img src="http://via.placeholder.com/50x50" />
          </a>
        </li>
        <li className="right-nav">
          <a href="">msgs</a>
        </li>
        <li className="right-nav">
          <a href="">tools</a>
        </li>
        <li className="right-nav">
          <a href="">my notebook</a>
        </li>
        <li className="right-nav">
          <a href="">forums</a>
        </li>
      </ul>
    </nav>
    );
  }
}

let domContainer = document.querySelector('header');
ReactDOM.render(<NavBar />, domContainer);