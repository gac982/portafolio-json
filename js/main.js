// variables
const baseDatos = [
    {
        nombre: 'Gafas el tuerto',
        anyo: 2021,
        categoria: 'Web',
        imagen: 'img/card-4.jpg',
        descripcion: 'Una e-commerce para la venta de monoculos baratos.'
    },
    {
        nombre: 'Ropa sucia',
        anyo: 2019,
        categoria: 'APP',
        imagen: 'img/card-4.jpg',
        descripcion: 'Red social de solteros que viven solos.'
    },
    {
        nombre: 'Veintidos',
        anyo: 2017,
        categoria: 'Web',
        imagen: 'img/card-4.jpg',
        descripcion: 'Red social de solteros que viven solos.'
    },
    {
        nombre: 'Azules del mar',
        anyo: 2016,
        categoria: 'Web',
        imagen: 'img/card-4.jpg',
        descripcion: 'Red social de solteros que viven solos.'
    },
    {
        nombre: 'Alfabetarte',
        anyo: 2015,
        categoria: 'APP',
        imagen: 'img/card-4.jpg',
        descripcion: 'Red social de solteros que viven solos.'
    },
];

const textoTodos = 'Todos';
const buscador = document.querySelector('#buscador');
const btnFiltro = document.querySelector('#filtros');
const trabajos = document.querySelector('#trabajos');
const plantillaBtnFiltro = document.querySelector('#plantillaBtnFiltro').content.firstElementChild;
const plantillaTrabajos = document.querySelector('#plantillaTrabajos').content.firstElementChild;
let baseDatosFiltrada = [];

// funciones
function buscar() {
  baseDatosFiltrada = baseDatos.filter(function (trabajo) {
    return trabajo.nombre.toUpperCase().includes(buscador.value.toUpperCase()) || buscador.value === '';
    });
    render();
};

function filtrarCategoria (nombre) {
    // filtramos
    if (nombre !== textoTodos) {
        baseDatosFiltrada = baseDatos.filter(function (trabajo) {
            return trabajo.categoria === nombre;
        });
    } else {
        baseDatosFiltrada = baseDatos;
    }
    render();
};

function render() {
    // dibujamos los botones
    let categorias = [];
    baseDatos.forEach(function (elemento) {
        if(!categorias.includes(elemento.categoria)) {
            categorias = categorias.concat(elemento.categoria);
        }
    });
    // se ingresa el boton de todod
    categorias = categorias.concat(textoTodos);
    // lo colocamos en orden alfabetico
    categoriasInversa = categorias.reverse();

    // vaciamos los botones previos
    btnFiltro.innerHTML = '';

    // generamos los botones
    categoriasInversa.forEach(function (nombre) {
        const nuevoBtn = plantillaBtnFiltro.cloneNode(true);
        nuevoBtn.textContent = nombre;
        nuevoBtn.addEventListener('click', function () {
            filtrarCategoria(nombre);
        });
        btnFiltro.appendChild(nuevoBtn);
    });

    trabajos.innerHTML = '';
    // dibujamos los trabajos
    baseDatosFiltrada.forEach(function(trabajo) {
        const miTrabajo = plantillaTrabajos.cloneNode(true);
        // imprimimos el titulo
        const miTitulo = miTrabajo.querySelector('.trabajo__titulo');
        miTitulo.textContent = trabajo.nombre;
        // imprimimos la imagen
        const miImagen = miTrabajo.querySelector('.trabajo__imagen');
        miImagen.setAttribute('alt', trabajo.nombre);
        miImagen.setAttribute('src', trabajo.imagen);
        // imprimimos la categoria
        const miCategoria = miTrabajo.querySelector('.trabajo__categoria');
        miCategoria.textContent = trabajo.categoria;
        // imprimimos la descripcion del trabajo
        const miDescripcion = miTrabajo.querySelector('.trabajo__descripcion');
        miDescripcion.textContent = trabajo.descripcion;
        // imprmimos la carta completa
        trabajos.appendChild(miTrabajo);
    })
}

// eventos
buscador.addEventListener('input', buscar);



// inicio
buscar();
