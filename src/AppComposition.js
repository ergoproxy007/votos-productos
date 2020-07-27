import React from "react";
import "./App.css";
import Tarjeta from "./componentes/Tarjeta/Tarjeta";
import BloqueLeft from "./componentes/BloqueLeft/BloqueLeft.jsx";
import BloqueRight from "./componentes/BloqueRight/BloqueRight.jsx";
import BloqueImagen from "./componentes/BloqueImagen/BloqueImagen.jsx";
import SimpleCard from "./componentes/SimpleCard/SimpleCard.jsx";

function AppComposition() {
  return (
    <div className="App">
      <Tarjeta titulo="Lista de Productos">
        <BloqueLeft>
          <BloqueImagen foto="a30s-2.jpg" />
        </BloqueLeft>
        <BloqueRight>
          <SimpleCard>
            <p>Componente 1 Productos</p>
            <p>Componente 2 Productos</p>
            <p>Componente 3 Productos</p>
          </SimpleCard>       
        </BloqueRight>
      </Tarjeta>
    </div>
  );
}

export default AppComposition;
