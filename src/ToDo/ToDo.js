import React from 'react'
import Task from './Task'

class ToDo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            number: 0
        }
    }

render(){
 
    return (
    <div> 
        <h1> Magda's ToDo App </h1>
        <Task />
    </div>)

}
    
}


export default ToDo