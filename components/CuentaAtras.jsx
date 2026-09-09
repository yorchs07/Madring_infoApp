'use client'
import { useEffect, useState } from 'react'
import {
  cuentaAtras,
  estadoEvento,
  formatoDia,
  formatoHora,
  proximoEvento
} from '@/lib/fechas'
export default function CuentaAtras({ eventos }) {
  const [ahora, setAhora] = useState(null)
  useEffect(() => {
    setAhora(new Date())
    const id = setInterval(() => setAhora(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  if (!ahora) {
    return <section className='portada' aria-busy='true' />
  }
  const siguiente = proximoEvento(eventos, ahora)
  if (!siguiente) {
    return (
      <section className='portada'>
        <p className='portada-etiqueta'>Se acabó el fin de semana</p>
        <p className='portada-titulo'>Hasta 2027</p>
      </section>
    )
  }
  const enDirecto = estadoEvento(siguiente, ahora) === 'ahora'
  const { dias, horas, minutos, segundos } = cuentaAtras(
    new Date(siguiente.inicio) - ahora
  )
  return (
    <section className={`portada ${enDirecto ? 'portada-directo' : ''}`}>
      <p className='portada-etiqueta'>
        {enDirecto ? 'Ahora mismo en el Madring' : 'Siguiente en el Madring'}
      </p>
      <h2 className='portada-titulo'>{siguiente.titulo}</h2>
      <p className='portada-cuando'>
        {formatoDia(siguiente.inicio)} a las {formatoHora(siguiente.inicio)}
      </p>
      {enDirecto ? (
        <p className='portada-reloj'>En pista</p>
      ) : (
        <p className='portada-reloj'>
          {dias > 0 && <span>{dias}d </span>}
          <span>{String(horas).padStart(2, '0')}h </span>
          <span>{String(minutos).padStart(2, '0')}m </span>
          <span>{String(segundos).padStart(2, '0')}s</span>
        </p>
      )}
    </section>
  )
}
