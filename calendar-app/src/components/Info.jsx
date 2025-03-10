import React from 'react'
import "./InfoStyle.css"

export const Info = ({isOpen, closeModal, list}) => {

  if(!isOpen) return null;

  return (
    <div className="list-info-box modal-overlay">
      <div className="modal-content">
      <h2>Detalles del Trabajo</h2>
      <div className="info-grid">
          <div className="info-item">
              <span>Equipo:</span>
              <span>{list.title || 'No especificado'}</span>
          </div>
          <div className="info-item">
              <span>Máquina:</span>
              <span>{list.maquina || 'No especificado'}</span>
          </div>
          <div className="info-item">
              <span>Empresa Solicitante:</span>
              <span>{list.empresaSolicitante || 'No especificado'}</span>
          </div>
          <div className="info-item">
              <span>Ubicación:</span>
              <span>{list.ubicacion || 'No especificado'}</span>
          </div>
          <div className="info-item">
              <span>Fecha y Hora de Llegada:</span>
              <span>
                  {list.fechaHoraLlegada
                      ? moment(list.fechaHoraLlegada).format('LLL')
                      : 'No especificado'}
              </span>
          </div>
          <div className="info-item">
              <span>Fecha y Hora de Salida:</span>
              <span>
                  {list.fechaHoraSalida
                      ? moment(list.fechaHoraSalida).format('LLL')
                      : 'No especificado'}
              </span>
          </div>
          <div className="botones-formulario mui-botones"> {/* Clase mui-botones para estilos de botones MUI */}
            <button type="submit" className="mui-button mui-button-primary" onClick={closeModal}>Cerrar</button> 
          </div>
      </div>
      </div>
    </div>
  )
}
