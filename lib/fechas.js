export const ZONA = 'Europe/Madrid'
const hora = new Intl.DateTimeFormat('es-ES', {
  timeZone: ZONA,
  hour: '2-digit',
  minute: '2-digit'
})
const diaLargo = new Intl.DateTimeFormat('es-ES', {
  timeZone: ZONA,
  weekday: 'long',
  day: 'numeric'
})
export function formatoHora(iso) {
  return hora.format(new Date(iso))
}
export function formatoDia(iso) {
  return diaLargo.format(new Date(iso))
}
export function claveDia(iso) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: ZONA,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(iso))
}
export function estadoEvento(evento, ahora) {
  const inicio = new Date(evento.inicio).getTime()
  const fin = new Date(evento.fin ?? evento.inicio).getTime()
  const t = ahora.getTime()
  if (t < inicio) return 'proximo'
  if (t <= fin) return 'ahora'
  return 'pasado'
}
export function proximoEvento(eventos, ahora) {
  return (
    eventos
      .filter((e) => e.categoria === 'f1')
      .sort((a, b) => new Date(a.inicio) - new Date(b.inicio))
      .find((e) => estadoEvento(e, ahora) !== 'pasado') ?? null
  )
}
export function agruparPorDia(eventos) {
  const mapa = new Map()
  for (const evento of [...eventos].sort(
    (a, b) => new Date(a.inicio) - new Date(b.inicio)
  )) {
    const clave = claveDia(evento.inicio)
    if (!mapa.has(clave)) {
      mapa.set(clave, {
        clave,
        etiqueta: formatoDia(evento.inicio),
        eventos: []
      })
    }
    mapa.get(clave).eventos.push(evento)
  }
  return [...mapa.values()]
}
export function cuentaAtras(milisegundos) {
  const total = Math.max(0, Math.floor(milisegundos / 1000))
  return {
    dias: Math.floor(total / 86400),
    horas: Math.floor((total % 86400) / 3600),
    minutos: Math.floor((total % 3600) / 60),
    segundos: total % 60
  }
}
