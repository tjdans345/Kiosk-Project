// import { paymentMethodList } from "./payment_method_list.js";
// import { pages } from "/common/pageInfo.js";

// console.log(paymentMethodList);

const selectMenuList = JSON.parse(localStorage.getItem("selectMenuList"));

const CartArea = document.getElementById("wrap_cart_area");

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
  console.log(element);
  const selectMenuForm = document.createElement("div");
  selectMenuForm.className = "cart_item";
  selectMenuForm.id = element.code;
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

initSelectMenu();
