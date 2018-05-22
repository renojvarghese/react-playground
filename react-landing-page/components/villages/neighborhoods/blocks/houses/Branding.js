import React from 'react';
import ReactDOM from 'react-dom';

class Branding extends React.Component {
  render() {
    return (
    <div>
         <Link to="/">
           <img className="branding" src="./images/Branding.svg" />
         </Link>
       </div>
    )
  }
}

module.exports = Branding;
