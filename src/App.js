/*jsxのコーディングの際はReactの文字列が必要,逆にjsのコーディングの際はReactの文字列が不必要*/
//import React,{Component} from 'react';

/*Appの事をクラスコンポーネントと言う*/
// class App extends Component{
// 	render(){
// 		// const greeting = "Hi,Tom!"
// 		// const dom = <h1 className="foo">{greeting}</h1>;
// 		// return dom;
// 		/* inputの枠内をクリックすると、コンソールにI am clickedが表示*/
// 		// return <input type="text" onClick={()=>{console.log("I am clicked")}}/>;
// 		/* inputの枠内に文字を入力すると、コンソールにI am clickedが表示*/
// 		// <input type="text" onChange={()=>{console.log("I am clicked")}}/>;
// 		return (
// 			reactの制約として、returnで返すjsxは一つのタグで無ければならない
// 			// <div>
// 			// 	<label htmlFor="bar">bar</label>
// 			// 	<input type="text" onChange={()=>{console.log("I am clicked")}}/>
// 			// </div>
// 			/*こうする事で一つのタグに認識されるものの、最終的に画面に表示されるHTMLには、divが存在しない＝＝余計なタグを存在させなくて済む*/
// 			<React.Fragment>
// 				<label htmlFor="bar">bar</label>
// 				<input type="text" onChange={()=>{console.log("I am clicked")}}/>
// 			</React.Fragment>
// 		)
// 	}
// }

import React from 'react';

/*関数コンポーネント*/
// const App = () =>{
// 	return  (
// 		<div>
// 			<Cat />
// 			<Cat />
// 			<Cat />
// 			<Cat />
// 		</div>
// 	)
// }

// const Cat = () =>{
// 	return  <div>Meow!</div>
// }

/*このAppの事を関数コンポーネント*/
const App = () =>{
	const profiles = [
		{name:"Taro",age:10},
		{name:"Hanako",age:5},
		{name:"NoName"}
	]
	return  (
		/*Userコンポーネントに対して,nameというpropsの属性を与えられる*/
		/*uniqueなキーがプロパティとして存在していないと駄目。
		  ReactではVirtualDomが存在していて、その中でどのDomが変更になったのかを管理。
		  その変更点のみを実際のDomに反映していく。
		  それぞれのDomにキーを与える。
		  必要最低限のDomの範囲をReactが管理。
		  Domを指し示すもの（キーが必要）*/
		<div>
			{
				profiles.map((profile, index)=>{
					return <User name={profile.name} age={profile.age} key={index}/>
				})
			}
		</div>
	)
}

const User = (props) =>{
	return  <div>Hi!,I am {props.name}, and {props.age} years old!</div>
}

/*例えば、ageというpropsの属性に値が入っていない時にdefaultで入れる値の設定*/
User.defaultProps = {
	age:1
}

export default App;
