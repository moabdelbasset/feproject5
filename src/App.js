import NavBar from './components/NavBar';
import Footer from './components/Footer';
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;