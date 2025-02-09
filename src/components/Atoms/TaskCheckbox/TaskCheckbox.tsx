import {useState} from "react";
import './TaskCheckboxStyle.scss'

const TaskCheckbox = ({checked, changeCheckState}) => {
    return (
        <div className="task-checkbox-container">
            <input className='task-checkbox-container__input' type="checkbox" checked={checked} onChange={changeCheckState}/>
        </div>
    )
}

export default TaskCheckbox;