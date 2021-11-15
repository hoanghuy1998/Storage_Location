import { createContext,useState} from 'react'
import { useRef } from 'react';

const LoginContext=createContext()


function LoginProvider({children}) {
     //useRef
     const userNameRef=useRef()
     const passwordRef=useRef()
    

    const [login,setLogin]=useState(false)
    const [user,setUser]=useState(false)
    const [userName,setUsername]=useState()
    const [password,setPassword]=useState()
    
   

  

    console.log(userNameRef.current)
   

    const handleLoginStatus=()=>{
        if(!userName || !password){
            if(!userName){
                console.log(userNameRef.current)
                userNameRef.current.classList.add('error')
            }
            if(!password){
                passwordRef.current.classList.add('error')
            }
        }else{
         setLogin(false)
         setUser(true)
        }
    }
    const handleLogin=()=>{
        setLogin(!login)    
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
        userNameRef.current.classList.remove('error')
    }
    const handlepassword=(e)=>{
        setPassword(e.target.value)
        passwordRef.current.classList.remove('error')
    }

    const data={
        login,
        user,
        setUser,
        handleUsername,
        password,
        handlepassword,
        handleLoginStatus,
        handleLogin,
        userNameRef,
        passwordRef,
    }
    return(
        <LoginContext.Provider value={data}>
            {children}
        </LoginContext.Provider>
    )
}


export {LoginContext}
export default LoginProvider