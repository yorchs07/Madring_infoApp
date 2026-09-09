import { ImageResponse } from 'next/og'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'GP de España 2026 en Madrid · horarios y planes'

export default async function Imagen() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#173F92',
        color: '#F7F6F1',
        padding: '72px 72px 0'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 30, opacity: 0.75, letterSpacing: 1 }}>
          MADRING · MADRID · 11–13 SEPTIEMBRE
        </div>
        <div
          style={{
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 1.02,
            marginTop: 20,
            letterSpacing: -3
          }}
        >
          GP de España 2026
        </div>
        <div style={{ fontSize: 38, opacity: 0.8, marginTop: 24 }}>
          Horarios del circuito y planes por la ciudad
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <svg width='620' height='192' viewBox='0 0 420 130' fill='#F7F6F1'>
          <rect x='4' y='94' width='66' height='9' rx='2' />
          <path
            d='M58 99 L58 90 C74 82 96 78 124 76 L152 73
                 C162 54 184 45 214 45 C232 46 246 50 258 57
                 L300 65 L344 65 L344 97 L60 100 Z'
          />
          <rect x='330' y='30' width='76' height='11' rx='2' />
          <rect x='394' y='30' width='11' height='42' rx='2' />
          <rect x='348' y='41' width='9' height='26' />
          <circle cx='120' cy='86' r='25' />
          <circle cx='120' cy='86' r='10' fill='#173F92' />
          <circle cx='314' cy='84' r='28' />
          <circle cx='314' cy='84' r='11' fill='#173F92' />
        </svg>
      </div>
      <div
        style={{
          display: 'flex',
          height: 26,
          marginLeft: -72,
          marginRight: -72
        }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 50,
              height: 26,
              background: i % 2 === 0 ? '#C1121F' : '#F7F6F1'
            }}
          />
        ))}
      </div>
    </div>,
    size
  )
}
