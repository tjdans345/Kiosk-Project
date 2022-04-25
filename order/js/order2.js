/*   Coffee Menu Lists   */
const coffeeMenus = [
  {
    idx: 1,
    code: 100,
    name: "아메리카노",
    quantity: 1,
    price: "3000",
  },
  {
    idx: 2,
    code: 101,
    name: "아이스아메리카노",
    quantity: 1,
    price: "3500",
  },
  {
    idx: 3,
    code: 102,
    name: "카페라떼",
    quantity: 1,
    price: "4000",
  },
  {
    idx: 4,
    code: 103,
    name: "아이스카페라떼",
    quantity: 1,
    price: "4500",
  },
  {
    idx: 5,
    code: 104,
    name: "바닐라빈라떼",
    quantity: 1,
    price: "4500",
  },
  {
    idx: 6,
    code: 105,
    name: "아이스바닐라빈라떼",
    quantity: 1,
    price: "5000",
  },
  {
    idx: 7,
    code: 106,
    name: "캐러멜라떼",
    quantity: 1,
    price: "4500",
  },
  {
    idx: 8,
    code: 107,
    name: "아이스캐러멜라떼",
    quantity: 1,
    price: "5000",
  },
  {
    idx: 9,
    code: 108,
    name: "카페모카",
    quantity: 1,
    price: "4500",
  },
  {
    idx: 10,
    code: 109,
    name: "아이스카페모카",
    quantity: 1,
    price: "5000",
  },
];

/*   Tea Menu Lists   */
const teaMenus = [
  {
    idx: 1,
    code: 200,
    name: "얼그레이",
    quantity: 1,
    price: "3000",
  },
  {
    idx: 2,
    code: 201,
    name: "아이스얼그레이",
    quantity: 1,
    price: "3500",
  },
  {
    idx: 3,
    code: 202,
    name: "잉글리쉬브랙퍼스트",
    quantity: 1,
    price: "3000",
  },
  {
    idx: 4,
    code: 203,
    name: "아이스잉글리쉬브랙퍼스트",
    quantity: 1,
    price: "3500",
  },
  {
    idx: 5,
    code: 204,
    name: "애플티",
    quantity: 1,
    price: "3000",
  },
  {
    idx: 6,
    code: 205,
    name: "아이스애플티",
    quantity: 1,
    price: "3500",
  },
  {
    idx: 7,
    code: 206,
    name: "캐모마일",
    quantity: 1,
    price: "3000",
  },
  {
    idx: 8,
    code: 207,
    name: "아이스캐모마일",
    quantity: 1,
    price: "3500",
  },
  {
    idx: 9,
    code: 208,
    name: "루이보스",
    quantity: 1,
    price: "3000",
  },
  {
    idx: 10,
    code: 209,
    name: "아이스루이보스",
    quantity: 1,
    price: "3500",
  },
  {
    idx: 12,
    code: 210,
    name: "진저레몬",
    quantity: 1,
    price: "3000",
  },
  {
    idx: 13,
    code: 211,
    name: "아이스진저레몬",
    quantity: 1,
    price: "3500",
  },
  {
    idx: 14,
    code: 212,
    name: "핫초콜릿",
    quantity: 1,
    price: "3000",
  },
  {
    idx: 15,
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

// 선택메뉴 리스트
let selectMenuList = [];

const menuArray = [coffeeMenus, teaMenus, sandwichMenus];
const menuWrap = document.getElementById("menu_wrap");
const CartArea = document.getElementById("wrap_cart_area");

/* menuArray내 각 배열을 화면에 리스트로 만들기 */
function getList(menuArray) {
  /* 모든 자식 엘리먼트 삭제하기 */
  while (menuWrap.hasChildNodes()) {
    menuWrap.removeChild(menuWrap.firstChild);
  }

  for (let i = 0; i < menuArray.length; i++) {
    let selectMenuForm = menuWrap.append(makeMenuList(menuArray[i]));
  }
}

/**
 * 메뉴 폼 만드는 함수
 * @param {} element 메뉴 객체
 * @returns selectMenuForm Node
 */
const makeMenuList = (element) => {
  const selectMenuForm = document.createElement("li");
  selectMenuForm.className = "menu";
  selectMenuForm.id = element.idx;

  selectMenuForm.innerHTML = `
    <span class="menu_name">${element.name}</span>
    <span class="menu_price">${element.price}</span>
  `;
  selectMenuForm.addEventListener("click", function () {
    addMenu(element);
  });
  return selectMenuForm;
};

/**
 * 선택 메뉴 배열에 추가
 * @param {} menuObj
 */
const addMenu = (menuObj) => {
  if (selectMenuList.length === 0) {
    selectMenuList.push({
      code: menuObj.code,
      name: menuObj.name,
      price: menuObj.price,
      quntity: 1,
    });
  } else {
    if (
      selectMenuList.filter((menu) => {
        return menu.code === menuObj.code;
      }) < 1
    ) {
      selectMenuList.push({
        code: menuObj.code,
        name: menuObj.name,
        price: menuObj.price,
        quntity: 1,
      });
    } else {
      selectMenuList.map((menu) => {
        if (menu.code === menuObj.code) {
          menu.quntity++;
        }
      });
    }
  }

  initSelectMenu();

  // while (CartArea.hasChildNodes()) {
  //   CartArea.removeChild(CartArea.firstChild);
  // }

  // for (let i = 0; i < selectMenuList.length; i++) {
  //   CartArea.append(makeSelectMenuList(selectMenuList[i]));
  //   totalCount += selectMenuList[i].quntity;
  //   totalPrice += selectMenuList[i].price * selectMenuList[i].quntity;
  // }

  // document.getElementById("total_count").innerText = totalCount;
  // document.getElementById(
  //   "total_price"
  // ).innerText = `${totalPrice.toLocaleString()} 원`;
};

const initSelectMenu = () => {
  let totalCount = 0;
  let totalPrice = 0;

  while (CartArea.hasChildNodes()) {
    CartArea.removeChild(CartArea.firstChild);
  }

  for (let i = 0; i < selectMenuList.length; i++) {
    CartArea.append(makeSelectMenuList(selectMenuList[i]));
    totalCount += selectMenuList[i].quntity;
    totalPrice += selectMenuList[i].price * selectMenuList[i].quntity;
  }

  document.getElementById("total_count").innerText = totalCount;
  document.getElementById(
    "total_price"
  ).innerText = `${totalPrice.toLocaleString()} 원`;
};

/**
 * 코드 리팩토링하기 링크 : https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
 * 선택메뉴 폼 만드는 함수
 * @param {} element
 * @returns
 */
const makeSelectMenuList = (element) => {
  const selectMenuForm = document.createElement("div");
  selectMenuForm.className = "cart_item";
  selectMenuForm.id = element.idx;
  selectMenuForm.innerHTML = `
    <div class="top">
      <span>${element.name}</span>
      <button class="delete" id = "${
        element.code
      }" onclick="deleteMenu(this)">X</button>
    </div>
    <div class="middle">
      <span>수량</span>
      <div class="wrap__quantity">
      <button class="plus" id="${
        element.code
      }"  onclick="countPlus(this)">+</button>
      <input class="item_quantity" readonly type="text" value="${
        element.quntity
      }">
      <button class="minus" id="${
        element.code
      }"   onclick="countMinus(this)">-</button>
      </div>
    </div>
    <div class="bottom">
      <span>가격</span>
      <span class="item_price">${element.price * element.quntity}</span>
    </div>`;
  return selectMenuForm;
};

const countPlus = (element) => {
  selectMenuList.map((menu) => {
    if (menu.code === parseInt(element.id)) {
      menu.quntity++;
    } else {
    }
  });
  initSelectMenu();
};

const countMinus = (element) => {
  selectMenuList.map((menu) => {
    if (menu.code === parseInt(element.id)) {
      menu.quntity > 1 ? menu.quntity-- : false;
    } else {
    }
  });
  initSelectMenu();
};

const deleteMenu = (element) => {
  selectMenuList = selectMenuList.filter(
    (menu) => menu.code !== parseInt(element.id)
  );
  initSelectMenu();
};

// getList(menuArray[1]);
// 초기화가 필요한 것들
const init = () => {
  getList(menuArray[0]);
};

init();
