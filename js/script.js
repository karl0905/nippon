//filter fra w3schools

//her tildeler den classen ".show" til de elementer der opfylder filterkravende, og fjerner .show fra dem der ikke gør
filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Tilføjer "active" class til den knap der bliver trykket på, så man kan se hvad man sorterer efter
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// modal

var modal = document.getElementById("modal");


var btn = document.getElementById("modal-btn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

var modal = document.getElementById("myModal");


var closeBtn = document.getElementsByClassName("close")[0];


function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


closeBtn.addEventListener("click", closeModal);


window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});



// --------------- Popup kurv -----------------------
function show() {
  document.getElementById("popup_kurv").style.display = "block";
}

function hide() {
  document.getElementById("popup_kurv").style.display = "none";
}

// --------------- log-in --------------
function check() {
  var user = "johan99"
  var pass = "johan99"
  let login = document.getElementById("login").value
  let password = document.getElementById("password").value
  if (login == user && password == pass) {
    alert("Rigtigt login, du viderestilles...")
    window.location.href = "index.html"
  } else {
    alert("Forkert brugernavn eller adgangskode. Prøv igen")
  }
}
