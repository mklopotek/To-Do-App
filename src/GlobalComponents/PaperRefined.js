import React from 'react'
import Paper from 'material-ui/Paper'

const styles = {
    margin: '20px',
    padding: '20px',
    backgroundColor: '' 
}

const PaperRefined = ({children}) => {

    retrun(
        <Paper style={styles}>
            {children}
        </Paper>
    )

} 


export default PaperRefined