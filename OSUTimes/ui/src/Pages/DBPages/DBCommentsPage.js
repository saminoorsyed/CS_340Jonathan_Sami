import React from "react";
import {useState} from 'react';

// import components
import DBTable from "../../Components/DBComponents/DBTable";


function DBCommentsPage(){
    let dbComments = [                
        {
            "comment_id":0,
            "post_id":1,
            "user_id":2,
            "date_commented":"3540-25-28 15:44:52.123",
            "comment_text":"Great article Doctor</p>",
        },
        {
            "comment_id":1,
            "post_id":2,
            "user_id":1,
            "date_commented":"3540-25-28 15:44:52.123",
            "comment_text":"Novel insight into the collective",
        },
        {
            "comment_id": 2,
            "post_id": 2,
            "user_id": 1,
            "date_commented": "3540-25-28 15:44:52.123",
            "comment_text": "I hate the Borg!!!",
        }
    ]
    let dbColumns = ["comment_id", "post_id", "user_id", "date_commented", "comment_text"];

    const [columns, setColumns] = useState(dbColumns);
    const [comments, setComments] = useState(dbComments);
    return(
    <section>
        <h2>Welcome to the Comments table page</h2>
        <DBTable
            objects = {comments}
            columns = {columns}/>
    </section>
    );
};

export default DBCommentsPage;