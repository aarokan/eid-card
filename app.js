// add event listener to the thumbnails
const thumbCard1 = document.getElementById("thumbCard1");
const thumbCard2 = document.getElementById("thumbCard2");;
thumbCard1.addEventListener("click", prevCard1);
thumbCard2.addEventListener("click", prevCard2);


function prevCard1() {
  // get the name from the input
  const inputName = document.getElementById("inputName").value;
  console.log(inputName);

  // preview the image
  const prevImg = document.getElementById("prevImg");
  prevImg.src = "images/card1.jpg"
}


function prevCard2() {
  // get the name from the input
  const inputName = document.getElementById("inputName").value;
  console.log(inputName);

  // preview the image
  const prevImg = document.getElementById("prevImg");
  prevImg.src = "images/card2.jpg"
}


const downloadImg = document.getElementById("downloadImg");
