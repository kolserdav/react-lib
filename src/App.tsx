import React from 'react';
// Import the package locally,
// and test as a library package look in the "example" directory
import Main from './dist/Main.esm';
// Import styles if used css in to component
import './dist/Main.css';
import './App.scss';

function App() {
  return (
    <div placeholder="test" className="app">
      <Main />
    </div>
  );
}

export default App;
