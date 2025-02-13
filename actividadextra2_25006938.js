var aleatorio = Math.floor(Math.random() * 9) + 1
var dato
function jugarAdivinanza() {
  while (true) {
    dato = parseInt(prompt("Ingresa un número entre 3 y 6:"))

    if (dato >= 3 && dato <= 6) {
      break
    } else {
      alert("Número no válido. Debe ser entre 3 y 6. Intenta de nuevo.")
    }
  }
  var adivinanza = prompt(
    "¿Crees que tu número es mayor, menor o igual al de la computadora? Escribe 'mayor', 'menor' o 'igual",
  )
  let resultado
  if (
    (adivinanza === "mayor" && dato > aleatorio) ||
    (adivinanza === "menor" && dato < aleatorio) ||
    (adivinanza === "igual" && dato === aleatorio)
  ) {
    resultado = "¡Ha adivinado!"
  } else {
    resultado = "¡No ha adivinado!"
  }
  alert(
    `La computadora eligió ${aleatorio}, usted eligió ${dato}.\n` +
      `Su elección es ${adivinanza}. ${resultado}`,
  )
  var jugarOtraVez = prompt("¿Quieres jugar otra vez? Escribe SI o NO")

  if (jugarOtraVez == "SI") {
    jugarAdivinanza()
  } else {
    alert("Gracias por jugar Derick Martinez 2500693")
  }
}