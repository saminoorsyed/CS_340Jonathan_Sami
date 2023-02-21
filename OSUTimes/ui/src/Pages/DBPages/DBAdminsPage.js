import React from "react";
import {useState} from 'react';

// import components
import DBTable from "../../Components/DBComponents/DBTable";

function DBAdminsPage(){
    let dbAdmins = [                
        {
            "admin_id":0,
            "username":"Moral Officer",
            "fname":"Mister",
            "lname":"Neelix",
            "email":"mneelix@talax.com@voyager.com",
        },
        {
            "admin_id": 1,
            "username":"Chief Engineer",
            "fname": "Belana",
            "lname": "Torres",
            "email": "btorres@makis.com",
        },
        {
            "admin_id":2,
            "username":"Lead Botanist",
            "fname": "Kes",
            "lname": "Ocampa",
            "email":"kocampa@telepath.com",
        }
    ]
    let dbColumns = ["admin_id", "username", "fname", "lname", "email"];

    const [columns, setColumns] = useState(dbColumns);
    const [admins, setAdmins] = useState(dbAdmins);
    return(
    <section>
        <h2>Welcome to the Admins table page</h2>
        <DBTable
            objects = {admins}
            columns = {columns}/>
    </section>
    );
};

export default DBAdminsPage;