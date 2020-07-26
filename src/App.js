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
      
      <div class="container my-4">
        <div class="row text-center">
          <div class="col-md-6 mb-4">
            <h6 class="my-5 h2">Basic example</h6>
            <img class="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
              data-holder-rendered="true" width="100px" height="100px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
