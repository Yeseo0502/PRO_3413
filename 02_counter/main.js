// let count = 0;
// function add(){
//     count++;
//     document.getElementById("num").innerHTML = count;
// }

//선생님 풀이
// const resultH1= document.getElementsByTagName("h1")[0];
const resultH1 = document.querySelector("h1");
// const result1 = document.querySelectorAll("h1")[0];
const plusButton = document.querySelector("button");

let count = 0;
plusButton.addEventListener("click",() => { //위에 불러도 호이스팅이 됨
    count ++;
    resultH1.innerHTML = count;
}); //()<-에 함수를 넣는 다면? ex)plus는 함수! ()없는 이유? => return값을 나오기 떄문에 언디파인드가 나옴

plusButton.onclick = ()=>{
    count++;
    resultH1.innerHTML = count;
};
