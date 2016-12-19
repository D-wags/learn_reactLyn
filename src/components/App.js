import React from 'react';
import Header from './Header';


// use this syntax for state of just use fxn component syntax
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state= {pageHeader: "Naming Conventions"};
	};

	componentDidMount() {
		console.log("mounted");
		//ajax/events, etc...
	}
	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				<div>
					
				</div>
			</div>
		);
	}
}

export default App;
