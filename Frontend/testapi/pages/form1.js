import React, { useState } from 'react';
import swal from 'sweetalert';

export default function Form1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/register';
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
        title: 'User already registered',
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
    <form onSubmit={handleSubmit} id="auth1">
      <label className="lab1">Name</label>
      <br />
      <input
        type="text"
        placeholder="Enter Your Name"
        name="name"
        id="name1"
        className="name"
        minLength="4"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label className="lab1">Email</label>
      <br />
      <input
        type="email"
        placeholder="xyz@gamil.com"
        name="email"
        id="email"
        className="email"
        minLength="4"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label className="lab1">Password</label>
      <br />
      <input
        type="password"
        placeholder="*********"
        name="password"
        id="password"
        className="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <img className="passvis" src="./images/passvis.png" id="passvis" />
      <br />
      <button type="submit" value="submit" className="btn1">
        Sign Up
      </button>
      <p className="linktext" id="link1">
        Already registered user? Sign in.
      </p>
    </form>
  );
}
