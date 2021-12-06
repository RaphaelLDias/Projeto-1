function itemDigitado (){
  const novoItem = document.getElementById('novoItem').value
  document.getElementById('novoItem').value = ""
  return novoItem
}

function criarLinha () {
  const lista = document.getElementById('lista')
  const item = document.createElement('li')
  
  //criando botão de excluir
  const button = document.createElement('input')
  button.type = "button"
  button.value = "x"
  
  //criando o checkbox
  const checkBox = document.createElement('input')
  checkBox.type = "checkbox"
  checkBox.name = "check"
  checkBox.id = "check"
  checkBox.value = "check"

  //função line-through
  checkBox.addEventListener("change", function(event){
    console.log(event.currentTarget)
  event.currentTarget.parentElement.style.textDecoration = "line-through" 
  })

  item.innerHTML += `
  <div>${itemDigitado()}</div>`
button.addEventListener("click", removeLinha)

  item.appendChild(checkBox)
  item.appendChild(button)
  lista.appendChild(item)
 
}

function removeLinha (event) {
  event.currentTarget.parentElement.remove()
}

function setLocalStorage(item,novoItem){
    localStorage.setItem('item','novoItem')
  }
