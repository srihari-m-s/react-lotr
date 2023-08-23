import React from 'react'

export default function Movies({data}) {

    let moviesArray = [{series:"The Lord of the Rings Series", movies: []}, {series: "The Hobbit Series", movies: []}];
    data.docs.map((movie, index) => {
        if(index > 1 && index < 5){
            moviesArray[1]["movies"].push(movie);
        }
        if(index >= 5 ){
            moviesArray[0]["movies"].push(movie);
        }
    })
    // console.log(moviesArray)

    const moviesData = moviesArray.map((movie, index) => {
        return (
            <div className="display-card" key={`${movie.series}`}>
                <h1 className='t-shadow'>{movie.series}</h1>
                <ol>
                    {movie.movies.map((movieInfo, index) => {
                        return (
                            <h2 key={`${movieInfo["_id"]}`} className='t-shadow'>
                                <li>{movieInfo.name}</li>
                                {Object.keys(movieInfo).map((element, index) => {
                                  if(element !== "name" && element !== "_id"){
                                    return <p key={`${element}${index}`} className='movieInfo'>{element}: {movieInfo[element]}</p>
                                  }  
                                })}
                            </h2>
                        )
                    })}
                </ol>
            </div>)
    })

    return (
        <>
            {moviesData}
        </>
    )
}
