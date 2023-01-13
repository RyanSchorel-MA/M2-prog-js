class App
{
    huis(x,y)
    {
        
        let canvas = document.getElementById("canvasId")
        console.log(canvas);
        let g = canvas.getContext("2d");
        let randomgetal =  Math.random(0,1);
        console.log(randomgetal);

        //dak
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(x+150,y+50);
        g.lineTo(x+100,y+150);
        g.lineTo(x+300,y+200);
        g.lineTo(x+350,y+100);
        g.closePath();
        g.stroke();
        g.fill();

        //muren
        g.beginPath();
        g.fillStyle = "green"
        g.moveTo(x+300,y+200);
        g.lineTo(x+100,y+150);
        g.lineTo(x+100,y+250);
        g.lineTo(x+300,y+300);
        g.lineTo(x+400,y+250);
        g.lineTo(x+400,y+150);
        g.lineTo(x+350,y+100);
        g.lineTo(x+300,y+200);
        g.closePath();
        g.stroke();
        g.fill();

        //raam
        g.beginPath();
        if (randomgetal < 0.5)
        {
            g.fillStyle = "black"
        }
        else if (randomgetal > 0.5)
        {
            g.fillStyle = "yellow"
        }
        else
        {
            g.fillStyle = "red"
        }
        g.moveTo(x+250,y+215);
        g.lineTo(x+150,y+190);
        g.lineTo(x+150,y+240);
        g.lineTo(x+250,y+265);
        g.closePath();
        g.stroke();
        g.fill();



      
    }
    
    boom()
    {
        let canvas = document.getElementById("canvasId")
        console.log(canvas);
        let g = canvas.getContext("2d");
            
        //boom
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(x+500,y+200);
        g.lineTo(x+500,y+175);
        g.lineTo(x+525,y+200);
        g.lineTo(x+550,y+225);
        g.closePath();
        g.stroke();
        g.fill();

    }

}

let app = new App();
app.huis(100,0);
app.boom();