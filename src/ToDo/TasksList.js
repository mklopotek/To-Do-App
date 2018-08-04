import React from 'react'
import Task from './Task'
import { List } from 'material-ui/List';
// import Subheader from 'material-ui/Subheader';

const TasksList = ({ tasksArray }) => {

    console.log(tasksArray.subText)

    return (
        <div className='list'>
            <List>
                {/* <Subheader>Your List of Tasks!</Subheader> */}
                {tasksArray.map(e =>
                    <Task
                        text={e.text}
                        subText={e.subText}
                        key={e.key}
                        isComplited={e.isComplited}
                    />
                )}
            </List>
        </div>
    )


}

export default TasksList