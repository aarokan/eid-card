// add event listener to the thumbnails
const thumbCard1 = document.getElementById("thumbCard1");
const thumbCard2 = document.getElementById("thumbCard2");;
thumbCard1.addEventListener("click", prevCard1);
thumbCard2.addEventListener("click", prevCard2);


function prevCard1() {
  // get the name from the input
  const inputName = document.getElementById("inputName").value;
  console.log(inputName);

  const canvas = document.getElementById("result");
  canvas.height = canvas.width;
  const ctx = canvas.getContext("2d");

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

    ctx.fillStyle = "#fff";
    ctx.font = "250px AlArabiyaRegular";
    ctx.textAlign = "center";
    ctx.fillText(inputName, (nw/2), (nh/1.3));
  };

  imgObj.src = "images/card1.jpg";
}


function prevCard2() {
  // get the name from the input
  const inputName = document.getElementById("inputName").value;
  console.log(inputName);

  const canvas = document.getElementById("result");
  canvas.height = canvas.width;
  const ctx = canvas.getContext("2d");

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
