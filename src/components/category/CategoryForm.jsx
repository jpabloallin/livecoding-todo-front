import React, { useContext, useState } from 'react'
import { postCategory } from '../../actions/categoryActions/categoryActions'
import { Store } from '../../state/StoreProvider'

const CategoryForm = () => {

  const [title, setTitle] = useState('')

  const {dispatch} = useContext(Store)

  const addCategory = async (e)=>{
    e.preventDefault()
    if(title){
      const category = {
        title
      }
      const response = await postCategory(category)
      const action = {
        type: 'create-category',
        payload: response
      }
      dispatch(action)
      setTitle('')
    }
  }

  const addingTitle = (e)=>{
    setTitle(e.target.value)
  }

  return (
    <form className="form-control-sm border border-5">
      <label htmlFor="category"></label>
      <input onChange={addingTitle} type="text" name="category" value={title} className="form-control form-control-lg mt-3"/>
      <div className="d-grid gap-2 col-6 mx-auto m-3">
      <button onClick={addCategory} className="btn btn-success">Add category</button>
      </div>
    </form>
  )
}

export default CategoryForm
