import { useState, useRef } from "react"

/**
 * Component that renders the hashtag form 
 * @param {*} param0 
 * @returns 
 */

/**
 * On change function to set hashtag's name
 * @param {*} param0 
 * @returns 
 */
const NoteHashtag = ({newHashtag, note}) => {

  const formRef = useRef(null);
  const [hashtag, setHashtag] = useState('')

  const addHashtag = (event) =>{
    const newHashtagName = event.target.value
    setHashtag(newHashtagName)
  }

  return (
    <form ref={formRef}>
      <div className= "d-flex align-items-center" >
        <input onChange={addHashtag} type="text" name="addHashtag" placeholder="Add Hashtag"
        className="form-control form-control-lg"/>
        <button 
        //onClick={() => updateTodo(todo, todoName)} className="btn btn-warning me-2 m-1"
        >
          Save Hashtag</button>
        </div>
    </form>
  )
}

export default NoteHashtag