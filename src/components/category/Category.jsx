import React from 'react'
import NoteList from '../note/NoteList'

const Category = ({category: {title, notes}}) => {
  return (
    <div>
      <h2>{title}</h2>
      <NoteList notes={notes}/>
    </div>
  )
}

export default Category
