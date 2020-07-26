import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="card border-primary mb-3">
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card border-secondary mb-3">
        <div class="card-header">Header</div>
        <div class="card-body text-secondary">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
