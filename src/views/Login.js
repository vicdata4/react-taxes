import React, { useContext, createContext } from 'react';
import LoginForm from '../components/LoginForm/LoginFrom';
import fetch, { http } from '../utils/fetch.config';

function Login() {
  async function checkAccess(data) {
    const response = await fetch(http.get(), '/access');

    if (!response.error) {
      if (response.email === data.email && response.password === data.password) {
        console.log('auth');
      } else {
        console.log('invalid data');
      }
    }
  }

  return (
    <div className="App">
      <LoginForm onFormSubmit={checkAccess} />
    </div>
  );
}

export default Login;
