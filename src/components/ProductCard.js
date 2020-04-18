import React from 'react';

import Camion from '../assets/img/camion.png';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  return (
    <React.Fragment>
      <Link className="link-unstyled" to={'/product/' + props.id}>
        <div className="row align-items-center">
          {/* Imagen */}
          <div className="image-content d-block">
            <img
              src={require('../assets/img/' + props.imagen)}
              width="160"
              height="160"
              alt="props.key"
            />
          </div>
          <div className="container col ml-4">
            {/* Instrumento */}
            <h4>{props.instrumento}</h4>
            {/* Precio */}
            <div>
              <h5>
                <b>
                  <span className="mr-1">$</span>
                  <span className="">{props.precio}</span>
                </b>
              </h5>
            </div>
            {/* Costo de envio */}
            {props.costoEnvio === 'G' ? (
              <div>
                <img src={Camion} alt="camion"></img>
                <span className="text-success">
                  <small>
                    <b>Envío gratis a todo el pais</b>
                  </small>
                </span>
              </div>
            ) : (
              <div>
                <span className="text-warning mr-1">
                  <small>
                    <b>Costo de Envio Interior de Argentina:</b>
                  </small>
                </span>
                <span className="text-warning">
                  <small>
                    <b>${props.costoEnvio}</b>
                  </small>
                </span>
              </div>
            )}
            {/* Cantidad vendida */}
            <div>
              <span className="text-dark mr-1">
                <small>{props.cantidadVendida}</small>
              </span>
              <span>
                <small>vendidos</small>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
