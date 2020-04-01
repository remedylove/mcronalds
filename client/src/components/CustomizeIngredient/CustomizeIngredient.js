import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import { Grid, withStyles } from '@material-ui/core';

const styles = theme =>  ({
    outerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f7f7f7',
        // border: '1px solid #0275d8',
        margin: '5px 0'
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonMinus: {
        // borderRadius: 0,
        border: 'none',
        background: '#ea645f',
        fontWeight: 'bold',
        color: '#fff',
        margin: '10px',
        padding: '5px 0',
        '&:hover':  {
            background: '#d9534f'
          },
    },
    buttonPlus: {
        // borderRadius: 0,
        border: 'none',
        background: '#6eda7c',
        fontWeight: 'bold',
        color: '#fff',
        margin: '10px',
        padding: '5px 0',
        '&:hover':  {
            background: '#5cb85c'
          },
    },
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ingredient: {
        textTransform: 'capitalize'
    }
})

class CustomizeIngredient extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            counter: 1,
            allowIncrement: true,
            allowDecrement: true
        }
    }

    increment = () =>   {
        const { allowIncrement, counter } = this.state;
        counter <= 1
        ?
            this.setState(prevState => ({
                    ...prevState,
                    counter: prevState.counter + 1,
                    // allowIncrement: false
                }
            ))
        :
            this.setState(prevState => ({
                ...prevState
            }))
    }

    decrement = () =>   {
        const { allowDecrement, counter } = this.state;
        counter >= 1
        ?
            this.setState(prevState => ({
                    ...prevState,
                    counter: prevState.counter - 1,
                    // allowDecrement: false
                }
            ))
        :
            this.setState(prevState => ({
                ...prevState
            }))
    }

    render()    {
        const { counter } = this.state; 
        const { ingredient, classes } = this.props;
        return (
            <div className={classes.outerContainer}>
                <Grid container justify="center">
                    <Grid item md={10}>
                        <div className={classes.innerContainer}>
                            <Typography className={classes.ingredient}>{ingredient}</Typography>
                            <div className={classes.counterContainer}>
                                <Button variant="outlined" className={classes.buttonMinus} onClick={this.decrement}>-</Button>
                                <Typography>{counter}</Typography>
                                <Button variant="outlined" className={classes.buttonPlus} onClick={this.increment}>+</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(CustomizeIngredient);