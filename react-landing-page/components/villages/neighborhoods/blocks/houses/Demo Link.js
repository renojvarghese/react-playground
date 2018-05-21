import React from 'react';
import ReactDOM from 'react-dom';

class DemoLink extends React.Component {
  render() {
    return (
      <div>
        <a href="#">
          <div className="demo-link" >
          Demo
        </div>
        </a>
      </div>
    )
  }
}

module.exports = DemoLink;
