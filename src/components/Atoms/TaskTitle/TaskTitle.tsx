import './TaskTitleStyle.scss'
import {TypeTaskDescriptionsProps} from "../../../types/types";

const TaskTitle = ({title}: {title: TypeTaskDescriptionsProps['title']}) => {
    return (
        <h1 className='task-title'>{title}</h1>
    )
}

export default TaskTitle;