import React from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';
import {ListItem} from 'material-ui/List';
// import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
// import Toggle from 'material-ui/Toggle';

const Task = ({text, subText, isComplited}) => {

    const subTextToParagraph = (subText)=> {
        return subText.map((e, i) => 
            <ListItem secondaryText={e}
                key={i} />

        )
    }

    return (
        <div className='list-item'>
        <ListItem 
            primaryText={text} 
            nestedItems={
                [subTextToParagraph(subText)]}
            leftCheckbox={<Checkbox />} />
        </div>
    )

}

export default Task 