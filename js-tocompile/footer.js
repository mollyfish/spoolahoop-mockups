'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li><a href="">home</a></li>
        <li><a href="">about</a></li>
        <li><a href="">advertising</a></li>
        <li><a href="">help</a></li>
        <li><a href="">tools</a></li>
        <li><a href="">merch</a></li>
        <li><a href="">legal stuff</a></li>
      </ul>
    );
  }
}

let domContainer = document.querySelector('footer');
ReactDOM.render(<Footer />, domContainer);