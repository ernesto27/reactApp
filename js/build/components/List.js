'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = _react2.default.createClass({
  displayName: 'List',

  getInitialState: function getInitialState() {
    return {
      posts: [],
      page: 2
    };
  },
  componentWillMount: function componentWillMount() {
    var that = this;

    _post2.default.getAll(function (data) {
      that.setState({ posts: data });
    });

    _post2.default.addSuscriber(function (data) {
      var posts = this.state.posts;
      posts.unshift({
        imageURL: data.imageURL,
        description: data.description
      });
      this.setState({ posts: posts });
    }.bind(this));

    var emitter = _post2.default.getEmiter();
    emitter.addListener('scrollBottom', function (data) {
      _post2.default.get(that.state.page, function (data) {
        var posts = that.state.posts;
        data.forEach(function (item) {
          posts.push(item);
        });
        that.setState({ posts: posts, page: that.state.page + 1 });
      });
    });
  },

  render: function render() {
    console.log(this.state.posts);
    var posts = this.state.posts.map(function (post, idx) {
      return _react2.default.createElement(_Post2.default, { imageURL: post.imageURL, description: post.description, key: idx });
    });
    return _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'h2',
        null,
        'Here goes the content'
      ),
      posts
    );
  }
});

module.exports = List;