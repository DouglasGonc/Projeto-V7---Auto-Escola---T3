//--INICIO----Script-0---------
//--FIM-------Script-0---------

//--INICIO----Menu-Fixo---------

//--FIM-------Menu-Fixo---------

//--INICIO----Sanduiche---------
function toggleSanduiche() {
    var pao2 = document.getElementById('pao2');
    var pao1 = document.getElementById('pao1');
    var pao3 = document.getElementById('pao3');

    pao2.classList.toggle('hide');
    pao1.style.marginTop = pao2.classList.contains('hide') ? '0px' : '10px';
    pao3.style.marginTop = pao2.classList.contains('hide') ? '0px' : '-10px';
    pao1.style.transform = pao2.classList.contains('hide') ? 'rotate(45deg)' : 'rotate(0deg)';
    pao3.style.transform = pao2.classList.contains('hide') ? 'rotate(-45deg)' : 'rotate(0deg)';

    var menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.toggle('show');
    menuMobile.style.maxHeight = menuMobile.scrollHeight + "px";
}
//--FIM-------Sanduiche---------

//--INICIO----Animação-Carro---------
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width = scrolled + "%";
    document.getElementById("car").style.left = (scrolled - 15) + "%";

    if (scrolled == 100) {
        document.getElementById("sin-1").style.display = "none";
        document.getElementById("sin-2").style.display = "none";
        document.getElementById("sin-3").style.display = "block";
    } else if (scrolled >= 70) {
        document.getElementById("sin-1").style.display = "none";
        document.getElementById("sin-2").style.display = "block";
        document.getElementById("sin-3").style.display = "none";
    } else {
        document.getElementById("sin-1").style.display = "block";
        document.getElementById("sin-2").style.display = "none";
        document.getElementById("sin-3").style.display = "none";
    }
}
//--FIM-------Animação-Carro---------