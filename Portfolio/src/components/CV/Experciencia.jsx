import React from "react";
import "../CV/experiencia.css"

function experiencia() {
    return (
        <div className="Contenedor_ex">
            <h2 className="titulo_Exp">Experiencia Laboral</h2>
            <ul className="Nav_exp">
                <li><h2>PWC Argentina</h2>
                    <a className="Soldado">Joven Profesional Experimentado (Oct 2011– Abr 2013 )</a>
                    <ul className="pwc">
                        <li>inventarios y arqueos de caja.</li>
                        <li>Control y análisis de rubros contables (Caja y bancos, inversiones, otras deudas, otros créditos, bienes de usos, bienes de cambios, test de pasivos omitidos)</li>
                        <li>Control y análisis de sumas y saldos.</li>
                        <li>Análisis y control de reservas; siniestros (industria seguros)</li>
                        <li>Control de resumen de actas (control interno, actas de asamblea y directorio)</li>
                        <li>Control de balances</li>
                        <li>Desarrollado en la industria del seguro y comercio</li>
                        <li>Circularización a bancos, clientes, proveedores y abogados.</li>
                    </ul>
                </li>


                <li><h2>Ejercito Argentino</h2>
                    <a className="Soldado">Soldado Voluntario Tecnico (May 2014 - Oct 2020)</a>
                    <ul className="Ejercito">
                        <li>Armado de presupuestos</li>
                        <li>Seguimientos y entrega del pedido</li>
                        <li>Facturación</li>
                        <li>Confección y seguimiento del listado de cuenta corriente de clientes</li>
                        <li>Trámites bancarios</li>
                        <li>Libro cheques</li>
                        <li>Manejo de paquete office</li>
                        <li>Manejo del Personal para la organización de determinadas tareas</li>
                    </ul>

                </li>

                <li><h2>Pedidos YA!</h2>
                    <a className="Soldado">Trabajador Independiente (Autonomo) - (May 2021 – Actualidad)</a>
                    <ul className="Ya">
                        <li>
                            Trabajos de logistica y cadeteria.
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    )

}

export default experiencia;