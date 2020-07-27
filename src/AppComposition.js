import React from "react";
import "./App.css";
import Tarjeta from "./componentes/Tarjeta/Tarjeta";
import BloqueLeft from "./componentes/BloqueLeft/BloqueLeft";
import BloqueRight from "./componentes/BloqueRight/BloqueRight";

function AppComposition() {
  return (
    <div className="App">
      <Tarjeta>
        <BloqueLeft>
          <div class="card border-secondary mb-3">
            <div class="card-header">Header</div>
            <div class="card-body text-secondary">
              <h5 class="card-title">Secondary card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
        </BloqueLeft>
        <BloqueRight>
          <div class="card border-primary mb-3">
            <div class="card-header">Header</div>
            <div class="card-body text-primary">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>          
        </BloqueRight>
      </Tarjeta>
    </div>
  );
}

export default AppComposition;
