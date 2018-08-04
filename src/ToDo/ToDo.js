import React from 'react'
import AddTaskForm from './AddTaskForm'
import TasksList from './TasksList';


class ToDo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            tasksArray: [
                {
                    text: 'Zrób aplikacje to do',
                    subText: ['zrób liste', 'zrób wyszukiwarke', 'zrób coś tam'],
                    isComplited: false,
                    key: 123
                },
                {
                    text: 'Weź się do roboty!',
                    subText: ['zrób liste', 'zrób wyszukiwarke', 'zrób coś tam'],
                    isComplited: false,
                    key: 321
                }
            ]
        }
    }

render(){
 
    return (
    <div> 
        <h1> Magda's ToDo App </h1>
        <AddTaskForm />
        <TasksList 
            tasksArray={this.state.tasksArray}
        />
    </div>)

}
    
}


export default ToDo