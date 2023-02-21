import React from "react";
import {useState} from 'react';

// import components
import DBTable from "../../Components/DBComponents/DBTable";

function DBUsersAuthorsPage(){
    let dbUsersAuthors = [                
        {
            "user_author_id":0,
            "Users.username":"Captain",
            "Authors.username":"Borg",
        },
        {
            "user_author_id": 1,
            "Users.username":"Captain",
            "Authors.username": "Commander",
        },
        {
            "user_author_id":2,
            "Users.username":"Commander",
            "Authors.username": "Chief Engineer",
        }
    ]
    let dbColumns = ["user_author_id", "Users.username", "Authors.username"];

    const [columns, setColumns] = useState(dbColumns);
    const [usersAuthors, setUsersAuthors] = useState(dbUsersAuthors);
    return(
    <section>
        <h2>Welcome to the Users Authors table page</h2>
        <DBTable
            objects = {usersAuthors}
            columns = {columns}/>
    </section>
    );
};

export default DBUsersAuthorsPage;