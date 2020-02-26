function dado()
{
    var num=Math.floor(Math.random()*6)+1;
    return num;
}

function avanzar()
{
    var avanza=0;
    var cara=dado();
    if(cara==1)
    {
        avanza+=3;
    }
    else if(cara==2 || cara==4 || cara==6)
    {
        avanza+=2;
    }
    else if(cara==3 || cara==5)
    {
        avanza++;
    }

    return avanza;
}

function corredores()
{
    var c1=0, c2=0;
    while(c1<100 && c2<100)
    {
        c1+=avanzar();
        console.log("Corredor 1 ",c1);
        c2+=avanzar();
        console.log("Corredor 2 ",c2);
    }

    if(c1<100)
    {
        console.log("C2 gano");
    }
    else if(c2<100)
    {
        console.log("C1 gano");
    }
    else
    {
        console.log("empate");
    }
}

corredores();

