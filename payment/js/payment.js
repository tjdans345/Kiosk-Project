const paymentInformation = JSON.parse(
  localStorage.getItem("paymentInformation")
);

const CartArea = document.getElementById("wrap_cart_area");
let initNum = 0;
const initSelectMenu = () => {
  let totalCount = 0;
  let totalPrice = 0;

  while (CartArea.hasChildNodes()) {
    CartArea.removeChild(CartArea.firstChild);
  }

  for (let i = 0; i < paymentInformation.selectMenuList.length; i++) {
    CartArea.append(makeSelectMenuList(paymentInformation.selectMenuList[i]));
    totalCount += paymentInformation.selectMenuList[i].quantity;
    totalPrice +=
      paymentInformation.selectMenuList[i].price *
      paymentInformation.selectMenuList[i].quantity;
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
          element.quantity
        }">
        <button class="minus" id="${
          element.code
        }"   onclick="countMinus(this)">-</button>
        </div>
      </div>
      <div class="bottom">
        <span>가격</span>
        <span class="item_price">${element.price * element.quantity}</span>
      </div>`;
  return selectMenuForm;
};

/**
 * module 사용시의 문제점을 해결하기위해 윈도우 메서드로 추가
 */
const kakaoRestTest = () => {
  let itemName = paymentInformation.selectMenuList[0].name;
  let totalPrice = paymentInformation.totalPrice;
  let totalCount = paymentInformation.totalCount;
  let data = {
    itemName: `${itemName} 외 ${totalCount - 1}`,
    totalPrice: totalPrice,
    totalCount: totalCount,
    productList: paymentInformation.selectMenuList,
  };
  console.log(itemName);
  console.log(totalPrice);
  console.log(totalCount);

  // getApi();
  postApi(data).then((responseData) => {
    console.log(responseData.data);
    // kakaoPay data 로컬스토리지 저장
    localStorage.setItem("paymentData", JSON.stringify(responseData.data));
    let popup = window.open(
      responseData.data.test.nextRedirectPcUrl,
      "_self",
      "menubar=1, width=500, height=700"
    );
  });
};

initSelectMenu();

const postApi = (data) => {
  // const URL = "http://localhost:9090/kakao";
  const URL = "http://192.168.0.18:9090/kakao";

  return fetch(`${URL}/test`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer ",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};
