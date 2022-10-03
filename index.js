// const para o pacote http
const http = require("http");

// const para criar o servidor http
const server = http.createServer((requisicao, resposta) => {
  // configurando a resposta para ser um HTML
  resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  // const para obter a url da pag 
  const url = requisicao.url;

  // colocando cada uma das rotas
  if (url == "/") {
    // http://localhost:3000/
    resposta.write("<h1>Início</h1>");
  } else if (url == "/modelos") {
    // http://localhost:3000/modelos
     resposta.write("<h1>aqui você encontra os modelos da marca</h1>");
     resposta.write("<p>carros diversos uau</p>");
   
  } else if (url == "/cores") {
    // http://localhost:4000/cores
    resposta.write("<h1>Cores e tons</h1>");
    resposta.write("<p>vermelho, amarelo etc..</p>");
  } else if (url == "/historia") {
    // http://localhost:4000/historia
    resposta.write("<h1>História da marca</h1>");
    resposta.write("<p>vermelho, amarelo etc..</p>");
  }

  // finalizando a resposta
  resposta.end();
});

// definindo uma porta de acesso ao servidor e colocando uma mensagem para avisar que deu certo a criação dele
server.listen(3000, console.log("Servidor rodando"));
