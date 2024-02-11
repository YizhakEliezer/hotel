// var isHidden = false; // Variable to keep track of the visibility state

// function moveAndDisappear() {
//     var iconHotel = document.getElementById('iconHotel');
//     var homePageText = document.getElementById('homePageText');
//     var movingDiv = document.querySelector('.body');
//     var OurServicesPage = document.getElementById('OurServicesPage');
//     var OurServicesItemsRoom = document.getElementById('OurServicesItemsRoom');
//     var OurServicesItemsSpa = document.getElementById('OurServicesItemsSpa');
//     var OurServicesItemsPool = document.getElementById('OurServicesItemsPool');
//     var Contact = document.getElementById('Contact');

//     var room = document.getElementById('room');
//     var spa = document.getElementById('spa');
//     var pool = document.getElementById('pool');

   

//     if (!isHidden) { // If element is currently visible
//         iconHotel.style.display = "none";
//         homePageText.style.display = "none";
//         setTimeout(function () {
//             movingDiv.style.backgroundColor = "#080808";
//         }, 300);
//         movingDiv.style.backgroundColor = "#bbc9cc";
//         homePageText.style.display = "none";
//         iconHotel.style.display = "none";

//         pool.style.display = "block";
//         spa.style.display = "block";
//         room.style.display = "block";
//         OurServicesPage.style.display = "block";
//         OurServicesItemsRoom.style.display = "block";
//         OurServicesItemsPool.style.display = "block";
//         OurServicesItemsSpa.style.display = "block";

//         isHidden = true; // Update the state to hidden
//     } else {
//         setTimeout(function () {
//             movingDiv.style.backgroundColor = "#080808";
//         }, 300);
//         movingDiv.style.backgroundColor = "#bbc9cc";
//         // setTimeout(function () {
        
//         // }, 400);
//         iconHotel.style.display = "block";
//         homePageText.style.display = "block";
//         pool.style.display = "none";
//         spa.style.display = "none";
//         room.style.display = "none";
//         OurServicesPage.style.display = "none";
//         OurServicesItemsRoom.style.display = "none";
//         OurServicesItemsPool.style.display = "none";
//         OurServicesItemsSpa.style.display = "none";
//         isHidden = false; // Update the state to visible
//     }


   
 
// }




// document.addEventListener("DOMContentLoaded", function () {

//     var movingDiv = document.getElementById('homePageText');
//     var position = 300;
//     var direction = 1; // 1 for moving right, -1 for moving left
//     var distance = 2; // Adjust the distance to move

//     var moveInterval = setInterval(function () {
//         position += direction * distance;

//         movingDiv.style.left = position  + 'px';

//         // Check if the element reaches the right or left boundary
//         if (position >= window.innerWidth - movingDiv.offsetWidth - 400 || position <= 0) {
//             direction *= -1; // Change direction
//         }
//     }, 100);

// });




// document.addEventListener('DOMContentLoaded', function () {
//     var ContactUsDiv = document.getElementById('ContactUsDiv');
//     var ContactUsDivP = ContactUsDiv.querySelectorAll('p');
//     ContactUsDiv.style.display = "none";
//     ContactUsDivP.style.display = "none";
// });








// document.addEventListener('DOMContentLoaded', function () {
//     const arrow = document.getElementById('arrow');
//     const body = document.body;

//     arrow.addEventListener('click', function () {
//         body.classList.toggle('OurServicesPage');
//         body.classList.toggle('ContactUs');
//      }
     

     
//   )};




//     const arrowLeft = document.getElementById('arrowLeft');
//     const body1 = document.body;

//     arrowLeft.addEventListener('click', function () {
//         body1.classList.toggle('OurServicesPage');
//         body1.classList.toggle('ContactUs');
     
//     });
// });






// document.addEventListener('DOMContentLoaded', function () {
//     var ContactUsDiv = document.getElementById('ContactUsDiv');
//     var ContactUsDivP = ContactUsDiv.querySelectorAll('p');
//     ContactUsDiv.style.display = "none";
//     ContactUsDivP.style.display = "none";
// });







document.addEventListener('DOMContentLoaded', function () {

    var iconHotel = document.getElementById('iconHotel');
    var homePageText = document.getElementById('homePageText');
    var movingDiv = document.querySelector('.body');
    var OurServicesPage = document.getElementById('OurServicesPage');
    var OurServicesItemsRoom = document.getElementById('OurServicesItemsRoom');
    var OurServicesItemsSpa = document.getElementById('OurServicesItemsSpa');
    var OurServicesItemsPool = document.getElementById('OurServicesItemsPool');
    var Contact = document.getElementById('Contact');
    var ContactUsDiv = document.getElementById('ContactUsDiv');
    var ContactUsDivP = ContactUsDiv.querySelectorAll('p');
  
    var room = document.getElementById('room');
    var spa = document.getElementById('spa');
    var pool = document.getElementById('pool');


   


function ServicesPage() {
    console.log("Function homePage is called");
    iconHotel.style.display = "none";
    homePageText.style.display = "none";
    setTimeout(function () {
        movingDiv.style.backgroundColor = "#080808";
    }, 300);
    movingDiv.style.backgroundColor = "#bbc9cc";
    homePageText.style.display = "none";
    iconHotel.style.display = "none";

    pool.style.display = "none";
    spa.style.display = "none";
    room.style.display = "none";
    OurServicesPage.style.display = "block";
    OurServicesItemsRoom.style.display = "block";
    OurServicesItemsPool.style.display = "block";
    OurServicesItemsSpa.style.display = "block";


    Contact.style.display = "none";
    ContactUsDiv.style.display = "none";
    ContactUsDivP.style.display = "none";
  }

  function ContactUs() {
    console.log("Function ServicesPage is called");
    iconHotel.style.display = "none";
    homePageText.style.display = "none";
    setTimeout(function () {
        movingDiv.style.backgroundColor = "#080808";
    }, 300);
    movingDiv.style.backgroundColor = "#bbc9cc";
    homePageText.style.display = "none";
    iconHotel.style.display = "none";
    pool.style.display = "none";
    spa.style.display = "none";
    room.style.display = "none";
    OurServicesPage.style.display = "none";
    OurServicesItemsRoom.style.display = "none";
    OurServicesItemsPool.style.display = "none";
    OurServicesItemsSpa.style.display = "none";
    iconHotel.style.display = "none";
    homePageText.style.display = "none";
    pool.style.display = "none";
    spa.style.display = "none";
    room.style.display = "none";
    OurServicesPage.style.display = "none";
    OurServicesItemsRoom.style.display = "none";
    OurServicesItemsPool.style.display = "none";
    OurServicesItemsSpa.style.display = "none";
    Contact.style.display = "block";
    ContactUsDiv.style.display = "block";
    ContactUsDivP.style.display = "block";

  }

  function homePage() {
    console.log("Function ContactUs is called");
    setTimeout(function () {
        movingDiv.style.backgroundColor = "#080808";
    }, 300);
    movingDiv.style.backgroundColor = "#bbc9cc";
    iconHotel.style.display = "block";
    homePageText.style.display = "block";
    pool.style.display = "none";
    spa.style.display = "none";
    room.style.display = "none";
    OurServicesPage.style.display = "none";
    OurServicesItemsRoom.style.display = "none";
    OurServicesItemsPool.style.display = "none";
    OurServicesItemsSpa.style.display = "none";
    Contact.style.display = "none";
    ContactUsDiv.style.display = "none";
    ContactUsDivP.style.display = "none";
  }



  let pressCount = 0;


  function switchFunction() {
    pressCount++; // Increment the counter on each button press

    switch (pressCount % 3) {
      case 1:
        ServicesPage();
        break;
      case 2:
        ContactUs();
        break;
      case 0:
        homePage();
        break;
      default:
        console.error("Unexpected press count");
    }
  }

 
  document.getElementById('arrow').addEventListener('click', switchFunction);
  document.getElementById('arrowLeft').addEventListener('click', switchFunction);

});