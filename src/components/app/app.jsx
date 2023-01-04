import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                { name: 'John S.', salary: 800, increase: true, rise: true, id: 1 },
                { name: 'Igor M.', salary: 200, increase: false, rise: false, id: 2 },
                { name: 'Nikita U.', salary: 400, increase: true, rise: false, id: 3 },
                { name: 'Sonya A.', salary: 300, increase: false, rise: false, id: 4 }
            ],
            term: ''
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {

            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addItem = (name, salary) => {

        this.setState(({data}) => {

            const employee = {
                name: name,
                salary: salary,
                increase: false,
                rise: false,
                id: this.maxId++
            }
    
            const clonedData = data.map(item => {return {...item}});
            clonedData.push(employee);

            return {
                data: clonedData
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    //Поиск сотрудников
    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1 //Фильтрация по вхождению term в item.name
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    render() {
        const {data, term} = this.state;
        const totalCount = this.state.data.length;
        const increaseCount = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmployee(data, term);

        return (
            <div className="app">
                <AppInfo 
                    totalCountEmployees={totalCount}
                    increaseCountEmployees={increaseCount}
                    />
    
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}
                        />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
    
                <EmployeesAddForm 
                    onAdd={this.addItem}
                    />
            </div>
        );
    }
}

export default App;