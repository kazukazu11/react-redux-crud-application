import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component{
	//constructorは初期化処理で実行されるメソッド
	constructor(props){
		super(props)
		this.state = { count: 0}  //counteをkeyとして、値が0という意味
	}

	handlePlus1Button = () => {
		//this.state = { count: this.state.count + 1}のように、
		//stateを直接いじっては駄目。setStateを使いなさい
		//何故かというと、setStateが実行されるとrenderが実行される。
		this.setState({ count: this.state.count + 1 })
	}

	handlePlus2Button = () => {
		this.setState({ count: this.state.count + 2 })
	}

	handleMinus1Button = () => {
		this.setState({ count: this.state.count - 1 })
	}

	handleMinus2Button = () => {
		this.setState({ count: this.state.count - 2 })
	}

	render(){
		return(
			<React.Fragment>
				<div>count: { this.state.count }</div>
				<button onClick={this.handlePlus1Button}>+1</button>
				<button onClick={this.handlePlus2Button}>+2</button>
				<button onClick={this.handleMinus1Button}>-1</button>
				<button onClick={this.handleMinus2Button}>-2</button>
			</React.Fragment>
		)
	}
}

export default App;
