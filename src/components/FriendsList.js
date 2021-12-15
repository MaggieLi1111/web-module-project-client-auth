import axios from "axios";
import React, { useState, useEffect } from "react";

const FriendsList = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log("friendslist:", res);
                setFriends(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);



    return (<div>
        <h2>FriendsList</h2>
        <ul>
            {
                friends.map((friend, index) => {
                    return <li key={index}>{friend.name} - {friend.age} - {friend.email}</li>
                })
            }

        </ul>
    </div>)
}

export default FriendsList;