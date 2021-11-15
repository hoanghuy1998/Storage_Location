import React,{createContext,useState,useRef} from "react";
const PageContext=createContext()

function Pageprovider({children}) {

    //useRef
    const homeRef=useRef()
    const majorRef=useRef()
    const studentRef=useRef()

    const [active,setActive]=useState('home'||homeRef.current)


    const [statusHome,setStatusHome]=useState(true)
    const [statusMajor,setStatusMajor]=useState(false)
    const [statusStudent,setStatusStudent]=useState(false)
    // function handle
    
    
    const handleHome=()=>{
        setStatusHome(true)
        setStatusMajor(false)
        setStatusStudent(false)
        setActive(homeRef.current)
    }
    const handleMajor=()=>{
        setStatusHome(false)
        setStatusMajor(true)
        setStatusStudent(false)
        setActive(majorRef.current)

    }
    const handleStudent=()=>{
        setStatusHome(false)
        setStatusMajor(false)
        setStatusStudent(true)
        setActive(studentRef.current)

    }
    const pageData={
        
        statusHome,
        setStatusHome,
        statusMajor,
        setStatusMajor,
        statusStudent,
        setStatusStudent,
        handleHome,
        handleMajor,
        handleStudent,
        active,
        setActive,
        homeRef,
        majorRef,
        studentRef
    }



    return(
        <PageContext.Provider value={pageData}>
            {children}
        </PageContext.Provider>
    )
}
export{PageContext,Pageprovider}