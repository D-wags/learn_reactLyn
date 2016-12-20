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

import data from './testData';
import App from './components/App';

ReactDOM.render(
  <App contests={data.contests} />,
  document.getElementById('root')
);
