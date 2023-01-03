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
                { name: 'John S.', salary: 800, increase: true, id: 1 },
                { name: 'Igor M.', salary: 200, increase: false, id: 2 },
                { name: 'Nikita U.', salary: 400, increase: true, id: 3 },
                { name: 'Sonya A.', salary: 300, increase: false, id: 4 }
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {

            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    render() {

        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    />
    
                <EmployeesAddForm />
            </div>
        );
    }
}

export default App;