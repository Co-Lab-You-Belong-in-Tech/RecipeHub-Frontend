import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import SignUpForm from './signUpPage';
// import axios from 'axios';
import UserContent from '../pages/userContent';

export default function LoginOut({ loggedIn, setLoggedIn }) {
  const history = useHistory();
  if (loggedIn) {
    setLoggedIn(false);
  }
  const initialData = { userName: '', password: '' };
  const [formData, setFormData] = useState(initialData);

  const handleChange = (event) => {
    setFormData(() => {
      return { ...formData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    //eslint-disable-next-line
    const { userName, password } = formData;
    // event.preventDefault();
    // if (userName && password !== '') {
    //   axios
    //     .post('http://localhost:5000/login', {
    //       data: {
    //         userName: userName,
    //         password: password,
    //       },
    //     })
    //     .then((response) => {
    //       console.log(`statusCode: ${response.statusCode}`);
    //       console.log(response);
    //       if (response.statusCode !== 200) {
    //         alert(response.statusCode);
    //         setLoggedIn(false);
    //         history.push('/signup');
    //       } else {
    //         setLoggedIn(true);
    //         history.push('/usercontent');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
    // setLoggedIn(true);
    history.push('/usercontent');
  };

  const handleDirect = (event) => {
    event.preventDefault();
    history.push('/signup');
  };

  return (
    <Container
      style={{
        display: 'flex',
        margin: 'auto',
        width: 'auto',
        padding: '10px',
        justifyContent: 'center',
      }}
    >
      <div
        variant='outline-dark'
        className='container w-50'
        style={{
          border: '2px solid blue',
          padding: '5px',
          boxShadow: '2px 2px grey',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2 className='page-title1'>Log In</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label
              htmlFor='userName'
              className='form-label'
              style={{
                color: 'black',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Username:
            </label>
            <input
              name='userName'
              type='text'
              className='form-control'
              id='userName'
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label
              htmlFor='password'
              className='form-label'
              style={{
                color: 'black',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Password:
            </label>
            <input
              name='password'
              type='password'
              className='form-control'
              id='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type='submit'
            className='btn btn-success'
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '10px',
            }}
          >
            Log In
          </button>
        </form>
        <button
          onClick={handleDirect}
          type='submit'
          className='btn btn-success'
          style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
        >
          Sign Up Here!
        </button>
        <Switch>
          <Route exact={true} path='/usercontent'>
            <UserContent />
          </Route>
          <Route exact={true} path='/signup'>
            <SignUpForm />
          </Route>
        </Switch>
      </div>
    </Container>
  );
}
