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
    <div className="border border-dark m-3 rounded border-2 d-flex justify-content-evenly ">
      <h4 className="fw-bold p-3" style={note.done?{'textDecoration': 'line-through'}:{}}>{note.message}</h4>
      <div className="mx-auto pt-3">
        <em className="mt-3">{note.hashtag}</em><br/><br/>
      </div>
      <input className="form-check-input m-4" onChange={onCheckbox} type="checkbox" checked={note.done} />
      <button className="btn btn-danger m-1" onClick={() => onDeleteNote(note.id)}>delete note</button>
      <button className="btn btn-warning m-1" onClick={editNote}>edit note</button>
      <button onClick={showHashtagInput} className="btn btn-success m-1">Add hashtag</button>
      {showHashtag && <NoteHashtag newHashtag = {newHashtag} note = {note} />}
    </div>
  )
}

export default Note
