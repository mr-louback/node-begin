// MODULO DE ARQUIVOS DO SISTEMA FILE SISTEM
const fs = require("fs");
const path = require("path");
/* MANIPULAÇÃO DE PASTAS */

// Cria pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("erro: ", error);
//   }
//   console.log("Pasta criada com sucesso");
// });

// Cria arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "node test hello",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);
// Adiciona à um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "node world hello",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo alterado com sucesso!");
  }
);
//  Lendo um arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(data);
  }
);

// fs.existsSync() // verifica se caminho existe
// fs.mkdirSync() // cria uma pasta
// fs.renameSync() // renomear uma pasta
// fs.rmdir() // deletar uma pasta

// if (!fs.existsSync('./public')) {
//     fs.mkdirSync('./public', (err)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Pasta criada com sucesso!");
//     })
// }else{
//     console.log('A pasta "public" ja existe!');
// }

// METODO MAIS SIMPLES DE FAZER O QUE ESTA ACIMA
// fs.existsSync('./public') || fs.mkdirSync('./public')

// RENOMEANDO PASTA
// if (fs.existsSync('./public')) {
//     fs.renameSync('./public', './nova-pasta', (err)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Pasta renomeada com sucesso!");
//     })
// }
