import React from 'react'
import SelectButtons from './SelectButtons'

export default function Selection() {

    const labelList = ["Books", "Movies", "Characters"];

  return (
    <div className="selection">
        <SelectButtons labelList={labelList}/>
    </div>
  )
}
