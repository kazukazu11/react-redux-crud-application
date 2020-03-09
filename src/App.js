/*jsxのコーディングの際はReactの文字列が必要,逆にjsのコーディングの際はReactの文字列が不必要*/
import React,{Component} from 'react';

class App extends Component{
	render(){
		// const greeting = "Hi,Tom!"
		// const dom = <h1 className="foo">{greeting}</h1>;
		// return dom;
		/* inputの枠内をクリックすると、コンソールにI am clickedが表示*/
		// return <input type="text" onClick={()=>{console.log("I am clicked")}}/>;
		/* inputの枠内に文字を入力すると、コンソールにI am clickedが表示*/
		// <input type="text" onChange={()=>{console.log("I am clicked")}}/>;
		return (
			/*reactの制約として、returnで返すjsxは一つのタグで無ければならない*/
			// <div>
			// 	<label htmlFor="bar">bar</label>
			// 	<input type="text" onChange={()=>{console.log("I am clicked")}}/>
			// </div>
			/*こうする事で一つのタグに認識されるものの、最終的に画面に表示されるHTMLには、divが存在しない＝＝余計なタグを存在させなくて済む*/
			<React.Fragment>
				<label htmlFor="bar">bar</label>
				<input type="text" onChange={()=>{console.log("I am clicked")}}/>
			</React.Fragment>
		)
	}
}

export default App;
