import React, { useContext, useState } from 'react'
import { deleteNote, putNote } from '../../actions/noteActions/noteActions';
import { Store } from '../../state/StoreProvider';
import NoteHashtag from './NoteHashtag';

const Note = ({note}) => {

  const {dispatch} = useContext(Store);

  const [showHashtag, setShowHashtag] = useState(false);


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

  const newHashtag = async (e, note, hashtag, formRef) => { 
    e.preventDefault()
    if(hashtag) {
      const newNoteHashtag = { ...note, hashtag: hashtag };
      let noteHashtagPromise = await fetch(`http://localhost:8081/api/v1/update/note`,
        {
          method: "PUT",
          headers: {"Content-type": "application/json", Accept: "application/json"},
          body: JSON.stringify(newNoteHashtag),
        }
      );

      let noteHashtag = await noteHashtagPromise.json();
      dispatch({
        type: "new-hashtag",
        payload: noteHashtag
      });
      formRef.current.reset()
    }
  };

  const showHashtagInput = () => {
    setShowHashtag(!showHashtag);
  };

  return (
    <div>
      <h2 style={note.done?{'textDecoration': 'line-through'}:{}}>{note.message}</h2>
      <h4>{note.hashtag}</h4><br/><br/>
      <input onChange={onCheckbox} type="checkbox" checked={note.done} />
      <button onClick={() => onDeleteNote(note.id)}>delete note</button>
      <button onClick={editNote}>edit note</button>
      <button onClick={showHashtagInput}>Add hashtag</button>
      {showHashtag && <NoteHashtag newHashtag = {newHashtag} note = {note} />}
    </div>
  )
}

export default Note
