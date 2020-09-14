import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "./action/auth";
import { Redirect } from "react-router-dom";

const Register = ({ isLoggedIn, registerUser }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = data;

    const handleInputChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const submitData = () => {
        if (email === "" && password === "") {
            return alert("vacio values");
        } else {
            registerUser(email, password);
        }
        console.log(data);
    };

    if (isLoggedIn) return <Redirect to="/" />;
    else
        return (
            <div>
                <label>E-mail</label>
                <br />
                <input onChange={handleInputChange} name="email" />
                <br />
                <label>password</label>
                <br />
                <input onChange={handleInputChange} name="password" />
                <br />
                <button onClick={submitData}>submit</button>
            </div>
        );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, {registerUser})(Register);
