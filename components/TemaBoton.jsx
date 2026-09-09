'use client'

import { useEffect, useState } from 'react'

export default function TemaBoton() {
  const [tema, setTema] = useState(null)
  useEffect(() => {
    setTema(document.documentElement.dataset.tema ?? 'claro')
  }, [])

  function alternar() {
    const nuevo = tema === 'oscuro' ? 'claro' : 'oscuro'
    document.documentElement.dataset.tema = nuevo
    localStorage.setItem('tema', nuevo)
    setTema(nuevo)
  }
  if (!tema) return <span className='tema-boton' aria-hidden='true' />

  const oscuro = tema === 'oscuro'

  return (
    <button
      type='button'
      className='tema-boton'
      onClick={alternar}
      aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <svg viewBox='0 0 24 24' width='18' height='18' aria-hidden='true'>
        {oscuro ? (
          <>
            <circle cx='12' cy='12' r='4.5' fill='currentColor' />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((g) => (
              <rect
                key={g}
                x='11.2'
                y='1.5'
                width='1.6'
                height='3.4'
                rx='0.8'
                fill='currentColor'
                transform={`rotate(${g} 12 12)`}
              />
            ))}
          </>
        ) : (
          <path
            d='M20 14.2A8.2 8.2 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2Z'
            fill='currentColor'
          />
        )}
      </svg>
      <span>{oscuro ? 'Modo claro' : 'Modo oscuro'}</span>
    </button>
  )
}
