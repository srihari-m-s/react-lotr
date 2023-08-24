import React from 'react';
import { useInView } from 'react-intersection-observer';


export default function LazyListItem({char, index}) {

    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
        fallbackInView: true,
    });

    return (

        <div ref={ref} className={`display-card transition-opacity ${inView ? 'opacity-1' : 'opacity-0'}`} >
            <h1 className='t-shadow'>{index+1}. {char.name}</h1>
            <div>
                {inView ? Object.keys(char).map((key, ind) => {
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
                    }) : null }
            </div>
        </div>
    )
}
