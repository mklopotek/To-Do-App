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
                    isCompleted: true,
                    key: 123
                },
                {
                    text: 'Weź się do roboty!',
                    subText: ['zrób liste', 'zrób wyszukiwarke', 'zrób coś tam'],
                    isCompleted: false,
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
            isCompleted: false,
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

    onTaskCompleted = (index) => {
        const newArray = this.state.tasksArray
        newArray[index].isCompleted = !newArray[index].isCompleted

        this.setState({ tasksArray: newArray })
    }


    render() {

        const searchResultsToNewArray = (array) => {
            let searchResultsArray

            if (this.state.searchValue === '') {
                searchResultsArray = []
            } else {
                searchResultsArray = array
                    .map(e => e)
                    .filter(e =>
                        e.text.indexOf(this.state.searchValue) >= 0 ||
                        e.text.toUpperCase().indexOf(this.state.searchValue) >= 0 ||
                        e.text.toLowerCase().indexOf(this.state.searchValue) >= 0)
            }

            return searchResultsArray
        }

        const onShowTaskCompleted = () => {


        }

        return (
            <div className='to-do'>
                <div className='to-do-app-container'>
                    <h1> Magda's ToDo App </h1>
                    <div className='form'>
                        <AddTaskForm
                            newTaskText={this.state.newTaskText}
                            onNewTaskTextChanged={this.onNewTaskTextChanged}
                            onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                        />

                        <SearchTask
                            searchValue={this.state.searchValue}
                            onSearchTaskTextChanged={this.onSearchTaskTextChanged}
                        />
                    </div>
                    <div className='list'>
                        <TasksList
                            className={'list-searched'}
                            subHeaderText={'The task you are looking for is:'}
                            tasksArray={searchResultsToNewArray(this.state.tasksArray)}
                            onTaskCompleted={this.onTaskCompleted}
                        />

                        <TasksList
                            className={'list-all'}
                            subHeaderText={'List of your tasks:'}
                            tasksArray={this.state.tasksArray}
                            onTaskCompleted={this.onTaskCompleted}
                            onShowTaskCompleted={onShowTaskCompleted}
                        />
                    </div>
                </div>
            </div>)

    }

}


export default ToDo