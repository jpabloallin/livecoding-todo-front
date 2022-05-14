import React from 'react'
import Note from './Note'
import NoteForm from './NoteForm'

const NoteList = ({notes, id}) => {
  return (
    <div>
      <NoteForm id={id}/>
      <hr />
      {notes.map(note => <Note key={note.id} note={note}/>)}
    </div>
  )
}

export default NoteList
