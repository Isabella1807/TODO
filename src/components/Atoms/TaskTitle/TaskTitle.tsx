import {TypeTaskDescriptionsProps} from "../../../types/types";

const TaskTitle = ({title}: {title: TypeTaskDescriptionsProps['title']}) => {
    return (
        <h1>{title}</h1>
    )
}

export default TaskTitle;