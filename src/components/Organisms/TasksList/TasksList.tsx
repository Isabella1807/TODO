import {useState} from "react";
import LabelBase from "../../Atoms/LabelBase/LabelBase";
import TaskItem from "../../Molecules/TaskItem/TaskItem";
import './TasksListStyle.scss';

const TasksList = ({taskList, handleDeleteTask, handleCheckChange}) => {

    return (
        <div className='tasks-list'>
            <LabelBase label='Your tasks'/>
            {taskList.map((task, index) => (
                <TaskItem
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    checked={task.checked}
                    onDelete={() => handleDeleteTask(index)}
                    onCheckChange={() => handleCheckChange(index)}
                />
            ))}
        </div>
    )
}

export default TasksList;