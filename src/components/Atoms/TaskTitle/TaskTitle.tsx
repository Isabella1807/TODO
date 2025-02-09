import './TaskTitleStyle.scss'

interface TypeTaskDescriptionsProps {
    title: string,
    isChecked: boolean
}

const TaskTitle = ({title, isChecked}: TypeTaskDescriptionsProps) => {
    return (
        <h1 className={`task-title ${isChecked ? 'checked' : ''}`}>{title}</h1>
    )
}

export default TaskTitle;