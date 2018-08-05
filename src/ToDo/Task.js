import React from 'react'
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

const Task = ({ text, subText, isCompleted, index, onTaskCompleted, onDeleteTask }) => {

    const subTextToParagraph = (subText) => {
        return subText.map((e, i) =>
            <ListItem secondaryText={e}
                key={i} />

        )
    }

    let completed = ''

    if (isCompleted) { completed = '-completed' } else { completed = '-uncompleted' }

    return (
        <div className='list-item'>
            <ListItem
                className={'list-item__task' + completed}
                primaryText={text}
                nestedItems={subTextToParagraph(subText)}
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