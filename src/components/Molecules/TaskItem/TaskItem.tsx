import TaskCheckbox from "../../Atoms/TaskCheckbox/TaskCheckbox";
import TaskTitle from "../../Atoms/TaskTitle/TaskTitle";
import './TaskItemStyle.scss'
import TaskDescription from "../../Atoms/TaskDescription/TaskDescription";
import IconBase from "../../Atoms/IconBase";

const TaskItem = () => {
    return (
        <div className='task-items-container'>
            <div className='task-items-container__left-float'>
                <TaskCheckbox/>
                <div className='task-item__descriptions'>
                    <TaskTitle title="WAUW"/>
                    <TaskDescription description="WOW"/>
                </div>
            </div>
            <IconBase/>
        </div>
    )
}

export default TaskItem;