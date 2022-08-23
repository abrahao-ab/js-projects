function testes()
{
    //Promise: Vai ter resolver ou não resolver, se der bom, deu, se n der n deu.
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            const erro = false;
            if(erro)
            {
                reject("Deu ruim fml");
            }
            else
            {
            resolve("A promise foi resolvida com sucesso");
            }     
        }, 10000);
       
    })
}

//É assim que a gente vê se deu bom ou ruim
/*testes().then(function(res)
{
    alert(res);
}).catch(function(err)
{
    alert(err);
})*/

//A function testes2 só será exibida após ter resolvido a testes  
async function testes2()
{
    await testes().then(function(res)
    {
        alert(res);
    });
    alert('olá');
}
testes2();