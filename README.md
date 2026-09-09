GP de España 2026 · Qué hacer en Madrid

Agenda web del fin de semana del Gran Premio de España en el circuito Madring: horarios de todas las sesiones de F1, F2 y F3, planes gratuitos repartidos por la ciudad y la Comunidad, y la logística para llegar al circuito.

En producción: https://gp-madrid-2026.vercel.app

La Fórmula 1 volvió a Madrid en septiembre de 2026 tras 45 años. La información del fin de semana estaba dispersa entre la web oficial, notas de prensa de los ayuntamientos y artículos sueltos. Esto lo reúne en una sola pantalla pensada para consultarse desde el móvil, en la calle y con una mano.

Qué hace
Cuenta atrás a la siguiente sesión, que cambia a modo "en directo" mientras se está disputando.
Agenda agrupada por día con las sesiones del circuito y los eventos de ciudad en una única línea temporal.
Filtros por zona (circuito, centro de Madrid, Comunidad) y por eventos gratuitos.
Modo claro y oscuro, con la preferencia guardada entre visitas.
Instalable como PWA en la pantalla de inicio.
Los eventos cuyo horario no está confirmado oficialmente se marcan como tales en lugar de darse por buenos.
Decisiones técnicas

Sin backend ni base de datos. El contenido son unos treinta eventos que no cambian durante el fin de semana. Vive en un único JSON que se lee en tiempo de compilación, así que la página se sirve como HTML estático. Montar una API para esto habría añadido superficie de fallo sin ganar nada.

Fechas con desfase horario explícito. Cada evento se almacena como 2026-09-12T16:00:00+02:00. El instante queda definido de forma absoluta y el formateo se hace siempre con Intl.DateTimeFormat fijado a Europe/Madrid, de modo que un usuario fuera de la península ve la hora peninsular correcta y no la suya.

Frontera servidor/cliente ajustada. La página es un Server Component. Solo la cuenta atrás y los filtros son Client Components, porque son lo único que necesita temporizadores y estado.

Tema sin parpadeo. Un script inline en el <head> aplica el tema guardado antes del primer pintado, lo que evita el fogonazo blanco al recargar en modo oscuro. El desajuste de hidratación que eso provoca se acota con suppressHydrationWarning en el nodo raíz.

Gráficos propios en SVG. El monoplaza y el icono son dibujos vectoriales hechos para el proyecto. Ni fotografías ni marcas de escuderías: nada con derechos de terceros.

Stack

Next.js (App Router) · React · CSS con variables personalizadas · desplegado en Vercel.

Sin librería de componentes ni framework de estilos. Todo el sistema visual son unas veinte variables CSS, y el cambio de tema consiste en reasignarlas.

Sobre los datos

Recopilados de la web oficial del circuito, comunicados de la Comunidad de Madrid y prensa deportiva. Los horarios oficiales mandan siempre: comprueba madring.com antes de moverte.

Proyecto personal sin relación con la Fórmula 1, el circuito Madring ni ninguna escudería.
