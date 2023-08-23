import React, { useState, useMemo } from 'react'

export default function Characters({data}) {

    const [search, setSearch] = useState("")
    
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
            <div className="display-card" key={`${char["_id"]}`}>
                
                <h1 className='t-shadow'>{index+1}. {char.name}</h1>
                {Object.keys(char).map((key, ind) => {
                    if(key !== "name" && key !== "_id" && char[key] !== "" && char[key] !== "NaN"){

                        if(key === "wikiUrl"){
                            return (
                                <p className='t-shadow charInfo' key={`${key}${ind}`}>{key}: <a href={char[key]} target='_blank' className="charLink" rel="noopener noreferrer">{char[key]}</a></p>
                            )
                        } else {

                            return (
                                <p className='t-shadow charInfo' key={`${key}${ind}`}>{key}: {char[key]}</p>
                            )
                        }
                    }
                })}
                
            </div>
        )
    })

    return (
        <> 
            <input type="search" name="charSearch" id="charSearch" className='charSearch' autoFocus placeholder='Search by name...' onInput={e => setSearch(e.target.value)}/>
            {charsData}
        </>
    )
}
