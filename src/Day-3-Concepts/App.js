import React,{useState} from 'react';
import ChildTwo from './ChildTwo';

function App(props) {
    // useState hook
    const studentDetails = ['sujith','subramanyam','yaswant','vikas'] 

    // state variable and function
    const[data,setData]=useState(studentDetails);
    console.log(data);
    
    return (
        <>
            <h1>sujith</h1>
            {/* <h4>{3+5}</h4> */}
            <ul>
            {
                data.map(function(name,index){
                    return (
                        <li key={index}>
                            {name}
                        </li>
                    )
                })
            }
            </ul>  
            <ChildTwo 
                studentsData={data} 
            />    
        </>
    )
}

export default App;
