// header
let navbar = document.querySelector('.menu');
document.querySelector('#bar').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
// filter
let filterBtn = document.querySelectorAll('.filter-buttons .filter')
let filterItem = document.querySelectorAll('.collections .box-card .collect')

filterBtn.forEach(button => {

    button.onclick = () => {
        filterBtn.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        let dataFilter = button.getAttribute('data-filter');

        filterItem.forEach(item => {

            item.classList.remove('active');
            item.classList.add('hide');

            if (item.getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                item.classList.remove('hide');
                item.classList.add('active');
            }
        })
    }
})

var swiper = new Swiper(".card-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".creator-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});


// FAQ
let faq = document.querySelectorAll('.box-faq .box');
faq.forEach(box => {
    box.onclick = () => {
        faq.forEach(unbox => {
            unbox.classList.remove('active');
        })
        box.classList.add('active');
    }
})

//--------------------------------------//

// SALUDO USUARIO

function greet() {
    console.log("Hola " + name + " :)");
}

let name = prompt("Ingresa tu nombre: ");
greet();


let nft1 = 1840
let nft2 = 2000
let nft3 = 3970
let nft4 = 12050

const nfts = [
  {nombre: "Yellow Stone", precio: 0.007},
  {nombre: "The Dome", precio: 0.008},
  {nombre: "Fusion", precio: 0.0043},
  {nombre: "Bullet", precio: 0.005},
  {nombre: "Reality", precio: 0.04},
  {nombre: "An Angel", precio: 0.008},
  {nombre: "Tina in the park", precio: 0.0034},
  {nombre: "KNWT", precio: 0.0067},
  {nombre: "Loop Loop", precio: 0.003},
]

const nombres = nfts.map((el) => el.nombre)
console.log("Esta es nuestra colección actual: " + nombres);



let cantNft = prompt("Cuantos NTFs querrías ver de nuestra colección " + name + "? (máximo 9)");

for (let index = 1; index <= cantNft; index++) { 
  if (index >= 10) { 
    break; } alert(`NFT - ${index}` + " (foto preview del NFT)");
}

//-----------------------------------------------------//

//SALUDO ARTISTA

function saludo() {
  console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad}, soy ${this.profesión} y soy el creador de ${this.nft}. Gracias por estar interesado en mi NFT, espero que lo disfrute!`)
}


const artistas = [
  {id: 1, nombre: "Joaquín Gurrete", edad: 27, profesión: "Diseñador Gráfico", nft: "Yellow Stone"},
  {id: 2, nombre: "Manuel Ortega", edad: 21, profesión: "Artista Abstracto", nft: "The Dome"},
  {id: 3, nombre: "María Ana Hilphemburg", edad: 32, profesión: "Diseñadora de Interiores", nft: "Fusion"},
  {id: 4, nombre: "Gustavo Lubjisich", edad: 45, profesión: "Diseñador Industrial", nft: "Bullet"},
  {id: 5, nombre: "Ludmila Echeverría", edad: 29, profesión: "Contadora Pública", nft: "Reality"},
  {id: 6, nombre: "Genaro Gutierrez", edad: 38, profesión: "Ingeniero Petrolero", nft: "An Angel"},
  {id: 7, nombre: "Candelaria Valvanera", edad: 19, profesión: "Artista", nft: "Tina in the park"},
  {id: 8, nombre: "Ignacio Kvlevev", edad: 25, profesión: "Desarrollador Web", nft: "KNWT"},
  {id: 9, nombre: "Juan Pablo Carlonte", edad: 24, profesión: "Marketing DigitalNacho", nft: "Loop Loop"},
]


let ingresarId = parseInt(prompt("Sobre qué artista de nuestros NFTs deseas conocer más?  (Opciones entre 1 y 9)"));
const buscador = artistas.find( a => a.id === ingresarId)

buscador.saludo = saludo;

if (ingresarId == 1) { 
  console.log(buscador.saludo());
} else if (ingresarId == 2) { 
  console.log(buscador.saludo());
} else if (ingresarId == 3) { 
  console.log(buscador.saludo());
} else if (ingresarId == 4) { 
  console.log(buscador.saludo());
} else if (ingresarId == 5) { 
  console.log(buscador.saludo());
} else if (ingresarId == 6) { 
  console.log(buscador.saludo());
} else if (ingresarId == 7) { 
  console.log(buscador.saludo());
} else if (ingresarId == 8) { 
  console.log(buscador.saludo());
} else if (ingresarId == 9) { 
  console.log(buscador.saludo());
} else { 
  console.log("ERROR! Ingresa un número entre el 1 y el 9");
} 



//-----------------------------------------------------------------//



let wallet = parseFloat(prompt("INGRESAR CUANTO ETHERIUM DISPONES (Nuestros NFTs rondan entre los $1.000 y los $15.000"));

if (wallet >= 12050) { 
  console.log("Dispones de lo suficiente para comprar: \n-NFT 1 a $1840\n-NFT 2 a $2000\n-NFT 3 a $3970\n-NFT 4 a $12050");
} else if (wallet < nft4) { 
  console.log("Dispones de lo suficiente para comprar: \n-NFT 1 a $1840\n-NFT 2 a $2000\n-NFT 3 a $3970");
} else if (wallet < nft3) { 
  console.log("Dispones de lo suficiente para comprar: \n-NFT 1 a $1840\n-NFT 2 a $2000");
} else if (wallet < nft2) { 
  console.log("Dispones de lo suficiente para comprar: \n-NFT 1 a $1840");
} else if (wallet < nft1) {
  console.log("LO SENTIMOS, NO HAY NFTs DISPONIBLES EN ESTOS VALORES!");
} 


let venta = parseFloat(prompt("EN CUAL ESTARÍAS INTERESADO?"));

if (venta == "") { 
  console.log("ERROR!");
} else if (venta == 1) { 
  console.log(`Excelente elección ${name}, has elegido el NFT 1`);
} else if (venta == 2) { 
  console.log(`Excelente elección ${name}, has elegido el NFT 2`);
} else if (venta == 3) { 
  console.log(`Excelente elección ${name}, has elegido el NFT 3`);
} else if (venta == 4) { 
  console.log(`Excelente elección ${name}, has elegido el NFT 4`);
} 



//---------------------------------------


const NFT = [ "Yellow Stone", "The Dome", "Fusion", "Bullet", "Reality", "An Angel", "Tina in the park", "KNWT", "Loop Loop", ]; 

let ventaNFT = (prompt("Quieres empezar a vender tu primer NFT? (y/n)"));

if (ventaNFT == "") { 
  console.log("ERROR! Ingresa y ó n");
} else if (ventaNFT == "y") { 
  const nuevoNFT = NFT.push(prompt( 'Ponle un nombre a tu NFT antes de subirlo al Mercado:' ));
} else if (ventaNFT == "n") { 
  console.log("No tienes porque vender tu NFT ahora, tranquilo, te mostramos los que ya están a la venta hasta que decidas publicar el tuyo: ");
} 
console.log( NFT );