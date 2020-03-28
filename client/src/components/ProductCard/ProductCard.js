import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CurrencyFormat from 'react-currency-format';
import { Typography } from '@material-ui/core';

const styles = {
  CardHeader: {
    paddingBottom: '8px'
  },
  card: {
    border: '1px solid #ddd',
    background: 'transparent',
    // background: '#eee',
    borderRadius: '20px'
  },
  mediaWrapper: {
    overflow: 'hidden'
  },
  media: {
    height: 0,
    paddingTop: '40%',
    paddingBottom: '40%',
    height: '25px',
    transition: '.2s',
    '&:hover':  {
      transform: 'scale(1.1)',
      cursor: 'pointer'
    },
  },
  add: {
    color: '#0275d8',
  }
}


const useStyles = makeStyles(styles);

const ProductCard = ( { product } ) => {
  const classes = useStyles();

  const { id, title, description } = product;

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.CardHeader}
        action={
          <IconButton aria-label="settings">
            <AddCircleIcon className={classes.add} fontSize="large"/>
          </IconButton>
        }
        align="left"
        title={<Typography variant="h6">{title}</Typography>}
        subheader={<CurrencyFormat value={4.99} displayType={'text'} prefix={'$'}/>}
      />
      <div className={classes.mediaWrapper}>
        <CardMedia
          className={classes.media}
          image={require(`../../assets/${id}.jpg`)}
          title={title}
        />
      </div>
      <CardContent>
        {/* <Button variant="contained" color="primary" align="left">
          DETAILS
        </Button> */}
      </CardContent>
    </Card>
  );
}

export default ProductCard;