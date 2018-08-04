import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField';

const Task = (props) => {

    return (
        <div>
            <TextField
                floatingLabelText="Add new task"
            />
            <FloatingActionButton 
                secondary={true}
            >
                <ContentAdd />
            </FloatingActionButton>
        </div>);

}

export default Task