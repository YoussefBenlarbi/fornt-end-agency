import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Welcome to My React App</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;