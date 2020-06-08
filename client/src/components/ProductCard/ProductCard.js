import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CurrencyFormat from 'react-currency-format';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import ItemModal from '../ItemModal/ItemModal';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer';
import PropTypes from 'prop-types';

const styles = theme => ({
  CardHeader: {
    paddingBottom: '8px'
  },
  card: {
    border: '1px solid #ddd',
    background: '#fff',
    transition: '.2s',
    '&:hover':  {
      transform: 'scale(1.05)'
    },
  },
  Typography: {
    cursor: 'pointer',
    fontFamily: 'Permanent Marker'
  },
  Link: {
    // // textDecoration: 'none',
    color: 'inherit',
    textTransform: 'capitalize',
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
    color: '#3f50b5',
  },
  button: {
    fontFamily: 'Permanent Marker',
    background: '#3f50b5'
  }
});


class ProductCard extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      modal: false,
    }    
  }

  toggle = () =>  {
    this.setState(prevState =>  ({
        modal: !prevState.modal
    }));
}

  render()  {
    const { classes, product, handleDetail, addItemToCart, onAddition } = this.props;
    const { _id, title, imageSrc, price } = product;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardHeader
            className={classes.CardHeader}
            action={
              <IconButton aria-label="settings" onClick={e => {addItemToCart(_id); onAddition('Product');}}>
                <AddCircleIcon className={classes.add} fontSize="large"/>
              </IconButton>
            }
            align="left"
            title={<Link className={classes.Link} to={`/product-details/${title.toLowerCase()}`}><Typography className={classes.Typography} variant="h6">{title}</Typography></Link>}
            subheader={<CurrencyFormat value={price} displayType={'text'} prefix={'$'}/>}
          />
          <div 
            className={classes.mediaWrapper}
            onClick={() => {
              handleDetail(title);
            }}
          >
            <Link to={`/product-details/${title}`}>
              <CardMedia
                className={classes.media}
                image={process.env.PUBLIC_URL + imageSrc} 
                title={title}
              />
            </Link>
          </div>
          <CardContent style={{paddingBottom: '16px'}}>
            <Button 
              className={classes.button}
              variant="contained" 
              color="primary" 
              align="left"
              onClick={this.toggle}  
            >
              CUSTOMIZE
            </Button>
          </CardContent>
        </Card>
        {this.state.modal && <ItemModal product={product} modal={this.state.modal} toggle={this.toggle} onAddition={onAddition} />}
      </React.Fragment>
    );
  }
  
}

export default extractProductConsumer(['handleDetail', 'addItemToCart'])(withStyles(styles)(ProductCard));

ProductCard.propTypes = {
  _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  image: PropTypes.string,
}