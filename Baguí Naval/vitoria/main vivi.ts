
// Batalha Naval - Criar e "Desenhar" o mapa

var clc = require("cli-color");
var prompt = require("prompt-sync")();


var clc = require("cli-color");
var prompt = require("prompt-sync")();
// batalha naval

// 1. Criar e "Desenhar" o mapa

const mapaJogador: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
]
const mapaAdversario: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
<<<<<<< HEAD
<<<<<<< HEAD
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
=======
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
>>>>>>> 3418f6b6c62c8c82caf18b8b394df599f64002a9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

<<<<<<< HEAD
=======
function vezAdversario(mapa: number[][]): number[][]{
    var x = Number(prompt('Digite uma coordenada X: '))
    var y = Number(prompt('Digite uma coordenada Y: '))
    if (mapa[x][y] == 1) {
        console.log('Você acertou o navio :)')
    } else {
        console.log('Você não acertou o navio :(')
    }
    mapa[x][y] = 2;
    for (var linha of mapa) {
        printarCor(linha.join(''));
    }

    return mapa;
}

>>>>>>> 3418f6b6c62c8c82caf18b8b394df599f64002a9
function printarCor(linha: string): void {
=======
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
];
// const mapaAdversario: number[][] = Array(8).fill(Array(10).fill(0));
function printarCor(linha:string):void {
>>>>>>> feec07723cac3261905b718f82def572a3387aa4
    linha = linha.replaceAll('0', clc.bgBlue('  '));
    linha = linha.replaceAll('1', clc.bgBlack('  '));
    linha = linha.replaceAll('2', clc.bgRed('  '));
    console.log(linha);
}

<<<<<<< HEAD
<<<<<<< HEAD
function verificarNavio(mapa: number[][]): boolean {
    for (var linha of mapa) {
        if (linha.includes(1)) {
            return true
        }
    }
    return false
}

function vezAdversario(mapa: number[][]): number[][] {
    var x = Number(prompt('Digite uma coordenada X: '))
    var y = Number(prompt('Digite uma coordenada Y: '))
    if (mapa[x][y] == 1) {
        console.log('Você acertou o navio!')
    } else {
        console.log('Você não acertou o navio!')
    }
    mapa[x][y] = 2;
    for (var linha of mapa) {
        printarCor(linha.join(''));
    }
    return mapa; // <==== Biston  vai se foder 
}

function mostrarMapas(mapa: number[][]): void {
    while (verificarNavio(mapa)) {
        mapa = vezAdversario(mapa); // <==== Biston  vai se foder 
    }
    console.log("Você venceu XD")
}
mostrarMapas(mapaJogador);
=======
function verificaNavio(mapa: number[][]): boolean {
=======
function verificarNavio(mapa: number[][]): boolean {
>>>>>>> feec07723cac3261905b718f82def572a3387aa4
    for (var linha of mapa) {
        if (linha.includes(1)) {
            return true;
        }
    }
    return false;
}
function vezAdversario(mapa: number [][]): number[][]{
        var x = Number(prompt('Digite uma coordenada X: '))
        var y = Number(prompt('Digite uma coordenada Y: '))
        if (mapa[x][y] == 1) {
        console.log("você acertou o navio :D")
    }   else {
        console.log("você não acertou :(")
    }
    mapa[x][y] = 2;
    for (var linha of mapa) {
        printarCor(linha.join(''));
    }
    return mapa;
}
<<<<<<< HEAD
mostrarMapa(mapaJogador, mapaAdversario);
>>>>>>> 3418f6b6c62c8c82caf18b8b394df599f64002a9
=======
function mostrarMapas(mapaJogador: number[][], mapaAdversario: number[][]):void{
    while(verificarNavio(mapaJogador)) {
        mapaJogador = vezAdversario(mapaJogador);
    } 
    console.log("você vendeu XD")
}
mostrarMapas(mapaAdversario);
>>>>>>> feec07723cac3261905b718f82def572a3387aa4
