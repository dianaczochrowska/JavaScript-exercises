//change photo 
function changePhoto () {
  var slideIndex = 1;
  var slideID = [1, 2, 3];
  let button1 = document.getElementById("change-btn-left");
  let button2 = document.getElementById("change-btn-right");

      button1.addEventListener("click", function(){
      deleteIndex();})
      button2.addEventListener("click", function(){
      addIndex();})

      function addIndex(){
      slideIndex+=1
      drawImages(slideIndex)
      }
      function deleteIndex(){
      slideIndex-=1;
      drawImages(slideIndex)
      }

      drawImages(slideIndex);

      function drawImages(n) {
      var i;
      if (n > slideID.length) {slideIndex = 1;}
      if (n < 1) {slideIndex = slideID.length;}

      for (i = 1; i < slideID.length+1; i++) {
      var id1 = "min" + i;
      document.getElementById(i).style.display = "none";
      document.getElementById(id1).style.border = "1px solid rgb(119, 119, 119)";
      document.getElementById(id1).style.borderRadius = "5px";
      }
      var id2 = "min" + slideIndex;
      document.getElementById(slideIndex).style.display = "block"
      document.getElementById(id2).style.border = "5px solid rgb(119, 119, 119)";
      document.getElementById(id2).style.borderRadius = "5px";
  }
}
//changing photo browsing items
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var largephoto = document.getElementsByClassName("nicephoto");
  if (n > largephoto.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = largephoto.length} ;
  for (i = 0; i < largephoto.length; i++) {
     largephoto[i].style.display = "none";  
  }
  largephoto[slideIndex-1].style.display = "block";  
  var j;
  var smallphoto = document.getElementsByClassName("small-pic-nice")
  if (n > smallphoto.length) {slideIndex = 1}
  if (n < 1) {slideIndex = smallphoto.length} ;
  for (j = 0; j < smallphoto.length; j++) {
      smallphoto[j].style.border = "1px solid rgb(119, 119, 119)";
      smallphoto[slideIndex-1].style.border = "5px solid rgb(119, 119, 119)";
      smallphoto[slideIndex-1].style.borderRadius = "5px";
  }
}

var slideIndex = 1;
showDivscool(slideIndex);

function plusDivscool(m) {
  showDivscool(slideIndex += m);
}

function showDivscool(m) {
  var k;
  var largephotocool = document.getElementsByClassName("coolphoto");
  if (m > largephotocool.length) {slideIndex = 1}    
  if (m < 1) {slideIndex = largephotocool.length} ;
  for (k = 0; k < largephotocool.length; k++) {
    largephotocool[k].style.display = "none";  
  }
  largephotocool[slideIndex-1].style.display = "block";  
  var l;
  var smallphotocool = document.getElementsByClassName("small-pic-cool")
  if (m > smallphotocool.length) {slideIndex = 1}
  if (m < 1) {slideIndex = smallphotocool.length} ;
  for (l = 0; l < smallphotocool.length; l++) {
    smallphotocool[l].style.border = "1px solid rgb(119, 119, 119)";
    smallphotocool[slideIndex-1].style.border = "5px solid rgb(119, 119, 119)";
    smallphotocool[slideIndex-1].style.borderRadius = "5px";
  }
}

var slideIndex = 1;
showDivsawesome(slideIndex);

function plusDivsawesome(p) {
  showDivsawesome(slideIndex += p);
}

function showDivsawesome(p) {
  var o;
  var largephotoawesome = document.getElementsByClassName("awesomephoto");
  if (p > largephotoawesome.length) {slideIndex = 1}    
  if (p < 1) {slideIndex = largephotoawesome.length} ;
  for (o = 0; o < largephotoawesome.length; o++) {
    largephotoawesome[o].style.display = "none";  
  }
  largephotoawesome[slideIndex-1].style.display = "block";  
  var r;
  var smallphotoawesome = document.getElementsByClassName("small-pic-awesome")
  if (p > smallphotoawesome.length) {slideIndex = 1}
  if (p < 1) {slideIndex = smallphotoawesome.length} ;
  for (r = 0; r < smallphotoawesome.length; r++) {
    smallphotoawesome[r].style.border = "1px solid rgb(119, 119, 119)";
    smallphotoawesome[slideIndex-1].style.border = "5px solid rgb(119, 119, 119)";
    smallphotoawesome[slideIndex-1].style.borderRadius = "5px";
  }
}

var slideIndex = 1;
showDivsperfect(slideIndex);

function plusDivsperfect(s) {
  showDivsperfect(slideIndex += s);
}

function showDivsperfect(s) {
  var u;
  var largephotoperfect = document.getElementsByClassName("perfectphoto");
  if (s > largephotoperfect.length) {slideIndex = 1}    
  if (s < 1) {slideIndex = largephotoperfect.length} ;
  for (u = 0; u < largephotoperfect.length; u++) {
    largephotoperfect[u].style.display = "none";  
  }
  largephotoperfect[slideIndex-1].style.display = "block";  
  var t;
  var smallphotoperfect = document.getElementsByClassName("small-pic-perfect")
  if (s > smallphotoperfect.length) {slideIndex = 1}
  if (s < 1) {slideIndex = smallphotoperfect.length} ;
  for (t = 0; t < smallphotoperfect.length; t++) {
    smallphotoperfect[t].style.border = "1px solid rgb(119, 119, 119)";
    smallphotoperfect[slideIndex-1].style.border = "5px solid rgb(119, 119, 119)";
    smallphotoperfect[slideIndex-1].style.borderRadius = "5px";
  }
}

//showing products
function nice() {
  var items = document.getElementsByClassName("items");
  for(i=0; i<5; i++) {
    items[i].style.display = "none";
  }
  var nice = document.getElementById("niceJeans");
  nice.style.display = "flex";
}

function cool() {
  var items = document.getElementsByClassName("items");
  for(i=0; i<5; i++) {
    items[i].style.display = "none";
  }
  var nice = document.getElementById("coolJeans");
  nice.style.display = "flex";
}

function awesome() {
  var items = document.getElementsByClassName("items");
  for(i=0; i<5; i++) {
    items[i].style.display = "none";
  }
  var nice = document.getElementById("awesomeJeans");
  nice.style.display = "flex";
}

function perfect() {
  var items = document.getElementsByClassName("items");
  for(i=0; i<5; i++) {
    items[i].style.display = "none";
  }
  var nice = document.getElementById("perfectJeans");
  nice.style.display = "flex";
}



