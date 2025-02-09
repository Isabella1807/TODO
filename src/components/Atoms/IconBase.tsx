
const IconBase = ({onClick}) => {

    return(
        <div onClick={onClick}>
            <img src="/trashcan.svg" alt="Delete task"/>
        </div>
    )
}

export default IconBase;