import React from "react";
import "../CV/proyectos.css";
import { useState } from "react";
import { Link } from "react-router-dom";



function Proyectos() {


    return (
        <div className="Contenedor_Pro">
            <h2 className="tituloo">Proyectos Realizados</h2>
            <ul className="Nav_Pro">
                <li>
                    <Link to="https://github.com/naobregon27/PI-Rick-and-Morty-"><h2>Rick And Morty</h2></Link>
                    <ul className="RM">
                        <li>
                            <p>
                                Es un proyecto integrador, Donde se pone en practica lo aprendido paso a paso dentro del bootcamp FullStack Dev.

                            </p>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link to="https://github.com/naobregon27/PI-Countries">
                        <h2>Country</h2>
                    </Link>
                    <ul className="Coun">
                        <li>
                            <p>
                                Proyecto Individual, desarrollando una SPA (Single Page Application), aplicando las tecnologías: React, Redux, NodeJS, Express.js, Sequelize, PostgreSQL, CSS3, HTML5.

                                Las principales funciones de esta SPA son:
                                - Filtrar los países por Continentes.
                                - Filtrar los países por Actividades turísticas.
                                - Tener la posibilidad de combinar ambos filtros.
                                - Ordenar alfabéticamente, o por cantidad de población.
                                - Buscar lo países por Nombre, pudiendo buscar dentro
                                de los países previamente filtrados.
                                - Crear nuevas actividades turísticas.
                            </p>
                        </li>
                    </ul>


                </li>

                <li>
                    <Link to="https://pf-spooty-fans-two.vercel.app/">
                        <h2>SPOOTY FANS</h2>
                    </Link>
                    <ul className="Sp">
                        <li>
                            <p>
                                En SpotyFans, no solo eres un oyente pasivo, ¡sino un participante activo en la vibrante escena musical! Explora una gran variedad de géneros musicales y descubre a talentosos artistas independientes que comparten sus creaciones únicas. Ya sea que te guste el pop enérgico, el hip-hop inspirador o la elegancia del jazz, estamos seguros de que encontrarás algo que toque las fibras de tu alma musical.
                                Publica tus propias canciones y deja que el mundo las escuche, ademas, los oyentes podrán disfrutar de un chat propio en cada canción.
                            </p>
                        </li>
                    </ul>


                </li>
            </ul>



        </div>
    )
}

export default Proyectos;