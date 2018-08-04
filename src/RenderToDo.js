import React from 'react'
import ToDo from './ToDo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PaperRefined from './GlobalComponents/PaperRefined'

class RenderToDo extends React.Component {
    render() {
        return (
            < MuiThemeProvider >
                <PaperRefined>
                    {<ToDo />}
                </PaperRefined>
            </MuiThemeProvider >);
    }
}


export default RenderToDo