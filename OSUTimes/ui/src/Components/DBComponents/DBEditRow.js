import React from "react";

function DBEditRow({object, colName}){
    return(
        <div className="editRow">
            <label htmlFor = {colName}>{colName}</label>
            <input type="text" placeholder={object[colName]}/>
        </div>
    )
}

export default DBEditRow