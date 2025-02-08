import InputForm from "../../Molecules/InputForm/InputForm";
import ButtonBase from "../../Atoms/ButtonBase/ButtonBase";
import './AddNewTaskStyle.scss';

const AddNewTask = () => {
    return(
        <div className='new-task-container'>
            <InputForm placeholder='Write task title' label='Task title'/>
            <InputForm placeholder='Write task description' label='Task description'/>
            <ButtonBase buttonText='Save'/>
        </div>
    )
}

export default AddNewTask;