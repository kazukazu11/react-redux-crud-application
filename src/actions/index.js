//actionとはjavascriptのobjectの事、typeの値はuniqueのものでなければならない
//actionを返す関数の事をアクションクリエイターと呼ぶ

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//viewを担当するcomponentで使用する場合、exportしておく
export const increment = () => ({  //⬅️アクションクリエイター
	type: INCREMENT
})

// export const decrement = () => {
// 	return {
// 		type: 'DECREMENT'
// 	}
// }

//⬇︎リファクタリング⬇︎

export const decrement = () => ({
	type: DECREMENT
})