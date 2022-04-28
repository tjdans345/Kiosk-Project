// url 에서 쿼리스트링 뽑아오기
console.log();
const pgToken = new URLSearchParams(location.search).get("pg_token");
const paymentData = JSON.parse(localStorage.getItem("paymentData"));

const postApi = (data) => {
  const URL = "http://localhost:9090/kakao";
  return fetch(`${URL}/completed`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer ",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

if (pgToken === null) {
  alert("결제에 실패하였습니다. 다시 시도하거나 관리자에게 문의해주세요. ");
  location.href = "../kakao_pay_test/kakao_pay.html";
} else {
  postApi({
    pgToken: pgToken, // 결제 승인토큰
    tid: paymentData.test.tid,
    partnerOrderId: paymentData.partnerOrderId, // 결제 승인 시 필요데이터
    partnerUserId: paymentData.partnerUserId,
  }).then((res) => {
    localStorage.removeItem("paymentInformation");
    localStorage.removeItem("paymentData");
    localStorage.removeItem("choiceMenuList");
    localStorage.setItem("paymentCompleteData", JSON.stringify(res.data));
    alert("결제를 완료하였습니다!");
    location.href = "/index.html";
  });
}
