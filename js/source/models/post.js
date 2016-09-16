var {EventEmitter} = require('fbemitter');
var emitter = new EventEmitter();

var ENDPOINT = 'http://localhost/php/photosApp/public/';

var post = {

  getEmiter: function(){
    return emitter;
  },

  addEmit: function(data){
    emitter.emit('addPost', data);
  },

  scrollBottomEmit: function(){

  },

  addSuscriber: function(callback){
    emitter.addListener('addPost', function(data){
      console.log(data);
      callback(data);
    });
  },

  getAll: function(callback){
    $.get(ENDPOINT + '/posts', function(data){
      callback(data);
    });
  },

  get: function(page, callback){
    $.get(ENDPOINT + '/posts?page=' + page, function(data){
      console.log(data)
      callback(data);
    });
  },

  upload: function(formData, callback){
    $.ajax({
        url: "http://localhost/php/reactInstagramApi/upload.php",
        type: 'POST',
        data: formData,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(response){
          callback(response);
          /*
          post.addEmit(response);
          $('#addPostModal').modal('hide');
          */
        },
        error: function(){
            alert('Ocurrio un error , intentalo mas tarde ...')
        }
    });
  }
}


module.exports = post;
