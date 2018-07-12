'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

class FeaturedAds extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ([
      <h3 key="subheading3">featured advertisers</h3>,
      <img key="ad1" src="http://via.placeholder.com/200x150" />,
      <img key="ad2" src="http://via.placeholder.com/200x150" />,
    ]);
  }
}

let domContainer = document.querySelector('#featured-ads');
ReactDOM.render(<FeaturedAds />, domContainer);