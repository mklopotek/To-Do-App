import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddTaskForm = ({ onNewTaskTextChanged, onAddNewTaskClickHandler, newTaskText, addSubtaskField, subTaskFields, newSubTaskArray }) => {

    const styles = {
        width: '60vw',
    }

    const styles2 = {
        width: '40vw',
    }

    let subTaskArray = Array(subTaskFields).fill(null)

    const subTaskFieldsMaker = () => {
       return subTaskArray.map((e, index) => (
            <TextField
                type={'text'}
                style={styles2}
                key={index}
                floatingLabelText="Write subtask for this task"
                // value={newSubTaskArray[index]}
                // onChange={onNewTaskTextChanged}
            />
        ))
    }


    return (
        <div className="add-task-form">
            <div>
                <TextField
                    type={'text'}
                    floatingLabelText="Write new task here"
                    style={styles}
                    value={newTaskText}
                    onChange={onNewTaskTextChanged}
                />

                {subTaskFieldsMaker()}

                <RaisedButton
                    label="I want to add subtask"
                    primary={true}
                    onClick={addSubtaskField}
                />


            </div>
            <div>
                <RaisedButton
                    label="Add new task"
                    primary={true}
                    style={styles}
                    onClick={onAddNewTaskClickHandler}
                />
            </div>

        </div>);

}

export default AddTaskForm