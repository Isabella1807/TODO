import {useState} from "react";
import './index.css'
import AddNewTask from "./components/Organisms/AddNewTask/AddNewTask";
import TasksList from "./components/Organisms/TasksList/TasksList";

function App() {

    const [taskList, setTaskList] = useState([
        {
            title: 'title1',
            description: 'description1'
        },
        {
            title: 'title2',
            description: 'description2'
        }
    ])

    const handleDeleteTask = (indexToRemove: number) => {
        console.log(`du klikkede på ${indexToRemove}`)
        const updatedTasks = taskList.filter((_, index) => index !== indexToRemove);
        setTaskList(updatedTasks);
    }

    return (
        <div className='to-do-container'>
            <AddNewTask/>
            <TasksList taskList={taskList} handleDeleteTask={handleDeleteTask}/>
        </div>
    )
}

export default App
