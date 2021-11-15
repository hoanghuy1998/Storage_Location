import React,{useContext} from 'react'

import MainMajor from './mainMajor'
import MainStudent from './mainStudent'
import  {PageContext} from '../store/pageContext'

function Main() {
    const {statusHome,statusMajor,statusStudent} =useContext(PageContext)
    
    return(
            <>
                {
                     statusHome &&    <div className="container mt-5">
                                    <h1 className="text-center text-primary">Welcome to Admin site!</h1>
                                        </div>
                }
                {
                    statusMajor && <MainMajor/>
                }
                {
                    statusStudent && <MainStudent/>
                }  
            </>
    )
}
export default Main