import React, { Component, Fragment } from 'react'
import { AppRoutes } from './appRoutes'
import { withStyles } from '@material-ui/styles'
import { Grid, Typography, Box, Button, Input, Drawer, Paper } from '@material-ui/core'
import request from 'superagent'
import clsx from 'clsx'
import color from '@material-ui/core/colors/red';
import { maxHeaderSize } from 'http';
import { maxWidth } from '@material-ui/system';



const styles = theme => ({
    mainContainer: {
        width: '100%',
        margin: '0 auto',
        height: '100vh',
        position: 'relative',
        backgroundColor: `rgba(0, 0, 0, .5)`
    },
    container: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url("/assets/t2.jpg")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    navContainer: {
        backgroundColor: `yellowgreen`
    },
    typoUsers: {
        padding: '.2rem',
        margin: '0',
        color: theme.palette.primary.main,
        fontSize: '3.5rem',
        fontWeight: 'bold',
        // maxWidth:'50%',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: 'right'
        }
        

    },
    button: {
        fontSize: '1.4rem',
        fontWeight: 'normal',
        padding: '.5rem 2.7rem',
        marginTop: '1rem',
    },
    divButton: {
        maxWidth: '100%',
        textAlign: 'end'
    },
    input: {
        margin: theme.spacing(2),
        width:'75%',

    },
    fieldContainer: {
        maxWidth:'100%',
        textAlign: 'center'
        // maxHeight: '100vh',
    },
    drawr : {
        top:'20vh',
        backgroundColor: 'yellowgreen',
        // width:'150%',
        margin :'auto auto',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '45%',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '50%'
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%'
        }
    },
    con : {
        padding:'1rem'
    }
})



class App extends Component {
    state = {
        right: false,
        status: 'submit'
    }


    toggleDrawer = () => {
        this.setState((prevState, props) => ({
            ...prevState,
            right: !prevState.right
        }))
    }

    handleSubmit = async () => {
        const name = document.getElementById('name').value
        const password = document.getElementById('password').value
        const age = document.getElementById('age').value
        const gender = document.getElementById('gender').value
        await this.setState ((prevState, props) => ({
            ...prevState,
            status:'wait...'
        }))
        await request
        .post('http://localhost:3000/api/users/create')
        .send({name, password, age, gender})
        .then(data => {
            this.setState ((prevState, props) => ({
                right:false,
                status:'submit'
            }))
            console.log(data)})
        .catch(err => console.log(err))
    }
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <div className={classes.container}>
                    <div className={classes.mainContainer} >
                        <div className={classes.navContainer}>
                            <Grid container>
                                <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                                    <div className={classes.typoUsers}>Users</div>
                                </Grid>
                                <Grid item xs={false} sm={4} md={4} lg={4} xl={5}>
                                </Grid>
                                <Grid item xs={6} sm={2} md={2} lg={2} xl={1}>
                                    <div className={classes.divButton}><Button size='large' className={classes.button} color='primary' onClick={this.toggleDrawer}>new user</Button></div>
                                </Grid>
                                <Grid item xs={6} sm={1} md={1} lg={1} xl={1}>
                                    <div className={classes.divButton}><Button size='large' className={classes.button} color='primary'>login</Button></div>
                                    {/* <Button size='large' className={classes.button} color='primary'>logout</Button> */}
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.con}>
                        {this.state.right?
                        <div className={clsx(classes.drawr)}>
                                <div className={classes.fieldContainer}>
                                    <Input
                                        id='name'
                                        placeholder="name"
                                        className={classes.input}
                                    />
                                </div>
                                <div className={classes.fieldContainer}>
                                    <Input
                                        id='password'
                                        placeholder="password"
                                        className={classes.input}
                                    />
                                </div>
                                <div className={classes.fieldContainer}>
                                    <Input
                                        id='age'
                                        placeholder="age"
                                        className={classes.input}
                                    />
                                </div>
                                <div className={classes.fieldContainer}>
                                    <Input
                                        id='gender'
                                        placeholder="gender"
                                        className={classes.input}
                                    />
                                </div>
                                <div className={classes.fieldContainer}>
                                    <Button className={classes.typoUsers} onClick={this.handleSubmit}> {this.state.status} </Button>
                                </div>
                            </div>

                        :<AppRoutes />}
                        </div>
                        {/* <Drawer className={classes.drawr} anchor="left" open={this.state.right} onClose={this.toggleDrawer} >
                            
                        </Drawer> */}
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(App)

