import React from "react";

function DBAddRow({colName}){
    return(
        <>
            <label htmlFor = {colName}>{colName}
                <input type="text"/>
            </label>
        </>
    )
}

export default DBAddRow