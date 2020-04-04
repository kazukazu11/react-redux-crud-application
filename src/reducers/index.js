//アプリケーション内に存在する全てのreducerを総括する
//＝＝全reducerを結合する役割をする
//＝＞その結合を行う役割の機能がreduxパッケージにあるのでインポートする

//combineReducers＝＝reducerを結合する為の関数
import {combineReducers} from 'redux'
import count from './count'

export default combineReducers({ count })

//他にも状態を管理したい場合
//export default combineReducers({ foo, bar, baz })

