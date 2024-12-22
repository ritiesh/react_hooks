import React from 'react'
import { useReducer } from 'react'


const initialState = { count: 0 }
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 }
    case "decrease":
      return { count: state.count - 1 }
    default:
      return state
  }

}
const Usereducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const increase = () => {
    dispatch({ type: "increase" })
  }
  const decrease = () => {
    dispatch({ type: "decrease" })
  }
  return (
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={increase}>in</button>
      <button onClick={decrease}>dec</button>
    </div>
  )
}

export default Usereducer