import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

//В компонент передали data - массив с объектами, котоыре приходят с сервера
const EmployeesList = ({data}) => {

    //Перебераем маccив и каждый элемент превращаем в компонент. Реузультат - массив компонентов EmployeesListItem
    const elements = data.map(item => {
        const {id, ...itemProps} = item; //Деструктуризация по остаточному принципу
        return (
            <EmployeesListItem key={id} {...itemProps} /> //name={item.name} salary={item.salary} == {...item}
        )
    });

    console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;