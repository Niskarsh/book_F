import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/styles'
import request from 'superagent'
import { Grid, Typography, Box, Button, Card, CardContent, CardActions } from '@material-ui/core'
import color from '@material-ui/core/colors/red';

const styles = theme => ({
    gridCon : {
        padding : '1rem',
        paddingRight : '0'
    },
    gridCom : {
        paddingRight:'1rem',
        paddingBottom: '1rem'
    },
    gridComName : {
        fontSize:'1.5rem',
    },
    gridComBut : {
        fontSize:'1.2rem',
    }


})

class HomePage extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        request
            .get('http://localhost:3000/api/users/getall')
            .then(data => {
                this.setState((prevState, props) => ({
                    users: JSON.parse(data.text)
                }))

            })
            .catch(err => console.log(err))

    }

    handleClickDel = async id => {
        let newUsers = this.state.users.filter(user => user.id != id)
        console.log(`======`, newUsers)
        await this.setState((prevState, props) => {
            return ({
                users: newUsers
            })
        })

        await request
            .delete(`http://localhost:3000/api/users/delete`)
            .send({ id })
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))


    }

    render() {
        const { classes } = this.props

        return (
            <Fragment>
                <Grid container className={classes.gridCon}>
                    {this.state.users.map(user => {

                        return (

                            <Grid key={user.id} item xs={12} sm={4} md={4} lg={3} xl={3} className={classes.gridCom}>
                                <Card  >
                                    <CardContent>
                                        <Typography className={classes.gridComName} color="textSecondary" gutterBottom>
                                            {user.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" className={classes.gridComBut} onClick={this.handleClickDel.bind(this, user.id)}>Delete Account</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        )
                    })}
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(HomePage)

// Home page components are assembled and managed here
