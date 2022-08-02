import React, { Component } from "react";


class Class27 extends Component{
    constructor(){
        super()
        this.state = {
            name : 'Saeed Afzal',
            email : 'afzalsaeed727@gmail.com'
        }
        this.set_name = this.set_name.bind(this) // normal func ko chalane k lye bind krna prega
    }

    set_name(){
        this.setState({
            name : "Umair"
        })
    }
    get_name =() =>{
        console.log(this.state.name)
    }


    //1 hi func set kr rha hai
    set_value = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render(){
        return(
            <>
                <h1>Hello this is {this.state.name}</h1>
                <h1>Email is {this.state.email}</h1>

                <br />
                <input name="name" onChange={(e) => this.set_value(e)} type="text" />
                <input name="email" onChange={(e) => this.set_value(e)} type="text" />

                <br /><br />
                <button onClick={this.set_name}>Set Detail</button>
                <button onClick={this.get_name}>Get Detail</button>


            </>
        )
    }
}

export default Class27;