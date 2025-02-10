import './TaskCheckboxStyle.scss'

interface props {
    checked: boolean,
    changeCheckState: (index: number) => void
}
const TaskCheckbox = ({checked, changeCheckState}: props) => {
    return (
        <div className="task-checkbox-container">
            <input className='task-checkbox-container__input' type="checkbox" checked={checked} onChange={changeCheckState}/>
        </div>
    )
}

export default TaskCheckbox;