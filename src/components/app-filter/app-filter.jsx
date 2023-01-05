import './app-filter.css'

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        console.log(active);
        return (
            <button 
                className={active ? "btn btn-light" : "btn btn-outline-light"}
                type="button"
                onClick={() => props.onUpdateFilter(name)}
                key={name}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;

// class AppFilter extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             all: true,
//             rise: false,
//             salary: false
//         }
//     }

//     onClickButton = (e) => {
//         const select = e.currentTarget.getAttribute('data-select')

//         if (select === 'all')
//             this.setState(state => ({all: true, rise: false, salary: false}))
//         if (select === 'rise')
//             this.setState(state => ({all: false, rise: true, salary: false}))
//         if (select === 'salary')
//             this.setState(state => ({all: false, rise: false, salary: true}))

//         this.props.onUpdateFilter(select);
//     }
    
//     render() {
//         const {all, rise, salary} = this.state;
//         const className = "btn btn-outline-light";
//         const classNameSelect = "btn btn-light"

//         return (
//             <div className="btn-group">
//                 <button 
//                     onClick={this.onClickButton}
//                     data-select="all"
//                     className={all ? classNameSelect : className}
//                     type="button">
//                         Все сотрудники
//                 </button>
//                 <button 
//                     onClick={this.onClickButton}
//                     data-select="rise"
//                     className={rise ? classNameSelect : className}
//                     type="button">
//                         На повышение
//                 </button>
//                 <button 
//                     onClick={this.onClickButton}
//                     data-select="salary"
//                     className={salary ? classNameSelect : className}
//                     type="button">
//                         З/П больше 1000$
//                 </button>
//             </div>
//         )
//     }
// }
