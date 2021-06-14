import React from 'react';
import {Link} from "react-router-dom";

export default function Signin(){
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Connector </h2>
                <input
                    type="text"
                    placeholder="email"
                />
                <input
                    type="text"
                    placeholder="password"
                />
                <button className="btn waves-effect waves-light">
                    Login
                </button>
                <h5>
                    <Link to="/signup"> Not have an account ?</Link>
                </h5>

            </div>
        </div>
    )
}