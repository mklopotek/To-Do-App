import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField';

const AddTaskForm = (props) => {
    const styles = {
        width: '40vw',
    }

    return (
        <div className="add-task-form">
            <TextField
                floatingLabelText="Add new task"
                style={styles}
            />
            <FloatingActionButton 
                secondary={true}
            >
                <ContentAdd />
            </FloatingActionButton>
        </div>);

}

export default AddTaskForm