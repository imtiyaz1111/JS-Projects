const endDate="1 April 2026 10:00 PM";

document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input")

const clock = ()=>{
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end - now)/1000;
    console.log(diff);
    if(diff < 0) return;
     // conver into Days
    inputs[0].value=Math.floor(diff / 3600 / 24);
    // conver into Hours
    inputs[1].value=Math.floor((diff / 3600) % 24);
    // conver into Minutes
    inputs[2].value=Math.floor((diff / 60) % 60);
    // conver into Seconds
    inputs[3].value=Math.floor((diff) % 60);
}
clock();
setInterval(
    () =>{
        clock()
    },
    1000
)