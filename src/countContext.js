import {createContext, useState, useContext} from 'react'

const CountContext = createContext()

const CountProvider = props => {
  const [count, setCount] = useState(0)
  const value = [count, setCount]

  return <CountContext.Provider value={value} {...props} />
}

const useCount = () => {
  const useCount = useContext(CountContext)

  if (useCount) {
    return useCount
  } else {
    throw new Error('`useCount` must be used within a CountProvider')
  }
}

export {CountProvider, useCount}
