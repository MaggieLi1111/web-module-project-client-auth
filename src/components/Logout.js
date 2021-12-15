import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
    const { push } = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.post("http://localhost:9000/api/logout",{}, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log("logout;",res);
                localStorage.removeItem("token");
                push("/login");
            })
            .catch(err => {
                console.error(err);
            })
    },[]);


    return (<div></div>);
}

export default Logout;