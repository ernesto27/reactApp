import React from 'react';
import ReactDOM from 'react-dom';

var Post = React.createClass({
  getInitialState: function(){
    return{
      likesCount: 100
    }
  },

  _incrementCount: function(){
    var countPlusOne = this.state.likesCount + 1;
    this.setState({
      likesCount: countPlusOne
    });
  },

  render: function(){
    return(
      <div className="row">
        <div className="col-sm-8 col-md-8">
          <div className="thumbnail">
              <p>
                <img width="30" height="30" src="http://nosgustalamusica.com/wp-content/uploads/2013/01/spiritual.jpg" alt="..." className="img-circle" />
                <strong>USERNAME</strong>
              </p>
            <img src={this.props.imageURL} alt="..." />
            <div className="caption">
              <p><strong>{this.state.likesCount} me gusta</strong></p>
              <p>{this.props.description}</p>
              <p>
                <button onClick={this._incrementCount} type="button" className="btn btn-default" >
                  <span className="glyphicon glyphicon-heart" ></span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Post;
