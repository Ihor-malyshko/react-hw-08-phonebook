import React from 'react';
import withTransition from '../hoc/withTransition';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact/contactActions';
import contactSelector from '../../redux/contact/contactSelector';
import s from './Filter.module.css';

const Filter = props => {
  return (
    <div className={s.field}>
      <input
        type="text"
        onChange={event => props.onFilterChannge(event.target.value)}
        className={s.input}
        name="filter"
        id="filter"
        placeholder=" "
      />
      <label htmlFor="filter" className={s.label}>
        Name Search
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filter: contactSelector.getFilter(state),
  };
};

const mapDispatchToprops = {
  onFilterChannge: contactActions.changeFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(withTransition(s)(Filter));
