import { useState, useEffect } from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs'
import './App.css'
import Modal from './components/modal'

function App() {
  const localizer = dayjsLocalizer(dayjs);
  const [isModalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      start: dayjs("2025-03-09T12:00:00").toDate(),
      end: dayjs("2025-03-09T12:00:00").toDate(),
      title: "Prueba Uno",
    },
    {
      start: dayjs("2025-03-09T13:00:00").toDate(),
      end: dayjs("2025-03-09T14:00:00").toDate(),
      title: "Prueba 1.1",
    },
    {
      start: dayjs("2025-03-09T14:00:00").toDate(),
      end: dayjs("2025-03-09T15:00:00").toDate(),
      title: "Prueba 1.2",
    },
    {
      start: dayjs("2025-03-09T16:00:00").toDate(),
      end: dayjs("2025-03-09T17:00:00").toDate(),
      title: "Prueba 1.3",
    },
    {
      start: dayjs("2025-03-09T09:00:00").toDate(),
      end: dayjs("2025-03-09T10:00:00").toDate(),
      title: "Prueba 1.4",
    },
    {
      start: dayjs("2025-03-15T12:00:00").toDate(),
      end: dayjs("2025-03-16T12:00:00").toDate(),
      title: "Prueba Dos",
    },
    {
      start: dayjs("2025-03-27T12:00:00").toDate(),
      end: dayjs("2025-03-27T12:00:00").toDate(),
      title: "Prueba Tres",
    },
  ]);

  /*Crear useEffect para actualizar el calendario una vez creado el nuevo evento*/


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
      />
      
    </div>
  )
}

export default App
