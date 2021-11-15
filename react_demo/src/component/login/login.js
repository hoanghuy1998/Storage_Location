import React,{useContext} from 'react'
import { LoginContext } from '../store/context'
import { memo } from 'react';

function Login() {
   const data =useContext(LoginContext)
   const {userName,handleUsername,password,handlepassword,handleLoginStatus,userNameRef,passwordRef}=data
    return(
        <>
            <div className="container h-100" id="login">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-sm-8 col-lg-5">
                        <div className="card bg-primary">
                            <div className="card-header text-white">
                                <h4 className="card-title mb-0"><i className="fas fa-th"></i> Login</h4>
                            </div>
                            <div className="card-body bg-white rounded-bottom">
                                <form>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">User name</label>
                                        <div className="col-sm-9">
                                        <input 
                                            value={userName}
                                            ref={userNameRef}
                                            type="text" 
                                            className="form-control" 
                                            id="inputEmail3"
                                            onChange={(e)=>handleUsername(e)}
                                        />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <input 
                                                value={password}
                                                ref={passwordRef}
                                                type="password"
                                                className="form-control" 
                                                id="inputEmail3"
                                                onChange={(e)=>handlepassword(e)}
                                             />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="offset-sm-3 col-auto">
                                            <button type="button" className="btn btn-primary" onClick={handleLoginStatus}>Sign in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </>
    )
}
export default memo(Login)