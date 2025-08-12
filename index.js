class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === 'mago') {
      ataque = 'magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'espada';
    } else if (this.tipo === 'monge') {
      ataque = 'artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'shuriken';
    } else {
      ataque = 'ataque desconhecido';
    }

    print(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso:
const heroi1 = new Heroi('Gandalf', 150, 'mago');
const heroi2 = new Heroi('Conan', 30, 'guerreiro');
const heroi3 = new Heroi('Pai', 45, 'monge');
const heroi4 = new Heroi('Shadow', 25, 'ninja');

heroi1.atacar(); // o mago atacou usando magia
heroi2.atacar(); // o guerreiro atacou usando espada
heroi3.atacar(); // o monge atacou usando artes marciais
heroi4.atacar(); // o ninja atacou usando shuriken
