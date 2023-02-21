import React from "react";

function DBAddRow({colName}){
    return(
        <>
            <label htmlFor = {colName}>
                <input type="text" placeholder={colName}/>
            </label>
        </>
    )
}

export default DBAddRow