import React, { useLayoutEffect, useRef, useState } from 'react'

const Uselayout = () => {
  const [toggle, setToggle] = useState(false)
  const inputRef = useRef()

  useLayoutEffect(() => {
    if (inputRef.current != null) {
      const width = inputRef.current.getBoundingClientRect();
      inputRef.current.style.paddingTop = `${width.height}px`
    }

  }, [toggle])
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h2 ref={inputRef}> Code has done </h2>}
    </div>
  )
}

export default Uselayout