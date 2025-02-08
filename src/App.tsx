import './index.css'
import AddNewTask from "./components/Organisms/AddNewTask/AddNewTask";
import TasksList from "./components/Organisms/TasksList/TasksList";

function App() {

    return (
        <div className='to-do-container'>
            <AddNewTask/>
            <TasksList/>
        </div>
    )
}

export default App
