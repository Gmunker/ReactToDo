import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

// NEW ES6 CLASS COMPONENTS

export class Login extends React.Component {
  onLogin() {
    let {dispatch} = this.props;

    dispatch(actions.startLogin());
  }
  render() {
    return (

     <div>

     <div className="top-bar columns small-12 medium-12 large-8 small-centered">
       <h1 className="fcc-title">React Todo App</h1>


        <div className="credits">
          <h2>Designed and Created by: </h2>
          <h2>Greg Munker</h2>
          <h2><a className="github-link" href="https://github.com/Gmunker/ReactToDo">(GitHub Repo)</a></h2>
          <div className="social-buttons expanded button-group">
              <a className="button secondary" href="http://www.facebook.com/gmunker" target="_blank">Facebook</a>
              <a className="button secondary" href="https://plus.google.com/u/0/+GregMunker" target="_blank">Google+</a>
              <a className="button secondary" href="https://github.com/Gmunker" target="_blank">Github</a>
              <a className="button secondary" href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button" target="_blank">LinkedIn</a>
              <a className="button secondary" href="https://twitter.com/Gmunker" target="_blank">Twitter</a>
          </div>
        </div>
        </div>


        
        <div className="row">
          <div className="login-container columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with GitHub account below</p>
              <button className="button" onClick={this.onLogin.bind(this)}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

// ORGINAL CODE FROM COURSE

// export let Login = React.createClass({
//   onLogin() {
//     let {dispatch} = this.props;
//
//     dispatch(actions.startLogin());
//   },
//   render() {
//     return (
//       <div>
//         <h1 className="page-title">Todo App</h1>
//         <div className="row">
//           <div className="columns small-centered small-10 medium-6 large-4">
//             <div className="callout callout-auth">
//               <h3>Login</h3>
//               <p>Login with GitHub account below</p>
//               <button className="button" onClick={this.onLogin}>Login with GitHub</button>
//             </div>
//           </div>
//         </div>
//       </div>
//
//     )
//   }
// })

export default Redux.connect()(Login);
