import React from 'react'
import Task from './Task'
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import Bookmark from 'material-ui/svg-icons/action/bookmark'
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border'
import Book from 'material-ui/svg-icons/action/book'

const TasksList = ({ tasksArray, onTaskCompleted, onShowTaskCompleted, className, subHeaderText }) => {

    return (
        <div className={className}>
            {
                onShowTaskCompleted ?
                    <div>
                        <IconButton
                            tooltip="Tasks completed">
                            <Bookmark
                                // onChange={onShowTaskCompleted}
                            />
                        </IconButton>
                        <IconButton
                            tooltip="Tasks uncompleted">
                            <BookmarkBorder />
                        </IconButton>
                        <IconButton
                            tooltip="All Tasks">
                            <Book />
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