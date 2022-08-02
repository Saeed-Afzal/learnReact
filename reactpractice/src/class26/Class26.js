import React from 'react'
import "./App.css"

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