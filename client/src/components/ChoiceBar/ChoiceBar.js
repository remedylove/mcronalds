import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab, makeStyles } from '@material-ui/core';

const styles = {
    Tabs: {
        background: "#fff",
    },
    Tab: {
        fontFamily: 'Permanent Marker',
        '&:hover': {
            color: '#0275d8',
            background: '#f2f2f2'
        },
        '&:focus': {
            outline: 'none',
        }
    }
}

const useStyles = makeStyles(styles);

const ChoiceBar = ({ categories, currentCategory, onSelect }) => {
    const classes = useStyles();

    const index = currentCategory
        ? categories.findIndex(category => category === currentCategory) + 1
        : 0

    const onIndexSelect = (e, index) => {
        onSelect(index === 0 ? '' :  categories[index - 1])
    }

    return (
        <div>
           <Paper>
                <Tabs
                    value={index}
                    onChange={onIndexSelect}
                    className={classes.Tabs}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                >
                    <Tab className={classes.Tab} label="All" />
                    {categories.map(category => (
                        <Tab key={category} className={classes.Tab} label={category} disableFocusRipple/>
                    ))}
                </Tabs>
            </Paper> 
        </div>
    )
}

ChoiceBar.propTypes = {
    categories: PropTypes.array,
    currentCategory: PropTypes.string,
    onSelect: PropTypes.func    
}

export default ChoiceBar
