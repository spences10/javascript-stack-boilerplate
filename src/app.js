import React, { useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Hello world!</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Counter is now {count} counts of counting!</p>
    </>
  )
}
