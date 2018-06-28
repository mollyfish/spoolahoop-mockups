'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

class ShortcutAd extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src="http://via.placeholder.com/300x200" />
    );
  }
}

let domContainer = document.querySelector('#ad');
ReactDOM.render(<ShortcutAd />, domContainer);