import './Admin.css'
import React from "react";


function Admin() {

    return (
        <div className="MainWrapper">
            <button className="AdminButton">Добавить матч</button>
            <button className="AdminButton">Выставить результат</button>
            <button className="AdminButton">Контроль БД</button>
        </div>

    );
}

export default Admin;