var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>
{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');   
 

    items.push(
        {
            nome: nomeProduto.value,
            preco: precoProduto.value
        }
    );
    /*<div class="lista-produto-single">
    <h3>Red Bull</h3>
    <h3 class="price-produto"><span>R$ 20,00</span></h3>
    </div>*/

    let listaprodutos = document.querySelector('.lista-produtos');
    listaprodutos.innerHTML ="";
    let soma = 0;
     
    items.map(function(val)
    {
        if(val.nome == "")
        {
            alert("Nome não pode ser vazio!");
            return; 

            //Tá com um errinho na iteração, mas não escreve quando o nome é vazio. Só fica dando alertas cumulativos
        }
        if(val.preco == "")
        {
            val.preco = parseFloat("0,00");
        }
        soma+=parseFloat(val.preco);
        listaprodutos.innerHTML+=`
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto"><span>R$ `+val.preco+`</span></h3>
        </div>
        `
    })
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let totalSoma = document.querySelector('.soma-produto h1');
    totalSoma.innerHTML =
    `Total: R$ `+soma;

});

    document.querySelector('button[name=limpar').addEventListener('click',()=>
    {
        items = [];

        document.querySelector('.lista-produtos').innerHTML = "";
        document.querySelector('.soma-produto h1').innerHTML = "Total: R$ 00,00"
    })