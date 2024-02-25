const kiron = [
  ["DBMS", "OS", "Economics", "DAA", "Free", "Math IV", "Free", "AJP/AI"],
  ["Free", "DBMS", "DBMS Lab", "DBMS Lab", "Free", "Math IV", "Free", "Free"],
  ["OS", "AJP/AI", "DBMS", "Math IV", "Free", "DAA", "DBMS Lab", "DBMS Lab"],
  ["Free", "OS", "Economics", "Free", "Free", "DAA", "DAA Lab", "DAA Lab"],
  ["OS Lab", "OS Lab", "DBMS", "Free", "Math IV", "DAA", "Economics", "AJP/AI"]
];

const mrinal = [
  ["DBMS", "Operating System", "Economics", "DAA", "Free", "Math IV", "Free", "AJP/AI"],
  ["Free", "DBMS", "DBMS Lab", "DBMS Lab", "Free", "Math IV", "Free", "Free"],
  ["Operating System", "AJP/AI", "DBMS", "Math IV", "Free", "DAA", "DBMS Lab", "DBMS Lab"],
  ["Free", "Operating System", "Economics", "Free", "Free", "DAA", "DAA Lab", "DAA Lab"],
  ["Operating System Lab", "Operating System Lab", "DBMS", "Free", "Math IV", "DAA", "Economics", "AJP/AI"]
];
const selectedValue = document.getElementById("friends").value;
// function displaySelectedValue() {
//   document.getElementById("selected").innerText = `Selected Value: ${selectedValue}`;
// }
const today = new Date();
function printTT(){
  const day = today.getDay();
  switch (day){
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
       return 'Friday';
    case 6:
      return 'Saturday';
    default:
        return 'Error! Invalid Day of the Week';
  }

  switch(selectedValue){
    case 'Kiron':
  }

}