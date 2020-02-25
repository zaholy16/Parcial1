function ln(x,veces)
{
    var num=1, deno=0, expo=0, suma=0, divi=0,op=0,op2=0;
    for(var i=1; i<=veces; i++)
    {
        deno++;
        divi=num/deno;
        expo++;
        op=(x-1)/x;
        op2=op**expo;
        op2*=divi;
        suma+=op2;
    }
    return suma;
}
console.log("Referencia: El ln de 2 = 0.69314718..");
console.log("El resultado es: ",ln(2,20));