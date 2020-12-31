import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";

class NotFoundPage extends Component {
  constructor(props) {
    super(props);    
    this.hasRun = false;
    this.loadNumber = this.loadNumber.bind(this)
  }
  
  componentDidMount() {
    this.loadNumber();
  }

  loadNumber() {
    $(function($) {
      $('.number').each(function () {
        var $this = $(this);
        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 1500,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          },
          complete: function() {
            $this.text(Math.ceil(404));
          }
        });
      });
    });
  }
  render() {
    return (
      <div className="page404">
        <div className="row">
          <div className="twelve columns">
            <div className="msg404" id="countUp">
              <div className="number" data-count="404">404</div>
              <div className="text text-1">Page not found</div>
              <div className="text text-2">The page you are looking for might have been removed, had its name changed or is temporarily unavailable</div>
              <Link to="/" className="btn">Home Page</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;