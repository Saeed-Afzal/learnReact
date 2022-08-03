import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(){
        super()
        this.state = ({
            todos : ["Saeed", "Afzal"],
            value : ''
        })
    }

    add_todo = () =>{

        // console.log(this.state.value)

        // this.state.todos.push(this.state.value)

        // console.log(this.state.todos)
        this.setState({
            todos : [...this.state.todos,this.state.value],
            value : ''
        })

    }

//Delete Todo
delete_todo = (index) => {
    // console.log(index)

    this.state.todos.splice(index, 1)

    this.setState({
        todos : this.state.todos
    })
}
//Delete Todo







  render() {
    let {todos, value} = this.state;
        return (
      <>
        <input value={value} onChange={(e)=> this.setState({value : e.target.value})} type="text" />
       
        <button onClick={this.add_todo}>Add Todo</button>

        <br /><br />
            <ul>
                {todos.map((v,i)=>{
                    return <li key={i}>{v} 
                    <button onClick={() => this.delete_todo(i)}>Edit</button>

                    <button onClick={() => this.delete_todo(i)}>Delete</button>
                    </li>
                })}
            </ul>
      </>
    )
  }
}
