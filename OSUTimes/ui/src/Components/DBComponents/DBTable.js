import React from "react";
// import components
import DBTableHeaders from "./DBTableHeaders";
import DBTableRow from "./DBTableRow";
import DBAddRow from "./DBAddRow";

function DBTable({objects, columns}){
    return(
        <>
        <table>
            <thead>
                <tr>
                    {
                    columns.map((column, i)=>
                        <DBTableHeaders
                            column = {column}
                            key = {i}
                            />)}
                </tr>
            </thead>
            <tbody>
                {
                objects.map((object, i)=>
                    <DBTableRow
                        object = {object}
                        key = {i}
                        columns = {columns}
                    />)}
                </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td colSpan={columns.length + 2}>
                        <form>
                        {columns.slice(1).map((colName, i)=>
                                            <DBAddRow
                                                key = {i}
                                                colName ={colName}
                                                />
                                            )}
                        <button>Add Row</button>
                        </form>
                    </td>
                </tr>
            </tbody>
            </table>
        </>
    )
}
export default DBTable;