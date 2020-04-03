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
import { ingredientsList } from '../../store';
import ItemModal from '../ItemModal/ItemModal';
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


class ProductCard extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      modal: false,
      ingredientsList
    }    
  }

  toggle = () =>  {
    this.setState(prevState =>  ({
        modal: !prevState.modal
    }));
}

  render()  {
    const { classes, product, handleDetail } = this.props;
    const { id, title } = product;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardHeader
            className={classes.CardHeader}
            action={
              <IconButton aria-label="settings">
                <AddCircleIcon className={classes.add} fontSize="large"/>
              </IconButton>
            }
            align="left"
            title={<Link className={classes.Link} to={`/product-details/${id}`}><Typography className={classes.Typography} variant="h6">{title}</Typography></Link>}
            subheader={<CurrencyFormat value={4.99} displayType={'text'} prefix={'$'}/>}
          />
          <div 
            className={classes.mediaWrapper}
            onClick={() => {
              handleDetail(id);
            }}
          >
            <Link to={`/product-details/${id}`}>
              <CardMedia
                className={classes.media}
                image={require(`../../assets/${id}.jpg`)}
                title={title}
              />
            </Link>
          </div>
          <CardContent>
            <Button 
              variant="outlined" 
              color="primary" 
              align="left"
              onClick={this.toggle}  
            >
              CUSTOMIZE
            </Button>
          </CardContent>
        </Card>
        <ItemModal product={product} modal={this.state.modal} toggle={this.toggle} />
      </React.Fragment>
    );
  }
  
}

export default extractProductConsumer(['handleDetail'])(withStyles(styles)(ProductCard));
// export default withStyles(styles)(ProductCard);