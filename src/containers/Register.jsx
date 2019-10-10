import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
<section class="register">
    <section class="register__container">
      <h2>Regístrate</h2>
      <form class="register__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button">Registrarme</button>
      </form>
      <Link to="/login">
        Iniciar sesión
      </Link>
    </section>
  </section>

);

export default Register;