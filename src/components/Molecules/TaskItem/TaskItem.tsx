import TaskCheckbox from "../../Atoms/TaskCheckbox/TaskCheckbox";
import TaskTitle from "../../Atoms/TaskTitle/TaskTitle";
import './TaskItemStyle.scss'
import TaskDescription from "../../Atoms/TaskDescription/TaskDescription";
import IconBase from "../../Atoms/IconBase";

const TaskItem = ({title, description, checked, onDelete, onCheckChange}) => {
    return (
        <div className='task-items-container'>
            <div className='task-items-container__left-float'>
                <TaskCheckbox checked={checked} changeCheckState={onCheckChange}/>
                <div className='task-item__descriptions'>
                    <TaskTitle title={title}/>
                    <TaskDescription description={description}/>
                </div>
            </div>
            <IconBase onClick={onDelete}/>
        </div>
    )
}

export default TaskItem;