

$(document).ready(function () {
  
//   let myJSON = [
//     {
//         "name": "Gummies",
//         "brand": "Haribo",
//         "quantity": 5
//     },
//     {
//         "name": "Chocolate",
//         "brand": "Hershey's",
//         "quantity": 3
//     },
//     {
//         "name": "Licorice",
//         "brand": "Twizzlers",
//         "quantity": 4
//     },
//     {
//         "name": "Truffles",
//         "brand": "Godiva",
//         "quantity": 0
//     }
// ];
$.getJSON('https://codepen.io/eclairereese/pen/OXRjWV.js')
.done(function(response){
      console.log("response",response);
   
    var candyList = '<ul class="candies">';
    $.each(response, function(index, candy) {
      console.log(candy);
    
      if (candy.quantity > 0) {
        candyList += '<li class="item available">';
        // console.log(candyList);
      } else {
        candyList += '<li class="item sold-out">'
      }
      candyList += candy.name +'<br>'+ '<br>' + "Brand: " + candy.brand +'<br>'+ '<br>'+"Quntity"+candy.quantity;
      candyList += '<button class="btn btn-default">Buy</button>';
     
      candyList += '</li>';
    });
    candyList += "</ul>";
    $('#candylisting').html(candyList);
   
  });
  
});
