import React from "react";
import {getArray} from "../../utils/utils";

export function Pagination({pageNumber,
                             pageCnt,
                             onClick})
{

    const lItems = [];
    for(let index=1; index<=pageCnt; index+=1)
        lItems.push(
            <li 
                style={{color:(pageNumber+1 == index?"red":"blue")}}
                key={index}
                onClick={e=>onClick(index - 1)}
            >
                {index}
            </li>
        );
    
    return (
        <>
            {
                pageCnt ==0 && null
            }
            
            {
                pageCnt>0 && 
                <ul className="pagination_list">
                    {lItems}
                </ul>
            }
        </>
    )
}