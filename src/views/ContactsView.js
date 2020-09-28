import React, { Component } from 'react';
import { connect } from 'react-redux';

import contactOperation from '../redux/contact/contactOperation';
import contactSelector from '../redux/contact/contactSelector';

import Section from '../components/section/Section';
import PhoneList from '../components/phoneList/PhoneList';
import ContactForm from '../components/contactForm/ContactForm';
import Filter from '../components/filter/Filter';
// import Alert from '../components/Alert/Alert';

class TaskerView extends Component {
  componentDidMount() {
    this.props.onFetchTasks();
  }

  render() {
    const { contacts } = this.props;

    return (
      <>
        <Section title="Add Contact">
          {/* <Alert isVisible={false} /> */}
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

const mapStateToProps = state => ({
  // isLoadingTasks: contactSelector.getLoading(state),
  contacts: contactSelector.getItems(state),
});

const mapDispatchToProps = {
  onFetchTasks: contactOperation.fetchContacs,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskerView);
