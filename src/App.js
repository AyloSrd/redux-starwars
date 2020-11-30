import './App.css'
import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {next, prev} from "./redux"

const App = () => {
  const { count, film } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div id="app">
            <h1>Star Wars Movies Order</h1>
            <div id="card">
              <div id="one">
                <h2>{film.title}</h2>
              </div>
              <div id="two">
                <h3>Order of release:<br/>{ count }</h3>
              </div>
              <div id="three">
                <h3>Episode number:<br/>{ film.episode_id }</h3>
              </div>
            </div>
            <div id="btns">
              <button 
                disabled={ count <= 1 } 
                onClick={() => dispatch(prev())}
                id="prev"
                ></button>
              <button 
                disabled={ count >= 6 } 
                onClick={() => dispatch(next())}
                id="next"></button>
            </div>
        </div>
    )
}

export default App
