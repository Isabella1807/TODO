import InputForm from '../../Molecules/InputForm/InputForm';
import ButtonBase from '../../Atoms/ButtonBase/ButtonBase';
import './AddNewTaskStyle.scss';
import {useState} from 'react';
import {Task} from '../../../types/types';

interface prop {
    handleAddEvent: (task: Task) => void,
}

const AddNewTask = ({handleAddEvent}: prop) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const buildTask = () => {
        const TaskToAdd = {
            title: title,
            description: description,
            id: Math.random().toString(),
            checked: false,
        };
        handleAddEvent(TaskToAdd);
    }

    return(
        <div className='new-task-container'>
            <InputForm placeholder='Write task' label='Task' setValue={setTitle}/>
            <InputForm placeholder='Write description' label='Description' setValue={setDescription}/>
            <ButtonBase buttonText='Save' onClick={buildTask}/>
        </div>
    )
}

export default AddNewTask;