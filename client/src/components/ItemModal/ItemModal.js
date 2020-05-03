import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Typography, Button, withStyles } from '@material-ui/core';
import CustomizeIngredient from '../CustomizeIngredient/CustomizeIngredient';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';
import { v4 as uuid } from 'uuid';

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

  omit = (prop, { [prop]: _, ...rest }) => rest;

  addIngredient = ingredient => {
    const { product } = this.state;
    product['customization']['added'].push(ingredient);
  }

  removeIngredient = ingredient =>  {
    const { product } = this.state;
    product['customization']['removed'].push(ingredient);
  }

  render()  {
    const { classes, modal, toggle, addProductToCart } = this.props;
    const { product } = this.state;
    product.id = uuid();
    console.log(product.id);
    const { title, ingredients } = product;

    console.log(this.state.product);
    console.log(this.props.product);
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

export default extractProductConsumer(['addProductToCart'])(withStyles(styles)(ItemModal));