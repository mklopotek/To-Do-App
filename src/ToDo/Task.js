import React from 'react'
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

const Task = ({ text, subText, isCompleted, index, onTaskCompleted, onDeleteTask, onSubTaskCompleted, subIsCompleted }) => {
    console.log(subIsCompleted)
    const subTextToParagraph = (subText, isTaskCompleted) => {
        return subText.map((e, i) => {
            let subCompleted = ''
            if (subIsCompleted[i]) { subCompleted = 'subTask-completed' } else { subCompleted = 'subTask-uncompleted' }

            return (<ListItem secondaryText={e}
                className={isTaskCompleted + ' ' + subCompleted}
                key={i} 
                onClick={onSubTaskCompleted}
                />)
        }
        )
    }

    let completed = ''
    let isTaskCompleted = ''

    if (isCompleted) { completed = '-completed' } else { completed = '-uncompleted' }
    if (isCompleted) { isTaskCompleted = 'task-completed-sub' } else { isTaskCompleted = 'task-uncompleted-sub' }


    return (
        <div className='list-item'>
            <ListItem
                className={'list-item__task' + completed}
                primaryText={text}
                nestedItems={subTextToParagraph(subText, isTaskCompleted)}
                leftCheckbox={
                    <Checkbox
                        checked={isCompleted}
                        onCheck={() => onTaskCompleted(index)}
                    />
                }
            />
            <IconButton
                className={'list-item__icon-delete'}
                tooltip="Delete this task">
                <DeleteIcon
                    values={index}
                    onClick={() => onDeleteTask(index)}
                />
            </IconButton>
        </div>
    )

}

export default Task 