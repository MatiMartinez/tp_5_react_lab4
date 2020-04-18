import React, { Component } from 'react';
import Navbar from '../components/Navbar';

import imagen from '../assets/img/nro5.jpg';
import Camion from '../assets/img/camion.png';

import products from '../datos/instrumentos.json';

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      instrumento: [],
    };
  }

  async componentDidMount() {
    const instrument = await products.instrumentos.filter(
      (inst) => inst.id === this.props.match.params.id
    );
    await this.setState({
      instrumento: instrument[0],
    });
    console.log(this.state.instrumento.imagen);
  }

  getImage = (url) => {
    return require('url');
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container w-75">
          <div className="container row align-items-center mt-5">
            {/* Imagen */}
            <div className="d-block col-8 border-right">
              <img src={imagen} alt="" width="400" />
            </div>
            <div className="container col ml-3">
              {/* Cantidad vendida */}
              <div>
                <span className="text-dark mr-1">
                  <small>{this.state.instrumento.cantidadVendida}</small>
                </span>
                <span>
                  <small>vendidos</small>
                </span>
              </div>
              {/* Instrumento */}
              <h4 className="mt-1">{this.state.instrumento.instrumento}</h4>
              {/* Precio */}
              <div className="mt-3">
                <h2>
                  <span className="mr-1">$</span>
                  <span className="">{this.state.instrumento.precio}</span>
                </h2>
              </div>
              {/* Marca y Modelo */}
              <div className="mt-3">
                <h6>Marca: {this.state.instrumento.marca}</h6>
                <h6>Modelo: {this.state.instrumento.modelo}</h6>
              </div>
              {/* Costo de envio */}
              {this.state.instrumento.costoEnvio === 'G' ? (
                <div className="mt-4">
                  <img src={Camion} alt="camion"></img>
                  <span className="text-success">
                    <small>
                      <b>Envío gratis a todo el pais</b>
                    </small>
                  </span>
                </div>
              ) : (
                <div className="mt-4">
                  <span className="text-warning mr-1">
                    <small>
                      <b>Costo de Envio Interior de Argentina:</b>
                    </small>
                  </span>
                  <span className="text-warning">
                    <small>
                      <b>${this.state.instrumento.costoEnvio}</b>
                    </small>
                  </span>
                </div>
              )}
              {/* Button Agregar Carrito */}
              <div className="mt-5">
                <button type="button" class="btn btn-outline-info w-100">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
