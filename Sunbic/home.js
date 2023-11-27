window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
        document.getElementById("header").style.background = "#fff";
        document.getElementById("sunbic").style.color = "#000";
        document.getElementById("header").style.boxShadow = "10px 0 10px grey"; 
        document.getElementById("myDIV").className = "newlink";
    } else {
        document.getElementById("header").style.background = "linear-gradient( #000,rgba(0,0,0,0.1))";
        document.getElementById("sunbic").style.color = "#fff";
        document.getElementById("header").style.boxShadow = "none";
        document.getElementById("myDIV").className = "navlink";

    }
}
