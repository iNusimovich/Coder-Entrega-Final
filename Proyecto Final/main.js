function greet() {
    console.log("Hola " + name + " :)");
}

let name = prompt("Ingresa tu nombre: ");
greet();


let nft1 = 1840
let nft2 = 2000
let nft3 = 3970
let nft4 = 12050


let cantNft = prompt("Cuantos NTFs querrías ver de nuestra colección " + name + "? (máximo 4)");

for (let index = 1; index <= cantNft; index++) { 
  if (index >= 5) { 
    break; } alert(`NFT - ${index}` + " (foto preview del NFT)");
}




const Diseñador1 = {
  name: "Joaquín Gurrete",
  age: 27,
  job: "Diseñador Gráfico"
}
const Diseñador2 = {
  name: "Manuel Ortega",
  age: 21,
  job: "Artista Abstracto"
}
const Diseñador3 = {
  name: "María Ana Hilphemburg",
  age: 31,
  job: "Diseñadora de Interiores"
}
const Diseñador4 = {
  name: "Gustavo Lubjisich",
  age: 45,
  job: "Diseñador Industrial"
}

function saludo() {
  console.log(`Hola, mi nombre es ${this.name}, tengo ${this.age} y soy ${this.job}. Gracias por estar interesado en mi NFT, espero que lo disfrute!`)
}

Diseñador1.saludo = saludo;
Diseñador2.saludo = saludo;
Diseñador3.saludo = saludo;
Diseñador4.saludo = saludo;

let saludoArtista = (prompt("Elige el NFT que mas te interese para conocer más sobre su artista: (Opciones entre 1 y 4)"));

if (saludoArtista == "") { 
  console.log("ERROR! Ingresa un número entre el 1 y el 4");
} else if (saludoArtista == 1) { 
  console.log(Diseñador1.saludo());
} else if (saludoArtista == 2) { 
  console.log(Diseñador2.saludo());
} else if (saludoArtista == 3) { 
  console.log(Diseñador3.saludo());
} else if (saludoArtista == 4) { 
  console.log(Diseñador1.saludo());
} 






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




//---------------------------------------


const NFT = [ 'Yellow Stone', 'The Dome', 'Fusion', 'Bullet' ]; 

let ventaNFT = (prompt("Quieres empezar a vender tu primer NFT? (y/n)"));

if (ventaNFT == "") { 
  console.log("ERROR! Ingresa y ó n");
} else if (ventaNFT == "y") { 
  const nuevoNFT = NFT.push(prompt( 'Ponle un nombre a tu NFT antes de subirlo al Mercado:' ));
} else if (ventaNFT == "n") { 
  console.log("Te mostramos entonces los que ya estan subidos: ");
} 

console.log( NFT );