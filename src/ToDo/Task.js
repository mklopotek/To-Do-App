import React from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const Task = ({text, subText, isComplited, index, onTaskComplited}) => {

    const subTextToParagraph = (subText)=> {
        return subText.map((e, i) => 
            <ListItem secondaryText={e}
                key={i} />

        )
    }

    let complited = ''

    if (isComplited) complited = '-complited'

    return (
        <div className={'list-item' + complited}>
        <ListItem 
            primaryText={text} 
            nestedItems={subTextToParagraph(subText)}
            leftCheckbox={
            <Checkbox 
                checked={isComplited}
                onCheck={()=>onTaskComplited(index)}
            />
            } />
        </div>
    )

}

export default Task 