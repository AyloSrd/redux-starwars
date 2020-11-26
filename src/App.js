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
              <div id="1">
                <h2>{film.title}</h2>
              </div>
              <div id="2">
                <h3>Order of release:<br/>{ count }</h3>
              </div>
              <div id="3">
                <h3>Episode number:<br/>{ film.episode_id }</h3>
              </div>
            </div>
            <div id="btns">
              <button disabled={ count <= 1 } onClick={() => dispatch(prev())}><div id="prev"></div></button>
              <button disabled={ count >= 6 } onClick={() => dispatch(next())}><div id="next"></div></button>
            </div>
        </div>
    )
}

export default App
