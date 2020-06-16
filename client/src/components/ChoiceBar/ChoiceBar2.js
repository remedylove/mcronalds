import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab, makeStyles } from '@material-ui/core';
import TabContentItem from '../TabContentItem/TabContentItem';
import All from '../../assets/categories/all.jpg';
import Burgers from '../../assets/categories/burgers.jpg';
import Combo from '../../assets/categories/combo_meals.jpg';
import McCafe from '../../assets/categories/mccafe.jpg';
import Desserts from '../../assets/categories/desserts.jpg';
import Salads from '../../assets/categories/salads.jpg';
import Snacks from '../../assets/categories/snacks.jpg';

const styles = {
    Paper: {
        position: 'fixed',
        minWidth: '300px',
        maxWidth: '20%',
        maxHeight: '88vh'
    },
    Tabs: {
        background: "#fff",
    },
    Indicator: {
        height: '100%',
        color: 'green'
    },
    Tab: {
        fontFamily: 'Permanent Marker',
        maxWidth: '100%',
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

const ChoiceBar2 = ({ categories, currentCategory, onSelect }) => {
    const classes = useStyles();

    const index = currentCategory
        ? categories.findIndex(category => category === currentCategory) + 1
        : 0

    const onIndexSelect = (e, index) => {
        onSelect(index === 0 ? '' :  categories[index - 1])
    }

    return (
        <Paper className={classes.Paper}>
            <Tabs
                value={index}
                onChange={onIndexSelect}
                className={classes.Tabs}
                TabIndicatorProps={{
                    style: {
                        height:"14.29%",
                        width: '.25em'
                    }
                    }}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                orientation="vertical"
            >
                <Tab className={classes.Tab} label={<TabContentItem image={All} categoryName='Full Menu' />} />
                <Tab className={classes.Tab} label={<TabContentItem image={Burgers} categoryName='Burgers' />} />
                <Tab className={classes.Tab} label={<TabContentItem image={Combo} categoryName='Combo Meals' />} />
                <Tab className={classes.Tab} label={<TabContentItem image={McCafe} categoryName='McCafe' />} />
                <Tab className={classes.Tab} label={<TabContentItem image={Desserts} categoryName='Desserts & Shakes' />} />
                <Tab className={classes.Tab} label={<TabContentItem image={Snacks} categoryName='Snacks & Sides' />} />
                <Tab className={classes.Tab} label={<TabContentItem image={Salads} categoryName='Salads' />} />
                ))}
            </Tabs>
        </Paper> 
    )
}

ChoiceBar2.propTypes = {
    categories: PropTypes.array,
    currentCategory: PropTypes.string,
    onSelect: PropTypes.func    
}

export default ChoiceBar2;