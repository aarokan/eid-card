// add event listener to the thumbnails
const thumbCard1 = document.getElementById("thumbCard1");
const thumbCard2 = document.getElementById("thumbCard2");;
thumbCard1.addEventListener("click", prevCard1);
thumbCard2.addEventListener("click", prevCard2);


function prevCard1() {
  // get the name from the input
  const inputName = document.getElementById("inputName").value;

  const canvas = document.getElementById("result");
  canvas.height = canvas.width;
  const ctx = canvas.getContext("2d");

  // preview the image using the canvas
  let imgObj = new Image();
  /* set crossOrigin because src is from different 
  origin, then the canvas is deemed as being tainted */
  imgObj.crossOrigin = "anonymous";
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

  // enable the download button
  const downloadBtn = document.getElementById("downloadImg");
  downloadBtn.disabled = false;
}


function prevCard2() {
  // get the name from the input
  const inputName = document.getElementById("inputName").value;

  const canvas = document.getElementById("result");
  canvas.height = canvas.width;
  const ctx = canvas.getContext("2d");

  // preview the image using the canvas
  let imgObj = new Image();
  /* set crossOrigin because src is from different 
  origin, then the canvas is deemed as being tainted */
  imgObj.crossOrigin = "anonymous";
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

  // enable the download button
  const downloadBtn = document.getElementById("downloadImg");
  downloadBtn.disabled = false;
}


// download the image by the button
const downloadImg = document.getElementById("downloadImg");
downloadImg.addEventListener("click", function(e) {
  e.preventDefault();
  const canvas = document.getElementById("result");
  
  // IE support - msSaveBlob method is exclusive to IE/Edge
  if  (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), "EidCard.png");
  } else {
    // Chrome/Firefox..etc support
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "EidCard.png";
    a.click();
    document.body.removeChild(a);
  }

});