import React from 'react'
import Note from './Note'
import NoteForm from './NoteForm'

const NoteList = ({notes}) => {
  return (
    <div>
      <NoteForm />
      {notes.map(note => <Note key={note.id}note={note}/>)}
    </div>
  )
}

export default NoteList
