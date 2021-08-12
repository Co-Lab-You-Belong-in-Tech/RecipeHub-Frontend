import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Contact from './pages/contactPage';
// import Login from './pages/loginPage';
// import HomePageContent from './components/homePageContent';
// import SignUp from './pages/signUpPage';
import { curRentState } from './assets/pageTitles';
import './components/App.css';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [currentState, setCurrentState] = useState({ ...curRentState });
  console.log('my state', currentState);
  return (
    <Switch>
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>RecipeHub</Navbar.Brand>
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
            // render={() => (
            //   <HomePageContent
            //     title={currentState.home.title}
            //     text={currentState.home.text}
            //   />
            // )}
          />
          <Route
            path='/Contact'
            // render={() => <Contact title={currentState.contact.title} text={currentState.contact.text} />}
          />
          <Route
            path='/Sign Up Today!'
            // render={() => <SignUp title={currentState.signup.title} />}
          />
          <Route
            path='/Login'
            // render={() => <Login title={currentState.login.title} />}
          />
          {/* <Footer /> */}
        </Container>
      </Router>
    </Switch>
  );
}

export default App;
