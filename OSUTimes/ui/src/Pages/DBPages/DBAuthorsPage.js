import React from "react";
import {useState} from 'react';

// import components
import DBTable from "../../Components/DBComponents/DBTable";
function DBAuthorsPage(){
    let dbAuthors = [                
        {
            "author_id":0,
            "username":"TheDoctor",
            "fname":"The",
            "lname":"Doctor",
            "email":"TheDoctor@Hologram.com",
            "admin_id":2,
            "admin_action":"1) on 11.3.4060 Supreme Commander expressed concern on post content 2)Warned and put on probation on 11.4.4060"
        },
        {
            "author_id": 1,
            "username":"Borg",
            "fname": "Seven",
            "lname": "ofNine",
            "email": "sevenofnine@borg.com",
            "admin_id":2,
            "admin_action": "1)Promote her work to front page (Supreme commander expressed approval)"
        },
        {
            "author_id":2,
            "username":"Lieutenant",
            "fname": "Tom",
            "lname": "Paris",
            "email":"tparis@starfleet.com",
            "admin_id":3,
            "admin_action":"Null"
        }
    ]
    let dbColumns = ["author_id", "username", "fname", "lname", "email", "admin_id", "admin_action"];

    const [columns, setColumns] = useState(dbColumns);
    const [authors, setAuthors] = useState(dbAuthors);
    return(
    <section>
        <h2>Welcome to the Authors table page</h2>
        <DBTable
            objects = {authors}
            columns = {columns}/>
    </section>
    );
};

export default DBAuthorsPage;