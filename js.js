let btnComparar = document.getElementById('btnExecutarComparacao')
let btnLimpar = document.getElementById('btnLimpar')

btnComparar.addEventListener('click',function(e){
    e.preventDefault()
    
    let recipiente1 = Number(document.getElementById('vasilhame1').value) 
    let ValorRecipiente1 = Number(document.getElementById('valor1').value)

    let recipiente2 = Number(document.getElementById('vasilhame2').value) 
    let ValorRecipiente2 = Number(document.getElementById('valor2').value)

    let recipiente3 = Number(document.getElementById('vasilhame3').value) 
    let ValorRecipiente3 = Number(document.getElementById('valor3').value)

    let customl1 = ValorRecipiente1/recipiente1
    let customl2 = ValorRecipiente2/recipiente2
    let customl3 = ValorRecipiente3 / recipiente3
    
    if ( recipiente1 == 0 && ValorRecipiente1 == 0 && recipiente2 == 0 & ValorRecipiente2 ==0){
        alert("Insira um valor")
    }


    if (ValorRecipiente3 == 0 && recipiente3 == 0){
        maisBarato = Math.min(customl1,customl2)
    }else{
        maisBarato = Math.min(customl1,customl2,customl3)
    }


    if(maisBarato == customl1) // Lógica para comparar os valores da va
    {
        document.querySelector('.input-wrapper:nth-child(1) h2').classList.add('ativo')
        document.querySelector('.input-wrapper:nth-child(1) label').classList.add('ativo')
        document.querySelector('.labelValor1').classList.add('ativo');
    }else if(maisBarato == customl2){
        document.querySelector('.input-wrapper:nth-child(2) h2').classList.add('ativo')
        document.querySelector('.input-wrapper:nth-child(2) label').classList.add('ativo')
        document.querySelector('.labelValor2').classList.add('ativo');
      
    }else if((maisBarato == customl3) && ValorRecipiente3 != 0 && recipiente3 != 0){
        document.querySelector('.input-wrapper:nth-child(3) h2').classList.add('ativo')
        document.querySelector('.input-wrapper:nth-child(3) label').classList.add('ativo')
        document.querySelector('.labelValor3').classList.add('ativo');
   
    }

})

btnLimpar.addEventListener('click',function(){
    location.reload()
})