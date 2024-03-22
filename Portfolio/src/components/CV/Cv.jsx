import React from "react"
import "../CV/cv.css";
import Experiencia from "./Experciencia";

import react from "../../assets/Rectangle 1.svg";
import jsVector from "../../assets/jsVector.svg";
import htmlVector from "../../assets/htmlVector.svg";
import cssVector from "../../assets/cssVector.svg";
import nodeVector from "../../assets/nodeVector.svg";
import reactVector from "../../assets/reactVector.svg";
import tailwindVector from "../../assets/tailwindVector.svg";
import figmaVector from "../../assets/figmaVector.svg";
import gitVector from "../../assets/git.svg";



function Cv() {
    return (
        <div>
            <div className="Contenedor">
                {/* <p className="titulo">Me desempaño en area Backend tanto como en el Frontend. En la parte de Backend utilizando tecnologías como Node.js, Express.js y bases de datos como PostgreSQL y Maria DB. También tengo experiencia en el diseño e implementación de arquitecturas de microservicios. Eh implementado en proyectos pasarelas de pagos (MercadoPago), WebSocket y utilice herramienta como Cloudinary.
                    Además de mis habilidades en backend, tengo experiencia en el desarrollo frontend utilizando React, Redux, HTML5, CSS3 y JavaScript, lo que me permite colaborar eficientemente con equipos Full Stack en proyectos integrales.
                    Soy cómodo trabajando tanto en equipo como de forma independiente, y estoy siempre dispuesto a aprender nuevas tecnologías para mejorar mis habilidades y mantenerme actualizado en el cambiante mundo del desarrollo web.
                </p>
                <h2 className="titulo">Full Stack Developer| Node JS| express| Postgre SQL| Maria DB|
                    Sequelize| SQL| HTML| CSS| React JS| Redux JS| MercadoPago|
                    WebSockets
                </h2> */}
                {/* <h1 className="titulo"> Nahuel Andrés Obregón</h1> */}

            </div>
            <h4 className="Titulo_vector">Skills</h4>
            <br />
            <div className="Conteiner_vectores">
                <div className="_Vectores">
                    <img src={jsVector} alt="" />
                    {/* <img src={react} alt="" /> */}
                    <img src={htmlVector} alt="" />
                    <img src={cssVector} alt="" />
                    <img src={nodeVector} alt="" />
                    <img src={reactVector} alt="" />
                    <img src={tailwindVector} alt="" />
                    <img src={figmaVector} alt="" />
                    <img src={gitVector} alt="" />
                </div>
                {/* <div>
                    <Experiencia/>

                </div> */}
            </div>

        </div>


    )
}

export default Cv   