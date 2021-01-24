import React, { Component } from 'react';
import { Grid, Row, Col, Button, Typography } from '@smooth-ui/core-sc';
import {
    Banner,
    Feedback,
    Form,
    PasswordList,
    Progress,
    Reset,
    Info,
} from '../../components';
import { getInitialState } from '../../util';
import * as Styled from '../../style';

import AxiosHttpConnect from '../../core/http/axios-http-connect';

const axios = new AxiosHttpConnect();
const axioApi = axios.create();

class FindPassword extends Component { 
  state = getInitialState();

  async componentDidMount() {
    try {
      const hint = await axioApi.get('new-password');
      this.setState({
        hint: hint.data.hint,
        isServerError: false
      });
    } catch (e) {
      this.setState({
        isServerError: true
      });
    }
  }

  resetGame = async () => {
    this.setState(getInitialState());
    const hint = await axioApi.get('new-password');
    this.setState({
      hint: hint.data.hint,
      isServerError: false
    });
  }

  updateState = async (guess) => {
    const { allGuesses, numbers } = this.state;
    const valid = allGuesses.find((data) => parseInt(data) === parseInt(guess));

    if (valid === undefined) {
        this.setState(prevState => ({
            guess,
            allGuesses: [...prevState.allGuesses, guess],
            numbers: prevState.numbers + 1,
            feedbackMessage: 'Enter 8 digit unique password between 0 to 9',
          })
        ); 
    } else {
        this.setState({
            feedbackMessage: 'Number Already Exists',
        }); 
    }

    if (numbers === 7) {
        this.setState({
            feedbackMessage: 'Submit to check the password',
        }); 
    }
  }

  onSubmit = async () => {
    const { allGuesses, hint } = this.state;
    const response = await axioApi.post(
      'verify-password',
      {
        "answer" : allGuesses.join(""),
        "hint": hint,
      }
    );

    this.setState(prevState => ({
        attempt: prevState.attempt + 1,
        guess: undefined,
        attemptGuess:[...prevState.attemptGuess, { 
          data: allGuesses, 
          highlight: response.data.highlight, 
          isCorrect: response.data.correct
        }],
        allGuesses: [],
        numbers: 0,
        block: false,
      })
    );
  }

  render() {
    const { 
      allGuesses,
      feedbackMessage,
      numbers,
      block,
      attempt,
      guess,
      attemptGuess,
      hint,
      isServerError
    } = this.state;

    if(isServerError) {
      return (
        <Typography variant="h1" textAlign="center" color={'white'} mt={150}>
          Server error:  Please run the node server before play the game
        </Typography>
      );
    }

    const guessList = allGuesses.map((item, index) => 
      <Styled.ListItem key={index} color={item.feedbackColor}>
        <span>{item}</span>
      </Styled.ListItem>
    );

    return (
      <Grid mt={20}>
        <Row>
          <Col>
            <Styled.LandmarkContainer as="header" role="banner">
                <Banner />
                <PasswordList lists={attemptGuess} />
            </Styled.LandmarkContainer>
          </Col>
        </Row>
        <Row mt={50}>
          <Col>
            <Styled.LandmarkContainer as="main" role="main">
                <Progress attempt= { attempt } guess={guess} guessList={guessList}/>
                <Feedback feedback={feedbackMessage}/>
                <Typography variant="h5" textAlign="center" color={'white'} mt={50}>
                 Password Hint: {hint}
                </Typography>
                {numbers < 8 && <Form block = {block} returnGuessToApp={value => this.updateState(value)} /> }
                <Button 
                    variant="info"
                    width={1}
                    mt={10}
                    minHeight={40}
                    fontSize={22}
                    type="submit"
                    onClick={this.onSubmit}
                    disabled={ numbers === 7 && false}
                >
                    Submit
                </Button>
            </Styled.LandmarkContainer>
          </Col>
        </Row>
        <Row mt={50}>
            <Styled.FooterContainer as="footer" role="footer">
                <Col md={6}> <Info /></Col>
                <Col md={6}> <Reset resetGame = {this.resetGame}/> </Col>
            </Styled.FooterContainer>
        </Row>
      </Grid>
    );
  }
}

export default FindPassword;