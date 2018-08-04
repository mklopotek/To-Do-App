import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddTaskForm = (props) => {
    const styles = {
        width: '60vw',
    }

    return (
        <div className="add-task-form">
            <div><TextField
                floatingLabelText="Write new task here"
                style={styles}
            /></div>
            <div><RaisedButton 
                label="Add new task to the list" primary={true} 
                style={styles} /></div>

        </div>);

}

export default AddTaskForm