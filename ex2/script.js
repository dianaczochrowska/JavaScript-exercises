window.onload = function() {
    var slideIndex = 1;
    var slideID = [1, 2, 3, 4, 5, 6, 7, 8];
    let button1 = document.getElementById("btn1");
    let button2 = document.getElementById("btn2");

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
        document.getElementById(id1).style.opacity = "0.7";
        }
        var id2 = "min" + slideIndex;
        document.getElementById(slideIndex).style.display = "block"
        document.getElementById(id2).style.opacity = "1";
    }
}
