
setInterval(()=>{
    d=new Date();
    hr=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    sec_rotate=sec*6;
    min_rotate=min*6 +(sec/10);
    hr_rotate=hr*30+(min/2)+(sec/120);
    // second.style.transform=`rotate(${sec_rotate}deg)`;
    // minute.style.transform=`rotate(${min_rotate}deg)`;
    // hour.style.transform=`rotate(${hr_rotate}deg)`;
    //if id id given U CAN use ABOVE 
    let secKey= document.querySelector(".second")
    let minKey=document.querySelector(".minute")
    let hrKey=document.querySelector(".hour")
    secKey.style.rotate=`${sec_rotate}deg`;
    minKey.style.rotate=`${min_rotate}deg`;
    hrKey.style.rotate=`${hr_rotate}deg`;
},1000); 