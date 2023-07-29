import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Processor:{},
    Motherboard:{},
    RAM:{},
    Power_Supply_Unit:{},
    Storage_Device:{},
    Monitor:{},
  }
  

export const addProductSlice = createSlice({
    name: 'addProduct',
    initialState,
    reducers: {
      addProductInBuilder: (state, action) => {
        const categoryName = action.payload.category.replace(/ /g, '_');
        state[categoryName].image =  action.payload.image;
        state[categoryName].name =  action.payload.productname;
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addProductInBuilder } = addProductSlice.actions
  
  export default addProductSlice.reducer