import {useState} from 'react';
import './index.scss'
import AddNewTask from './components/Organisms/AddNewTask/AddNewTask';
import TasksList from './components/Organisms/TasksList/TasksList';
import {Task} from './types/types';

function App() {

    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasks') as string) ?? []);

    const handleDeleteTask = (indexToRemove: number) => {
        const updatedTasks = taskList.filter((_: Task, index: number) => index !== indexToRemove);
        setTaskList(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    const handleAddNewTask = (data: Task) => {
        const newTaskList = [...taskList]
        newTaskList.push(data)
        setTaskList(newTaskList)
        localStorage.setItem('tasks', JSON.stringify(newTaskList))
    }

    const handleCheckChange = (taskIndexToggled: number) => {
        const updatedTasks = [...taskList];
        updatedTasks[taskIndexToggled].checked = !updatedTasks[taskIndexToggled].checked;
        setTaskList(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    return (
        <div className='to-do-container'>
            <AddNewTask handleAddEvent={handleAddNewTask}/>
            <TasksList taskList={taskList} handleDeleteTask={handleDeleteTask} handleCheckChange={handleCheckChange}/>
        </div>
    )
}

export default App
