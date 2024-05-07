// !listForm은 users.js에 할당되었음.
// *리스트에 들어있는 태그
const listItemUl = document.querySelector("#list-item ul");
const listInput = listForm.querySelector("input");

// *중복되는 값
const TODOS_KEY = "todos";

// *할 일 목록 배열
let toDos = [];

// *로컬스토리지엔 문자열만 저장 가능하여 stringify로 배열or객체를 문자열로 변환
const saveTodos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// *지우기 이벤트
const deleteList = (event) => {
    // *클릭이벤트가 발생한 버튼의 부모요소
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

// *listHandler(할 일을 입력했을 경우) 생기는 이벤트
const paintList = (liValue) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("div");
    listItemUl.appendChild(li);
    li.id = liValue.id;
    li.appendChild(span);
    span.innerText = liValue.text;
    li.appendChild(btn);
    btn.className = "fa-solid fa-delete-left";
    // *List item 생성될 때 재생될 애니메이션
    let x = -70
    let opacity = 0;
    const listAnime = () => {
        x += 1;
        li.style.transform = `translateX(${x}px)`;
        if(x === 0){
            cancelAnimationFrame(listAnime);
            return;
        }
        requestAnimationFrame(listAnime);
    }
    requestAnimationFrame(listAnime);
    btn.addEventListener("click", deleteList);
    saveTodos();
}

const listHandler = (event) => {
    event.preventDefault();
    const liValue = listInput.value;
    listInput.value = "";
    const toDosObj = {
        // *삭제버튼을 위해 시간으로 랜덤id 할당
        // TODO 나중에 DB쓸경우 id 자동 할당해주기 때문에 바꿀 필요 있음
        id : Date.now(),
        text : liValue,
    };
    toDos.push(toDosObj);
    paintList(toDosObj);
}

// *로컬스토리지에서 리스트 가져오기
const savedTodos = localStorage.getItem(TODOS_KEY);

// *로컬스토리지가 비어있지 않을 경우
if(savedTodos !== null){
    // *forEach는 Array object에서만 작동하기 때문에 로컬스토리지를 가져와서 array로 변환
    const parseTodos = JSON.parse(savedTodos);
    toDos = parseTodos;
    parseTodos.forEach(paintList);
}

listForm.addEventListener("submit", listHandler);