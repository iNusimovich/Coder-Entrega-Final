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

//------------------------------------------//

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

//----------------------------------------//

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
const cartContent = document.querySelector('.products-center');



















  // Si el precio tiene muchas comas 
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total-price")[0].innerText = "$" + total;