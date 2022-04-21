const timeOut = () => {
  let time = 60;
  let min = "";
  let sec = "";

  let timeInterval = setInterval(function () {
    // parserInt() : 정수 반환
    min = parseInt(time / 60); // 몫 계산
    sec = time % 60; // 나머지 계산

    document.getElementById("time_display").innerHTML = `${min} 분 ${sec} 초`;
    time--;

    if (time < 0) {
      clearInterval(timeInterval);
      alert("시간 초과 입니다.");
      history.back();
    }
  }, 1000);
};

window.onload = function () {
  timeOut();
};
