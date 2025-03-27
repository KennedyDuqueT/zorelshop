import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home">
      <div className="page-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          <div className="text-center md:text-left">
            <h2 className="h1">Elegancia en cada detalle</h2>
            <p>Descubre nuestra colección exclusiva de moda</p>
            <a className="button button-primary" href="/collection">
              EXPLORAR AHORA
            </a>
          </div>
          <div /> {/* Espacio reservado para la imagen */}
        </div>
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
