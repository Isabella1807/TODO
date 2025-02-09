import InputForm from "../../Molecules/InputForm/InputForm";
import ButtonBase from "../../Atoms/ButtonBase/ButtonBase";
import './AddNewTaskStyle.scss';
import {useState} from "react";

const AddNewTask = ({handleAddEvent}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const test = () => {
        const womp = {
            title: title,
            description: description,
            id: Math.random().toString(),
            checked: false
        };
        handleAddEvent(womp);
    }

    return(
        <div className='new-task-container'>

            <InputForm placeholder='Write task title' label='Task title' setValue={setTitle}/>
            <InputForm placeholder='Write task description' label='Task description' setValue={setDescription}/>
            <ButtonBase buttonText='Save' onClick={test}/>
        </div>
    )
}

export default AddNewTask;