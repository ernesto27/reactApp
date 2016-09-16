'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = _react2.default.createClass({
  displayName: 'Modal',

  getInitialState: function getInitialState() {
    return {
      descriptionText: ''
    };
  },

  _handleChange: function _handleChange(e) {
    this.setState({ descriptionText: e.target.value });
  },

  _upload: function _upload() {
    var that = this;
    var image = document.getElementById('image');
    var formData = new FormData();
    var file = image.files[0];
    formData.append('image', file);
    formData.append('description', this.state.descriptionText);

    _post2.default.upload(formData, function (response) {
      _post2.default.addEmit(response);
      $('#addPostModal').modal('hide');
      that.setState({ descriptionText: '' });
      image.value = '';
    });
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'modal fade', id: 'addPostModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'myModalLabel' },
      _react2.default.createElement(
        'div',
        { className: 'modal-dialog', role: 'document' },
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'div',
            { className: 'modal-header' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
              _react2.default.createElement(
                'span',
                { 'aria-hidden': 'true' },
                '×'
              )
            ),
            _react2.default.createElement(
              'h4',
              { className: 'modal-title', id: 'myModalLabel' },
              'Modal title'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-body' },
            _react2.default.createElement(
              'p',
              null,
              'Select a picture'
            ),
            _react2.default.createElement('input', { type: 'file', id: 'image' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('textarea', { className: 'form-control', value: this.state.descriptionText, onChange: this._handleChange, placeholder: 'Add a description' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-footer' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
              'Close'
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-primary', onClick: this._upload },
              'Upload'
            )
          )
        )
      )
    );
  }
});

module.exports = Modal;