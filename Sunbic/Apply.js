var pop = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    pop.style.display = "block";
}
span.onclick = function(){
    pop.style.display = "none";
}

window.onclick = function(event){
    if (event.target == pop){
        pop.style.display = "none";
    }
}
