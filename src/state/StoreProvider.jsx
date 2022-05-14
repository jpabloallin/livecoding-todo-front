import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

const initialState = {
  categoryList: [],
  category: {
    id: '',
    title: '',
    notes: []
  },
  note: {
    id: '',
    message: '',
    done: false,
    hashtag: '',
    categoryId: ''
  }
}

const Store = createContext()

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Store.Provider value={{state, dispatch}}>
      {children}
    </Store.Provider>
  )
}

export default StoreProvider
export {Store, initialState}
