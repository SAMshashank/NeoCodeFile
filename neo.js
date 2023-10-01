/**
 * 
 * @param { token challange} str 
 * @returns 

function stringChallenge(str) {
  const palavrasSoltas = str.split(/[^a-zA-Z0-9']/);
  console.log(palavrasSoltas);

  for (let x = 0; x < palavrasSoltas.length; x++) {
    if (x > 0) {
      palavrasSoltas[x] =
        palavrasSoltas[x][0].toUpperCase() +
        palavrasSoltas[x].substring(1).toLowerCase();
      console.log(palavrasSoltas[x]);
    }
  }

  let palavraJunta = "";

  for (let x = 0; x < palavrasSoltas.length; x++) {
    palavraJunta = palavraJunta + palavrasSoltas[x];
  }
  console.log(palavraJunta);
  const token = "r1omjb4zc8f";
  const tokenSeparado = token.split("");
  const palavraJuntaSeparado = palavraJunta.split("");
  const tamanhoArray = tokenSeparado.length + palavraJuntaSeparado.length;
  let resultado = "";

  for (let x = 0; x < tamanhoArray; x++) {
    if (x < palavraJuntaSeparado.length) {
      resultado = resultado + palavraJuntaSeparado[x];
      // console.log(resultado)
    }
    if (x < tokenSeparado.length) {
      resultado = resultado + tokenSeparado[x];
    }
  }

  return resultado;
}

// Example usage
const input = "cats AND*Dogs-are Awesome";
const result = stringChallenge(input);
console.log(result);

// link  https://github.com/Diegofdev/String-Challenge-Coderbyte/blob/main/README.md
 */

/**
 * second question manu
 * @param{}str
 * @returns
 * 
 * 
 * function runLength(str) {
    if (str.length === 0) {
        return "";
    }

    let result = "";
    let currentChar = str[0];
    let count = 1;

    for (let i = 1; i < str.length; ++i) {
        if (str[i] === currentChar) {
            count++;
        } else {
            result += count.toString() + currentChar;
            currentChar = str[i];
            count = 1;
        }
    }

    // Add the count and character for the last sequence
    result += count.toString() + currentChar;

    const token='51dvyncj';

let valt=token.split("");
let valr=result.split("");
let main="";
const totalLength=valr.length+valt.length;

for(let i=0;i<totalLength;i++){
    if(i<valr.length){
        main=main+valr[i]
    }
     if(i<valt.length){
        main=main+valt[i]
    }
}


return main
}

const input = "aabbcde";
const encoded = runLength(input);
console.log(encoded); 



*/


// how to add more file 

// git add .

// git pull
//  git commit "name"

//  git push -u origin main