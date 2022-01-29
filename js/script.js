function myFunction(x) {
    x.classList.toggle("change")   
  }

  function changeMenu() {
    var x = document.getElementById("navi")
    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }
  }
