import LabelBase from "../../Atoms/LabelBase/LabelBase";
import TaskItem from "../../Molecules/TaskItem/TaskItem";
import './TasksListStyle.scss';

const TasksList = () => {
    return (
        <div className='tasks-list'>
            <LabelBase label='Your tasks'/>
            <TaskItem />
        </div>
    )
}

export default TasksList;