import NavBar from './components/NavBar';
import Footer from './components/Footer';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={()=> <h1>Home page</h1>} />
          <Route exact path="/signin" render={()=> <SignInForm />} />
          <Route exact path="/signup" render={()=> <SignUpForm />} />
          <Route render={()=><p>Page not found!</p>} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;