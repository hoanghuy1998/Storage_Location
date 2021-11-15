import React, { useContext,useRef } from "react";
import {LoginContext} from '../store/context'
import { PageContext } from "../store/pageContext";
import Login from '../login/login'


function Nav() {
    const {user,handleLogin,login}=useContext(LoginContext)
    const {handleHome,handleMajor,handleStudent,active,homeRef,majorRef,studentRef}=useContext(PageContext)
    const actives={
        "borderBottom": 'solid red 2px'
    }
    console.log(active)
    console.log(homeRef.current)
  
    return(
       

        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <a ref={homeRef} style={active === homeRef.current||active==='home' ? actives:{}}  className="navbar-brand" href="/#" onClick={handleHome}>Student Management</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a  ref={majorRef} style={active === majorRef.current ? actives:{}} className="nav-link" href="/#major" onClick={handleMajor}>Major</a>
                    </li>
                    <li className="nav-item">
                    <a ref={studentRef} style={active === studentRef.current ? actives:{}} className="nav-link" href="/#student" onClick={handleStudent}>Student</a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                        <li className="nav-item">
                            {
                                user ? <span id="nameUser">hoang huy</span> : <a id="statusLogin" className="nav-link" onClick={handleLogin} href="/#">welcome to ... </a> 
                            }
                           
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#"><i className="fas fa-sign-out-alt"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {
            login &&    <Login/>
        }
        </>
    )
}
export default Nav