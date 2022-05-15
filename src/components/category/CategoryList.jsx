import React, { useContext, useEffect, useState } from 'react'
import { getAllCategories } from '../../actions/categoryActions/categoryActions'
import { Store } from '../../state/StoreProvider'
import Category from './Category'
import CategoryForm from './CategoryForm'

const CategoryList = () => {

  const {state, dispatch} = useContext(Store)

  const [inputFilter, setInputFilter] = useState('')
  
  useEffect(()=>{
    getAllCategories().then(categories => {
      const action = {
        type: 'get-categories',
        payload: categories
      }
      dispatch(action)
    })
  }, [])

  const addFilter = (event) =>{
    setInputFilter(event.target.value)
  }

  const filterClick = (e) => {
    e.preventDefault()
    if(inputFilter) {
    getAllCategories().then(categories => {
      const action = {
        type: 'get-categories-hashtag',
        payload: inputFilter
      }
      dispatch(action)
    })
    }
  }
  return (
    <div className="m-5 ">
      <CategoryForm />
      <div>
      <input onChange={addFilter} type="text" name="addFilter" placeholder="Filter by hashtag"
        className="form-control form-control-lg"/>
        <button 
        onClick={filterClick} className="btn btn-success">
          Filter</button>
      </div>
      {state.categoryList.map(category => <Category key={category.id}category={category} />)}
    </div>
  )
}

export default CategoryList
