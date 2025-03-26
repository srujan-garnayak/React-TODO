import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = todos;
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto m-1 p-5 rounded-2xl bg-violet-200 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold mb-1'>Add Todo</h2>
          <input onChange={handleChange} value = {todo} type="text" className='w-1/2 border-1 rounded-md bg-white p-1 px-2 text-black' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.map(item=>{

          
          return <div key={todo.id} className="todo flex w-full justify-between my-3">
            <input name = {todo.id} onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} id=''/>
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1'>Delete</button>
            </div>
          </div>

          })}
        
        </div>
      </div>
    </>
  )
}

export default App
