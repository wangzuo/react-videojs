var assign = require('object-assign');
var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

module.exports = React.createClass({
  displayName: 'VideoJS',

  componentDidMount() {
    var self = this;
    videojs(this.refs.video).ready(function() {
      var player = this;
      self.player = player;
      player.on('play', self.handlePlay);
    });
  },

  handlePlay: function() {
    if(this.props.onPlay) this.props.onPlay(this.player);
  },

  render() {
    var props = blacklist(this.props, 'children', 'className', 'src', 'type', 'onPlay');
    props.className = cx(this.props.className, 'videojs', 'video-js vjs-default-skin');

    assign(props, {
      ref: 'video',
      controls: true
    });

    return (
      <div>
        <video {... props}>
          <source src={this.props.src} type={this.props.type}/>
        </video>
      </div>
    )
  }
});
