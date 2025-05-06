function updateclock()
       {
    let date=new Date();
    let hour=date.getHours();
    let Min=date.getMinutes();
    let Sec=date.getSeconds();
    let year = date.getFullYear();
    month = date.getMonth()+1;
    day = date.getDate();

    let session="AM";

    if(hour>12){
        hour -=12;
        session="PM";
    }
    if (hour === 0){
        hour=12;
    }
    if(Min<10){
        Min="0"+Min;
    }
    if(Sec<10){
        Sec="0"+Sec;
    }
    let time=hour+":  "+Min+"  :"+Sec+"   "+session;
    let dat=day+"      :  "+month+"    :     "+year;
    document.getElementById("datedisplay").innerHTML = dat;
    document.getElementById("clockdisplay").innerHTML = time;
    }
    setInterval(updateclock, 1000);