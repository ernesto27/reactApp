import React from 'react';
import ReactDOM from 'react-dom';
import post  from '../models/post';

var Modal = React.createClass({
  getInitialState: function(){
    return{
      descriptionText: ''
    }
  },

  _handleChange: function(e){
    this.setState({ descriptionText: e.target.value });

  },

  _upload: function(){
    var that = this;
    var image = document.getElementById('image');
    var formData = new FormData();
    var file = image.files[0];
    formData.append('image', file);
    formData.append('description', this.state.descriptionText);

    post.upload(formData, function(response){
      post.addEmit(response);
      $('#addPostModal').modal('hide');
      that.setState({ descriptionText: '' });
      image.value = '';
    });
  },

  render: function(){
    return(
      <div className="modal fade" id="addPostModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
              <p>
                Select a picture
              </p>
              <input type="file" id="image"/>
              <br />
              <textarea className="form-control" value={this.state.descriptionText} onChange={this._handleChange} placeholder="Add a description"></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this._upload}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Modal;
