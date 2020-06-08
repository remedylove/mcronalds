import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CurrencyFormat from 'react-currency-format';
import { Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer';
import PropTypes from 'prop-types';
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
    fontFamily: 'Permanent Marker',
    cursor: 'pointer',
    textTransform: 'capitalize'
  },
  Link: {
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
    const { title, price } = product;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardHeader
            className={classes.CardHeader}
            align="left"
            title={<Link className={classes.Link} to={`/product-details/${title}`}><Typography className={classes.Typography} variant="h6">{title}</Typography></Link>}
            subheader={<CurrencyFormat style={{fontFamily: 'Permanent Marker'}} value={price} displayType={'text'} prefix={'$'}/>}
          />
          <div 
            className={classes.mediaWrapper}
            onClick={() => {
              handleDetail(title.toLowerCase());
            }}
          >
            <Link to={`/product-details/${title}`}>
              <CardMedia
                className={classes.media}
                image={require(`../../assets/${title}.jpg`)}
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

RelatedProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}