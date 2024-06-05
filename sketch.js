let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement ("h2", "Recomendador de Filmes");
  createSpan("Sua idade: ");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de Fantasia?");
  campoAventura = createCheckbox("Gosta de Aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();  
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia,gostaDeAventura);
  
  fill(color(70,0,110));
  textSize(38);
  textAlign(CENTER,CENTER);
  text(recomendacao,width/2,height/2);
}

function geraRecomendacao(idade,gostaDeFantasia,gostaDeAventura){
  if (idade>=10){
    if (idade>=14){
      return "O menino que descobriu o vento";
    } else{
      if(idade>=12){
        if(gostaDeFantasia||gostaDeAventura){
         return "Homem Aranha no aranhaverso";
        }else{
          return "Ladrões de bicicleta";
        }
      }else{
        if(gostaDeFantasia){
          return "As aventuras de pi";
        }else{
          return "Despois da chuva";
        }
      }
    }
  }else{
    if(gostaDeFantasia){
      return "A viagem de Chihiro";
    }else{
      return "O feitiço do tempo";
    }
  }
}
