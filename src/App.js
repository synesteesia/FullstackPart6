import React, {useEffect} from 'react'
import NewAnecdote from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  


  return (
    <div>
      <div><Notification/></div>
      <div><Anecdotes/></div>
      <div><Filter/></div>
      <div><NewAnecdote/></div>
    </div>
  )
}

export default App