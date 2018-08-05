import React from 'react'
import TextField from 'material-ui/TextField';


const SearchTask = ({ searchValue, onSearchTaskTextChanged }) => {

    const styles = {
        width: '100%',
    }

    return (
        <div className='search-task-form'>
            <TextField
                type={'text'}
                style={styles}
                floatingLabelText="Find the task your are looking for"
                value={searchValue}
                onChange={onSearchTaskTextChanged}
            />
        </div>)
}

export default SearchTask