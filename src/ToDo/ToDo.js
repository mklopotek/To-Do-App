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
            ],
            newTaskText: ''
        }
    }

    onNewTaskTextChanged = (event, value) => {
        this.setState({newTaskText: value})
    }

    onAddNewTaskClickHandler = () => {
        return
    }


render(){
 
    return (
    <div className='to-do-app-container'> 
        <h1> Magda's ToDo App </h1>
        <AddTaskForm 
            newTaskText={this.state.newTaskText}
            onNewTaskTextChanged={this.onNewTaskTextChanged}
        />
        <TasksList 
            tasksArray={this.state.tasksArray}
        />
    </div>)

}
    
}


export default ToDo