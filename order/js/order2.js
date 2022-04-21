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

let selectMenuList = [];

const menuWrap = document.getElementById("menu_wrap");

const menuArray = [coffeeMenus, teaMenus, sandwichMenus];

/* menuArray내 각 배열을 화면에 리스트로 만들기 */
function getList(menuArray, type) {
  /* 모든 자식 엘리먼트 삭제하기 */
  while (menuWrap.hasChildNodes()) {
    menuWrap.removeChild(menuWrap.firstChild);
  }

  for (let i = 0; i < menuArray.length; i++) {
    let menuForm = menuWrap.append(makeHtml(menuArray[i], menuArray));
  }
}

/**
 * 메뉴 폼 만드는 함수
 * @param {} element 메뉴 객체
 * @returns menuForm Node
 */
const makeHtml = (element, menuArray) => {
  const menuForm = document.createElement("li");
  menuForm.className = "menu";
  menuForm.id = element.idx;
  menuForm.innerHTML = `
    <span class="menu_name">${element.name}</span>
    <span class="menu_price">${element.price}</span>
  `;
  menuForm.addEventListener("click", function () {
    addMenu(menuArray[this.id - 1]);
  });
  return menuForm;
};

const addMenu = (menuObj) => {
  console.log(menuObj);
  selectMenuList.filter((menu) => {});
  // selectMenuList.push({
  //   code: menuArray[].code,
  //   name: element.name,
  //   price: element.price,
  //   quntity: 1,
  // });

  console.log("메뉴리스트");
  console.log(selectMenuList);
  const CartArea = document.getElementById("wrap_cart_area");
  console.log(CartArea);
};

// getList(menuArray[1]);
// 초기화가 필요한 것들
const init = () => {
  getList(menuArray[0], "first");
};

init();
