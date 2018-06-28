'use strict';

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