import React from 'react';
import * as Redux from 'react-redux';

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import Search from 'Search';
import * as actions from 'actions';

export class TodoApp extends React.Component {
	onLogout(e) {
		let {dispatch} = this.props;
		e.preventDefault();

		dispatch(actions.startLogout());
	}
	render() {
		return (
			<div>

			<div className="columns small-12 medium-12 large-8 small-centered">
			<div className="top-bar">
       <h1 className="fcc-title">React Todo App</h1>


        <div className="credits">
              <h2>Designed and Created by: </h2>
              <h2>Greg Munker</h2>
              <h2>Udemy course:</h2>
              <h2><a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/questions" target="_blank">The Complete React Web App Developer Course</a></h2>
              <h2><a className="github-link" href="https://github.com/Gmunker/ReactToDo" target="_blank">(GitHub Repo)</a></h2>
              <div className="social-buttons expanded button-group">
                  <a className="button secondary" href="http://www.facebook.com/gmunker" target="_blank">Facebook</a>
                  <a className="button secondary" href="https://plus.google.com/u/0/+GregMunker" target="_blank">Google+</a>
                  <a className="button secondary" href="https://github.com/Gmunker" target="_blank">Github</a>
                  <a className="button secondary" href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button" target="_blank">LinkedIn</a>
                  <a className="button secondary" href="https://twitter.com/Gmunker" target="_blank">Twitter</a>
              </div>
            </div>
				

        </div>
 {/*Below the top bar container*/}
				<div className="page-actions">
					<a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
				</div>
				</div>

				
				<div className="row">
					<div className="column small-centered small-11 medium-10 large-5">
						<div className="container">
							<Search/>
							<TodoList/>
							<AddTodo/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

// export let TodoApp = React.createClass({
// 	onLogout(e) {
// 		let {dispatch} = this.props;
// 		e.preventDefault();
//
// 		dispatch(actions.startLogout());
// 	},
// 	render() {
// 		return (
// 			<div>
// 				<div className="page-actions">
// 					<a href="#" onClick={this.onLogout}>Logout</a>
// 				</div>
// 				<h1 className="page-title">Todo App</h1>
// 				<div className="row">
// 					<div className="column small-centered small-11 medium-6 large-5">
// 						<div className="container">
// 							<Search/>
// 							<TodoList/>
// 							<AddTodo/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// });

export default Redux.connect()(TodoApp);
