import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Typography, Button, withStyles } from '@material-ui/core';
import CustomizeIngredient from '../CustomizeIngredient/CustomizeIngredient';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const styles = {
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  Button: {
    background: '#428bca',
    color: '#fff',
    '&:hover':  {
      background: '#317ab9'
    },
  },
  ModalHeader: {
    background: '#707070',
    color: '#fff'
  },
  Header: {
    color: '#fff',
    fontWeight: 300
  }
}

class ItemModal extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      product: JSON.parse(JSON.stringify(this.props.product))
    }
  }

  addIngredient = (ingredient, array) => {
    const { product } = this.state;
    product['customization'][array].push(ingredient);
  }

  removeIngredient = (ingredient, array) =>  {
    const { product } = this.state;
    const index = product['customization'][array].indexOf(ingredient);
    if(index > -1)  {
      product['customization'][array].splice(index, 1);
      return false;
    }
    return true;
  }

  render()  {
    const { classes, modal, toggle, addProductToCart } = this.props;
    const { product } = this.state;
    product._id = uuid();
    const { title, ingredients } = product;

    return (
      <Modal
          className="modal-lg"
          isOpen={modal}
          toggle={toggle}
          returnFocusAfterClose={false}
      >
        <ModalHeader className={classes.ModalHeader} toggle={toggle} justify="center">
          <div className={classes.buttonWrapper}>
            <Typography className={classes.Header} variant="h6">Customize your {title}</Typography>
          </div>
        </ModalHeader>
        <ModalBody>
          {ingredients.map(ingredient =>  (
            <CustomizeIngredient key={ingredient} ingredient={ingredient} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} />
          ))}
        </ModalBody>
        <ModalFooter>
          <div className={classes.buttonWrapper}>
            <Button className={classes.Button} variant="contained" onClick={e => {addProductToCart(product); toggle();}}>Accept and add to cart</Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

ItemModal.propTypes = {
  classes: PropTypes.object, 
  modal: PropTypes.bool, 
  toggle: PropTypes.func, 
  addProductToCart: PropTypes.func,
  title: PropTypes.string,
  ingredient: PropTypes.string,
}

export default extractProductConsumer(['addProductToCart'])(withStyles(styles)(ItemModal)); 