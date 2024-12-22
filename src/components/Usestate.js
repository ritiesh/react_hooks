import React from 'react'
import {useState} from 'react'

function Usestate() {

  const [count, setCount] = useState(0)
  function increase() {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>
        The count is {count} .
      </h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default Usestate