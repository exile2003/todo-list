import {useContext} from 'react'
import ListContext from '../context/ListContext'

function Total() {

    const value = useContext(ListContext)
    const count = value.todos.reduce(sum => sum += 1, 0)

  return (
    <div className="d-flex justify-content-center" >Total = {count}</div>
  )
}

export default Total