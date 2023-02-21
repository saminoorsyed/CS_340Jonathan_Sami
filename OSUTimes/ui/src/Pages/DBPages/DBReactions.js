import React from "react";
import {useState} from 'react';

// import components
import DBTable from "../../Components/DBComponents/DBTable";


function DBReactionsPage(){
    let dbReactions = [                
        {
            "reaction_id":0,
            "post_id":1,
            "user_id":2,
            "reaction_icon_id":2,
            "date_commented":"3540-25-28 15:44:52.123",
        },
        {
            "reaction_id":1,
            "post_id":2,
            "user_id":1,
            "reaction_icon_id":1,
            "date_commented":"3540-25-28 15:44:52.123",
        },
        {
            "reaction_id": 2,
            "post_id": 2,
            "user_id": 1,
            "reaction_icon_id":1,
            "date_commented": "3540-25-28 15:44:52.123",
        }
    ]
    let dbColumns = ["reaction_id", "post_id", "user_id","reaction_icon_id", "date_commented"];

    const [columns, setColumns] = useState(dbColumns);
    const [reactions, setReactions] = useState(dbReactions);
    return(
    <section>
        <h2>Welcome to the Reactions Table page</h2>
        <DBTable
            objects = {reactions}
            columns = {columns}/>
    </section>
    );
};

export default DBReactionsPage;