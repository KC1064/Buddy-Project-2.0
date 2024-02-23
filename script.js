const kiron = [
  ["DBMS", "Operating System", "Economics", "DAA", "Free", "Math IV", "Free", "AJP/AI"],
  ["Free", "DBMS", "DBMS Lab", "DBMS Lab", "Free", "Math IV", "Free", "Free"],
  ["Operating System", "AJP/AI", "DBMS", "Math IV", "Free", "DAA", "DBMS Lab", "DBMS Lab"],
  ["Free", "Operating System", "Economics", "Free", "Free", "DAA", "DAA Lab", "DAA Lab"],
  ["Operating System Lab", "Operating System Lab", "DBMS", "Free", "Math IV", "DAA", "Economics", "AJP/AI"]
];

const mrinal = [
  ["DBMS", "Operating System", "Economics", "DAA", "Free", "Math IV", "Free", "AJP/AI"],
  ["Free", "DBMS", "DBMS Lab", "DBMS Lab", "Free", "Math IV", "Free", "Free"],
  ["Operating System", "AJP/AI", "DBMS", "Math IV", "Free", "DAA", "DBMS Lab", "DBMS Lab"],
  ["Free", "Operating System", "Economics", "Free", "Free", "DAA", "DAA Lab", "DAA Lab"],
  ["Operating System Lab", "Operating System Lab", "DBMS", "Free", "Math IV", "DAA", "Economics", "AJP/AI"]
];

function displaySelectedValue() {
  const selectedValue = document.getElementById("friends").value;
  document.getElementById("selected").innerText = `Selected Value: ${selectedValue}`;
}
