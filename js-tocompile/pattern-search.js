'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

class PatternSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ([
      <h3 key="subheading3">search patterns</h3>,
      <label key="label">search by name, designer, keyword, etc...</label>,
      <input key="input" name="patternsearch" type="text" />,
      <button key="button" id="pattern-search-button">Search</button>,
      <h6 key="subheading6">or browse using the <a href="#">browse tool</a></h6>
    ]);
  }
}

let domContainer = document.querySelector('#pattern-search');
ReactDOM.render(<PatternSearch />, domContainer);