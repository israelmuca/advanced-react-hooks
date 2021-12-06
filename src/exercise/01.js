// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (currentCount, {type, step}) => {
  switch (type) {
    case 'INCREMENT':
      return currentCount + step

    case 'DECREASE':
      return currentCount - step

    default:
      throw new Error(`invalid changeCount type ${type}`)
  }
}

function Counter({initialCount = 0, step = 3}) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount)

  const increment = () => changeCount({type: 'INCREMENT', step})
  const decrease = () => changeCount({type: 'DECREASE', step})
  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={decrease}>{count}</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
