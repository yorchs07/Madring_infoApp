export default function CocheF1({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox='0 0 420 130'
      role='presentation'
      aria-hidden='true'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Alerón delantero */}
      <rect x='4' y='94' width='66' height='9' rx='2' fill='currentColor' />

      {/* Cuerpo: morro, cockpit, toma de aire y pontones */}
      <path
        d='M58 99 L58 90 C74 82 96 78 124 76 L152 73
           C162 54 184 45 214 45 C232 46 246 50 258 57
           L300 65 L344 65 L344 97 L60 100 Z'
        fill='currentColor'
      />

      {/* Halo sobre el cockpit */}
      <path
        d='M150 72 C158 54 178 48 200 49'
        stroke='currentColor'
        strokeWidth='7'
        strokeLinecap='round'
      />

      {/* Alerón trasero */}
      <rect x='330' y='30' width='76' height='11' rx='2' fill='currentColor' />
      <rect x='394' y='30' width='11' height='42' rx='2' fill='currentColor' />
      <rect x='348' y='41' width='9' height='26' fill='currentColor' />

      {/* Ruedas */}
      <circle cx='120' cy='86' r='25' fill='currentColor' />
      <circle cx='120' cy='86' r='10' className='llanta' />
      <circle cx='314' cy='84' r='28' fill='currentColor' />
      <circle cx='314' cy='84' r='11' className='llanta' />
    </svg>
  )
}
