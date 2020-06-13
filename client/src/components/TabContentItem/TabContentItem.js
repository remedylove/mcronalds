import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex', 
        alignItems: 'center', 
        width: '100%',
        padding: '.35em 0'
    },  
    image: {
        width: '100px', 
        height: '100px',
        // marginRight: '2.5em'
    }
})

const TabContentItem = ({ image, categoryName }) => {
    
    const classes = useStyles();

    return(
        <div className={classes.container} >
            <img className={classes.image} src={image} alt="" />
            <div style={{width: 'inherit', textAlign: 'center'}}>
                {categoryName}
            </div>
        </div>
    )
}

export default TabContentItem;