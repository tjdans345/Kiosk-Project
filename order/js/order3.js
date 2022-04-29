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

for (let i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener("click", function () {
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

const menuArray = [coffeeMenus, teaMenus, sandwichMenus];
const menuWrap = document.getElementById("menu_wrap");
const cartWrap = document.getElementById("wrap_cart_area");
let selectedMenuList = [];
// 삭제 기능을 통해 변경 가능한 리스트이므로 const 사용 불가

/* 메뉴리스트 만들기 */
const getList = (menuArray) => {
  while (menuWrap.hasChildNodes()) {
    menuWrap.removeChild(menuWrap.firstChild);
  }
  for (let i = 0; i < menuArray.length; i++) {
    makeMenuList(menuArray[i]);
    // onClick 이벤트가 설정된 html과 연관있음
  }
};

/* 메뉴리스트 내 각 단일메뉴 만들기 */
const makeMenuList = (menuArrayObj) => {
  let menuList = document.createElement("li");
  menuList.id = menuArrayObj.code;
  menuList.className = "menu";
  menuWrap.appendChild(menuList);
  menuList.innerHTML = `
  <span class="menu_name">${menuArrayObj.name}</span>
  <span class="menu_name">${menuArrayObj.price}</span>
    `;
  menuList.addEventListener("click", function () {
    pushMenu(menuArrayObj);
  });

  return menuList;
};

/* 메뉴리스트 내 각 단일메뉴 클릭 시 선택메뉴리스트 배열(빈 배열)에 추가 */
const pushMenu = (menuArrayObj) => {
  if (selectedMenuList.length === 0) {
    selectedMenuList.push({
      code: menuArrayObj.code,
      name: menuArrayObj.name,
      price: menuArrayObj.price,
      totalPrice: menuArrayObj.price,
      quantity: 1,
    });
  } else {
    if (
      selectedMenuList.filter((selectedMenu) => {
        return selectedMenu.code === menuArrayObj.code;
      }) < 1
    ) {
      console.log("새로 선택한 메뉴");
      selectedMenuList.push({
        code: menuArrayObj.code,
        name: menuArrayObj.name,
        price: menuArrayObj.price,
        totalPrice: menuArrayObj.price,
        quantity: 1,
      });
    } else {
      console.log("기존에 선택한 메뉴");
      selectedMenuList.map((selectedMenu) => {
        // console.log(selectedMenu.code);
        // console.log(menuArrayObj.code);
        if (selectedMenu.code === menuArrayObj.code) {
          selectedMenu.quantity++;
          selectedMenu.totalPrice = selectedMenu.price * selectedMenu.quantity;
        }
      });
    }
  }
  initSelectMenu();
};

const initSelectMenu = () => {
  let totalCount = 0;
  let totalPrice = 0;

  while (cartWrap.hasChildNodes()) {
    cartWrap.removeChild(cartWrap.firstChild);
  }

  for (let i = 0; i < selectedMenuList.length; i++) {
    cartWrap.append(makeSelectedMenuList(selectedMenuList[i]));
    totalCount += selectedMenuList[i].quantity;
    totalPrice += selectedMenuList[i].price * selectedMenuList[i].quantity;
  }

  document.getElementById("total_quantity").innerText = totalCount;
  document.getElementById(
    "total_price"
  ).innerText = `${totalPrice.toLocaleString()}원`;
};

/* 선택메뉴 내 각 단일 선택한 메뉴 만들기 */
const makeSelectedMenuList = (menuArrayObj) => {
  const selectedMenuList = document.createElement("div");
  selectedMenuList.className = "cart_item";
  selectedMenuList.id = menuArrayObj.code;
  selectedMenuList.innerHTML = `
    <div class="top">
      <span>${menuArrayObj.name}</span>
      <button class="delete" id="${
        menuArrayObj.code
      }" onClick="itemDelete(this)">X</button>
    </div>
    <div class="middle">
      <span>수량</span>
      <div class="wrap__quantity">
        <button class="plus" id="${
          menuArrayObj.code
        }" onClick="itemPlus(this)">+</button>
        <input class="item_quantity" readonly type="text" value="${
          menuArrayObj.quantity
        }" />
        <button class="minus" id="${
          menuArrayObj.code
        }" onClick="itemMinus(this)">-</button>
      </div>
    </div>
    <div class="buttom">
      <span>가격</span>
      <span class="itme_price">${(
        menuArrayObj.price * menuArrayObj.quantity
      ).toLocaleString()}</span>
    </div>
    `;

  return selectedMenuList;
};

const itemPlus = (menuArrayObj) => {
  selectedMenuList.map((selectedMenu) => {
    if (selectedMenu.code === parseInt(menuArrayObj.id)) {
      selectedMenu.quantity < 10 ? selectedMenu.quantity++ : false;
    } else {
    }
  });
  initSelectMenu();
};

const itemMinus = (menuArrayObj) => {
  selectedMenuList.map((selectedMenu) => {
    if (selectedMenu.code === parseInt(menuArrayObj.id)) {
      selectedMenu.quantity > 1 ? selectedMenu.quantity-- : false;
    } else {
    }
  });
  initSelectMenu();
};

const itemDelete = (menuArrayObj) => {
  selectedMenuList = selectedMenuList.filter(
    (selectedMenu) => selectedMenu.code !== parseInt(menuArrayObj.id)
  );
  initSelectMenu();
};

const init = () => {
  getList(menuArray[0]);
};

init();
