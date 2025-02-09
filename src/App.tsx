import {useState} from "react";
import './index.css'
import AddNewTask from "./components/Organisms/AddNewTask/AddNewTask";
import TasksList from "./components/Organisms/TasksList/TasksList";

function App() {

    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasks')) ?? [])

    const handleDeleteTask = (indexToRemove: number) => {
        const updatedTasks = taskList.filter((_, index) => index !== indexToRemove);
        setTaskList(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    const handleAddNewTask = (data) => {
        console.log(data)
        const a = [...taskList]
        a.push(data)
        setTaskList(a)
        localStorage.setItem('tasks', JSON.stringify(a))
    }

    return (
        <div className='to-do-container'>
            <AddNewTask handleAddEvent={handleAddNewTask}/>
            <TasksList taskList={taskList} handleDeleteTask={handleDeleteTask}/>
        </div>
    )
}

export default App
