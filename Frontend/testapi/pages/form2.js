import React, { useState } from 'react';
import swal from 'sweetalert';

export default function Form2() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/login';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    if (typeof result.name === 'undefined') {
      swal({
        title: 'Invalid username or password',
        icon: 'error',
        button: 'continue',
      });
    } else {
      localStorage.setItem('name', result.name);
      localStorage.setItem('_id', result._id);
      localStorage.setItem('email', result.email);
      localStorage.setItem('token', result.token);
      localStorage.setItem('isAdmin', result.isAdmin);
      window.location.replace('../main');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="auth2" method="post">
      <label className="lab1">Email</label>
      <br />
      <input
        type="email"
        placeholder="xyz@gamil.com"
        name="email"
        id="email1"
        className="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label className="lab1">Password</label>
      <br />
      <input
        type="password"
        placeholder="*********"
        name="password1"
        id="password1"
        className="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <img className="passvis1" src="./images/passvis.png" id="passvis1" />
      <br />
      <button type="submit" value="submit" className="btn1">
        Login
      </button>
      <p className="linktext" id="link2">
        Not registered yet? Sign up.
      </p>
    </form>
  );
}
