import React,{useState,useRef,memo} from "react";
function MainMajor(params) {
    //initState
    const [inputTodo,setInputodo]=useState('')
    const [todos,setTodos]=useState(['it','marketing','network','accounting'])
   
    //useRef
    const inputTodoRef=useRef()
    const handleSave=()=>{
        if(inputTodo){
            setTodos(prev=>[...prev,inputTodo])
            setInputodo('')
        } else{
            inputTodoRef.current.classList.add('error')
           
        }
        // document.getElementById('editModal').style.display='none'
        // document.getElementById('editModal').removeAttribute('role')
        // // document.getElementById('modal-dialog').style.transform ='translate(0, -50px)'
        // document.querySelector('.modal-backdrop').classList.add('display_none')
    }
    const handleDelete=index=>{
        const newTodos=[...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

    const handlesubmit=()=>{
    //    setTimeout(() => {
    //     document.getElementById('editModal').style.display='block'
    //     document.getElementById('editModal').setAttribute('role','dialog')
    //     document.querySelector('.modal-backdrop').classList.remove('display_none')
    //    }, 200);
    }
     const handleIunputChange=(e)=>{
        inputTodoRef.current.classList.remove('error')
        setInputodo(e.target.value)
     }
    return(
        <>
             <div className="container mt-4">
                <div className="card border-primary bt-5px">
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="card-title">Major <small className="text-muted">list</small></h3>
                            </div>
                            <div className="col-auto">
                                <button onClick={handlesubmit} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"><i className="fas fa-plus"></i> Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover mb-0 border-primary">
                                <thead className="table-primary border-primary">
                                    <tr>
                                        <th style={{width: "50px"}} className="text-center">#</th>
                                        <th>Major Name</th>
                                        <th style={{width: "80px"}} className="text-center"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        todos.map((todo,index)=>(
                                            <tr key={index}>
                                                <th className="text-center">{index+1}</th>
                                                <td>{todo}</td>
                                                <td className="text-center">
                                                    <a href="/#"><i className="fas fa-edit text-primary"></i></a>
                                                    <a href="/#"><i onClick={index=>handleDelete(index)} className="fas fa-trash-alt text-danger"></i></a>
                                                 </td>
                                            </tr>
                                        ))
                                    } 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" id="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New Major</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                <label htmlFor="txtMajor" className="col-sm-3 col-form-label">Major name</label>
                                <div className="col-sm-9">
                                    <input ref={inputTodoRef} value={inputTodo} onChange={(e)=> handleIunputChange(e)} type="text" className="form-control" id="txtMajor"/>
                                </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default memo(MainMajor)