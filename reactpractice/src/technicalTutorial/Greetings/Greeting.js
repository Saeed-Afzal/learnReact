import React from 'react'
import './App.css'

const Greeting = () => {

    let curDate = new Date();
    curDate = curDate.getHours()
    let greeting = ''

    let cssStyle = { }

    if(curDate >= 1 && curDate < 12){
        greeting = 'Good Morning'
        cssStyle.color = 'yellow'
    }
    else if(curDate>=12 && curDate <=19 ){
        greeting = 'Good Afternoon'
        cssStyle.color = 'red'
    }
    else{
        greeting = 'Good Evening'
        cssStyle.color = 'black'
    }



  return (
    <>

        <h1>
            Hello Sir, <span style={cssStyle}> {greeting}</span>
        </h1>
    </>
  )
}

export default Greeting