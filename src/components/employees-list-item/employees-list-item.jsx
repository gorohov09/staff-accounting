import './employees-list-item.css'

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, onUpdateSalary, increase, rise} = props;
    const increaseClass = increase ? ' increase' : '';
    let classes = `list-group-item d-flex justify-content-between ${increaseClass}`; 

    const likeClass = rise ? ' like' : '';
    classes += likeClass;

    return (
        <li className={classes}>
            <span 
                className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle="rise"
                >{name}</span>
            <input onChange={onUpdateSalary} type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;