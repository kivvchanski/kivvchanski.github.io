//show theater address and phone number by selecting the theater name in theater.html
function ShowTheater() {
  let index = document.getElementsByName("findTheater")[0].selectedIndex;
  // console.log(index);
  let address = document.getElementById("address");
  let tel = document.getElementById("tel");

  let addr = ["", "adress1", "adress2", "adress3", "adress4"];

  let telArr = ["", "number films1", "number films2", "number films3 ", "number films4 "];

  if (index == 0) {
    address.innerHTML = "";
    tel.innerHTML = "";
  }
  else {
    address.innerHTML = "Address:  " + addr[index];
    tel.innerHTML = "Tel:  " + telArr[index];
  }

}

//generate function to repeatedly change the banner
let banners = document.getElementById("banner");
let imgArr = ["images/kartinka1.jpg", "images/kartinka2.jpg", "images/kartinka3.jpeg", "images/kartinka4.jpg"]

let currentImg = 0;
function changeBanner() {
  banners.src = imgArr[currentImg];
  if (currentImg == 3) {
    currentImg = 0;
  }
  else {
    currentImg++;
  }
}
let stop;
stop = setInterval(changeBanner, 5000);

//change the banner poster by clicking the buttons below


function changeImg(num) {

  clearTimeout(stop);

  switch (num) {
    case (1):
      banners.src = imgArr[0];
      break;
    case (2):
      banners.src = imgArr[1];
      break;
    case (3):
      banners.src = imgArr[2];
      break;
    case (4):
      banners.src = imgArr[3];
  }
  setInterval(changeBanner, 10000);

}
window.addEventListener("load", function(){
  var loader = document.getElementById("loader");

  // Hide loader
  loader.style.display = "none";
});

// Simulate loading delay (for testing purposes)
setTimeout(function(){
  var loader = document.getElementById("loader");

  loader.style.display = "none";
}, 30000);

//plug-in IMDB script used on movie info page
((d, s, id) => {
  var js, stags = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; } js = d.createElement(s); js.id = id; js.src = "https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js";
  stags.parentNode.insertBefore(js, stags);
})(document, "script", "imdb-rating-api");


//check if the movie is available right now
function isAvailable() {
  let mName = document.getElementById("mName");
}

//enable the personal information form after movie options has been verified
function availabilityBtn() {
  let indexOfMoive = document.getElementById("mName").selectedIndex;

  if (indexOfMoive != 0) {
    alert("Напишите отзыв!");
    document.getElementById("fname").disabled = false;
    document.getElementById("2d").disabled = false;
    document.getElementById("3d").disabled = false;
    document.getElementById("no").disabled = false;
    document.getElementById("yes").disabled = false;
    document.getElementById("submit").disabled = false;
  }
}

// show total amount and thank you message using altert
function submitFuc() {
 alert("Спасибо за ваш отзыв!");
 open("index.html");
}


