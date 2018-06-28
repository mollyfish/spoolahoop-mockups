'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

class StoreLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href=""><span className="icon-shop"></span> shop spoolahoop merchandise</a>
    );
  }
}

let domContainer = document.querySelector('#store');
ReactDOM.render(<StoreLink />, domContainer);