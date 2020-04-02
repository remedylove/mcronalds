import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Typography, Button, makeStyles } from '@material-ui/core';
import CustomizeIngredient from '../CustomizeIngredient/CustomizeIngredient';

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

const useStyles = makeStyles(styles);

const ItemModal = ({ product, modal, toggle }) => {
  const { id, title, ingredients } = product;
  const classes = useStyles();
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
          <CustomizeIngredient key={id} ingredient={ingredient} />
        ))}
      </ModalBody>
      <ModalFooter>
        <div className={classes.buttonWrapper}>
          <Button className={classes.Button} variant="contained" onClick={toggle}>Accept and add to cart</Button>
        </div>
      </ModalFooter>
    </Modal>
  );
}

export default ItemModal;