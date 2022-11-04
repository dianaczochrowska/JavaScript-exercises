document.addEventListener('DOMContentLoaded', (event) => {
  const textArea = document.getElementById('textarea');
  const textDisplay = document.getElementById('text');
  const dropdown = document.getElementById('dropdown');
  const button = document.getElementById('btn');
  var text;
  var dropvalue;


  textArea.addEventListener("input", function() {
    text = this.value;
    changeDiv(text);
  })

  dropdown.addEventListener("change", function() {
    dropvalue = this.value;
  })

  button.addEventListener("click", function() {
    changeStyle(dropvalue);
  })


  function changeDiv(string) {
    textDisplay.innerHTML = string;
  }

  function changeStyle(value) {
    if (value == 1){
      textDisplay.className = "first";
    }
    else if (value == 2){
      textDisplay.className = "second";
    }
    else if (value == 3){
      textDisplay.className = "third";
  }
  }
})
