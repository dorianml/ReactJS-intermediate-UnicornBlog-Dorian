import React, { useState } from "react";

const Upload = () => {
    
    
    const [PostDone, setPostDone] = useState(false)
    
    const [FormResult, setFormResult] = useState({userId: 1})
    
    const handleChange = (e) => {
        console.log('OK')
        setFormResult({
            ...FormResult,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(FormResult)
        
        console.log('new article added')
        fetch(`https://jsonplaceholder.typicode.com/posts/`, {
            method: 'POST',
            body: JSON.stringify(
                FormResult
                )})
                
        .then((response) => {
        console.log('API POST OK')
        return response.json()
        })
        .then((res) => {
            console.log(res)
            setPostDone(true)
        })
    }

    return(
        <>
        <form className="form">
            <fieldset>
            <legend> Titre </legend>
            <input onChange={handleChange} className="form-title" name='title'/>
            </fieldset>
            <input onChange={handleChange} className="form-article" placeholder='mon article ici...' name="body" />
            <button onClick={handleSubmit}> Post </button>
            <div className="Post-Ok-Message">
                {PostDone ? <p> Post Envoyé !</p> : null}
            </div>
       </form>
           
       </>
    )
}

export default Upload