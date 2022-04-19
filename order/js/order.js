// let menuItems = document.querySelectorAll(".menu");

// let btnDelete = document.querySelectorAll(".delete");
// let cartItem = document.querySelectorAll(".cart_item");

// for(let i = 0; i < btnDelete.length; i++) {
//     btnDelete[i].addEventListener("click", function() {
//         this.parentNode.style.color = "red";
//     });
// }

/*   Coffee Menu Lists   */
const coffeeMenus = [
  {
    code: 100,
    name: "아메리카노",
    quantity: 1,
    price: "3000",
  },
  {
    code: 101,
    name: "아이스아메리카노",
    quantity: 1,
    price: "3500",
  },
  {
    code: 102,
    name: "카페라떼",
    quantity: 1,
    price: "4000",
  },
  {
    code: 103,
    name: "아이스카페라떼",
    quantity: 1,
    price: "4500",
  },
  {
    code: 104,
    name: "바닐라빈라떼",
    quantity: 1,
    price: "4500",
  },
  {
    code: 105,
    name: "아이스바닐라빈라떼",
    quantity: 1,
    price: "5000",
  },
  {
    code: 106,
    name: "캐러멜라떼",
    quantity: 1,
    price: "4500",
  },
  {
    code: 107,
    name: "아이스캐러멜라떼",
    quantity: 1,
    price: "5000",
  },
  {
    code: 108,
    name: "카페모카",
    quantity: 1,
    price: "4500",
  },
  {
    code: 109,
    name: "아이스카페모카",
    quantity: 1,
    price: "5000",
  },
];

let MenuCoffeeWrap = document.getElementById("menu_coffee_area");

function test(menuarray) {
  for (let i = 0; i < menuarray.length; i++) {}
}

coffeeMenus.forEach((coffeeMenu, index) => {
  console.log(`${coffeeMenu.name} ${coffeeMenu.price}`);
  let menuList = document.createElement("li");
  menuList.classList.add("menu");
  MenuCoffeeWrap.appendChild(menuList);

  let menuNamePlace = document.createElement("span");
  menuNamePlace.classList.add("menu_name");
  menuList.appendChild(menuNamePlace);

  let menuName = document.createTextNode(coffeeMenu.name);
  menuNamePlace.appendChild(menuName);

  let menuPricePlace = document.createElement("span");
  menuPricePlace.classList.add("menu_price");
  menuList.appendChild(menuPricePlace);

  let menuPrice = document.createTextNode(coffeeMenu.price);
  menuPricePlace.appendChild(menuPrice);

  menuList.addEventListener("click", () => {
    console.log(menuList.id);
    // 1. wrap__cart 찾기
    // 2. createElement div 만들기
    // 2-1. name, price 넣기
    // 3. appendChild 로 warp__cart에 추가

    let wrapCart = document.getElementById("wrap_cart_area");
    let cartItem = document.createElement("div");
    cartItem.id = `${coffeeMenu.code}${index}`;
    cartItem.classList.add("cart_item");
    wrapCart.appendChild(cartItem);

    let cartItemTop = document.createElement("div");
    cartItemTop.classList.add("top");
    cartItem.appendChild(cartItemTop);
    let cartItemTitle = document.createElement("span");
    cartItemTitle.innerHTML = `${coffeeMenu.name}`;
    cartItemTop.appendChild(cartItemTitle);
    let cartItemDelete = document.createElement("button");
    cartItemDelete.classList.add("delete");
    cartItemDelete.innerHTML = `X`;
    cartItemTop.appendChild(cartItemDelete);

    cartItemDelete.addEventListener("click", function () {
      //   console.log(cartItem.id);
      wrapCart.removeChild(document.getElementById(cartItem.id));
    });

    let cartItemMiddle = document.createElement("div");
    cartItemMiddle.classList.add("middle");
    cartItem.appendChild(cartItemMiddle);
    let cartItemQuantity = document.createElement("span");
    cartItemQuantity.innerHTML = "수량";
    cartItemMiddle.appendChild(cartItemQuantity);
    let cartItemQuantityWrap = document.createElement("div");
    cartItemQuantityWrap.classList.add("wrap__quantity");
    cartItemMiddle.appendChild(cartItemQuantityWrap);
    let cartItemPlus = document.createElement("button");
    cartItemPlus.classList.add("plus");
    cartItemPlus.innerHTML = "+";
    cartItemQuantityWrap.appendChild(cartItemPlus);
    let cartItemSelectedQuantity = document.createElement("span");
    cartItemSelectedQuantity.classList.add("item_quantity");
    cartItemSelectedQuantity.innerHTML = 1;
    cartItemQuantityWrap.appendChild(cartItemSelectedQuantity);
    let cartItemMinus = document.createElement("button");
    cartItemMinus.classList.add("minus");
    cartItemMinus.innerHTML = "-";
    cartItemQuantityWrap.appendChild(cartItemMinus);

    let cartItemBottom = document.createElement("div");
    cartItemBottom.classList.add("bottom");
    cartItem.appendChild(cartItemBottom);
    let cartItemPriceTitle = document.createElement("span");
    cartItemPriceTitle.innerHTML = "수량";
    cartItemBottom.appendChild(cartItemPriceTitle);
    let cartItemPrice = document.createElement("span");
    cartItemPrice.innerHTML = `${coffeeMenu.price}`;
    cartItemBottom.appendChild(cartItemPrice);
  });
});

/*   Tea Menu Lists   */
const teaMenus = [
  {
    code: 200,
    name: "얼그레이",
    quantity: 1,
    price: "3000",
  },
  {
    code: 201,
    name: "아이스얼그레이",
    quantity: 1,
    price: "3500",
  },
  {
    code: 202,
    name: "잉글리쉬브랙퍼스트",
    quantity: 1,
    price: "3000",
  },
  {
    code: 203,
    name: "아이스잉글리쉬브랙퍼스트",
    quantity: 1,
    price: "3500",
  },
  {
    code: 204,
    name: "애플티",
    quantity: 1,
    price: "3000",
  },
  {
    code: 205,
    name: "아이스애플티",
    quantity: 1,
    price: "3500",
  },
  {
    code: 206,
    name: "캐모마일",
    quantity: 1,
    price: "3000",
  },
  {
    code: 207,
    name: "아이스캐모마일",
    quantity: 1,
    price: "3500",
  },
  {
    code: 208,
    name: "루이보스",
    quantity: 1,
    price: "3000",
  },
  {
    code: 209,
    name: "아이스루이보스",
    quantity: 1,
    price: "3500",
  },
  {
    code: 210,
    name: "진저레몬",
    quantity: 1,
    price: "3000",
  },
  {
    code: 211,
    name: "아이스진저레몬",
    quantity: 1,
    price: "3500",
  },
  {
    code: 212,
    name: "핫초콜릿",
    quantity: 1,
    price: "3000",
  },
  {
    code: 213,
    name: "아이스초콜릿",
    quantity: 1,
    price: "3500",
  },
];

let MenuTeaWrap = document.getElementById("menu_tea_area");

teaMenus.forEach((teaMenu, index) => {
  console.log(`${teaMenu.name} ${teaMenu.price}`);
  let menuList = document.createElement("li");
  menuList.classList.add("menu");
  MenuTeaWrap.appendChild(menuList);

  let menuNamePlace = document.createElement("span");
  menuNamePlace.classList.add("menu_name");
  menuList.appendChild(menuNamePlace);

  let menuName = document.createTextNode(teaMenu.name);
  menuNamePlace.appendChild(menuName);

  let menuPricePlace = document.createElement("span");
  menuPricePlace.classList.add("menu_price");
  menuList.appendChild(menuPricePlace);

  let menuPrice = document.createTextNode(teaMenu.price);
  menuPricePlace.appendChild(menuPrice);
});

/*   Tea Menu Lists   */
const sandwichMenus = [
  {
    code: 300,
    name: "잠봉뵈르",
    quantity: 1,
    price: "6000",
  },
  {
    code: 301,
    name: "치킨클럽샌드위치",
    quantity: 1,
    price: "6500",
  },
  {
    code: 302,
    name: "BLT샌드위치",
    quantity: 1,
    price: "6500",
  },
  {
    code: 303,
    name: "아보카도명란샌드위치",
    quantity: 1,
    price: "6500",
  },
];

let MenuSandwichWrap = document.getElementById("menu_sandwich_area");

sandwichMenus.forEach((sandwichMenu, index) => {
  console.log(`${sandwichMenu.name} ${sandwichMenu.price}`);
  let menuList = document.createElement("li");
  menuList.classList.add("menu");
  MenuSandwichWrap.appendChild(menuList);

  let menuNamePlace = document.createElement("span");
  menuNamePlace.classList.add("menu_name");
  menuList.appendChild(menuNamePlace);

  let menuName = document.createTextNode(sandwichMenu.name);
  menuNamePlace.appendChild(menuName);

  let menuPricePlace = document.createElement("span");
  menuPricePlace.classList.add("menu_price");
  menuList.appendChild(menuPricePlace);

  let menuPrice = document.createTextNode(sandwichMenu.price);
  menuPricePlace.appendChild(menuPrice);
});
