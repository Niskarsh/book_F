import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/styles'
import { Grid, Typography, Box } from '@material-ui/core'
import color from '@material-ui/core/colors/red';

const styles = theme => ({
    mainContainer: {
        width: '100%',
        margin: '0 auto',
        height: '100vh',
        position: 'relative',
        opacity : '.5',
        backgroundColor: theme.palette.secondary.main
    },
    container: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url("/assets/t2.jpg")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    typoUsers: {
        padding: '.8rem',
        margin:'0 auto',
        opacity:'1',
        color: theme.palette.primary.main,
        fontSize:'4rem',
        textAlign:'center',
        textShadow: `.2rem .2rem ${theme.palette.primary.light}`

    },
    opCorrection:{
        // op
    }

})

class HomePage extends Component {

    render() {
        const { classes } = this.props

        return (
            <Fragment>
                <div className={classes.container}>
                    <div className={classes.mainContainer} >
                        <h2 className={classes.typoUsers}>Users</h2>  
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(HomePage)

// Home page components are assembled and managed here
