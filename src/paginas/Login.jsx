import React from "react";
import Separar from "../componentes/Separador NavBar/Separador";
import "./estilos/Login.css";
import fondo from '../videos/fondo.mp4.mp4';

function Login() {
    return (
        <div className="login-page">
            <video autoPlay loop muted className="video-bg">
                <source src={fondo} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>
            <div className="login-container">
                <Separar />
                <form className="login-box">
                    <h1>Iniciar Sesión</h1>
                    <label htmlFor="correo">Correo</label>
                    <input type="email" id="correo" name="correo" required />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit">Iniciar</button>
                    <a href="#" className="forgot-password"> ¿Olvidaste tu contraseña?</a>
                    <a href="#" className="forgot-password"> ¿No tienes cuenta? Registrate aquí</a>
                </form>
            </div>
        </div>
    );
}

export default Login;
