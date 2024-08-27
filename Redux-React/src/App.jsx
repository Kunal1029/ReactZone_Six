import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'




function App() {
  
const isEdits = useSelector((state)=>state.editing);


  return (
    <div>
      <h1>Redux with React</h1>
      {isEdits.isediting ? "": <AddTodo />}
      
      <Todos />
    </div>
  )
}

export default App
