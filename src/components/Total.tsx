import React from 'react'
import {useContext} from 'react'
import ListContext from '../context/ListContext'

function Total() {

    const value = useContext(ListContext)
    const count = value.reduce((sum, item) => sum += 1, 0)

  return (
    <div>Total = {count}</div>
  )
}

export default Total