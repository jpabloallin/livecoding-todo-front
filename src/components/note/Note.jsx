import React, { useContext } from 'react'
import { deleteNote, putNote } from '../../actions/noteActions/noteActions';
import { Store } from '../../state/StoreProvider';

const Note = ({note}) => {

  const {dispatch} = useContext(Store)

  const onCheckbox = async (e)=> {
    const checked = e.currentTarget.checked;
    const noteWithCheckbox = {...note, done: checked}
    const response = await putNote(noteWithCheckbox)
    const action = {
      type: 'update-note',
      payload: response
    }
    dispatch(action)
  }

  const onDeleteNote = async (id) => {
    const response = await deleteNote(id);
    if(response.status === 200){
      const action = {
        type: 'delete-note',
        payload: note
      }
      dispatch(action)
    }
  }

  const editNote = ()=>{
    const action = {
      type: 'add-note-to-be-updated',
      payload: note
    }
    dispatch(action)
  }

  const addHashtag = ()=>{
    console.log('new hashtag')
  }
  return (
    <div>
      <h2 style={note.done?{'textDecoration': 'line-through'}:{}}>{note.message}</h2>
      <input onChange={onCheckbox} type="checkbox" checked={note.done} />
      <button onClick={() => onDeleteNote(note.id)}>delete note</button>
      <button onClick={editNote}>edit note</button>
      <button onClick={addHashtag}>Add hashtag</button>
    </div>
  )
}

export default Note
