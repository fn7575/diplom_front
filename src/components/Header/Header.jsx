import React, {useState} from "react";
import './style.css'
import logo from '../../img/logo.jpg'
import axio from "axios";

const Header = () => {

    const handleLoginClick = () => {
        const inputs = document.getElementsByTagName("input")
        // axio.post('/api/login', {email: inputs[0], password: inputs[1]}).then()
    }

    return(
        <div className='header'>
            <img className='logo' src={logo} alt={''}/>
            <div className="dropdown">
                <button type="button" className="log_button">login</button>
                <div className="dropdown-content">
                    <label className="log_input_label"> Введите логин
                        <input type="text" className="log_input"/>
                    </label>
                    <label className="log_input_label"> Введите пароль
                        <input type="password" className="log_input"/>
                    </label>
                    <button type="button" className="log_button_confirm" onClick={handleLoginClick}>Войти</button>
                </div>
            </div>
        </div>
    )
}

export default Header