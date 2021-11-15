
import ContextSudent from './contextStudent';
import React,{ useContext } from 'react';
import reducerStudent,{ initstateStudent } from './reducerStudent';

 function ProviderStudent({children}) {
     const [state,dispath]=useContext(reducerStudent,initstateStudent)
     return(
         <ContextSudent.Provider value={[state,dispath]}>
             {children}
         </ContextSudent.Provider>
     )
 }
 export default ProviderStudent