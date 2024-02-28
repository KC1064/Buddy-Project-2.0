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

var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array,
    colors = ['red','#f57900','yellow','#ce5c00','#5c3566'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function create() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0,0,w,h);
   canvas.addEventListener('mousemove', MouseMove, false);
  for(var i = 0; i < arc; i++) {
    var li = parts[i];
    var distanceFactor = DistanceBetween( mouse, parts[i] );
    var distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
    ctx.beginPath();
    ctx.arc(li.x,li.y,li.size*distanceFactor,0,Math.PI*2,false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle=li.c;
    if(i%2==0)
      ctx.stroke();
    else
      ctx.fill();
    
    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);
    
    if(li.x > w){
       li.x = 0; 
    }
    if(li.y > h) {
       li.y = 0; 
    }
    if(li.x < 0) {
       li.x = w; 
    }
    if(li.y < 0) {
       li.y = h; 
    }
   
     
  }
  if(time < speed) {
    time++;
  }
  setTimeout(particles,1000/rate);
}
function MouseMove(e) {
   mouse.x = e.layerX;
   mouse.y = e.layerY;

   //context.fillRect(e.layerX, e.layerY, 5, 5);
   //Draw( e.layerX, e.layerY );
}
function DistanceBetween(p1,p2) {
   var dx = p2.x-p1.x;
   var dy = p2.y-p1.y;
   return Math.sqrt(dx*dx + dy*dy);
}
create();
particles();

function displaySelectedValue() {
  const selectedFriend = document.getElementById("friends").value;
  const timetable = timetableData[selectedFriend];
  const selectedDiv = document.querySelector("#selected");
  selectedDiv.style.visibility = 'visible';
  const date = new Date();
  const day = date.getDay();
  // const day = 0;
  if (day === 0 || day ===6){
    alert("Today is holiday");
    selectedDiv.style.visibility = 'hidden';
    
  }
  else{
    for (let i = 0; i < 8; i++) {
      document.querySelector(`.time${i + 1}`).textContent = timetable[day-1][i];
    }
  }
}

function findFreeSlots() {
  const selectedFriend = document.getElementById("friends").value;
  const timetable = timetableData[selectedFriend];
  const date = new Date();
  const day = date.getDay();
  const options = { timeZone: 'Asia/Kolkata' };
  const hours = date.toLocaleString('en-US', { ...options, hour: 'numeric', hour12: false });
  const minutes = date.toLocaleString('en-US', { ...options, minute: 'numeric' });
  const time = parseInt(hours) * 60 + parseInt(minutes);
  let i = -1;
  let j = -1;

  switch (day) {
    case 1:
      i = 0;
      break;
    case 2:
      i = 1;
      break;
    case 3:
      i = 2;
      break;
    case 4:
      i = 3;
      break;
    case 5:
      i = 4;
      break;
  }

  if (time >= 480 && time <= 535) {
    j = 0;
  } else if (time > 535 && time <= 590) {
    j = 1;
  } else if (time > 590 && time <= 645) {
    j = 2;
  } else if (time > 645 && time <= 700) {
    j = 3;
  } else if (time > 700 && time <= 755) {
    j = 4;
  } else if (time > 755 && time <= 810) {
    j = 5;
  } else if (time > 810 && time <= 865) {
    j = 6;
  } else if (time > 865 && time <= 920) {
    j = 7;
  } else {
    alert("Outside class hours");
  }

  return [i, j];
}


function displayFreeFriends() {
  const [i, j] = findFreeSlots();
  const selectedFriend = document.getElementById("friends").value;
  const timetable = timetableData[selectedFriend];

  const loadingOverlay = document.getElementById("loading-overlay");
  const imgContainer = document.querySelector(".image");
  const images = document.querySelectorAll(".profile");

  loadingOverlay.style.display = 'flex';

  // Hide all images initially
  images.forEach(img => {
    img.style.visibility = "hidden";
  });

  setTimeout(() => {
    for (const friend in timetableData) {
      const friendId = friend.toLowerCase();
      const img = document.getElementById(friendId);
      if (timetableData[friend][i][j] === "Free" && friendId !== selectedFriend.toLowerCase()) {
        img.style.filter = 'grayscale(0%)';
      } else {
        img.style.filter = 'grayscale(100%)';
      }
    }
    
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
      imgContainer.style.visibility = "visible";
      images.forEach(img => {
        img.style.visibility = "visible";
      });
    }, 1000); 
  });
}

const button = document.getElementById("button");
button.addEventListener("click", displayFreeFriends);
