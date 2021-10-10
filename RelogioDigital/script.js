//setInterval, vai da "refresh" na função a cada segundo!

setInterval (function clock(){
    var time = new Date();
    var hor = time.getHours();
    var min = time.getMinutes();
    var seg = time.getSeconds(); //pegara as horas, minutos e segundos de agora

    if(hor < 10){
        hor="0"+hor;
    }
    if(min < 10){
        min="0"+min;
    }
    if(seg < 10){
        seg="0"+seg;
    }  //isso vai por o 0 na frente do numero, caso ele seja menor que 10, ou seja, tenha menos de 2 casas(1 a 9)

    var timer = `${hor}:${min}:${seg}`

    var alt = document.getElementById("time")

    alt.textContent = `Now it's ${timer}`
   
},1000
  //função e milisegundos - vai reativar a função a cada segundo

)


setInterval (function day(){
    var image = document.getElementById("img");
    var time = new Date();
    var hor = time.getHours();
   

// dia = 06:00 -- 12:00
    if (hor >= 6 && hor <=12){
        document.body.style.backgroundColor = "#87deab";
        image.src = 'css/images/morning.jpg'
    }
// tarde = 12:00 -- 18:00
    else if (hor > 12 && hor <18){
        document.body.style.backgroundColor = "#deb887";
        image.src = 'css/images/evening.jpg'
    }
// noite = 18:00 -- 06:00
    else{
        document.body.style.backgroundColor = "#04203a";
        image.src = 'css/images/night.jpg'
    }
        
}, 1000)
