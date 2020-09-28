/*
 * TODO: Подписаться на name и avatar https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg
 * TODO: диспатч операцию logout
 */
import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 30,
  },
  avatar: {
    margin: 5,
    borderRadius: '50%',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Hello, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: 'https://picsum.photos/100',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
