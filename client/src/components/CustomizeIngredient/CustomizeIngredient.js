import React, { Component } from 'react';
import { Grid, Typography, Button, withStyles } from '@material-ui/core';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';
import PropTypes from 'prop-types';

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
        }
    }

    increment = ingredient =>   {
        const { counter } = this.state;
        if(counter + 1 <= 2) {
            if(this.props.removeIngredient(ingredient, 'removed')) {
                this.props.addIngredient(ingredient, 'added');
            }
            this.setState(prevState => ({
                counter: prevState.counter + 1,
            }));
        }
    }

    decrement = ingredient =>   {
        const { counter } = this.state;
        if(counter - 1 >= 0) {
            if(this.props.removeIngredient(ingredient, 'added')) {
                this.props.addIngredient(ingredient, 'removed');
            }
            this.setState(prevState => ({
                counter: prevState.counter - 1,
            }));
        }
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

CustomizeIngredient.propTypes = {
    counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ingredient: PropTypes.string,
}
export default extractProductConsumer([''])(withStyles(styles)(CustomizeIngredient));

