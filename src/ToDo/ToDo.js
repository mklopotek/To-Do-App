import React from 'react'
import AddTaskForm from './AddTaskForm'
import TasksList from './TasksList';
import SearchTask from './SearchTask';


class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasksArray: [],
            newTaskText: '',
            newSubTaskArray: [],
            subTaskFields: 0,
            searchValue: '',
            buttonValue: null
        }
    }

    componentDidMount() {
        const lastTasksArray = JSON.parse(localStorage.getItem('magda-todo-app-tasksArray')) || this.state.tasksArray

        this.setState({ tasksArray: lastTasksArray })

    }

    onNewTaskTextChanged = (event, value) => {
        this.setState({ newTaskText: value })
    }

    onNewSubTaskTextChanged = (event, value) => {

        const index = event.target.id

        let newSubTaskArray = this.state.newSubTaskArray
        newSubTaskArray[index] = value

        this.setState({ newSubTaskArray: newSubTaskArray })

    }

    onSearchTaskTextChanged = (event, value) => {
        this.setState({ searchValue: value })
    }

    addSubtaskField = () => {
        this.setState({
            subTaskFields: this.state.subTaskFields + 1,
            newSubTaskArray: this.state.newSubTaskArray.concat([''])
        })
    }

    onSubTaskCompleted = (event, indexTask, indexSubTask) => {
        console.log( indexTask, indexSubTask)
        this.setState({
            tasksArray: this.state.tasksArray.map((task, index) => {
                if(index === indexTask){
                    return {
                        ...task,
                        subIsCompleted: task.subIsCompleted.map((isCompleted, index) => 
                            index === indexSubTask ? !isCompleted : isCompleted
                        )
                    }
                }else{
                    return task
                }
            })
        })
    }


    onAddNewTaskClickHandler = () => {
        const tasksArray = this.state.tasksArray
        const newTaskText = this.state.newTaskText
        const newSubTaskArray = this.state.newSubTaskArray

        const subIsCompleted = Array(newSubTaskArray.length).fill(false)

        if (newTaskText === '') return

        const newTask = {
            text: newTaskText,
            subText: newSubTaskArray,
            subIsCompleted: subIsCompleted,
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

    onButtonsFilterClicked = (value) => {
        this.setState({ buttonValue: value })
    }

    onDeleteTask = (index) => {

        const newTasksArray = this.state.tasksArray.filter((e, i) => i !== index)

        this.setState({ tasksArray: newTasksArray })

        localStorage.setItem('magda-todo-app-tasksArray', JSON.stringify(newTasksArray))

    }


    render() {

        const searchResultsToNewArray = (array) => {
            let searchResulstArray

            if (this.state.searchValue === '') {
                searchResulstArray = null
            } else {
                searchResulstArray = array
                    .map(e => e)
                    .filter(e =>
                        e.text.indexOf(this.state.searchValue) >= 0 ||
                        e.text.toUpperCase().indexOf(this.state.searchValue) >= 0 ||
                        e.text.toLowerCase().indexOf(this.state.searchValue) >= 0)
            }

            return searchResulstArray
        }

        const onShowTaskCompleted = () => {
            let resultArray
            const array = this.state.tasksArray

            if (this.state.buttonValue === null) {
                resultArray = array
            } else if (this.state.buttonValue) {
                resultArray = array
                    .map(e => e)
                    .filter(e => e.isCompleted)
            } else {
                resultArray = array
                    .map(e => e)
                    .filter(e => !e.isCompleted)
            }

            return resultArray
        }

        const subHeaderTextChanger = () => {
            let subHeaderText

            if (this.state.buttonValue === null) {
                subHeaderText = 'List of all your tasks:'
            } else if (this.state.buttonValue) {
                subHeaderText = 'Tasks completed:'
            } else {
                subHeaderText = 'Tasks uncompleted'
            }

            return subHeaderText
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
                            addSubtaskField={this.addSubtaskField}
                            subTaskFields={this.state.subTaskFields}
                            newSubTaskArray={this.state.newSubTaskArray}
                            onNewSubTaskTextChanged={this.onNewSubTaskTextChanged}
                        />

                        <SearchTask
                            searchValue={this.state.searchValue}
                            onSearchTaskTextChanged={this.onSearchTaskTextChanged}
                        />
                    </div>
                    <div className='list'>
                        <TasksList
                            className={'list-searched'}
                            subHeaderText={'The task you are looking for is here:'}
                            tasksArray={searchResultsToNewArray(this.state.tasksArray)}
                            onTaskCompleted={this.onTaskCompleted}
                            onDeleteTask={this.onDeleteTask}
                            onSubTaskCompleted={this.onSubTaskCompleted}
                        />

                        <TasksList
                            className={'list-all'}
                            subHeaderText={subHeaderTextChanger()}
                            tasksArray={onShowTaskCompleted()}
                            onTaskCompleted={this.onTaskCompleted}
                            onDeleteTask={this.onDeleteTask}
                            onButtonsFilterClicked={this.onButtonsFilterClicked}
                            onSubTaskCompleted={this.onSubTaskCompleted}
                        />
                    </div>
                </div>
            </div>)

    }

}


export default ToDo