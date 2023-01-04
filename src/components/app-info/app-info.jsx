import './app-info.css';

const AppInfo = ({totalCountEmployees, increaseCountEmployees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {totalCountEmployees}</h2>
            <h2>Премию получат: {increaseCountEmployees}</h2>
        </div>
    )
}

export default AppInfo;