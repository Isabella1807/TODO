import './IconBase.scss';

interface prop {
    onClick: (index: number) => void
}

const IconBase = ({onClick}: prop) => {

    return(
        <div onClick={onClick} className="icon-base">
            <img src="/trashcan.svg" alt="Delete task" className="icon-base__img" width="35" height="35"/>
        </div>
    )
}

export default IconBase;