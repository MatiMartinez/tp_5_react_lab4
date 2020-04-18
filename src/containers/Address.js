import React, { Component } from 'react';
import Navbar from '../components/Navbar';

import Ubicacion from '../assets/img/ubicacion.png';

export default class Address extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex justify-content-center">
          <div className="m-5 w-75">
            <img className="w-100" src={Ubicacion} alt="google-maps" />
          </div>
        </div>
      </div>
    );
  }
}
