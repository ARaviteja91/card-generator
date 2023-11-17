function testVariable(){
    var canvas = document.getElementById("myCanvas"); 
    var name = document.getElementById("name").value;
    var des = document.getElementById("des").value;
    var tel = document.getElementById("tel").value;
    var mail = document.getElementById("mail").value;
    var loc = document.getElementById("loc").value;



    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "#cc1010";
    ctx.fillRect(0, 0, 350, 350);
    ctx.globalCompositeOperation = "source-over";

    ctx.transform(1,0,-0.3,1,150,0);
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = -1;
    ctx.shadowColor = "#000";
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,350,350);
    ctx.globalCompositeOperation = "source-over"

    ctx.transform(1,0,0.3,1,0,0);
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowColor = "white";
    ctx.font = " bold 20px Arial";
    ctx.fillStyle = "none";      
    ctx.fillText(name, -140, 25);

    ctx.font = " 8px Arial";
    ctx.fillStyle = "caption";      
    ctx.fillText(des, -100, 35);

    ctx.font = " 14px Arial";
    ctx.fillStyle = "black";      
    ctx.fillText(tel, 10, 45);

    ctx.font = " 14px Arial";
    ctx.fillStyle = "black";      
    ctx.fillText(mail, 10, 75);

    ctx.font = " 14px Arial";
    ctx.fillStyle = "black";      
    ctx.fillText(loc, 10, 115);     
    
    
}

 