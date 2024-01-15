//Projeto Jogo Heróis

//Definir uma classe para o herói, com nome, idade e o tipo. Um método atacar e ao fazer a ação, mostrar mensagem dizendo o tipo e qual ataque foi utilizado.

class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia.";
        break;
      case "guerreiro":
        ataque = "espada.";
        break;
      case "monge":
        ataque = "artes marciais.";
        break;
      case "ninja":
        ataque = "shuriken.";
        break;
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let heroi1 = new heroi("Gavião Arqueiro", 55, "guerreiro");
let heroi2 = new heroi("Feiticeira Escarlate", 37, "mago");
let heroi3 = new heroi("Shang-Chi", 24, "monge");
let heroi4 = new heroi("Genji", 35, "ninja");

//Chama método

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
