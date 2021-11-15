import React,{memo} from 'React'
function IsMainHome() {
    return(
        <div className="container mt-5">
           <h1 className="text-center text-primary">Welcome to Admin site!</h1>
        </div>
    )
}
export default memo(IsMainHome)