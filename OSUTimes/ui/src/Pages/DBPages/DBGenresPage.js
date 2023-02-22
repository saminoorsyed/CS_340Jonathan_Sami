import React from "react";
import {useState} from 'react';

// import components
import DBTable from "../../Components/DBComponents/DBTable";

function DBGenresPage(){
    let dbGenres = [                
        {
            "genre_id":0,
            "genre_name":"Anthropology",
        },
        {
            "genre_id": 1,
            "genre_name":"Music",
        },
        {
            "genre_id":2,
            "genre_name":"Blaspheme",
        }
    ]
    let dbColumns = ["genre_id", "genre_name"];
    let IdObjects = {} 

    const [columns, setColumns] = useState(dbColumns);
    const [genres, setGenres] = useState(dbGenres);
    return(
    <section>
        <h2>Welcome to the Genres table page</h2>
        <DBTable
            objects = {genres}
            columns = {columns}
            IdObjects = {IdObjects}/>
    </section>
    );
};

export default DBGenresPage;