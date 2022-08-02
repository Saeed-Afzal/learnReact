import React from 'react'
import "./App.css"
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <>  
        <div className='header'>

            <h1>HEADER</h1>
        </div>
        </>
    )
}




const Class26 = () => {
    let todos = [{text:'Saeed'},{text:'Afzal'}]
  return (
    <>
    <Header/>
    <div>
        <ul>
            {todos.map((item,index)=>{
                {/* console.log(item) */}
                return <li key={index}>{item.text}</li>
            })}
        </ul>
        <br />
        <button type="button" className="btn btn-primary">Primary</button>
        <br /><br />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
    <Footer/>
    </>
  )
}

const Footer = () => {
    return (
        <>
            <h1>Footer</h1>
        </>
    )
}




export default Class26