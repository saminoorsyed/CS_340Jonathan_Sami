import React from 'react';

function DBRowItem({object,colName}){

    return(

        <td>
            <div class="tableItem">{object[colName]}</div>
        </td>
    )
}

export default DBRowItem;