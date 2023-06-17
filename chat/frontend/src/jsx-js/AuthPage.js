import axios from 'axios';

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.username.value;
    axios
      .post('http://localhost:3001/authenticate', { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log('Auth Error', e));
  };

  return (
    React.createElement('div', { className: 'background' },
      React.createElement('form', { onSubmit: onSubmit, className: 'form-card' },
        React.createElement('div', { className: 'form-title' }, 'Welcome 👋'),
        React.createElement('div', { className: 'form-subtitle' }, 'Set a username to get started'),
        React.createElement('div', { className: 'auth' },
          React.createElement('div', { className: 'auth-label' }, 'Username'),
          React.createElement('input', { className: 'auth-input', name: 'username' }),
          React.createElement('button', { className: 'auth-button', type: 'submit' }, 'Enter')
        )
      )
    )
  );
};

export default AuthPage;
