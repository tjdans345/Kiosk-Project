const URL = "http://localhost:9090/kakao";

export const getApi = () => {
  fetch(`${URL}/test`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer ",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => console.log(data));
};

export 
