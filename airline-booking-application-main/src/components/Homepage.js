import React from 'react';
import { Container } from 'react-bootstrap';
import FlightDetails from './FlightDetails';
import Header from './Header';

const Home = () => {

    return (
        <>
            <Header />
            <Container>
                <FlightDetails />
            </Container>
        </>
    );
};

export default Home;