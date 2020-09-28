import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './Logo/Logo';
import Section from './section/Section';
import PhoneList from './phoneList/PhoneList';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import Alert from './Alert/Alert';
import contactOperation from '../redux/contact/contactOperation';
import contactSelector from '../redux/contact/contactSelector';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacs();
  }

  render() {
    const { contacts } = this.props;

    return (
      <>
        <Logo />
        <Section>
          <Alert isVisible={false} />
          <ContactForm />
        </Section>

        {contacts && (
          <Section title="Contacts">
            <Filter isVisible={contacts.length > 1 ? true : false} />
            <PhoneList />
          </Section>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactSelector.getItems(state),
  };
};

const mapDispatchToProps = {
  fetchContacs: contactOperation.fetchContacs,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
