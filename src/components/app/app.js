import React, { Component } from 'react';
import { Col, Row, Container, Button, Alert } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages';
import BookPage from '../pages';
import HousesPage from '../pages';
import GotService from '../../services/gotService';
import { BrowserRouter as Router, Route } from 'react-router-dom'



export default class App extends Component {

    gotService = new GotService()

    state = {
        showRandomChar: true
    }


    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !this.state.showRandomChar
            }
        })
    }

    render() {
        const char = this.state.showRandomChar ? < RandomChar /> : null;
        return (
            <Router>
                <div className="app">
                    <Container >
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }} >
                                {char}
                                <Button onClick={this.toggleRandomChar} > toggleRandomChar </Button>
                            </Col>
                        </Row>
                        <Route path='/' exact component={() => <Alert color="primary">Welcome to the GoT</Alert>} />
                        <Route path='/character' component={CharacterPage} />
                        <Route path='/houses' component={HousesPage} />

                        <Route path='/books' exact component={BookPage} />
                        <Route path='/books/:id' />
                    </Container>
                </div>
            </Router>
        )
    }
};