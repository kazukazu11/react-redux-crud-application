import React from 'react';
import PropTypes from 'prop-types'  //propの型を定義してあげる

const App = () =>{
	const profiles = [
		{name:"Taro",age:10},
		{name:"Hanako",age:5},
		{name:"NoName",age:3}
	]
	return  (
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

//ここでpropの型を定義してあげる
User.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired    //.isRequiredを付けると、今回の場合、ageに値が入ってなかったらエラーになる。
}

export default App;
