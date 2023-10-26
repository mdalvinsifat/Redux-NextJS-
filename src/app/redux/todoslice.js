const { createSlice, nanoid } = require("@reduxjs/toolkit")


const initialState ={
    todos:[]

}


export const Slice = createSlice({
    name:"todoUser",
    initialState,
    reducers:{
        addTodos  : (state, action)=>{
            const data ={
                id:nanoid,
                name:action.payload
            }
            state.todos.push(data)
            
        }
    }
})

export const {addTodos} = Slice.actions

export default Slice.reducer;