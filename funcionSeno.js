function seno(x, cuantos)
{
    var op=0;
    var expo=1,negativo=1;
    for(var i=1; i<=cuantos; i++)
    {
        var factorial=1;
        for(var k=1; k<=expo; k++)
        {
            factorial*=k;
        }

        op+= negativo*(x**expo/factorial);
        expo+=2;
        negativo*=-1;
    }
    return op;
}
console.log("Referencia: Sin(3)");
console.log("El resultado es: ",seno(3,15));
