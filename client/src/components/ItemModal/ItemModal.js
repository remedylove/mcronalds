import React, { useState, Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Typography, Button, makeStyles, withStyles } from '@material-ui/core';
import CustomizeIngredient from '../CustomizeIngredient/CustomizeIngredient';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';

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
      product: {...this.props.product}
    }
  }

  addIngredient = ingredient => {
    const { product } = this.state;
    product.ingredients.push(ingredient);
  }

  removeIngredient = ingredient =>  {
    const { product } = this.state;
    const index = product.ingredients.indexOf(ingredient);
    if(index > -1)  {
      product.ingredients.splice(index, 1);
    } 
  }

  render()  {
    const { classes, product, modal, toggle, addItemToCart } = this.props;
    const { id, title, ingredients } = product;

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
            <CustomizeIngredient key={id} ingredient={ingredient} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} />
          ))}
        </ModalBody>
        <ModalFooter>
          <div className={classes.buttonWrapper}>
            <Button className={classes.Button} variant="contained" onClick={e => {addItemToCart(id); toggle();}}>Accept and add to cart</Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default extractProductConsumer(['addItemToCart'])(withStyles(styles)(ItemModal));