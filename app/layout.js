import { Archivo, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

const titulos = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--fuente-titulos',
  display: 'swap'
})

const texto = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--fuente-texto',
  display: 'swap'
})

export const metadata = {
  title: 'GP de España 2026 · Qué hacer en Madrid',
  description:
    'Horarios del Madring y todos los planes gratis por Madrid durante el fin de semana del Gran Premio.',
  manifest: '/manifest.json'
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F1EFE8' },
    { media: '(prefers-color-scheme: dark)', color: '#0E1526' }
  ]
}
const scriptTema = `
(function () {
  try {
    var guardado = localStorage.getItem('tema');
    var prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.tema = guardado || (prefiereOscuro ? 'Modo oscuro' : 'Modo claro');
  } catch (e) {
    document.documentElement.dataset.tema = 'Modo claro';
  }
})();
`

export default function RootLayout({ children }) {
  return (
    <html
      lang='es'
      suppressHydrationWarning
      className={`${titulos.variable} ${texto.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
