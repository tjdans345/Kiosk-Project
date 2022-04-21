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

const tabList = document.querySelectorAll(".tab");

/* tab메뉴 클릭 시 배경색 바뀜 */
for (let i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener("click", function () {
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("active");
    }
    this.classList.add("active");
    let tabListId = `${tabList[i].innerHTML}`;
    // console.log(tabListId);
  });
}

const menuArea = document.getElementById("menu_area");
const menuWrap = document.createElement("div");
menuWrap.classList.add("menu__wrap");
menuArea.appendChild(menuWrap);

const menuArray = [coffeeMenus, teaMenus, sandwichMenus];

/* menuArray내 각 배열을 화면에 리스트로 만들기 */
function getList(menuArray, type) {
  if (type !== "first") {
    /* 모든 자식 엘리먼트 삭제하기 */
    while (menuWrap.hasChildNodes()) {
      menuWrap.removeChild(menuWrap.firstChild);
    }
  }
  for (let i = 0; i < menuArray.length; i++) {
    // console.log(`${menuArray[i].name}`);
    let menuList = document.createElement("li");
    menuList.classList.add("menu");
    menuWrap.appendChild(menuList);

    let menuNamePlace = document.createElement("span");
    menuNamePlace.classList.add("menu_name");
    menuList.appendChild(menuNamePlace);
    let menuName = document.createTextNode(menuArray[i].name);
    menuNamePlace.appendChild(menuName);

    let menuPricePlace = document.createElement("span");
    menuPricePlace.classList.add("menu_price");
    menuList.appendChild(menuPricePlace);
    let menuPrice = document.createTextNode(menuArray[i].price);
    menuPricePlace.appendChild(menuPrice);

    menuList.addEventListener("click", function () {
      // console.log("test");
      let wrapCart = document.getElementById("wrap_cart_area");
      let cartItem = document.createElement("div");
      cartItem.id = `${menuArray[i].code}`;
      cartItem.classList.add("cart_item");
      wrapCart.appendChild(cartItem);

      let cartItemTop = document.createElement("div");
      cartItemTop.classList.add("top");
      cartItem.appendChild(cartItemTop);
      let cartItemTitle = document.createElement("span");
      cartItemTitle.innerHTML = `${menuArray[i].name}`;
      cartItemTop.appendChild(cartItemTitle);
      let cartItemDelete = document.createElement("button");
      cartItemDelete.classList.add("delete");
      cartItemDelete.innerHTML = `X`;
      cartItemTop.appendChild(cartItemDelete);

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
      let cartItemSelectedQuantity = document.createElement("input");
      cartItemSelectedQuantity.classList.add("item_quantity");

      cartItemSelectedQuantity.setAttribute("min", 0);
      cartItemSelectedQuantity.setAttribute("max", 10);
      cartItemSelectedQuantity.value = 1;
      cartItemQuantityWrap.appendChild(cartItemSelectedQuantity);
      let cartItemMinus = document.createElement("button");
      cartItemMinus.classList.add("minus");
      cartItemMinus.innerHTML = "-";
      cartItemQuantityWrap.appendChild(cartItemMinus);

      let cartItemBottom = document.createElement("div");
      cartItemBottom.classList.add("bottom");
      cartItem.appendChild(cartItemBottom);
      let cartItemPriceTitle = document.createElement("span");
      cartItemPriceTitle.innerHTML = "가격";
      cartItemBottom.appendChild(cartItemPriceTitle);
      let cartItemPrice = document.createElement("span");
      cartItemPrice.classList.add("item_price");
      cartItemPrice.innerHTML = `${menuArray[i].price}`;
      cartItemBottom.appendChild(cartItemPrice);

      cartItemDelete.addEventListener("click", function () {
        // console.log(cartItem.id);
        wrapCart.removeChild(document.getElementById(cartItem.id));
        // this.parentElement.parentElement.remove();
      });

      cartItemPlus.addEventListener("click", function () {
        cartItemSelectedQuantity.value++;
        const cartItemTotalPrice =
          cartItemPrice.value * partInt(cartItemSelectedQuantity.innerHTML);
      });
      cartItemMinus.addEventListener("click", function () {
        cartItemSelectedQuantity.value--;
      });
    });
  }
}

// getList(menuArray[1]);
// 초기화가 필요한 것들
const init = () => {
  getList(menuArray[0], "first");
};

init();

const goToPaymentPage = () => {
  let choiceMenuList = [
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
  ];

  localStorage.setItem("choiceMenuList", JSON.stringify(choiceMenuList));

  location.href = "/payment/pages/payment.html";
};
