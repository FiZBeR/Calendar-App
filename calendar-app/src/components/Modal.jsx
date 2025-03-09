import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import dayjs from 'dayjs'
import "./ModalStyle.css"

const Modal = ({isOpen, closeModal, list}) => {

    const [equipo, setEquipo] = useState('');
    const [maquina, setMaquina] = useState('');
    const [destino, setDestino] = useState('');
    const [empresaSolicitante, setEmpresaSolicitante] = useState('');
    const [operario1, setOperario1] = useState('');
    const [operario2, setOperario2] = useState('');
    const [operario3, setOperario3] = useState('');
    const [ubicacion, setUbicacion] = useState(''); // Nuevo estado para Ubicación
    const [fechaInicio, setFechaInicio] = useState(''); // Nuevo estado para Fecha de Inicio
    const [fechaFin, setFechaFin] = useState(''); // Nuevo estado para Fecha de Finalización
  
  

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita la recarga de la página por defecto al enviar
    
        // Aquí puedes manejar la lógica de guardar los datos del formulario
        const datosEvento = {
          equipo: equipo,
          maquina: maquina,
          destino: destino,
          empresaSolicitante: empresaSolicitante,
          operario1: operario1,
          operario2: operario2,
          operario3: operario3,
          ubicacion: ubicacion, // Incluye Ubicación en los datos
          fechaInicio: fechaInicio ? dayjs(fechaInicio).toDate() : null, // Formatea y guarda Fecha de Inicio con dayjs
          fechaFin: fechaFin ? dayjs(fechaFin).toDate() : null, // Formatea y guarda Fecha de Finalización con dayjs
        };
    
        console.log("Datos del evento a guardar:", datosEvento);
        const newEvent = {
            start: fechaInicio,
            end: fechaFin,
            title: equipo,
        };

        list((prevEvents) => [...prevEvents, newEvent]);
    
        // Resetea los campos del formulario después de enviar (opcional)
        setEquipo('');
        setMaquina('');
        setDestino('');
        setEmpresaSolicitante('');
        setOperario1('');
        setOperario2('');
        setOperario3('');
        setUbicacion('');
        setFechaAsignacion('');
        setFechaInicio('');
        setFechaFin('');
    
    
        alert("Formulario enviado correctamente (revisa la consola para los datos).");
      };
    

  if(!isOpen) return null;

  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <AiOutlineClose  size={30} color="#000000" onClick={closeModal} cursor={"pointer"}/>
            <h2>Nuevo Evento</h2>
            <form onSubmit={handleSubmit} className="formulario-evento mui-form"> {/* Clase mui-form para estilos de formulario MUI */}
                {/* Campos del formulario - Clases MUI en los contenedores */}
                <div className="campo-formulario mui-campo">
                    <label htmlFor="equipo" className="mui-label">Equipo:</label> {/* Clase mui-label para etiquetas MUI */}
                    <input
                        type="text"
                        id="equipo"
                        value={equipo}
                        onChange={(e) => setEquipo(e.target.value)}
                        placeholder="Ingrese el equipo"
                        required
                        className="mui-input" // Clase mui-input para inputs MUI
                    />
                </div>

                <div className="campo-formulario mui-campo">
                    <label htmlFor="maquina" className="mui-label">Máquina:</label>
                    <input
                        type="text"
                        id="maquina"
                        value={maquina}
                        onChange={(e) => setMaquina(e.target.value)}
                        placeholder="Ingrese la máquina"
                        className="mui-input"
                    />
                </div>

                <div className="campo-formulario mui-campo">
                    <label htmlFor="destino" className="mui-label">Destino:</label>
                    <input
                        type="text"
                        id="destino"
                        value={destino}
                        onChange={(e) => setDestino(e.target.value)}
                        placeholder="Ingrese el destino"
                        className="mui-input"
                    />
                </div>

                <div className="campo-formulario mui-campo">
                    <label htmlFor="empresaSolicitante" className="mui-label">Empresa Solicitante:</label>
                    <input
                        type="text"
                        id="empresaSolicitante"
                        value={empresaSolicitante}
                        onChange={(e) => setEmpresaSolicitante(e.target.value)}
                        placeholder="Ingrese la empresa solicitante"
                        className="mui-input"
                    />
                </div>

                {/*
                <div className="campo-formulario mui-campo">
                    <label htmlFor="operario1" className="mui-label">Operario 1:</label>
                    <input
                        type="text"
                        id="operario1"
                        value={operario1}
                        onChange={(e) => setOperario1(e.target.value)}
                        placeholder="Ingrese el nombre del operario 1"
                        className="mui-input"
                    />
                </div>

                <div className="campo-formulario mui-campo">
                    <label htmlFor="operario2" className="mui-label">Operario 2:</label>
                    <input
                        type="text"
                        id="operario2"
                        value={operario2}
                        onChange={(e) => setOperario2(e.target.value)}
                        placeholder="Ingrese el nombre del operario 2"
                        className="mui-input"
                    />
                </div>

                <div className="campo-formulario mui-campo">
                    <label htmlFor="operario3" className="mui-label">Operario 3:</label>
                    <input
                        type="text"
                        id="operario3"
                        value={operario3}
                        onChange={(e) => setOperario3(e.target.value)}
                        placeholder="Ingrese el nombre del operario 3"
                        className="mui-input"
                    />
                </div>
                */ }

                <div className="campo-formulario mui-campo">
                    <label htmlFor="ubicacion" className="mui-label">Ubicación:</label>
                    <input
                        type="text"
                        id="ubicacion"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        placeholder="Ingrese la ubicación"
                        className="mui-input"
                    />
                </div>

                <div className="campo-formulario mui-campo">
                    <label htmlFor="fechaInicio" className="mui-label">Fecha de Inicio:</label>
                    <input
                        type="datetime-local"
                        id="fechaInicio"
                        value={fechaInicio}
                        onChange={(e) => setFechaInicio(e.target.value)}
                        className="mui-input"
                    />
                </div>

                <div className="campo-formulario mui-campo">
                    <label htmlFor="fechaFin" className="mui-label">Fecha de Finalización:</label>
                    <input
                        type="datetime-local"
                        id="fechaFin"
                        value={fechaFin}
                        onChange={(e) => setFechaFin(e.target.value)}
                        className="mui-input"
                    />
                </div>


                <div className="botones-formulario mui-botones"> {/* Clase mui-botones para estilos de botones MUI */}
                    <button type="submit" className="mui-button mui-button-primary">Guardar</button> {/* Clases mui-button y mui-button-primary para botón primario MUI */}
                    <button type="button" onClick={closeModal} className="mui-button mui-button-secondary">Cancelar</button> {/* Clases mui-button y mui-button-secondary para botón secundario MUI */}
                </div>
            </form>
        </div>
    </div>
  )
}

export default Modal
