import './TaskDescriptionStyle.scss'
import {TypeTaskDescriptionsProps} from "../../../types/types";

const TaskDescription = ({description}: {description: TypeTaskDescriptionsProps['description']}) => {

    return(
        <p className='task-description'>{description}</p>
    )
}

export default TaskDescription;