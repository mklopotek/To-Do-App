import React from 'react'
import AddTaskForm from './AddTaskForm'
import TasksList from './TasksList';
import SearchTask from './SearchTask';


class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasksArray: [
                {
                    text: 'Zrób aplikacje to do',
                    subText: ['zrób liste', 'zrób wyszukiwarke', 'zrób coś tam'],
                    isComplited: true,
                    key: 123
                },
                {
                    text: 'Weź się do roboty!',
                    subText: ['zrób liste', 'zrób wyszukiwarke', 'zrób coś tam'],
                    isComplited: false,
                    key: 321
                }
            ],
            newTaskText: '',
            searchValue: ''
        }
    }

    componentDidMount() {
        const lastTasksArray = JSON.parse(localStorage.getItem('magda-todo-app-tasksArray')) || this.state.tasksArray

        this.setState({ tasksArray: lastTasksArray })

    }

    onNewTaskTextChanged = (event, value) => {
        this.setState({ newTaskText: value })
    }

    onSearchTaskTextChanged = (event, value) => {
        this.setState({ searchValue: value })
    }

    onAddNewTaskClickHandler = () => {
        const tasksArray = this.state.tasksArray
        const newTaskText = this.state.newTaskText

        if (newTaskText === '') return

        const newTask = {
            text: newTaskText,
            subText: ['tu', 'na razie', 'nic'],
            isComplited: false,
            key: Date.now()
        }

        const newTasksArray = tasksArray.concat(newTask)

        this.setState(
            {
                tasksArray: newTasksArray,
                newTaskText: ''
            }
        )

        localStorage.setItem('magda-todo-app-tasksArray', JSON.stringify(newTasksArray))
    }


    onTaskComplited = (index) => {
        const newArray = this.state.tasksArray
        newArray[index].isComplited = !newArray[index].isComplited

        this.setState({ tasksArray: newArray })
    }

    render() {

        return (
            <div className='to-do-app-container'>
                <h1> Magda's ToDo App </h1>
                <AddTaskForm
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                    onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                />

                <SearchTask
                    searchValue={this.state.searchValue}
                    onSearchTaskTextChanged={this.onSearchTaskTextChanged}
                />

                <TasksList
                    tasksArray={this.state.tasksArray}
                    onTaskComplited={this.onTaskComplited}
                />
            </div>)

    }

}


export default ToDo