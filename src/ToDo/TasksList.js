import React from 'react'
import Task from './Task'
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import Bookmark from 'material-ui/svg-icons/action/bookmark'
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border'
import Book from 'material-ui/svg-icons/action/book'


const TasksList = ({ tasksArray, onTaskCompleted, className, subHeaderText, onDeleteTask, onButtonsFilterClicked,                             onSubTaskCompleted }) => {

    if (tasksArray === null) return null

    return (
        <div className={className}>
            {
                className === 'list-all' ?
                    <div>
                        <IconButton
                            tooltip="Tasks completed">
                            <Bookmark
                                onClick={() => onButtonsFilterClicked(true)}
                            />
                        </IconButton>
                        <IconButton
                            tooltip="Tasks uncompleted">
                            <BookmarkBorder
                                onClick={() => onButtonsFilterClicked(false)}
                            />
                        </IconButton>
                        <IconButton
                            tooltip="All Tasks">
                            <Book
                                onClick={() => onButtonsFilterClicked(null)}
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
                            subIsCompleted={e.subIsCompleted}
                            key={e.key}
                            isCompleted={e.isCompleted}
                            index={index}
                            onTaskCompleted={onTaskCompleted}
                            onDeleteTask={onDeleteTask}
                            onSubTaskCompleted={onSubTaskCompleted}
                        />
                )}
            </List>
        </div>
    )


}

export default TasksList