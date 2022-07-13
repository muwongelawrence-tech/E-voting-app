import React from 'react';
import { connect } from 'react-redux';

function Header({ auth }) {

   const renderContent = () => {
       switch(auth){
         case null:
           return ;
         case false:
           return <li><a href="/auth/google">Login with Google</a></li>;
         default:
           return <li><a href="/api/logout">Logout</a></li>;
       }
   }

  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Emaily</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
          { renderContent() }
      </ul>
    </div>
  </nav>
  );
}

function mapStateToProps({ auth }){
   return { auth };
}
export default connect(mapStateToProps)(Header);