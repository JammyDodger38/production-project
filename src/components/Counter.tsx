import React from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className={classes.button}>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={increment}>
        Increment
      </button>
      <button className={classes.btn} onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}
