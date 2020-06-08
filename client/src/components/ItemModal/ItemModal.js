import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Typography, Button, withStyles } from '@material-ui/core';
import CustomizeIngredient from '../CustomizeIngredient/CustomizeIngredient';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';
import { ObjectId } from '../../objectIdGenerator';
import PropTypes from 'prop-types';

const styles = {
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  Button: {
    fontFamily: 'Permanent Marker',
    color: '#fff'
  },
  ModalHeader: {
    alignItems: 'center'
  },
  Header: {
    fontWeight: 300,
    fontFamily: 'Permanent Marker',
    fontSize: '1.25rem'
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

  generateProductId = () => {
    const { product } = this.state;
    product._id = ObjectId();
  }

  addCustomizedProduct = () => {
    const { product } = this.state;
    const { addProductToCart, toggle, onAddition } = this.props;

    if(!!product.customization.removed.length || !!product.customization.added.length)  {
      this.generateProductId();
    }
    addProductToCart(product);
    onAddition('Customized product');
    toggle();
  }

  render()  {
    const { classes, modal, toggle, addProductToCart } = this.props;
    const { product } = this.state;
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
          {ingredients.map((ingredient, index) =>  (
            index != 0 && <CustomizeIngredient key={ingredient} ingredient={ingredient} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} />
          ))}
        </ModalBody>
        <ModalFooter>
          <div className={classes.buttonWrapper}>
            <Button className={classes.Button} variant="contained" color="primary" onClick={e => this.addCustomizedProduct()}>Accept and add to cart</Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

ItemModal.propTypes = {
  title: PropTypes.string,
  ingredient: PropTypes.string,
}

export default extractProductConsumer(['addProductToCart'])(withStyles(styles)(ItemModal));