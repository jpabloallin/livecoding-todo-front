import React from 'react'
import Note from './Note'
import NoteForm from './NoteForm'

const NoteList = ({notes, id}) => {
  return (
    <div className="m-2 border border-dark border-3 rounded">
      <NoteForm id={id}/>
      <hr className="border border-dark"/>
      {notes.map(note => <Note key={note.id} note={note}/>)}
    </div>
  )
}

export default NoteList
