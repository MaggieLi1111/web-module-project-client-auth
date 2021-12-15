import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const AddFriend = () => {

    const { push } = useHistory();

    const [ form, setForm ] = useState({
        name:"",
        age:"",
        email:""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value     
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        axios.post("http://localhost:9000/api/friends",form,{
            headers:{
                authorization:token
            }
        })
        .then( res => {
            console.log(res);
            push("/friends");
        })
        .catch(err => {
            console.error(err);
        })
    }


    console.log(form);
    
    return (
    <div>
        <h2>Add Friend</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Username :</label>
                <input name="name" id="name" onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="age">Age :</label>
            <input name="age" id="age" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email :</label>
                <input name="email" id="email" onChange={handleChange}/>
            </div>
            <button>Submit</button>
        </form>
    </div>)
  }


export default AddFriend;