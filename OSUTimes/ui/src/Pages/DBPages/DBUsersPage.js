import React from "react";
import {useState} from 'react';

// import components
import DBTable from "../../Components/DBComponents/DBTable";
function DBUsersPage(){
    let dbUsers = [                
        {
            "user_id":0,
            "username":"Captain",
            "fname":"Kathryn",
            "lname":"Janeway",
            "email":"kjneway@voyager.com",
        },
        {
            "user_id": 1,
            "username":"Commander",
            "fname": "Amal",
            "lname": "Chakotay",
            "email": "achakotay@makis.com",
        },
        {
            "user_id":2,
            "username":"Lieutenant",
            "fname": "Tom",
            "lname": "Paris",
            "email":"tparis@starfleet.com",
        }
    ]
    let dbColumns = ["user_id", "username", "fname", "lname", "email"];
    let IdObjects = {}
    const [columns, setColumns] = useState(dbColumns);
    const [users, setUsers] = useState(dbUsers);
    return(
    <section>
        <h2>Welcome to the Users Table page</h2>
        <DBTable
            objects = {users}
            columns = {columns}
            IdObjects = {IdObjects}/>
    </section>
    );
};

export default DBUsersPage;