import React from "react";
import foto from "../../Imagenes/FotoNahue.jpg"
import "../Landing/landingStylos.css";
import Home from "../Home/Home";
import Contact from "../../components/contacto/Contacto";
import Doc from "../../../public/CV NAHUEL OBREGON - copia.pdf?url"


function Landing() {
    return (


        <div className="Contenedor_landing">
            <div class="contenedor-header">
                <header>
                    <div class="logo">
                        <a href="#">NAHUEL OBREGON</a>
                    </div>
                    <nav id="nav">
                        <ul>
                            <li><a href="#inicio" onclick="seleccionar()">INICIO</a></li>
                            <li><a href="#sobremi" onclick="seleccionar()">SOBRE MI</a></li>
                            <li><a href="#skills" onclick="seleccionar()">SKILLS</a></li>
                            <li><a href="#curriculum" onclick="seleccionar()">CURRICULUM</a></li>
                            <li><a href="#skills" onclick="seleccionar()">PORTFOLIO</a></li>
                            <li><a href="#contacto" onclick="seleccionar()">CONTACTO</a></li>
                        </ul>
                    </nav>
                    <div class="nav-responsive" onclick="mostrarOcultarMenu()">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </header>
            </div>
            <br />
            <br />
            <br />
            <section id="inicio" class="inicio">
                <div class="contenido-banner">
                    <div class="contenedor-img">
                        <img src={foto} width="300"
                            height="300" />
                    </div>
                    <h1>NAHUEL ANDRES OBREGON</h1>
                    <h2>Desarrollador de Software - Full Stack</h2>
                    <div class="redes">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-skype"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i class="fa-solid fa-rss"></i></a>
                    </div>
                </div>
                <section id="sobremi" class="sobremi">
                    <div class="contenido-seccion">
                        <h2>Sobre Mí</h2>
                        <p><span>Hola, soy Nahuel Obregon.</span>  Soy un Programador Fullstack con un firme deseo de impulsar mi carrera en el mundo de la programación.

                            Siempre me ha fascinado el poder de la tecnología para transformar y mejorar la vida de las personas. Con el paso de los años, mi curiosidad y pasión por la informática y el desarrollo web han crecido. Siempre me he considerado una persona curiosa, creativa, detallista, comprometida, con cualidades que me impulsan a enfrentar nuevos desafíos y superar obstáculos en mi camino hacia el éxito profesional.</p>

                        <div class="fila">

                            <div class="col">
                                <h3>Datos Personales</h3>
                                <ul>
                                    <li>
                                        <strong>Cumpleaños</strong>
                                        06-10-1992
                                    </li>
                                    <li>
                                        <strong>Teléfono</strong>
                                        3777 812165
                                    </li>
                                    <li>
                                        <strong>Email</strong>
                                        na.obregon27@hotmail.com;
                                        na.obregon27@gmail.com
                                    </li>
                                    <li>
                                        <strong>Dirección</strong>
                                        Jose e. Gomez 2639, Goya, Corrientes, Argentina
                                    </li>
                                    <li>
                                        <strong>Cargo</strong>
                                        <span>Full Stack Dev. Junior</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button>
                           <a href= {Doc} download>Descarga de CV</a>
                            <span class="overlay"></span>
                        </button>
                    </div>
                </section>
            </section>
            <section  id="skills" >


                <Home id="skills"></Home>


            </section>
            <section id="contacto">
             <Contact id="contacto" class="contacto"></Contact>

            </section>



        </div>

    )
}


export default Landing