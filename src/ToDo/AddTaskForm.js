import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddTaskForm = ({onNewTaskTextChanged, newTaskText}) => {
    const styles = {
        width: '60vw',
    }

    return (
        <div className="add-task-form">
            <div><TextField
                type={'text'}
                floatingLabelText="Write new task here"
                style={styles}
                value={newTaskText}
                onChange={onNewTaskTextChanged}
            />
            </div>
            <div><RaisedButton 
                label="Add new task to the list" primary={true} 
                style={styles} /></div>

        </div>);

}

export default AddTaskForm