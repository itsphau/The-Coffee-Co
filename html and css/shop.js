const product = [
    {
        id: 0,
        image: '../images/HC.png',
        title: 'Classic Americano <br>(Hot/Iced)',
        price: 115,
    },
    {
        id: 0,
        image: '../images/HC.png',
        title: 'Smooth Latte <br> (Hot/Iced)',
        price: 155,
    },
    {
        id: 0,
        image: '../images/HC.png',
        title: 'Dirty Matcha <br>(Hot/Iced)',
        price: 165,
    },
    {
        id: 1,
        image: '../images/HB.png',
        title: 'Pure Matcha',
        price: 160,  
    },    {
        id: 1,
        image: '../images/HB.png',
        title: 'Mint Chocolate Bliss',
        price: 180,  
    },    {
        id: 1,
        image: '../images/HB.png',
        title: 'Oreo Delight',
        price: 180,  
    },
    {
        id: 2,
        image: '../images/SH.png',
        title: 'Strawberry Dream',
        price: 180,
    },    {
        id: 2,
        image: '../images/SH.png',
        title: 'Premium Milo',
        price: 180,
    },    {
        id: 2,
        image: '../images/SH.png',
        title: 'Sweet Banana',
        price: 180,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₱ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₱ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₱ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₱ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}




function proceedToCheckout() {
    if (cart.length > 0) {
        // Store the cart in local storage for passing to the next page
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to the confirmation page
        window.location.href = 'confirmation.html'; // Change to the actual confirmation page URL
    } else {
        alert('Your cart is empty. Please add items to your cart first.');
    }
}



// observers
document.addEventListener("DOMContentLoaded", ()=> {
    const scrolledDown = document.querySelector("[scrolled]");
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -500px 0px"
    }
    const scrollObserver = new IntersectionObserver((entries)=> {
        entries.forEach(entry=> {
            if (entry.isIntersecting) {
                document.body.classList.add("scrolled");
                console.log("Scrolled!");
            } else {
                document.body.classList.remove("scrolled");
            }
        });
    }, observerOptions);

    scrollObserver.observe(scrolledDown);
});






// for wrapper
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnLogged = document.querySelector('.btnLogged'); // logged-in button
const iconClose = document.querySelector('.icon-close');
console.log(wrapper, loginLink, registerLink, btnPopup, iconClose);

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})
btnLogged.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})


