const {configureStore} = require("@reduxjs/toolkit")


import usersReducers from './slice'
import todoReducers  from './todoslice'


export const store = configureStore({
    reducer:{
        usersData : usersReducers,
        todosData :todoReducers
    }
       
    
})