import React, { useState, useEffect } from 'react';

import DBTable from "../../Components/DBComponents/DBTable";
import DBSearchFilter from "../../Components/DBComponents/DBSearchFilter";

function DBReactionIconsPage() {
    const [columnNames, setColumnNames] = useState([]);
    const [dataObjects, setDataObjects] = useState([]);
    useEffect(() => {
        const fetchColumnNames = async () => {
            try {
            const response = await fetch('http://flip3.engr.oregonstate.edu:4002/api/ReactionIcons/columns');
            const data = await response.json();
            const names = data.map((column) => column.COLUMN_NAME);
            setColumnNames(names);
            } catch (error) {
                console.error(error);
            }
        };
        fetchColumnNames();
        }, []);
        
        useEffect(() => {
        const fetchObjects = async () => {
            try {
            const response = await fetch('http://flip3.engr.oregonstate.edu:4002/api/ReactionIcons/');
            const data = await response.json()
            setDataObjects(data);
            console.log(data)
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchObjects();

        }, []);
        let IdObjects = []

        const [query, setQuery] = useState('');
        const results = filterItems(dataObjects, query);

        function filterItems(items, query){
            return items.filter(item => item.reaction_type.includes(query))
        }


        function handleChange(e){
            setQuery(e.target.value);
        }

    return (
        <section>
        <h2>Welcome to the Reaction Icons table page</h2>
        <DBSearchFilter
            query={query}
            onChange={handleChange}
            name={"reaction_type"}
        />
        <DBTable
            objects = {results}
            columns = {columnNames}
            IdObjects = {IdObjects}/>
    </section>
    );
}

export default DBReactionIconsPage;
