import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Main from '../../common/Main'
import Container from '../../common/Container'
import ContactItem from './ContactItem'

function Contact() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Container content={<ContactItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;
