import './App.css'
import Addtodos from './Components/AddTodos'
import Todos from './Components/Todos'

function App() {

  return (
    <div className='appContainer'>
      <Addtodos></Addtodos>
      <Todos></Todos>
    </div>
  )
}

export default App
