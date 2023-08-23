import React from 'react'

export default function Books({data}) {

    const booksData = data.docs.map((book,index) => {
        return (
            <div className="display-card" key={book["_id"]}>
                <h1 className='t-shadow'>{index+1}: {book.name}</h1>
            </div>
        )
    })

    return (
        <>
            {booksData}
        </>
    )
}
