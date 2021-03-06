'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

class QuickLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ([
      <h5 key="heading">quick links</h5>,
      <ul key="list">
        <li><a href="">help page</a></li>
        <li><a href="">help forum</a></li>
        <li><a href="">getting started</a></li>
        <li><a href="">about spoolahoop</a></li>
      </ul>
    ]);
  }
}

let domContainer = document.querySelector('#quicklinks');
ReactDOM.render(<QuickLinks />, domContainer);