'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _react2.default.createClass({
  displayName: 'Header',

  _openModal: function _openModal() {
    $('#addPostModal').modal();
  },

  render: function render() {
    var buttonStyle = {
      marginTop: "7px"
    };

    return _react2.default.createElement(
      'nav',
      { className: 'navbar navbar-default' },
      _react2.default.createElement(
        'div',
        { className: 'container-fluid container' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            'a',
            { className: 'navbar-brand', href: '#' },
            'Images upload'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
          _react2.default.createElement(
            'form',
            { className: 'navbar-form navbar-left' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search' })
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-default' },
              'Submit'
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary', style: buttonStyle, onClick: this._openModal },
            'Add post'
          )
        )
      )
    );
  }
});

module.exports = Header;