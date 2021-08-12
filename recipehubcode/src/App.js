import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ContactForm from './pages/contactPage';
import Login from './pages/loginPage';
import Footer from './components/footer';
import HomePageContent from './components/homePageContent';
import SignUpForm from './pages/signUpPage';
import { curRentState } from './assets/pageTitles';
import './components/App.css';
import { FormspreeProvider } from '@formspree/react';

function App({ ContactPage, pageProps }) {
  //eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false);

  //eslint-disable-next-line
  const [currentState, setCurrentState] = useState({ ...curRentState });

  return (
    <Switch>
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>RecipeHub</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
                <Link className='nav-link' to='/signup'>
                  Sign Up
                </Link>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path='/'
            exact
            render={() => (
              <HomePageContent
                title={currentState.home.title}
                text={currentState.home.text}
              />
            )}
          />
          <Route
            path='/contact'
            render={() => (
              <FormspreeProvider project='{your-project-id}'>
                <ContactForm {...pageProps} />
              </FormspreeProvider>
            )}
          />
          <Route
            path='/signup'
            render={() => <SignUpForm title={currentState.signup.title} />}
          />
          <Route
            path='/login'
            render={() => <Login title={currentState.login.title} />}
          />
          <Footer />
        </Container>
      </Router>
    </Switch>
  );
}

export default App;
