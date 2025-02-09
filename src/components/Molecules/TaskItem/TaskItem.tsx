import TaskCheckbox from '../../Atoms/TaskCheckbox/TaskCheckbox';
import TaskTitle from '../../Atoms/TaskTitle/TaskTitle';
import './TaskItemStyle.scss'
import TaskDescription from '../../Atoms/TaskDescription/TaskDescription';
import IconBase from '../../Atoms/IconBase/IconBase';

interface props {
    title: string,
    description: string,
    checked: boolean,
    onDelete: (index: number) => void,
    onCheckChange: (index: number) => void,
}
const TaskItem = ({title, description, checked, onDelete, onCheckChange}: props) => {
    return (
        <div className={`task-items-container ${checked ? 'checked' : ''}`}>
            <div className='task-items-container__left-float'>
                <TaskCheckbox checked={checked} changeCheckState={onCheckChange}/>
                <div className='task-item__descriptions'>
                    <TaskTitle title={title} isChecked={checked}/>
                    <TaskDescription description={description} isChecked={checked}/>
                </div>
            </div>
            <IconBase onClick={onDelete}/>
        </div>
    )
}

export default TaskItem;