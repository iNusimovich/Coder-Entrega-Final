// METAMASK 2.0

        window.userWalletAddress = null
        const loginButton = document.getElementById('loginButton')
        const userWallet = document.getElementById('userWallet')

        function toggleButton() {
            if (!window.ethereum) {
                loginButton.innerText = 'INSTALAR METAMASK'
                loginButton.classList.remove('bg-grey-500', 'text-white')
                loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
                return false
            }

            loginButton.addEventListener('click', loginWithMetaMask)
        }

        async function loginWithMetaMask() {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                .catch((e) => {
                    console.error(e.message)
                    return
                })
            if (!accounts) { return }

            window.userWalletAddress = accounts[0]
            userWallet.innerText = window.userWalletAddress
            loginButton.innerText = 'CERRAR SESION DE METAMASK'

            loginButton.removeEventListener('click', loginWithMetaMask)
            setTimeout(() => {
                loginButton.addEventListener('click', signOutOfMetaMask)
            }, 200)
        }

        function signOutOfMetaMask() {
            window.userWalletAddress = null
            userWallet.innerText = ''
            loginButton.innerText = 'SIGN IN WITH METAMASK'

            loginButton.removeEventListener('click', signOutOfMetaMask)
            setTimeout(() => {
                loginButton.addEventListener('click', loginWithMetaMask)
            }, 200)
        }

        window.addEventListener('DOMContentLoaded', () => {
            toggleButton()
        });




// header

let navbar = document.querySelector('.menu');
document.querySelector('#bar').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
} 

//-----------------------------------------

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

//----------------------------------------///






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

// ------------------  CARRITO ------------//

// VARIABLES 

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

// cart
let cart = [];


// getting the products
class Products{
    async getProducts() {
        try {
            let result = await fetch("products.json");
            let data = await result.json();

            let products = data.items;
            products = products.map(item => {
                const {title,price} = item.fields;
                const {id} = item.sys
                const image = item.fields.image.fields.file.url;
                return {title,price,id,image}
            })
            return products
        }   catch (error) {
            console.log(error);
        }
    }
}

//display products
class UI{
    displayProducts(products){
        let result = '';
        products.forEach(products => {
            result += `
            <!-- single product -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src= ${products.image}
                          alt="product"
                          class="product-img"
                        />
                        <button class="bag-btn" data-id= ${products.id}>
                          <i class="fas fa-shopping-cart"></i>
                          add to bag
                        </button>
                      </div>
                      <h3>${products.title}</h3>
                      <h4>${products.price}</h4>
                    </article>
                    <!-- end of single product -->
            `
        });
        productsDOM.innerHTML = result;
    }
}

//local storage
class Storage{

}

document.addEventListener("DOMContentLoaded", () =>{
    const ui = new UI();
    const products = new Products();

    // get all products
    products.getProducts().then(products => ui.displayProducts(products));
});
