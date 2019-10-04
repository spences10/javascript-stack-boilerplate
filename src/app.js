import React, { useState } from 'react'
import './style.css'

export default () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Hello world!</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>Counter is now {count} counts of counting!</h2>
    </>
  )
}
