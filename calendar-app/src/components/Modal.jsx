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
    const [fechaAsignacion, setFechaAsignacion] = useState(''); // Nuevo estado para Fecha de Asignación
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
            <form onSubmit={handleSubmit} className="formulario-evento">
        {/* Campos existentes */}
        <div className="campo-formulario">
          <label htmlFor="equipo">Equipo:</label>
          <input
            type="text"
            id="equipo"
            value={equipo}
            onChange={(e) => setEquipo(e.target.value)}
            placeholder="Ingrese el equipo"
            required // Campo obligatorio
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="maquina">Máquina:</label>
          <input
            type="text"
            id="maquina"
            value={maquina}
            onChange={(e) => setMaquina(e.target.value)}
            placeholder="Ingrese la máquina"
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="destino">Destino:</label>
          <input
            type="text"
            id="destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            placeholder="Ingrese el destino"
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="empresaSolicitante">Empresa Solicitante:</label>
          <input
            type="text"
            id="empresaSolicitante"
            value={empresaSolicitante}
            onChange={(e) => setEmpresaSolicitante(e.target.value)}
            placeholder="Ingrese la empresa solicitante"
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="operario1">Operario 1:</label>
          <input
            type="text"
            id="operario1"
            value={operario1}
            onChange={(e) => setOperario1(e.target.value)}
            placeholder="Ingrese el nombre del operario 1"
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="operario2">Operario 2:</label>
          <input
            type="text"
            id="operario2"
            value={operario2}
            onChange={(e) => setOperario2(e.target.value)}
            placeholder="Ingrese el nombre del operario 2"
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="operario3">Operario 3:</label>
          <input
            type="text"
            id="operario3"
            value={operario3}
            onChange={(e) => setOperario3(e.target.value)}
            placeholder="Ingrese el nombre del operario 3"
          />
        </div>

        {/* Nuevos campos agregados */}
        <div className="campo-formulario">
          <label htmlFor="ubicacion">Ubicación:</label>
          <input
            type="text"
            id="ubicacion"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            placeholder="Ingrese la ubicación"
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="fechaInicio">Fecha de Inicio:</label>
          <input
            type="datetime-local" // Cambiado a datetime-local para fecha y hora
            id="fechaInicio"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="fechaFin">Fecha de Finalización:</label>
          <input
            type="datetime-local" // Cambiado a datetime-local para fecha y hora
            id="fechaFin"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>


        <div className="botones-formulario">
          <button type="submit">Guardar</button>
          <button type="button" onClick={closeModal}>Cancelar</button>
        </div>
            </form>
        </div>
    </div>
  )
}

export default Modal
