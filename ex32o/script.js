document.addEventListener('DOMContentLoaded', (event) => {
  const dropdown = document.getElementById('dropdown');
  const container = document.getElementById('container');
  var dropvalue;

  dropdown.addEventListener("change", function() {
    dropvalue = this.value;
    changeBoxes(dropvalue);
  })

  function changeBoxes(value) {
    var children = container.children;
    console.log("children:", children);
    if (value == 0) {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    }
    else {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }

      for (var i = 1; i <= value; i++) {
        var div = document.createElement("div");
        div.setAttribute("id", i);
        div.className = "box";
        container.appendChild(div);
      }
    }
  }
});