import React, {Component} from 'react'
import { LoginButton, LogoutButton, LoggedOut, LoggedIn, Value } from '@solid/react';
import './UserContainer.css';

class UserContainer extends Component {
  render() {
    return(
      <div className="user-container">
        <LoggedOut>
          <p>You are not logged in, and this is a members-only area!</p>
          <LoginButton popup="popup.html"/>
        </LoggedOut>
        <LoggedIn>
          <p>Welcome back, <Value src="user.name"/></p>
          <LogoutButton />
        </LoggedIn>
      </div>
    )
  }
}

export default UserContainer
