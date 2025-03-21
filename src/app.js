window.onload = function () {
  let pronoun = ['the', 'our', 'you', 'their'];
  let adj = ['great', 'big', 'beautiful', 'little'];
  let noun = ['chair', 'car', 'dog', 'sister'];
  let extension = ['.com', '.net', '.us', '.io'];

  let resultado = ""; 

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extension) {
          let dominio = p + a + n + ext;
          console.log(dominio); 
          resultado += dominio + "<br>"; 
        }
      }
    }
  }

  let myTitle = document.getElementById("dominio");
  myTitle.innerHTML = resultado; 
};