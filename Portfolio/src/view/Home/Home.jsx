import React from "react";
import Cv from "../../components/CV/Cv";
import Experiencia from "../../components/CV/Experciencia";
import Proyectos from "../../components/CV/Proyectos";

import "../Home/Home.css"


function Home() {
    return (
        <div className="home_contenedor">

            <br />
            <br />
            <br />
            <div className="home_conteiner">


                <h1 className="H12">
                    Bienvenido a mi Portafolio </h1>
                <div className="LOLO">
                    <section id="curriculum">
                    <Cv id= "skills" class= "skills"/>
                    </section>
                    <br />
                    <Proyectos />
                    <br />

                    <Experiencia />

                </div>

                {/* <div>
                    <Contact />
                </div> */}




            </div>
        </div>

    )
}

export default Home