 import {SET_ID,SET_FIRSTNAME,SET_LASTNAME,SET_FULLNAME,SET_PHONE,SET_EMAIL,ADD_FULLNAME,ADD_STUDENT,DELETE_STUDENT} from './contanst'

 
 export const setId=payload=>{
    return{
        type:SET_ID,
       payload
    }
}
export const setFirstName=payload=>{
   return{
       type:SET_FIRSTNAME,
      payload
   }
}
export const setlastName=payload=>{
   return{
       type:SET_LASTNAME,
      payload
   }
}

export const setFullName=payload=>{
   return{
       type:SET_FULLNAME,
      payload
   }
}
export const setPhone=payload=>{
    return{
        type:SET_PHONE,
       payload
    }
}
export const setEmail=payload=>{
   return{
       type:SET_EMAIL,
      payload
   }
}
export const addFullName=payload=>{
   return{
       type:ADD_FULLNAME,
      payload
   }
}
export const addStudent=payload=>{
    return{
        type:ADD_STUDENT,
       payload
    }
 }

export const deleteStudent=payload=>{
   return{
       type:DELETE_STUDENT,
      payload
   }
}