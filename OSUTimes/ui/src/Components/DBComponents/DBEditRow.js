import React from "react";

// import components
import SelectOption from './DBSelectOption';

function DBEditRow({object, colName, IdObjects}){
    let isID = false;
    if (colName.slice(-3)=== "_id"){
        isID = true;
    }
    return(
        <>
        {isID &&
            <div className="editRow">
                <label htmlFor = {colName}>{colName.slice(0,-3)}
                    <select type="text" id={colName}>
                        {IdObjects[colName].map((IDobject, i)=>
                            <SelectOption
                            IdName = {IDobject[0]}
                            IdNumber = {IDobject[1]}
                            key = {i}
                            />)}
                    </select>
                </label>
            </div>
        }
        {!isID &&
            <div className="editRow">
                <label htmlFor = {colName}>{colName}
                <input type="text" placeholder={object[colName]}/>
                </label>
            </div>
        }
        </>
    )
}

export default DBEditRow