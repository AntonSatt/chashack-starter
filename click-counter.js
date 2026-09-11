var button = document.getElementById("click-counter"), count = 0;
button.onclick = function(){
    count += 1;
    button.innerHTML = "Klicka mig!: " + count;
};