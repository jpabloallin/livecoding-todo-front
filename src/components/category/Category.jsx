import React, { useContext } from 'react'
import { deleteCategoryBack } from '../../actions/categoryActions/categoryActions';
import { Store } from '../../state/StoreProvider';
import NoteList from '../note/NoteList'

const Category = ({category: {id, title, notes}}) => {

  const {dispatch} = useContext(Store)

  const deleteCategory = async (id)=>{
    const response = await deleteCategoryBack(id)
    if(response.status === 200){
      const action = {
        type: 'deleteCategory',
        payload: id
      }
      dispatch(action)
    }
  }

  return (
    <div className="m-2">
      <hr className="border border-dark"/>
      <hr className="border border-dark"/>
      <div className="d-flex justify-content-center">
      <h2>{title}</h2>
      <button onClick={() => deleteCategory(id)} className="btn btn-danger m-1 p d-flex">Delete category</button>
      </div>
      <NoteList id={id} notes={notes}/>
    </div>
  )
}

export default Category
