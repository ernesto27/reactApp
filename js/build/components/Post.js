'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = _react2.default.createClass({
  displayName: 'Post',

  getInitialState: function getInitialState() {
    return {
      likesCount: 100
    };
  },

  _incrementCount: function _incrementCount() {
    var countPlusOne = this.state.likesCount + 1;
    this.setState({
      likesCount: countPlusOne
    });
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-sm-8 col-md-8' },
        _react2.default.createElement(
          'div',
          { className: 'thumbnail' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('img', { width: '30', height: '30', src: 'http://nosgustalamusica.com/wp-content/uploads/2013/01/spiritual.jpg', alt: '...', className: 'img-circle' }),
            _react2.default.createElement(
              'strong',
              null,
              'USERNAME'
            )
          ),
          _react2.default.createElement('img', { src: this.props.imageURL, alt: '...' }),
          _react2.default.createElement(
            'div',
            { className: 'caption' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                this.state.likesCount,
                ' me gusta'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              this.props.description
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'button',
                { onClick: this._incrementCount, type: 'button', className: 'btn btn-default' },
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart' })
              )
            )
          )
        )
      )
    );
  }
});

module.exports = Post;