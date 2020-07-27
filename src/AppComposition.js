import React from "react";
import "./App.css";
import Tarjeta from "./componentes/Tarjeta/Tarjeta";
import ListaProductos from "./componentes/ListaProductos/ListaProductos";

function AppComposition() {
  return (
    <div className="App">
      <Tarjeta titulo="Lista de Productos">
        <ListaProductos />
      </Tarjeta>
    </div>
  );
}

export default AppComposition;
