// React.createElement('h2', null, "Hello React!!"),
// <h2 className="text-center" style={{color: color}}>Hello React with JSX!! -- {Math.random()}</h2>,

// App.defaultProps = {
// 	headerMessage: "Hello!!"
// };

// import React from "react";
// import ReactDOM from 'react-dom';
// import App from "./components/App";
// import data from "./testdata";

// ReactDOM.render(
// 	<App contests={data.contests}/>,
// 	document.getElementById('root')
// 	);

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import App from './components/App';


axios.get('/api/contests')
	.then(resp => {
		ReactDOM.render(
			<App initialContests={resp.data.contests} />,
			document.getElementById('root')
			);
		})
		.catch(console.error);


// })
// ReactDOM.render(
//   <App initialContests={[]} />,
//   document.getElementById('root')
// );
