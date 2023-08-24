import React, { useState, useMemo } from 'react'
import LazyListItem from './LazyListItem'

export default function Characters({data}) {

    const [search, setSearch] = useState("");
    
    function filterArray(search){
        if(search === ""){
            return data.docs
        } else {
            return (data.docs.filter(char => char.name.toLowerCase().includes(search.toLowerCase())))
        }
    }

    const visibleChars = useMemo(() => filterArray(search), [search])

    let charsData = visibleChars.map((char, index) => {

        return (            
                <LazyListItem char={char} index={index} key={`${char["_id"]}`}/>            
        )
    })

    return (
        <> 
            <input type="search" name="charSearch" id="charSearch" className='charSearch' autoFocus placeholder='Search by name...' onInput={e => setSearch(e.target.value)}/>
            {charsData}
        </>
    )
}
