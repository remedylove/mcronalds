import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CurrencyFormat from 'react-currency-format';
import { Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer';

const styles = theme => ({
  CardHeader: {
    paddingBottom: '8px'
  },
  card: {
    border: '1px solid #ddd',
    background: 'transparent',
    transition: '.2s',
    '&:hover':  {
      transform: 'scale(1.05)'
    },
  },
  Typography: {
    cursor: 'pointer'
  },
  Link: {
    // // textDecoration: 'none',
    color: 'inherit',
    '&:hover':  {
      textDecoration: 'none',
      color: 'inherit'
    }
  },
  mediaWrapper: {
    overflow: 'hidden'
  },
  media: {
    paddingTop: '40%',
    paddingBottom: '40%',
    height: '25px',
    cursor: 'pointer'
  },
  add: {
    color: '#0275d8',
  },
});


class RelatedProductCard extends Component {

  render()  {
    const { classes, product, handleDetail } = this.props;
    const { title, image } = product;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardHeader
            className={classes.CardHeader}
            align="left"
            title={<Link className={classes.Link} to={`/product-details/${title.toLowerCase()}`}><Typography className={classes.Typography} variant="h6">{title}</Typography></Link>}
            subheader={<CurrencyFormat value={4.99} displayType={'text'} prefix={'$'}/>}
          />
          <div 
            className={classes.mediaWrapper}
            onClick={() => {
              handleDetail(title.toLowerCase());
            }}
          >
            <Link to={`/product-details/${title.toLowerCase()}`}>
              <CardMedia
                className={classes.media}
                image={image}
                title={title}
              />
            </Link>
          </div>
        </Card>
      </React.Fragment>
    );
  }
  
}

export default extractProductConsumer(['handleDetail'])(withStyles(styles)(RelatedProductCard));