function SerieMaclaurin(s)
{
    var num=1, factorialdeno=1, cuantos=10;
    var op2=0, suma=1;
    for(var i=1; i<=cuantos; i++)
    {    
        factorialdeno*=i;
        num=s**i;
        op2=(num/factorialdeno)
        suma+=op2;
    }
    return suma;
}
console.log("El resultado es:",SerieMaclaurin(10));
