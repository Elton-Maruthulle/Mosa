import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './comp/Navbar';
import Hero from './comp/Hero';
import TreeOfhearts from './comp/treeOfhearts';
import Gallery from './comp/Gallery';
import Footer from './comp/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <TreeOfhearts />
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
          {/* Add other routes like RSVP here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
