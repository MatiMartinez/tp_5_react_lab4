import React, { Component } from 'react';
import Navbar from '../components/Navbar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <p>
            Musical Hendrix es una tienda de instrumentos musicales con ya más
            de 15 años de experiencia. Tenemos el conocimiento y la capacidad
            como para informarte acerca de las mejores elecciones para tu compra
            musical.
          </p>
        </div>
      </div>
    );
  }
}
