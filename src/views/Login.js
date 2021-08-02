import React from 'react';
import fetch, { http } from '../utils/fetch.config';
import LoginForm from '../components/LoginForm/LoginFrom';

function Login() {
  async function checkAccess(data) {
    const response = await fetch(http.post(data), '/login');
    
    if (!response.error) {
      document.cookie = `XSRF-TOKEN=${response.accessToken}`;
      window.location.href = '/taxes';
    } else {
      alert('Invalid email or password');
    }

  }

  return (
    <div className="App">
      <h1>Login</h1>
      <LoginForm onFormSubmit={checkAccess} />
      <p>Email: email@email.com</p>
      <p>Password: 123123</p>
    </div>
  );
}

export default Login;
