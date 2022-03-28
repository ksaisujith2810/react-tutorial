import React,{useState} from "react";

function App(props){
    // array destruturing ES6
    // state variable & Function
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');

    // event handler as callback function-1
    const handleFirstName=function(e){
        // console.log(e);
        const userInput=e.target.value
        // invoking state function
        setFirstName(userInput)
    }

    // event handler as callback function-2
    const handleLastName=function(e){
        // console.log(e);
        const userInput=e.target.value
        // invoking state function
        setLastName(userInput)
    }

    const handleSubmit=function(e){
        // to prevent browser to refresh
        e.preventDefault()
        const result={
            userFirstName:firstName,
            userLastName:lastName
        }
        console.log(result);
        // to reset the form
        setFirstName("");
        setLastName("");
    }

    
    return(
        <>
            <h1 className="text-success">React JS Form Concepts</h1>
            <form>
                {/* 1 */}
                <div className="mb-3">
                    <label className="form-label">First-Name</label>
                    <input 
                        type="text" 
                        className="form-control form-control-sm"
                        // value equal to state variable
                        value={firstName}
                        // event in java script
                        onChange={handleFirstName}                      
                    />

                </div>
                {/* 2 */}
                <div className="mb-3">
                    <label className="form-label">Last-Name</label>
                    <input 
                        type="text" 
                        className="form-control form-control-sm"
                        value={lastName}
                        onChange={handleLastName}
                    />

                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >Submit</button>
            </form>
        </>
    )
}



export default App;