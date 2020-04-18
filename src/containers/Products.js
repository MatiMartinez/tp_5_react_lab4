import React, { Component } from 'react';
import Navbar from '../components/Navbar';

import products from '../datos/instrumentos.json';
import ProductCard from '../components/ProductCard';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products,
    };
  }

  render() {
    const renderProducts = this.state.products.instrumentos.map(
      (product, i) => {
        return (
          <li className="list-group-item mb-3" key={product.id}>
            <ProductCard
              id={product.id}
              instrumento={product.instrumento}
              precio={product.precio}
              costoEnvio={product.costoEnvio}
              cantidadVendida={product.cantidadVendida}
              imagen={product.imagen}
            />
          </li>
        );
      }
    );
    return (
      <>
        <Navbar />
        <div className="container col w-75 mt-5">
          <ul className="list-group list-group-flush">{renderProducts}</ul>
        </div>
      </>
    );
  }
}
