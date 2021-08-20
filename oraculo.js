var escolha = prompt("Sobre o que você gostaria de saber?")

escolha = parseInt(Math.random() * 2)
//alert(escolha)
if(escolha == 0){
  document.write("<h2>" + "Sim" + "</h2>")
}
else{document.write("<h2>" + "Não" + "</h2>")}