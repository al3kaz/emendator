import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Page from './Page'
import Navigation from './Navigation'

function App() {
  return (
    <Router>
      <div className="app container">
        <header className="header">
          {<Header />}
        </header>
        <main className="main">
          <aside className="main__nav">
            {<Navigation />}
          </aside>
          <section className='main__page'>
            {<Page />}
          </section>
        </main>
        <footer className="footer">
          {<Footer />}
        </footer>
      </div>
    </Router>
  );
}

export default App;
