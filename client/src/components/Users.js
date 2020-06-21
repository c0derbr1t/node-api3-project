import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import User from './User';
import AddUser from './AddUser';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://node-api3-brit.herokuapp.com/api/users')
            .then(res => {
                console.log("Users: ", res);
            })
            .catch();
    }, []);
    return (
        <h2>Users</h2>
    )
};

export default Users;