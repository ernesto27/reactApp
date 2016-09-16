'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';
import post from './models/post.js';


var Login = React.createClass({
  render: function(){
    return(
      <div>
        <p>Login page</p>
        <Link to={`/posts`}>Go to app</Link>
      </div>
    )
  }
});

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Header />
        <List />
        <Modal />
      </div>
    )
  }
});


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/posts" component={App} />
  </Router>
  ,
  document.getElementById('app')
);


var page = 1;
$(window).scroll(function() {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    var emitter = post.getEmiter();
    emitter.emit('scrollBottom');
    page += 1;
  }
});
