const path = require("path");
// Apenas o nome do aquivo atual
console.log(path.basename(__filename));
// nome do diretorio atual
console.log(path.dirname(__filename));
// extensão do arquivo
console.log(path.extname(__filename));
// cria um objeto Path
console.log(path.parse(__filename));
// Junta Paths de arquivos
console.log(path.join(__dirname, "test", "test.html"));
