/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Chevrolet Corvette",
        imagen: "https://blogger.googleusercontent.com/img/a/AVvXsEgBADWkT8jBbnFiSJVPUxkAFW40-FX932lmRL7ndg3JI3IWDBMNLxIXseuau0TV0DuTSteEFsgOHReFYjWDAWQwRXFl7rc_aeuUEN1Pr_nDfr3c3OJm0-if1QGlmopstX6rDSxpWVi0Ad7mYu78YS_sqlxVbCplEKbd91n31SqM3NE2GopyXhXb2ndWWQ=s16000",
        descripcion: "",
    },
    {
        id: 2,
        nombre: "Lamborghini Aventador",
        imagen: "https://i.pinimg.com/736x/47/19/73/471973dda465cc409af2e6546fc6a57b.jpg",
        descripcion: "",
    },
    {
        id: 3,
        nombre: "Ferrari 488 Spider",
        imagen: "https://img.remediosdigitales.com/2b411c/ferrari-f8-spider_/1366_2000.jpg",
        descripcion: "",
    },
    {
        id: 4,
        nombre: "Pagani Huayra BC",
        imagen: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/png/2020/05/497232.png",
        descripcion: "",
    },
    {
        id: 5,
        nombre: "Porsche 911 GT3 R",
        imagen: "https://img.incar.tw/2022/08/1659324086-c9607ed012f8e0107eba4cf9fccd4ecc-1200x675.jpg",
        descripcion: "",
    },
    {
        id: 6,
        nombre: "Bugatti Chiron Super Sport",
        imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_1e4926312d8f46ff8d3895a728b9a0bd.jpg",
        descripcion: "",
    },
    {
        id: 7,
        nombre: "McLaren 720S GT3X",
        imagen: "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/55323/mclaren-p1-jenson-button.jpg",
        descripcion: "",
    },
    {
        id: 8,
        nombre: "Audi R8 ",
        imagen: "https://tork.news/__export/1670540690056/sites/tork/img/2022/12/08/2023-audi-r8-v10-gt-rwd.jpg_1607061950.jpg",
        descripcion: "",
    }
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")


/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `<article class="card">
    <img src="${carta.imagen}" alt="Imagen del proyecto">
    <div class="info">
      <h2>${carta.nombre}</h2>
      <p>${carta.descripcion}</p>
    </div>
</article>`
)



