import { useRef, useState } from "react"

/**
 * Component that renders the hashtag form 
 * @param {*} param0 
 * @returns 
 */

const NoteHashtag = ({newHashtag, note}) => {

  const formRef = useRef(null);

  const [hashtag, setHashtag] = useState('')

  /**
   * On change function to set hashtag's name
   * @param {*} event 
   */
  const addHashtag = (event) =>{
    setHashtag(event.target.value)
  }

  return (
    <form ref={formRef}>
      <div className= "d-flex align-items-center" >
        <input onChange={addHashtag} type="text" name="addHashtag" placeholder="Add Hashtag"
        className="form-control form-control-lg"/>
        <button 
        onClick={(e) => newHashtag(e, note, hashtag, formRef)} className="btn btn-success">
          Save Hashtag</button>
      </div>
    </form>
  )
}

export default NoteHashtag