/**
 * 페이지 경로를 담고 있는 객체 ( 공통 모듈로 관리하겠습니다. )
 */
export const pages = {
  orderMain: "/order/page/order.html",
  paymentMain: "/payment/page/payment.html",

  getPageRoute: function get(pageName) {
    // alert(pages.pageName);
  },
};
