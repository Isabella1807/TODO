import {TypeTaskDescriptionsProps} from "../../../types/types";

const TaskDescription = ({description}: {description: TypeTaskDescriptionsProps['description']}) => {

    return(
        <p>{description}</p>
    )
}

export default TaskDescription;