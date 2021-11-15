import React from 'react'
import './App.css'
import Main from './component/main/main'
import Nav from './component/nav/nav'
import LoginProvider from './component/store/context'

function App2() {
    return(
    <>
        <LoginProvider>
            <Nav/>  
        </LoginProvider>
        <Main/>
    </>
    )
}
export default App2