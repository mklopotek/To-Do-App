import React from 'react'
import Task from './Task'
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import Bookmark from 'material-ui/svg-icons/action/bookmark'
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border'
import Book from 'material-ui/svg-icons/action/book'

const TasksList = ({ tasksArray, onTaskCompleted, className, subHeaderText, onButtonsClicked }) => {

    return (
        <div className={className}>
            {
                className === 'list-all' ?
                    <div>
                        <IconButton
                            tooltip="Tasks completed">
                            <Bookmark
                                onClick={()=> onButtonsClicked(true)}
                            />
                        </IconButton>
                        <IconButton
                            tooltip="Tasks uncompleted">
                            <BookmarkBorder 
                                onClick={()=> onButtonsClicked(false)}
                            />
                        </IconButton>
                        <IconButton
                            tooltip="All Tasks">
                            <Book 
                                 onClick={()=> onButtonsClicked(null)}
                            />
                        </IconButton>
                    </div>
                    :
                    null
            }
            <List>
                <Subheader>{subHeaderText}</Subheader>

                {tasksArray.map((e, index) =>
                    <Task
                        text={e.text}
                        subText={e.subText}
                        key={e.key}
                        isCompleted={e.isCompleted}
                        index={index}
                        onTaskCompleted={onTaskCompleted}
                    />
                )}
            </List>
        </div>
    )


}

export default TasksList