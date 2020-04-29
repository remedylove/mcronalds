import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import { Grid, withStyles } from '@material-ui/core';
import { array } from 'prop-types';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';

const styles = theme =>  ({
    outerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f7f7f7',
        fontWeight: 300,
        margin: '5px 0'
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        margin: '10px',
        padding: '5px 0',
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
            allowDecrement: true,
            // product: {...this.props.product}
        }
    }

    increment = ingredient =>   {
        const { counter } = this.state;
        this.props.addIngredient(ingredient);

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

    decrement = ingredient =>   {
        const { counter } = this.state;
        this.props.removeIngredient(ingredient);
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
                                <Button variant="outlined" className={classes.button} onClick={e => this.decrement(ingredient)}>-</Button>
                                <Typography>{counter}</Typography>
                                <Button variant="outlined" className={classes.button} onClick={e => this.increment(ingredient)}>+</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default extractProductConsumer([''])(withStyles(styles)(CustomizeIngredient));