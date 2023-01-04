import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e, prop) => {
        this.setState({
            [prop]: prop === 'salary' ? Number(e.target.value) : e.target.value
        })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();

        //Проверка валидности введенных данных в форму
        if (this.state.name.length <= 3 || this.state.salary < 0)
            return;

        this.props.onAdd(this.state.name, this.state.salary)

        this.setState({
            name: '',
            salary: 0
        })
    }
    
    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onHandleSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        value={name} 
                        onChange={(e) => this.onValueChange(e, 'name')}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        value={salary} 
                        onChange={(e) => this.onValueChange(e, 'salary')}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;