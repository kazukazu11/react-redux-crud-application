import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component{
	//constructorは初期化処理で実行されるメソッド
	constructor(props){
		super(props)
		this.state = { count: 0}  //counteをkeyとして、値が0という意味
	}

	handlePlusButton = () => {
		//this.state = { count: this.state.count + 1}のように、
		//stateを直接いじっては駄目。setStateを使いなさい
		//何故かというと、setStateが実行されるとrenderが実行される。
		this.setState({ count: this.state.count + 1 })
	}

	handleMinusButton = () => {
		this.setState({ count: this.state.count - 1 })
	}

	render(){
		return(
			<React.Fragment>
				<div>count: { this.state.count }</div>
				<button onClick={this.handlePlusButton}>+1</button>
				<button onClick={this.handleMinusButton}>-1</button>
			</React.Fragment>
		)
	}
}

export default App;
