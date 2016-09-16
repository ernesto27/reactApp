'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import axios from 'axios';
import emitter from './Header';
import Posts from '../models/post';


var List = React.createClass({
  getInitialState: function(){
      return{
        posts: [],
        page: 2
      }

  },
  componentWillMount: function(){
    var that = this;

    Posts.getAll(function(data){
      that.setState({ posts: data });
    });

    Posts.addSuscriber(function(data){
      var posts = this.state.posts;
      posts.unshift({
        imageURL: data.imageURL,
        description: data.description
      });
      this.setState({ posts: posts });
    }.bind(this));

    var emitter = Posts.getEmiter();
    emitter.addListener('scrollBottom', function(data){
      Posts.get(that.state.page, function(data){
        var posts = that.state.posts;
        data.forEach(function(item){
          posts.push(item);
        });
        that.setState({ posts: posts, page: that.state.page + 1 });
      });
    });

  },

  render: function(){
    console.log(this.state.posts);
    var posts = this.state.posts.map(function(post, idx){
      return <Post imageURL={post.imageURL} description={post.description} key={idx}/>
    });
    return(
      <div className="container">
        <h2>Here goes the content</h2>
        {posts}
      </div>
    );
  }
});


module.exports = List;
