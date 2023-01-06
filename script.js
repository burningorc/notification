function mark() {
    document.querySelector(".notification p span").innerText = 0;
    const back = document.querySelectorAll(".unread");
    for(let i = 0; i < back.length; i++){
        back[i].style.backgroundColor = "transparent";
    }
    const reds = document.querySelectorAll(".red");
    for(let i = 0; i < reds.length; i++){
        reds[i].style.display = "none";
    }
}