import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useSelector } from 'react-redux'
import Books from './Books';
import Movies from './Movies';
import Characters from './Characters';
import './Display.css';

export default function Display() {

    let selection = useSelector((state) => state.selection.selection);
    let fetchURL = "";

    if(selection){
        fetchURL = "https://the-one-api.dev/v2/" + selection;
    }

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['selection', selection],
        queryFn: async () => {

            if(selection === "") {return null}

            return await fetch(fetchURL, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer IsO8PE03WN7jbz8rsZYp'
            }
            })
            .then(response => response.json())
            .then(data => data)},
        staleTime: 1000 * 60,
    })

    const displayComponent = {
        "book": <Books data={data}/>,
        "movie": <Movies data={data}/>,
        "character": <Characters data={data}/>
    }

    if(!selection) {
        return
    }

    if(isLoading) {
        return (
            <h3 className='loading'>Loading... Please wait.</h3>
        )
    }

    if(isSuccess) {

        return (
          <div className='display'>
            {displayComponent[selection]}
          </div>
        )
    }
}
