const reducer = (state, action) => {
  switch(action.type){
    case 'get-categories':
      const newStateWithAllCategories = {...state, categoryList: action.payload}
      return newStateWithAllCategories
    case 'create-category':
      console.log(action.payload);
      const previousCategoyList = [...state.categoryList, action.payload]
      const newStateWithCategoryAdded = {...state, categoryList: previousCategoyList}
      return newStateWithCategoryAdded
    case 'deleteCategory':
      const newListWithoutCategory = state.categoryList.filter(category => category.id !== action.payload)
      const newStateWithoutCategory = {...state, 
      categoryList: newListWithoutCategory}
      return newStateWithoutCategory
    case 'add-note':
      return state
    case 'delete-note':
      return state
    case 'update-note':
      return state
  }
}

export default reducer
