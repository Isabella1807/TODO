import {useState} from "react";
import LabelBase from "../../Atoms/LabelBase/LabelBase";
import TaskItem from "../../Molecules/TaskItem/TaskItem";
import './TasksListStyle.scss';

const TasksList = ({taskList, handleDeleteTask}) => {

    return (
        <div className='tasks-list'>
            <LabelBase label='Your tasks'/>
            {taskList.map((task, index) => (
                <TaskItem key={index} title={task.title} description={task.description} onDelete={() => handleDeleteTask(index)}/>
            ))}
        </div>
    )
}

export default TasksList;