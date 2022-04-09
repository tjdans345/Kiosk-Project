let menuItems = document.querySelectorAll(".menu");

let btnDelete = document.querySelectorAll(".delete");
let cartItem = document.querySelectorAll(".cart_item");

for(let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", function() {
        this.parentNode.style.color = "red";
    });
}