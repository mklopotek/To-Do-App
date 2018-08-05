import React from 'react'
import TextField from 'material-ui/TextField';

const SearchTask = ({searchValue, onSearchTaskTextChanged}) => {

    const styles = {
        width: '60vw',
    }

    return (
        <div className='search-task'>
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