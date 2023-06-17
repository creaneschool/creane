import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import ChatsPage from './ChatsPage';

function App() {
  const [user, setUser] = useState(undefined);

  const handleAuth = (user) => {
    setUser(user);
  };

  return (
    React.createElement(React.Fragment, null,
      !user ? (
        React.createElement(AuthPage, { onAuth: handleAuth })
      ) : (
        React.createElement(ChatsPage, { user: user })
      )
    )
  );
}

export default App;
