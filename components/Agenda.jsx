'use client'

import { useMemo, useState } from 'react'
import { agruparPorDia, estadoEvento, formatoHora } from '@/lib/fechas'

const FILTROS = [
  { id: 'todo', etiqueta: 'Todo' },
  { id: 'circuito', etiqueta: 'En el circuito' },
  { id: 'centro', etiqueta: 'Centro de Madrid' },
  { id: 'comunidad', etiqueta: 'Comunidad' },
  { id: 'gratis', etiqueta: 'Gratis' }
]

export default function Agenda({ eventos }) {
  const [filtro, setFiltro] = useState('todo')
  const dias = useMemo(() => {
    const visibles = eventos.filter((evento) => {
      if (filtro === 'todo') return true
      if (filtro === 'gratis') return evento.gratis
      return evento.zona === filtro
    })
    return agruparPorDia(visibles)
  }, [eventos, filtro])

  return (
    <>
      <div className='filtros' role='group' aria-label='Filtrar planes'>
        {FILTROS.map((f) => (
          <button
            key={f.id}
            type='button'
            className='filtro'
            aria-pressed={filtro === f.id}
            onClick={() => setFiltro(f.id)}
          >
            {f.etiqueta}
          </button>
        ))}
      </div>

      {dias.length === 0 && (
        <p className='vacio'>
          No hay planes con ese filtro. Prueba con &laquo;Todo&raquo;.
        </p>
      )}

      {dias.map((dia) => (
        <section key={dia.clave} className='dia'>
          <h2 className='dia-titulo'>{dia.etiqueta}</h2>
          <ol className='lista'>
            {dia.eventos.map((evento) => (
              <Fila key={evento.id} evento={evento} />
            ))}
          </ol>
        </section>
      ))}
    </>
  )
}

function Fila({ evento }) {
  const estado = estadoEvento(evento, new Date())

  return (
    <li className={`fila fila-${estado}`} data-categoria={evento.categoria}>
      <time className='fila-hora' dateTime={evento.inicio}>
        {formatoHora(evento.inicio)}
      </time>
      <div className='fila-cuerpo'>
        <h3 className='fila-titulo'>{evento.titulo}</h3>
        <p className='fila-lugar'>
          {evento.lugar}
          {evento.gratis && <span className='marca'>gratis</span>}
          {!evento.confirmado && (
            <span className='marca marca-duda'>por confirmar</span>
          )}
        </p>
        {evento.nota && <p className='fila-nota'>{evento.nota}</p>}
      </div>
    </li>
  )
}
