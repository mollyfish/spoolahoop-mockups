'use strict';

class QuickSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ([
      <h5 key="heading">quick search</h5>,
      <input key="input" name="quicksearch" type="text" />,
      <select key="select">
        <option value="patterns">patterns</option>
        <option value="fabrics">fabrics</option>
        <option value="people">people</option>
        <option value="circles">circles</option>
        <option value="forums">forums</option>
        <option value="designers">designers</option>
        <option value="projects">projects</option>
        <option value="stashes">stashes</option>
      </select>,
      <button key="button" id="index-quick-search">Search</button>
    ]);
  }
}

let domContainer = document.querySelector('#search');
ReactDOM.render(<QuickSearch />, domContainer);