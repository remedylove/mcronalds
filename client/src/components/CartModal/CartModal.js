import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Typography, Button, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  Button: {
    fontFamily: "Permanent Marker",
    color: '#fff'
  },
  ModalHeader: {
    color: '#000'
  },
  Header: {
    color: '#000',
    fontWeight: 300,
    fontFamily: 'Permanent Marker',
    fontSize: '1.25rem',
    margin: 0, 
    padding: 0
  },
  modalText: {
    fontFamily: 'Permanent Marker', 
    fontWeight: 700,
    fontSize: '1rem',
    color: '#444'
  }
}

class CartModal extends Component {
  constructor(props)  {
    super(props);
  }

  render()  {
    const { classes, modal, toggle } = this.props;

    return (
      <Modal
          className="modal-md"
          isOpen={modal}
          toggle={toggle}
          returnFocusAfterClose={false}
      >
        <ModalHeader className={classes.ModalHeader} toggle={toggle} justify="center">
          <div className={classes.buttonWrapper}>
            <Typography className={classes.Header} variant="h6">Your order summary</Typography>
          </div>
        </ModalHeader>
        <ModalBody>
            <Typography className={classes.modalText} align="center" >Thank you for using our service.</Typography>
            <Typography className={classes.modalText} align="center" >Your order has been accepted and will be prepared soon.</Typography>
        </ModalBody>
        <ModalFooter>
          <div className={classes.buttonWrapper}>
            <Link to='/'><Button className={classes.Button} variant="contained" color="primary">Finish</Button></Link>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

CartModal.propTypes = {
  title: PropTypes.string,
  ingredient: PropTypes.string,
}

export default withStyles(styles)(CartModal);