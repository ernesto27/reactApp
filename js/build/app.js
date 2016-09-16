'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _List = require('./components/List');

var _List2 = _interopRequireDefault(_List);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _post = require('./models/post.js');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
ReactDOM.render(
  <div>
    <Header />
    <List />
    <Modal />
  </div>,
  document.getElementById('app')
);
*/

var Login = _react2.default.createClass({
  displayName: 'Login',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Login page'
      ),
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/posts' },
        'Go to app'
      )
    );
  }
});

var App = _react2.default.createClass({
  displayName: 'App',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(_List2.default, null),
      _react2.default.createElement(_Modal2.default, null)
    );
  }
});

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: Login }),
  _react2.default.createElement(_reactRouter.Route, { path: '/posts', component: App })
), document.getElementById('app'));

var page = 1;
$(window).scroll(function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    var emitter = _post2.default.getEmiter();
    emitter.emit('scrollBottom');
    page += 1;
  }
});