import React from 'react'
import { useEffect, useState } from 'react'
const Useeffect = () => {

  const [count, setCount] = useState(0)
  const [countfive, setCountfive] = useState(5)
  useEffect(() => {
    document.title = `${countfive} message`
  },[countfive])


  const increase = () => { setCount(count + 1) }
  const five = () => { setCountfive(countfive + 5) }
  return (
    <div>
      <h1>{count} messages </h1>
      <button onClick={increase}>
        increase
      </button>
      <button onClick={five}>Increase 5</button>
    </div>
  )
}

export default Useeffect