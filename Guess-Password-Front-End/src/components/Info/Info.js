import React, {Component} from 'react';

import {
  Modal,
  ModalDialog,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button, 
  Typography
} from '@smooth-ui/core-sc';

import * as Styled from './style';

class Info extends Component {
  state = {
    show: false
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  }

  handleShow = () => {
    this.setState({
      show: true
    });
  }


  render() {
    return (
      <Styled.Info>
        <Button variant="warning" width={1} minHeight={40} fontSize={22} type="button" onClick={this.handleShow}>
          How To Play
        </Button>
        <Modal opened={this.state.show} onClose={this.handleClose}>
          <ModalDialog>
            <ModalContent>

              <ModalHeader>
                <Typography variant="h2" textAlign="center" color="black">
                  Game Rules
                </Typography>
              </ModalHeader>
      
              <ModalBody fontSize={20} color="black">
                This is a Password Guessing Game with the following rules:
                <br />
                <br />
                1. The API picks a random 8 numbers between 0 to 9 and keeps it hidden.
                <br />
                <br />
                2. You need to guess the hidden secret password.
                <br />
                <br />
                3. If you have entered the right number then you will see the number was highlighted
                <br />
                <br />
              </ModalBody>
      
              <ModalFooter>
                <Button variant="success" size="md" width={0.3} mt={10} minHeight={40} fontSize={22} type="button" onClick={this.handleClose}>
                  Close
                </Button>
              </ModalFooter>

            </ModalContent>
          </ModalDialog>
        </Modal>
      </Styled.Info>
    );
  }
}

export default Info;