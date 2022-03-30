import MetaMaskOnboarding from '@metamask/onboarding';

// MetaMask Log-In
const onboarding = new MetaMaskOnboarding();

const player = document.querySelector('.success-anim');

const installer = document.querySelector('.onboard')
const statusText = document.querySelector('.h1')
const statusDesc = document.querySelector('.desc')
const loader = document.querySelector('.loader')
const upArrow = document.querySelector('.up')
const confetti = document.querySelector('.confetti')

const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
}

const onClickInstallMetaMask = () => {
  onboarding.startOnboarding();
  loader.style.display = "block";
}

async function connectWallet() {
  return await ethereum.request({ method: 'eth_accounts'});
}

let connected = (accounts) => {
  statusText.innerHTML = "Conectado!"
  statusDesc.classList.add("account");
  statusDesc.innerHTML = accounts[0]
  installer.style.display = "none";
  loader.style.display = "none";
  upArrow.style.display = "none";
  confetti.style.display = "block";
  player.play();
  statusDesc.classList.add("account");
}

const MetaMaskClientCheck = () => {
  if ( !isMetaMaskInstalled() ) {
    statusText.innerText = "Necesitas installar una Wallet"
    statusDesc.innerText = "Recomendamos la Wallet de MetaMask."
    installer.innerText = "Instalar MetaMask";
    installer.onclick = onClickInstallMetaMask;
  } else {
    connectWallet().then((accounts) => {
      if(accounts && accounts[0] > 0) {
        connected(accounts)
      } else {
        statusText.innerHTML = "Conecta tu Wallet"
        statusDesc.innerHTML = "Para empezar, por favor conecta tu Wallet de MetaMask"
        installer.innerText = "Conecta MetaMask"
        upArrow.style.display = "block"
      }
    })
  }
}

installer.addEventListener("click", async () => {
  installer.style.backgroundColor = "#cccccc";
  loader.style.display = "block";

  try {
    const accounts = await ethereum.request({method: "eth_requestAccounts"})
    connected(accounts);
  } catch (error) {
    console.error(error);
  } 
})

MetaMaskClientCheck()

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

/*let filterBtn = document.querySelectorAll('.filter-buttons .filter')
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
});*/

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

// CARRITO DE COMPRAS

let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

// ABRIR CARRITO
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// CERRAR CARRITO
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// CARRITO JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready();
}

// MARKING FUNCTION
function ready() {
  //REMOVER ITEMS DEL CARRITO
  let removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
    }

  // Cantidad de Cambios
  let quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i]
    input.addEventListener("change", quantityChanged)
  }

  // Agregar al Carrito
  let addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // Buy Button Work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

// Buy Button
function buyButtonClicked() {
  alert("Your order is placed")
  let cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}

// Remove Items from Cart
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

// Quantity Cambiados
function quantityChanged(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

// Agregar al Carrito
function addCartClicked(event) {
  let button = event.target;
  let shopProducts = button.parentElement;
  let title = shopProducts.getElementsByClassName("size2 bold")[0].innerText;
  let price = shopProducts.getElementsByClassName("price size2 bold")[0].innerText;
  let productImg = shopProducts.getElementsByClassName("img-cart")[0].src;
  addProductToCart(title, price, productImg);
  updateTotal();
}

function addProductToCart(title, price, productImg) {
  let cartShopBox = document.createElement("div");
  cartShopBox.classList.add("box-cart");
  let cartItems = document.getElementsByClassName("cart-content")[0];
  let cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already add this item to cart");
      return;    
    }  
  }

let cartBoxContent = `
                        <img src= ".img/collection5.pngs" alt="" class="img-cart">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- Remover carrito -->
                        <i class="fa-solid fa-trash cart-remove"></i>">`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);

}

// Update de Total
function updateTotal() {
  let cartContent = document.getElementsByClassName("cart-content")[0];
  let cartBoxes = cartContent.getElementsByClassName("box-cart");
  let total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName("cart-price")[0];
    let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  } 

  // Si el precio tiene muchas comas 
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}  


// Storage


