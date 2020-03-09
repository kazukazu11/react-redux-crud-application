//import React from 'react';
//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return <div><h1>Hello,world!</h1></div>;
// }

import React,{Component} from 'react';

/*jsxのコーディング*/
// class App extends Component {
//   render(){
//     return <div>Hello,world!</div>;
//   }
// }

/*jsxが使われる理由は⬆︎⬇︎を比べた時に⬆︎の方が直感的に分かりやすい為、最終的な成果物の形式により近い構文で表現できる*/

/*jsのコーディング*/
// class App extends Component {
//   render(){
//     return React.createElement(
//     	"div",
//     	null,
//     	"Hello, world!!"
//     )
//   }
// }

class App extends Component{
	render(){
		return <h1>Hello, world!</h1>;
	}
}

export default App;
