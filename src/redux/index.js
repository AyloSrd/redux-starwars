import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

export const next = () => {
    return (dispatch, getState) => {
        const { count } = getState()
        const baseUrl = 'https://swapi.dev/api/films'
        fetch(`${baseUrl}/${count + 1}/`)
            .then(res => res.json())
            .then(res => {
				const { title, director, episode_id } = res
                dispatch({
					type: 'NEXT',
					payload: { 
						title, 
						director,
						episode_id 
					}
                })
            })
    }
}



export const prev = () => {
    return (dispatch, getState) => {
        const { count } = getState()
        const baseUrl = 'https://swapi.dev/api/films'
        fetch(`${baseUrl}/${count - 1}/`)
            .then(res => res.json())
            .then(res => {
				const { title, director, episode_id } = res
                dispatch({
					type: 'PREV',
					payload: { 
						title, 
						director,
						episode_id 
					}
                })
            })
    }
}

const initialState = {
	count: 1,
	film: { 
		title: 'A New Hope', 
		director: 'George Lucas',
		episode_id : '4'
	}
}

const  reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NEXT':
            return (
				{
					count: state.count + 1,
					film: action.payload
				}
			)
        case 'PREV':
            return (
				{
					count: state.count - 1,
					film: action.payload
				}
			)
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store
