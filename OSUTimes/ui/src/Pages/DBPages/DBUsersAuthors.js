import React from "react";
import {useState} from 'react';

// import components
import DBTable from "../../Components/DBComponents/DBTable";

function DBUsersAuthorsPage(){
    let dbUsersAuthors = [                
        {
            "user_author_id":0,
            "user_id": "Moral Officer",
            "author_id":"Borg",
        },
        {
            "user_author_id": 1,
            "user_id":"Moral Officer",
            "author_id": "TheDoctor",
        },
        {
            "user_author_id":2,
            "user_id":"Chief Engineer",
            "author_id": "Borg",
        }
    ]
    let dbColumns = ["user_author_id", "user_id", "author_id"];
    let dbIdObjects = {
        "user_id": [["Moral Officer",0],[ "Chief Engineer",1], ["Lead Botanist",2]],
        "author_id": [["TheDoctor",0], ["Borg",1], ["Lieutenant",2]]
    }
    const [columns, setColumns] = useState(dbColumns);
    const [usersAuthors, setUsersAuthors] = useState(dbUsersAuthors);
    const [IdObjects, setIdObjects] = useState(dbIdObjects);
    return(
    <section>
        <h2>Welcome to the Users Authors table page</h2>
        <DBTable
            objects = {usersAuthors}
            columns = {columns}
            IdObjects = {IdObjects}/>
    </section>
    );
};

export default DBUsersAuthorsPage;