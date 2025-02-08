import InputForm from "../../Molecules/InputForm/InputForm";
import ButtonBase from "../../Atoms/ButtonBase/ButtonBase";
import './AddNewTaskStyle.scss';

const AddNewTask = () => {
    return(
        <div className='new-task-container'>
            <InputForm placeholder='Navn' label='Indstast navn'/>
            <InputForm placeholder='Navn' label='Indstast navn'/>
            <ButtonBase buttonText='Save'/>
        </div>
    )
}

export default AddNewTask;