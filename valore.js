function Valore(x)
{
    var suma=0,op=0;
    var nume=1,factorialdeno=1;
    for(var i=1; i<=x; i++)
    {
        factorialdeno*=i;
        op=nume/factorialdeno;
        suma+=op;
    }
    return suma+1;
}

console.log("El valor de 'e' es:",Valore(15));