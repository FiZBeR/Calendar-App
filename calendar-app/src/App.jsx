import { useState, useEffect } from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs'
import './App.css'
import Modal from './components/modal'
import { Info } from './components/Info'

function App() {
  const localizer = dayjsLocalizer(dayjs);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenDos, setModalOpenDos] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    {
      start: dayjs("2025-03-10T09:00:00").toDate(),
      end: dayjs("2025-03-10T11:00:00").toDate(),
      title: "Mantenimiento Preventivo",
      maquina: "Torno CNC 3000",
      empresa: "Metalúrgica Acme",
      ubicacion: "Planta Principal, Sección B"
    },
    {
      start: dayjs("2025-03-11T14:00:00").toDate(),
      end: dayjs("2025-03-11T16:30:00").toDate(),
      title: "Revisión de Calidad",
      maquina: "Línea de Ensamblaje 5",
      empresa: "Electrónicos Global",
      ubicacion: "Almacén Central",
    },
    {
      start: dayjs("2025-03-12T08:30:00").toDate(),
      end: dayjs("2025-03-12T10:00:00").toDate(),
      title: "Capacitación de Operarios",
      maquina: "Simulador de Soldadura",
      empresa: "Construcciones Unidas",
      ubicacion: "Sala de Capacitación"
    },
    {
      start: dayjs("2025-03-13T15:30:00").toDate(),
      end: dayjs("2025-03-13T17:00:00").toDate(),
      title: "Ajuste de Parámetros",
      maquina: "Impresora 3D Industrial",
      empresa: "Diseños Innovadores",
      ubicacion: "Laboratorio de Prototipos"
    },
    {
      start: dayjs("2025-03-14T10:30:00").toDate(),
      end: dayjs("2025-03-14T12:30:00").toDate(),
      title: "Prueba de Rendimiento",
      maquina: "Generador Eléctrico 100kW",
      empresa: "Energía Sostenible",
      ubicacion: "Sala de Máquinas"
    }
  ]);

  const showInfo = (event) => {
        setSelectedEvent(event); // Almacena el evento seleccionado en el estado
        setModalOpenDos(true);
  };

  const components = {
    event: props => {

    }
  }

  return (
    <div style={{
      height: "95vh",
      width: "80vw",
      display: "flex",
    }}>
      <div>
        <button style={{background: "blue",
         width: "150px",
         height: "80px",
         color: "white",
         margin: "15px",
         borderRadius: "10px"}} onClick={() => setModalOpen(true)}>
          Nuevo Evento
        </button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)} list={setEvents}></Modal>
      <Calendar
        localizer={localizer}
        events={events}
        onSelectEvent={showInfo}
      />
      <Info isOpen={isModalOpenDos} closeModal={() => setModalOpenDos(false)} list={selectedEvent}/>
    </div>
  )
}

export default App
