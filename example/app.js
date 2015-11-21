var React = require('react');
var ReactDOM = require('react-dom');
var Video = require('../src/');
var _package = require('../package.json');

var App = React.createClass({
  displayName: 'App',

  handlePlay(player) {
    console.log('onPlay', player);
  },

  render() {
    return (
      <div className="app">
        <h1>{_package.name}</h1>
        <h2>{_package.description}</h2>
        <Video
          src="http://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
          onPlay={this.handlePlay}
        />
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
