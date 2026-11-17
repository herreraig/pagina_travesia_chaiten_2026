# Travesía Chaitén 2026

## Abrir y publicar

1. Extrae el ZIP y copia **su contenido** dentro de tu repositorio `pagina_travesia_chaiten_2026`. `index.html` va al lado de tu `README.md`. Acepta reemplazar los archivos de la versión anterior y copia también todo lo que trae `assets/`.
2. Abre `index.html` en el navegador. Baja hasta **La obra**, elige una faena y vuelve a abrir el índice con la flecha cuando se contraiga.
3. Cuando estés conforme, en GitHub Desktop haz **Commit to main → Push origin**. Revisa la versión publicada en **Settings → Pages → Visit site**. Los mapas y la tipografía web necesitan conexión.

## Editar la página en VS Code

- **Portada.** El título está en `index.html`. Para usar otra imagen de fondo, cambia la ruta de `.portada::before` en `styles.css`. La imagen provisoria actual está en `assets/portada-provisoria.svg` y su opacidad es `.6`.
- **Las travesías por América.** En `index.html` está el mapa histórico incrustado desde el enlace que usa Casiopea. Su selector de años forma parte de esa visualización.
- **El lugar.** Reemplaza los seis `<img>` dentro de `.galeria-grupo` en `index.html`. El carrusel repite esa lista automáticamente. Para pausarlo, toca directamente la tira de imágenes o sitúa el puntero sobre ella.
- **La obra.** Cada enlace `data-enlace-faena` apunta a un bloque `data-faena` con el mismo identificador y en el mismo orden. Si cambias un nombre, edítalo en el índice, en el título de la faena y en los enlaces de la faena anterior y siguiente. Conserva el identificador si quieres que sigan funcionando los enlaces compartidos. Por ejemplo, añade `#faena-montaje` al final de la URL para abrir Montaje.
- **Créditos y derechos.** Actualiza el pie al incorporar registros reales. Completa el nombre de cada autor, las fuentes y las condiciones de uso que correspondan.

Guarda con **Ctrl+S** y recarga el navegador.

## Copiables para los registros reales

### Foto o croquis

Copia el archivo a `assets/` y reemplaza uno de los bloques `<figure>` dentro de una faena o de El lugar. Usa una descripción breve en `alt` y el crédito en el pie.

```html
<figure>
  <img src="assets/croquis-chaiten.jpg" alt="Describe lo que el croquis permite ver" loading="lazy">
  <figcaption>Croquis del lugar · Nombre de quien hizo el registro</figcaption>
</figure>
```

### Video, audio y GIF

En `index.html`, busca el título del registro y reemplaza `<p>Registro por incorporar.</p>` por el bloque que corresponda. Completa las rutas con los nombres de tus archivos. Añade la transcripción debajo del audio y, si hay diálogo en un video, incorpora subtítulos.

**Video**

```html
<video controls preload="metadata">
  <source src="assets/registro-obra.mp4" type="video/mp4">
  <a href="assets/registro-obra.mp4">Descargar video</a>
</video>
```

**Audio**

```html
<audio controls preload="metadata">
  <source src="assets/testimonio.mp3" type="audio/mpeg">
  <a href="assets/testimonio.mp3">Descargar audio</a>
</audio>
```

**GIF**

```html
<img src="assets/secuencia-montaje.gif" alt="Describe los pasos de la secuencia" loading="lazy">
```

## Referencias de la propuesta

La paleta clara y las familias tipográficas provienen de [Stella Nova en Casiopea](https://www.wiki.ead.pucv.cl/Stella_Nova/Dise%C3%B1o_CSS_para_Casiopea). El criterio editorial de la bajada serif y los pies de imagen toma *Entre ojo y mano* como referencia. Los seis SVG de ejemplo vienen del proyecto anterior. El marcador del [mapa de Chaitén](https://www.openstreetmap.org/way/225127603) se sitúa en la plaza de la ciudad. Reemplaza el texto y las imágenes provisorias con los registros del taller a medida que lleguen.
