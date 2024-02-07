import NavBar from './components/NavBar';
import Footer from './components/Footer';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import TaskCreateForm from './pages/tasks/TaskCreateForm';
import TaskListPage from './pages/tasks/TaskListPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import TaskEditForm from './pages/tasks/TaskEditForm';
import HomePage from './pages/home/HomePage';
import ContactForm from './pages/contact/ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function App() {

  return (

        <div className={styles.App}>
           <ToastContainer />
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
             
              <Route exact path="/" render={()=> < HomePage/>} />
              <Route exact path="/signin" render={()=> <SignInForm />} />
              <Route exact path="/signup" render={()=> <SignUpForm />} />
              <Route exact path="/tasks/create" render={() => <TaskCreateForm />} />
              <Route exact path="/tasks" render={() => <TaskListPage />} />
              <Route exact path="/tasks/:id" render={() => <TaskDetailPage />} /> 
              <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
              <Route exact path="/contact" render={() => <ContactForm />} />
              <Route render={()=><p>Page not found!</p>} />
            </Switch>
          </Container>
          <Footer />
        </div>

  );
}

export default App;