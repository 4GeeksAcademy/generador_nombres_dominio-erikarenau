window.onload = function () {
  let pronouns = ['the', 'our', 'you', 'their'];
  let adjectives = ['great', 'big', 'beautiful', 'little'];
  let nouns = ['chair', 'car', 'dog', 'sister'];
  let extensions = ['.com', '.net', '.us', '.io'];

  let resultado = ""; 

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          let dominio = pronoun + adjective + noun + extension;
          console.log(dominio); 
          resultado += dominio + "<br>"; 
        }
      }
    }
  }

  let myTitle = document.getElementById("dominio");
  myTitle.innerHTML = resultado; 
};