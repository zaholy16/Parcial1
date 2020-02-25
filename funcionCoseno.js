function coseno(x, cuantos)
{
    var op=0;
    var expo=0,negativo=1;
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
console.log("Referencia: Cos(2)");
console.log("El resultado es: ",coseno(2,15));
