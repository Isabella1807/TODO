import LabelBase from '../../Atoms/LabelBase/LabelBase';
import TaskItem from '../../Molecules/TaskItem/TaskItem';
import './TasksListStyle.scss';
import {Task} from '../../../types/types';

interface TasksListProps {
    taskList: Task[],
    handleDeleteTask: (index: number) => void,
    handleCheckChange: (index: number) => void,
}

const TasksList = ({taskList, handleDeleteTask, handleCheckChange}: TasksListProps) => {

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