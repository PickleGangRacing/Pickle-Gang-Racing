// Pickle Gang Racing Cart

let cart = [];

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const card = button.parentElement;

        const product = {
            name: card.querySelector("h3").innerText,
            price: card.querySelector("p").innerText
        };

        cart.push(product);

        updateCart();

        button.innerText = "Added ✓";

        setTimeout(() => {
            button.innerText = "Add to Cart";
        }, 1000);

    });
});

function updateCart(){

    let cartCounter = document.getElementById("cart-count");

    if(!cartCounter){

        cartCounter = document.createElement("div");

        cartCounter.id = "cart-count";

        cartCounter.style.position = "fixed";
        cartCounter.style.top = "20px";
        cartCounter.style.right = "20px";
        cartCounter.style.background = "#2db84d";
        cartCounter.style.color = "white";
        cartCounter.style.padding = "12px 18px";
        cartCounter.style.borderRadius = "30px";
        cartCounter.style.fontWeight = "bold";
        cartCounter.style.boxShadow = "0 0 10px rgba(0,0,0,.4)";

        document.body.appendChild(cartCounter);

    }

    cartCounter.innerHTML = "🛒 Cart: " + cart.length;

}
