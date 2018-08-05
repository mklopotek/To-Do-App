import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddTaskForm = ({ onNewTaskTextChanged, onAddNewTaskClickHandler, newTaskText }) => {
    
    const styles = {
        width: '60vw',
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