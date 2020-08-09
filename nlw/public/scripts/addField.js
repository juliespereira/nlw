//procurar o botão
document.querySelector("#add-time")

//quado clicar no botão
.addEventListener('click', cloneField) 

//Executar uma ação
function cloneField(){
    //console.log("Hello") print no console 

    //duplicar os campos de horário
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) //o campo q quero duplicar

    //limpar os campos antes de colocar na pag
    const fields = newFieldsContainer.querySelectorAll('input')

    fields.forEach(function(field){ //para cada um deles, limpar
        field.value=""
    })

    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer) //aonde eu quero colocor . pega o q vai duplicou
}