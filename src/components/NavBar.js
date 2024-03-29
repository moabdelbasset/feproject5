import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/project5-logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { toast } from 'react-toastify';


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useClickOutsideToggle();


  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      toast.success("User logged out.");
    } catch(err) {
      // console.log(err);
    }
  };

  const addTaskIcon = (
  <NavLink 
    className={styles.NavLink} 
    activeClassName={styles.Active} 
    to="/tasks/create"
  >
    <i className="far fa-plus-square"></i>Add Task
  </NavLink>

  )
  const loggedInIcons = <>
        <NavLink 
    className={styles.NavLink} 
    activeClassName={styles.Active} 
    to="/tasks"
    >
      <i className="fas fa-stream"></i>Tasks
      </NavLink>

      <NavLink 
      className={styles.NavLink} 
      to="/"
      onClick={handleSignOut}
      >
        <i className="fas fa-sign-out-alt"></i>Sign out
        </NavLink>

        <NavLink 
      className={styles.NavLink} 
      to={`/profile/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="profile" height={40} />
        </NavLink>
  </>
  const loggedOutIcons = (<>
        <NavLink 
      className={styles.NavLink} 
      activeClassName={styles.Active} 
      to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
        </NavLink>
      <NavLink
      className={styles.NavLink} 
      activeClassName={styles.Active} 
      to="/signup"
      >
        <i className="fas fa-user-plus"></i>Sign up
        </NavLink>
  </>
  )
  return (
<Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
  <Container>
    <NavLink to="/" >
  <Navbar.Brand href="#home"><img src={logo} alt="logo" height="45" />
  </Navbar.Brand>
  </NavLink>
  {currentUser && addTaskIcon}
  <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-left">
      <NavLink 
      exact
      className={styles.NavLink} 
      activeClassName={styles.Active} 
      to="/"
      >
        <i className="fas fa-home"></i>Home
      </NavLink>
      <NavLink 
        className={styles.NavLink} 
        activeClassName={styles.Active} 
        to="/contact"
      >
        <i className="fas fa-envelope"></i>Contact Us
      </NavLink>
      {currentUser ? loggedInIcons: loggedOutIcons}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar