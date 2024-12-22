import React, { useEffect, useState, useRef } from 'react'

const Useref = () => {


  const inputRef = useRef()

  function handle() {
    inputRef.current.style.width = "300px";
    inputRef.current.focus()
  }
  return (
    <div>
      <input type='text' ref={inputRef}></input>
      <button onClick={handle}>ok</button>

    </div>
  )
}

export default Useref
