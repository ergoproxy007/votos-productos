import React from "react";
import "./App.css";
import Producto from "./componentes/producto/Producto";

function App() {
  const productos = [
    {
      fotoVendedor:
        "https://img2.freepng.es/20190702/tl/kisspng-computer-icons-portable-network-graphics-avatar-tr-clip-directory-professional-transparent-amp-png-5d1bfa95e508d4.2980489715621147099381.jpg",
    },
    {
      fotoVendedor:
        "https://i.pinimg.com/736x/49/c8/e4/49c8e403cd1929e9e7b02126824ff831.jpg",
    },
    {
      fotoVendedor:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0d4CrFaUnD7NjPTdmbULFdsZ9DCcifMoj4Q&usqp=CAU",
    },
    {
      fotoVendedor:
        "https://thumbs.dreamstime.com/z/icono-de-la-muestra-del-usuario-s%C3%ADmbolo-de-la-persona-avatar-humano-84519083.jpg",
    },
  ];

  return (
    <div className="App">
      {productos.map((producto) => {
        return <Producto producto={producto} />;
      })}
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
    </div>
  );
}

export default App;
