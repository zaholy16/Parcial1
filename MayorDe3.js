var x=Math.floor(Math.random()*20)+1;
var y=Math.floor(Math.random()*20)+1;
var z=Math.floor(Math.random()*20)+1;

console.log(x,y,z);

if(x>y && x>z)
{
    console.log("El numero mayor es:",x);
}
else
{
    if(y>x && y>z)
    {
        console.log("El numero mayor es:",y);
    }
    else
    {
        if(z>x && z>y)
        {
            console.log("El numero mayor es:",z);
        }
    }
}
