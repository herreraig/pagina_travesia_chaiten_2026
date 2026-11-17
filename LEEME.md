# Travesía Chaitén 2026

## Instalar y publicar

1. Extrae el ZIP y copia **su contenido** a tu repositorio `pagina_travesia_chaiten_2026`. Reemplaza los archivos de la versión anterior y copia también `assets/`.
2. Abre `index.html` en el navegador. La primera pantalla es la portada. Sus cuatro enlaces llevan a Inicio, Las travesías por América, Travesía 2026 y La obra. Al bajar, el menú aparece en el borde superior.
3. En La obra se leen las cinco faenas seguidas. El índice de la izquierda sigue la lectura. Pasa el mouse sobre él, usa el teclado o toca su botón para ver los títulos.
4. Para publicar, en GitHub Desktop usa **Commit to main → Push origin** y revisa **Settings → Pages → Visit site**.

## Editar

| Archivo | Qué contiene |
| --- | --- |
| `index.html` | Todos los textos, enlaces, fotos, mapas y registros. Los comentarios indican dónde empieza cada parte. |
| `styles.css` | Paleta y tipografía, portada, menú, carrusel, índice vertical y ajustes de celular. Cada bloque tiene un comentario. |
| `recorrido.js` | Cambio de imágenes, menú fijo, apertura del índice y seguimiento de la faena activa. |
| `assets/` | Imágenes provisorias para sustituir por los registros definitivos. |

Guarda con **Ctrl+S** y recarga el navegador. Para cambiar una foto de la portada, edita su ruta `src` dentro de `.diapositivas` en el HTML. Esa lista se reutiliza en el menú superior. La duración entre imágenes es `intervaloImagenes = 3800` en `recorrido.js` y el fundido está en `styles.css`.

Para editar las faenas, conserva su `id`, por ejemplo `faena-montaje`, y actualiza el texto del enlace correspondiente en `.lista-faenas`. Para agregar una faena, añade un artículo y su enlace en el mismo orden. La posición del marcador se calcula a partir de los enlaces y de la lectura.

La velocidad del carrusel está en la regla `desplazar-galeria 72s` del CSS. Para cambiar sus imágenes, edita la lista `.galeria-grupo` en el HTML.

Los mapas y las fuentes web requieren conexión. Las imágenes y los registros locales se pueden abrir desde tu computador. Las autorías se completan en los pies de imagen.

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

## Referencias

El mapa histórico se incrusta desde su [publicación original](https://herbertspencer.net/travesias-casiopea/), que usa Casiopea. La [paleta y tipografía](https://www.wiki.ead.pucv.cl/Stella_Nova/Dise%C3%B1o_CSS_para_Casiopea) pertenecen a la referencia visual Stella Nova. El texto introductorio se atribuye a e[ad] PUCV y los colaboradores de Casiopea bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). Los mapas mantienen sus créditos visibles. Las fotos definitivas deberán llevar sus autorías y condiciones de uso.
