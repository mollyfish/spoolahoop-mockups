'use strict';

class StoreLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href=""><span class="icon-shop"></span> shop spoolahoop merchandise</a>
    );
  }
}

let domContainer = document.querySelector('#store');
ReactDOM.render(<StoreLink />, domContainer);