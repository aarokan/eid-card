// add event listener to the thumbnails
const thumbCard1 = document.getElementById("thumbCard1");
const thumbCard2 = document.getElementById("thumbCard2");;
thumbCard1.addEventListener("click", prevCard1);
thumbCard2.addEventListener("click", prevCard2);


// const canvas = document.getElementById("result");
// canvas.height = canvas.width;
// const ctx = canvas.getContext("2d");

function prevCard1() {
  // get the name from the input
  const inputName = document.getElementById("inputName").value;
  console.log(inputName);

  const canvas = document.getElementById("result");
  canvas.height = canvas.width;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.font = "80px Helvetica";
  ctx.fillText(inputName, 200, 70);
  
  ctx.fillText("Hello World", 600, 600);



  // preview the image
  // const prevImg = document.getElementById("prevImg");
  // prevImg.src = "images/card1.jpg"

  // preview the image using the canvas
  let imgObj = new Image();
  // wait for the Image to load
  imgObj.onload = function() {
    let w = canvas.width;
    let nw = imgObj.naturalWidth;
    let nh = imgObj.naturalHeight;
    let aspect = nw / nh;
    let h = w /aspect;
    canvas.height = h;
    ctx.drawImage(imgObj, 0, 0, w, h);
  };

  imgObj.src = "images/card1.jpg";

  // write text on the image
  // ctx.fillStyle = "black";
  // ctx.font = "80px Helvetica";
  // ctx.fillText(inputName, 200, 70);
  
  // ctx.fillText("Hello World", 600, 600);
}


function prevCard2() {
  // get the name from the input
  const inputName = document.getElementById("inputName").value;
  console.log(inputName);


  const canvas = document.getElementById("result");
  canvas.height = canvas.width;
  const ctx = canvas.getContext("2d");



  // preview the image
  // const prevImg = document.getElementById("prevImg");
  // prevImg.src = "images/card2.jpg"

  // preview the image using the canvas
  let imgObj = new Image();
  // wait for the Image to load
  imgObj.onload = function() {
    let w = canvas.width;
    let nw = imgObj.naturalWidth;
    let nh = imgObj.naturalHeight;
    let aspect = nw / nh;
    let h = canvas.width /aspect;
    canvas.height = h;
    ctx.drawImage(imgObj, 0, 0, w, h);
    ctx.fillStyle = "#a50d12";
    ctx.font = "250px AlArabiyaRegular";
    ctx.textAlign = "center";
    ctx.fillText(inputName, (nw/1.55), (nh/1.23));
  };

  imgObj.src = "images/card2.jpg";

}


const downloadImg = document.getElementById("downloadImg");
