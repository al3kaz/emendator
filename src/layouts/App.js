import React from 'react';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Page from './Page'
import Navigation from './Navigation'

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          {<Header />}
        </header>
        <main>
          <aside>
            {<Navigation />}
          </aside>
          <section className='page'>
            {<Page />}
          </section>
        </main>
        <footer>
          {<Footer />}
        </footer>
      </div>
    </Router>
  );
}

export default App;
