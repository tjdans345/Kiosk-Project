import { pages } from "/common/pageInfo.js";

const choiceMenu = JSON.parse(localStorage.getItem("choiceMenuList"));
// {
//     code: 102,
//     name: "카페라떼",
//     quantity: 1,
//     price: "4000",
//   },
//   {
//     code: 103,
//     name: "아이스카페라떼",
//     quantity: 1,
//     price: "4500",
//   },
//   {
//     code: 301,
//     name: "치킨클럽샌드위치",
//     quantity: 1,
//     price: "6500",
//   },
//   {
//     code: 302,
//     name: "BLT샌드위치",
//     quantity: 1,
//     price: "6500",
//   },
console.log(choiceMenu);

console.log(pages.orderMain);
