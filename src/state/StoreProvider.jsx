import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

const initialState = {
  categoryList: [
    {
      id: '1',
      title: 'test one',
      notes: [
        {
          id: '3',
          message: 'test message one',
          done: false,
          categoryId: ''
        },
        {
          id: '4',
          message: 'test message two',
          done: false,
          categoryId: ''
        }
      ]
    },
    {
      id: '2',
      title: 'test two',
      notes: []
    }
  ],
  category: {
    id: '',
    title: '',
    notes: []
  },
  note: {
    id: '',
    message: '',
    done: false,
    categoryId: ''
  }
}

const Store = createContext()

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(initialState, reducer)
  return (
    <Store.Provider value={{state, dispatch}}>
      {children}
    </Store.Provider>
  )
}

export default StoreProvider
