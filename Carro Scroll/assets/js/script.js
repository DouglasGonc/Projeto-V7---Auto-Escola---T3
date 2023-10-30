//--INICIO----Topo-1---------
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    document.getElementById("progress-bar").style.width = scrolled + "%";
    document.getElementById("car").style.left = (scrolled - 15) + "%";

    if (scrolled == 100){
        document.getElementById("sin-1").style.display = "none";
        document.getElementById("sin-2").style.display = "none";
        document.getElementById("sin-3").style.display = "block";
    }else if(scrolled >= 70){
        document.getElementById("sin-1").style.display = "none";
        document.getElementById("sin-2").style.display = "block";
        document.getElementById("sin-3").style.display = "none";
    }else{
        document.getElementById("sin-1").style.display = "block";
        document.getElementById("sin-2").style.display = "none";
        document.getElementById("sin-3").style.display = "none";
    }
}
//--FIM-------Topo-1---------