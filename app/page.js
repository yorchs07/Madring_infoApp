import datos from '@/data/eventos.json'
import Agenda from '@/components/Agenda'
import CuentaAtras from '@/components/CuentaAtras'
import CocheF1 from '@/components/CocheF1'
import TemaBoton from '@/components/TemaBoton'

export default function Home() {
  const { gp, eventos, logistica } = datos

  return (
    <>
      <div className='piano piano-izq' aria-hidden='true' />
      <div className='piano piano-der' aria-hidden='true' />

      <main className='pagina'>
        <header className='cabecera'>
          <div className='cabecera-fila'>
            <p className='cabecera-lugar'>
              {gp.circuito} &middot; {gp.ciudad}
            </p>
            <TemaBoton />
          </div>
          <h1 className='cabecera-titulo'>{gp.nombre}</h1>
          <p className='cabecera-sub'>
            Todo lo que pasa dentro y fuera del circuito, del 11 al 13 de
            septiembre. Horarios en hora peninsular.
          </p>
          <CocheF1 className='coche' />
        </header>

        <CuentaAtras eventos={eventos} />
        <Agenda eventos={eventos} />

        <section className='dia'>
          <h2 className='dia-titulo'>Antes de salir de casa</h2>
          <ul className='consejos'>
            {logistica.map((item) => (
              <li key={item.id}>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className='pie'>
          Hecho en Madrid para el fin de semana del Gran Premio. Comprueba los
          horarios oficiales en madring.com antes de moverte.
        </footer>
      </main>
    </>
  )
}
