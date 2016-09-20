'use strict';

var assign = require('object-assign');
var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

module.exports = React.createClass({
  displayName: 'VideoJS',

  componentDidMount: function componentDidMount() {
    var self = this;
    var player = videojs(this.refs.video, this.props.options).ready(function () {
      self.player = this;
      self.player.on('play', self.handlePlay);
    });
    if (this.props.onPlayerInit) this.props.onPlayerInit(player);
  },


  handlePlay: function handlePlay() {
    if (this.props.onPlay) this.props.onPlay(this.player);
  },

  render: function render() {
    var props = blacklist(this.props, 'children', 'className', 'src', 'type', 'onPlay', 'onPlayerInit');
    props.className = cx(this.props.className, 'videojs', 'video-js vjs-default-skin');

    assign(props, {
      ref: 'video',
      controls: true
    });

    return React.createElement(
      'div',
      null,
      React.createElement(
        'video',
        props,
        React.createElement('source', { src: this.props.src, type: this.props.type })
      )
    );
  }
});