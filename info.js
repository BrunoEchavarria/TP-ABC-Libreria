const queryString = document.location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const libroBuscado = dbLibros.find( libro => libro.id == id)

const contenedor = document.querySelector(".container_info")

contenedor.innerHTML = `<div class="column">
<h2>${libroBuscado.name}</h2>
<img style="width: 350px; height: 350px;" src="${libroBuscado.image}" alt="Imagen del libro">
</div>
<div class="column">
<h2>Información</h2>
<p>${libroBuscado.informacion}</p>
<a href="./index.html" class="btn btn-primary">Volver al inicio</a>
</div>`