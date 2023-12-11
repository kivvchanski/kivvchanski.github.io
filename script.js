//show theater address and phone number by selecting the theater name in theater.html
function ShowTheater() {
  let index = document.getElementsByName("findTheater")[0].selectedIndex;
  // console.log(index);
  let address = document.getElementById("address");
  let tel = document.getElementById("tel");

  let addr = ["", "4700 Kingsway, Burnaby, BC, V5H 4M1", "440 Cambie St., Vancouver, BC, V5Z 2W8", "170 Schoolhouse Street, Coquitlam, BC, V3K 4X9", "3106 1920 Willingdon Ave, Burnaby, BC, V5C 0K3"];

  let telArr = ["", "(604) 435 - 7474 ", "(604) 734 - 7469 ", "(604) 523 - 2911 ", "(604) 245 - 8983 "];

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
let imgArr = ["images/EternalsBanner.jpg", "images/Dune2020-logo-header.jpg", "images/EncantoBanner.jpeg", "images/spiderManBanner.png"]

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
      banners.src = "images/EternalsBanner.jpg";
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


//plug-in IMDB script used on movie info page
((d, s, id) => {
  var js, stags = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; } js = d.createElement(s); js.id = id; js.src = "https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js";
  stags.parentNode.insertBefore(js, stags);
})(document, "script", "imdb-rating-api");


//check if the movie is available right now
function isAvailable() {
  let mName = document.getElementById("mName");
  let indexOfMoive = mName.selectedIndex;
  // let options = mName.selectedOptions;
  if (indexOfMoive == 4 || indexOfMoive == 5) {
    alert("This movie is not released yet. Please purchase the tickets 7 days before the released date.")
    mName.selectedIndex = 0;
  }
}

//enable the personal information form after movie options has been verified
function availabilityBtn() {
  let indexOfMoive = document.getElementById("mName").selectedIndex;
  let indexOfTheater = document.getElementById("mTheater").selectedIndex;
  let indexOfDate = document.getElementById("mDate").selectedIndex;

  if (indexOfMoive != 0 && indexOfTheater != 0 && indexOfDate != 0) {
    alert("Seats available!");
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("schedule").disabled = false;
    document.getElementById("ticketNum").disabled = false;
    document.getElementById("2d").disabled = false;
    document.getElementById("3d").disabled = false;
    document.getElementById("yes").disabled = false;
    document.getElementById("no").disabled = false;
    document.getElementById("submit").disabled = false;
  }
}

// show total amount and thank you message using altert
function submitFuc() {

  let email = document.getElementById("email");
  let ticketNum = document.getElementById("ticketNum").value;
  // console.log(ticketNum);
  let price1 = document.getElementsByName("showroom")[0];
  let price2 = document.getElementsByName("showroom")[1];
  const tax = 0.12;
  if (price1.checked) {
    alert("Thank you for purchasing!" + "\r\n" + "The total amount is $" + (ticketNum * price1.value * (1 + tax)).toFixed(2) + " (tax inclueded)" + "\r\n" + "We will send email to your email address " + email.value + " for your confirmation.");
    // console.log((ticketNum * price1.value * (1 + tax)).toFixed(2))
  }
  else if (price2.checked) {
    // console.log((ticketNum * price2.value * (1 + tax)).toFixed(2))
    alert("Thank you for purchasing!" + "\r\n" + "The total amount is $" + (ticketNum * price2.value * (1 + tax)).toFixed(2) + " (tax inclueded)" + "\r\n" + "We will send email to your email address " + email.value + " for your confirmation.");
  }

}

