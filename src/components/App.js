// import React from 'react';
// import Header from './Header';
// import ContestPreview from "./ContestPreview";


// // use this syntax for state of just use fxn component syntax
// class App extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state= {pageHeader: "Naming Conventions"};
// 	};

// 	componentDidMount() {
// 		console.log("mounted");
// 		//ajax/events, etc...
// 	}
// 	render() {
// 		return (
// 			<div className="App">
// 				<Header message={this.state.pageHeader} />
// 				<div>
// 					{this.props.contests.map(contest =>
// 					  <ContestPreview {...contest} />
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default App;

import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';
// import data from '../testData';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {
    // axios.get('/api/contests')
    // .then(resp => {
    //   this.setState({
    //   contests: resp.data.contests
    // });
    //   // console.log(resp.data.contests);
    // })
    // .catch(console.error);
    
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;