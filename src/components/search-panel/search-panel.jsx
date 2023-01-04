import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value; //Получаем значение из строки поиска
        this.setState({
            term: term
        }); //Локально устанавливаем term(Помогает сделать управляемый компонент)
        this.props.onUpdateSearch(term); //Локальное состояние пробрасывем наверх
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}
                />
        )
    }
}

export default SearchPanel;