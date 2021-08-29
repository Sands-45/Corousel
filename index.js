let next = document.getElementById("next");
let previous = document.getElementById("previous");
let coroImages = document.getElementsByClassName("corousel_Img");
let positioLog = document.getElementsByClassName("counter");
let clickCount = 0;

next.onclick = () => {
  if (clickCount < 3) {
    clickCount += 1;
  } else if (clickCount == 3) {
    clickCount -= 3;
  }
  for (let i = 0; i < coroImages.length; i++) {
    coroImages[i].classList.remove("active");
  }
  for (let i = 0; i < coroImages.length; i++) {
    coroImages[clickCount].classList.add("active");
  }
  //corousel Position Count
  for (let i = 0; i < positioLog.length; i++) {
    positioLog[i].innerHTML = "○";
  }
  for (let i = 0; i < positioLog.length; i++) {
    positioLog[clickCount].innerHTML = "●";
  }
};

previous.onclick = () => {
  if (clickCount > 0) {
    clickCount -= 1;
  } else if (clickCount == 0) {
    clickCount += 3;
  }
  for (let i = 0; i < coroImages.length; i++) {
    coroImages[i].classList.remove("active");
  }
  for (let i = 0; i < coroImages.length; i++) {
    coroImages[clickCount].classList.add("active");
  }
  //corousel Position Count
  for (let i = 0; i < positioLog.length; i++) {
    positioLog[i].innerHTML = "○";
  }
  for (let i = 0; i < positioLog.length; i++) {
    positioLog[clickCount].innerHTML = "●";
  }
};

// //Auto Slide Show
setInterval(() => {
  switch (clickCount) {
    case 0:
      clickCount += 1;
      break;
    case 1:
      clickCount += 1;
      break;
    case 2:
      clickCount += 1;
      break;
    case 3:
      clickCount = 0;
      break;
  }
  for (let i = 0; i < coroImages.length; i++) {
    coroImages[i].classList.remove("active");
  }
  for (let i = 0; i < coroImages.length; i++) {
    coroImages[clickCount].classList.add("active");
  }
  //corousel Position Count
  for (let i = 0; i < positioLog.length; i++) {
    positioLog[i].innerHTML = "○";
  }
  for (let i = 0; i < positioLog.length; i++) {
    positioLog[clickCount].innerHTML = "●";
  }
}, 6000);
