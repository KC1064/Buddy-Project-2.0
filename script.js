// const kiron = [
//   ["DBMS", "OS", "Economics", "DAA", "Free", "Math IV", "Free", "AJP/AI"],
//   ["Free", "DBMS", "DBMS Lab", "DBMS Lab", "Free", "Math IV", "Free", "Free"],
//   ["OS", "AJP/AI", "DBMS", "Math IV", "Free", "DAA", "DBMS Lab", "DBMS Lab"],
//   ["Free", "OS", "Economics", "Free", "Free", "DAA", "DAA Lab", "DAA Lab"],
//   ["OS Lab", "OS Lab", "DBMS", "Free", "Math IV", "DAA", "Economics", "AJP/AI"]
// ];

// const mrinal = [
//   ["DBMS", "Operating System", "Economics", "DAA", "Free", "Math IV", "Free", "AJP/AI"],
//   ["Free", "DBMS", "DBMS Lab", "DBMS Lab", "Free", "Math IV", "Free", "Free"],
//   ["Operating System", "AJP/AI", "DBMS", "Math IV", "Free", "DAA", "DBMS Lab", "DBMS Lab"],
//   ["Free", "Operating System", "Economics", "Free", "Free", "DAA", "DAA Lab", "DAA Lab"],
//   ["Operating System Lab", "Operating System Lab", "DBMS", "Free", "Math IV", "DAA", "Economics", "AJP/AI"]
// ];
// const selectedValue = document.getElementById("friends").value;
// // function displaySelectedValue() {
// //   document.getElementById("selected").innerText = `Selected Value: ${selectedValue}`;
// // }
// const today = new Date("Feb 26, 2024 10:30:00");
// function printTT(){
//   const day = today.getDay();
//   if (day === 0){
//     document.querySelector(".time1").textContent = kiron[0][0];
//     document.querySelector(".time2").textContent = kiron[0][1];
//     document.querySelector(".time3").textContent = kiron[0][2];
//     document.querySelector(".time4").textContent = kiron[0][3];
//     document.querySelector(".time5").textContent = kiron[0][4];
//     document.querySelector(".time6").textContent = kiron[0][5];
//     document.querySelector(".time7").textContent = kiron[0][6];
//     document.querySelector(".time8").textContent = kiron[0][7];
//   }
// }

const timetableData = {
  "Kiron": [
    ["DBMS", "Operating System", "Economics", "DAA", "Free", "Math IV", "Free", "AJP/AI"],
    ["Free", "DBMS", "DBMS Lab", "DBMS Lab", "Free", "Math IV", "Free", "Free"],
    ["Operating System", "AJP/AI", "DBMS", "Math IV", "Free", "DAA", "DBMS Lab", "DBMS Lab"],
    ["Free", "Operating System", "Economics", "Free", "Free", "DAA", "DAA Lab", "DAA Lab"],
    ["Operating System Lab", "Operating System Lab", "DBMS", "Free", "Math IV", "DAA", "Economics", "AJP/AI"]
  ],
  "Mrinal": [
    ["DBMS", "Operating System", "Economics", "DAA", "Free", "Math IV", "Free", "AJP/AI"],
    ["Free", "DBMS", "DBMS Lab", "DBMS Lab", "Free", "Math IV", "Free", "Free"],
    ["Operating System", "AJP/AI", "DBMS", "Math IV", "Free", "DAA", "DBMS Lab", "DBMS Lab"],
    ["Free", "Operating System", "Economics", "Free", "Free", "DAA", "DAA Lab", "DAA Lab"],
    ["Operating System Lab", "Operating System Lab", "DBMS", "Free", "Math IV", "DAA", "Economics", "AJP/AI"]
  ],
  "Sai": [
    ["DAA", "Economics", "DBMS Lab", "DBMS Lab", "Free", "DBMS", "Math IV", "Free"],
    ["Free", "DBMS", "AI", "Free", "Operating System", "DAA", "Economics", "Free"],
    ["Free", "AJP/AI", "DBMS", "Math IV", "Free", "Operating System", "DAA Lab", "DAA Lab"],
    ["Free", "DAA", "Math IV", "Free", "Operating System Lab", "Operating System Lab", "Free", "DBMS"],
    ["DBMS Lab", "DBMS Lab", "Operating System", "Economics", "Free", "Math IV", "DAA", "AJP/AI"]
  ],
  "Jyoti": [
    ["DAA", "Economics", "DBMS Lab", "DBMS Lab", "Free", "DBMS", "Math IV", "Free"],
    ["Free", "DBMS", "AI", "Free", "Operating System", "DAA", "Economics", "Free"],
    ["Free", "AJP/AI", "DBMS", "Math IV", "Free", "Operating System", "DAA Lab", "DAA Lab"],
    ["Free", "DAA", "Math IV", "Free", "Operating System Lab", "Operating System Lab", "Free", "DBMS"],
    ["DBMS Lab", "DBMS Lab", "Operating System", "Economics", "Free", "Math IV", "DAA", "AJP/AI"]
  ],
  "Sukanya": [
    ["Digital Signal", "BME", "English Lab", "English Lab", "Free", "Maths IV", "Programming Python", "UVHPE"],
    ["Digital Signal Lab", "Digital Signal", "Python", "Free", "CSE", "Maths IV", "Analog Communication", "BME"],
    ["Digital Signal", "UVHPE", "DBMS", "Math IV", "Free", "Operating System", "DAA Lab", "DAA Lab"],
    ["Free", "Digital Signal", "Math IV", "Free", "Operating System Lab", "Operating System Lab", "Free", "DBMS"],
    ["DBMS Lab", "DBMS Lab", "Operating System", "Economics", "Free", "Math IV", "DAA", "AJP/AI"]
  ]
};

function displaySelectedValue() {
  const selectedFriend = document.getElementById("friends").value;
  const timetable = timetableData[selectedFriend];
  const selectedDiv = document.querySelector("#selected");
  selectedDiv.style.visibility = 'visible';
  
  for (let i = 0; i < 8; i++) {
    document.querySelector(`.time${i + 1}`).textContent = timetable[0][i];
  }
}