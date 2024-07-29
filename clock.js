

const hourget = document.getElementById("hours");
const minuteget = document.getElementById("minutes");
const secondget = document.getElementById("seconds");
const ampmget = document.getElementById("ampm");

function clockupdate(){
      
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h = h-12;
        ampm = "PM";
    }

    
    h =  h<10 ? "0" +  h :  h;
    m =  m<10 ? "0" +  m :  m;
    s =  s<10 ? "0" +  s :  s;
    hourget.innerText=h;
    minuteget.innerText=m;
    secondget.innerText=s;
    ampmget.innerText=ampm;

    setTimeout(()=>{
       clockupdate();
    },1000)
}

clockupdate();