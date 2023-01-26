class Kaart
{
    constructor()
    {
        this.c = document.getElementById("myCanvas");
        this.ctx = this.c.getContext("2d");
    }

    setBackground()
    {
        let ctx = this.ctx
        ctx.fillStyle = "#222";
        ctx.fillRect(0,0,1000,600);

     
    }

    drawVillage(x,y )
    {
        let g = this.ctx
        let randomgetal =  Math.random(0,1);

        g.strokeStyle = "white"

        //De daken
        g.beginPath();
        g.fillStyle = "#444"
        g.moveTo(x+120,y+90);
        g.lineTo(x+100,y+150);
        g.lineTo(x+440,y+200);
        g.lineTo(x+350,y+100);
        g.closePath();
        g.stroke();
        g.fill();

        //De muren
        g.beginPath();
        g.fillStyle = "#888"
        g.moveTo(x+400,y+200);
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

        //De ramen
        g.beginPath();
            g.fillStyle = "#CCD071"
        g.moveTo(x+250,y+215);
        g.lineTo(x+150,y+190);
        g.lineTo(x+150,y+240);
        g.lineTo(x+250,y+265);
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawTree(x, y) {
        let ctx = this.ctx
        // De boomstam
        ctx.fillStyle = "#9E5F20";
        ctx.fillRect(x-10, y, 20, 100);
      
        // De kerstboom
        ctx.beginPath();
        ctx.moveTo(x - 30, y+75);
        ctx.lineTo(x + 50, y+95);
        ctx.lineTo(x, y - 155);
        ctx.lineTo(x - 60, y+75);
        ctx.fillStyle = "Green";
        ctx.strokeStyle = "Black";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#D29116"
        ctx.arc(y+50, x-100, 13, 0, 2 * Math.PI);
        ctx.arc(y+10, x+20, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#D522C4"
        ctx.arc(y+70, x-8, 12, 0, 2 * Math.PI);
        ctx.arc(y+35, x-50, 8, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#BA1D1D"
        ctx.arc(y+40, x, 10, 0, 2 * Math.PI);
        ctx.arc(y+60, x-60, 6, 0, 2 * Math.PI);
        ctx.fill();

    {}
      
    }
        // De 2 Teksten
    tekst()
    {
        let ctx = this.ctx

        ctx.fillStyle = "black"
        ctx.font = "35px cursive";
        ctx.fillStyle = "white";
        ctx.fillText("Fijn kerstmistoegwenst", 45, 76);
        ctx.fillText("En alvast een gelukkig nieuwjaar!", 35, 540);
    }
    // Gemakkt door Ryan Schorel
    Frame()
    {
        let scope = this
        setInterval(function () { scope.doGameFrame() }, 33)
    }

    doGameFrame()
    {
        this.setBackground();
        this.drawVillage(500,250);
        this.drawVillage(350,-30);
        this.tekst();
        this.drawTree(450,400);
        this.ctx.drawImage(this.foto, this.fotoX, this.fotoY);
        this.fotoX += 10;
        
    }
    
    
}

let kaart = new Kaart;
kaart.Frame();
