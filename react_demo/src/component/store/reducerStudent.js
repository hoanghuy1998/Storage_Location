import {STATUS_LOGIN} from './action'
const listStudents=[
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

const initstateStudent={
    id:'',
    fullName:'',
    firsName:'',
    lastName:'',
    phone:'',
    email:'',
    students:[...listStudents],
    studentt:''

}


const reducerStudent=(state,action)=>{
    switch (action.payload) {
         
        // default:
        //     break;
    }
}

export {initstateStudent}
export default reducerStudent