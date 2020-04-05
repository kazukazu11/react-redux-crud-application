import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const Root_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
	const response = await axios.get(Root_URL+'/events'+QUERYSTRING)
	dispatch({ type: READ_EVENTS,response })
}

export const postEvent = values => async dispatch => {
	const response = await axios.post(Root_URL+'/events'+QUERYSTRING,values)
	dispatch({ type: CREATE_EVENT,response })
}

export const deleteEvent = id => async dispatch => {
	await axios.delete(Root_URL+'/events/'+id+QUERYSTRING)
	dispatch({ type: DELETE_EVENT,id })
}