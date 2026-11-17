# Travesía a Chaitén 2026

## Abrir y publicar

1. Extrae el ZIP. Copia **su contenido** dentro de tu repositorio `pagina_travesia_chaiten_2026`. El archivo `index.html` va al lado de tu `README.md`.
2. Si ya instalaste la versión anterior, reemplaza `index.html`, `styles.css` y `recorrido.js`. Después puedes quitar `observacion.html`, `obra.html` y `acto.html`, porque sus tres secciones ahora están reunidas en `index.html`. Guarda antes cualquier edición tuya que quieras reincorporar.
3. Abre `index.html` en el navegador, sin instalar extensiones. Prueba el desplazamiento de la galería, las tres etapas y las faenas. El mapa y la tipografía web se cargan con internet.
4. En GitHub Desktop, haz **Commit to main → Push origin**. Si Pages ya publica desde `main`, comprueba el resultado con **Settings → Pages → Visit site**.

## Editar la bitácora

- En `index.html` están la portada, el mapa, la galería histórica, los talleres, el índice y las tres etapas. Busca los comentarios `OBSERVACIÓN`, `OBRA` y `ACTO` para llegar a cada una.
- En `styles.css` están el color, la tipografía y la distribución. En `recorrido.js` está la selección de la etapa visible.
- Para cambiar las imágenes históricas, edita la lista de `<img>` dentro de `.galeria-grupo` en `index.html`. El carrusel repite esa lista automáticamente.
- Los seis SVG de `assets/` son ejemplos del proyecto anterior. Los relatos y nombres de faenas de esta plantilla son ilustrativos. Al incorporar material real, reemplaza los pies genéricos por fecha, lugar, autoría y una frase sobre qué permite ver el registro.
- Cada faena tiene un identificador. Por ejemplo, el enlace `href="#faena-montaje"` de la sub-barra va a la sección `id="faena-montaje"`. También puedes compartir la URL publicada terminada en `#faena-montaje` para abrirla directamente.
- Guarda con **Ctrl+S** y recarga el navegador.

## Copiables para los registros reales

### Foto o croquis

Copia el archivo a `assets/` y reemplaza uno de los bloques `<figure>` dentro de la galería. Usa una descripción breve en `alt` y el crédito en el pie.

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
