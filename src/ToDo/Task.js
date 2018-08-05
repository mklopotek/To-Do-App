import React from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const Task = ({text, subText, isCompleted, index, onTaskCompleted}) => {

    const subTextToParagraph = (subText)=> {
        return subText.map((e, i) => 
            <ListItem secondaryText={e}
                key={i} />

        )
    }
    
    let completed = ''

    if (isCompleted) completed = '-completed'

    return (
        <div className={'list-item' + completed}>
        <ListItem 
            primaryText={text} 
            nestedItems={subTextToParagraph(subText)}
            leftCheckbox={
            <Checkbox 
                checked={isCompleted}
                onCheck={()=>onTaskCompleted(index)}
            />
            } />
        </div>
    )

}

export default Task 