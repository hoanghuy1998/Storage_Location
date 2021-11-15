import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

function MainStudent() {
    const listStudens=[
        {
            id:'01-03-9384',
            fullName:'Trần Minh Tâm',
            gender:'fas fa-male text-primary fa-lg',
            phone:'0935875636',
            email:'tamtm@yahoo.com'
        },
        {
            id:'01-03-9344',
            fullName:'Nguyễn Thị Thanh',
            gender:'fas fa-female text-warning fa-lg',
            phone:'0937938573',
            email:'thanhnt@yahoo.com'
        },
        {
            id:'01-04-9846',
            fullName:'Lê Thanh Tuấn',
            gender:'fas fa-male text-primary fa-lg',
            phone:'0918373635',
            email:'tuanlt@yahoo.com'
        },
        {
            id:'01-04-8363',
            fullName:'Đinh La Si',
            gender:'fas fa-male text-primary fa-lg',
            phone:'0917628363	',
            email:'sidl@yahoo.com'
        }
    ]

    //useRef
    const idRef=useRef()
    const fullNameRef=useRef()

    const phoneref=useRef()
    const emailRef=useRef()
    
    const [lists,setLists]=useState(listStudens)
    const [list,setList]=useState('')
    const [id,setId]=useState('')
    const [fullName,setFullName]=useState('')
    const [gender,setGender]=useState('fas fa-male text-primary fa-lg')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    
    console.log(list)
    const handleSetId=e=>{
        setId(e.target.value)
        idRef.current.classList.remove('error')
    }
   const handleFullname=e=>{
        setFullName(e.target.value)
        fullNameRef.current.classList.remove('error')
   }
   const handleSetPhone=e=>{
       setPhone(e.target.value)
       phoneref.current.classList.remove('error')
   }
   const handleSetEmail=e=>{
        setEmail(e.target.value)
        emailRef.current.classList.remove('error') 
   }
   const handleOverSave=()=>{
    if(id && fullName && phone && email){
        setList({
            'id':id,
            'fullName':fullName,
            'gender':gender,
            'phone':phone,
            'email':email
        })
    }
   }
    
    
    const hanhdleSave=()=>{
        if(!id || !fullName|| !phone  || !email){
            if(!id){
                idRef.current.classList.add('error')
            } 
             if(!fullName){
                fullNameRef.current.classList.add('error')
            } 
            if(!phone){
                phoneref.current.classList.add('error')
            }
            if(!email){
                emailRef.current.classList.add('error') 
            }
        }else{
            if(document.getElementById('radMale').checked){
               setGender('fas fa-male text-primary fa-lg')
            } else if(document.getElementById('radFeMale').checked){
                setGender('fas fa-female text-warning fa-lg')
            }
            if(list){
                setLists(prev=>[...prev,list])

            }
            setId('')
            setFullName('')
            setPhone('')
            setEmail('')
            idRef.current.focus()
        }
        

    }
    const handleDeleteStudent=index=>{
        const newLists=[...lists]
        newLists.splice(index,1)
        setLists(newLists)
    }


    return(
        <>
             <div className="container mt-4">
                <div className="card border-primary bt-5px">
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="card-title">Student <small className="text-muted">list</small></h3>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"><i className="fas fa-plus"></i> Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover mb-0 border-primary">
                                <thead className="table-primary border-primary">
                                    <tr>
                                        <th style={{width: "50px"}} className="text-center">#</th>
                                        <th>Student Id</th>
                                        <th>Full name</th>
                                        <th style={{width:"50px"}}>Gender</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th style={{width: "80px"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        lists.map((listStudent,index)=>(
                                            <tr key={index}>
                                                <th className="text-center">{index+1}</th>
                                                <td>{listStudent.id} </td>
                                                <td>{listStudent.fullName} </td>
                                                <td className="text-center"><i className={listStudent.gender}></i></td>
                                                <td>{listStudent.phone}</td>
                                                <td>{listStudent.email}</td>
                                                <td className="text-center">
                                                    <a href="/#"><i className="fas fa-edit text-primary"></i></a>
                                                    <a href="/#"><i onClick={index=>handleDeleteStudent(index)} className="fas fa-trash-alt text-danger"></i></a>
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
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Student</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mb-3">
                                    <label htmlFor="txtId" className="col-sm-2 col-form-label required">Student Id</label>
                                    <div className="col-sm col-lg-5">
                                        <input ref={idRef} value={id} onChange={e=>handleSetId(e)} type="text" className="form-control" id="txtId" placeholder="Student Id"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="txtLastName" className="col-sm-2 col-form-label required">Full name</label>
                                    <div className="col-sm-10 col-lg-5">
                                        <input ref={fullNameRef} value={fullName} onChange={e=>handleFullname(e)} type="text" className="form-control" id="txtLastName" placeholder="full name"/>
                                    </div>
                                    {/* <div className="col-sm">
                                        <input ref={lastnameRef} onChange={e=>handleFullname(e)} type="text" className="form-control" id="txtFirstName" placeholder="First name"/>
                                    </div> */}
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="radMale" className="col-sm-2 col-form-label required">Gender</label>
                                    <div className="col-sm">
                                        <div className="col-form-label">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" defaultChecked type="radio" name="Gender" id="radMale" value="1"/>
                                                <label className="form-check-label"  htmlFor="radMale">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input"  type="radio" id="radFeMale" name="Gender" value="0"/>
                                                <label className="form-check-label" htmlFor="radFeMale">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="txtPhone" className="col-sm-2 col-form-label required">Phone</label>
                                    <div className="col-sm col-lg-5">
                                        <input ref={phoneref} value={phone} onChange={e=>handleSetPhone(e)} type="tel" className="form-control" id="txtPhone" placeholder="Phone number"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="txtEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm">
                                        <input ref={emailRef} value={email} onChange={e=>handleSetEmail(e)} type="email" className="form-control" id="txtEmail" placeholder="Email address"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onMouseOver={handleOverSave} onClick={hanhdleSave}>Save</button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default MainStudent