"use client"
const {createSlice , nanoid, current, createAsyncThunk} = require("@reduxjs/toolkit")

const initialState ={
    userApiData:[],
    users:JSON.parse(localStorage.getItem("users"))
}


export const fetchApi = createAsyncThunk("fetchapi", async() =>{
    const result = await fetch("https://jsonplaceholder.typicode.com/posts")
    return  result.json()
})

export const  Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state , action ) =>{
            console.log(action)

            const data ={
                id:nanoid(),
                name:action.payload
            }

            state.users.push(data)
            let user = JSON.stringify(current(state.users))
            localStorage.setItem("users", user)
            
        },
        removeUser:(state, action ) =>{
          const data = state.users.filter((item) =>{
            return item.id!==action.payload
            
          })

          state.users=data
          let userData = JSON.stringify(data)
          localStorage.setItem("users", userData)
        }
    },


    extraReducers:(builder)=>{
        const res =  builder.addCase(fetchApi.fulfilled,(state,action) =>{
    
            state.isloading = false ,
            state.userApiData.payload
         })
    }

})

export const {addUser,removeUser} = Slice.actions

export default Slice.reducer