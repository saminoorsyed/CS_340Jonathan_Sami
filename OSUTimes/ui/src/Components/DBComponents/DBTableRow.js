import React, {useState} from "react";
import {MdOutlineClose, MdModeEditOutline} from 'react-icons/md'

// import components
import DBRowItem from "./DBRowItem";
import DBEditRow from "./DBEditRow";

function DBTableRow({object, columns}){
    const handleDeleteClick = (id, username)=>{
        alert(`you deleted ${username} with an id of ${id}`)
    };
    const handleEditClick = ()=>{
        let editToggle =  !editClicked;
        setEditClicked(editToggle);
    }

    let [editClicked, setEditClicked] = useState(false);
    return(
        <>
            <tr>
                {columns.map((colName, i)=>
                    <DBRowItem
                        object = {object}
                        key = {i}
                        colName ={colName}
                        />
                        )}
                <td>
                <MdOutlineClose style={{color: "red",fontWeight: "bold" }} onClick={ () =>  handleDeleteClick(object[columns[0]], object[columns[1]]) }/>
                </td>
                
                <td>
                    <MdModeEditOutline style={{color: "red",fontWeight: "bold" }} onClick={ () =>  handleEditClick(object[columns[0]], object[columns[1]]) }/>
                </td>
            </tr>
            {editClicked &&
                <tr>
                    <td colSpan={columns.length +2}>
                        <form>
                        {columns.slice(1).map((colName, i)=>
                                            <DBEditRow
                                                object = {object}
                                                key = {i}
                                                colName ={colName}
                                                />
                                            )}
                        <button>Update</button>
                        </form>
                    </td>
                </tr>
            }
        </>
    )
}

export default DBTableRow