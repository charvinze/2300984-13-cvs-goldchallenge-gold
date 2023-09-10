import api from "../../api";
import React from 'react';
import ReactDOM from "react-dom/client";

const Landing = () => {
    const login = async () => {
        try {
            const response = await api.loginAdmin({
                email: "admin@bcr.io",
                password: "123456"
            });
            localStorage.setItem("token", response.data.access_token);

            const getCarResp = await api.getCars();
            console.log("response", getCarResp);
        } catch(error) {
            console.log("error", error);
        }
    };

    return (
        <>
            <button className="btn btn-primary" onClick={() => {login()}}>
                click
            </button>
        </>
    );
}


export default Landing;