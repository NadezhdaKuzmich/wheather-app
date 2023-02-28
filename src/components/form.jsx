import React from "react";

const Form = props => (
    <form onSubmit={props.checkWeather} >
        <input onFocus={props.hideError} className="input-search" type="text" name="city" placeholder="Назва міста"/>
        <button className="btn">Переглянути</button>
    </form>
);

export default Form;