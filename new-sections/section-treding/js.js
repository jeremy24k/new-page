let TitleChange = document.getElementById('titles-chages');
let text = TitleChange.querySelectorAll('p');
let index = 1;
let percentage = index * -50;

setInterval(funtion(){
    TitleChange.style.transform = "translateY(-50%)";
},1000);