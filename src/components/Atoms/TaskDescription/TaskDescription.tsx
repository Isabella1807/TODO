import './TaskDescriptionStyle.scss'

interface TypeTaskDescriptionsProps {
    description: string,
    isChecked: boolean,
}
const TaskDescription = ({description, isChecked}: TypeTaskDescriptionsProps) => {

    return(
        <p className={`task-description ${isChecked ? 'checked' : ''}`}>{description}</p>
    )
}

export default TaskDescription;