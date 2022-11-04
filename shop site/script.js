window.onload = function() {
  signUpPopup();
  chatPopup();
  expandItem();
  expandItemNice();
  expandItemCool();
  expandItemAwesome()
  expandItemPerfect()
  changePhoto();
  ready();  
  openCart();

}
//categories
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("open");
}

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open');
      }
    }
  }
});

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("open2");
}

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var j;
    for (j = 0; j < dropdowns2.length; j++) {
      var openDropdown2 = dropdowns2[j];
      if (openDropdown2.classList.contains('open2')) {
        openDropdown2.classList.remove('open2');
      }
    }
  }
});

//pops up
function signUpPopup() {
  var signUp = document.getElementById("signupbtn");
  signUp.addEventListener("click", () => {
      var signUpPopUp = document.getElementById("signupPopup");
      signUpPopUp.ariaHidden = "false";
      signUpPopUp.removeAttribute("hidden");
  })

  var closeIcon = document.getElementById("signup-close-icon-img");
  closeIcon.addEventListener("click", () => {
      var signUpPopUp = document.getElementById("signupPopup");
      signUpPopUp.ariaHidden = "true";
      signUpPopUp.setAttribute("hidden", "");
  })
}

function chatPopup() {
  var chat = document.getElementById("chat-icon");
  chat.addEventListener("click", () => {
      var chatbox = document.getElementById("chat-popup");
      chatbox.ariaHidden = "false";
      chatbox.removeAttribute("hidden");
  })

  var chatCloseIcon = document.getElementById("chat-close-icon-img");
  chatCloseIcon.addEventListener("click", () => {
      var chatbox = document.getElementById("chat-popup");
      chatbox.ariaHidden = "true";
      chatbox.setAttribute("hidden", "");
  })

  var submit = document.getElementById("chat-submit");
  submit.addEventListener("click", () => {
      var chatbox = document.getElementById("chat-popup");
      chatbox.ariaHidden = "true";
      chatbox.setAttribute("hidden", "");
      var confirmation = document.getElementById("chat-confirmation");
      confirmation.ariaHidden = "false";
      confirmation.removeAttribute("hidden");
  })

  var confirmationCloseIcon = document.getElementById("confirmation-close-icon-img");
  confirmationCloseIcon.addEventListener("click", () => {
      var confirmation = document.getElementById("chat-confirmation");
      confirmation.ariaHidden = "true";
      confirmation.setAttribute("hidden", "");
  })
}

//expand item
function expandItem() {
  var expandbtn = document.getElementById("expand-btn");
  expandbtn.addEventListener("click", () => {
    var largeImg = document.getElementById("expanded-img");
    largeImg.ariaHidden = "false";
    largeImg.removeAttribute("hidden")
  })

  var itemCloseIcon = document.getElementById("item-close-icon-img");
  itemCloseIcon.addEventListener("click", () => {
      var largeImg = document.getElementById("expanded-img");
      largeImg.ariaHidden = "true";
      largeImg.setAttribute("hidden", "");
  })
}
function expandItemNice() {
  var expandbtn = document.getElementById("expand-btn-nice");
  expandbtn.addEventListener("click", () => {
    var largeImg = document.getElementById("expanded-img-nice");
    largeImg.ariaHidden = "false";
    largeImg.removeAttribute("hidden")
  })

  var itemCloseIcon = document.getElementById("item-close-icon-img-nice");
  itemCloseIcon.addEventListener("click", () => {
      var largeImg = document.getElementById("expanded-img-nice");
      largeImg.ariaHidden = "true";
      largeImg.setAttribute("hidden", "");
  })
}

function expandItemCool() {
  var expandbtn = document.getElementById("expand-btn-cool");
  expandbtn.addEventListener("click", () => {
    var largeImg = document.getElementById("cool-exp");
    largeImg.ariaHidden = "false";
    largeImg.removeAttribute("hidden")
  })

  var itemCloseIcon = document.getElementById("item-close-icon-img-cool");
  itemCloseIcon.addEventListener("click", () => {
      var largeImg = document.getElementById("cool-exp");
      largeImg.ariaHidden = "true";
      largeImg.setAttribute("hidden", "");
  })
}

function expandItemAwesome() {
  var expandbtn = document.getElementById("expand-btn-awesome");
  expandbtn.addEventListener("click", () => {
    var largeImg = document.getElementById("awesome-exp");
    largeImg.ariaHidden = "false";
    largeImg.removeAttribute("hidden")
  })

  var itemCloseIcon = document.getElementById("item-close-icon-img-awesome");
  itemCloseIcon.addEventListener("click", () => {
      var largeImg = document.getElementById("awesome-exp");
      largeImg.ariaHidden = "true";
      largeImg.setAttribute("hidden", "");
  })
}

function expandItemPerfect() {
  var expandbtn = document.getElementById("expand-btn-perfect");
  expandbtn.addEventListener("click", () => {
    var largeImg = document.getElementById("perfect-exp");
    largeImg.ariaHidden = "false";
    largeImg.removeAttribute("hidden")
  })

  var itemCloseIcon = document.getElementById("item-close-icon-img-perfect");
  itemCloseIcon.addEventListener("click", () => {
      var largeImg = document.getElementById("perfect-exp");
      largeImg.ariaHidden = "true";
      largeImg.setAttribute("hidden", "");
  })
}
