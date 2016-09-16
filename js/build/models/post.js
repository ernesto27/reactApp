'use strict';

var _require = require('fbemitter');

var EventEmitter = _require.EventEmitter;

var emitter = new EventEmitter();

var ENDPOINT = 'http://localhost/php/photosApp/public/';

var post = {

  getEmiter: function getEmiter() {
    return emitter;
  },

  addEmit: function addEmit(data) {
    emitter.emit('addPost', data);
  },

  scrollBottomEmit: function scrollBottomEmit() {},

  addSuscriber: function addSuscriber(callback) {
    emitter.addListener('addPost', function (data) {
      console.log(data);
      callback(data);
    });
  },

  getAll: function getAll(callback) {
    $.get(ENDPOINT + '/posts', function (data) {
      callback(data);
    });
  },

  get: function get(page, callback) {
    $.get(ENDPOINT + '/posts?page=' + page, function (data) {
      console.log(data);
      callback(data);
    });
  },

  upload: function upload(formData, callback) {
    $.ajax({
      url: "http://localhost/php/reactInstagramApi/upload.php",
      type: 'POST',
      data: formData,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false,
      success: function success(response) {
        callback(response);
        /*
        post.addEmit(response);
        $('#addPostModal').modal('hide');
        */
      },
      error: function error() {
        alert('Ocurrio un error , intentalo mas tarde ...');
      }
    });
  }
};

module.exports = post;