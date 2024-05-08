const clock = document.getElementById("clock");

const clockMovement = () => {
  const date = new Date();
  clock.innerText = `${date.toLocaleString('ko-kr')}`;
  // *am pm구분 없아 시간만 필요할 경우 아래 주석 해제
  // const hours = date.getHours().toString().padStart(2, '0');
  // const minutes = date.getMinutes().toString().padStart(2, '0');
  // const seconds = date.getSeconds().toString().padStart(2, '0');
  // clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// !처음 렌더링 시 00:00:00로 보이는 것을 막기 위해 함수를 한번 주고 시작함
clockMovement();

setInterval(() => {
  clockMovement();
},1000);
