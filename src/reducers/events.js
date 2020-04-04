import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
	switch(action.type){
		case READ_EVENTS:
			//console.log(action.response.data)
			//⬆︎配列構造
			//⬇︎オブジェクト構造＝＝こっちの構造の方が扱いやすい
			//console.log(_.mapKeys(action.response.data, 'id'))
			return _.mapKeys(action.response.data, 'id')
		default:
			return events
	}
}