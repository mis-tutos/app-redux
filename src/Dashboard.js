import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { logOut } from "./action/auth";

const Dashboard = ({isLoggedIn, logOut}) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/register">Register</Link>
            <br/>
            <Link to="/login">login</Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, {logOut})(Dashboard)